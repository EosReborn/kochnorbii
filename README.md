# kochnorbert.hu

Koch Norbert személyes szakmai portfolio weboldala. Next.js (App Router) + TypeScript + Tailwind CSS v4, Vercel deploymentre optimalizálva.

## Stack

- **Next.js 16** (App Router, React 19)
- **TypeScript**
- **Tailwind CSS v4**
- Self-hosted variable fontok (`next/font/local`) — Bricolage Grotesque (display) és Instrument Sans (body), magyar (latin-ext) karakterkészlettel
- Library-mentes scroll-reveal animációk (`IntersectionObserver`), `prefers-reduced-motion` támogatással
- Dinamikus Open Graph kép (`next/og`), `robots.ts`, `sitemap.ts`, JSON-LD (Person séma)

## Fejlesztés

```bash
npm install
npm run dev
```

Nyisd meg: http://localhost:3000

## Build

```bash
npm run build
npm run start
```

## Tartalom bővítése

- **Projektek:** `src/data/projects.ts` — új elem hozzáadása a tömbhöz, kép a `public/projects/` mappába (SVG placeholderek jelenleg).
- **Lab / kísérletek:** `src/data/lab.ts`
- **Képességek lista:** `src/data/capabilities.ts`
- **Alap adatok (email, közösségi linkek, Koch Digital Studio URL):** `src/lib/site.ts`

## Deployment (Vercel)

A projekt Vercelre optimalizálva készült — repo importálása a Vercelen, build parancs és output automatikusan felismerve (`next build`). A `metadataBase` és a strukturált adatok a `kochnorbert.hu` domainre vannak beállítva a `src/lib/site.ts`-ben; élesítés előtt érdemes ellenőrizni.
