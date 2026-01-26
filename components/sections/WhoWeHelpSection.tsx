import { Card } from "@/components/ui/card"

const helpGroups = [
  {
    title: "Жителям Екатеринбурга и городов спутников, планирующим заезжать в новостройку",
    bgColor: "bg-[#c3a255]",
  },
  {
    title: "Жителям Екатеринбурга и городов спутников, проживающим в новостройках не старше 5 лет",
    bgColor: "bg-black",
    align: "text-right",
  },
  {
    title: "Юридическим лицам по строительным спорам и взысканию задолженностей",
    bgColor: "bg-black",
  },
  {
    title: "Потребителям, столкнувшимся с нарушением их прав",
    bgColor: "bg-[#c3a255]",
    align: "text-right",
  },
]

export default function WhoWeHelpSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-16 sm:mb-20">
          Кому мы помогаем
        </h2>

        <div className="space-y-4">
          {helpGroups.map((group, index) => (
            <Card
              key={index}
              className={`${group.bgColor} text-white p-8 sm:p-12 rounded-none border-0 ${
                group.align || "text-left"
              }`}
            >
              <h3 className="text-xl sm:text-2xl font-medium">{group.title}</h3>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
