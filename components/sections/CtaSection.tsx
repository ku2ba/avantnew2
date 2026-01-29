"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import ContactForm from "@/components/ContactForm"

export default function CtaSection() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <section className="relative py-20 sm:py-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/tild6338-3264-4461-b461-333536626666__1553818163_themis_3_.jpeg"
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6">
            Столкнулись с одной из проблем выше?
          </h2>
          <p className="text-xl sm:text-2xl text-white mb-8">
            Оставьте контактные данные и персональный менеджер свяжется с вами, внимательно
            выслушает проблему, ответит на все вопросы, оценит ситуацию и предложит оптимальный
            план действий.
          </p>
          <Button
            size="lg"
            className="bg-[#c3a255] hover:bg-[#b8944a] text-white text-base sm:text-lg px-8 py-6"
            onClick={() => setIsFormOpen(true)}
            data-analytics-event="lead_click"
            data-analytics-location="slider"
            data-analytics-action="leave_request"
            data-analytics-label="CTA Section Leave Request"
            data-analytics-form-id="contact_request"
          >
            ОСТАВИТЬ ЗАЯВКУ
          </Button>
        </div>
      </div>
      <ContactForm
        open={isFormOpen}
        onOpenChange={setIsFormOpen}
        formLocation="slider"
        formId="contact_request"
      />
    </section>
  )
}
