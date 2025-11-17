# Portfolio — Immanuel Sohn

Modern, responsive portfolio built with React, TypeScript, Vite, and Tailwind CSS v4. Features animated sections, dark mode, and content-driven architecture.

## Tech Stack

- **Frontend:** React 19, TypeScript, Motion (Framer Motion)
- **Styling:** Tailwind CSS v4 (class-based dark mode)
- **Build:** Vite
- **Icons:** Lucide React

## Features

- 🎨 Clean, professional design with dark mode support
- 🎭 Smooth animations and page transitions
- 📱 Fully responsive layout
- ♿ Accessible (ARIA labels, keyboard navigation, focus styles)
- 🗂️ Content-driven architecture — all text/data in `src/content/`
- 🔄 Type-safe content with TypeScript
- 🎯 Sticky glass navigation with active section highlighting

## Project Structure

```
src/
├── components/       # UI components (Hero, About, Projects, Skills, CV, Contact)
│   └── ui/          # Reusable components (Section, Card, ButtonLink, Tag)
├── content/         # Content files (hero, about, projects, skills, cv, contact)
├── types/           # TypeScript type definitions
├── hooks/           # Custom React hooks (useTheme, useActiveSection)
└── assets/          # Images and static assets
```

## Getting Started

### Prerequisites

- Node.js (v18+)
- pnpm

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Runs the development server at `http://localhost:5173`.

### Build

```bash
pnpm build
```

Outputs production-ready files to `dist/`.

### Preview

```bash
pnpm preview
```

Previews the production build locally.

## Customization

All content is centralized in `src/content/`:

- **`hero.ts`** — Name, intro text, rotating keywords
- **`about.ts`** — Bio, focus areas, learnings
- **`projects.ts`** — Project cards with title, description, stack, links
- **`skills.ts`** — Categorized skill lists
- **`cv.ts`** — Work experience and education entries
- **`contact.ts`** — Email and social links

To update text or data, edit these files. The UI will reflect changes automatically.

### Theme

- Dark mode toggle persists preference to `localStorage`
- System preference detected on first visit
- Theme is applied at startup to prevent flash (see `index.html`)

### Sections

- **Home (Hero)** — Introduction with animated rotating keywords
- **About** — Background, tech stack, current focus areas
- **Projects** — GitHub repos and project highlights
- **Skills** — Languages, frameworks, tools, methodologies
- **CV** — Experience and education with tabbed interface
- **Contact** — Email and social links

## Deployment

Build the project and deploy the `dist/` folder to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

```bash
pnpm build
```

## License

Personal portfolio. Feel free to use as inspiration.
