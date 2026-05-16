'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { PageHeader } from '@/components/ui/PageHeader'
import { CategoryFilter } from '@/components/products/CategoryFilter'
import { ProductCard } from '@/components/products/ProductCard'
import { ALL_PRODUCTS } from '@/data/products'
import { fadeUp, stagger } from '@/lib/animations'

export default function ProductsHub() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProducts = activeFilter === 'all' 
    ? ALL_PRODUCTS 
    : ALL_PRODUCTS.filter(p => p.categoryId === activeFilter)

  return (
    <>
      <PageHeader 
        title="Katalog Produk"
        subtitle="Semua kebutuhan chemical Anda ada di satu tempat — dari food grade sampai bahan industri."
        breadcrumbCurrent="Produk"
        imageSrc="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070"
      />

      <section className="py-20 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {/* Header & Filter */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Semua Produk</h2>
              <p className="text-gray-500">Menampilkan {filteredProducts.length} produk pilihan</p>
            </div>
            <CategoryFilter currentFilter={activeFilter} setFilter={setActiveFilter} />
          </div>

          {/* Product Grid */}
          <motion.div 
            variants={stagger}
            initial="hidden"
            animate="show"
            key={activeFilter} // Re-trigger animation on filter change
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredProducts.map((product, idx) => (
              <motion.div key={product.id} variants={fadeUp} custom={idx}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">Belum ada produk untuk kategori ini.</p>
            </div>
          )}

        </div>
      </section>
    </>
  )
}
