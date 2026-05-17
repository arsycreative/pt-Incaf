'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { CheckCircle2, Target, Eye } from 'lucide-react'
import { fadeUp, stagger } from '@/lib/animations'

const missions = [
  "Menyediakan produk speciality chemical berkualitas tinggi dari pemasok global terpercaya.",
  "Memberikan pelayanan profesional, responsif, dan solusi teknis terbaik bagi setiap klien.",
  "Menjalin hubungan bisnis jangka panjang yang saling menguntungkan dan berkelanjutan.",
  "Mendukung pertumbuhan dan daya saing industri nasional melalui produk yang inovatif dan aman."
]

export function VisionMission() {
  const reduced = useReducedMotion()

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Vision Column */}
          <motion.div
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-amber/20 flex items-center justify-center">
                <Eye className="w-6 h-6 text-amber" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Visi Kami</h2>
            </div>
            
            <p className="text-2xl md:text-3xl font-semibold text-navy leading-snug">
              &ldquo;Menjadi perusahaan importir dan distributor speciality chemical paling terpercaya
              dan solutif di Indonesia.&rdquo;
            </p>
          </motion.div>

          {/* Mission Column */}
          <motion.div
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={1}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-green/20 flex items-center justify-center">
                <Target className="w-6 h-6 text-green-dark" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Misi Kami</h2>
            </div>

            <motion.ul 
              variants={reduced ? {} : stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-5"
            >
              {missions.map((mission, idx) => (
                <motion.li 
                  key={idx}
                  variants={reduced ? {} : fadeUp}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2 className="w-6 h-6 text-green shrink-0 mt-0.5" />
                  <span className="text-gray-700 leading-relaxed text-lg">
                    {mission}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
