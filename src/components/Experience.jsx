import Reveal from './Reveal.jsx'
import { experience } from '../data.js'

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-t hairline">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="eyebrow">Experience</p>
          <h2 className="font-display display-tight mt-5 max-w-3xl text-4xl font-bold text-fog md:text-6xl">
            Where I do <span className="text-accent">my best work</span>.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <article className="relative mt-14 overflow-hidden rounded-2xl border hairline bg-panel/60 p-8 md:p-12">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(36rem_18rem_at_85%_0%,rgba(79,124,255,0.12),transparent_65%)]"
              aria-hidden
            />
            <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="font-display text-sm tracking-[0.18em] text-accent uppercase">{experience.period}</p>
                <h3 className="font-display mt-3 text-2xl font-bold text-fog md:text-3xl">
                  {experience.role}
                  <span className="mt-1 block text-lg font-medium text-muted">{experience.company}</span>
                </h3>
                <div className="mt-6 flex flex-wrap gap-2">
                  {experience.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-accent-soft px-2.5 py-1 text-xs font-medium text-[#9db4ff]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="leading-relaxed text-muted">{experience.summary}</p>
                <ul className="mt-5 space-y-3">
                  {experience.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-[15px] leading-relaxed text-fog/80">
                      <span className="mt-[9px] h-1 w-4 shrink-0 rounded-full bg-accent/70" aria-hidden />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
