'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'
import { fadeUp, stagger } from '@/lib/animations'
import { generateWhatsAppLink } from '@/lib/whatsapp'
import { FEATURED_PRODUCTS } from '@/data/products'

export function FeaturedProductsSection() {
  const reduced = useReducedMotion()

  return (
    <section id="featured-products" className="py-20 bg-white">
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
            Beberapa produk unggulan kami dari berbagai kategori yang paling
            diminati oleh pelaku industri di Indonesia.
          </motion.p>
        </div>

        {/* Product Cards Grid */}
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
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100
                         hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 ease-out group"
            >
              {/* Category Badge */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`${product.categoryColor} text-white text-xs font-medium uppercase tracking-wide px-3 py-1 rounded-full`}
                >
                  {product.category}
                </span>
                <span className="flex items-center gap-1 text-gray-400 text-xs">
                  <MapPin className="w-3 h-3" />
                  {product.origin}
                </span>
              </div>

              {/* Product Info */}
              <h3 className="font-bold text-lg text-gray-900 mb-1 group-hover:text-navy transition-colors">
                {product.name}
              </h3>
              {product.brand && (
                <p className="text-gray-400 text-sm mb-4">{product.brand}</p>
              )}
              {!product.brand && <div className="mb-4" />}

              {/* CTA */}
              <a
                href={generateWhatsAppLink(`Halo, saya tertarik dengan produk ${product.name}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy
                           group-hover:text-amber transition-colors duration-500"
              >
                Minta Penawaran
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-500 ease-out" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
