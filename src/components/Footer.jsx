import { socials } from '../data.js'

export default function Footer() {
  return (
    <footer className="border-t hairline">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-[13px] text-faint sm:flex-row md:px-8">
        <p>
          © {new Date().getFullYear()} Tamer Satel — Built with React &amp; Tailwind CSS
        </p>
        <div className="flex items-center gap-5">
          <a href={socials.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-muted">
            GitHub
          </a>
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-muted">
            LinkedIn
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="transition-colors hover:text-muted cursor-pointer"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  )
}
