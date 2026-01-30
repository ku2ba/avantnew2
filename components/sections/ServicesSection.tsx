import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const services = [
  {
    title: "Приемка",
    description: "Профессиональная приемка квартир с выявлением всех дефектов",
    href: "/priemka-kvartir-ekaterinburg",
  },
  {
    title: "Споры с застройщиком",
    description: "Помощь в спорах с застройщиком и защита ваших прав",
    href: "/yurist-po-nedvizhimosti",
  },
  {
    title: "Строительно-техническая экспертиза",
    description: "Профессиональная экспертиза строительных объектов",
    href: "/example",
  },
  {
    title: "Помощь в сфере криптовалют",
    description: "Юридическая поддержка в вопросах криптовалют",
    href: "/example",
  },
  {
    title: "Экспертиза после потопа/пожара",
    description: "Оценка ущерба и помощь в восстановлении прав",
    href: "/example",
  },
  {
    title: "Взыскание задолженности",
    description: "Помощь во взыскании задолженности",
    href: "/example",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-12 sm:mb-16 text-left">
          Наши услуги
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href || "/example"}
              data-analytics-event="navigation_click"
              data-analytics-location="services"
              data-analytics-label={`Services: ${service.title}`}
              data-analytics-page-path={service.href || "/example"}
            >
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
