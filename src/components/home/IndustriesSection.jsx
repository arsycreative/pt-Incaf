'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/animations'
import { INDUSTRIES } from '@/data/industries'

export function IndustriesSection() {
  const reduced = useReducedMotion()

  return (
    <section id="industries" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.span
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-green font-semibold text-xs uppercase tracking-widest mb-2 block"
          >
            Industri
          </motion.span>
          <motion.h2
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={1}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Industri yang Kami Layani
          </motion.h2>
          <motion.p
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={2}
            className="text-gray-500 max-w-2xl mx-auto"
          >
            Kami memahami bahwa tiap industri punya standar dan kebutuhan
            berbeda. Produk kami dirancang untuk memenuhi spesifikasi teknis di
            berbagai sektor.
          </motion.p>
        </div>

        {/* Industry Chips Grid */}
        <motion.div
          variants={reduced ? {} : stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {INDUSTRIES.map((industry, i) => {
            const Icon = industry.icon
            return (
              <motion.div
                key={industry.name}
                variants={reduced ? {} : fadeUp}
                custom={i}
                className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm
                           hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out group cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-navy/10 flex items-center justify-center mb-3
                                group-hover:bg-navy group-hover:scale-110 transition-all duration-500 ease-out">
                  <Icon className="w-5 h-5 text-navy group-hover:text-white transition-colors duration-500 ease-out" />
                </div>
                <h3 className="font-semibold text-sm text-gray-900 mb-1">
                  {industry.name}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {industry.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
