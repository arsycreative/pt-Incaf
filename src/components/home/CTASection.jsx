'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { generateWhatsAppLink } from '@/lib/whatsapp'
import { fadeUp } from '@/lib/animations'

export function CTASection() {
  const reduced = useReducedMotion()

  return (
    <section id="cta" className="relative py-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber to-orange" />
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Siap Menemukan Solusi yang Tepat untuk Bisnis Anda?
          </motion.h2>

          <motion.p
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={1}
            className="text-white/80 text-lg mb-10 max-w-xl mx-auto"
          >
            Tim kami siap membantu — dari pemilihan produk sampai pengiriman.
            Konsultasi gratis, tanpa komitmen.
          </motion.p>

          <motion.div
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={2}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href={generateWhatsAppLink('Halo, saya ingin diskusi kebutuhan chemical untuk bisnis saya.')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 hover:bg-gray-100
                         font-semibold px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl
                         hover:-translate-y-0.5 transition-all duration-300
                         flex items-center justify-center gap-2 text-base"
            >
              <FaWhatsapp className="w-5 h-5 text-green" />
              Hubungi Tim Kami
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
