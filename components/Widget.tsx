"use client"

import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Phone, MessageCircle } from "lucide-react"
import ContactForm from "@/components/ContactForm"
import Image from "next/image"

export default function Widget() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="cursor-pointer hover:shadow-lg transition-shadow p-3 sm:p-4 bg-[#c3a255] rounded-full shadow-md flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16">
              <Image
                src="/vidget_icon.svg"
                alt="Консультация"
                width={40}
                height={40}
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 mr-4">
            <DropdownMenuItem onClick={() => setIsFormOpen(true)}>
              <Phone className="mr-2 h-4 w-4" />
              <span>Заказать обратный звонок</span>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="tel:+79122285809" className="flex items-center w-full">
                <Phone className="mr-2 h-4 w-4" />
                <span>Позвонить нам</span>
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a
                href="https://t.me/shs969"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center w-full"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                <span>Написать в телеграм</span>
              </a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <ContactForm open={isFormOpen} onOpenChange={setIsFormOpen} />
    </>
  )
}
