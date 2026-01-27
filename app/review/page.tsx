import { Metadata } from "next"
import PageHero from "@/components/PageHero"
import PageContent from "@/components/PageContent"

export const metadata: Metadata = {
  title: "Отзывы о компании Авант - Юридическая помощь | Екатеринбург",
  description:
    "Отзывы клиентов о работе юридической компании АВАНТ. Реальные отзывы о приемке квартир, взыскании с застройщика и других услугах. Поддержите нас, оставьте отзыв.",
  keywords: "отзывы, АВАНТ, юридическая компания, приемка квартир, взыскание с застройщика, Екатеринбург",
  openGraph: {
    url: "https://avantekb.ru/review",
    title: "Отзывы о компании Авант - Юридическая помощь",
    description: "Отзывы клиентов о работе юридической компании АВАНТ. Реальные отзывы о приемке квартир и взыскании с застройщика.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Отзывы о компании Авант",
    description: "Отзывы клиентов о работе юридической компании АВАНТ",
  },
  alternates: {
    canonical: "https://avantekb.ru/review",
  },
}

export default function ReviewPage() {
  return (
    <>
      <PageHero
        title="Отзывы о компании Авант"
        description="Поддержите нас, оставьте отзыв. Ваши приятные слова — лучшая оценка для нашего дела."
      />

      <PageContent>
              {/* Социальные сети для отзывов */}
              <section className="mb-10 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-gray-900">
                  Оставьте отзыв в социальных сетях
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                  Мы ценим ваше мнение и будем рады услышать отзывы о нашей работе. Вы можете оставить отзыв в наших
                  социальных сетях или на платформе 2ГИС.
                </p>
                <ul className="flex flex-wrap gap-4 sm:gap-6">
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
                      href="https://api.whatsapp.com/send/?phone=79126698341&text&app_absent=0"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="text-gray-900 hover:text-gray-600 transition-colors underline text-lg"
                      aria-label="WhatsApp"
                    >
                      WhatsApp
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://2gis.ru/ekaterinburg/firm/70000001042592829"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="text-gray-900 hover:text-gray-600 transition-colors underline text-lg"
                      aria-label="2ГИС"
                    >
                      2ГИС
                    </a>
                  </li>
                </ul>
              </section>

              {/* Примечание о галерее отзывов */}
              <section className="mb-10 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-gray-900">
                  Благодарности наших клиентов
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Мы гордимся доверием наших клиентов и благодарны за каждый положительный отзыв. Наши специалисты
                  работают с полной отдачей, чтобы помочь вам решить вопросы в сфере недвижимости.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Если вы уже воспользовались нашими услугами, пожалуйста, поделитесь своим опытом. Ваш отзыв поможет
                  другим людям принять правильное решение.
                </p>
              </section>
      </PageContent>
    </>
  )
}
