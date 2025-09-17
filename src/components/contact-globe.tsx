"use client"

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Suspense, useEffect, useMemo } from "react"
import * as THREE from "three"

function Globe() {
  const { scene } = useThree()
  const g1 = useMemo(() => new THREE.SphereGeometry(1.4, 32, 32), [])
  const m1 = useMemo(() => new THREE.MeshBasicMaterial({ wireframe: true, color: new THREE.Color('#7c3aed'), opacity: 0.4, transparent: true }), [])
  const g2 = useMemo(() => new THREE.SphereGeometry(1.42, 32, 32), [])
  const m2 = useMemo(() => new THREE.MeshBasicMaterial({ wireframe: true, color: new THREE.Color('#06b6d4'), opacity: 0.25, transparent: true }), [])

  const mesh1 = useMemo(() => {
    const mesh = new THREE.Mesh(g1, m1)
    mesh.rotation.set(0.5, 0.6, 0)
    return mesh
  }, [g1, m1])

  const mesh2 = useMemo(() => {
    const mesh = new THREE.Mesh(g2, m2)
    mesh.rotation.set(0.5, 0.6, 0)
    return mesh
  }, [g2, m2])

  const ambient = useMemo(() => new THREE.AmbientLight(0xffffff, 0.6), [])

  useEffect(() => {
    scene.add(mesh1)
    scene.add(mesh2)
    scene.add(ambient)
    return () => {
      scene.remove(mesh1)
      scene.remove(mesh2)
      scene.remove(ambient)
    }
  }, [scene, mesh1, mesh2, ambient])

  useFrame(() => {
    mesh1.rotation.y += 0.002
    mesh2.rotation.y += 0.002
  })

  return null
}

export function ContactGlobe() {
  return (
    <div className="relative h-64 w-full sm:h-80 lg:h-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <Suspense fallback={null}>
          <Globe />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default ContactGlobe


