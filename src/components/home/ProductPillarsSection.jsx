'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { fadeUp, stagger } from '@/lib/animations'
import { PRODUCT_CATEGORIES } from '@/data/products'

export function ProductPillarsSection() {
  const reduced = useReducedMotion()

  return (
    <section id="product-pillars" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
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
                <Link href={cat.href} className="group relative block overflow-hidden rounded-3xl h-[450px]">
                  <Image
                    src={cat.image || '/images/placeholder.jpg'}
                    alt={cat.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-end">
                    <div className={`w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 text-white`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-xl text-white mb-2">
                      {cat.title}
                    </h3>
                    <p className="text-gray-200 text-sm leading-relaxed mb-4 opacity-80 line-clamp-2">
                      {cat.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:gap-3 transition-all duration-300">
                      Pelajari lebih lanjut
                      <ArrowRight className="w-4 h-4" />
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
