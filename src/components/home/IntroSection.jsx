'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { fadeUp } from '@/lib/animations'
import { COMPANY } from '@/lib/constants'

export function IntroSection() {
  const reduced = useReducedMotion()

  return (
    <section id="intro" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          <motion.span
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-green font-semibold text-xs uppercase tracking-widest mb-4 block"
          >
            Tentang Kami
          </motion.span>

          {/* Tagline */}
          <motion.h2
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={1}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            {COMPANY.tagline}
          </motion.h2>

          {/* Description */}
          <motion.div
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={2}
            className="space-y-4 text-gray-600 leading-relaxed mb-8"
          >
            <p>
              <strong className="text-gray-900">{COMPANY.name}</strong> adalah perusahaan
              importir dan distributor speciality chemical yang melayani berbagai
              kebutuhan industri di Indonesia — mulai dari makanan & minuman,
              peternakan, pertanian, hingga manufaktur umum.
            </p>
            <p>
              Dengan jaringan supplier global dari lebih dari 10 negara, kami
              menyediakan produk berkualitas tinggi yang telah terverifikasi dan
              sesuai standar industri. Komitmen kami adalah menjadi mitra bisnis
              jangka panjang yang dapat diandalkan.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={3}
          >
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-navy font-semibold hover:gap-3 transition-all duration-300"
            >
              Pelajari Lebih Lanjut
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
