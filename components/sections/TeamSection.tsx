"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, Phone, MessageCircle } from "lucide-react"
import ContactForm from "@/components/ContactForm"

export default function TeamSection() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <section className="w-full py-12 px-6 bg-white">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-unbounded font-bold text-black">
          Команда
        </h2>
        <p className="text-sm sm:text-base font-unbounded text-black max-w-md">
          Команда юристов Авант - это сфокусированность на одном направлении. Индивидуальный подход к каждому делу и профессионализм
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <Card>
          <CardHeader className="p-0">
            <div className="relative w-full h-[450px] overflow-hidden rounded-t-lg">
              <Image
                src="/shamil.PNG"
                alt="Шамиль"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <CardTitle className="font-montserrat text-gray-900">Шамиль</CardTitle>
              <CardDescription className="font-montserrat text-gray-600">Руководитель</CardDescription>
            </div>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="p-0">
            <div className="relative w-full h-[450px] overflow-hidden rounded-t-lg">
              <Image
                src="/ivan.PNG"
                alt="Иван"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <CardTitle className="font-montserrat text-gray-900">Иван</CardTitle>
              <CardDescription className="font-montserrat text-gray-600">Юрист</CardDescription>
            </div>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="p-0">
            <div className="relative w-full h-[450px] overflow-hidden rounded-t-lg">
              <Image
                src="/kirill.PNG"
                alt="Кирилл"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <CardTitle className="font-montserrat text-gray-900">Кирилл</CardTitle>
              <CardDescription className="font-montserrat text-gray-600">Юрист</CardDescription>
            </div>
          </CardHeader>
        </Card>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-8 max-w-6xl mx-auto">
        <p className="text-lg sm:text-xl lg:text-2xl font-unbounded text-black text-left">

          Удаленная аудио или видео консультация с квалифицированным юристом по направлению
        </p>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="font-unbounded bg-black text-white hover:bg-gray-800"
              data-analytics-menu-trigger
              data-analytics-location="team"
              data-analytics-label="Team Consultation Menu"
            >
              Бесплатный созвон с юристом
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-56"
            data-analytics-menu-content
            data-location="team"
          >
            <DropdownMenuItem
              onClick={() => setIsFormOpen(true)}
              data-analytics-event="lead_click"
              data-analytics-location="team"
              data-analytics-action="callback"
              data-analytics-label="Team Callback"
              data-analytics-form-id="contact_callback"
            >
              <Phone className="mr-2 h-4 w-4" />
              <span>Заказать обратный звонок</span>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a
                href="tel:+79122285809"
                className="flex items-center w-full"
                data-analytics-event="lead_click"
                data-analytics-location="team"
                data-analytics-action="call"
                data-analytics-label="Team Call"
                data-analytics-phone="+79122285809"
              >
                <Phone className="mr-2 h-4 w-4" />
                <span>Позвонить нам</span>
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a
                href="https://t.me/avantekb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center w-full"
                data-analytics-event="lead_click"
                data-analytics-location="team"
                data-analytics-action="telegram"
                data-analytics-label="Team Telegram"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                <span>Написать в телеграм</span>
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a
                href="https://max.ru/u/f9LHodD0cOJhHIKiKoKDGrKFzXEAlnFB7TOjSz7910GYbAUqUMYG9O5UyFA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center w-full"
                data-analytics-event="lead_click"
                data-analytics-location="team"
                data-analytics-action="whatsapp"
                data-analytics-label="Team WhatsApp"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                <span>Написать в WhatsApp</span>
              </a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <ContactForm
        open={isFormOpen}
        onOpenChange={setIsFormOpen}
        formLocation="team"
        formId="contact_callback"
      />
    </section>
  )
}
