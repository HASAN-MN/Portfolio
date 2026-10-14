import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { motion } from 'framer-motion'
import Avatar3D from './Avatar3D'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* 3D Avatar Canvas - Hidden on very small screens for performance */}
      <div className="absolute inset-0 z-0 hidden sm:block">
        <Canvas camera={{ position: [0, 0, 6], fov: 60 }} dpr={[1, 1.5]}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[5, 5, 5]} intensity={1} color="#6366f1" />
            <pointLight position={[-5, -5, 5]} intensity={0.5} color="#06b6d4" />
            <Avatar3D />
          </Suspense>
        </Canvas>
      </div>

      {/* Avatar Image Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-5 pointer-events-none opacity-20 hidden md:block">
        <div className="w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 rounded-full overflow-hidden border-2 border-[#6366f1]/30 animate-pulse-glow">
          <img
            src="https://lh3.googleusercontent.com/pw/AP1GczPLN9Rbe4VqTdUP8pkdkG053HG_m3i-3NyCFmhdw9d6hEhKY_hHkarbbZOBc4cxtmAuQciHcNHUhs8EGSQh-E4xcWxZe9KTnWF7UdJrIKLgIBd9-8u4yH-wJ4QkfAoSBQ7rGJcVqbBdfLV_gBKDySeo=w1200-h1600-s-no-gm"
            alt="Hasan Mustafa Naqvi"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0f]/30 to-[#0a0a0f] z-10" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.1),transparent_70%)] z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#12121a] border border-[#1e1e2e] mb-6 sm:mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
            <span className="text-xs sm:text-sm text-[#94a3b8]">Open to opportunities in Berlin</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight"
        >
          <span className="text-[#f1f5f9] block sm:inline">Hasan Mustafa</span>
          <br className="sm:hidden" />
          <span className="gradient-text sm:ml-3">Naqvi</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#94a3b8] mb-3 sm:mb-4 font-light px-2"
        >
          AI Engineer • Machine Learning Engineer • Data Scientist
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-sm sm:text-base md:text-lg text-[#64748b] mb-8 sm:mb-12 max-w-2xl mx-auto px-2"
        >
          Results-driven engineer with 3+ years of experience designing, developing, 
          and deploying scalable AI solutions from prototype to production. 
          Expertise in LLMs, Agentic AI, RAG pipelines, NLP, and Generative AI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-[#6366f1] to-[#06b6d4] text-white font-medium hover:shadow-xl hover:shadow-[#6366f1]/25 transition-all hover:scale-105 text-sm sm:text-base"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-[#1e1e2e] text-[#94a3b8] hover:text-white hover:border-[#6366f1] transition-all hover:scale-105 text-sm sm:text-base"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {[
            { value: '3+', label: 'Years Experience' },
            { value: '5+', label: 'AI Projects Shipped' },
            { value: '97%', label: 'Model Accuracy' },
            { value: '4', label: 'Languages' },
          ].map((stat, i) => (
            <div key={i} className="text-center px-2">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">{stat.value}</div>
              <div className="text-xs sm:text-sm text-[#64748b] mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator - Hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-[#64748b] flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 rounded-full bg-[#6366f1]" />
        </motion.div>
      </motion.div>
    </section>
  )
}
