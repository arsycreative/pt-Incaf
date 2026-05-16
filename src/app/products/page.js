import ProductsClient from './client'

export const metadata = {
  title: 'Katalog Produk — PT. Incaf Nutri Solusindo',
  description: 'Jelajahi katalog lengkap speciality chemical kami. Food additive, feed additive, fertilizer, dan general chemical untuk kebutuhan industri Anda.',
}

export default function ProductsPage() {
  return <ProductsClient />
}
