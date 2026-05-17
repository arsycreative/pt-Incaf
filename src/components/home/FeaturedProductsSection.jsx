'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'
import { fadeUp, stagger } from '@/lib/animations'
import { generateWhatsAppLink } from '@/lib/whatsapp'
import { FEATURED_PRODUCTS } from '@/data/products'

export function FeaturedProductsSection() {
  const reduced = useReducedMotion()

  return (
    <section id="featured-products" className="py-20 bg-gray-50">
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
            Produk Unggulan
          </motion.span>
          <motion.h2
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={1}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Highlight Produk
          </motion.h2>
          <motion.p
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={2}
            className="text-gray-500 max-w-2xl mx-auto"
          >
            Produk fertilizer speciality pilihan kami — tersedia dalam spesifikasi
            teknis premium untuk mendukung kebutuhan agroindustri Anda.
          </motion.p>
        </div>

        {/* Product Cards Grid — 2 cols on sm, 3 cols on lg */}
        <motion.div
          variants={reduced ? {} : stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {FEATURED_PRODUCTS.map((product, i) => (
            <motion.div
              key={product.name}
              variants={reduced ? {} : fadeUp}
              custom={i}
              className="bg-white rounded-2xl shadow-sm border border-gray-100
                         hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 ease-out group overflow-hidden flex flex-col"
            >
              {/* Product Image */}
              <Link href={product.href} className="relative block h-52 bg-white overflow-hidden border-b border-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-5 group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Category badge */}
                <span
                  className={`absolute top-3 right-3 ${product.categoryColor} text-white text-xs font-medium uppercase tracking-wide px-2.5 py-1 rounded-full shadow z-10`}
                >
                  {product.category}
                </span>
              </Link>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-1">
                {/* Origin */}
                <div className="flex items-center gap-1 text-gray-400 text-xs mb-2">
                  <MapPin className="w-3 h-3 shrink-0" />
                  <span>{product.origin}</span>
                </div>

                {/* Name */}
                <h3 className="font-bold text-base text-gray-900 mb-2 group-hover:text-navy transition-colors duration-300 leading-snug">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed flex-1 line-clamp-3">
                  {product.description}
                </p>

                {/* WhatsApp CTA */}
                <a
                  href={generateWhatsAppLink(`Halo, saya tertarik dengan produk ${product.name}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy mt-4
                             group-hover:text-amber transition-colors duration-500"
                >
                  Minta Penawaran
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-500 ease-out" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
