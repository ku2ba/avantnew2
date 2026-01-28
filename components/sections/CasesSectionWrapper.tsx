import { getAllCaseSummaries } from "@/lib/cases"
import CasesSection from "./CasesSection"

const staticCases = [
  {
    title: 'Дело против АО СЗ «РСГ-Академический». Суд ограничил взыскание с застройщика по новым правилам',
    amount: "524 248 рублей",
    link: "/blog/sud-ogranichil-vzyskanie-s-zastroyschika-po-novym-pravilam",
  },
  {
    title: 'Дело против АО СЗ «РСГ-Академический». Как суд ограничил взыскание с застройщика по новым правилам',
    amount: "250 000 рублей",
    link: "/blog/kak-sud-sokratil-summu-vzyskaniya-s-zastroyschika-v-dva-raza",
  },
  {
    title: 'Суд с застройщиком ЖК "Самоцветы". Как получить 777 000 ₽ от застройщика в Екатеринбурге',
    amount: "777 000 рублей",
    link: "/blog/keis-kak-polychit-777-ot-zastroishika",
  },
]

export default async function CasesSectionWrapper() {
  const dynamicCases = await getAllCaseSummaries()
  const cases = [
    ...staticCases,
    ...dynamicCases.map((item) => ({
      title: item.title,
      amount: item.amount ?? "сумма не указана",
      link: `/cases/${item.id}`,
    })),
  ]

  return <CasesSection cases={cases} />
}
