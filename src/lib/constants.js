export const COMPANY = {
  name: 'PT. Incaf Nutri Solusindo',
  tagline: 'Indonesia Chemical of Agriculture, Food & Feed Speciality',
  email: 'contact@ptincaf.com',
  email2: 'sales@ptincaf.com',
  phone: '(021) 29021873',
  whatsapp: '6208131002831',
  whatsappDisplay: '08131002831',
  whatsapp2: '6281575101093',
  whatsappDisplay2: '081575101093',
  address:
    'CHR OFFICE Lt. 9 Unit O, Grand Slipi Tower, Jl. Jend. S. Parman Kav 22–24, Jakarta Barat 11480',
  hours: 'Senin–Jumat, 08.00–17.00 WIB',
  stats: [
    { value: '50+', label: 'Produk Tersedia' },
    { value: '17+', label: 'Industri Dilayani' },
    { value: '10+', label: 'Negara Asal Supplier' },
  ],
}

export const NAV_ITEMS = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang Kami', href: '/about' },
  {
    label: 'Produk',
    href: '/products',
    dropdown: [
      { label: 'Food Additive', href: '/products/food-additive' },
      { label: 'Feed Additive', href: '/products/feed-additive' },
      { label: 'Fertilizer Speciality', href: '/products/fertilizer' },
      { label: 'General Chemical', href: '/products/general-chemical' },
    ],
  },
  { label: 'Industri', href: '/industries' },
  { label: 'Solusi', href: '/solutions' },
  { label: 'Resources', href: '/resources' },
  { label: 'Hubungi Kami', href: '/contact' },
]
