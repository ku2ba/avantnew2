"use client"

import { useState, useEffect, useRef } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  trackFormOpen,
  trackFormStart,
  trackFormSubmitSuccess,
  trackFormSubmitError,
  trackFormClose,
  trackFormAbandon,
} from "@/lib/analytics"

interface ContactFormProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  formLocation?: "header" | "slider" | "team" | "widget"
  formId?: string
  slideId?: string
}

export default function ContactForm({
  open,
  onOpenChange,
  formLocation = "header",
  formId = "contact_callback",
  slideId,
}: ContactFormProps) {
  const [name, setName] = useState("")
  const [question, setQuestion] = useState("")
  const [phone, setPhone] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const [wasSubmitted, setWasSubmitted] = useState(false)
  const abandonTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const formStartTimeRef = useRef<number | null>(null)
  const hasStartedRef = useRef(false)
  const isSubmittingRef = useRef(false)

  // Синхронизируем refs с state
  useEffect(() => {
    hasStartedRef.current = hasStarted
  }, [hasStarted])

  useEffect(() => {
    isSubmittingRef.current = isSubmitting
  }, [isSubmitting])

  // Отслеживание открытия формы
  useEffect(() => {
    if (open) {
      const label = slideId
        ? `ContactForm Open (${formLocation} - Slide ${slideId})`
        : `ContactForm Open (${formLocation})`
      trackFormOpen(formLocation, formId, label, slideId)
      formStartTimeRef.current = Date.now()
      setHasStarted(false)
      setWasSubmitted(false)

      // Устанавливаем таймер для abandon (30 секунд без активности)
      abandonTimeoutRef.current = setTimeout(() => {
        if (hasStartedRef.current && !isSubmittingRef.current) {
          const abandonLabel = slideId
            ? `ContactForm Abandon (${formLocation} - Slide ${slideId})`
            : `ContactForm Abandon (${formLocation})`
          trackFormAbandon(formLocation, formId, abandonLabel)
        }
      }, 30000)
    } else {
      // При закрытии формы проверяем, был ли abandon (только если не была отправлена)
      if (!wasSubmitted && hasStartedRef.current && !isSubmittingRef.current && formStartTimeRef.current) {
        const abandonLabel = slideId
          ? `ContactForm Abandon (${formLocation} - Slide ${slideId})`
          : `ContactForm Abandon (${formLocation})`
        trackFormAbandon(formLocation, formId, abandonLabel)
      }

      // Отслеживаем закрытие формы только если она не была отправлена
      if (!wasSubmitted) {
        const closeLabel = slideId
          ? `ContactForm Close (${formLocation} - Slide ${slideId})`
          : `ContactForm Close (${formLocation})`
        trackFormClose(formLocation, formId, closeLabel)
      }

      // Очищаем таймер
      if (abandonTimeoutRef.current) {
        clearTimeout(abandonTimeoutRef.current)
        abandonTimeoutRef.current = null
      }
    }

    return () => {
      if (abandonTimeoutRef.current) {
        clearTimeout(abandonTimeoutRef.current)
      }
    }
  }, [open, formLocation, formId, slideId, wasSubmitted])

  // Отслеживание начала ввода
  const handleInputChange = () => {
    if (!hasStarted) {
      setHasStarted(true)
      const startLabel = slideId
        ? `ContactForm Start (${formLocation} - Slide ${slideId})`
        : `ContactForm Start (${formLocation})`
      trackFormStart(formLocation, formId, startLabel)

      // Сбрасываем таймер abandon при начале ввода
      if (abandonTimeoutRef.current) {
        clearTimeout(abandonTimeoutRef.current)
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, question, phone }),
      })

      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        throw new Error(data.error || "Ошибка отправки")
      }

      // Отслеживаем успешную отправку
      const successLabel = slideId
        ? `ContactForm Submit Success (${formLocation} - Slide ${slideId})`
        : `ContactForm Submit Success (${formLocation})`
      trackFormSubmitSuccess(formLocation, formId, successLabel)
      setWasSubmitted(true)

      // Очищаем форму и закрываем диалог
      setName("")
      setQuestion("")
      setPhone("")
      setIsSubmitting(false)
      setHasStarted(false)
      onOpenChange(false)
      alert("Заявка отправлена! Мы свяжемся с вами в ближайшее время.")
    } catch (error) {
      // Отслеживаем ошибку отправки
      const errorLabel = slideId
        ? `ContactForm Submit Error (${formLocation} - Slide ${slideId})`
        : `ContactForm Submit Error (${formLocation})`
      trackFormSubmitError(formLocation, formId, errorLabel, "network_error", String(error))
      setIsSubmitting(false)
      alert("Произошла ошибка при отправке. Попробуйте еще раз.")
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[31.25rem]">
        <DialogHeader>
          <DialogTitle>Оставьте заявку</DialogTitle>
          <DialogDescription>
            Заполните форму, и мы свяжемся с вами в ближайшее время
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Ваше имя</Label>
            <Input
              id="name"
              placeholder="Введите ваше имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="question">Ваш вопрос (кратко)</Label>
            <Textarea
              id="question"
              placeholder="Опишите ваш вопрос"
              value={question}
              onChange={(e) => {
                setQuestion(e.target.value)
                handleInputChange()
              }}
              required
              rows={3}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Ваш контактный телефон</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="89221022344"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value)
                handleInputChange()
              }}
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-[#c3a255] hover:bg-[#b8944a] text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Отправка..." : "Отправить"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
