"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CaseItem {
  title: string
  amount: string
  link: string
}

interface CasesSectionProps {
  cases: CaseItem[]
}

export default function CasesSection({ cases }: CasesSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(3)
      } else if (window.innerWidth >= 768) {
        setVisibleCount(2)
      } else {
        setVisibleCount(1)
      }
    }

    updateVisibleCount()
    window.addEventListener("resize", updateVisibleCount)
    return () => window.removeEventListener("resize", updateVisibleCount)
  }, [])

  const maxIndex = Math.max(0, cases.length - visibleCount)

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      if (prev >= maxIndex) return 0
      return prev + 1
    })
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      if (prev <= 0) return maxIndex
      return prev - 1
    })
  }

  return (
    <section className="py-24 sm:py-32 bg-black text-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-12 sm:mb-16 text-left text-white">
          Решенные нами судебные дела
        </h2>
        
        <div className="relative">
          {/* Карусель */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
            >
              {cases.map((caseItem, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-3"
                  style={{ 
                    width: `${100 / visibleCount}%`,
                    minWidth: `${100 / visibleCount}%`,
                  }}
                >
                  <Card className="bg-gray-900 border-gray-800 text-white flex flex-col h-full">
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
                </div>
              ))}
            </div>
          </div>

          {/* Стрелки навигации */}
          {cases.length > visibleCount && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-8 z-10 w-10 h-10 bg-[#c3a255] hover:bg-[#b8944a] rounded-full flex items-center justify-center text-white transition-colors shadow-lg"
                aria-label="Предыдущий кейс"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-8 z-10 w-10 h-10 bg-[#c3a255] hover:bg-[#b8944a] rounded-full flex items-center justify-center text-white transition-colors shadow-lg"
                aria-label="Следующий кейс"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
