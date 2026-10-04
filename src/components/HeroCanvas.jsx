import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Sculpture() {
  const group = useRef(null)
  const wire = useRef(null)
  const ring = useRef(null)

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime
    const { x, y } = state.pointer
    const g = group.current
    if (!g) return
    const calm = Math.min(delta, 0.05)
    g.rotation.y += calm * 0.18
    g.rotation.x += calm * 0.06
    // gentle mouse parallax toward the pointer
    g.position.x += (x * 0.35 - g.position.x) * 0.04
    g.position.y += (y * 0.25 + Math.sin(t * 0.7) * 0.08 - g.position.y) * 0.04
    if (wire.current) wire.current.rotation.y -= calm * 0.1
    if (ring.current) {
      ring.current.rotation.z += calm * 0.12
      ring.current.rotation.x = Math.PI / 2.4 + Math.sin(t * 0.4) * 0.08
    }
  })

  return (
    <group ref={group}>
      {/* solid core */}
      <mesh>
        <icosahedronGeometry args={[1.05, 1]} />
        <meshStandardMaterial color="#15151d" roughness={0.35} metalness={0.85} flatShading />
      </mesh>
      {/* glowing wireframe shell */}
      <mesh ref={wire} scale={1.45}>
        <icosahedronGeometry args={[1.05, 1]} />
        <meshBasicMaterial color="#4f7cff" wireframe transparent opacity={0.22} />
      </mesh>
      {/* orbit ring */}
      <mesh ref={ring} rotation={[Math.PI / 2.4, 0, 0]}>
        <torusGeometry args={[2.1, 0.012, 12, 128]} />
        <meshBasicMaterial color="#8ea6ff" transparent opacity={0.35} />
      </mesh>
      {/* accent light baked into scene */}
      <pointLight position={[3, 2, 3]} intensity={18} color="#4f7cff" />
      <pointLight position={[-3, -1.5, 2]} intensity={8} color="#9db4ff" />
    </group>
  )
}

export default function HeroCanvas() {
  const canRender = useMemo(() => {
    if (typeof window === 'undefined') return false
    try {
      const canvas = document.createElement('canvas')
      return !!(window.WebGLRenderingContext && canvas.getContext('webgl2', { failIfMajorPerformanceCaveat: false }))
    } catch {
      return false
    }
  }, [])

  if (!canRender) return null

  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 6], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      aria-hidden
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 5, 6]} intensity={1.1} color="#ffffff" />
      <Sculpture />
    </Canvas>
  )
}
