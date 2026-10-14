import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-sm sm:text-base text-[#94a3b8] max-w-2xl mx-auto px-2">
            Passionate about building AI systems that solve real-world problems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left - Avatar & Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Avatar */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="relative">
                <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-[#6366f1]/50 animate-pulse-glow">
                  <img
                    src="https://lh3.googleusercontent.com/pw/AP1GczPLN9Rbe4VqTdUP8pkdkG053HG_m3i-3NyCFmhdw9d6hEhKY_hHkarbbZOBc4cxtmAuQciHcNHUhs8EGSQh-E4xcWxZe9KTnWF7UdJrIKLgIBd9-8u4yH-wJ4QkfAoSBQ7rGJcVqbBdfLV_gBKDySeo=w1200-h1600-s-no-gm"
                    alt="Hasan Mustafa Naqvi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 px-2 sm:px-3 py-1 rounded-full bg-[#12121a] border border-[#1e1e2e] text-xs text-[#06b6d4]">
                  🟢 Open to Work
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-[#f1f5f9]">
                AI Engineer based in Berlin 🇩🇪
              </h3>
              <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed mb-3 sm:mb-4">
                Results-driven AI Engineer, Machine Learning Engineer, and Data Scientist 
                with 3+ years of experience designing, developing, and deploying scalable 
                AI solutions from prototype to production.
              </p>
              <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed mb-3 sm:mb-4">
                Expertise in machine learning, deep learning, NLP, LLMs, Generative AI, 
                and data analytics, with hands-on experience building agentic AI systems, 
                RAG pipelines, and intelligent document processing solutions.
              </p>
              <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed">
                Proven ability to translate business requirements into reliable, 
                production-ready AI applications. BS Computer Science from FAST NUCES, Karachi.
              </p>
            </div>
          </motion.div>

          {/* Right - Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4 sm:space-y-6"
          >
            {/* Languages */}
            <div className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-[#f1f5f9] flex items-center gap-2">
                🌍 Languages
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {[
                  { lang: 'English', level: 'Fluent (C1)', pct: '90%' },
                  { lang: 'German', level: 'B1 Professional', pct: '60%' },
                  { lang: 'Urdu', level: 'Native', pct: '100%' },
                  { lang: 'Hindi', level: 'Fluent', pct: '95%' },
                ].map((item, i) => (
                  <div key={i} className="bg-[#0a0a0f] rounded-lg sm:rounded-xl p-2.5 sm:p-3 border border-[#1e1e2e]">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs sm:text-sm text-[#f1f5f9]">{item.lang}</span>
                      <span className="text-xs text-[#6366f1]">{item.level}</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#1e1e2e] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: item.pct } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                        className="h-full bg-gradient-to-r from-[#6366f1] to-[#06b6d4] rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-[#f1f5f9] flex items-center gap-2">
                📍 Quick Info
              </h4>
              <div className="space-y-2 sm:space-y-3">
                {[
                  { label: 'Location', value: 'Berlin, Germany' },
                  { label: 'Education', value: 'BS CS — FAST NUCES, Karachi' },
                  { label: 'Focus', value: 'LLMs, Agentic AI, RAG, NLP' },
                  { label: 'Experience', value: '3+ Years in AI/ML' },
                  { label: 'Status', value: 'Open to Opportunities' },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-[#1e1e2e] last:border-0 gap-1 sm:gap-0">
                    <span className="text-xs sm:text-sm text-[#64748b]">{item.label}</span>
                    <span className="text-xs sm:text-sm text-[#f1f5f9] font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-[#f1f5f9] flex items-center gap-2">
                🏅 Certifications
              </h4>
              <div className="space-y-2">
                {[
                  'Python Fundamentals — DataCamp',
                  'Machine Learning Foundations — Kaggle',
                  'Introduction to SQL — DataCamp',
                  'AI for Everyone — DeepLearning.AI',
                ].map((cert, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-[#94a3b8]">
                    <span className="text-[#06b6d4] flex-shrink-0">✓</span>
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
