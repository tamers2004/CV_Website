import Reveal from './Reveal.jsx'
import { education } from '../data.js'

export default function Education() {
  return (
    <section id="education" className="scroll-mt-20 border-t hairline">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="eyebrow">Education</p>
          <h2 className="font-display display-tight mt-5 max-w-3xl text-4xl font-bold text-fog md:text-6xl">
            Foundations in <span className="text-accent">computer science</span>.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {education.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <article className="h-full rounded-2xl border hairline bg-panel/50 p-8 transition-colors duration-300 hover:border-accent/25">
                <p className="font-display text-sm tracking-[0.18em] text-accent uppercase">{item.period}</p>
                <h3 className="font-display mt-3 text-xl font-bold text-fog">{item.title}</h3>
                {item.place && <p className="mt-1 text-sm text-muted">{item.place}</p>}
                <p className="mt-4 text-[15px] leading-relaxed text-muted">{item.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
