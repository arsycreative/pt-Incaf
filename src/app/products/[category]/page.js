import { notFound } from 'next/navigation'
import { PageHeader } from '@/components/ui/PageHeader'
import { ProductCard } from '@/components/products/ProductCard'
import { ALL_PRODUCTS, PRODUCT_CATEGORIES, CATEGORY_METADATA } from '@/data/products'

// Generate static params for the 4 pillars
export function generateStaticParams() {
  return PRODUCT_CATEGORIES.map((cat) => ({
    category: cat.id,
  }))
}

// Generate dynamic metadata
export async function generateMetadata({ params }) {
  const resolvedParams = await params
  const meta = CATEGORY_METADATA[resolvedParams.category]
  if (!meta) return { title: 'Kategori Tidak Ditemukan' }
  return {
    title: `${meta.title} — PT. Incaf Nutri Solusindo`,
    description: meta.intro,
  }
}

export default async function CategoryPage({ params }) {
  const resolvedParams = await params
  const { category } = resolvedParams
  const meta = CATEGORY_METADATA[category]
  
  if (!meta) notFound()

  // Get products for this category
  const categoryProducts = ALL_PRODUCTS.filter(p => p.categoryId === category)
  
  // Group products by their sub-group
  const groupedProducts = categoryProducts.reduce((acc, product) => {
    if (!acc[product.group]) {
      acc[product.group] = []
    }
    acc[product.group].push(product)
    return acc
  }, {})

  return (
    <>
      <PageHeader 
        title={meta.title}
        subtitle={meta.tagline}
        breadcrumbCurrent={meta.title}
        imageSrc={meta.headerImage}
      />

      {/* Category Intro */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            {meta.intro}
          </p>
          <div className="inline-block bg-gray-50 border border-gray-100 rounded-xl px-6 py-3">
            <span className="text-sm text-gray-500 block mb-1 uppercase tracking-wider font-semibold">Industri yang Dilayani</span>
            <span className="text-gray-900 font-medium">{meta.industries}</span>
          </div>
        </div>
      </section>

      {/* Grouped Product Lists */}
      <section className="py-20 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-20">
          
          {Object.entries(groupedProducts).map(([groupName, products]) => (
            <div key={groupName}>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 border-l-4 border-navy pl-4">
                {groupName}
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          ))}

        </div>
      </section>
    </>
  )
}
