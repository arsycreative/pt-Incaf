'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ShieldCheck, Truck, Users, Settings } from 'lucide-react'
import { fadeUp, stagger } from '@/lib/animations'

const advantages = [
  {
    icon: ShieldCheck,
    title: 'Produk Berkualitas',
    description: 'Sourced dari supplier global terpercaya dengan standar kualitas terverifikasi dan konsisten.',
  },
  {
    icon: Truck,
    title: 'Distribusi Cepat',
    description: 'Jaringan logistik luas & pengiriman tepat waktu ke seluruh Indonesia.',
  },
  {
    icon: Users,
    title: 'Tim Berpengalaman',
    description: 'Expertise mendalam di bidang speciality chemical dengan dukungan teknis profesional.',
  },
  {
    icon: Settings,
    title: 'Solusi Custom',
    description: 'Rekomendasi produk yang disesuaikan dengan kebutuhan spesifik industri Anda.',
  },
]

export function AdvantagesSection() {
  const reduced = useReducedMotion()

  return (
    <section id="advantages" className="py-20 bg-gradient-to-br from-navy-dark to-navy relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.span
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-green-light font-semibold text-xs uppercase tracking-widest mb-2 block"
          >
            Keunggulan
          </motion.span>
          <motion.h2
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={1}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Mengapa Memilih Incaf?
          </motion.h2>
          <motion.p
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={2}
            className="text-white/50 max-w-2xl mx-auto"
          >
            Empat alasan utama mengapa pelaku industri mempercayakan kebutuhan
            speciality chemical mereka kepada kami.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={reduced ? {} : stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {advantages.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                variants={reduced ? {} : fadeUp}
                custom={i}
                className="rounded-2xl p-6 border border-white/10 bg-white/5
                           hover:bg-white/10 hover:shadow-2xl hover:shadow-green/10 hover:-translate-y-1 transition-all duration-500 ease-out backdrop-blur-sm group"
              >
                <div className="w-12 h-12 rounded-xl bg-green/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-green/30 transition-all duration-500 ease-out">
                  <Icon className="w-6 h-6 text-green-light" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
