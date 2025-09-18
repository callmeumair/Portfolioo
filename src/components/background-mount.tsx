"use client"

import dynamic from "next/dynamic"
import { useEffect } from "react"
import { initLenis, destroyLenis } from "@/lib/lenis"

const ParticlesBackground = dynamic(
  () => import("@/components/particles-background").then(m => m.ParticlesBackground),
  { ssr: false, loading: () => null }
)

export function BackgroundMount() {
  useEffect(() => {
    const l = initLenis()
    return () => {
      if (l) destroyLenis()
    }
  }, [])
  return <ParticlesBackground />
}

export default BackgroundMount


