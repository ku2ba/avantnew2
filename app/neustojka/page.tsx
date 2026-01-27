import { Metadata } from "next"
import PageHero from "@/components/PageHero"
import PageContent from "@/components/PageContent"

export const metadata: Metadata = {
  title: "Калькулятор неустойки с застройщика - Расчет неустойки по ДДУ | Екатеринбург",
  description:
    "Калькулятор неустойки с застройщика за просрочку сдачи квартиры по договору долевого участия (ДДУ). Быстрый расчет неустойки онлайн. Бесплатный расчет.",
  keywords: "калькулятор неустойки, расчет неустойки, ДДУ, просрочка сдачи, застройщик, Екатеринбург",
  openGraph: {
    url: "https://avantekb.ru/neustojka",
    title: "Калькулятор неустойки с застройщика",
    description: "Быстрый расчет неустойки за просрочку сдачи квартиры по договору ДДУ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор неустойки с застройщика",
    description: "Расчет неустойки за просрочку сдачи квартиры",
  },
  alternates: {
    canonical: "https://avantekb.ru/neustojka",
  },
}

export default function NeustojkaPage() {
  return (
    <>
      <PageHero
        title="Калькулятор неустойки с застройщика"
        description="Рассчитайте размер неустойки за просрочку сдачи квартиры по договору долевого участия (ДДУ). Быстрый и точный расчет неустойки с застройщика в соответствии с действующим законодательством."
      />

      <PageContent>
              {/* Информация о калькуляторе */}
              <section className="mb-10 sm:mb-12">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Калькулятор неустойки поможет вам рассчитать размер компенсации, которую вы можете взыскать с
                  застройщика за нарушение сроков передачи квартиры по договору долевого участия (ДДУ).
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Неустойка рассчитывается в соответствии с Федеральным законом № 214-ФЗ «Об участии в долевом
                  строительстве многоквартирных домов и иных объектов недвижимости». Размер неустойки составляет 1/300
                  ставки рефинансирования Центрального банка РФ от цены договора за каждый день просрочки.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Для точного расчета вам понадобятся: стоимость квартиры по договору ДДУ, дата передачи квартиры по
                  договору, фактическая дата передачи (или текущая дата, если квартира еще не передана), ставка
                  рефинансирования на дату расчета.
                </p>
              </section>

              {/* Примечание */}
              <section className="mb-10 sm:mb-12">
                <div className="bg-gray-50 border-l-4 border-gray-400 p-4 sm:p-6">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    <strong>Важно:</strong> Данный калькулятор предоставляет предварительный расчет. Для точного расчета
                    неустойки и взыскания компенсации с застройщика рекомендуем обратиться к нашим юристам. Мы поможем
                    правильно оформить претензию и взыскать неустойку в полном объеме.
                  </p>
                </div>
              </section>

              {/* Контакты */}
              <section className="mb-10 sm:mb-12">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Для консультации по расчету неустойки и взысканию компенсации с застройщика свяжитесь с нами по
                  телефону{" "}
                  <a
                    href="tel:+79122285809"
                    className="text-gray-900 hover:text-gray-600 transition-colors underline font-semibold"
                  >
                    +7 (912) 228-58-09
                  </a>{" "}
                  или{" "}
                  <a
                    href="tel:+73432728180"
                    className="text-gray-900 hover:text-gray-600 transition-colors underline font-semibold"
                  >
                    +7 (343) 272-81-80
                  </a>
                  .
                </p>
              </section>
      </PageContent>
    </>
  )
}
