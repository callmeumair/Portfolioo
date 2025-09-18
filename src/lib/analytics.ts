"use client"

export function trackEvent(name: string, props?: Record<string, unknown>) {
  try {
    if (typeof window === "undefined") return
    // Vercel Analytics automatic; this is a lightweight hook for future providers
    ;(window as any).dataLayer = (window as any).dataLayer || []
    ;(window as any).dataLayer.push({ event: name, ...props })
  } catch {}
}


