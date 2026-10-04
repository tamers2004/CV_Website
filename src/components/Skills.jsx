import Reveal from './Reveal.jsx'
import { skillGroups } from '../data.js'

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t hairline bg-coal/60">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="eyebrow">Skills</p>
          <h2 className="font-display display-tight mt-5 max-w-3xl text-4xl font-bold text-fog md:text-6xl">
            A practical stack, <span className="text-accent">sharpened daily</span>.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border hairline bg-white/[0.06] md:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.name} delay={i * 90} className="bg-ink">
              <div className="group h-full p-8 transition-colors duration-300 hover:bg-panel">
                <p className="font-display text-xs uppercase tracking-[0.24em] text-faint">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="font-display mt-2 text-xl font-semibold text-fog">{group.name}</h3>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[13px] text-muted transition-colors duration-200 hover:border-accent/60 hover:text-fog"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
