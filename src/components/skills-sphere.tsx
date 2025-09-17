"use client"

import { Canvas } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import { Suspense, useMemo, useRef } from "react"
import * as THREE from "three"

function SpherePoints() {
  const ref = useRef<THREE.Points>(null)
  const positions = useMemo(() => {
    const points: number[] = []
    const count = 800
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(1 - 2 * (i + 0.5) / count)
      const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5)
      const r = 1.2
      points.push(
        r * Math.cos(theta) * Math.sin(phi),
        r * Math.sin(theta) * Math.sin(phi),
        r * Math.cos(phi)
      )
    }
    return new Float32Array(points)
  }, [])

  return (
    <group ref={ref} rotation={[0.2, 0.4, 0]}>
      <Points positions={positions} stride={3} frustumCulled>
        <PointMaterial color="#7c3aed" size={0.02} sizeAttenuation depthWrite={false} transparent opacity={0.9} />
      </Points>
    </group>
  )
}

export function SkillsSphere() {
  return (
    <div className="mx-auto h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 3.5], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <Suspense fallback={null}>
          <SpherePoints />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default SkillsSphere


