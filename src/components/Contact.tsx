import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'hasanworks200@gmail.com',
      href: 'mailto:hasanworks200@gmail.com',
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+49 163 710 3005',
      href: 'tel:+491637103005',
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Berlin, Germany',
      href: null,
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/hasan-mustafa-naqvi',
      href: 'https://linkedin.com/in/hasan-mustafa-naqvi',
    },
  ]

  return (
    <section id="contact" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto">
            Interested in collaborating or discussing ML opportunities? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            {contactInfo.map((item, i) => (
              <motion.a
                key={i}
                href={item.href || '#'}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="glass-card rounded-xl p-5 flex items-center gap-4 group hover:-translate-y-1 transition-all duration-300 block"
                target={item.href?.startsWith('http') ? '_blank' : undefined}
                rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="text-xs text-[#64748b] mb-0.5">{item.label}</p>
                  <p className="text-sm text-[#f1f5f9] group-hover:text-[#818cf8] transition-colors">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-card rounded-2xl p-8 flex flex-col justify-center"
          >
            <div className="text-center">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="text-5xl mb-6 inline-block"
              >
                🚀
              </motion.div>
              <h3 className="text-2xl font-bold text-[#f1f5f9] mb-3">
                Ready for the Next Challenge
              </h3>
              <p className="text-[#94a3b8] mb-8 leading-relaxed">
                I'm actively looking for Senior ML Engineer roles where I can 
                contribute to building impactful AI systems. Let's discuss how 
                I can add value to your team.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:hasanworks200@gmail.com"
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-[#6366f1] to-[#06b6d4] text-white font-medium hover:shadow-xl hover:shadow-[#6366f1]/25 transition-all hover:scale-105 text-sm"
                >
                  Send Email
                </a>
                <a
                  href="https://linkedin.com/in/hasan-mustafa-naqvi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full border border-[#1e1e2e] text-[#94a3b8] hover:text-white hover:border-[#6366f1] transition-all hover:scale-105 text-sm"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
