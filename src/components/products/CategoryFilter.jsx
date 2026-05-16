'use client'

import { PRODUCT_CATEGORIES } from '@/data/products'

export function CategoryFilter({ currentFilter, setFilter }) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap">
      <button
        onClick={() => setFilter('all')}
        className={`shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
          currentFilter === 'all'
            ? 'bg-navy text-white border-navy shadow-md'
            : 'bg-white text-gray-600 border-gray-200 hover:border-navy hover:text-navy'
        }`}
      >
        Semua Produk
      </button>

      {PRODUCT_CATEGORIES.map((cat) => (
        <button
          key={cat.id}
          onClick={() => setFilter(cat.id)}
          className={`shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
            currentFilter === cat.id
              ? `${cat.solidColor} text-white border-transparent shadow-md`
              : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
          }`}
        >
          {cat.title}
        </button>
      ))}
    </div>
  )
}
