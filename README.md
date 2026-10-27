# Cameroon LinguaConnect — Frontend

The web app for **Cameroon Culture Tongues**: an AI-powered platform for learning the indigenous
languages and cultures of Cameroon (Ewondo, Duala, Fulfulde, Basaa, Bamiléké, Kom, Bakweri, Hausa,
Medumba, Lamnso').

Pages: Home · Languages · AI Tutor · Culture Hub · Dashboard.

The original product brief is kept in [`docs/PROJECT_BRIEF.md`](docs/PROJECT_BRIEF.md).

## Tech stack

- React 19 + TypeScript
- TanStack Start (SSR) + TanStack Router + TanStack Query
- Tailwind CSS v4 + shadcn/ui + Framer Motion
- Vite 7, deployed on Netlify

## Getting started

```bash
npm install
cp .env.example .env     # then set VITE_API_URL
npm run dev              # http://localhost:5173
```

The app talks to the LinguaConnect backend (separate repo) through `VITE_API_URL`
(default `http://localhost:4000`). Start the backend first if you want live data.

If the backend is offline or still waking up, the pages fall back to the same built-in content
(`src/data/`), so the site never shows an empty screen.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build (outputs to `dist/`) |
| `npm run preview` | Preview the production build |
| `npm run lint` | Lint the code |
| `npm run format` | Format with Prettier |

## Environment variables

| Variable | Description | Example |
| --- | --- | --- |
| `VITE_API_URL` | Base URL of the backend API | `https://your-backend.up.railway.app` |

## Deploying to Netlify

1. Push this repo to GitHub and import it in Netlify.
2. Build settings are read from `netlify.toml` (`npm run build`).
3. Add the environment variable `VITE_API_URL` pointing to your deployed backend.
4. Deploy.

## Project structure

```
src/
  routes/       Pages (file-based routing)
  components/   Navbar, Footer and shadcn/ui components
  hooks/        Data hooks that call the backend (with offline fallback)
  lib/          API client and helpers
  data/         Built-in fallback content
  assets/       Images
  styles.css    Design tokens and global styles
```
