import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#171717] pt-[75px] pb-[90px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-4">
          {/* Логотип и копирайт */}
          <div className="md:w-1/3">
            <Link href="/" className="block mb-4">
              <img
                src="/avant_logo_futer.svg"
                alt="Авант"
                className="max-w-[200px] h-auto"
              />
            </Link>
            <p className="text-white text-xs">© Все права защищены. ИП Сакаев</p>
          </div>

          {/* Меню */}
          <div className="md:w-1/4">
            <h3 className="text-[#c3a255] text-xs font-semibold mb-4 uppercase">МЕНЮ</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-white text-xs hover:text-[#c3a255] transition-colors"
                >
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white text-xs hover:text-[#c3a255] transition-colors"
                >
                  О компании
                </Link>
              </li>
              <li>
                <Link
                  href="/review"
                  className="text-white text-xs hover:text-[#c3a255] transition-colors"
                >
                  Отзывы
                </Link>
              </li>
              <li>
                <Link
                  href="/contacts"
                  className="text-white text-xs hover:text-[#c3a255] transition-colors"
                >
                  Контакты
                </Link>
              </li>
              <li>
                <Link
                  href="/partner"
                  className="text-white text-xs hover:text-[#c3a255] transition-colors"
                >
                  Сотрудничество
                </Link>
              </li>
            </ul>
          </div>

          {/* Соц сети */}
          <div className="md:w-1/4">
            <h3 className="text-[#c3a255] text-xs font-semibold mb-4 uppercase">Соц Сети</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://vk.com/avantekb"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-white text-xs hover:text-[#c3a255] transition-colors"
                >
                  Vk
                </Link>
              </li>
              <li>
                <Link
                  href="https://t.me/avantekb"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-white text-xs hover:text-[#c3a255] transition-colors"
                >
                  Telegram
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-white text-xs hover:text-[#c3a255] transition-colors"
                >
                  Max
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
