import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCategories = [
  {
    title: 'Agentic AI & LLMs',
    icon: '🤖',
    skills: [
      { name: 'LangChain / LangGraph', level: 95 },
      { name: 'LangSmith', level: 90 },
      { name: 'OpenAI / Azure OpenAI', level: 92 },
      { name: 'Prompt Engineering', level: 95 },
      { name: 'Multi-Agent Workflows', level: 90 },
      { name: 'Ollama / Gemini', level: 85 },
    ]
  },
  {
    title: 'RAG & Retrieval',
    icon: '🔎',
    skills: [
      { name: 'Agentic RAG', level: 95 },
      { name: 'FAISS / Pinecone', level: 90 },
      { name: 'Semantic Retrieval', level: 92 },
      { name: 'Document Chunking', level: 90 },
      { name: 'Embedding Generation', level: 88 },
      { name: 'Pydantic AI', level: 82 },
    ]
  },
  {
    title: 'ML / NLP / Deep Learning',
    icon: '🧠',
    skills: [
      { name: 'PyTorch', level: 92 },
      { name: 'TensorFlow', level: 88 },
      { name: 'Scikit-learn', level: 90 },
      { name: 'NER / Text Classification', level: 88 },
      { name: 'Whisper STT/TTS', level: 85 },
      { name: 'RASA / DialogFlow', level: 82 },
    ]
  },
  {
    title: 'Cloud & MLOps',
    icon: '☁️',
    skills: [
      { name: 'AWS (EC2, Lambda, SageMaker)', level: 88 },
      { name: 'Azure', level: 80 },
      { name: 'Docker / Kubernetes', level: 85 },
      { name: 'GitHub Actions / GitLab CI', level: 88 },
      { name: 'Jenkins', level: 78 },
      { name: 'FastAPI / Django', level: 90 },
    ]
  },
  {
    title: 'Data & Storage',
    icon: '🗄️',
    skills: [
      { name: 'SQL / PostgreSQL', level: 88 },
      { name: 'MongoDB', level: 82 },
      { name: 'Snowflake', level: 75 },
      { name: 'Vector Stores', level: 90 },
      { name: 'Structured Data Extraction', level: 88 },
      { name: 'n8n Workflows', level: 78 },
    ]
  },
  {
    title: 'Languages & Tools',
    icon: '💻',
    skills: [
      { name: 'Python', level: 98 },
      { name: 'Streamlit', level: 90 },
      { name: 'Git', level: 92 },
      { name: 'Jira / Notion', level: 85 },
      { name: 'Agile / Scrum', level: 88 },
      { name: 'pytest / Validation', level: 85 },
    ]
  }
]

const tools = [
  'REST APIs', 'JWT Auth', 'RBAC', 'Multi-tenant Architecture',
  'PDF Parsing', 'Document Comparison', 'Agentic Workflows',
  'CI/CD', 'Microservices', 'Containerization',
  'Data Pipelines', 'QA Pipelines', 'Error Analysis',
  'Fine-tuning', 'Model Optimization', 'GPU Computing'
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto">
            A comprehensive toolkit built over years of shipping AI systems to production
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * catIdx }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold text-[#f1f5f9] mb-5 flex items-center gap-2">
                <span className="text-2xl">{category.icon}</span>
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm text-[#94a3b8]">{skill.name}</span>
                      <span className="text-xs text-[#6366f1] font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-[#0a0a0f] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.3 + catIdx * 0.1 + skillIdx * 0.05 }}
                        className="h-full rounded-full bg-gradient-to-r from-[#6366f1] to-[#06b6d4]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="glass-card rounded-2xl p-8"
        >
          <h3 className="text-lg font-semibold text-[#f1f5f9] mb-6 text-center">
            🛠️ Core Competencies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.03 }}
                className="px-4 py-2 rounded-lg bg-[#0a0a0f] border border-[#1e1e2e] text-sm text-[#94a3b8] hover:border-[#6366f1]/50 hover:text-[#f1f5f9] transition-all cursor-default"
                whileHover={{ y: -2 }}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
