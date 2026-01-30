import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const services = [
  {
    title: "Услуга 1",
    description: "Описание услуги будет добавлено позже",
  },
  {
    title: "Услуга 2",
    description: "Описание услуги будет добавлено позже",
  },
  {
    title: "Услуга 3",
    description: "Описание услуги будет добавлено позже",
  },
]

export default function ServicesLegalSection() {
  return (
    <section className="py-24 sm:py-32 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-12 sm:mb-16 text-left text-white">
          Услуги юридическим лицам
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href="/example"
              data-analytics-event="navigation_click"
              data-analytics-location="services"
              data-analytics-label={`Services Legal: ${service.title}`}
              data-analytics-page-path="/example"
            >
              <Card className="flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 cursor-pointer bg-gray-900 border-gray-800 text-white">
                <CardHeader>
                  <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 relative rounded-full overflow-hidden bg-gray-800 flex items-center justify-center">
                    <Image
                      src="/handshake-solid-full.svg"
                      alt={service.title}
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                  <CardTitle className="text-lg sm:text-xl text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm sm:text-base text-white/80">
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
