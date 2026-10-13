import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Scene3D from './components/Scene3D'

function Background3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
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
        
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
