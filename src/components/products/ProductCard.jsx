import { MapPin, Package, ArrowRight } from 'lucide-react'
import { generateWhatsAppLink } from '@/lib/whatsapp'
import { PRODUCT_CATEGORIES } from '@/data/products'

export function ProductCard({ product }) {
  const category = PRODUCT_CATEGORIES.find((c) => c.id === product.categoryId) || PRODUCT_CATEGORIES[0]
  
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100/50 flex flex-col h-full hover:shadow-premium hover:-translate-y-1.5 transition-all duration-500 ease-out group overflow-hidden">
      
      {/* Top Accent Stripe */}
      <div className={`h-1 w-full ${category.solidColor}`} />
      
      <div className="p-6 flex flex-col flex-1">
        {/* Category & Group Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className={`${category.solidColor} text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full`}>
            {category.title}
          </span>
          <span className="bg-gray-100 text-gray-500 text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full">
            {product.group}
          </span>
        </div>

        {/* Product Name */}
        <h3 className="font-serif font-bold text-xl text-gray-900 mb-4 group-hover:text-navy transition-colors">
          {product.name}
        </h3>

        {/* Meta details */}
        <div className="space-y-2 mb-6 mt-auto">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <MapPin className="w-4 h-4 text-gray-400 shrink-0" />
            <span><span className="text-gray-400">Origin:</span> {product.origin}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Package className="w-4 h-4 text-gray-400 shrink-0" />
            <span><span className="text-gray-400">Kemasan:</span> {product.packaging}</span>
          </div>
        </div>

        {/* CTA */}
        <a
          href={generateWhatsAppLink(`Halo, saya tertarik mendapat penawaran harga untuk produk ${product.name} (${product.packaging}).`)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 bg-navy/5 hover:bg-navy text-navy hover:text-white 
                     font-semibold py-3 rounded-xl transition-all duration-300 group/btn"
        >
          Minta Penawaran
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
    </div>
  )
}
