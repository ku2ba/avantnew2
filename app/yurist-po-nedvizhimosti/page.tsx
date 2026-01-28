import { Metadata } from "next"
import PageHero from "@/components/PageHero"
import PageContent from "@/components/PageContent"

export const metadata: Metadata = {
  title: "Юрист по недвижимости Екатеринбург — споры с застройщиком | АВАНТ",
  description:
    "Юрист по недвижимости (Екатеринбург): споры с застройщиками, строительные недостатки, нарушения ДДУ. Ведём дело под ключ — от экспертизы и претензии до фактического взыскания денег. Работаем с 2020 года.",
  keywords:
    "юрист по недвижимости екатеринбург, юрист по недвижимости, споры с застройщиком, строительные дефекты, ДДУ, взыскание с застройщика",
  openGraph: {
    url: "https://avantekb.ru/yurist-po-nedvizhimosti",
    title: "Юрист по недвижимости Екатеринбург — АВАНТ",
    description:
      "Споры с застройщиками — профильная практика. Ведём дело под ключ: от экспертизы и претензии до фактического взыскания денег.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Юрист по недвижимости Екатеринбург",
    description: "Споры с застройщиками, дефекты, ДДУ. Ведение дела под ключ.",
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
        description="Споры с застройщиками — профильная практика с 2020 года. Помогаем зафиксировать недостатки, подготовить претензию и взыскать деньги за нарушения ДДУ."
      />

      <PageContent>
        <section className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-gray-900">
            Споры с застройщиками — наша профильная практика
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
            <div>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                Мы — <strong>юристы по недвижимости в Екатеринбурге</strong> с фокусом на спорах с застройщиками,
                связанных со строительными недостатками и нарушением условий ДДУ. Работаем в этом направлении с 2020 года
                и имеем одну из крупнейших практик в Свердловской области.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900">Решаем</h3>
              <ul className="space-y-2 text-base sm:text-lg text-gray-700 list-disc list-inside">
                <li>дефекты в квартирах и частных домах;</li>
                <li>промерзание окон, стен, балконов;</li>
                <li>нарушение сроков передачи недвижимости;</li>
                <li>уменьшение фактической площади объекта;</li>
                <li>отказ застройщика устранять недостатки.</li>
              </ul>
            </div>

            <aside className="rounded-xl border border-gray-200 bg-gray-50 p-5 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900">Что можно взыскать с застройщика</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                Даже однодневная просрочка даёт право на неустойку. Дополнительно можно требовать:
              </p>
              <ul className="space-y-2 text-base sm:text-lg text-gray-700 list-disc list-inside">
                <li>компенсацию за строительные недостатки;</li>
                <li>штраф за отказ удовлетворить претензию добровольно;</li>
                <li>компенсацию морального вреда;</li>
                <li>убытки, включая аренду жилья;</li>
                <li>расходы на экспертизу и юридическое сопровождение.</li>
              </ul>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mt-4">
                Все требования суммируются и могут составлять значительную сумму.
              </p>
            </aside>
          </div>
        </section>

        <section className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-gray-900">Как мы работаем</h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
            Мы ведём дело «под ключ»: от экспертизы и претензии до получения денег на счёт клиента. Под результатом
            понимаем именно фактическое взыскание средств, включая этапы работы с судами, приставами и банками.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Во многих случаях вопрос удаётся решить на досудебной стадии. Если спор доходит до суда, сопровождаем клиента
            на всех этапах до полного исполнения решения.
          </p>
        </section>

        <section className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-gray-900">Условия оплаты</h2>
          <ul className="space-y-2 text-base sm:text-lg text-gray-700 list-disc list-inside">
            <li>фиксированная оплата + процент от взысканной суммы, либо</li>
            <li>работа без предоплаты с оплатой за результат.</li>
          </ul>
        </section>

        <section className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-gray-900">Регион работы</h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
            Екатеринбург и Свердловская область. Хорошо знаем практику местных судов и специфику работы региональных
            застройщиков.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
            Если застройщик нарушил ваши права — тянуть невыгодно. Чем раньше начата работа, тем выше сумма возможной
            компенсации.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Получить консультацию можно по телефону{" "}
            <a href="tel:+79122285809" className="text-gray-900 hover:text-gray-600 transition-colors underline">
              +7 (912) 228-58-09
            </a>
            .
          </p>
        </section>
      </PageContent>
    </>
  )
}
