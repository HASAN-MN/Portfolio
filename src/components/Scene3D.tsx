import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function ParticleField() {
  const meshRef = useRef<THREE.Points>(null!)
  const count = 2000

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50

      const isIndigo = Math.random() > 0.5
      colors[i * 3] = isIndigo ? 0.39 : 0.02
      colors[i * 3 + 1] = isIndigo ? 0.4 : 0.71
      colors[i * 3 + 2] = isIndigo ? 0.95 : 0.83
    }
    return [positions, colors]
  }, [])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.03
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  )
}

function FloatingGeometry() {
  const torusRef = useRef<THREE.Mesh>(null!)
  const octaRef = useRef<THREE.Mesh>(null!)
  const icoRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.3
      torusRef.current.rotation.y = t * 0.2
      torusRef.current.position.y = Math.sin(t * 0.5) * 2
    }
    if (octaRef.current) {
      octaRef.current.rotation.x = t * 0.4
      octaRef.current.rotation.z = t * 0.3
      octaRef.current.position.y = Math.cos(t * 0.4) * 1.5 + 3
    }
    if (icoRef.current) {
      icoRef.current.rotation.y = t * 0.5
      icoRef.current.rotation.z = t * 0.2
      icoRef.current.position.y = Math.sin(t * 0.6) * 1 + -3
    }
  })

  return (
    <>
      <mesh ref={torusRef} position={[-8, 0, -5]}>
        <torusGeometry args={[2, 0.5, 16, 32]} />
        <meshStandardMaterial
          color="#6366f1"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
      <mesh ref={octaRef} position={[8, 3, -8]}>
        <octahedronGeometry args={[1.5]} />
        <meshStandardMaterial
          color="#06b6d4"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
      <mesh ref={icoRef} position={[6, -3, -6]}>
        <icosahedronGeometry args={[1.2]} />
        <meshStandardMaterial
          color="#818cf8"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>
    </>
  )
}

function NeuralNetwork() {
  const groupRef = useRef<THREE.Group>(null!)
  
  const nodes = useMemo(() => {
    const layers = [4, 6, 8, 6, 4, 2]
    const nodePositions: THREE.Vector3[] = []
    
    layers.forEach((count, layerIdx) => {
      for (let i = 0; i < count; i++) {
        const x = (layerIdx - 2.5) * 3
        const y = (i - (count - 1) / 2) * 1.5
        const z = -10
        nodePositions.push(new THREE.Vector3(x, y, z))
      }
    })
    return nodePositions
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {nodes.map((pos, idx) => (
        <mesh key={idx} position={pos}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial
            color={idx % 3 === 0 ? "#6366f1" : idx % 3 === 1 ? "#06b6d4" : "#818cf8"}
            emissive={idx % 3 === 0 ? "#6366f1" : idx % 3 === 1 ? "#06b6d4" : "#818cf8"}
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
    </group>
  )
}

export default function Scene3D() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#6366f1" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#06b6d4" />
      <ParticleField />
      <FloatingGeometry />
      <NeuralNetwork />
    </>
  )
}
