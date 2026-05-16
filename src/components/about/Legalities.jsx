'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { FileText, ArrowRight, CheckCircle2 } from 'lucide-react'
import { fadeUp } from '@/lib/animations'
import { generateWhatsAppLink } from '@/lib/whatsapp'

export function Legalities() {
  const reduced = useReducedMotion()

  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber rounded-full blur-[120px] opacity-10 translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 lg:p-16 text-center max-w-4xl mx-auto shadow-2xl">
          
          <motion.div
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex justify-center mb-6"
          >
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
              <FileText className="w-8 h-8 text-green-light" />
            </div>
          </motion.div>

          <motion.h2
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={1}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Legalitas & Standar Operasional
          </motion.h2>
          
          <motion.p
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={2}
            className="text-white/70 text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            PT. Incaf Nutri Solusindo beroperasi dengan kepatuhan penuh terhadap 
            peraturan perizinan usaha di Indonesia. Kami menjamin setiap produk yang 
            kami salurkan legal, bersertifikasi mutu, dan aman untuk digunakan.
          </motion.p>

          <motion.div
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={3}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-12 text-white/90"
          >
            <span className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="w-5 h-5 text-green-light" /> NIB Terdaftar
            </span>
            <span className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="w-5 h-5 text-green-light" /> Izin Edar Lengkap
            </span>
            <span className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="w-5 h-5 text-green-light" /> Produk Tersertifikasi
            </span>
          </motion.div>

          <motion.div
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={4}
          >
            <a
              href={generateWhatsAppLink("Halo, saya ingin menjadwalkan diskusi mengenai kebutuhan bahan baku perusahaan saya.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber to-orange hover:from-amber/90 hover:to-orange/90 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-lg"
            >
              Jadwalkan Diskusi Bersama Kami
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
