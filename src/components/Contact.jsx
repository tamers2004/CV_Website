import { useState } from 'react'
import Reveal from './Reveal.jsx'
import { socials } from '../data.js'

function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState({ state: 'idle', msg: '' })

  async function handleSubmit(e) {
    e.preventDefault()
    if (status.state === 'sending') return
    setStatus({ state: 'sending', msg: '' })
    try {
      const res = await fetch('https://formsubmit.co/ajax/tamers2004@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name,
          email,
          message,
          _honey: '',
          _captcha: 'false',
          _template: 'table',
        }),
      })
      if (!res.ok) throw new Error('Request failed')
      setName('')
      setEmail('')
      setMessage('')
      setStatus({ state: 'success', msg: "Message sent! I'll get back to you soon." })
    } catch {
      setStatus({ state: 'error', msg: 'Something went wrong. Please try again or email me directly.' })
    }
  }

  const inputClass =
    'w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-fog placeholder:text-faint outline-none transition focus:border-accent/70 focus:ring-2 focus:ring-accent/20'

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-sm text-muted">
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-sm text-muted">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-sm text-muted">
          Message
        </label>
        <textarea
          id="contact-message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me about your project or opportunity…"
          className={`${inputClass} min-h-32 resize-y`}
        />
      </div>
      <button
        type="submit"
        disabled={status.state === 'sending'}
        className="w-full rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
      >
        {status.state === 'sending' ? 'Sending…' : 'Send message'}
      </button>
      {status.msg && (
        <p
          role="status"
          className={`text-center text-sm ${status.state === 'success' ? 'text-emerald-400' : 'text-red-400'}`}
        >
          {status.msg}
        </p>
      )}
    </form>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden border-t hairline bg-coal/60">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(50rem_24rem_at_50%_110%,rgba(79,124,255,0.12),transparent_65%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="font-display display-tight mt-5 max-w-3xl text-4xl font-bold text-fog md:text-6xl">
            Let&apos;s build something <span className="text-accent">great together</span>.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal delay={100}>
            <div>
              <p className="max-w-md leading-relaxed text-muted">
                I&apos;m always open to new opportunities, collaborations, and interesting conversations.
                The fastest way to reach me is right here.
              </p>
              <a
                href={`mailto:${socials.email}`}
                className="font-display group mt-6 inline-block text-xl font-semibold text-fog transition-colors hover:text-white md:text-2xl"
              >
                {socials.email}
                <span className="mt-1 block h-px w-full origin-left scale-x-100 bg-accent/60 transition-transform duration-300 group-hover:scale-x-0" aria-hidden />
              </a>
              <div className="mt-8 space-y-3 text-sm text-muted">
                <p className="flex items-center gap-3">
                  <svg className="h-4 w-4 text-faint" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  {socials.phone}
                </p>
                <div className="flex gap-3 pt-2">
                  <a
                    href={socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/10 px-5 py-2 text-sm transition-colors hover:border-accent/60 hover:text-fog"
                  >
                    GitHub
                  </a>
                  <a
                    href={socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/10 px-5 py-2 text-sm transition-colors hover:border-accent/60 hover:text-fog"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={180}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
