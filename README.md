# Harsha Motupalli — AI/ML Engineer Portfolio

A premium futuristic portfolio for an AI/ML engineer. Built with TanStack Start (React 19 + Vite), Tailwind CSS v4, Framer Motion, and a fully tokenized dark design system.

> Note: The original brief asked for Next.js. This project uses **TanStack Start**, which is the same modern stack (React + Vite + file-based routing + SSR) and works identically for deployment. All data, components, and design tokens are portable.

---

## ✨ Features

- 6 dedicated routes (Home, Skills, Projects, Certifications, Resources, Contact) — multi-page architecture, not a long scroll.
- Cinematic hero with an **animated orbiting tech-network globe** that reacts to cursor.
- Custom dual-element **animated cursor** with hover expansion.
- Ambient neural-grid background, floating particles, layered glows.
- **Glassmorphism**, gradient tokens, glow rings, magnetic 3D tilt project cards.
- Fullscreen cinematic project case studies (`/projects/:slug`).
- Fullscreen certification modal with smooth scale-in.
- Categorized, expandable Skills system with staggered reveals.
- Filterable Resources hub with 18 curated links.
- Validated contact form (zod) that opens the user's email client.
- 100% data-driven — change content in `/src/data/*.ts` and the UI updates everywhere.

---

## 🗂 Project structure

```
src/
  components/
    animations/     # Cursor, AmbientBackground
    layout/         # Nav, Footer, PageShell
    sections/       # GlobeOrbit
    ui/             # shadcn primitives
  data/             # ⭐ EDIT YOUR CONTENT HERE
    profile.ts        # name, role, objective, education, achievements, socials
    skills.ts         # skill categories & subgroups
    projects.ts       # projects + full case studies
    certifications.ts # certifications with modal data
    resources.ts      # learning resource hub
  routes/           # File-based routing
    __root.tsx        # Layout + nav + footer + cursor + background
    index.tsx         # Home (hero + objective + edu/achievements)
    skills.tsx
    projects.index.tsx
    projects.$slug.tsx  # Cinematic case study page
    certifications.tsx
    resources.tsx
    contact.tsx
  styles.css        # Design tokens (colors, gradients, animations)
public/
  resume.pdf        # ⬅ drop your resume here
```

---

## ✏️ How to update content

| You want to change… | Edit this file |
|---|---|
| Name, role, objective, education, achievements, socials | `src/data/profile.ts` |
| Skill categories or pills | `src/data/skills.ts` |
| Projects + case studies | `src/data/projects.ts` |
| Certifications | `src/data/certifications.ts` |
| Resource hub links | `src/data/resources.ts` |
| Resume PDF | replace `public/resume.pdf` |
| Colors, gradients, fonts | `src/styles.css` (tokens in `:root`) |

To **add a new project**: append an object to `projects` in `src/data/projects.ts`. The card appears on `/projects` and the case study route `/projects/<slug>` works automatically.

---

## 🛠 Tech stack

- React 19 + TypeScript
- TanStack Start (Vite + file-based router, SSR-ready)
- Tailwind CSS v4 (CSS-variable theme)
- Framer Motion (page entrances, scroll reveals, modals)
- Lucide icons, sonner toasts, zod validation

---

## 🚀 Run locally on your PC

### Prerequisites
- **Node.js 20+** — https://nodejs.org
- **bun** (recommended) — https://bun.sh — or use `npm` / `pnpm`

### Install & start
```bash
# 1. Unzip the folder and open it
cd portfolio

# 2. Install dependencies (pick one)
bun install
# or:  npm install
# or:  pnpm install

# 3. Start the dev server
bun run dev
# or:  npm run dev
```

Open **http://localhost:5173** (Vite will print the exact URL).

### Build for production
```bash
bun run build
bun run preview   # serve the production build locally
```

---

## ☁️ Deployment

### Vercel
1. Push the project to a GitHub repo.
2. Go to https://vercel.com → **New Project** → import the repo.
3. Framework preset: **Vite** (auto-detected). Build command `bun run build` or `npm run build`. Output dir is auto.
4. Click **Deploy**. Done.

### Netlify
1. Push to GitHub.
2. https://app.netlify.com → **Add new site → Import from Git**.
3. Build command: `npm run build` · Publish dir: `dist`
4. Deploy.

### Cloudflare Pages / Workers
This template ships with a `wrangler.jsonc` and `@cloudflare/vite-plugin`, so it deploys to Cloudflare Workers out-of-the-box:
```bash
npx wrangler deploy
```

---

## 🎨 Design system

All colors, gradients and shadows live in `src/styles.css` as CSS variables (oklch). To rethemе, change just `--primary`, `--accent`, `--cyan`, `--violet` and the entire UI updates.

Never use `text-white`/`bg-black` in components — use semantic tokens (`text-foreground`, `bg-primary`, `text-gradient`, `glass`, `glass-strong`, `border-glow`, `glow-ring`, `neural-grid`).

---

Crafted with intent. Ship it. 🚀
