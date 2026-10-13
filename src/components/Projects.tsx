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
    title: 'Intelligent Document Processing Pipeline',
    description: 'End-to-end NLP pipeline for automated document classification, entity extraction, and summarization using transformer models.',
    longDescription: 'Built a production NLP system processing 100K+ documents daily. Implemented custom BERT fine-tuning for multi-label classification, NER with spaCy, and abstractive summarization with T5. Deployed on AWS with auto-scaling.',
    techStack: ['Python', 'PyTorch', 'Transformers', 'FastAPI', 'Docker', 'AWS', 'Redis', 'PostgreSQL'],
    category: 'NLP',
    metrics: ['95% Classification Accuracy', '100K+ Docs/Day', '3x Faster Processing'],
    icon: '📄',
    gradient: 'from-indigo-500 to-purple-600'
  },
  {
    id: 2,
    title: 'Real-time Object Detection System',
    description: 'High-performance computer vision system for real-time object detection and tracking using YOLOv8 with custom training pipeline.',
    longDescription: 'Developed a real-time detection system achieving 30+ FPS on edge devices. Custom dataset annotation pipeline, transfer learning from COCO pre-trained weights, model quantization for edge deployment, and streaming inference with TensorRT.',
    techStack: ['Python', 'PyTorch', 'YOLOv8', 'TensorRT', 'OpenCV', 'ONNX', 'NVIDIA Jetson', 'GStreamer'],
    category: 'Computer Vision',
    metrics: ['30+ FPS Real-time', '92% mAP', 'Edge Deployed'],
    icon: '👁️',
    gradient: 'from-cyan-500 to-blue-600'
  },
  {
    id: 3,
    title: 'Recommendation Engine at Scale',
    description: 'Hybrid collaborative-filtering and content-based recommendation system serving millions of users with personalized content.',
    longDescription: 'Designed and deployed a hybrid recommendation engine combining matrix factorization, deep learning embeddings, and content features. Implemented A/B testing framework, real-time feature store, and model serving with sub-50ms latency.',
    techStack: ['Python', 'TensorFlow', 'Spark', 'Feature Store', 'Kafka', 'Kubernetes', 'gRPC', 'Redis'],
    category: 'ML Systems',
    metrics: ['15% CTR Improvement', '<50ms Latency', '5M+ Users'],
    icon: '🎯',
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    id: 4,
    title: 'MLOps & Model Monitoring Platform',
    description: 'Comprehensive ML platform for model training, deployment, monitoring, and automated retraining with drift detection.',
    longDescription: 'Built an end-to-end MLOps platform with CI/CD for ML models, experiment tracking with MLflow, data/model drift detection, automated retraining triggers, and comprehensive dashboards for model performance monitoring.',
    techStack: ['Python', 'MLflow', 'Kubernetes', 'Airflow', 'Prometheus', 'Grafana', 'Terraform', 'GCP'],
    category: 'MLOps',
    metrics: ['50+ Models Managed', '99.9% Uptime', 'Auto-Retraining'],
    icon: '⚙️',
    gradient: 'from-orange-500 to-red-600'
  },
  {
    id: 5,
    title: 'LLM-powered Conversational AI',
    description: 'Production RAG system with fine-tuned LLMs for domain-specific question answering with retrieval augmentation.',
    longDescription: 'Developed a Retrieval-Augmented Generation system using vector databases, semantic search, and fine-tuned language models. Implemented guardrails, hallucination detection, and multi-turn conversation management for enterprise use.',
    techStack: ['Python', 'LangChain', 'OpenAI', 'Pinecone', 'FastAPI', 'React', 'Streamlit', 'HuggingFace'],
    category: 'NLP',
    metrics: ['90% Answer Accuracy', '2s Response Time', '10K+ Queries/Day'],
    icon: '🤖',
    gradient: 'from-violet-500 to-fuchsia-600'
  },
  {
    id: 6,
    title: 'Time Series Forecasting Engine',
    description: 'Multi-horizon forecasting system for financial metrics using ensemble methods and deep learning architectures.',
    longDescription: 'Built a forecasting engine combining Prophet, LSTM, Temporal Fusion Transformers, and gradient boosting ensembles. Features automated feature engineering, uncertainty quantification, and adaptive model selection based on data characteristics.',
    techStack: ['Python', 'PyTorch', 'Prophet', 'XGBoost', 'Airflow', 'Docker', 'PostgreSQL', 'Plotly'],
    category: 'ML Systems',
    metrics: ['25% MAPE Reduction', 'Multi-Horizon', 'Auto-Selection'],
    icon: '📈',
    gradient: 'from-pink-500 to-rose-600'
  }
]

const categories = ['All', 'NLP', 'Computer Vision', 'ML Systems', 'MLOps']

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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto">
            A selection of ML projects showcasing end-to-end capabilities from research to production
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
