import { Metadata } from "next"
import HeroSection from "@/components/sections/HeroSection"
import WhoWeHelpSection from "@/components/sections/WhoWeHelpSection"
import ProblemsSection from "@/components/sections/ProblemsSection"
import ServicesSection from "@/components/sections/ServicesSection"
import CasesSection from "@/components/sections/CasesSection"
import TeamSection from "@/components/sections/TeamSection"
import ServicesLegalSection from "@/components/sections/ServicesLegalSection"
import CtaSection from "@/components/sections/CtaSection"

export const metadata: Metadata = {
  title: "Защита прав потребителей в сфере недвижимости",
  description:
    "Помогает грамотно принять квартиру в новостройке, выявить скрытые дефекты, получить компенсацию от застройщика. Оплата за результат. Бесплатная консультация по телефону",
  keywords: "неустойка дду застройщик приемка квартиры",
  openGraph: {
    url: "https://avantekb.ru",
    title: "Юридическая компания АВАНТ - защита прав в сфере недвижимости",
    description:
      "Помогаем получить от застройщика компенсацию за дефекты отделки, просрочку сдачи и иные нарушения договора",
    type: "website",
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <CasesSection />
      <TeamSection />
      <ServicesLegalSection />
      <WhoWeHelpSection />
      <ProblemsSection />
      <CtaSection />
    </>
  )
}
