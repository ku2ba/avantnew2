// Утилиты для работы с аналитикой (GA4 и Яндекс.Метрика)

interface AttributionParams {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_content?: string
  utm_term?: string
  gclid?: string
  yclid?: string
}

interface AnalyticsEventParams {
  location: "header" | "slider" | "team" | "widget" | "NavigationMenu" | "contacts"
  action?: string
  label: string
  phone?: string
  slide_id?: string
  form_id?: string
  error_type?: string
  error_code?: string
  [key: string]: string | undefined
}

// Сохранение UTM-параметров в localStorage
export function saveAttributionParams(): void {
  if (typeof window === "undefined") return

  const urlParams = new URLSearchParams(window.location.search)
  const stored = localStorage.getItem("analytics_attribution")
  let storedParams: AttributionParams = {}

  if (stored) {
    try {
      storedParams = JSON.parse(stored)
    } catch (e) {
      // Игнорируем ошибки парсинга
    }
  }

  // Обновляем только если есть новые параметры в URL
  const newParams: AttributionParams = {}
  const utmSource = urlParams.get("utm_source")
  const utmMedium = urlParams.get("utm_medium")
  const utmCampaign = urlParams.get("utm_campaign")
  const utmContent = urlParams.get("utm_content")
  const utmTerm = urlParams.get("utm_term")
  const gclid = urlParams.get("gclid")
  const yclid = urlParams.get("yclid")

  if (utmSource) newParams.utm_source = utmSource
  if (utmMedium) newParams.utm_medium = utmMedium
  if (utmCampaign) newParams.utm_campaign = utmCampaign
  if (utmContent) newParams.utm_content = utmContent
  if (utmTerm) newParams.utm_term = utmTerm
  if (gclid) newParams.gclid = gclid
  if (yclid) newParams.yclid = yclid

  // Сохраняем только если есть новые параметры или если еще ничего не сохранено
  if (Object.keys(newParams).length > 0 || !stored) {
    const mergedParams = { ...storedParams, ...newParams }
    localStorage.setItem("analytics_attribution", JSON.stringify(mergedParams))
  }
}

// Получение сохраненных параметров атрибуции
export function getAttributionParams(): AttributionParams {
  if (typeof window === "undefined") return {}

  const stored = localStorage.getItem("analytics_attribution")
  if (!stored) return {}

  try {
    return JSON.parse(stored)
  } catch (e) {
    return {}
  }
}

// Нормализация номера телефона
export function normalizePhone(phone: string): string {
  // Удаляем все нецифровые символы кроме +
  let normalized = phone.replace(/[^\d+]/g, "")

  // Если номер начинается с 8, заменяем на +7
  if (normalized.startsWith("8")) {
    normalized = "+7" + normalized.substring(1)
  }

  // Если номер начинается с 7, добавляем +
  if (normalized.startsWith("7") && !normalized.startsWith("+7")) {
    normalized = "+" + normalized
  }

  // Если номер не начинается с +, добавляем +7
  if (!normalized.startsWith("+")) {
    normalized = "+7" + normalized
  }

  return normalized
}

// Отправка события в Google Analytics 4
function sendToGA4(eventName: string, params: AnalyticsEventParams): void {
  if (typeof window === "undefined") return

  const gtag = (window as any).gtag
  if (!gtag) {
    console.warn("GA4 gtag not loaded")
    return
  }

  const attribution = getAttributionParams()
  const eventParams: Record<string, any> = {
    ...params,
    ...attribution,
  }

  gtag("event", eventName, eventParams)
}

// Отправка события в Яндекс.Метрику
function sendToYandex(eventName: string, params: AnalyticsEventParams): void {
  if (typeof window === "undefined") return

  const ym = (window as any).ym
  if (!ym) {
    console.warn("Yandex Metrika not loaded")
    return
  }

  const attribution = getAttributionParams()
  const eventParams: Record<string, any> = {
    ...params,
    ...attribution,
  }

  // Яндекс.Метрика использует reachGoal для кастомных событий
  // Но для более гибкой работы используем params
  ym(106515629, "reachGoal", eventName, eventParams)
}

// Универсальная функция отправки события
export function trackEvent(eventName: string, params: AnalyticsEventParams): void {
  sendToGA4(eventName, params)
  sendToYandex(eventName, params)
}

// Специфичные функции для разных типов событий
export function trackLeadMenuOpen(location: AnalyticsEventParams["location"], label: string): void {
  trackEvent("lead_menu_open", {
    location,
    label,
  })
}

export function trackLeadClick(
  location: AnalyticsEventParams["location"],
  action: string,
  label: string,
  phone?: string,
  slide_id?: string
): void {
  const params: AnalyticsEventParams = {
    location,
    action,
    label,
  }

  if (phone) {
    params.phone = normalizePhone(phone)
  }

  if (slide_id) {
    params.slide_id = slide_id
  }

  trackEvent("lead_click", params)
}

export function trackFormOpen(
  location: AnalyticsEventParams["location"],
  form_id: string,
  label: string,
  slide_id?: string
): void {
  const params: AnalyticsEventParams = {
    location,
    form_id,
    label,
  }

  if (slide_id) {
    params.slide_id = slide_id
  }

  trackEvent("form_open", params)
}

export function trackFormStart(
  location: AnalyticsEventParams["location"],
  form_id: string,
  label: string
): void {
  trackEvent("form_start", {
    location,
    form_id,
    label,
  })
}

export function trackFormSubmitSuccess(
  location: AnalyticsEventParams["location"],
  form_id: string,
  label: string
): void {
  trackEvent("form_submit_success", {
    location,
    form_id,
    label,
  })
}

export function trackFormSubmitError(
  location: AnalyticsEventParams["location"],
  form_id: string,
  label: string,
  error_type?: string,
  error_code?: string
): void {
  const params: AnalyticsEventParams = {
    location,
    form_id,
    label,
  }

  if (error_type) params.error_type = error_type
  if (error_code) params.error_code = error_code

  trackEvent("form_submit_error", params)
}

export function trackFormClose(
  location: AnalyticsEventParams["location"],
  form_id: string,
  label: string
): void {
  trackEvent("form_close", {
    location,
    form_id,
    label,
  })
}

export function trackFormAbandon(
  location: AnalyticsEventParams["location"],
  form_id: string,
  label: string
): void {
  trackEvent("form_abandon", {
    location,
    form_id,
    label,
  })
}

export function trackPhoneClick(
  location: AnalyticsEventParams["location"],
  phone: string,
  label: string,
  slide_id?: string
): void {
  const params: AnalyticsEventParams = {
    location,
    action: "phone",
    label,
    phone: normalizePhone(phone),
  }

  if (slide_id) {
    params.slide_id = slide_id
  }

  trackEvent("phone_click", params)
}
