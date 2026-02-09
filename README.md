# Portfolio

A minimal portfolio site built with **Next.js 14**, TypeScript, and Tailwind CSS. Structured for a future fullstack transition (API routes, server actions, DB).

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

## Structure

- **`/`** – Home: Hero, Skills, Projects, Experience, Contact
- **`/projects/[id]`** – Project detail pages (e.g. `/projects/ecommerce-dashboard`)
- **`src/data/projects.ts`** – Edit project list and content here
- **`src/components/`** – Reusable sections (Header, Hero, Skills, Projects, Experience, Contact)

## Customize

1. **Copy** – Update name, tagline, and bio in `src/components/Hero.tsx` and `src/components/Contact.tsx`.
2. **Projects** – Add or edit entries in `src/data/projects.ts`; each `id` becomes `/projects/[id]`.
3. **Experience** – Edit the `experiences` array in `src/components/Experience.tsx`.
4. **Skills** – Edit the `skills` array in `src/components/Skills.tsx`; set `highlighted: true` for a dark card.
5. **Resume** – Add a `public/resume.pdf` and the header “Resume” button will link to it.
