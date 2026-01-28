import { Metadata } from "next"
import path from "path"
import fs from "fs"

import PageHero from "@/components/PageHero"
import PageContent from "@/components/PageContent"
import { getAllCaseSummaries } from "@/lib/cases"

interface CasePageProps {
  params: Promise<{
    id: string
  }>
}

async function getCaseContent(id: string): Promise<{ title: string; body: string; description: string }> {
  const dir = path.join(process.cwd(), "for_blog")
  const filePath = path.join(dir, `${id}.txt`)
  const raw = await fs.promises.readFile(filePath, "utf8")

  const lines = raw.split(/\r?\n/)
  const nonEmptyIndex = lines.findIndex((l) => l.trim() !== "")
  let title = nonEmptyIndex === -1 ? "Кейс" : lines[nonEmptyIndex].trim()
  
  // Убираем ** из начала и конца, если есть (как в lib/cases.ts)
  title = title.replace(/^\*\*/, "").replace(/\*\*$/, "").trim()
  
  const bodyLines = lines.slice(nonEmptyIndex + 1)
  const body = bodyLines.join("\n").trim()

  // Описание берем из lib/cases, чтобы логика была одинаковой
  const summaries = await getAllCaseSummaries()
  const summary = summaries.find((s) => s.id === id)
  const description = summary?.description ?? ""

  return { title, body, description }
}

export async function generateStaticParams() {
  const summaries = await getAllCaseSummaries()
  return summaries.map((s) => ({ id: s.id }))
}

export async function generateMetadata({ params }: CasePageProps): Promise<Metadata> {
  const { id } = await params
  if (!id) {
    return {
      title: "Кейс не найден | Судебный кейс АВАНТ",
      description: "Судебный кейс не найден",
    }
  }
  const { title, description } = await getCaseContent(id)

  const url = `https://avantekb.ru/cases/${id}`

  return {
    title: `${title} | Судебный кейс АВАНТ`,
    description: description || `Судебный кейс юридической компании АВАНТ: ${title}`,
    openGraph: {
      url,
      title: `${title} | Судебный кейс АВАНТ`,
      description: description || `Судебный кейс юридической компании АВАНТ: ${title}`,
      type: "article",
    },
    alternates: {
      canonical: url,
    },
  }
}

function renderBody(body: string) {
  const blocks = body.split(/\n{2,}/).map((b) => b.trim()).filter(Boolean)

  return blocks.map((block, index) => {
    // Заголовок H2
    if (block.startsWith("### ")) {
      const text = block.replace(/^###\s+/, "").trim()
      return (
        <section key={index} className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900">{text}</h2>
        </section>
      )
    }

    // Маркированный список
    if (block.startsWith("* ")) {
      const items = block
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean)
        .map((line) => line.replace(/^\*\s+/, ""))

      return (
        <ul key={index} className="list-disc list-inside space-y-2 mb-6 text-base sm:text-lg text-gray-700 leading-relaxed">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )
    }

    // Обычный абзац
    return (
      <p key={index} className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
        {block}
      </p>
    )
  })
}

export default async function CasePage({ params }: CasePageProps) {
  const { id } = await params
  if (!id) {
    return (
      <>
        <PageHero title="Кейс не найден" description="Запрошенный кейс не найден" />
        <PageContent>
          <p>Кейс с указанным идентификатором не найден.</p>
        </PageContent>
      </>
    )
  }
  const { title, body, description } = await getCaseContent(id)

  return (
    <>
      <PageHero title={title} description={description} />
      <PageContent>
        <section className="mb-10 sm:mb-12">{renderBody(body)}</section>
      </PageContent>
    </>
  )
}

