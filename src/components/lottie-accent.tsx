"use client"

import dynamic from "next/dynamic"
import { useEffect, useState } from "react"

const Lottie = dynamic(() => import("lottie-react"), { ssr: false })

export default function LottieAccent() {
  const [animationData, setAnimationData] = useState<unknown | null>(null)

  useEffect(() => {
    let mounted = true
    fetch("/lotties/sparkle.json")
      .then(r => r.json())
      .then(data => { if (mounted) setAnimationData(data) })
      .catch(() => {})
    return () => { mounted = false }
  }, [])

  if (!animationData) return null

  return (
    <div className="pointer-events-none absolute -top-6 -right-6 w-20 h-20 opacity-70">
      <Lottie animationData={animationData as object} loop autoplay />
    </div>
  )
}


