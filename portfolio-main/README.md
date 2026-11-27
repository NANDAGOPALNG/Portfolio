# Nanda Gopal D · Portfolio

Personal portfolio of Nanda Gopal D: backend and AI engineering student (CSE – AI & ML, MIT Mysuru, 2027).
Built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4 and Framer Motion.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
```

## Where to edit things

| What | Where |
| --- | --- |
| Projects (text, links, screenshots) | `src/data/projects.ts` |
| Experience & education | `src/data/experience.ts` |
| Skills | `src/data/skills.ts` |
| Hero, About, Contact copy | `src/components/home/Hero.tsx`, `src/components/sections/*.tsx` |
| Resumes (SDE + AI/ML) | `public/Nanda_Gopal_D_SDE_Resume.pdf`, `public/Nanda_Gopal_D_AIML_Resume.pdf` |
| Site URL / SEO | `src/lib/site.ts` (or set `NEXT_PUBLIC_SITE_URL`), `src/app/layout.tsx` |

### Project screenshots
Each project's `image` field points to a placeholder SVG in `public/projects/`.
Drop your real screenshot in that folder (for example `lumora.png`) and change the `image` path in `src/data/projects.ts`.

### Profile photo
The hero and About cards show an "NG" initials card. To use a photo, add it to `public/` and replace the placeholder block in `src/components/home/Hero.tsx` (marked with a comment) with a `next/image`.

### Live demo links
Add a `demo: "https://..."` field to a project in `src/data/projects.ts` and the "Open Live Demo" button will appear.
