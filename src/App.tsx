import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Blogs from './components/Blogs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Scene3D from './components/Scene3D'

function Background3D() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Reduce particle count and disable on mobile for performance
  if (isMobile) {
    return (
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#0a0a0f] via-[#0a0a0f] to-[#0a0a0f]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(6,182,212,0.1),transparent_50%)]" />
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>
      </Canvas>
    </div>
  )
}

function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0f] text-[#f1f5f9]">
      {/* 3D Background */}
      <Background3D />
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        
        {/* Section divider */}
        <div className="relative h-px">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#6366f1]/30 to-transparent" />
        </div>
        
        <About />
        
        <div className="relative h-px">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#06b6d4]/30 to-transparent" />
        </div>
        
        <Experience />
        
        <div className="relative h-px">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#6366f1]/30 to-transparent" />
        </div>
        
        <Projects />
        
        <div className="relative h-px">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#06b6d4]/30 to-transparent" />
        </div>
        
        <Skills />
        
        <div className="relative h-px">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#6366f1]/30 to-transparent" />
        </div>
        
        <Blogs />
        
        <div className="relative h-px">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#06b6d4]/30 to-transparent" />
        </div>
        
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
