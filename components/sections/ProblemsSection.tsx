import { Check } from "lucide-react"

const problems = [
  "Просрочка передачи объекта долевого строительства",
  "Промерзание/продувание стен и окон в новостройке",
  "Некачественный ремонт от застройщика/подрядчика",
  "Отказ застройщика устранять дефекты",
  "Нарушение застройщиком условий договора",
  "Не соответствие площади квартиры по договору",
  "Появление плесени в новостройке",
  "Дефекты отделки, сколы, следы строительного мусора",
  "Недобросовестность строительных бригад застройщика",
  "Неровные стены, полы, потолки",
  "Грубость со стороны представителей застройщика",
  "Проблемы в работе вентиляции",
  "Нарушение прав потребителя",
  "Задолженности по договору",
]

export default function ProblemsSection() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-16 sm:mb-20">
          Проблемы с которыми
          <br />
          сталкиваются наши клиенты:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                <Check className="w-6 h-6 sm:w-8 sm:h-8 text-[#c3a255]" strokeWidth={3} />
              </div>
              <p className="text-lg sm:text-xl font-medium pt-1">{problem}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
