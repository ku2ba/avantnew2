import { NextRequest, NextResponse } from "next/server"

const TELEGRAM_API = "https://api.telegram.org"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, question, phone } = body

    if (!name || !question || !phone) {
      return NextResponse.json(
        { error: "Не указаны имя, вопрос или телефон" },
        { status: 400 }
      )
    }

    const token = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (!token || !chatId) {
      console.error("TELEGRAM_BOT_TOKEN или TELEGRAM_CHAT_ID не заданы в .env.local")
      return NextResponse.json(
        { error: "Сервер не настроен для отправки в Telegram" },
        { status: 500 }
      )
    }

    const text = [
      "Имя: " + String(name).trim(),
      "Вопрос: " + String(question).trim(),
      "Телефон: " + String(phone).trim(),
    ].join("\n")

    const url = `${TELEGRAM_API}/bot${token}/sendMessage`
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
      }),
    })

    const data = await res.json().catch(() => ({}))
    if (!res.ok || !data.ok) {
      console.error("Telegram API error:", data)
      return NextResponse.json(
        { error: "Не удалось отправить сообщение в Telegram" },
        { status: 502 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (e) {
    console.error("Contact API error:", e)
    return NextResponse.json(
      { error: "Ошибка при отправке заявки" },
      { status: 500 }
    )
  }
}
