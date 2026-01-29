"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, Phone, MessageCircle } from "lucide-react"
import ContactForm from "@/components/ContactForm"

export default function HeaderMenu() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="font-montserrat bg-black text-white hover:bg-gray-800 text-xs sm:text-sm px-2 sm:px-4 py-1.5 sm:py-2"
            data-analytics-menu-trigger
            data-analytics-location="header"
            data-analytics-label="Header Consultation Menu"
          >
            Получить бесплатную консультацию
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="w-56"
          data-analytics-menu-content
          data-location="header"
        >
          <DropdownMenuItem
            onClick={() => setIsFormOpen(true)}
            data-analytics-event="lead_click"
            data-analytics-location="header"
            data-analytics-action="callback"
            data-analytics-label="Header Callback"
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
              data-analytics-location="header"
              data-analytics-action="call"
              data-analytics-label="Header Call"
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
              data-analytics-location="header"
              data-analytics-action="telegram"
              data-analytics-label="Header Telegram"
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
              data-analytics-location="header"
              data-analytics-action="whatsapp"
              data-analytics-label="Header WhatsApp"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              <span>Написать в WhatsApp</span>
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <ContactForm
        open={isFormOpen}
        onOpenChange={setIsFormOpen}
        formLocation="header"
        formId="contact_callback"
      />
    </>
  )
}
