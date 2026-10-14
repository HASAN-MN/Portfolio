import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const blogs = [
  {
    title: 'Build an AI Generator',
    platform: 'Level Up Coding',
    description: 'A comprehensive guide on building AI generation systems from scratch.',
    icon: '🤖',
  },
  {
    title: 'Tableau or PowerBI',
    platform: 'CodeX',
    description: 'An in-depth comparison of leading data visualization tools for analytics.',
    icon: '📊',
  },
  {
    title: 'Developing A PdfChat AI Model using ChatGPT',
    platform: 'CodeX',
    description: 'Building an intelligent document chat system leveraging ChatGPT capabilities.',
    icon: '📄',
  },
  {
    title: 'Intrusion Detection',
    platform: 'CodeX',
    description: 'Implementing ML-based intrusion detection systems for cybersecurity.',
    icon: '🔒',
  },
  {
    title: 'Which one is the Best Authentication method',
    platform: 'CodeX',
    description: 'Comparing modern authentication methods for secure application development.',
    icon: '🔐',
  },
]

export default function Blogs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="blogs" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Technical <span className="gradient-text">Blogs</span>
          </h2>
          <p className="text-sm sm:text-base text-[#94a3b8] max-w-2xl mx-auto px-2">
            Sharing knowledge and insights on AI, ML, and software engineering
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {blogs.map((blog, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <span className="text-2xl sm:text-3xl flex-shrink-0">{blog.icon}</span>
                <div className="flex-grow min-w-0">
                  <span className="text-xs px-2 py-1 rounded-full bg-[#6366f1]/10 text-[#6366f1] border border-[#6366f1]/20 mb-2 inline-block">
                    {blog.platform}
                  </span>
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-[#f1f5f9] mb-1.5 sm:mb-2 group-hover:text-[#818cf8] transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#94a3b8]">
                    {blog.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
