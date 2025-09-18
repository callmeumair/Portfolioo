"use client"

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Float, Environment, PresentationControls } from "@react-three/drei"
import { Suspense, useEffect, useMemo } from "react"
import { Color, Mesh, TorusKnotGeometry, MeshStandardMaterial } from "three"

function Geom() {
  const { scene } = useThree()
  const color = useMemo(() => new Color("#7c3aed"), [])

  const geom = useMemo(() => new TorusKnotGeometry(1, 0.32, 220, 32), [])
  const mat = useMemo(() => new MeshStandardMaterial({ color, metalness: 0.4, roughness: 0.2 }), [color])
  const mesh = useMemo(() => new Mesh(geom, mat), [geom, mat])

  useEffect(() => {
    scene.add(mesh)
    return () => {
      scene.remove(mesh)
      geom.dispose()
      mat.dispose()
    }
  }, [scene, mesh, geom, mat])

  useFrame(() => {
    mesh.rotation.y += 0.01
  })

  return null
}

export function Hero3D() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden>
      <Canvas camera={{ position: [0, 0, 4.2], fov: 45 }}>
        <Suspense fallback={null}>
          <PresentationControls enabled snap global zoom={1}>
            <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
              <Geom />
            </Float>
          </PresentationControls>
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Hero3D


