import { useEffect, useState } from 'react'
import { navItems } from '../data.js'

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Nav() {
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const go = (id) => {
    setOpen(false)
    scrollTo(id)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-ink/85 backdrop-blur-md border-b hairline' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-display text-sm font-semibold tracking-[0.22em] text-fog uppercase cursor-pointer"
          aria-label="Back to top"
        >
          T<span className="text-accent">.</span>Satel
        </button>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className={`group relative text-[13px] tracking-wide transition-colors cursor-pointer ${
                active === item.id ? 'text-fog' : 'text-muted hover:text-fog'
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1.5 left-0 h-px bg-accent transition-all duration-300 ${
                  active === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </button>
          ))}
          <button
            onClick={() => go('contact')}
            className="rounded-full border border-white/15 px-4 py-1.5 text-[13px] text-fog transition-colors hover:border-accent hover:text-white cursor-pointer"
          >
            Hire me
          </button>
        </nav>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-fog md:hidden cursor-pointer"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 top-0 h-px w-full bg-current transition-transform duration-300 ${open ? 'translate-y-[7px] rotate-45' : ''}`}
            />
            <span
              className={`absolute left-0 top-[7px] h-px w-full bg-current transition-opacity duration-300 ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`absolute left-0 top-[14px] h-px w-full bg-current transition-transform duration-300 ${open ? '-translate-y-[7px] -rotate-45' : ''}`}
            />
          </span>
        </button>
      </div>

      <div
        className={`overflow-hidden border-b hairline bg-ink/95 backdrop-blur-md transition-all duration-300 md:hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 border-transparent'
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-4" aria-label="Mobile">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className={`rounded-lg px-3 py-2.5 text-left text-sm transition-colors cursor-pointer ${
                active === item.id ? 'bg-white/5 text-fog' : 'text-muted hover:bg-white/5 hover:text-fog'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}
