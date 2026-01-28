import fs from "fs"
import path from "path"
import { casesMetadata } from "./cases-metadata"

export interface CaseSummary {
  id: string
  title: string
  description: string
  amount?: string
}

const BLOG_DIR = path.join(process.cwd(), "for_blog")

function formatAmount(value: number): string {
  const rounded = Math.round(value)
  return `${rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} рублей`
}

function extractTitleAndBody(raw: string): { title: string; body: string } {
  const lines = raw.split(/\r?\n/)
  const nonEmptyIndex = lines.findIndex((l) => l.trim() !== "")
  let title = nonEmptyIndex === -1 ? "Кейс" : lines[nonEmptyIndex].trim()
  
  // Убираем ** из начала и конца, если есть
  title = title.replace(/^\*\*/, "").replace(/\*\*$/, "").trim()

  // Пропускаем заголовок и следующую пустую строку
  let bodyStartIndex = nonEmptyIndex + 1
  if (bodyStartIndex < lines.length && lines[bodyStartIndex].trim() === "") {
    bodyStartIndex++
  }
  
  const bodyLines = lines.slice(bodyStartIndex)
  const body = bodyLines.join("\n").trim()

  return { title, body }
}

function extractDescription(body: string): string {
  // Берем первый осмысленный абзац без заголовков и служебных строк
  const paragraphs = body.split(/\n{2,}/).map((p) => p.trim()).filter(Boolean)
  
  // Пропускаем служебные строки и заголовки
  const skipPatterns = [
    /^###/,
    /^Имена участников/i,
    /^Факты?\.?$/i,
    /^Суть спора\.?$/i,
    /^Фактура и процесс\.?$/i,
    /^Что произошло\.?$/i,
    /^Обстоятельства дела\.?$/i,
    /^1\.\s*Требования/i,
    /^Дело:/i,
  ]
  
  // Ищем первый осмысленный абзац
  let firstContent: string | undefined
  
  for (const p of paragraphs) {
    // Пропускаем заголовки и служебные строки
    if (skipPatterns.some(pattern => pattern.test(p))) {
      continue
    }
    
    // Пропускаем очень короткие строки (менее 30 символов) - это обычно служебные
    if (p.length < 30) {
      continue
    }
    
    // Если абзац начинается с нумерации (1., 2., и т.д.), но достаточно длинный - берем его
    // Но если это просто "1. Требования" - пропускаем
    if (/^\d+\.\s+/.test(p) && p.length > 50) {
      firstContent = p
      break
    }
    
    // Обычный абзац - берем его
    firstContent = p
    break
  }
  
  if (!firstContent) {
    // Если не нашли подходящий абзац, берем первый непустой длинный абзац
    const fallback = paragraphs.find((p) => p.length > 50 && !p.startsWith("###"))
    if (fallback) {
      const desc = fallback.length <= 250 ? fallback : fallback.slice(0, 247).trimEnd() + "..."
      return desc
    }
    return ""
  }

  // Ограничим длину для превью (оптимально 200-250 символов)
  if (firstContent.length <= 250) return firstContent
  return firstContent.slice(0, 247).trimEnd() + "..."
}

function extractMaxAmount(body: string): string | undefined {
  // Ищем раздел "Итог" или "Резолютивно" или "Итоговое решение"
  const sections = body.split(/\n{2,}/)
  let relevantSection = ""
  
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i].trim()
    if (
      section.match(/^###?\s*(Итог|Резолютивно|Итоговое решение|Резолютивный итог)/i) ||
      section.match(/^(Итог|Резолютивно|Итоговое решение|Резолютивный итог)/i)
    ) {
      // Берем этот раздел и следующие 2-3 раздела
      relevantSection = sections.slice(i, i + 3).join("\n\n")
      break
    }
  }
  
  // Если не нашли специальный раздел, ищем в конце текста (последние 30% текста)
  if (!relevantSection) {
    const lines = body.split(/\n/)
    const startIndex = Math.floor(lines.length * 0.7)
    relevantSection = lines.slice(startIndex).join("\n")
  }
  
  // Ищем все суммы вида "123 456 руб." / "123 456 рублей" / "123 456,50 руб."
  const regex = /(\d[\d\s]*\d(?:[.,]\d{1,2})?)\s*руб[^\s]*/gi
  let match: RegExpExecArray | null
  let total = 0
  const foundAmounts: number[] = []

  while ((match = regex.exec(relevantSection)) !== null) {
    const rawNumber = match[1].replace(/\s/g, "").replace(",", ".")
    const num = Number(rawNumber)
    if (!Number.isNaN(num) && num > 0) {
      foundAmounts.push(num)
      total += num
    }
  }

  // Если нашли суммы, возвращаем общую сумму
  if (total > 0) {
    return formatAmount(total)
  }
  
  // Если не нашли в итоговом разделе, ищем максимальную сумму во всем тексте
  const allMatches: number[] = []
  const globalRegex = /(\d[\d\s]*\d(?:[.,]\d{1,2})?)\s*руб[^\s]*/gi
  let globalMatch: RegExpExecArray | null
  
  while ((globalMatch = globalRegex.exec(body)) !== null) {
    const rawNumber = globalMatch[1].replace(/\s/g, "").replace(",", ".")
    const num = Number(rawNumber)
    if (!Number.isNaN(num) && num > 0 && num < 100000000) {
      // Исключаем слишком большие числа (вероятно, это цены квартир, а не взыскания)
      allMatches.push(num)
    }
  }
  
  if (allMatches.length > 0) {
    // Берем максимальную сумму, но не больше 10 млн (чтобы исключить цены квартир)
    const maxValue = Math.max(...allMatches.filter(n => n < 10000000))
    if (maxValue > 0) {
      return formatAmount(maxValue)
    }
  }

  return undefined
}

export async function getAllCaseSummaries(): Promise<CaseSummary[]> {
  let files: string[] = []

  try {
    files = await fs.promises.readdir(BLOG_DIR)
  } catch {
    return []
  }

  const txtFiles = files.filter((name) => name.toLowerCase().endsWith(".txt"))

  const summaries: CaseSummary[] = []

  for (const file of txtFiles) {
    const id = path.basename(file, ".txt")
    const fullPath = path.join(BLOG_DIR, file)

    try {
      // Используем метаданные из cases-metadata.ts, если они есть
      const metadata = casesMetadata[id]
      
      if (metadata) {
        // Используем метаданные из файла
        summaries.push({ 
          id, 
          title: metadata.title, 
          description: metadata.description,
          amount: metadata.amount
        })
      } else {
        // Fallback на автоматическое извлечение, если метаданных нет
        const raw = await fs.promises.readFile(fullPath, "utf8")
        const { title, body } = extractTitleAndBody(raw)
        const description = extractDescription(body)
        const amount = extractMaxAmount(body)

        summaries.push({ id, title, description, amount })
      }
    } catch {
      // Если с каким-то файлом проблема — просто пропускаем его
      continue
    }
  }

  // Сортируем по id как по числу, чтобы 1,2,3,...,15
  summaries.sort((a, b) => Number(a.id) - Number(b.id))

  return summaries
}

