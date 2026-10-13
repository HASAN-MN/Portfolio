import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto">
            Passionate about building ML systems that solve real-world problems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Avatar & Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Avatar */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-[#6366f1]/50 animate-pulse-glow">
                  <img
                    src="https://image.qwenlm.ai/generated-images/9e595d1a-486e-4214-b67a-deab7405a657/_result.png"
                    alt="Hasan Mustafa Naqvi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 px-3 py-1 rounded-full bg-[#12121a] border border-[#1e1e2e] text-xs text-[#06b6d4]">
                  🟢 Available
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4 text-[#f1f5f9]">
                ML Engineer based in Berlin 🇩🇪
              </h3>
              <p className="text-[#94a3b8] leading-relaxed mb-6">
                I'm a Senior Machine Learning Engineer with deep expertise in building 
                production-grade ML systems. My work spans Natural Language Processing, 
                Computer Vision, and end-to-end ML pipelines that power real business decisions.
              </p>
              <p className="text-[#94a3b8] leading-relaxed mb-6">
                With a strong foundation in Python, deep learning frameworks, and cloud 
                infrastructure, I specialize in taking models from research to deployment. 
                I'm passionate about MLOps, model optimization, and creating scalable 
                AI solutions.
              </p>
              <p className="text-[#94a3b8] leading-relaxed">
                Currently seeking to bring my expertise to innovative teams where I can 
                contribute to cutting-edge ML challenges and drive meaningful impact.
              </p>
            </div>
          </motion.div>

          {/* Right - Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Languages */}
            <div className="glass-card rounded-2xl p-6">
              <h4 className="text-lg font-semibold mb-4 text-[#f1f5f9] flex items-center gap-2">
                🌍 Languages
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { lang: 'English', level: 'Fluent', pct: '95%' },
                  { lang: 'German', level: 'B1 Professional', pct: '65%' },
                  { lang: 'Urdu', level: 'Native', pct: '100%' },
                  { lang: 'Hindi', level: 'Fluent', pct: '90%' },
                ].map((item, i) => (
                  <div key={i} className="bg-[#0a0a0f] rounded-xl p-3 border border-[#1e1e2e]">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-[#f1f5f9]">{item.lang}</span>
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
            <div className="glass-card rounded-2xl p-6">
              <h4 className="text-lg font-semibold mb-4 text-[#f1f5f9] flex items-center gap-2">
                📍 Quick Info
              </h4>
              <div className="space-y-3">
                {[
                  { label: 'Location', value: 'Berlin, Germany' },
                  { label: 'Focus', value: 'NLP, CV, Production ML' },
                  { label: 'Education', value: 'Computer Science / ML' },
                  { label: 'Status', value: 'Open to Opportunities' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-[#1e1e2e] last:border-0">
                    <span className="text-sm text-[#64748b]">{item.label}</span>
                    <span className="text-sm text-[#f1f5f9] font-medium">{item.value}</span>
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
