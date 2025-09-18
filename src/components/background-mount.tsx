"use client"

import dynamic from "next/dynamic"
import SoftBackground from "@/components/soft-background"

const ParticlesBackground = dynamic(
  () => import("@/components/particles-background").then(m => m.ParticlesBackground),
  { ssr: false, loading: () => null }
)

export function BackgroundMount() {
  return (
    <>
      <SoftBackground />
    </>
  )
}

export default BackgroundMount


