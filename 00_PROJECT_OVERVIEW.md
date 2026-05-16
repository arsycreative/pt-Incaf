# Incaf Website — Project Overview

**PT. Incaf Nutri Solusindo** | Company Profile Website

---

## About the Company

Importir & distributor speciality chemical untuk industri F&B, peternakan, pertanian, dan manufaktur di Indonesia.

```
Tagline  : Indonesia Chemical of Agriculture, Food & Feed Speciality
Email    : contact@ptincaf.com
Phone    : (021) 29021873
WhatsApp : 6208131002831  →  wa.me/6208131002831
Alamat   : CHR OFFICE Lt. 9 Unit O, Grand Slipi Tower,
           Jl. Jend. S. Parman Kav 22–24, Jakarta Barat 11480
Hours    : Senin–Jumat, 08.00–17.00 WIB
```

---

## Tech Stack

| Layer | Library |
|---|---|
| Framework | Next.js 14+ (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS |
| UI Components | shadcn/ui + @radix-ui/themes |
| Animation | Framer Motion |
| Smooth Scroll | Lenis |
| Icons | lucide-react · react-icons · @heroicons/react |
| Scroll Detection | react-intersection-observer |
| Lottie | lottie-react |
| SEO | Next.js metadata API |
| Theme | next-themes |

---

## Folder Structure

```
src/
├── app/
│   ├── layout.tsx                     ← root layout: Navbar + Footer + FloatingWA + Lenis
│   ├── page.tsx                       ← HOME
│   ├── about/page.tsx
│   ├── products/
│   │   ├── page.tsx                   ← hub/katalog
│   │   ├── food-additive/page.tsx
│   │   ├── feed-additive/page.tsx
│   │   ├── fertilizer/page.tsx
│   │   └── general-chemical/page.tsx
│   ├── industries/page.tsx
│   ├── solutions/page.tsx
│   ├── resources/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   └── contact/page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── FloatingWhatsApp.tsx
│   ├── home/                          ← section components for homepage
│   ├── ui/                            ← shadcn components
│   └── shared/                        ← reusable across pages
│
├── data/
│   ├── products.ts                    ← all product group arrays
│   ├── industries.ts
│   └── faqs.ts
│
└── lib/
    ├── constants.ts                   ← COMPANY config object
    ├── utils.ts                       ← cn() + helpers
    └── whatsapp.ts                    ← WA link generator
```

---

## Global Constants

```ts
// src/lib/constants.ts
export const COMPANY = {
  name: 'PT. Incaf Nutri Solusindo',
  tagline: 'Indonesia Chemical of Agriculture, Food & Feed Speciality',
  email: 'contact@ptincaf.com',
  phone: '(021) 29021873',
  whatsapp: '6208131002831',
  whatsappDisplay: '08131002831',
  address: 'CHR OFFICE Lt. 9 Unit O, Grand Slipi Tower, Jl. Jend. S. Parman Kav 22–24, Jakarta Barat 11480',
  hours: 'Senin–Jumat, 08.00–17.00 WIB',
  stats: [
    { value: '50+', label: 'Produk Tersedia' },
    { value: '17+', label: 'Industri Dilayani' },
    { value: '10+', label: 'Negara Asal Supplier' },
  ],
}
```

## WhatsApp Utility

```ts
// src/lib/whatsapp.ts
import { COMPANY } from './constants'

export const generateWhatsAppLink = (message?: string) => {
  const base = `https://wa.me/${COMPANY.whatsapp}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export const generateWhatsAppFromForm = (data: {
  name: string; company: string; email: string
  phone: string; category: string; product: string; message: string
}) => generateWhatsAppLink(
  `Halo Tim Incaf,\n\nNama: ${data.name}\nPerusahaan: ${data.company}\nEmail: ${data.email}\nNo. HP: ${data.phone}\n\nKebutuhan: ${data.category}\nProduk: ${data.product}\n\nPesan:\n${data.message}`
)
```

## Lenis Setup

```tsx
// src/components/layout/SmoothScrollProvider.tsx
'use client'
import { useEffect } from 'react'
import Lenis from 'lenis'

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2 })
    const raf = (time: number) => { lenis.raf(time); requestAnimationFrame(raf) }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])
  return <>{children}</>
}
```

## Tailwind Config

```ts
// tailwind.config.ts — extend colors
colors: {
  navy:  { DEFAULT: '#1A1F71', dark: '#11154E', light: '#252B8A' },
  green: { DEFAULT: '#4CAF2F', dark: '#3A8C22', light: '#6DC94F' },
  amber: { DEFAULT: '#FFB800' },
  orange:{ DEFAULT: '#FF8C00' },
}
```

## Font Setup

```tsx
// src/app/layout.tsx
import { Plus_Jakarta_Sans } from 'next/font/google'
const font = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-sans' })
```

---

## SEO

Gunakan Next.js `metadata` API per halaman. Target keywords:
- Home: `supplier speciality chemical Indonesia`, `distributor food additive`
- Products: `food additive Indonesia`, `feed additive ternak`, `pupuk speciality`
