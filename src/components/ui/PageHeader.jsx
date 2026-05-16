'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { fadeUp } from '@/lib/animations'

export function PageHeader({ 
  title, 
  subtitle, 
  breadcrumbCurrent, 
  imageSrc = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070" 
}) {
  const reduced = useReducedMotion()

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-navy-dark/85" />
        {/* Brand color subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl">
          {/* Breadcrumbs */}
          <motion.nav 
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            animate="show"
            className="flex items-center gap-2 text-sm text-white/60 mb-6"
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">{breadcrumbCurrent}</span>
          </motion.nav>

          {/* Title */}
          <motion.h1 
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          {subtitle && (
            <motion.p 
              variants={reduced ? {} : fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="text-lg text-white/70 leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  )
}
