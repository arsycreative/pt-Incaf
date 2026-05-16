'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { COMPANY, NAV_ITEMS } from '@/lib/constants'
import { generateWhatsAppLink } from '@/lib/whatsapp'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const pathname = usePathname()

  // Determine if the current page has a white background at the very top
  const isLightPage = pathname?.startsWith('/resources/') && pathname !== '/resources'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-premium'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div
            className={cn(
              'flex items-center gap-2 transition-all duration-300',
              scrolled ? 'opacity-100' : 'opacity-90 hover:opacity-100'
            )}
          >
            <div className="relative w-32 h-10 sm:w-40 sm:h-12">
              <Image
                src="/images/logo-Incaf-transparant.png"
                alt="PT. Incaf Nutri Solusindo Logo"
                fill
                className={cn(
                  "object-contain object-left transition-all duration-300",
                  (!scrolled && !isLightPage) && "filter brightness-0 invert opacity-90"
                )}
                sizes="(max-width: 640px) 128px, 160px"
                priority
              />
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.dropdown && setDropdownOpen(true)}
              onMouseLeave={() => item.dropdown && setDropdownOpen(false)}
            >
              <Link
                href={item.href}
                className={cn(
                  'px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center gap-1',
                  (scrolled || isLightPage)
                    ? 'text-gray-700 hover:text-navy hover:bg-navy/5'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                )}
              >
                {item.label}
                {item.dropdown && <ChevronDown className="w-3.5 h-3.5" />}
              </Link>

              {/* Dropdown */}
              {item.dropdown && (
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden"
                    >
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-navy/5 hover:text-navy transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green hover:bg-green-dark text-white font-semibold px-5 py-2 rounded-full
                       flex items-center gap-2 shadow-lg transition-all duration-300 text-sm
                       hover:-translate-y-0.5 hover:shadow-xl"
          >
            <FaWhatsapp className="w-4 h-4" />
            Hubungi Kami
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={cn(
            'lg:hidden p-2 rounded-lg transition-colors',
            (scrolled || isLightPage) ? 'text-navy' : 'text-white'
          )}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-gray-700 hover:text-navy hover:bg-navy/5 rounded-lg font-medium transition-colors"
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <div className="pl-6 space-y-1">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-500 hover:text-navy hover:bg-navy/5 rounded-lg transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 border-t border-gray-100">
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green hover:bg-green-dark
                             text-white font-semibold px-5 py-3 rounded-full shadow-lg transition-all duration-300"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Hubungi Kami via WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
