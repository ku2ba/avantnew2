import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#171717] pt-[4.6875rem] pb-[5.625rem]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-4">
          {/* Логотип и копирайт */}
          <div className="md:w-1/3">
            <Link
              href="/"
              className="block mb-4"
              data-analytics-event="navigation_click"
              data-analytics-location="footer"
              data-analytics-label="Footer: Main"
              data-analytics-page-path="/"
            >
              <img
                src="/avant_logo_futer.svg"
                alt="Авант"
                className="max-w-[12.5rem] h-auto"
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
                  data-analytics-event="navigation_click"
                  data-analytics-location="footer"
                  data-analytics-label="Footer: Главная"
                  data-analytics-page-path="/"
                >
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white text-xs hover:text-[#c3a255] transition-colors"
                  data-analytics-event="navigation_click"
                  data-analytics-location="footer"
                  data-analytics-label="Footer: О компании"
                  data-analytics-page-path="/about"
                >
                  О компании
                </Link>
              </li>
              <li>
                <Link
                  href="/review"
                  className="text-white text-xs hover:text-[#c3a255] transition-colors"
                  data-analytics-event="navigation_click"
                  data-analytics-location="footer"
                  data-analytics-label="Footer: Отзывы"
                  data-analytics-page-path="/review"
                >
                  Отзывы
                </Link>
              </li>
              <li>
                <Link
                  href="/contacts"
                  className="text-white text-xs hover:text-[#c3a255] transition-colors"
                  data-analytics-event="navigation_click"
                  data-analytics-location="footer"
                  data-analytics-label="Footer: Контакты"
                  data-analytics-page-path="/contacts"
                >
                  Контакты
                </Link>
              </li>
              <li>
                <Link
                  href="/partner"
                  className="text-white text-xs hover:text-[#c3a255] transition-colors"
                  data-analytics-event="navigation_click"
                  data-analytics-location="footer"
                  data-analytics-label="Footer: Сотрудничество"
                  data-analytics-page-path="/partner"
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
                  data-analytics-event="lead_click"
                  data-analytics-location="footer"
                  data-analytics-action="vk"
                  data-analytics-label="Footer: VK"
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
                  data-analytics-event="lead_click"
                  data-analytics-location="footer"
                  data-analytics-action="telegram"
                  data-analytics-label="Footer: Telegram"
                >
                  Telegram
                </Link>
              </li>
              <li>
                <Link
                  href="https://max.ru/u/f9LHodD0cOJhHIKiKoKDGrKFzXEAlnFB7TOjSz7910GYbAUqUMYG9O5UyFA"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-white text-xs hover:text-[#c3a255] transition-colors"
                  data-analytics-event="lead_click"
                  data-analytics-location="footer"
                  data-analytics-action="whatsapp"
                  data-analytics-label="Footer: Max"
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
