import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function TeamSection() {
  return (
    <section className="w-full py-12 px-6 bg-white">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-unbounded font-bold text-black">
          Команда
        </h2>
        <p className="text-sm sm:text-base font-unbounded text-black max-w-md">
          Команда юристов Авант - это сфокусированность на одном направлении. Индивидуальный подход к каждому делу и профессионализм
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <Card>
          <CardHeader className="p-0">
            <div className="relative w-full h-[450px] overflow-hidden rounded-t-lg">
              <Image
                src="/shamil.PNG"
                alt="Шамиль"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <CardTitle className="font-montserrat text-gray-900">Шамиль</CardTitle>
              <CardDescription className="font-montserrat text-gray-600">Руководитель</CardDescription>
            </div>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="p-0">
            <div className="relative w-full h-[450px] overflow-hidden rounded-t-lg">
              <Image
                src="/ivan.PNG"
                alt="Иван"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <CardTitle className="font-montserrat text-gray-900">Иван</CardTitle>
              <CardDescription className="font-montserrat text-gray-600">Юрист</CardDescription>
            </div>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="p-0">
            <div className="relative w-full h-[450px] overflow-hidden rounded-t-lg">
              <Image
                src="/kirill.PNG"
                alt="Кирилл"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <CardTitle className="font-montserrat text-gray-900">Кирилл</CardTitle>
              <CardDescription className="font-montserrat text-gray-600">Юрист</CardDescription>
            </div>
          </CardHeader>
        </Card>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-8 max-w-6xl mx-auto">
        <p className="text-lg sm:text-xl lg:text-2xl font-unbounded text-black text-left">

          Удаленная аудио или видео консультация с квалифицированным юристом по направлению
        </p>
        <Button className="font-unbounded bg-black text-white hover:bg-gray-800">
          Бесплатный созвон с юристом
        </Button>
      </div>
    </section>
  )
}
