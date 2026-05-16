import { Plus_Jakarta_Sans } from 'next/font/google'
import { SmoothScrollProvider } from '@/components/layout/SmoothScrollProvider'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp'
import './globals.css'

const font = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata = {
  title: 'PT. Incaf Nutri Solusindo — Supplier Speciality Chemical Indonesia',
  description:
    'Importir & distributor speciality chemical terpercaya untuk industri F&B, peternakan, pertanian, dan manufaktur di Indonesia. Food additive, feed additive, fertilizer, dan general chemical.',
  keywords: [
    'supplier speciality chemical Indonesia',
    'distributor food additive',
    'feed additive Indonesia',
    'pupuk speciality',
    'bahan kimia pertanian',
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${font.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
