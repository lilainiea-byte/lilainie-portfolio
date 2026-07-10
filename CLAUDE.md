# Lilainie Adjei-Addo — Portfolio Website

Personal portfolio for Lilainie Adjei-Addo, a behavioural science / partnerships / implementation professional based in Toronto.

## Stack

- **Next.js 14** App Router (TypeScript)
- **Tailwind CSS** with custom design tokens
- **`next/image`** for all images

## Dev server

```bash
npm run dev
```

Runs on http://localhost:3000.

## Design tokens (Tailwind / CSS variables)

Defined in `src/app/globals.css` and `tailwind.config.ts`:

| Token | Usage |
|---|---|
| `lavender` / `lavender-tint` / `lavender-deep` | Primary page header backgrounds |
| `terracotta` / `terracotta-tint` / `terracotta-deep` | Accent colour (headings, buttons, highlights) |
| `teal` / `teal-tint` | Secondary accent |
| `ink` / `ink-muted` / `ink-hint` | Body text shades |
| `cream` | Section backgrounds |
| `border` / `border-strong` | Card borders |

Fonts: `font-display` (display/headings), `font-script` (handwritten accent), `font-body` (body/UI).

## Pages

| Route | File | Notes |
|---|---|---|
| `/` | `src/app/page.tsx` | Hero with portrait photo, intro blurb, CTA |
| `/about` | `src/app/about/page.tsx` | Bio paragraphs + "Where I focus" pillars |
| `/toolkit` | `src/app/toolkit/page.tsx` | Software tiles + certifications list, data in `src/data/toolkit.ts` |
| `/projects` | `src/app/projects/page.tsx` | Grid of ProjectCards |
| `/contact` | `src/app/contact/page.tsx` | Contact links + availability chips |

## Key components

- **`src/components/ProjectCard.tsx`** — client component (`"use client"`), handles expandable modal. Modal uses `bg-white` (not `bg-paper` which is undefined). Body scroll locked via `useEffect`.
- **`src/components/Nav.tsx`** — site navigation
- **`src/components/ResumeRequest.tsx`** — client component; resume request form on `/contact#resume` that composes a prefilled mailto (no backend, nothing stored). There is intentionally NO resume download — Lilainie tailors the resume per industry and sends it manually.

## Project data

All projects live in **`src/data/projects.ts`**. To add a project, append to the `projects` array.

```ts
type Project = {
  slug: string;
  title: string;
  context: string;        // e.g. "Skills For Change (Non-Profit)"
  description: string;
  tags: string[];
  category: ProjectCategory; // "coordination" | "partnerships" | "implementation" | "data" | "freelance"
  image?: string;         // path under /public/images/projects/
  imagePosition?: string; // CSS object-position, e.g. "50% 50%"
  link?: string;          // external URL
  fileUrl?: string;       // path under /public/files/projects/
  extraFiles?: { label: string; url: string }[];  // shown in modal
  extraImages?: { src: string; label?: string }[]; // shown in modal
  extraLinks?: { label: string; url: string }[];  // shown in modal
  impact?: string[];      // short stat chips: first 2 shown on card, all in modal
};
```

Current projects (in order):
1. **Black Youth In STEAM** — Skills For Change, coordination
2. **Ubuntu In Dementia Care** — Skills For Change, coordination
3. **Concept: CAMH Social Campaign** — Personal Design, coordination (has 3 supplemental PDFs)
4. **Pee4Pizza: Campus STI Testing Campaign** — McMaster Student Wellness Centre, coordination
5. **The McMaster Community Fridge** — McMaster Student Wellness Centre, coordination
6. **Content & Events Strategist** — Freelance, Larger Than Life, freelance
7. **Intergenerational Cookbook Program** — Skills For Change, coordination
8. **McMaster Inaugural Black Student Year Book** — BSSC, coordination

## Static assets

- `public/images/portrait-v2.jpg` — hero portrait (EXIF stripped, correct orientation)
- `public/images/projects/` — project thumbnails
- `public/files/projects/` — supplemental PDFs for project modals

## Hero photo crop technique

The portrait uses an oversized inner wrapper to zoom/crop without CSS transform math:

```tsx
<div className="relative w-full h-full rounded-sm overflow-hidden">
  <div className="absolute" style={{ top: "-30%", left: "-30%", width: "160%", height: "160%" }}>
    <Image src="/images/portrait-v2.jpg" fill className="object-cover"
      style={{ objectPosition: "50% 25%" }} />
  </div>
</div>
```

## Things to add / in progress

- More supplemental media for Projects 1 and 2 (extraFiles / extraImages)
- More projects (user adding them one by one)
- Resume PDF (user will provide)
- Toolkit page (`/toolkit`) is scaffolded with empty states; software logos go in `public/images/toolkit/` and entries get appended to `software`/`certifications` in `src/data/toolkit.ts` (user adding them one by one)
