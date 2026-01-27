import Image from "next/image"

interface PageHeroProps {
  title: string
  description?: string
}

export default function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="relative w-full bg-gradient-to-b from-black via-black/90 to-white pt-12 sm:pt-16 lg:pt-20 pb-10 sm:pb-12 lg:pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="relative mb-8 sm:mb-10 lg:mb-12">
          <Image
            src="/avant_logo_text_white.png"
            alt="Юридическая компания АВАНТ"
            width={360}
            height={80}
            priority
            className="h-auto w-56 sm:w-72 lg:w-[360px] object-contain drop-shadow-lg"
          />
        </div>

        {/* Основной SEO-заголовок страницы */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center text-gray-300 max-w-4xl">
          {title}
        </h1>

        {/* Краткое SEO-описание под H1 */}
        {description && (
          <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-center text-gray-700 max-w-3xl">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
