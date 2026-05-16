# Incaf Website — Design System

Semua keputusan visual mengacu ke dokumen ini. Jangan membuat komponen, warna, atau pola yang tidak ada di sini.

---

## Brand Colors

Diambil dari logo PT. Incaf Nutri Solusindo:

| Token | Hex | Penggunaan |
|---|---|---|
| `navy` | `#1A1F71` | Heading, navbar, dark sections |
| `navy-dark` | `#11154E` | Hover state, gradient start |
| `navy-light` | `#252B8A` | Gradient end |
| `green` | `#4CAF2F` | Eyebrow label, WA button, badge |
| `green-dark` | `#3A8C22` | Green hover state |
| `amber` | `#FFB800` | Accent, logo dot color |
| `orange` | `#FF8C00` | Gradient end, CTA sections |

**Key gradients:**
```css
brand accent  : from-amber-500 to-orange-500      /* CTA button, banner */
dark section  : from-navy-dark to-navy             /* keunggulan, hero overlay */
green accent  : from-green to-green-light          /* highlight elements */
```

---

## Typography

Font: **Plus Jakarta Sans** via `next/font/google`

| Element | Tailwind Class |
|---|---|
| Hero H1 | `text-4xl md:text-5xl lg:text-6xl font-bold` |
| Section H2 | `text-3xl md:text-4xl font-bold` |
| Card H3 | `text-xl font-semibold` |
| Body | `text-base text-gray-600` |
| Eyebrow label | `text-xs font-semibold uppercase tracking-widest text-green` |
| Badge | `text-xs font-medium uppercase tracking-wide` |

---

## Section Header Pattern

**Wajib digunakan di setiap section — konsisten di seluruh halaman:**

```tsx
<div className="text-center mb-12">
  <span className="text-green font-semibold text-xs uppercase tracking-widest mb-2 block">
    Eyebrow Label
  </span>
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
    Section Heading
  </h2>
  <p className="text-gray-500 max-w-2xl mx-auto">
    Supporting description.
  </p>
</div>
```

---

## Layout

```
Container  : max-w-7xl mx-auto px-4 md:px-8
Section Y  : py-20
Card gap   : gap-6
Radius lg  : rounded-2xl   (cards, sections)
Radius md  : rounded-xl    (icon containers, badges)
Grid       : 4 col → 2 col tablet → 1 col mobile
```

---

## Buttons (4 variants — jangan buat yang baru)

```tsx
// 1. Primary — gradient brand
"bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600
 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl
 hover:-translate-y-0.5 transition-all duration-300"

// 2. Secondary — navy outline
"border-2 border-navy text-navy hover:bg-navy hover:text-white
 font-semibold px-6 py-3 rounded-full transition-all duration-300"

// 3. WhatsApp — green
"bg-green hover:bg-green-dark text-white font-semibold px-6 py-3
 rounded-full flex items-center gap-2 shadow-lg transition-all duration-300"

// 4. Ghost — for dark backgrounds
"border border-white/30 text-white hover:bg-white/10
 font-semibold px-6 py-3 rounded-full transition-all duration-300"
```

---

## Card Pattern

```tsx
// Standard card
<div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100
                hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
  {/* Icon container */}
  <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center mb-4">
    <Icon className="w-6 h-6 text-navy" />
  </div>
  <h3 className="font-bold text-lg text-gray-900 mb-2">Title</h3>
  <p className="text-gray-500 text-sm">Description</p>
</div>

// Dark card (for navy sections)
<div className="rounded-2xl p-6 border border-white/10 bg-white/5
                hover:bg-white/10 transition-all duration-300">
  <div className="w-12 h-12 rounded-xl bg-green/20 flex items-center justify-center mb-4">
    <Icon className="w-6 h-6 text-green-light" />
  </div>
  <h3 className="font-bold text-white text-lg mb-2">Title</h3>
  <p className="text-white/60 text-sm">Description</p>
</div>
```

---

## Animation (Framer Motion)

**Satu pola, digunakan konsisten di seluruh project:**

```tsx
// variants — definisikan sekali di lib/animations.ts, import di semua komponen
export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: 'easeOut' }
  })
}

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } }
}

// Usage — selalu pakai viewport once: true
<motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  custom={index}   // untuk delay per item
>

// Grid cards — stagger container
<motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {items.map((item, i) => (
    <motion.div key={i} variants={fadeUp} custom={i}>
      <Card {...item} />
    </motion.div>
  ))}
</motion.div>
```

---

## Navbar

```
Height     : h-16
Logo       : kiri, h-10
Menu items : center atau kanan
CTA button : kanan — WhatsApp green button
Behavior   : transparent + white text di hero → bg-white shadow-md + navy text saat scroll
Mobile     : hamburger → drawer/slide-down menu
Active link: underline atau text-green
```

**Nav items:**
```ts
[
  { label: 'Beranda',      href: '/' },
  { label: 'Tentang Kami', href: '/about' },
  { label: 'Produk',       href: '/products', dropdown: true },
  { label: 'Industri',     href: '/industries' },
  { label: 'Solusi',       href: '/solutions' },
  { label: 'Resources',    href: '/resources' },
  { label: 'Hubungi Kami', href: '/contact' },
]

// Dropdown Produk:
[
  { label: 'Food Additive',        href: '/products/food-additive' },
  { label: 'Feed Additive',        href: '/products/feed-additive' },
  { label: 'Fertilizer Speciality',href: '/products/fertilizer' },
  { label: 'General Chemical',     href: '/products/general-chemical' },
]
```

---

## Footer

```
Background : navy-dark (#11154E)
Text       : white / white/60

4 kolom:
  1. Logo + tagline + sosmed icons
  2. Navigasi utama
  3. Kategori produk (4 links)
  4. Info kontak (email, WA, telepon, alamat)

Bottom bar : Copyright © {year} PT. Incaf Nutri Solusindo | Privacy Policy
```

---

## Floating WhatsApp Button

```tsx
// Muncul di SEMUA halaman, fixed bottom-right
// Delay 2 detik setelah halaman load

<motion.a
  href={generateWhatsAppLink()}
  target="_blank"
  initial={{ scale: 0, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ delay: 2, type: 'spring', stiffness: 200 }}
  className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white
             rounded-full px-4 py-3 shadow-xl flex items-center gap-2 group transition-all"
>
  <FaWhatsapp className="w-6 h-6" />
  <span className="max-w-0 overflow-hidden group-hover:max-w-[100px]
                   transition-all duration-300 text-sm font-semibold whitespace-nowrap">
    Chat Kami
  </span>
</motion.a>
```

---

## Section Background Rhythm

Alternasi background untuk visual hierarchy — jangan dua section berurutan pakai warna sama:

```
Hero          → dark navy
Section 1     → gray-50
Section 2     → white
Section 3     → dark navy (keunggulan/trust)
Section 4     → gray-50
Section 5     → white
CTA Banner    → brand gradient (amber→orange)
```
