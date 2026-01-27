import { Metadata } from "next"
import PageHero from "@/components/PageHero"
import PageContent from "@/components/PageContent"

export const metadata: Metadata = {
  title: "Пример страницы - Юридическая компания АВАНТ",
  description:
    "Описание страницы для поисковых систем. Здесь будет размещена информация о конкретной услуге или разделе сайта.",
  keywords: "пример, услуга, юридические услуги",
  openGraph: {
    url: "https://avantekb.ru/example",
    title: "Пример страницы - Юридическая компания АВАНТ",
    description:
      "Описание страницы для поисковых систем. Здесь будет размещена информация о конкретной услуге или разделе сайта.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Пример страницы - Юридическая компания АВАНТ",
    description:
      "Описание страницы для поисковых систем. Здесь будет размещена информация о конкретной услуге или разделе сайта.",
  },
  alternates: {
    canonical: "https://avantekb.ru/example",
  },
}

export default function ExamplePage() {
  return (
    <>
      <PageHero
        title="Заголовок страницы (H1) для поисковой системы"
        description="Краткое и понятное описание раздела или услуги. Используйте здесь ключевые слова и формулировки, по которым вы хотите продвигаться в поисковых системах."
      />

      <PageContent>
        <section className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-gray-900">
            Подзаголовок раздела (H2)
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
            Здесь будет размещен основной контент страницы. Структурируйте текст с помощью подзаголовков H2 и H3,
            коротких абзацев и маркированных списков, чтобы улучшить читаемость и восприятие информации.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
            Используйте естественные формулировки с вкраплениями ключевых запросов, но избегайте переспама.
            Ориентируйтесь в первую очередь на удобство пользователей.
          </p>
        </section>

        <section className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-gray-900">
            Еще один информационный блок (H2)
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
            В этом разделе можно раскрыть дополнительные детали услуги, описать процесс работы, преимущества
            компании или ответить на частые вопросы клиентов.
          </p>
        </section>
      </PageContent>
    </>
  )
}
