"use client"

import { Canvas } from "@react-three/fiber"
import type { ThreeElements } from "@react-three/fiber" // ensure module stays a TS module
import { Suspense } from "react"

function Globe() {
  return (
    <>
      {/* @ts-expect-error r3f intrinsic typing not inferred in this file */}
      <mesh rotation={[0.5, 0.6, 0]}>
        <sphereGeometry args={[1.4, 32, 32]} />
        {/* @ts-expect-error three fiber type narrowing */}
        <meshBasicMaterial wireframe color="#7c3aed" opacity={0.4} transparent />
      </mesh>
      {/* @ts-expect-error r3f intrinsic typing not inferred in this file */}
      <mesh rotation={[0.5, 0.6, 0]}>
        <sphereGeometry args={[1.42, 32, 32]} />
        {/* @ts-expect-error three fiber type narrowing */}
        <meshBasicMaterial wireframe color="#06b6d4" opacity={0.25} transparent />
      </mesh>
    </>
  )
}

export function ContactGlobe() {
  return (
    <div className="relative h-64 w-full sm:h-80 lg:h-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <Suspense fallback={null}>
          <Globe />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default ContactGlobe


