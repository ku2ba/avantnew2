import { Metadata } from "next"
import Link from "next/link"
import PageHero from "@/components/PageHero"
import PageContent from "@/components/PageContent"

export const metadata: Metadata = {
  title: "Новое ограничение компенсаций дольщикам: как суд сократил сумму взыскания с застройщика в два раза | Блог АВАНТ",
  description:
    "Дело № 33-10012/2025. Апелляционное определение от 01.08.2025, Свердловский областной суд. Как новые ограничения по статье 10 214-ФЗ повлияли на размер взыскания с застройщика.",
  keywords:
    "суд, застройщик, взыскание, компенсация, 214-ФЗ, лимит 3%, дефекты квартиры, Екатеринбург, РСГ-Академическое",
  openGraph: {
    url: "https://avantekb.ru/blog/kak-sud-sokratil-summu-vzyskaniya-s-zastroyschika-v-dva-raza",
    title: "Новое ограничение компенсаций дольщикам: как суд сократил сумму взыскания",
    description: "Анализ дела, где суд применил новые ограничения по статье 10 214-ФЗ и сократил взыскание в два раза",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Как суд сократил сумму взыскания с застройщика в два раза",
    description: "Применение новых ограничений по статье 10 214-ФЗ",
  },
  alternates: {
    canonical: "https://avantekb.ru/blog/kak-sud-sokratil-summu-vzyskaniya-s-zastroyschika-v-dva-raza",
  },
}

export default function KakSudSokratilSummuPage() {
  return (
    <>
      <PageHero
        title="Новое ограничение компенсаций дольщикам: как суд сократил сумму взыскания с застройщика в два раза"
      />

      <PageContent>
              {/* Вступление */}
              <section className="mb-10 sm:mb-12">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 italic">
                  <strong>Дело № 33-10012/2025 (№ 2-137/2025)</strong>
                  <br />
                  <strong>Апелляционное определение от 01.08.2025, Свердловский областной суд</strong>
                </p>
              </section>

              {/* Ссылка на решение */}
              <section className="mb-10 sm:mb-12">
                <a
                  href="https://oblsud--svd.sudrf.ru/modules.php?name=sud_delo&srv_num=1&name_op=doc&number=18340800&delo_id=5&new=5&text_number=1"
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

              {/* Обстоятельства дела */}
              <section className="mb-10 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-gray-900">Обстоятельства дела</h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Супруги приобрели квартиру у застройщика <strong>АО СЗ «РСГ-Академическое»</strong> по договору долевого
                  участия от 23 июня 2022 г. Стоимость квартиры — <strong>8 419 331 ₽</strong>.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  После приёмки и начала эксплуатации были выявлены <strong>существенные строительные дефекты</strong>:
                  неровные стены и пол, повреждённые дверные полотна, трещины на стеклопакетах, инфильтрация в оконных швах
                  и другие нарушения строительных норм.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  По результатам обследования независимого специалиста стоимость устранения недостатков составила{" "}
                  <strong>362 303 ₽</strong>, а судебная экспертиза оценила восстановительные работы уже в{" "}
                  <strong>524 248 ₽</strong>.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Покупатели направили претензию застройщику, но <strong>ответа не получили</strong> и обратились в суд.
                </p>
              </section>

              {/* Решение суда первой инстанции */}
              <section className="mb-10 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-gray-900">
                  Решение суда первой инстанции
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Верх-Исетский районный суд г. Екатеринбурга 17 апреля 2025 г. <strong>удовлетворил требования частично</strong>{" "}
                  и взыскал с застройщика:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base sm:text-lg text-gray-700 mb-4">
                  <li>524 248 ₽ — стоимость устранения строительных дефектов;</li>
                  <li>25 000 ₽ — экспертиза;</li>
                  <li>12 000 ₽ — тепловизионное обследование;</li>
                  <li>25 000 ₽ — юридические услуги;</li>
                  <li>20 000 ₽ — компенсация морального вреда (по 10 000 ₽ каждому).</li>
                </ul>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Также взыскана госпошлина — 18 484 ₽ в доход бюджета.
                </p>
              </section>

              {/* Апелляция */}
              <section className="mb-10 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-gray-900">Апелляция</h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  АО СЗ «РСГ-Академическое» подало апелляционную жалобу, настаивая, что суд <strong>не применил новый пункт 4 статьи 10</strong>{" "}
                  Федерального закона № 214-ФЗ <em>«Об участии в долевом строительстве»</em>, введённый{" "}
                  <strong>Федеральным законом № 482-ФЗ от 26.12.2024</strong>.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Этот пункт, вступивший в силу <strong>с 1 января 2025 года</strong>, ограничивает общую сумму взысканий с
                  застройщика <strong>3 % от цены договора</strong>, если речь идёт о недостатках отделки, окон, дверей,
                  сантехники и т. п.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Именно на это нововведение и сослался застройщик, требуя <strong>снизить взыскание с 524 248 ₽ до 252 579 ₽ (3 % от 8,4 млн)</strong>.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  <strong>Свердловский областной суд</strong> подтвердил, что новые нормы действительно <strong>имеют обратную силу</strong>{" "}
                  в части обязательств, возникающих после 1 января 2025 г., если спор не завершён.
                </p>
              </section>

              {/* Итог апелляции */}
              <section className="mb-10 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-gray-900 text-center">
                  Итог апелляции
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Апелляционная инстанция <strong>изменила решение суда</strong>, сократив присуждённые суммы:
                </p>
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full border border-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left text-base font-semibold text-gray-900">
                          Вид взыскания
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left text-base font-semibold text-gray-900">
                          Было (₽)
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left text-base font-semibold text-gray-900">
                          Стало (₽)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 text-base text-gray-700">Устранение недостатков</td>
                        <td className="border border-gray-300 px-4 py-2 text-base text-gray-700">524 248</td>
                        <td className="border border-gray-300 px-4 py-2 text-base font-semibold text-gray-900">
                          252 579,93
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 text-base text-gray-700">Обследование строительное</td>
                        <td className="border border-gray-300 px-4 py-2 text-base text-gray-700">25 000</td>
                        <td className="border border-gray-300 px-4 py-2 text-base font-semibold text-gray-900">12 000</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 text-base text-gray-700">
                          Тепловизионное обследование
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-base text-gray-700">12 000</td>
                        <td className="border border-gray-300 px-4 py-2 text-base font-semibold text-gray-900">5 760</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 text-base text-gray-700">Юридические услуги</td>
                        <td className="border border-gray-300 px-4 py-2 text-base text-gray-700">25 000</td>
                        <td className="border border-gray-300 px-4 py-2 text-base font-semibold text-gray-900">12 000</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 text-base text-gray-700">Госпошлина в доход бюджета</td>
                        <td className="border border-gray-300 px-4 py-2 text-base text-gray-700">18 484</td>
                        <td className="border border-gray-300 px-4 py-2 text-base font-semibold text-gray-900">6 025,80</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Таким образом, общая сумма компенсации <strong>сокращена почти вдвое</strong>.
                </p>
              </section>

              {/* Выводы */}
              <section className="mb-10 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-gray-900">Ключевые выводы</h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Это одно из первых дел, где <strong>новая редакция статьи 10 214-ФЗ</strong> реально применилась судами к
                  спорам, начавшимся до 2025 года.
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
                    «Ситуация показывает, как быстро застройщики начали использовать "трёхпроцентный лимит" в судах.
                  </p>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 italic">
                    Для дольщиков это означает, что теперь особенно важно <strong>фиксировать не только дефекты отделки</strong>,
                    но и нарушения, связанные с конструктивом, инженерией или безопасностью жилья — по таким категориям лимит
                    не действует.
                  </p>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed italic">
                    Также имеет значение, <strong>когда именно подано исковое заявление</strong>: чем раньше, тем выше шансы
                    взыскать полную стоимость устранения недостатков».
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
                    <strong>① Проводите независимую экспертизу</strong> сразу после приёмки квартиры.
                  </p>
                  <p>
                    <strong>② Фиксируйте</strong> все дефекты актами, фото и видео.
                  </p>
                  <p>
                    <strong>③ Если суд уже идёт — готовьтесь к возможному снижению суммы</strong> по п. 4 ст. 10 214-ФЗ, но
                    используйте аргументы о несоответствии дефектов понятию «отделочные».
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
