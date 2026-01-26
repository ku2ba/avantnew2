"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import ContactForm from "@/components/ContactForm"

const slides = [
  {
    id: 1,
    title: "Защита прав потребителей\nв сфере недвижимости",
    description: (
      <>
        <strong>Помогаем жителям Екатеринбурга получить от застройщика компенсацию</strong>
        <br />
        <strong>за дефекты отделки, нарушение срока передачи и иные нарушения договора</strong>
        <br />
        <br />
        <ul className="list-disc list-inside space-y-2">
          <li>Выявим дефекты и нарушения</li>
          <li>Направим претензию и проведем переговоры с застройщиком</li>
          <li>Защитим ваши интересы в суде</li>
          <li>Получим для вас компенсацию</li>
        </ul>
        <p className="mt-4">
          Позвоните нам самостоятельно{" "}
          <a href="tel:+73432728180" className="underline">
            +7 (343) 272-81-80
          </a>
        </p>
      </>
    ),
    image: "/Защита%20прав%20потребителей%20в%20сфере%20недвижимости.jpeg",
    buttonText: "ОСТАВИТЬ ЗАЯВКУ НА БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ",
  },
  {
    id: 2,
    title: "Приемка квартиры\nсо строительным экспертом",
    description: (
      <>
        Подробнее об услуге читайте тут -{" "}
        <strong>
          <a href="/priemka-kvartir-ekaterinburg" className="underline">
            клик
          </a>
        </strong>
        <br />
        <br />
        <ul className="list-disc list-inside space-y-2">
          <li>Поверенное и откалиброванное оборудование</li>
          <li>Опыт приемки более сотни квартир</li>
          <li>Тщательно проработанная форма актов</li>
          <li>Точные замеры и подробная дефектовка</li>
        </ul>
      </>
    ),
    image: "/Приемка%20квартиры%20со%20строительным%20экспертом.jpg",
    buttonText: "ОСТАВИТЬ ЗАЯВКУ",
  },
  {
    id: 3,
    title: "Экспертиза\nквартир, частных домов и нежилых помещений",
    description: (
      <>
        Профессиональная помощь профессионального юриста по недвижимости и спорам с застройщиками.
        Подробнее тут -{" "}
        <strong>
          <a href="/yurist-nedvizhimost" className="underline">
            клик
          </a>
        </strong>
        <br />
        <br />
        <ul className="list-disc list-inside space-y-2">
          <li>Строительно-техническая экспертиза</li>
          <li>Тепловизионная экспертиза ограждающих конструкций</li>
          <li>Микологическая экспертиза (грибок и плесень)</li>
          <li>Оценка поврежденного имущества после потопа/пожара</li>
          <li>Экспертиза качества стяжки</li>
        </ul>
      </>
    ),
    image: "/Экспертиза%20квартир,%20частных%20домов%20и%20нежилых%20помещений.jpg",
    buttonText: "ОСТАВИТЬ ЗАЯВКУ",
  },
  {
    id: 4,
    title: "Сопровождение Юридических лиц",
    description: (
      <>
        <strong>Займитесь тем, что Вам нравится, об остальном позаботимся мы</strong>
        <br />
        <br />
        <ul className="list-disc list-inside space-y-2">
          <li>Полное юридическое сопровождение предпринимательской деятельности</li>
          <li>Составление договоров подряда</li>
          <li>Судебное представительство в арбитражных судах</li>
          <li>Взыскание задолженностей</li>
          <li>Получение «закрытой» информации</li>
        </ul>
      </>
    ),
    image: "/Сопровождение%20юридических%20лиц.jpg",
    buttonText: "ОСТАВИТЬ ЗАЯВКУ",
  },
  {
    id: 5,
    title: "Поможем получить компенсацию за дефекты с застройщика",
    description: (
      <>
        Читайте подробнее о услуге тут -{" "}
        <strong>
          <a href="/vzyskat-s-zastroishchika" className="underline">
            клик
          </a>
        </strong>
      </>
    ),
    image: "/Поможем%20получить%20компенсацию%20за%20дефекты%20с%20застройщика.jpg",
    buttonText: "",
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isFormOpen, setIsFormOpen] = useState(false)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
  }

  const currentSlideData = slides[currentSlide]

  return (
    <section className="relative h-[760px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={currentSlideData.image}
          alt={currentSlideData.title}
          fill
          className="object-cover"
          priority={currentSlide === 0}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl pl-8 sm:pl-12 lg:pl-20">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6 whitespace-pre-line">
              {currentSlideData.title}
            </h1>
            <div className="text-lg sm:text-xl text-white mb-8">{currentSlideData.description}</div>
            {currentSlideData.buttonText && (
              <Button
                size="lg"
                className="bg-[#c3a255] hover:bg-[#b8944a] text-white text-base sm:text-lg px-8 py-6"
                onClick={() => setIsFormOpen(true)}
              >
                {currentSlideData.buttonText}
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-[#c3a255] hover:bg-[#b8944a] rounded-full flex items-center justify-center text-white transition-colors"
        aria-label="Предыдущий слайд"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-[#c3a255] hover:bg-[#b8944a] rounded-full flex items-center justify-center text-white transition-colors"
        aria-label="Следующий слайд"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === currentSlide ? "bg-[#c3a255]" : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
      <ContactForm open={isFormOpen} onOpenChange={setIsFormOpen} />
    </section>
  )
}
