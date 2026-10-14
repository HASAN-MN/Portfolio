import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  techStack: string[]
  category: string
  metrics: string[]
  icon: string
  gradient: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'AtlasRAG — Self-Correcting Agentic RAG',
    description: 'A self-correcting agentic RAG system that enforces graded retrieval, query rewrites, and abstention to eliminate hallucinations.',
    longDescription: 'Designed AtlasRAG, a self-correcting agentic RAG system that enforces graded retrieval, query rewrites, and abstention to eliminate hallucinations. Achieved 95% abstention accuracy backed by 30 automated tests with CI and fully deterministic routing. The system implements multi-step agent workflows with iterative evaluation loops.',
    techStack: ['LangChain', 'LangGraph', 'LangSmith', 'OpenAI', 'FAISS', 'FastAPI', 'Python', 'CI/CD'],
    category: 'Agentic AI',
    metrics: ['95% Abstention Accuracy', '30 Automated Tests', 'Zero Hallucinations'],
    icon: '🧠',
    gradient: 'from-indigo-500 to-purple-600'
  },
  {
    id: 2,
    title: 'DeepFake Detection — Computer Vision Pipeline',
    description: 'A deepfake detection system trained on a 15 GB video dataset using PyTorch with EfficientNetB4 and XceptionNet architectures.',
    longDescription: 'Built a deepfake detection system trained on a 15 GB video dataset using PyTorch (EfficientNetB4, XceptionNet) on NVIDIA T4 GPU. Achieved 97% accuracy via a custom optimized tuned inference pipeline. The system processes video frames, extracts facial features, and classifies content as real or manipulated with high confidence.',
    techStack: ['PyTorch', 'EfficientNetB4', 'XceptionNet', 'NVIDIA T4', 'OpenCV', 'Python', 'Docker'],
    category: 'Computer Vision',
    metrics: ['97% Accuracy', '15 GB Dataset', 'GPU Optimized'],
    icon: '🔍',
    gradient: 'from-cyan-500 to-blue-600'
  },
  {
    id: 3,
    title: 'Data Analysis Assistant — Conversational AI',
    description: 'An AI-powered conversational platform that translates natural language into SQL/Excel formulas for non-technical business users.',
    longDescription: 'Built an AI-powered conversational platform using Python, Streamlit, and LangChain that translates natural language into SQL/Excel formulas. Supports multi-LLM integration (OpenAI/Ollama) with Clean Architecture patterns to deliver data insights for non-technical business users. Features include context-aware query generation and multi-turn conversations.',
    techStack: ['Python', 'Streamlit', 'LangChain', 'OpenAI', 'Ollama', 'SQL', 'Clean Architecture'],
    category: 'NLP',
    metrics: ['Multi-LLM Support', 'Natural Language to SQL', 'Business User Friendly'],
    icon: '💬',
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    id: 4,
    title: 'PdfChat AI — Agentic RAG Document Intelligence',
    description: 'A full Agentic RAG pipeline using LangChain, LLMs, and FastAPI for natural language querying of PDF documents.',
    longDescription: 'Built a full Agentic RAG pipeline using LangChain, LLMs, and FastAPI — performing document chunking, embedding generation, and semantic retrieval to enable natural language querying of PDF documents. Architecture directly mirrors enterprise document intelligence and multi-step agent workflow requirements. Supports multi-document contexts and citation tracking.',
    techStack: ['LangChain', 'FastAPI', 'OpenAI', 'FAISS', 'Pinecone', 'Python', 'Docker', 'REST APIs'],
    category: 'Agentic AI',
    metrics: ['Multi-Document RAG', 'Semantic Retrieval', 'Enterprise Ready'],
    icon: '📄',
    gradient: 'from-orange-500 to-red-600'
  },
  {
    id: 5,
    title: 'Audio Transcription & Translation Tool',
    description: 'A multimodal transcription platform using Whisper AI as a Dockerized micro-service with capacity to handle 30GB simultaneously.',
    longDescription: 'Built a multimodal transcription platform using Python, Streamlit, and Whisper AI as a Dockerized micro-service with capacity to handle 30GB simultaneously. Features include multi-language transcription, real-time translation, speaker diarization, and export to multiple formats. Deployed as a scalable containerized service.',
    techStack: ['Python', 'Streamlit', 'Whisper AI', 'Docker', 'FFmpeg', 'FastAPI'],
    category: 'NLP',
    metrics: ['30GB Capacity', 'Multi-Language', 'Dockerized'],
    icon: '🎙️',
    gradient: 'from-violet-500 to-fuchsia-600'
  },
]

const categories = ['All', 'Agentic AI', 'Computer Vision', 'NLP']

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeCategory, setActiveCategory] = useState('All')
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Key <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto">
            Production-grade AI systems showcasing end-to-end capabilities from research to deployment
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#6366f1] to-[#06b6d4] text-white shadow-lg shadow-[#6366f1]/25'
                  : 'bg-[#12121a] text-[#94a3b8] border border-[#1e1e2e] hover:border-[#6366f1]/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              layout
              className="group"
            >
              <div
                className="glass-card rounded-2xl p-6 h-full flex flex-col transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{project.icon}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.gradient} text-white`}>
                    {project.category}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-semibold text-[#f1f5f9] mb-2 group-hover:text-[#818cf8] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[#94a3b8] mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Expanded Description */}
                {expandedProject === project.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-4"
                  >
                    <p className="text-sm text-[#64748b] leading-relaxed">
                      {project.longDescription}
                    </p>
                  </motion.div>
                )}

                {/* Metrics */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.metrics.map((metric, j) => (
                    <span key={j} className="text-xs px-2 py-1 rounded-md bg-[#0a0a0f] text-[#06b6d4] border border-[#1e1e2e]">
                      {metric}
                    </span>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.techStack.slice(0, 5).map((tech, j) => (
                    <span key={j} className="text-xs px-2 py-0.5 rounded bg-[#1e1e2e] text-[#94a3b8]">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 5 && (
                    <span className="text-xs px-2 py-0.5 rounded bg-[#1e1e2e] text-[#6366f1]">
                      +{project.techStack.length - 5}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
