import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { COMPANY } from '@/lib/constants'

const footerNav = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang Kami', href: '/about' },
  { label: 'Industri', href: '/industries' },
  { label: 'Solusi', href: '/solutions' },
  { label: 'Resources', href: '/resources' },
  { label: 'Hubungi Kami', href: '/contact' },
]

const footerProducts = [
  { label: 'Food Additive', href: '/products/food-additive' },
  { label: 'Feed Additive', href: '/products/feed-additive' },
  { label: 'Fertilizer Speciality', href: '/products/fertilizer' },
  { label: 'General Chemical', href: '/products/general-chemical' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative w-32 h-10 sm:w-40 sm:h-12">
                <Image
                  src="/images/logo-Incaf-transparant.png"
                  alt="PT. Incaf Nutri Solusindo Logo"
                  fill
                  className="object-contain object-left filter brightness-0 invert"
                  sizes="(max-width: 640px) 128px, 160px"
                />
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              {COMPANY.tagline}
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest text-green mb-4">
              Navigasi
            </h3>
            <ul className="space-y-2.5">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-white text-sm transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest text-green mb-4">
              Produk
            </h3>
            <ul className="space-y-2.5">
              {footerProducts.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-white text-sm transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest text-green mb-4">
              Kontak
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-white/40 mt-0.5 shrink-0" />
                <a href={`mailto:${COMPANY.email}`} className="text-white/60 hover:text-white text-sm transition-colors">
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <FaWhatsapp className="w-4 h-4 text-white/40 mt-0.5 shrink-0" />
                <a
                  href={`https://wa.me/${COMPANY.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  {COMPANY.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-white/40 mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm">{COMPANY.phone}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-white/40 mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm leading-relaxed">{COMPANY.address}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-white/40 mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm">{COMPANY.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 text-center">
          <p className="text-white/40 text-sm">
            © {year} {COMPANY.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
