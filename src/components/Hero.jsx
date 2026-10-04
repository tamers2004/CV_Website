import { Suspense, lazy } from 'react'
import { socials } from '../data.js'

const HeroCanvas = lazy(() => import('./HeroCanvas.jsx'))

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16" aria-label="Introduction">
      {/* ambient backdrop (also the no-WebGL fallback) */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(60rem_30rem_at_75%_20%,rgba(79,124,255,0.13),transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(40rem_26rem_at_10%_85%,rgba(79,124,255,0.06),transparent_60%)]" />
        <div className="absolute inset-0 animate-drift bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-14 md:px-8 lg:min-h-[calc(100vh-4rem)] lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-10 lg:pt-10">
        <div>
          <p className="animate-rise mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[13px] text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping-soft rounded-full bg-accent" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for opportunities
          </p>

          <h1 className="font-display display-tight animate-rise-late text-[clamp(3.2rem,9vw,6.5rem)] font-bold text-fog">
            Tamer
            <br />
            Satel<span className="text-accent">.</span>
          </h1>

          <p className="animate-rise-later mt-6 max-w-xl font-display text-lg font-medium tracking-wide text-fog/90 md:text-xl">
            Full Stack Developer crafting immersive web experiences.
          </p>
          <p className="animate-rise-later mt-3 max-w-xl text-[15px] leading-relaxed text-muted">
            Building impactful full-stack platforms with React, Node.js, and modern web technologies —
            from real-time emergency response to data-driven consumer products.
          </p>

          <div className="animate-rise-later mt-9 flex flex-wrap items-center gap-3">
            <button
              onClick={() => scrollTo('projects')}
              className="rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white transition-all hover:brightness-110 hover:shadow-[0_8px_32px_-8px_rgba(79,124,255,0.7)] cursor-pointer"
            >
              Explore my work
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="rounded-full border border-white/15 px-7 py-3 text-sm font-medium text-fog transition-colors hover:border-accent/70 hover:text-white cursor-pointer"
            >
              Get in touch
            </button>
            <a
              href={socials.cv}
              download
              className="px-2 py-3 text-sm font-medium text-muted underline decoration-white/20 underline-offset-8 transition-colors hover:text-fog hover:decoration-accent"
            >
              Download CV
            </a>
          </div>

          <div className="animate-rise-later mt-10 flex items-center gap-5 text-muted">
            <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-colors hover:text-fog">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z" /></svg>
            </a>
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-fog">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </a>
            <a href={`mailto:${socials.email}`} aria-label="Email" className="transition-colors hover:text-fog">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
            </a>
            <span className="hidden h-4 w-px bg-white/10 sm:block" aria-hidden />
            <span className="hidden font-display text-xs uppercase tracking-[0.24em] text-faint sm:block">
              Based in Israel · Open worldwide
            </span>
          </div>
        </div>

        <div className="relative h-72 sm:h-96 lg:h-[540px]" role="img" aria-label="Interactive abstract 3D sculpture">
          <div className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(79,124,255,0.16),transparent)]" aria-hidden />
          <Suspense fallback={null}>
            <HeroCanvas />
          </Suspense>
        </div>
      </div>

      <div className="relative hidden justify-center pb-8 lg:flex" aria-hidden>
        <div className="flex h-12 w-7 items-start justify-center rounded-full border border-white/15 p-1.5">
          <div className="h-2 w-1 animate-bounce rounded-full bg-muted" />
        </div>
      </div>
    </section>
  )
}
