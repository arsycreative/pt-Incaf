'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { fadeUp, stagger } from '@/lib/animations'
import { PRODUCT_CATEGORIES } from '@/data/products'

export function BusinessPillars() {
  const reduced = useReducedMotion()

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.span
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-green font-semibold text-xs uppercase tracking-widest mb-2 block"
          >
            Fokus Bisnis
          </motion.span>
          <motion.h2
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={1}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            4 Pilar Usaha Kami
          </motion.h2>
          <motion.p
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={2}
            className="text-gray-500 text-lg leading-relaxed"
          >
            Kami mendedikasikan keahlian dan resources kami pada empat bidang utama 
            speciality chemical, memastikan setiap sektor industri mendapatkan 
            bahan baku dengan standar kualitas yang presisi.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={reduced ? {} : stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {PRODUCT_CATEGORIES.map((cat, i) => {
            const Icon = cat.icon
            return (
              <motion.div key={cat.title} variants={reduced ? {} : fadeUp} custom={i}>
                <Link href={cat.href} className="block group h-full">
                  <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col h-full">
                    
                    <div className="flex items-center gap-5 mb-6">
                      <div className={`w-16 h-16 rounded-2xl ${cat.bgColor} flex items-center justify-center shrink-0`}>
                        <Icon className={`w-8 h-8 ${cat.color}`} />
                      </div>
                      <h3 className="font-bold text-2xl text-gray-900 group-hover:text-navy transition-colors">
                        {cat.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 text-lg leading-relaxed mb-8 flex-1">
                      {cat.description}
                    </p>
                    
                    <div className="inline-flex items-center gap-2 text-navy font-semibold mt-auto opacity-80 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500 ease-out">
                      Eksplorasi Kategori
                      <ArrowRight className="w-5 h-5" />
                    </div>

                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
