import Image from "next/image"
import Link from "next/link"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import HeaderMenu from "@/components/HeaderMenu"
// Icons will be handled with SVG paths directly

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full px-3 sm:px-6 py-3 sm:py-4 border-b bg-gradient-to-r from-gray-200 to-gray-300">
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Avatar с логотипом */}
        <Link href="/" className="cursor-pointer">
          <Avatar className="h-10 w-10 sm:h-12 sm:w-12">
            <AvatarImage src="/logo2.png" alt="Logo" />
          </Avatar>
        </Link>

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
            <Image
              src="/telegram_icon.svg"
              alt="Telegram"
              width={24}
              height={24}
              className="w-5 h-5 sm:w-6 sm:h-6"
            />
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
            <Image
              src="/instagram_icon.svg"
              alt="Instagram"
              width={24}
              height={24}
              className="w-5 h-5 sm:w-6 sm:h-6"
            />
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
            <Image
              src="/phone_icon.svg"
              alt="Телефон"
              width={24}
              height={24}
              className="w-5 h-5 sm:w-6 sm:h-6"
            />
          </a>
        </Button>
      </div>
    </header>
  )
}
