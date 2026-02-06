# Lily Lee — Portfolio

Hello, I'm **Lily Lee**, a frontend developer with a Computer Science background. I build web and mobile platforms using React, React Native, TypeScript, Node.js, and AWS. I care about clear architecture (Domain-Driven Design), performance, and shipping features end-to-end—especially in fast-moving startup environments.

This repo is my **portfolio site**: a minimal, responsive single-page built with **Next.js 14**, TypeScript, and Tailwind CSS. It showcases my skills, projects, and experience. The structure is set up to grow into a fuller fullstack setup (API routes, server actions, database) when needed.

---

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

---

## Future implementations

Planned additions and ideas for this portfolio and related products:

- **More products & projects** — New case studies, side projects, and demos as I ship them.
- **Chat / contact widget** — In-site chat or messaging so visitors can reach out without leaving the page.
- **Newsletter or subscription** — Optional signup for updates (e.g. new projects, blog posts, or career notes).
- **Blog or notes section** — A simple blog or “notes” area for technical writing and learnings.
- **Dark/light theme toggle** — User preference for theme with persistence.
- **Analytics & feedback** — Lightweight analytics and/or a simple feedback form to improve the site.

Suggestions and ideas are welcome—open an issue or reach out via the contact links on the site.

---

## Structure

- **`/`** – Home: Hero, Skills, Projects, Experience, Contact
- **`/projects/[id]`** – Project detail pages (e.g. `/projects/gomaxpain`)
- **`src/data/projects.ts`** – Edit project list and content here
- **`src/components/`** – Reusable sections (Header, Hero, Skills, Projects, Experience, Contact)

## Customize

1. **Copy** – Update name, tagline, and bio in `src/components/Hero.tsx` and `src/components/Contact.tsx`.
2. **Projects** – Add or edit entries in `src/data/projects.ts`; each `id` becomes `/projects/[id]`.
3. **Experience** – Edit the `experiences` array in `src/components/Experience.tsx`.
4. **Skills** – Edit the `skills` array in `src/components/Skills.tsx`; set `highlighted: true` for a dark card.
5. **Resume** – Add a `public/resume.pdf` and the header “Resume” button will link to it.
