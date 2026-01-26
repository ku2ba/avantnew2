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
          <Button className="font-montserrat bg-black text-white hover:bg-gray-800 text-xs sm:text-sm px-2 sm:px-4 py-1.5 sm:py-2 hidden sm:inline-flex">
            Получить бесплатную консультацию
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
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
      <ContactForm open={isFormOpen} onOpenChange={setIsFormOpen} />
    </>
  )
}
