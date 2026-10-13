import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

export default function Avatar3D() {
  const meshRef = useRef<THREE.Mesh>(null!)
  const ringRef1 = useRef<THREE.Mesh>(null!)
  const ringRef2 = useRef<THREE.Mesh>(null!)
  const ringRef3 = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.3
      meshRef.current.rotation.x = Math.sin(t * 0.2) * 0.1
    }
    if (ringRef1.current) {
      ringRef1.current.rotation.x = t * 0.5
      ringRef1.current.rotation.z = t * 0.3
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.y = t * 0.4
      ringRef2.current.rotation.x = t * 0.2
    }
    if (ringRef3.current) {
      ringRef3.current.rotation.z = t * 0.6
      ringRef3.current.rotation.y = t * 0.1
    }
  })

  return (
    <group>
      {/* Main avatar sphere */}
      <Sphere ref={meshRef} args={[1.2, 64, 64]}>
        <MeshDistortMaterial
          color="#6366f1"
          emissive="#4338ca"
          emissiveIntensity={0.4}
          roughness={0.2}
          metalness={0.8}
          distort={0.3}
          speed={2}
        />
      </Sphere>

      {/* Orbital rings */}
      <mesh ref={ringRef1}>
        <torusGeometry args={[1.8, 0.02, 16, 100]} />
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#06b6d4"
          emissiveIntensity={0.8}
          transparent
          opacity={0.6}
        />
      </mesh>

      <mesh ref={ringRef2}>
        <torusGeometry args={[2.2, 0.015, 16, 100]} />
        <meshStandardMaterial
          color="#818cf8"
          emissive="#818cf8"
          emissiveIntensity={0.6}
          transparent
          opacity={0.4}
        />
      </mesh>

      <mesh ref={ringRef3}>
        <torusGeometry args={[2.6, 0.01, 16, 100]} />
        <meshStandardMaterial
          color="#22d3ee"
          emissive="#22d3ee"
          emissiveIntensity={0.5}
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Small orbiting spheres */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2
        const radius = 2 + Math.random() * 0.5
        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle) * radius,
              Math.sin(angle) * 0.5,
              Math.sin(angle) * radius
            ]}
          >
            <sphereGeometry args={[0.06, 16, 16]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? "#6366f1" : "#06b6d4"}
              emissive={i % 2 === 0 ? "#6366f1" : "#06b6d4"}
              emissiveIntensity={1}
            />
          </mesh>
        )
      })}
    </group>
  )
}
