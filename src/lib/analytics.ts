"use client"

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>
  }
}

export function trackEvent(name: string, props?: Record<string, unknown>): void {
  if (typeof window === "undefined") return
  try {
    if (!window.dataLayer) window.dataLayer = []
    window.dataLayer.push({ event: name, ...(props || {}) })
  } catch {
    // no-op
  }
}


