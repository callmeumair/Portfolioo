"use client"

import { useEffect } from "react"

export function useLenisSmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let destroy: (() => void) | undefined
    ;(async () => {
      const { default: Lenis } = await import("@studio-freight/lenis")
      const lenis = new Lenis({
        duration: 0.9,
        wheelMultiplier: 1,
        normalizeWheel: true,
      } as unknown as Record<string, unknown>)

      function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)

      destroy = () => {
        ;(lenis as unknown as { destroy?: () => void })?.destroy?.()
      }
    })()

    return () => {
      if (destroy) destroy()
    }
  }, [])
}


