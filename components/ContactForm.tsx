"use client"

import { useState } from "react"
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

interface ContactFormProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function ContactForm({ open, onOpenChange }: ContactFormProps) {
  const [name, setName] = useState("")
  const [question, setQuestion] = useState("")
  const [phone, setPhone] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Формируем сообщение для Telegram
    const message = `Новая заявка с сайта:\n\nИмя: ${name}\nВопрос: ${question}\nТелефон: ${phone}`

    // Отправка через Telegram Web App или прямой редирект
    // Используем Telegram Web API для отправки сообщения в чат
    const telegramChatId = "shs969" // ID чата или username
    const telegramUrl = `https://t.me/${telegramChatId}?text=${encodeURIComponent(message)}`

    // Открываем Telegram с предзаполненным сообщением
    window.open(telegramUrl, "_blank")

    // Очищаем форму и закрываем диалог
    setName("")
    setQuestion("")
    setPhone("")
    setIsSubmitting(false)
    onOpenChange(false)
    alert("Заявка отправлена! Откройте Telegram для подтверждения.")
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
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
              onChange={(e) => setQuestion(e.target.value)}
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
              onChange={(e) => setPhone(e.target.value)}
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
