import { Metadata } from "next"
import PageHero from "@/components/PageHero"
import PageContent from "@/components/PageContent"

export const metadata: Metadata = {
  title: "Юрист по недвижимости в Екатеринбурге - Услуги юридической компании АВАНТ",
  description:
    "Юрист по недвижимости в Екатеринбурге. Специализация на спорах с застройщиками по строительным недостаткам и нарушениям условий договора. Работаем без предоплаты. Бесплатная консультация.",
  keywords: "юрист по недвижимости, Екатеринбург, споры с застройщиком, строительные дефекты, приемка квартир",
  openGraph: {
    url: "https://avantekb.ru/yurist-po-nedvizhimosti",
    title: "Юрист по недвижимости в Екатеринбурге - АВАНТ",
    description:
      "Специализация на спорах с застройщиками. Работаем без предоплаты. Одна из самых больших практик по спорам с застройщиками в Свердловской области.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Юрист по недвижимости в Екатеринбурге",
    description: "Специализация на спорах с застройщиками по строительным недостаткам",
  },
  alternates: {
    canonical: "https://avantekb.ru/yurist-po-nedvizhimosti",
  },
}

export default function YuristPoNedvizhimostiPage() {
  return (
    <>
      <PageHero
        title="Юрист по недвижимости в Екатеринбурге"
        description="Основная наша специализация – споры с застройщиками по строительным недостаткам и нарушениям условий договора. Работаем без предоплаты, одна из самых больших практик по спорам с застройщиками в Свердловской области."
      />

      <PageContent>
              {/* Основная информация об услуге */}
              <section className="mb-10 sm:mb-12">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Наши клиенты часто сталкиваются с дефектами в квартире или частном доме, промерзаниями окон и стен, с
                  нарушением сроков передачи недвижимости и уменьшением площади объекта при строительстве.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Наша компания обладает одной из самых больших практик по спорам с застройщиками в Свердловской
                  области, так как специализируемся на этом с 2020 года.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Мы предлагаем нашим клиентам два способа оплаты – фиксированная оплата в начале работы и небольшой
                  процент от выигранной суммы, по результатам взыскания денежных средств с застройщика или же работа
                  без предоплаты, с более высоким процентом за результат.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Под результатом мы пониманием получение денежных средств на счет нашего клиента, поэтому работаем
                  «под ключ» от проведения экспертизы и написания претензии до взаимодействия с приставами или банками,
                  где у ответчика есть расчетные счета.
                </p>
              </section>

              {/* Дополнительные услуги */}
              <section className="mb-10 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-gray-900">
                  Помимо основной специализации мы также профессионально занимаемся:
                </h2>
                <ul className="space-y-3 text-base sm:text-lg text-gray-700 list-disc list-inside">
                  <li>Спорами по ущербу, причиненному вследствие потопа или пожара</li>
                  <li>Потребительскими спорами</li>
                  <li>Спорами между юридическими лицами</li>
                  <li>Спорами связанные с обращением криптовалют</li>
                </ul>
              </section>

              {/* Стоимость и контакты */}
              <section className="mb-10 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-gray-900">Стоимость услуг</h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Стоимость наших услуг начинается от 5 000 рублей.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Консультацию по нашей специализации вы можете получить бесплатно по телефону{" "}
                  <a href="tel:+79122285809" className="text-gray-900 hover:text-gray-600 transition-colors underline">
                    +7 (912) 228-58-09
                  </a>
                  , либо записавшись на встречу в офисе.
                </p>
              </section>
      </PageContent>
    </>
  )
}
