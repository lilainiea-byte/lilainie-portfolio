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
| `/projects` | `src/app/projects/page.tsx` | Grid of ProjectCards |
| `/contact` | `src/app/contact/page.tsx` | Contact links + availability chips |

## Key components

- **`src/components/ProjectCard.tsx`** — client component (`"use client"`), handles expandable modal. Modal uses `bg-white` (not `bg-paper` which is undefined). Body scroll locked via `useEffect`.
- **`src/components/Nav.tsx`** — site navigation

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
  extraImages?: string[]; // shown in modal
};
```

Current projects (in order):
1. **Black Youth In STEAM** — Skills For Change, coordination
2. **Ubuntu In Dementia Care** — Skills For Change, coordination
3. **Concept: CAMH Social Campaign** — Personal Design, coordination (has 3 supplemental PDFs)
4. **Content & Events Strategist** — Freelance, Larger Than Life, freelance

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
