import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const experiences = [
  {
    role: 'AI Engineer',
    company: 'Tech Xperts Pvt. Ltd',
    period: '09/2024 – 01/2026',
    location: 'Pakistan',
    highlights: [
      'Orchestrated multi-step LLM workflows with iterative evaluation loops, improving retrieval quality and response consistency by 25% via LangSmith',
      'Reduced hallucinations by 30% building end-to-end document ingestion pipelines (PDF parsing, chunking, embedding generation, semantic retrieval)',
      'Designed prompt engineering and caching strategies for document comparison and classification tasks, reducing response latency by 20%',
      'Integrated AI agents with enterprise APIs and JWT OAuth authentication for secure, production-grade AI service delivery',
      'Deployed scalable AI microservices on AWS (EC2, Lambda) with Docker containerization',
      'Built and scaled Agentic RAG pipelines from prototype to production in 2 months with end-to-end testing',
    ],
    techUsed: ['LangChain', 'LangGraph', 'LangSmith', 'OpenAI', 'AWS', 'Docker', 'FastAPI', 'FAISS'],
  },
  {
    role: 'AI Engineer',
    company: 'Issm.AI',
    period: '09/2023 – 08/2024',
    location: 'Pakistan',
    highlights: [
      'Deployed production LLM microservices and improved NLP chatbot response accuracy to 92% through iterative fine-tuning of TensorFlow/RASA models trained on 60,000+ conversations',
      'Processed and annotated 3,500+ audio samples for NLP model training and evaluation',
      'Built data validation and QA pipelines for structured extraction from document and Excel files, reducing noisy/duplicate data by 15%',
      'Contributed to computer vision pipeline deployment for face detection in containerized Docker environments',
    ],
    techUsed: ['TensorFlow', 'RASA', 'Python', 'Docker', 'NLP', 'Whisper', 'DialogFlow'],
  },
  {
    role: 'ML Engineer Trainee',
    company: 'Softech Worldwide',
    period: '07/2023 – 09/2023',
    location: 'Pakistan',
    highlights: [
      'Developed ML algorithms and deep neural networks from scratch achieving 95% accuracy',
      'Built a 16-layer deep neural network with 90% accuracy',
    ],
    techUsed: ['Python', 'PyTorch', 'TensorFlow', 'Deep Learning'],
  },
  {
    role: 'AI Developer',
    company: 'Avrou (Etherea Project)',
    period: '02/2023 – 06/2023',
    location: 'Remote',
    highlights: [
      'Built a multi-agent AI system with 20 autonomous agents using OpenAI LLMs',
      'Developed agent character scripts, conversation flows, and orchestration workflows',
      'Conducted extensive LLM prompt engineering research for agent script generation',
      'Coordinated across 35+ virtual technical meetings',
    ],
    techUsed: ['OpenAI', 'LangChain', 'Python', 'Multi-Agent Systems', 'Prompt Engineering'],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Folio3 Pvt. Limited',
    period: '06/2022 – 08/2022',
    location: 'Pakistan',
    highlights: [
      'Developed a full-stack real estate platform connecting buyers, sellers, and agents',
      'Implemented secure mail contract authorization and performance optimization',
    ],
    techUsed: ['Django', 'Python', 'JavaScript', 'REST APIs', 'PostgreSQL'],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-sm sm:text-base text-[#94a3b8] max-w-2xl mx-auto px-2">
            A track record of delivering impactful AI solutions across companies
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line - hidden on mobile, visible on md+ */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#6366f1] via-[#06b6d4] to-transparent" />
          
          {/* Mobile timeline line */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#6366f1] via-[#06b6d4] to-transparent" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * i }}
              className="relative mb-8 md:mb-12"
            >
              {/* Mobile Layout */}
              <div className="md:hidden flex gap-4">
                {/* Timeline dot */}
                <div className="flex-shrink-0 relative">
                  <div className="w-4 h-4 rounded-full bg-[#6366f1] border-4 border-[#0a0a0f] z-10 mt-6" />
                </div>
                
                {/* Content */}
                <div className="flex-grow min-w-0">
                  <div className="glass-card rounded-xl p-4 sm:p-5 hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="text-xs px-2 py-1 rounded-full bg-[#6366f1]/10 text-[#6366f1] border border-[#6366f1]/20">
                        {exp.period}
                      </span>
                      <span className="text-xs text-[#64748b]">{exp.location}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-[#f1f5f9] mb-1">{exp.role}</h3>
                    <p className="text-xs sm:text-sm text-[#06b6d4] mb-3">{exp.company}</p>
                    
                    <ul className="space-y-2 mb-3">
                      {exp.highlights.map((highlight, j) => (
                        <li key={j} className="text-xs sm:text-sm text-[#94a3b8] flex items-start gap-2">
                          <span className="text-[#6366f1] mt-1 text-xs flex-shrink-0">▹</span>
                          <span>{highlight}</span>
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
              </div>

              {/* Desktop Layout */}
              <div className={`hidden md:flex gap-8 ${i % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-[#6366f1] border-4 border-[#0a0a0f] z-10 mt-8" />
                
                {/* Content */}
                <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="glass-card rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
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
                          <span className="text-[#6366f1] mt-1 text-xs flex-shrink-0">▹</span>
                          <span>{highlight}</span>
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
