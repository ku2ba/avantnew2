// Универсальный обработчик кликов для аналитики
// Использует делегирование событий на document

import {
  trackLeadMenuOpen,
  trackLeadClick,
  trackFormOpen,
  trackPhoneClick,
  trackNavigationClick,
} from "./analytics"

// Инициализация обработчика
export function initAnalyticsHandler(): void {
  if (typeof window === "undefined") return

  // Обработчик кликов на document (делегирование)
  document.addEventListener("click", handleAnalyticsClick, true)

  // Отслеживание открытия dropdown меню через MutationObserver
  observeMenuOpenings()
}

// Обработка кликов по элементам с data-analytics-event
function handleAnalyticsClick(e: MouseEvent): void {
  const target = e.target as HTMLElement
  if (!target) return

  // Ищем ближайший элемент с data-analytics-event
  const analyticsElement = target.closest("[data-analytics-event]") as HTMLElement
  if (!analyticsElement) return

  const eventType = analyticsElement.getAttribute("data-analytics-event")
  if (!eventType) return

  const location = analyticsElement.getAttribute("data-analytics-location") as
    | "header"
    | "slider"
    | "team"
    | "widget"
    | "NavigationMenu"
    | "contacts"
    | "footer"
    | "services"
    | "cases"
  const action = analyticsElement.getAttribute("data-analytics-action")
  const label = analyticsElement.getAttribute("data-analytics-label") || ""
  const phone = analyticsElement.getAttribute("data-analytics-phone")
  const slideId = analyticsElement.getAttribute("data-analytics-slide")
  const pagePath = analyticsElement.getAttribute("data-analytics-page-path")

  // Для внешних ссылок (tel:, https://, mailto:) используем задержку перед переходом
  const href = analyticsElement.getAttribute("href")
  const isExternalLink =
    href && (href.startsWith("tel:") || href.startsWith("http") || href.startsWith("mailto:"))

  // Отправляем событие
  if (eventType === "lead_click" || eventType === "phone_click") {
    if (action === "phone" && phone) {
      trackPhoneClick(location || "header", phone, label, slideId || undefined)
    } else if (action === "callback") {
      // Открытие формы - событие будет отправлено в компоненте ContactForm
      const formId = analyticsElement.getAttribute("data-analytics-form-id") || "contact_callback"
      trackFormOpen(location || "header", formId, label, slideId || undefined)
    } else if (action) {
      trackLeadClick(location || "header", action, label, phone || undefined, slideId || undefined)
    }
  } else if (eventType === "phone_click" && phone) {
    trackPhoneClick(location || "header", phone, label, slideId || undefined)
  } else if (eventType === "navigation_click") {
    trackNavigationClick(
      location || "NavigationMenu",
      label,
      pagePath || undefined,
      slideId || undefined
    )
  }

  // Для внешних ссылок даем время на отправку события перед переходом
  if (isExternalLink && href) {
    // Используем небольшую задержку для надежной отправки события
    // Браузер сам обработает переход, мы не предотвращаем его
    // События GA4 и Яндекс.Метрики обычно успевают отправиться синхронно
  }
}

// Отслеживание открытия dropdown меню
const menuOpenTracked = new Set<string>()

function observeMenuOpenings(): void {
  if (typeof window === "undefined") return

  // Отслеживаем клики на триггерах меню
  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement
    if (!target) return

    const trigger = target.closest("[data-analytics-menu-trigger]") as HTMLElement
    if (!trigger) return

    const location = trigger.getAttribute("data-analytics-location") as
      | "header"
      | "slider"
      | "team"
      | "widget"

    if (!location) return

    // Проверяем, не отслеживали ли мы уже открытие этого меню
    const menuKey = `${location}-${Date.now()}`
    if (menuOpenTracked.has(location)) return

    // Используем небольшую задержку, чтобы убедиться, что меню открылось
    setTimeout(() => {
      const menuContent = document.querySelector(
        `[data-analytics-menu-content][data-location="${location}"]`
      )

      if (menuContent && menuContent.getAttribute("data-state") === "open") {
        const label = trigger.getAttribute("data-analytics-label") || ""
        trackLeadMenuOpen(location, label)
        menuOpenTracked.add(location)

        // Очищаем через 1 секунду, чтобы можно было отследить повторное открытие
        setTimeout(() => {
          menuOpenTracked.delete(location)
        }, 1000)
      }
    }, 100)
  }, true)

  // Также используем MutationObserver для более надежного отслеживания
  const observer = new MutationObserver(() => {
    // Проверяем все триггеры меню
    document.querySelectorAll("[data-analytics-menu-trigger]").forEach((trigger) => {
      const location = trigger.getAttribute("data-analytics-location") as
        | "header"
        | "slider"
        | "team"
        | "widget"

      if (!location || menuOpenTracked.has(location)) return

      const menuContent = document.querySelector(
        `[data-analytics-menu-content][data-location="${location}"]`
      )

      // Проверяем различные способы определения открытого состояния меню
      const isOpen =
        menuContent &&
        (menuContent.getAttribute("data-state") === "open" ||
          menuContent.classList.contains("open") ||
          menuContent.hasAttribute("data-open"))

      if (isOpen) {
        const label = trigger.getAttribute("data-analytics-label") || ""
        trackLeadMenuOpen(location, label)
        menuOpenTracked.add(location)

        setTimeout(() => {
          menuOpenTracked.delete(location)
        }, 1000)
      }
    })
  })

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["data-state", "class"],
  })
}
