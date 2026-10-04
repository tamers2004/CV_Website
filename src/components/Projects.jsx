import Reveal from './Reveal.jsx'
import { projects } from '../data.js'

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-t hairline bg-coal/60">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="eyebrow">Projects</p>
          <h2 className="font-display display-tight mt-5 max-w-3xl text-4xl font-bold text-fog md:text-6xl">
            Selected <span className="text-accent">work</span>.
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            Real products, shipped and used — from emergency response to trading simulation.
          </p>
        </Reveal>

        <div className="mt-14 space-y-6">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={Math.min(i, 2) * 80}>
              <article
                className={`group grid gap-8 overflow-hidden rounded-2xl border hairline bg-ink p-8 transition-all duration-300 hover:border-accent/30 hover:shadow-[0_24px_64px_-32px_rgba(79,124,255,0.35)] md:p-12 lg:grid-cols-[auto_1fr] lg:gap-14 ${
                  i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <div className="flex lg:w-40 lg:flex-col lg:justify-between">
                  <p className="font-display text-5xl font-bold text-white/[0.09] transition-colors duration-300 group-hover:text-accent/25 md:text-6xl">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <p className="hidden font-display text-xs uppercase tracking-[0.22em] text-faint lg:mt-6 lg:block">
                    {project.field}
                  </p>
                </div>
                <div>
                  <p className="font-display text-xs uppercase tracking-[0.22em] text-accent lg:hidden">
                    {project.field}
                  </p>
                  <h3 className="font-display display-tight mt-2 text-3xl font-bold text-fog transition-colors duration-300 group-hover:text-white md:text-[2.6rem]">
                    {project.title}
                  </h3>
                  <p className="mt-4 max-w-2xl leading-relaxed text-muted">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-3.5 py-1.5 text-[13px] text-muted transition-colors duration-200 group-hover:border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      href={project.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted underline decoration-accent/50 underline-offset-4 transition-colors hover:text-fog"
                    >
                      {project.link.label} <span aria-hidden>↗</span>
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <p className="mt-10 text-center text-sm text-faint">
            More experiments and open source on{' '}
            <a
              href="https://github.com/tamers2004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted underline decoration-accent/50 underline-offset-4 transition-colors hover:text-fog"
            >
              GitHub
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  )
}
