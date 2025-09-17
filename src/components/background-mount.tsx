"use client"

import dynamic from "next/dynamic"

const ParticlesBackground = dynamic(
  () => import("@/components/particles-background").then(m => m.ParticlesBackground),
  { ssr: false, loading: () => null }
)

export function BackgroundMount() {
  return <ParticlesBackground />
}

export default BackgroundMount


