import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const cases = [
  {
    title: 'Дело против АО СЗ «РСГ-Академический»',
    amount: "524 248 рублей",
    link: "/example",
  },
  {
    title: 'Дело против АО СЗ «РСГ-Академический»',
    amount: "250 000 рублей",
    link: "/example",
  },
  {
    title: 'Суд с застройщиком ЖК "Самоцветы"',
    amount: "777 000 рублей",
    link: "/example",
  },
]

export default function CasesSection() {
  return (
    <section className="py-24 sm:py-32 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-12 sm:mb-16 text-left text-white">
          Решенные нами судебные дела
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cases.map((caseItem, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800 text-white flex flex-col">
              <CardHeader className="flex flex-col items-center text-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mb-4 relative rounded-full overflow-hidden bg-gray-800 flex items-center justify-center">
                  <Image
                    src="/business-time-solid-full.svg"
                    alt={caseItem.title}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <CardTitle className="text-lg sm:text-xl text-white mb-2">
                  {caseItem.title}
                </CardTitle>
                <CardDescription className="text-white/80 text-base sm:text-lg font-semibold">
                  Взыскали {caseItem.amount}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex items-end">
                <Button
                  asChild
                  className="w-full bg-[#c3a255] hover:bg-[#b8944a] text-white"
                >
                  <Link href={caseItem.link}>Подробнее</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
