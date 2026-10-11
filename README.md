# Myakka Green — Lawn Care Website Template

A polished, fully responsive Next.js website for a **fictional** lawn-care company in North Port, Florida.
All business names, people, reviews, credentials and contact details (including `(941) 555-0187`) are placeholders.

## Stack
- Next.js 15 (App Router) + React 19
- Tailwind CSS v4 — no other runtime dependencies
- Illustrated SVG scenes (`components/LawnScene.tsx`) instead of stock photos — swap in real photography before launch

## Pages
`/` · `/services` · `/about` · `/gallery` · `/contact`

## Notes
- The quote form validates client-side only; **nothing is sent**. Wire it to a form backend or email API to go live.
- Content lives in `lib/site.ts` and `lib/gallery.ts`.
- Animations respect `prefers-reduced-motion`.

```bash
npm install
npm run dev
```
