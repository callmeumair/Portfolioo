"use client"

import { useEffect, useMemo, useState } from "react"
import Particles from "react-tsparticles"

type ParticlesBackgroundProps = {
  className?: string
}

export function ParticlesBackground({ className }: ParticlesBackgroundProps) {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const initial = localStorage.getItem("particles-enabled")
    setEnabled(initial !== "false")
    const onToggle = () => setEnabled(localStorage.getItem("particles-enabled") !== "false")
    window.addEventListener("particles-toggle", onToggle)
    return () => window.removeEventListener("particles-toggle", onToggle)
  }, [])
  const options = useMemo(
    () => ({
      fpsLimit: 60,
      background: { color: "transparent" },
      fullScreen: { enable: false },
      detectRetina: true,
      particles: {
        number: { value: 60, density: { enable: true, area: 800 } },
        color: { value: ["#7c3aed", "#06b6d4", "#22c55e"] },
        links: { enable: true, color: "#999", distance: 140, opacity: 0.2, width: 1 },
        move: { enable: true, speed: 0.8, outModes: { default: "bounce" } },
        opacity: { value: 0.5 },
        size: { value: { min: 1, max: 3 } },
      },
      interactivity: {
        events: { onHover: { enable: true, mode: "grab" }, resize: true },
        modes: { grab: { distance: 140, links: { opacity: 0.3 } } },
      },
    }),
    []
  )

  if (!enabled) return null

  return (
    <div className={`absolute inset-0 -z-10 pointer-events-none ${className ?? ""}`} aria-hidden>
      <Particles id="particles-bg" options={options} />
    </div>
  )
}


