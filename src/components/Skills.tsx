import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface Skill {
  name: string
  level: number
  category: string
}

const skillCategories = [
  {
    title: 'ML & Deep Learning',
    icon: '🧠',
    skills: [
      { name: 'PyTorch', level: 95 },
      { name: 'TensorFlow', level: 90 },
      { name: 'Transformers/HuggingFace', level: 92 },
      { name: 'Scikit-learn', level: 95 },
      { name: 'XGBoost/LightGBM', level: 90 },
      { name: 'LangChain', level: 85 },
    ]
  },
  {
    title: 'Languages & Frameworks',
    icon: '💻',
    skills: [
      { name: 'Python', level: 98 },
      { name: 'SQL', level: 88 },
      { name: 'React/TypeScript', level: 75 },
      { name: 'FastAPI', level: 90 },
      { name: 'Flask', level: 85 },
      { name: 'Bash/Shell', level: 80 },
    ]
  },
  {
    title: 'MLOps & Infrastructure',
    icon: '🚀',
    skills: [
      { name: 'Docker/Kubernetes', level: 88 },
      { name: 'AWS/GCP', level: 85 },
      { name: 'MLflow', level: 90 },
      { name: 'Airflow', level: 82 },
      { name: 'Terraform', level: 75 },
      { name: 'CI/CD (GitHub Actions)', level: 88 },
    ]
  },
  {
    title: 'Data & Analytics',
    icon: '📊',
    skills: [
      { name: 'Pandas/NumPy', level: 95 },
      { name: 'Spark/PySpark', level: 82 },
      { name: 'PostgreSQL', level: 88 },
      { name: 'Redis', level: 80 },
      { name: 'Kafka', level: 75 },
      { name: 'Elasticsearch', level: 78 },
    ]
  }
]

const tools = [
  'Git', 'Linux', 'VS Code', 'Jupyter', 'Weights & Biases',
  'DVC', 'Pinecone', 'Weaviate', 'TensorRT', 'ONNX',
  'Grafana', 'Prometheus', 'Terraform', 'ArgoCD', 'Streamlit'
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
            A comprehensive toolkit built over years of shipping ML systems to production
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
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
            🛠️ Tools & Technologies
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
