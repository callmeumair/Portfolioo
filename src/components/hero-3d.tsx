"use client"

import { Canvas } from "@react-three/fiber"
import { Float, Environment, PresentationControls } from "@react-three/drei"
import { Suspense, useMemo } from "react"

function Geom() {
  const color = useMemo(() => new (require("three").Color)("#7c3aed"), [])
  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh>
        <torusKnotGeometry args={[1, 0.32, 220, 32]} />
        {/* @ts-ignore */}
        <meshStandardMaterial color={color} metalness={0.4} roughness={0.2} />
      </mesh>
    </Float>
  )
}

export function Hero3D() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden>
      <Canvas camera={{ position: [0, 0, 4.2], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 3, 3]} intensity={1.2} />
        <Suspense fallback={null}>
          <PresentationControls enabled snap global zoom={1}>
            <Geom />
          </PresentationControls>
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  )
}


