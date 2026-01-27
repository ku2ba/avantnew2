import Image from "next/image"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import HeaderMenu from "@/components/HeaderMenu"
// Icons will be handled with SVG paths directly

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full px-3 sm:px-6 py-3 sm:py-4 border-b bg-gradient-to-r from-gray-200 to-gray-300">
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Avatar с логотипом */}
        <Avatar className="h-10 w-10 sm:h-12 sm:w-12">
          <AvatarImage src="/logo2.png" alt="Logo" />
        </Avatar>

        {/* Адрес и телефон */}
        <div className="flex flex-col">
          <a
            href="https://yandex.ru/maps/?text=г. Екатеринбург, ул. Отто Шмидта 58, офис 315, 3 этаж"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] sm:text-xs md:text-sm lg:text-base font-montserrat text-gray-700 hover:text-gray-900 transition-colors"
          >
            г. Екатеринбург, ул. Отто Шмидта 58, офис 315, 3 этаж
          </a>
          <a
            href="tel:+79122285809"
            className="text-[10px] sm:text-xs md:text-sm lg:text-base font-montserrat text-gray-700 hover:text-gray-900 transition-colors mt-0.5 sm:mt-1"
          >
            +7 (912) 228-58-09
          </a>
        </div>
      </div>

      {/* Кнопка и иконки соцсетей справа */}
      <div className="flex items-center gap-1 sm:gap-3">
        <HeaderMenu />
        {/* Telegram */}
        <Button
          variant="ghost"
          size="icon"
          asChild
          className="hover:opacity-80 h-8 w-8 sm:h-10 sm:w-10 hidden sm:inline-flex"
        >
          <a href="https://t.me/+79122285809" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
            <svg
              role="img"
              viewBox="0 0 24 24"
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="#1d98dc"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
          </a>
        </Button>

        {/* Messenger Max */}
        <Button
          variant="ghost"
          size="icon"
          asChild
          className="hover:opacity-80 h-8 w-8 sm:h-10 sm:w-10 hidden sm:inline-flex"
        >
          <a href="https://m.me/your-page" target="_blank" rel="noopener noreferrer" aria-label="Messenger Max">
            <svg
              role="img"
              viewBox="0 0 24 24"
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="#0084FF"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0C5.373 0 0 4.925 0 11c0 2.13.693 4.107 1.867 5.818L0 24l7.733-1.818c1.574.44 3.244.694 4.933.694 6.627 0 12-4.925 12-11S18.627 0 12 0zm.133 18.818c-1.574 0-3.107-.254-4.533-.694l-.4-.107-3.2.747.747-3.067-.107-.4C3.84 14.16 3.2 12.6 3.2 11c0-4.8 4.267-8.727 9.6-8.727S22.4 6.2 22.4 11s-4.267 8.727-9.6 8.727z" />
            </svg>
          </a>
        </Button>

        {/* Instagram */}
        <Button
          variant="ghost"
          size="icon"
          asChild
          className="hover:opacity-80 h-8 w-8 sm:h-10 sm:w-10 hidden sm:inline-flex"
        >
          <a href="https://instagram.com/your-page" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg
              role="img"
              viewBox="0 0 24 24"
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="#E4405F"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </Button>

        {/* Иконка телефона */}
        <Button
          variant="ghost"
          size="icon"
          asChild
          className="hover:opacity-80 h-8 w-8 sm:h-10 sm:w-10 hidden sm:inline-flex"
        >
          <a href="tel:+79122285809" aria-label="Телефон">
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="#25D366"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
          </a>
        </Button>
      </div>
    </header>
  )
}
