import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const mediumBlogs = [
  {
    title: 'Build an AI Video Generator',
    subtitle: 'AI text to video generator with 15 lines of code.',
    publication: 'Level Up Coding',
    date: 'Oct 8, 2024',
    claps: 127,
    responses: 1,
    thumbnail: 'https://miro.medium.com/v2/da:true/resize:fill:320:214/0*9N83hTHem4tr0nJE',
    url: 'https://hasanworks150.medium.com/build-an-ai-video-generator-ee66c3a12300',
    tags: ['AI', 'Generative AI', 'Python'],
  },
  {
    title: 'LangChain Series — Pdf Chat',
    subtitle: 'Develop a Pdf-Chat AI model with GPT prompts.',
    publication: 'Personal',
    date: 'Sep 9, 2023',
    claps: 62,
    responses: 1,
    thumbnail: 'https://miro.medium.com/v2/resize:fill:320:214/1*fyKuRrbf3IeZ3RbqePfMdw.png',
    url: 'https://hasanworks150.medium.com/lang-chain-series-pdf-chat-f3dc956ad93e',
    tags: ['LangChain', 'RAG', 'LLM'],
  },
  {
    title: 'Create with Gemini — Series 1',
    subtitle: 'Develop your Pdf-Chat application with Gemini under 20 mins.',
    publication: 'Level Up Coding',
    date: 'Aug 14, 2024',
    claps: 44,
    responses: 0,
    thumbnail: 'https://miro.medium.com/v2/da:true/resize:fill:320:214/0*3_5SxBB9QQz-DXA4',
    url: 'https://hasanworks150.medium.com/create-with-gemini-series-1-7f08f2ab8ae8',
    tags: ['Gemini', 'Google AI', 'RAG'],
  },
  {
    title: 'Unleashing the Evolution of ChatGPT\'s Power',
    subtitle: 'From History to Transcendent Reality.',
    publication: 'CodeX',
    date: 'Aug 21, 2023',
    claps: 59,
    responses: 0,
    thumbnail: 'https://miro.medium.com/v2/da:true/resize:fill:320:214/0*fP2XWf0qhFVN52rg',
    url: 'https://hasanworks150.medium.com/chatgpts-boundless-potential-reshaping-the-fabric-of-our-daily-lives-e31c529047f5',
    tags: ['ChatGPT', 'LLM', 'AI'],
  },
  {
    title: 'Streamlit — Powering Data Apps for Everyone',
    subtitle: 'Open-source Python library for beautiful ML & data web apps.',
    publication: 'CodeX',
    date: 'Sep 4, 2023',
    claps: 24,
    responses: 0,
    thumbnail: 'https://miro.medium.com/v2/resize:fill:320:214/0*LS6GeIqz0NH8m5QL.jpg',
    url: 'https://hasanworks150.medium.com/stream-lit-powering-data-apps-for-everyone-7a8d0b31d60c',
    tags: ['Streamlit', 'Python', 'Data'],
  },
  {
    title: 'Tableau or Power BI?',
    subtitle: 'Choose what fits best for you.',
    publication: 'CodeX',
    date: 'Nov 16, 2021',
    claps: 119,
    responses: 0,
    thumbnail: 'https://miro.medium.com/v2/resize:fill:320:214/1*H4nMxqGAPvexNxpFN28rfg.png',
    url: 'https://hasanworks150.medium.com/tableau-or-power-bi-f5f0803b19eb',
    tags: ['Data Viz', 'Analytics', 'BI'],
  },
  {
    title: 'Intrusion Detection',
    subtitle: 'Security concerns which you aren\'t paying attention though.',
    publication: 'CodeX',
    date: 'Jan 14, 2022',
    claps: 169,
    responses: 0,
    thumbnail: 'https://miro.medium.com/v2/da:true/resize:fill:320:214/0*5GbIfhmsjkHbB0mG',
    url: 'https://hasanworks150.medium.com/intrusion-detection-8b192f789f49',
    tags: ['Security', 'ML', 'Networks'],
  },
  {
    title: 'Best User Authentication Method?',
    subtitle: 'User Validation — the most prior security concern for a User.',
    publication: 'CodeX',
    date: 'Oct 18, 2021',
    claps: 193,
    responses: 0,
    thumbnail: 'https://miro.medium.com/v2/da:true/resize:fill:320:214/0*VvbDmsncsqsaxSiU',
    url: 'https://hasanworks150.medium.com/which-one-is-the-best-user-authentication-method-6b0ffbac8dd5',
    tags: ['Security', 'Auth', 'Web Dev'],
  },
]

export default function Blogs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [showAll, setShowAll] = useState(false)

  const displayedBlogs = showAll ? mediumBlogs : mediumBlogs.slice(0, 6)

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
          <p className="text-sm sm:text-base text-[#94a3b8] max-w-2xl mx-auto px-2 mb-4">
            Published on Medium — sharing insights on AI, ML, and software engineering
          </p>
          <a
            href="https://hasanworks150.medium.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#6366f1] hover:text-[#818cf8] transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
            </svg>
            hasanworks150.medium.com
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {displayedBlogs.map((blog, i) => (
            <motion.a
              key={i}
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className="glass-card rounded-xl sm:rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              {/* Thumbnail */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#12121a]">
                <img
                  src={blog.thumbnail}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/80 via-transparent to-transparent" />
                
                {/* Publication Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-[#0a0a0f]/80 backdrop-blur-sm text-white border border-white/10">
                    {blog.publication}
                  </span>
                </div>

                {/* Claps */}
                <div className="absolute bottom-3 right-3 flex items-center gap-3">
                  <span className="flex items-center gap-1 text-xs text-white/80 bg-[#0a0a0f]/60 backdrop-blur-sm px-2 py-1 rounded-full">
                    👏 {blog.claps}
                  </span>
                  {blog.responses > 0 && (
                    <span className="flex items-center gap-1 text-xs text-white/80 bg-[#0a0a0f]/60 backdrop-blur-sm px-2 py-1 rounded-full">
                      💬 {blog.responses}
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 flex flex-col flex-grow">
                <h3 className="text-sm sm:text-base font-semibold text-[#f1f5f9] mb-1.5 group-hover:text-[#818cf8] transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#94a3b8] mb-3 line-clamp-2 flex-grow">
                  {blog.subtitle}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {blog.tags.map((tag, j) => (
                    <span key={j} className="text-xs px-2 py-0.5 rounded-full bg-[#6366f1]/10 text-[#6366f1] border border-[#6366f1]/20">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Date */}
                <div className="flex items-center justify-between text-xs text-[#64748b]">
                  <span>{blog.date}</span>
                  <span className="flex items-center gap-1 text-[#6366f1] group-hover:translate-x-1 transition-transform">
                    Read
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Show More / View All */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 sm:mt-12"
        >
          {mediumBlogs.length > 6 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2.5 rounded-full border border-[#1e1e2e] text-[#94a3b8] hover:text-white hover:border-[#6366f1] transition-all text-sm"
            >
              {showAll ? 'Show Less' : `View All ${mediumBlogs.length} Articles`}
            </button>
          )}
          <a
            href="https://hasanworks150.medium.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#6366f1] to-[#06b6d4] text-white font-medium text-sm hover:shadow-lg hover:shadow-[#6366f1]/25 transition-all hover:scale-105 inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
            </svg>
            View Medium Profile
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-6 sm:gap-10"
        >
          {[
            { value: '40+', label: 'Articles Published' },
            { value: '236', label: 'Medium Followers' },
            { value: '1K+', label: 'Total Claps' },
            { value: '6+', label: 'Publications' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-xl sm:text-2xl font-bold gradient-text">{stat.value}</div>
              <div className="text-xs text-[#64748b] mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
