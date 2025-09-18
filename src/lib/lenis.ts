"use client"

import Lenis from "@studio-freight/lenis"

let lenisInstance: Lenis | null = null

export function initLenis(): Lenis | null {
  if (typeof window === "undefined") return null
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return null
  }
  if (lenisInstance) return lenisInstance

  const instance = new Lenis({
    duration: 1.1,
    easing: (t: number) => 1 - Math.pow(1 - t, 3),
    smoothWheel: true,
    smoothTouch: false,
    syncTouch: true,
  })

  function raf(time: number) {
    instance.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  lenisInstance = instance
  return instance
}

export function destroyLenis() {
  if (lenisInstance) {
    lenisInstance.destroy()
    lenisInstance = null
  }
}


