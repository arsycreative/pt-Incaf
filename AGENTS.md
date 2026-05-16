# AGENTS.md
<!-- Rules for AI agents (Claude Code, Cursor, Windsurf, Copilot, etc.) working on this project -->

---

## ⚠️ Read Before Writing Any Code

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know
This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

**Always run this first when starting a session:**
```bash
cat node_modules/next/package.json | grep '"version"'
ls node_modules/next/dist/docs/
```
Then read the relevant `.md` files inside that docs folder before touching any Next.js API.

---

## Project Guides

Read these files **in order** before generating any code:

```
docs/00_PROJECT_OVERVIEW.md   — stack, folder structure, env, whatsapp util
docs/01_DESIGN_SYSTEM.md      — colors, typography, animation, component patterns
docs/02_CONTENT_AND_PAGES.md  — sitemap, copy, all product & industry data
```

> These files are the source of truth. Do not invent content, colors, or structure that contradicts them.

---

## Stack Constraints

| Concern | Solution | Notes |
|---|---|---|
| Styling | Tailwind CSS only | No inline styles, no CSS modules |
| UI primitives | shadcn/ui | Install components via `npx shadcn@latest add <component>` |
| Icons | lucide-react (primary) | react-icons/fa for WhatsApp icon only |
| Animation | Framer Motion | Always `whileInView` + `viewport={{ once: true }}` |
| Smooth scroll | Lenis | Setup once in root layout |
| Images | `next/image` | Always — never `<img>` tags |
| Fonts | `next/font/google` | Plus Jakarta Sans — setup in root layout |
| SEO | Next.js `metadata` API | Per-page `export const metadata` |
| Forms | No backend | WA link generation only — see `lib/whatsapp.ts` |

---

## File & Folder Rules

- All components go in `src/components/<feature>/ComponentName.tsx`
- Page files are thin — extract all logic & JSX into components
- Data arrays (products, industries) live in `src/data/`, **not** inside components
- Shared types in `src/types/index.ts`
- `'use client'` only when strictly needed (event handlers, hooks, animations)
  - Static/display components must remain Server Components
- Never put `'use client'` in `app/layout.tsx` — use a wrapper component instead

---

## Code Style Rules

- TypeScript strict mode — no `any`
- Named exports for components, default export only for page files
- Props interface defined above every component:
  ```tsx
  interface CardProps { title: string; description: string }
  export function Card({ title, description }: CardProps) { ... }
  ```
- Classnames: use `cn()` from `lib/utils.ts` (shadcn utility) for conditional classes
- No hardcoded colors — always use Tailwind config tokens (`text-navy`, `bg-green`, etc.)
- No hardcoded strings for company info — always import from `lib/constants.ts`

---

## Design Rules (Non-Negotiable)

- Every section must have a **green eyebrow label** above the heading
- All cards must have `hover:-translate-y-1 hover:shadow-xl transition-all duration-300`
- All scroll-triggered elements use Framer Motion `fadeUp` variant — never appear static
- WhatsApp CTA must appear on **every page** — floating button + at least one inline CTA
- Mobile-first: design for 1-column, then scale up — test every grid at `sm:` breakpoint
- Buttons follow the 4 variants in `01_DESIGN_SYSTEM.md` exactly — do not invent new ones

---

## WhatsApp Integration

All contact/CTA actions go through WhatsApp — there is no backend form handler.

```ts
// Always use the helper — never hardcode wa.me links manually
import { generateWhatsAppLink } from '@/lib/whatsapp'

// Generic link
generateWhatsAppLink()
// → https://wa.me/6208131002831

// Product inquiry
generateWhatsAppLink(`Halo, saya tertarik dengan produk ${productName}`)

// Form submission
generateWhatsAppFromForm(formData)
```

---

## Image Rules

- All images use `next/image` with explicit `width`/`height` or `fill` + `relative` parent
- Hero images: `priority` prop, format WebP
- All other images: `loading="lazy"` (default)
- Every image must have a descriptive `alt` attribute
- Placeholder images from Unsplash are defined in `02_CONTENT_AND_PAGES.md` — use those URLs, do not pick random ones
- When client replaces an image, the Unsplash URL gets swapped — no other code changes needed

---

## Animation Rules

Never animate without `viewport={{ once: true }}`. Never stack animations back-to-back without stagger. Respect reduced motion:

```tsx
// Wrap all motion components with this check
import { useReducedMotion } from 'framer-motion'
const reduced = useReducedMotion()
// Pass `reduced ? {} : fadeUp` as variants
```

---

## What NOT To Do

- ❌ Do not use `<a>` tags for internal navigation — use `<Link>` from `next/link`
- ❌ Do not use `useRouter().push()` for link-style navigation
- ❌ Do not install new packages without checking if a solution exists in the current stack
- ❌ Do not create new color values — extend `tailwind.config.ts` only if a brand color is missing
- ❌ Do not write placeholder/lorem ipsum copy — all copy is in `02_CONTENT_AND_PAGES.md`
- ❌ Do not skip the Lenis smooth scroll setup — it affects the feel of the entire site
- ❌ Do not use `position: fixed` manually — the FloatingWhatsApp component handles this

---

## Before You Submit / Commit

Run this checklist mentally before finishing any task:

- [ ] Did I read `node_modules/next/dist/docs/` for any Next.js API I used?
- [ ] Is every grid responsive (1 col mobile → multi col desktop)?
- [ ] Does every new section animate on scroll with Framer Motion?
- [ ] Are all strings sourced from `constants.ts` or `data/`?
- [ ] Is there a WhatsApp CTA reachable from this page?
- [ ] Did I use `next/image` for every image?
- [ ] Are there any TypeScript errors (`npx tsc --noEmit`)?
- [ ] Did I accidentally add `'use client'` to a component that doesn't need it?
