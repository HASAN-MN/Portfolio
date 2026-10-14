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
    <section id="blogs" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Blogs</span>
          </h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto">
            Sharing knowledge and insights on AI, ML, and software engineering
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="glass-card rounded-2xl p-6 hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">{blog.icon}</span>
                <div className="flex-grow">
                  <span className="text-xs px-2 py-1 rounded-full bg-[#6366f1]/10 text-[#6366f1] border border-[#6366f1]/20 mb-2 inline-block">
                    {blog.platform}
                  </span>
                  <h3 className="text-lg font-semibold text-[#f1f5f9] mb-2 group-hover:text-[#818cf8] transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-[#94a3b8]">
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
