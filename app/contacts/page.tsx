import { Metadata } from "next"
import Link from "next/link"
import PageHero from "@/components/PageHero"
import PageContent from "@/components/PageContent"

export const metadata: Metadata = {
  title: "Контакты - Юридическая компания АВАНТ | Екатеринбург",
  description:
    "Контакты юридической компании АВАНТ в Екатеринбурге. Телефоны, адрес офиса, электронная почта, режим работы. Свяжитесь с нами для консультации по вопросам недвижимости.",
  keywords: "контакты, юридическая компания, Екатеринбург, адрес, телефон, АВАНТ",
  openGraph: {
    url: "https://avantekb.ru/contacts",
    title: "Контакты - Юридическая компания АВАНТ",
    description:
      "Свяжитесь с нами: г. Екатеринбург, ул. Отто Шмидта 58, офис 315. Телефон: +7 (343) 272-81-80",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Контакты - Юридическая компания АВАНТ",
    description: "Контактная информация юридической компании АВАНТ в Екатеринбурге",
  },
  alternates: {
    canonical: "https://avantekb.ru/contacts",
  },
}

export default function ContactsPage() {
  return (
    <>
      <PageHero
        title="Контакты юридической компании АВАНТ"
        description="Свяжитесь с нами для получения консультации по вопросам защиты прав в сфере недвижимости. Мы работаем в Екатеринбурге и готовы помочь вам решить любые юридические вопросы."
      />

      <PageContent>
              {/* Контактная информация */}
              <section className="mb-10 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-gray-900">
                  Как с нами связаться
                </h2>

                <div className="space-y-6">
                  {/* Телефоны */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">Телефоны</h3>
                    <ul className="space-y-3 text-lg sm:text-xl text-gray-700">
                      <li>
                        <a
                          href="tel:+73432728180"
                          className="text-gray-900 hover:text-gray-600 transition-colors underline"
                        >
                          +7 (343) 272-81-80
                        </a>
                      </li>
                      <li>
                        <a
                          href="tel:+79122285809"
                          className="text-gray-900 hover:text-gray-600 transition-colors underline"
                        >
                          +7 (912) 228-58-09
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Email */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">Электронная почта</h3>
                    <p className="text-lg sm:text-xl">
                      <a
                        href="mailto:avant.pld@gmail.com"
                        className="text-gray-900 hover:text-gray-600 transition-colors underline"
                      >
                        avant.pld@gmail.com
                      </a>
                    </p>
                  </div>

                  {/* Адрес */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">Адрес офиса</h3>
                    <p className="text-lg sm:text-xl text-gray-700 mb-4">
                      <Link
                        href="https://yandex.ru/maps/?text=г. Екатеринбург, ул. Отто Шмидта 58, офис 315, 3 этаж"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-900 hover:text-gray-600 transition-colors underline"
                      >
                        г. Екатеринбург, ул. Отто Шмидта 58, офис 315, 3 этаж
                      </Link>
                    </p>
                  </div>

                  {/* Режим работы */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">Режим работы</h3>
                    <ul className="space-y-2 text-lg sm:text-xl text-gray-700">
                      <li>
                        <strong>Пн - Пт:</strong> 9:00-18:00
                      </li>
                      <li>
                        <strong>Сб - Вс:</strong> выходной
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Реквизиты */}
              <section className="mb-10 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-gray-900">Реквизиты</h2>
                <div className="space-y-2 text-base sm:text-lg text-gray-700">
                  <p>ИП Сакаев Шамиль Рашитович</p>
                  <p>ИНН 667479866015</p>
                  <p>ОГРН 317665800106330</p>
                </div>
              </section>

              {/* Социальные сети */}
              <section className="mb-10 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-gray-900">
                  Мы в социальных сетях
                </h2>
                <ul className="flex flex-wrap gap-4 sm:gap-6">
                  <li>
                    <a
                      href="https://vk.com/avantekb"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="text-gray-900 hover:text-gray-600 transition-colors underline text-lg"
                      aria-label="ВКонтакте"
                    >
                      ВКонтакте
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://t.me/avantekb"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="text-gray-900 hover:text-gray-600 transition-colors underline text-lg"
                      aria-label="Telegram"
                    >
                      Telegram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/79122285809"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="text-gray-900 hover:text-gray-600 transition-colors underline text-lg"
                      aria-label="WhatsApp"
                    >
                      WhatsApp
                    </a>
                  </li>
                </ul>
              </section>
      </PageContent>
    </>
  )
}
