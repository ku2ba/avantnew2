import { Metadata } from "next"

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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
      <article className="max-w-4xl mx-auto">
        {/* Заголовок страницы */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 sm:mb-8 text-gray-900">
          Заголовок страницы (H1)
        </h1>

        {/* Подзаголовок или краткое описание */}
        <p className="text-lg sm:text-xl text-gray-700 mb-8 sm:mb-12">
          Краткое описание или вводный текст страницы. Здесь можно разместить основную информацию о разделе или услуге.
        </p>

        {/* Основной контент */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-gray-900">
              Подзаголовок (H2)
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              Здесь будет размещен основной контент страницы. Текст можно структурировать с помощью подзаголовков H2, H3 и т.д.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              Параграфы текста для лучшей читаемости и структурирования информации.
            </p>
          </section>

          <section className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-gray-900">
              Еще один раздел (H2)
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              Дополнительная информация, которая может быть полезна посетителям сайта.
            </p>
          </section>
        </div>
      </article>
    </div>
  )
}
