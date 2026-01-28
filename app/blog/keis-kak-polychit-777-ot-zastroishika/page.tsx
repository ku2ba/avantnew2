import { Metadata } from "next"
import Link from "next/link"
import PageHero from "@/components/PageHero"
import PageContent from "@/components/PageContent"

export const metadata: Metadata = {
  title: "Кейс: Как получить 777 000 ₽ от застройщика в Екатеринбурге | Блог АВАНТ",
  description:
    "Реальный кейс: как мы помогли клиенту взыскать 777 000 рублей с застройщика ЖК «Самоцветы» за строительные дефекты, неустойку, моральный вред и штрафы.",
  keywords:
    "кейс, застройщик, взыскание, компенсация, дефекты квартиры, Екатеринбург, Самоцветы, неустойка, моральный вред",
  openGraph: {
    url: "https://avantekb.ru/blog/keis-kak-polychit-777-ot-zastroishika",
    title: "Кейс: Как получить 777 000 ₽ от застройщика в Екатеринбурге",
    description: "Реальный кейс взыскания 777 000 рублей с застройщика за дефекты квартиры в ЖК «Самоцветы»",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Кейс: Как получить 777 000 ₽ от застройщика",
    description: "Реальный кейс взыскания с застройщика",
  },
  alternates: {
    canonical: "https://avantekb.ru/blog/keis-kak-polychit-777-ot-zastroishika",
  },
}

export default function KeisKakPolychit777Page() {
  return (
    <>
      <PageHero title="Кейс: Как получить 777 000 ₽ от застройщика в Екатеринбурге" />

      <PageContent>
        {/* Вступление */}
        <section className="mb-10 sm:mb-12">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
            К нам обратился клиент, который приобрёл квартиру в жилом комплексе «Самоцветы». Казалось бы, новостройка должна быть в идеальном состоянии, однако ещё до приёмки квартиры мы трижды проводили осмотры и каждый раз фиксировали серьёзные строительные дефекты.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
            Застройщик не спешил их устранять, что поставило клиента в сложное положение: ждать бесконечно или действовать. Мы выбрали второй путь и начали работать по стратегии, которая уже доказала свою эффективность.
          </p>
        </section>

        {/* Этап 1 */}
        <section className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-gray-900">Этап 1. Фиксация нарушений</h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
            На каждом осмотре мы составляли акты с детальным описанием недостатков. Это важнейший этап: именно грамотная фиксация дефектов даёт возможность требовать компенсации в суде.
          </p>
        </section>

        {/* Этап 2 */}
        <section className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-gray-900">Этап 2. Судебная экспертиза</h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
            Мы собрали доказательства и обратились в суд. Судебная экспертиза подтвердила наличие дефектов, и застройщика обязали выплатить <strong>268 162 рубля</strong> на их устранение. Но это была лишь часть суммы.
          </p>
        </section>

        {/* Этап 3 */}
        <section className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-gray-900">Этап 3. Дополнительные взыскания</h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
            Мы знали, что клиент имеет право не только на компенсацию расходов на ремонт, но и на дополнительные выплаты. Поэтому в иск были включены:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base sm:text-lg text-gray-700 mb-4 ml-4">
            <li><strong>190 000 ₽</strong> — неустойка за просрочку,</li>
            <li><strong>4 000 ₽</strong> — компенсация морального вреда,</li>
            <li><strong>81 500 ₽</strong> — штрафы, предусмотренные законом,</li>
            <li><strong>35 000 ₽</strong> — возмещение расходов на юридическую помощь.</li>
          </ul>
        </section>

        {/* Итог */}
        <section className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-gray-900 text-center">Итог</h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
            В результате с застройщика взыскано:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base sm:text-lg text-gray-700 mb-4 ml-4">
            <li><strong>268 162 ₽</strong> на устранение недостатков,</li>
            <li><strong>442 500 ₽</strong> штрафными санкциями, неустойкой и компенсациями.</li>
          </ul>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
            <strong>Общая сумма составила 777 000 ₽.</strong> Это деньги, которые клиент смог получить именно благодаря комплексному подходу и правильной правовой стратегии.
          </p>
        </section>

        {/* Что важно вынести */}
        <section className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-gray-900">Что важно вынести из этого кейса?</h2>
          <ol className="list-decimal list-inside space-y-3 text-base sm:text-lg text-gray-700 mb-4 ml-4">
            <li>
              <strong>Фиксировать дефекты нужно сразу.</strong> Чем больше доказательств, тем выше шансы в суде.
            </li>
            <li>
              <strong>Не стоит ждать, что застройщик сам всё исправит.</strong> На практике компании часто затягивают сроки или игнорируют претензии.
            </li>
            <li>
              <strong>Компенсация — это не только стоимость ремонта.</strong> Закон позволяет взыскать неустойку, моральный вред, штрафы и даже расходы на юристов.
            </li>
            <li>
              <strong>Профессиональная поддержка критична.</strong> Самостоятельно добиться такого результата практически невозможно: застройщики всегда приходят в суд с юристами.
            </li>
          </ol>
        </section>

        {/* Навигация */}
        <section className="mb-10 sm:mb-12 pt-8 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <Link
              href="/blog"
              className="text-base font-medium text-gray-900 hover:text-gray-600 transition-colors underline"
            >
              ← Вернуться к списку статей
            </Link>
          </div>
        </section>
      </PageContent>
    </>
  )
}
