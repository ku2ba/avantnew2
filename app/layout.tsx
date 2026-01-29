import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/Header"
import MainNavigation from "@/components/NavigationMenu"
import Footer from "@/components/Footer"
import Widget from "@/components/Widget"
import Analytics from "@/components/Analytics"

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className="font-unbounded antialiased">
        <Analytics />
        <Header />
        <MainNavigation />
        <main>{children}</main>
        <Footer />
        <Widget />
      </body>
    </html>
  )
}
