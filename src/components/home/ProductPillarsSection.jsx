'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { fadeUp, stagger } from '@/lib/animations'
import { PRODUCT_CATEGORIES } from '@/data/products'

export function ProductPillarsSection() {
  const reduced = useReducedMotion()

  return (
    <section id="product-pillars" className="py-20 bg-white">
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
            Produk Kami
          </motion.span>
          <motion.h2
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={1}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            4 Pilar Bisnis Kami
          </motion.h2>
          <motion.p
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={2}
            className="text-gray-500 max-w-2xl mx-auto"
          >
            Empat lini produk utama yang kami sediakan untuk memenuhi kebutuhan
            industri Anda secara menyeluruh.
          </motion.p>
        </div>

        {/* Card Grid */}
        <motion.div
          variants={reduced ? {} : stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {PRODUCT_CATEGORIES.map((cat, i) => {
            const Icon = cat.icon
            return (
              <motion.div key={cat.title} variants={reduced ? {} : fadeUp} custom={i}>
                <Link href={cat.href} className="block group">
                  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100
                                  hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 ease-out h-full">
                    <div className={`w-12 h-12 rounded-xl ${cat.bgColor} flex items-center justify-center mb-5`}>
                      <Icon className={`w-6 h-6 ${cat.color}`} />
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-navy transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">
                      {cat.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-navy opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500 ease-out">
                      Lihat Produk
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
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
