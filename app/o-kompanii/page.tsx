import { Metadata } from "next"
import PageHero from "@/components/PageHero"
import PageContent from "@/components/PageContent"

export const metadata: Metadata = {
  title: "О компании Авант - Юридическая помощь в сфере недвижимости | Екатеринбург",
  description:
    "Юридическая компания АВАНТ - команда профессионалов в сфере права и недвижимости. Защита прав собственников недвижимости, приемка квартир, взыскание с застройщика. Опыт работы с более чем 20 застройщиками Урала.",
  keywords: "юридическая компания, АВАНТ, защита прав, недвижимость, приемка квартир, Екатеринбург, застройщик",
  openGraph: {
    url: "https://avantekb.ru/about",
    title: "О компании Авант - Юридическая помощь в сфере недвижимости",
    description:
      "Команда профессионалов в сфере права и недвижимости. Защита прав собственников недвижимости и представительство их интересов перед строительными компаниями.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "О компании Авант",
    description: "Юридическая компания АВАНТ - команда профессионалов в сфере права и недвижимости",
  },
  alternates: {
    canonical: "https://avantekb.ru/about",
  },
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="О компании Авант"
        description="«Авант» – это команда профессионалов в сфере права и недвижимости. Нас объединила общая цель – защита прав собственников недвижимости и представительство их интересов перед строительными компаниями, которые сдают тысячи квадратных метров жилья и коммерческих площадей со скрытыми недостатками."
      />

      <PageContent>
              {/* Основная информация о компании */}
              <section className="mb-10 sm:mb-12">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                  Каждый имеет право на уютный дом и комфортное место для ведения своего бизнеса.
                </p>
              </section>

              {/* Наши преимущества */}
              <section className="mb-10 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-gray-900">Наша команда</h2>
                <ul className="space-y-4 text-base sm:text-lg text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-3 text-c3a255 font-bold">✓</span>
                    <span>Команда юристов с многолетним опытом</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-c3a255 font-bold">✓</span>
                    <span>Квалифицированные менеджеры по работе с клиентами</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-c3a255 font-bold">✓</span>
                    <span>
                      Аккредитованный экспертный отдел: команда специалистов по приемке, строительные эксперты,
                      тепловизионные эксперты, специалист сметчик
                    </span>
                  </li>
                </ul>
              </section>

              {/* Почему нам доверяют */}
              <section className="mb-10 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-gray-900">
                  Почему нам доверяют
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Конфиденциальность</h3>
                    <p className="text-base text-gray-700">Дела и личные данные только между нами и клиентом.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Опыт</h3>
                    <p className="text-base text-gray-700">Работали более чем с 20 застройщиками Урала.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Личное время</h3>
                    <p className="text-base text-gray-700">
                      Нужна только доверенность и всю работу сделают специалисты.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Правовая грамотность</h3>
                    <p className="text-base text-gray-700">Опыт юристов компании до 20 лет.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Обратная связь</h3>
                    <p className="text-base text-gray-700">
                      Всегда держим в курсе событий и ответим на любой вопрос.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Гарантия результата</h3>
                    <p className="text-base text-gray-700">Работаем без предоплаты.</p>
                  </div>
                </div>
              </section>

              {/* СМИ о нас */}
              <section className="mb-10 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-gray-900">СМИ о нас</h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Наша работа привлекает внимание средств массовой информации. Мы делимся опытом и знаниями, помогая
                  людям разобраться в вопросах защиты прав в сфере недвижимости.
                </p>
                <ul className="space-y-2 text-base sm:text-lg">
                  <li>
                    <a
                      href="https://ingraficon.ru/news/detail/3946"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="text-gray-900 hover:text-gray-600 transition-colors underline"
                    >
                      Ingraficon
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.e1.ru/text/realty/2021/06/08/69956672/"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="text-gray-900 hover:text-gray-600 transition-colors underline"
                    >
                      E1
                    </a>
                  </li>
                </ul>
              </section>
      </PageContent>
    </>
  )
}
