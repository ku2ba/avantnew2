import { Metadata } from "next"
import Link from "next/link"
import PageHero from "@/components/PageHero"
import PageContent from "@/components/PageContent"

export const metadata: Metadata = {
  title: "Суд ограничил взыскание с застройщика по новым правилам: дело против «РСГ-Академическое» | Блог АВАНТ",
  description:
    "В апреле 2025 года Свердловский областной суд рассмотрел апелляцию застройщика АО «РСГ-Академическое» по делу о взыскании стоимости устранения строительных дефектов и частично изменил решение суда первой инстанции. Применение новых ограничений по статье 10 закона № 214-ФЗ.",
  keywords:
    "суд, застройщик, взыскание, РСГ-Академическое, 214-ФЗ, дефекты квартиры, компенсация, лимит 3%, Екатеринбург",
  openGraph: {
    url: "https://avantekb.ru/blog/sud-ogranichil-vzyskanie-s-zastroyschika-po-novym-pravilam",
    title: "Суд ограничил взыскание с застройщика по новым правилам",
    description:
      "Один из первых кейсов применения новых ограничений по статье 10 закона № 214-ФЗ. Лимит в 3% от стоимости квартиры.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Суд ограничил взыскание с застройщика по новым правилам",
    description: "Применение новых ограничений по статье 10 закона № 214-ФЗ",
  },
  alternates: {
    canonical: "https://avantekb.ru/blog/sud-ogranichil-vzyskanie-s-zastroyschika-po-novym-pravilam",
  },
}

export default function SudOgranichilVzyskaniePage() {
  return (
    <>
      <PageHero
        title="Суд ограничил взыскание с застройщика по новым правилам: дело против «РСГ-Академическое»"
      />

      <PageContent>
              {/* Вступление */}
              <section className="mb-10 sm:mb-12">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 italic">
                  В апреле 2025 года Свердловский областной суд рассмотрел апелляцию застройщика АО «РСГ-Академическое»
                  по делу о взыскании стоимости устранения строительных дефектов и частично изменил решение суда первой
                  инстанции.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Этот кейс — один из первых, где применили <strong>новые ограничения по статье 10 закона № 214-ФЗ</strong>,
                  вступившие в силу с 1 января 2025 года. Теперь взыскания с застройщика за дефекты не могут превышать{" "}
                  <strong>3% от цены квартиры</strong>.
                </p>
              </section>

              {/* Основной контент */}
              <section className="mb-10 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-gray-900">Обстоятельства дела</h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Супруги приобрели квартиру в ЖК «Академический» по договору уступки прав требования (цессии).
                  Первоначальные дольщики заключили договор долевого участия с застройщиком «РСГ-Академическое» ещё в
                  ноябре 2021 года.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  После передачи квартиры 19 января 2024 года новые владельцы обнаружили <strong>серьёзные недостатки</strong>{" "}
                  отделочных работ и инженерных систем.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  По заключению эксперта, устранение дефектов требовало <strong>223 508 рублей</strong>, затем после уточнения
                  требований — <strong>175 064 рубля 71 копейку</strong>.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Претензия застройщику осталась без ответа, и дольщики обратились в суд.
                </p>
              </section>

              {/* Решение суда первой инстанции */}
              <section className="mb-10 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-gray-900">
                  Решение суда первой инстанции
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  22 января 2025 года Верх-Исетский районный суд частично удовлетворил иск.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">С застройщика взыскали:</p>
                <ul className="list-disc list-inside space-y-2 text-base sm:text-lg text-gray-700 mb-4">
                  <li>175 064,71 ₽ — стоимость устранения строительных недостатков;</li>
                  <li>18 000 ₽ — услуги специалиста;</li>
                  <li>20 000 ₽ — расходы на представителя;</li>
                  <li>10 000 ₽ — компенсация морального вреда (по 5000 ₽ каждому).</li>
                </ul>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Суд посчитал, что <strong>новые ограничения (3% от стоимости квартиры)</strong> не применяются, так как
                  обязанность устранить недостатки возникла у застройщика до 1 января 2025 года.
                </p>
              </section>

              {/* Апелляция */}
              <section className="mb-10 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-gray-900">Апелляция</h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  «РСГ-Академическое» подало апелляционную жалобу, настаивая, что взыскание противоречит новой редакции
                  закона № 214-ФЗ.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Согласно изменениям, внесённым <strong>Федеральным законом № 482-ФЗ от 26.12.2024</strong>, при взыскании
                  расходов, штрафов и компенсаций за дефекты <strong>общая сумма не может превышать 3% от цены договора</strong>,
                  если иное не предусмотрено самим договором.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Стоимость квартиры составляла <strong>3 134 004 ₽</strong>, соответственно лимит — <strong>94 020 ₽</strong>.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  30 апреля 2025 года Свердловский областной суд согласился с доводами застройщика.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Коллегия указала, что с 1 января 2025 г. действует часть 4 статьи 10 Закона № 214-ФЗ, её действие
                  распространяется и на ранее заключённые договоры, если решение выносится после вступления нормы в силу.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Поскольку решение суда первой инстанции принято <strong>22 января 2025 года</strong>, суд апелляционной
                  инстанции обязал применить лимит 3%.
                </p>
              </section>

              {/* Итог */}
              <section className="mb-10 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-gray-900">Итог апелляции</h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">В итоге взыскание было снижено:</p>
                <ul className="list-disc list-inside space-y-2 text-base sm:text-lg text-gray-700 mb-4">
                  <li>
                    стоимость устранения недостатков — <strong>94 020 ₽ (вместо 175 064 ₽)</strong>;
                  </li>
                  <li>услуги специалиста — <strong>9 667 ₽</strong>;</li>
                  <li>представительские расходы — <strong>13 427 ₽</strong>;</li>
                  <li>госпошлина — <strong>3 420 ₽</strong>.</li>
                </ul>
              </section>

              {/* Выводы */}
              <section className="mb-10 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-gray-900">Ключевые выводы</h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Этот кейс стал показательным примером применения новой редакции <strong>статьи 10 Закона № 214-ФЗ</strong>.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Теперь, даже если квартира передана с дефектами, суд не сможет взыскать с застройщика больше{" "}
                  <strong>3% от цены квартиры</strong> — если речь идёт о недостатках <strong>отделки, окон, дверей, сантехники и других элементов внутреннего оснащения</strong>.
                </p>
                <ol className="list-decimal list-inside space-y-3 text-base sm:text-lg text-gray-700 mb-4">
                  <li>
                    <strong>Лимит в 3 %</strong> распространяется даже на старые договоры долевого участия, если судебное
                    решение выносится после 1 января 2025 г.
                  </li>
                  <li>
                    <strong>Даже признанные производственные дефекты</strong> не освобождают дольщика от нового ограничения по
                    сумме.
                  </li>
                  <li>
                    <strong>Закон имеет обратную силу</strong>, поскольку суд расценил момент возникновения права на
                    компенсацию как дату вступления решения в силу, а не дату выявления недостатков.
                  </li>
                  <li>
                    <strong>Неустойка и штрафы</strong> по Закону о защите прав потребителей не входят в лимит 3 % — это
                    важно для будущих споров.
                  </li>
                </ol>
              </section>

              {/* Комментарий */}
              <section className="mb-10 sm:mb-12">
                <div className="bg-gray-50 border-l-4 border-gray-400 p-4 sm:p-6">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 italic">
                    «Это решение подтверждает, что застройщики активно используют новые поправки для снижения выплат. Однако
                    у дольщиков всё ещё остаются способы компенсировать ущерб — например, через взыскание неустойки,
                    морального вреда и штрафов по другим основаниям.
                  </p>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed italic">
                    Мы сопровождаем подобные дела и адаптируем стратегию защиты с учётом новой судебной практики».
                  </p>
                  <p className="text-base sm:text-lg text-gray-900 font-semibold mt-4">— комментарий юриста Авант</p>
                </div>
              </section>

              {/* Что делать */}
              <section className="mb-10 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-gray-900 text-center">
                  Что делать дольщикам после нововведений?
                </h2>
                <div className="space-y-4 text-base sm:text-lg text-gray-700">
                  <p>
                    <strong>① Размер компенсации теперь ограничен.</strong> Даже при больших объёмах дефектов суд не может
                    присудить больше 3% от стоимости квартиры.
                  </p>
                  <p>
                    <strong>② Важна дата решения суда.</strong> Если судебное решение выносится <strong>после 1 января 2025 года</strong>,
                    новые лимиты уже применяются — даже к старым договорам.
                  </p>
                  <p>
                    <strong>③ Нужно грамотно собирать доказательства.</strong> Чтобы максимально защитить свои интересы,
                    важно корректно оформить экспертное заключение, акт осмотра и претензию.
                  </p>
                </div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mt-6">
                  Бесплатная консультация с нами по телефону:{" "}
                  <a
                    href="tel:+79122285809"
                    className="text-gray-900 hover:text-gray-600 transition-colors underline font-semibold"
                  >
                    8-912-22-858-09
                  </a>
                </p>
              </section>

              {/* Ссылка на решение */}
              <section className="mb-10 sm:mb-12">
                <a
                  href="https://oblsud--svd.sudrf.ru/modules.php?name=sud_delo&srv_num=1&name_op=doc&number=17623564&delo_id=5&new=5&text_number=1"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex items-center gap-3 text-base sm:text-lg text-gray-900 hover:text-gray-600 transition-colors underline"
                >
                  <span>Ссылка на решение Свердловского областного суда</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10 2L18 10L10 18M2 10H18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
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
