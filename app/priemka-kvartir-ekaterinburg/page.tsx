import { Metadata } from "next"
import PageHero from "@/components/PageHero"
import PageContent from "@/components/PageContent"

export const metadata: Metadata = {
  title: "Приемка квартиры в Екатеринбурге - Профессиональная помощь при приемке от застройщика",
  description:
    "Помощь при приемке квартиры от застройщика в Екатеринбурге. Профессиональная проверка квартиры на дефекты, составление акта, защита ваших прав. Стоимость от 5 500 рублей.",
  keywords: "приемка квартиры, Екатеринбург, приемка новостройки, дефекты квартиры, проверка квартиры",
  openGraph: {
    url: "https://avantekb.ru/priemka-kvartir-ekaterinburg",
    title: "Приемка квартиры в Екатеринбурге - АВАНТ",
    description:
      "Профессиональная помощь при приемке квартиры от застройщика. Проверка на дефекты, составление акта, защита прав дольщика.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Приемка квартиры в Екатеринбурге",
    description: "Профессиональная помощь при приемке квартиры от застройщика",
  },
  alternates: {
    canonical: "https://avantekb.ru/priemka-kvartir-ekaterinburg",
  },
}

export default function PriemkaKvartirPage() {
  return (
    <>
      <PageHero
        title="Помощь при приемке квартиры от застройщика в Екатеринбурге"
        description="Профессионально, с гарантией защиты ваших прав. Приемка квартиры в новостройке — это не просто получение ключей, а важный юридический этап, от которого зависит комфорт, безопасность и финансовое спокойствие."
      />

      <PageContent>
              {/* Скрытые дефекты */}
              <section className="mb-10 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-gray-900">
                  Скрытые дефекты в квартире
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Каждая вторая квартира в новостройке имеет серьёзные строительные недостатки. Застройщики не
                  заинтересованы в том, чтобы вы их нашли — наоборот, они стараются как можно быстрее передать объект
                  и снять с себя ответственность. Мы стоим на стороне покупателя. Знаем, как говорить с представителями
                  строительной компании, как оформлять акты, как добиваться устранения недочётов и выплаты компенсаций.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Помощь специалиста при приёмке квартиры особенно важна, если вы покупаете жильё по ДДУ. Этот договор
                  регулируется законодательством, но на практике застройщики часто нарушают ваши права — скрывают
                  технические отклонения, отказываются признавать дефекты или затягивают с их устранением. Мы знаем эти
                  схемы и умеем с ними работать.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Если вы хотите принять квартиру с уверенностью в её качестве — обратитесь к нам. Мы проведём осмотр,
                  защитим ваши интересы и сэкономим ваши нервы. А если застройщик откажется устранять нарушения —
                  взыщем компенсацию в полном объёме.
                </p>
              </section>

              {/* Что входит в приемку */}
              <section className="mb-10 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-gray-900">
                  Что входит в приемку квартиры
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">Осмотр отделки и конструкций</h3>
                    <p className="text-base text-gray-700">
                      Проверим стены, полы, потолки, окна, двери, проёмы, батареи и другие элементы отделки. Ищем
                      трещины, перекосы, сколы, неровности и другие проблемы.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">Проверка электрики и вентиляции</h3>
                    <p className="text-base text-gray-700">
                      Проводим проверку электрики, вентиляции, скрытых коммуникаций. При температуре от –5°C выполняем
                      тепловизионный осмотр для выявления мостиков холода и утечек тепла.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">Замеры площади</h3>
                    <p className="text-base text-gray-700">
                      Замерим площадь квартиры и составим акт, где укажем все найденные недостатки. Этот документ можно
                      передать застройщику для устранения проблем.
                    </p>
                  </div>
                </div>
              </section>

              {/* Стоимость */}
              <section className="mb-10 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-gray-900">
                  Стоимость приемки квартиры
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-base sm:text-lg text-gray-700">До 30 кв.м.</span>
                    <span className="text-lg sm:text-xl font-semibold text-gray-900">5 500 ₽</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-base sm:text-lg text-gray-700">От 30.01 до 50 кв.м.</span>
                    <span className="text-lg sm:text-xl font-semibold text-gray-900">6 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-base sm:text-lg text-gray-700">От 50.01 до 69 кв.м.</span>
                    <span className="text-lg sm:text-xl font-semibold text-gray-900">7 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-base sm:text-lg text-gray-700">От 69.01 до 80 кв.м.</span>
                    <span className="text-lg sm:text-xl font-semibold text-gray-900">8 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-base sm:text-lg text-gray-700">От 80.01 до 100 кв.м.</span>
                    <span className="text-lg sm:text-xl font-semibold text-gray-900">9 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-base sm:text-lg text-gray-700">Более 100 кв.м.</span>
                    <span className="text-lg sm:text-xl font-semibold text-gray-900">10 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center pt-3">
                    <span className="text-base sm:text-lg text-gray-700">Стоимость приемки частного дома</span>
                    <span className="text-lg sm:text-xl font-semibold text-gray-900">от 4 000 ₽</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    Зависит от отдаленности от Екатеринбурга и площади объекта
                  </p>
                </div>
              </section>

              {/* Контакты */}
              <section className="mb-10 sm:mb-12">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Или позвоните нам{" "}
                  <a
                    href="tel:+73432728180"
                    className="text-gray-900 hover:text-gray-600 transition-colors underline font-semibold"
                  >
                    +7 (343) 272-81-80
                  </a>
                </p>
              </section>
      </PageContent>
    </>
  )
}
