# AGENTS.md

## Stack

- **React 19** + **Vite 8** + **Tailwind CSS v4**
- No TypeScript, no test framework

## Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | ESLint (flat config in `eslint.config.js`) |

## Tailwind CSS v4 quirks

- **No `tailwind.config.js` or `postcss.config.js`** — v4 is configured exclusively via the `@tailwindcss/vite` plugin in `vite.config.js`.
- CSS entrypoint `src/index.css` contains only `@import "tailwindcss"`.

## Project structure

- Entrypoint: `index.html` → `src/main.jsx` → `src/App.jsx`
- `src/assets/` — empty directory for static asset imports
- `public/` — served at root (`Tamer_Satel_CV.pdf`, `favicon.svg`, `icons.svg`)
- `dist/` — build output (gitignored)

## GitHub Pages deployment

- **`vite.config.js`** `base` must match repo name (currently `/CV_Website/`)
- **GitHub Pages** is built-in — no custom workflow needed
- To deploy: push to `main` → GitHub auto-builds & publishes
- GitHub repo Settings → Pages → Source must be set to "GitHub Actions"
