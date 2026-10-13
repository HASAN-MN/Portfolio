import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const experiences = [
  {
    role: 'Senior Machine Learning Engineer',
    company: 'Tech Company',
    period: '2022 - Present',
    location: 'Berlin, Germany',
    highlights: [
      'Led development of production NLP pipelines processing 100K+ documents daily',
      'Architected MLOps platform managing 50+ models with 99.9% uptime',
      'Reduced model inference latency by 60% through optimization and quantization',
      'Mentored junior engineers and established ML best practices across the team',
    ],
    techUsed: ['PyTorch', 'Transformers', 'Kubernetes', 'AWS', 'MLflow'],
  },
  {
    role: 'Machine Learning Engineer',
    company: 'AI Startup',
    period: '2020 - 2022',
    location: 'Remote',
    highlights: [
      'Built real-time recommendation engine serving 5M+ users with sub-50ms latency',
      'Developed computer vision models for object detection achieving 92% mAP',
      'Implemented automated feature engineering pipeline reducing development time by 40%',
      'Deployed models to edge devices using TensorRT and ONNX optimization',
    ],
    techUsed: ['TensorFlow', 'YOLO', 'Spark', 'Redis', 'Docker'],
  },
  {
    role: 'Data Scientist',
    company: 'Analytics Firm',
    period: '2019 - 2020',
    location: 'Remote',
    highlights: [
      'Developed time series forecasting models improving prediction accuracy by 25%',
      'Created end-to-end data pipelines for real-time analytics dashboards',
      'Built A/B testing framework for ML model evaluation and comparison',
      'Collaborated with product teams to translate business requirements into ML solutions',
    ],
    techUsed: ['Python', 'Scikit-learn', 'PostgreSQL', 'Airflow', 'Plotly'],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto">
            A track record of delivering impactful ML solutions across industries
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#6366f1] via-[#06b6d4] to-transparent" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * i }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-[#6366f1] border-4 border-[#0a0a0f] z-10 mt-8" />

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="glass-card rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-[#6366f1]/10 text-[#6366f1] border border-[#6366f1]/20">
                      {exp.period}
                    </span>
                    <span className="text-xs text-[#64748b]">{exp.location}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#f1f5f9] mb-1">{exp.role}</h3>
                  <p className="text-sm text-[#06b6d4] mb-4">{exp.company}</p>
                  
                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((highlight, j) => (
                      <li key={j} className="text-sm text-[#94a3b8] flex items-start gap-2">
                        <span className="text-[#6366f1] mt-1 text-xs">▹</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.techUsed.map((tech, j) => (
                      <span key={j} className="text-xs px-2 py-0.5 rounded bg-[#0a0a0f] text-[#94a3b8] border border-[#1e1e2e]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
