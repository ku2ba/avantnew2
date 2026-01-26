import type { Metadata } from "next"
import { Unbounded } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import MainNavigation from "@/components/NavigationMenu"

const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  variable: "--font-unbounded",
  display: "swap",
})

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
    <html lang="ru" className={unbounded.variable}>
      <body className="font-unbounded antialiased">
        <Header />
        <MainNavigation />
        <main>{children}</main>
      </body>
    </html>
  )
}
