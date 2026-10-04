import Reveal from './Reveal.jsx'

const meta = [
  { label: 'Degree', value: 'B.Sc. Computer Science' },
  { label: 'Focus', value: 'Full-Stack Development' },
  { label: 'Location', value: 'Israel · Open worldwide' },
]

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t hairline">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="eyebrow">About</p>
          <h2 className="font-display display-tight mt-5 max-w-3xl text-4xl font-bold text-fog md:text-6xl">
            Developer with a taste for <span className="text-accent">impactful products</span>.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal delay={100}>
            <p className="max-w-2xl text-lg leading-relaxed text-muted">
              Full-Stack Developer with experience building responsive and interactive web applications
              using React, Node.js, Express.js, and modern web technologies. Proven ability to build
              impactful platforms that foster social change and responsibility. Strong team player with
              a focus on high-quality code, security, and continuous learning. Ready for new challenges
              in an innovative company.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <dl className="divide-y divide-white/[0.07] border-y hairline">
              {meta.map((item) => (
                <div key={item.label} className="flex items-baseline justify-between gap-4 py-4">
                  <dt className="font-display text-xs uppercase tracking-[0.22em] text-faint">{item.label}</dt>
                  <dd className="text-right text-sm text-fog/90">{item.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
