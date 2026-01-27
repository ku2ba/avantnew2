import { ReactNode } from "react"

interface PageContentProps {
  children: ReactNode
}

export default function PageContent({ children }: PageContentProps) {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
        <article className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">{children}</div>
        </article>
      </div>
    </div>
  )
}
