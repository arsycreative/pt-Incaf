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
    <section className="relative pt-40 pb-32 md:pt-52 md:pb-40 overflow-hidden">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {/* Reduced opacity overlay so photo shows through */}
        <div className="absolute inset-0 bg-navy-dark/70" />
        {/* Brand color gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy-dark/40 to-transparent" />
        
        {/* Dot pattern texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
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

          {/* Title with green left accent bar */}
          <div className="flex items-start gap-5">
            <motion.div
              variants={reduced ? {} : fadeUp}
              initial="hidden"
              animate="show"
              className="hidden md:block w-1 self-stretch rounded-full bg-gradient-to-b from-green to-green-dark shrink-0 mt-2"
            />
            <div>
              <motion.h1 
                variants={reduced ? {} : fadeUp}
                initial="hidden"
                animate="show"
                custom={1}
                className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight"
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
                  className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl"
                >
                  {subtitle}
                </motion.p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
