'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { generateWhatsAppLink } from '@/lib/whatsapp'
import { fadeUp, fadeIn } from '@/lib/animations'
import { COMPANY } from '@/lib/constants'

export function HeroSection() {
  const reduced = useReducedMotion()

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070"
          alt="Modern chemical laboratory representing PT Incaf speciality chemical solutions"
          fill
          className="object-cover"
          sizes="100vw"
          preload
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/90 via-navy/80 to-navy-dark/70" />
        {/* Bottom fade for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-24 pb-20 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            variants={reduced ? {} : fadeIn}
            initial="hidden"
            animate="show"
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 text-green font-semibold text-xs uppercase tracking-widest bg-green/10 px-4 py-1.5 rounded-full border border-green/20">
              <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
              Terpercaya di industri speciality chemical
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Solusi{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber to-orange">
              Speciality Chemical
            </span>{' '}
            Terpercaya untuk Industri Indonesia
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl"
          >
            Importir & distributor food additive, feed additive, fertilizer, dan
            general chemical berkualitas untuk mendukung pertumbuhan bisnis Anda.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/products"
              className="bg-gradient-to-r from-amber to-orange hover:from-amber/90 hover:to-orange/90
                         text-white font-semibold px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl
                         hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 text-base"
            >
              Jelajahi Produk Kami
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={generateWhatsAppLink('Halo, saya ingin konsultasi mengenai produk speciality chemical.')}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 text-white hover:bg-white/10
                         font-semibold px-8 py-3.5 rounded-full transition-all duration-300
                         flex items-center justify-center gap-2 text-base"
            >
              <FaWhatsapp className="w-5 h-5" />
              Konsultasi Gratis
            </a>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          variants={reduced ? {} : fadeUp}
          initial="hidden"
          animate="show"
          custom={5}
          className="mt-16 md:mt-24 grid grid-cols-3 gap-6 max-w-lg"
        >
          {COMPANY.stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-white/50 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
