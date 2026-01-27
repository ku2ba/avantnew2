"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
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
            <Card className="cursor-pointer hover:shadow-lg transition-shadow p-3 sm:p-4 bg-white border-2 border-gray-200 shadow-md">
              <Image
                src="/vidget_icon.svg"
                alt="Консультация"
                width={40}
                height={40}
                className="w-10 h-10 sm:w-12 sm:h-12"
              />
            </Card>
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
