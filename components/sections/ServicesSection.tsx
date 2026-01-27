import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const services = [
  {
    title: "Приемка квартир",
    description: "Профессиональная приемка квартир с выявлением всех дефектов",
    href: "/priemka-kvartir-ekaterinburg",
  },
  {
    title: "Взыскание с застройщика",
    description: "Помощь в получении компенсации от застройщика",
    href: "/vzyskat-s-zastroishchika",
  },
  {
    title: "Найдем дефекты в квартире",
    description: "Что делать при обнаружении строительных недостатков",
    href: "/defekty-v-kvartire-chto-delat",
  },
  {
    title: "Калькулятор неустойки",
    description: "Расчет неустойки с застройщика за просрочку сдачи",
    href: "/neustojka",
  },
  {
    title: "Юрист по недвижимости",
    description: "Специализация на спорах с застройщиками",
    href: "/yurist-po-nedvizhimosti",
  },
  {
    title: "Помощь в сфере криптовалют",
    description: "Юридическая поддержка в вопросах криптовалют",
    href: "/example",
  },
  {
    title: "Защита прав потребителей",
    description: "Защита ваших прав как потребителя",
    href: "/example",
  },
  {
    title: "Банкротство",
    description: "Помощь в процедуре банкротства физических лиц",
    href: "/example",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-12 sm:mb-16 text-left">
          Услуги физическим лицам
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Link key={index} href={service.href || "/example"}>
              <Card className="flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <CardHeader>
                  <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 relative rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                    <Image
                      src="/handshake-solid-full.svg"
                      alt={service.title}
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm sm:text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
