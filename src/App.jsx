import { useEffect } from 'react'

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Education', id: 'education' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
]

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
            entry.target.classList.remove('opacity-0', 'translate-y-6')
          }
        })
      },
      { threshold: 0.15 },
    )
    const els = document.querySelectorAll('.reveal')
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

const projects = [
  {
    title: 'Shomer Ahi',
    description:
      'Full-stack platform for armed civilians and security forces. Real-time event tracking, emergency response, weapon theft prevention. Built with React Native, React.js, and Firebase.',
    tags: ['React', 'React Native', 'Firebase', 'Real-time'],
  },
  {
    title: 'Crypto Trading Simulator',
    description:
      'Virtual cryptocurrency trading platform with buy/sell, portfolio management, real-time balance tracking, and market-style UI. Built with React, Express.js, Node.js, and MySQL.',
    tags: ['React', 'Express.js', 'Node.js', 'MySQL'],
  },
  {
    title: 'Twitter Clone',
    description:
      'Full-stack social media application replicating core Twitter functionality — authentication, profile management, posting, and a RESTful API.',
    tags: ['React', 'Express.js', 'MySQL', 'REST API'],
  },
  {
    title: 'Mobile Sudoku Game',
    description:
      'Cross-platform Sudoku app published on Google Play. Board generation, difficulty levels (Easy/Medium/Hard), persistent game state via AsyncStorage.',
    tags: ['React Native', 'Expo', 'Tailwind CSS', 'Google Play'],
  },
]

const skills = [
  'React', 'React Native', 'JavaScript', 'HTML', 'CSS',
  'Node.js', 'Express.js', 'Firebase', 'MySQL', 'Docker',
  'Tailwind CSS', 'REST APIs', 'Git',
]

export default function App() {
  useReveal()

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans antialiased selection:bg-purple-500/30 scroll-smooth">

      {/* ─── NAV ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800/60">
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-center">
          <div className="flex gap-4 sm:gap-6 text-sm">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-purple-300 transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen pt-14 flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-indigo-950/80 to-gray-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-600/15 via-transparent to-transparent" />

        {/* floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan-600/10 blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />

        <div className="relative z-10 text-center px-4 max-w-3xl">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium tracking-wide">
            Available for opportunities
          </div>
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold mb-4 tracking-tight bg-gradient-to-r from-purple-300 via-indigo-200 to-cyan-200 bg-clip-text text-transparent">
            Tamer Satel
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-2 font-light">
            Full Stack Developer
          </p>
          <p className="text-gray-500 max-w-lg mx-auto mb-8 text-balance">
            Building impactful full-stack platforms with React, Node.js, and modern web technologies.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="https://github.com/tamers2004"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800/80 hover:bg-purple-600 transition-colors border border-gray-700 hover:border-purple-500"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z"/></svg>
            </a>
            <a
              href="https://www.linkedin.com/in/tamer-satel-4b112a2b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800/80 hover:bg-purple-600 transition-colors border border-gray-700 hover:border-purple-500"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a
              href="mailto:tamers2004@gmail.com"
              className="p-3 rounded-full bg-gray-800/80 hover:bg-purple-600 transition-colors border border-gray-700 hover:border-purple-500"
              aria-label="Email"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </a>
            <a
              href={`${import.meta.env.BASE_URL}Tamer_Satel_FullStack.pdf`}
              download
              className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 transition-colors font-medium text-sm tracking-wide"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-600">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" className="px-4 py-24 max-w-4xl mx-auto scroll-mt-14">
        <div className="reveal opacity-0 translate-y-6 transition-all duration-700">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">About Me</h2>
          <div className="w-16 h-1 bg-purple-500 rounded-full mb-8" />
          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl text-balance">
            Full-Stack Developer with experience building responsive and interactive web applications
            using React, Node.js, Express.js, and modern web technologies. Proven ability to build
            impactful platforms that foster social change and responsibility. Strong team player with
            a focus on high-quality code, security, and continuous learning. Ready for new challenges
            in an innovative company.
          </p>
        </div>
      </section>

      {/* ─── SKILLS ─── */}
      <section id="skills" className="px-4 py-24 max-w-4xl mx-auto border-t border-gray-800/60 scroll-mt-14">
        <div className="reveal opacity-0 translate-y-6 transition-all duration-700">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">Skills</h2>
          <div className="w-16 h-1 bg-purple-500 rounded-full mb-8" />
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-gray-800/60 border border-gray-700/60 text-gray-300 text-sm font-medium hover:border-purple-500/50 hover:bg-purple-500/10 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WORK EXPERIENCE ─── */}
      <section id="experience" className="px-4 py-24 max-w-4xl mx-auto border-t border-gray-800/60 scroll-mt-14">
        <div className="reveal opacity-0 translate-y-6 transition-all duration-700">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">Work Experience</h2>
          <div className="w-16 h-1 bg-purple-500 rounded-full mb-8" />
          <div className="relative pl-8 border-l-2 border-gray-800">
            <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-purple-500 border-2 border-gray-950" />
            <div className="mb-2">
              <span className="text-sm text-gray-500 font-mono">2026</span>
            </div>
            <h3 className="text-xl font-semibold">Full Stack Developer | Volunteen</h3>
            <p className="text-gray-400 text-sm leading-relaxed mt-2">
              Developed and maintained a cross-platform mobile application using React Native for iOS and Android.
            </p>
            <ul className="mt-3 space-y-1.5 text-gray-400 text-sm list-disc list-inside marker:text-purple-400">
              <li>Implemented new features, optimized performance, and improved the overall user experience.</li>
              <li>Collaborated with developers and stakeholders to deliver scalable application functionality.</li>
              <li>Participated in debugging, testing, code reviews, and Agile development processes.</li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-300 text-xs font-medium">React Native</span>
              <span className="px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-300 text-xs font-medium">JavaScript</span>
              <span className="px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-300 text-xs font-medium">Git</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROJECTS ─── */}
      <section id="projects" className="px-4 py-24 max-w-4xl mx-auto border-t border-gray-800/60 scroll-mt-14">
        <div className="reveal opacity-0 translate-y-6 transition-all duration-700">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">Projects</h2>
          <div className="w-16 h-1 bg-purple-500 rounded-full mb-8" />
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-purple-500/40 transition-all hover:shadow-lg hover:shadow-purple-500/5"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-100 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-300 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EDUCATION ─── */}
      <section id="education" className="px-4 py-24 max-w-4xl mx-auto border-t border-gray-800/60 scroll-mt-14">
        <div className="reveal opacity-0 translate-y-6 transition-all duration-700">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">Education</h2>
          <div className="w-16 h-1 bg-purple-500 rounded-full mb-8" />
          <div className="relative pl-8 border-l-2 border-gray-800">
            <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-purple-500 border-2 border-gray-950" />
            <div className="mb-2">
              <span className="text-sm text-gray-500 font-mono">2022 – 2025</span>
            </div>
            <h3 className="text-xl font-semibold">B.Sc. in Computer Science</h3>
            <p className="text-gray-400 text-sm">Holon Institute of Technology</p>
            <p className="text-gray-500 text-sm mt-1">
              Specialized in Full-Stack development with a focus on data structures, algorithms,
              operating systems, and software engineering.
            </p>
            <div className="mt-6">
              <div className="mb-1">
                <span className="text-sm text-gray-500 font-mono">Grades 10 – 12</span>
              </div>
              <h3 className="text-lg font-semibold">High School Computer Science</h3>
              <p className="text-gray-400 text-sm mt-1">
                Completed three years of high school computer science (Grades 10-12),
                building foundational knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="px-4 py-24 max-w-4xl mx-auto border-t border-gray-800/60 scroll-mt-14">
        <div className="transition-all duration-700 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">Get in Touch</h2>
          <div className="w-16 h-1 bg-purple-500 rounded-full mx-auto mb-8" />
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            I&apos;m always open to new opportunities. Feel free to reach out!
          </p>
          <div className="flex flex-col items-center gap-3 text-gray-400 text-sm">
            <a href="mailto:tamers2004@gmail.com" className="flex items-center gap-2 hover:text-purple-300 transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              tamers2004@gmail.com
            </a>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              +972 54-6833507
            </span>
            <div className="flex gap-4 mt-4">
              <a href="https://github.com/tamers2004" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-gray-800 hover:bg-purple-600 transition-colors text-sm">GitHub</a>
              <a href="https://www.linkedin.com/in/tamer-satel-4b112a2b6/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-gray-800 hover:bg-purple-600 transition-colors text-sm">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="px-4 py-8 border-t border-gray-800/60 text-center text-gray-600 text-sm">
        Built with React &amp; Tailwind CSS &middot; &copy; {new Date().getFullYear()} Tamer Satel
      </footer>

    </div>
  )
}
