'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ShieldCheck, Truck, Users, MessageSquare, Handshake } from 'lucide-react'
import { fadeUp, stagger } from '@/lib/animations'

const advantages = [
  {
    icon: ShieldCheck,
    title: 'Produk Berkualitas',
    description: 'Bahan baku bersumber dari supplier global terverifikasi dengan standar mutu yang ketat dan konsisten.',
  },
  {
    icon: Truck,
    title: 'Distribusi Handal',
    description: 'Jaringan logistik yang luas menjamin pengiriman tepat waktu dan aman ke seluruh pelosok Indonesia.',
  },
  {
    icon: Users,
    title: 'Tim Berpengalaman',
    description: 'Didukung oleh para ahli yang memiliki pemahaman mendalam di industri speciality chemical.',
  },
  {
    icon: MessageSquare,
    title: 'Responsif & Solutif',
    description: 'Kami selalu siap sedia memberikan konsultasi dan dukungan teknis untuk menjawab kendala produksi Anda.',
  },
  {
    icon: Handshake,
    title: 'Komitmen Jangka Panjang',
    description: 'Kami membangun hubungan bisnis yang didasari pada kepercayaan, transparansi, dan integritas tinggi.',
  },
]

export function WhyChooseUs() {
  const reduced = useReducedMotion()

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-green font-semibold text-xs uppercase tracking-widest mb-2 block"
          >
            Nilai Tambah Kami
          </motion.span>
          <motion.h2
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={1}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Mengapa Memilih Incaf?
          </motion.h2>
          <motion.p
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={2}
            className="text-gray-500 max-w-2xl mx-auto text-lg"
          >
            Lebih dari sekadar pemasok, inilah alasan mengapa kami dipercaya sebagai 
            mitra utama bagi ratusan perusahaan manufaktur.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          variants={reduced ? {} : stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {advantages.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                variants={reduced ? {} : fadeUp}
                custom={i}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:bg-white hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 ease-out group"
              >
                <div className="w-14 h-14 rounded-xl bg-navy/10 flex items-center justify-center mb-6 group-hover:bg-navy group-hover:scale-110 transition-all duration-500 ease-out">
                  <Icon className="w-7 h-7 text-navy group-hover:text-white transition-colors duration-500 ease-out" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
