'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/animations'

const steps = [
  {
    step: '01',
    eyebrow: 'Sumber Global',
    title: 'Seleksi & Importasi Produk',
    description:
      'Kami bermitra dengan lebih dari 10 supplier global terpercaya — dari China, India, Eropa, hingga Korea — untuk mendapatkan bahan kimia dengan spesifikasi terbaik dan harga yang kompetitif.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070',
    alt: 'Proses importasi dan seleksi produk chemical dari supplier global',
  },
  {
    step: '02',
    eyebrow: 'Jaminan Mutu',
    title: 'Verifikasi & Quality Control',
    description:
      'Setiap batch yang masuk melewati proses verifikasi ketat: pengecekan Certificate of Analysis, uji fisik, dan konfirmasi kesesuaian spesifikasi teknis sebelum diteruskan ke pelanggan.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070',
    alt: 'Verifikasi kualitas produk di laboratorium',
  },
  {
    step: '03',
    eyebrow: 'Distribusi Nasional',
    title: 'Pengiriman ke Seluruh Indonesia',
    description:
      'Jaringan logistik kami memastikan produk tiba tepat waktu ke mana pun di Indonesia. Disertai after-sales support teknis yang responsif dan konsultasi formulasi lanjutan.',
    image: '/images/distribution-logistics.png',
    alt: 'Distribusi dan pengiriman chemical ke seluruh Indonesia',
  },
]

export function ProcessSection() {
  const reduced = useReducedMotion()

  return (
    <section id="process" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-green font-semibold text-xs uppercase tracking-widest mb-3 block"
          >
            Cara Kami Bekerja
          </motion.span>
          <motion.h2
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={1}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Dari Global ke Industri Anda
          </motion.h2>
          <motion.p
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={2}
            className="text-gray-500 max-w-2xl mx-auto"
          >
            Proses terstandarisasi dari hulu ke hilir — memastikan setiap produk
            yang sampai ke tangan Anda memenuhi standar kualitas tertinggi.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <motion.div
          variants={reduced ? {} : stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              variants={reduced ? {} : fadeUp}
              custom={i}
              className="group"
            >
              {/* Photo Card */}
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 shadow-md hover:shadow-xl transition-shadow duration-500">
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                  unoptimized
                />
                {/* Step Number Badge */}
                <div className="absolute top-4 left-4 bg-amber text-navy font-bold text-sm px-3 py-1.5 rounded-full shadow-lg">
                  {step.step}
                </div>
              </div>

              {/* Text Content */}
              <div className="px-1">
                <span className="text-green font-semibold text-xs uppercase tracking-widest mb-2 block">
                  {step.eyebrow}
                </span>
                <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-navy transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Connector line between steps (desktop only) */}
        <div className="hidden md:flex items-center justify-center mt-12 gap-0">
          <div className="flex items-center gap-3 text-gray-300">
            <div className="w-3 h-3 rounded-full bg-amber" />
            <div className="h-px w-32 lg:w-48 bg-gradient-to-r from-amber to-green" />
            <div className="w-3 h-3 rounded-full bg-green" />
            <div className="h-px w-32 lg:w-48 bg-gradient-to-r from-green to-navy" />
            <div className="w-3 h-3 rounded-full bg-navy" />
          </div>
        </div>
      </div>
    </section>
  )
}
