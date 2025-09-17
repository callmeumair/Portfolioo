"use client"

import { Canvas } from "@react-three/fiber"
import { Suspense, useMemo } from "react"
import * as THREE from "three"

function Globe() {
  const g1 = useMemo(() => new THREE.SphereGeometry(1.4, 32, 32), [])
  const m1 = useMemo(() => new THREE.MeshBasicMaterial({ wireframe: true, color: new THREE.Color('#7c3aed'), opacity: 0.4, transparent: true }), [])
  const g2 = useMemo(() => new THREE.SphereGeometry(1.42, 32, 32), [])
  const m2 = useMemo(() => new THREE.MeshBasicMaterial({ wireframe: true, color: new THREE.Color('#06b6d4'), opacity: 0.25, transparent: true }), [])

  return (
    <>
      <mesh rotation={[0.5, 0.6, 0]}>
        <primitive object={g1} attach="geometry" />
        <primitive object={m1} attach="material" />
      </mesh>
      <mesh rotation={[0.5, 0.6, 0]}>
        <primitive object={g2} attach="geometry" />
        <primitive object={m2} attach="material" />
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


