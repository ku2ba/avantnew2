import { Metadata } from "next"
import HeroSection from "@/components/sections/HeroSection"
import ServicesSection from "@/components/sections/ServicesSection"
import CasesSectionWrapper from "@/components/sections/CasesSectionWrapper"
import TeamSection from "@/components/sections/TeamSection"

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
      <CasesSectionWrapper />
      <TeamSection />
    </>
  )
}
