import {
  FlaskConical,
  Wheat,
  Sprout,
  Factory,
} from 'lucide-react'

export const PRODUCT_CATEGORIES = [
  {
    id: 'food-additive',
    title: 'Food Additive',
    description: 'Bahan tambahan pangan berkualitas untuk industri F&B',
    href: '/products/food-additive',
    icon: FlaskConical,
    color: 'text-amber-500',
    bgColor: 'bg-amber-500/10',
    solidColor: 'bg-amber-500',
  },
  {
    id: 'feed-additive',
    title: 'Feed Additive',
    description: 'Nutrisi & aditif pakan ternak untuk produktivitas optimal',
    href: '/products/feed-additive',
    icon: Wheat,
    color: 'text-green',
    bgColor: 'bg-green/10',
    solidColor: 'bg-green',
  },
  {
    id: 'fertilizer',
    title: 'Fertilizer Speciality',
    description: 'Pupuk khusus & biostimulan untuk hasil panen terbaik',
    href: '/products/fertilizer',
    icon: Sprout,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
    solidColor: 'bg-emerald-500',
  },
  {
    id: 'general-chemical',
    title: 'General Chemical',
    description: 'Bahan kimia industri dengan standar kualitas tinggi',
    href: '/products/general-chemical',
    icon: Factory,
    color: 'text-navy',
    bgColor: 'bg-navy/10',
    solidColor: 'bg-navy',
  },
]

export const CATEGORY_METADATA = {
  'food-additive': {
    title: 'Food Additive',
    tagline: 'Bahan tambahan pangan terpilih — diuji kualitasnya, aman untuk industri Anda.',
    intro: 'Menyediakan berbagai food additive untuk industri makanan dan minuman — dari pewarna, fosfor, stabilizer, emulsifier, hingga pemanis modern.',
    industries: 'Baked Goods, Beverages, Dairy, Noodles, Seasoning, Confectionery, Meat & Seafood Processing, dll.',
    headerImage: 'https://images.unsplash.com/photo-1576013627993-9c8e8bb335fc?q=80&w=2070',
  },
  'feed-additive': {
    title: 'Feed Additive',
    tagline: 'Nutrisi yang tepat untuk ternak yang sehat dan produktif.',
    intro: 'Solusi nutrisi dan aditif pakan berkualitas tinggi untuk mengoptimalkan kesehatan dan produktivitas di industri peternakan dan akuakultur.',
    industries: 'Poultry, Sapi, Babi, Akuakultur',
    headerImage: 'https://images.unsplash.com/photo-1595805568574-88aa115eb305?q=80&w=2070',
  },
  'fertilizer': {
    title: 'Fertilizer Speciality',
    tagline: 'Pupuk cerdas untuk lahan yang lebih subur dan panen yang lebih melimpah.',
    intro: 'Dari pembenah tanah, macro-micro nutrient, hingga biostimulan — semua diformulasikan khusus untuk mendukung pertanian presisi.',
    industries: 'Pertanian, Perkebunan, Agronomi, Formulator Pupuk',
    headerImage: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070',
  },
  'general-chemical': {
    title: 'General Chemical',
    tagline: 'Bahan kimia industri dengan kualitas terjamin — untuk berbagai kebutuhan produksi Anda.',
    intro: 'Melayani kebutuhan bahan kimia umum untuk industri manufaktur, pengolahan air, agrikultur, dan sektor lainnya dengan standar tinggi.',
    industries: 'Manufaktur, Water Treatment, Pharmacy, Homecare',
    headerImage: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2070',
  }
}

export const FEATURED_PRODUCTS = [
  {
    name: 'Food Colors & Oleoresins',
    brand: 'Indocol Brand',
    category: 'Food Additive',
    origin: 'Indonesia',
    categoryColor: 'bg-amber-500',
  },
  {
    name: 'Phosphates — STPP, SAPP, SHMP',
    brand: null,
    category: 'Food Additive',
    origin: 'China',
    categoryColor: 'bg-amber-500',
  },
  {
    name: 'Sweeteners — Sucralose, Stevia',
    brand: null,
    category: 'Food Additive',
    origin: 'China',
    categoryColor: 'bg-amber-500',
  },
  {
    name: 'DL-Methionine, L-Lysine',
    brand: null,
    category: 'Feed Additive',
    origin: 'China',
    categoryColor: 'bg-green',
  },
  {
    name: 'Amino Acid Powder & Liquid',
    brand: null,
    category: 'Fertilizer',
    origin: 'China',
    categoryColor: 'bg-emerald-500',
  },
  {
    name: 'Sodium / Potassium Humate',
    brand: null,
    category: 'Fertilizer',
    origin: 'China',
    categoryColor: 'bg-emerald-500',
  },
]

export const ALL_PRODUCTS = [
  // --- FOOD ADDITIVE ---
  { id: 'f1', name: 'Synthetic Powder & Lake Colors', categoryId: 'food-additive', group: 'Food Colors & Oleoresins', origin: 'Indonesia', packaging: 'Carton 25kg' },
  { id: 'f2', name: 'Natural Colors', categoryId: 'food-additive', group: 'Food Colors & Oleoresins', origin: 'India', packaging: 'Drum / Jerigen' },
  { id: 'f3', name: 'Capsicum & Paprika Oleoresin', categoryId: 'food-additive', group: 'Food Colors & Oleoresins', origin: 'India', packaging: 'Drum 25kg' },
  { id: 'f4', name: 'Caramel 1500-D', categoryId: 'food-additive', group: 'Food Colors & Oleoresins', origin: 'China', packaging: 'Drum 25kg' },
  
  { id: 'f5', name: 'STPP, SAPP 28 & 40', categoryId: 'food-additive', group: 'Phosphates', origin: 'China', packaging: 'Zak 25kg' },
  { id: 'f6', name: 'SHMP, TSPP, TKPP', categoryId: 'food-additive', group: 'Phosphates', origin: 'China', packaging: 'Zak 25kg' },
  { id: 'f7', name: 'TCP, MCP, DKP', categoryId: 'food-additive', group: 'Phosphates', origin: 'China', packaging: 'Zak 25kg' },
  { id: 'f8', name: 'Compound Phosphates (Meat/Noodle)', categoryId: 'food-additive', group: 'Phosphates', origin: 'China / Thailand', packaging: 'Zak 25kg' },
  
  { id: 'f9', name: 'CMC & Guar Gum', categoryId: 'food-additive', group: 'Thickening Agent & Stabilizer', origin: 'China / India', packaging: 'Zak 25kg' },
  { id: 'f10', name: 'Xanthan Gum', categoryId: 'food-additive', group: 'Thickening Agent & Stabilizer', origin: 'China', packaging: 'Carton 25kg' },
  { id: 'f11', name: 'Locust Bean Gum Replacer', categoryId: 'food-additive', group: 'Thickening Agent & Stabilizer', origin: 'Europe', packaging: 'Zak 25kg' },
  
  { id: 'f12', name: 'Isolated Soy Protein', categoryId: 'food-additive', group: 'Emulsifiers', origin: 'China', packaging: 'Zak 20kg' },
  { id: 'f13', name: 'Soya Lecithin', categoryId: 'food-additive', group: 'Emulsifiers', origin: 'India', packaging: 'Drum 200kg' },
  
  { id: 'f14', name: 'Saccharine & Acesulfame K', categoryId: 'food-additive', group: 'Sweeteners', origin: 'China', packaging: 'Carton 25kg' },
  { id: 'f15', name: 'Aspartame P & Sucralose', categoryId: 'food-additive', group: 'Sweeteners', origin: 'China', packaging: 'Drum 25kg' },
  { id: 'f16', name: 'Stevia & Sorbitol TS 7', categoryId: 'food-additive', group: 'Sweeteners', origin: 'China / Local', packaging: 'Drum / Carton' },
  { id: 'f17', name: 'Liquid Glucose 85', categoryId: 'food-additive', group: 'Sweeteners', origin: 'Local', packaging: 'Drum 300kg' },

  // --- FEED ADDITIVE ---
  { id: 'fe1', name: 'DL-Methionine & L-Lysine HCL', categoryId: 'feed-additive', group: 'Amino Acids', origin: 'China', packaging: 'Zak 25kg' },
  { id: 'fe2', name: 'L-Threonine & L-Carnitine Fumarate', categoryId: 'feed-additive', group: 'Amino Acids', origin: 'China', packaging: 'Zak 25kg' },
  
  { id: 'fe3', name: 'Choline Chloride 60% / 75%', categoryId: 'feed-additive', group: 'Binders & Additives', origin: 'China', packaging: 'Zak 25kg / Liquid' },
  { id: 'fe4', name: 'Calcium Formate & Propionate', categoryId: 'feed-additive', group: 'Binders & Additives', origin: 'China', packaging: 'Zak 25kg' },
  { id: 'fe5', name: 'Sepiolite & Soybean Lecithin', categoryId: 'feed-additive', group: 'Binders & Additives', origin: 'Spain / India', packaging: 'Zak 25kg / Drum' },
  
  { id: 'fe6', name: 'L-Ascorbate Monophosphate 35%', categoryId: 'feed-additive', group: 'Vitamins & Acids', origin: 'China', packaging: 'Carton 25kg' },
  { id: 'fe7', name: 'Nicotinic Acid & Bile Acid', categoryId: 'feed-additive', group: 'Vitamins & Acids', origin: 'China', packaging: 'Drum 25kg' },
  
  { id: 'fe8', name: 'Protease & Xylanase (ex Sunson)', categoryId: 'feed-additive', group: 'Enzymes', origin: 'China', packaging: 'Zak 25kg' },
  
  { id: 'fe9', name: 'Manganese / Zinc Sulphate', categoryId: 'feed-additive', group: 'Minerals', origin: 'China', packaging: 'Zak 25kg' },
  { id: 'fe10', name: 'Ferrous Sulphate & Cobalt Carbonate', categoryId: 'feed-additive', group: 'Minerals', origin: 'China', packaging: 'Zak 25kg' },
  
  { id: 'fe11', name: 'Dicalcium / Monocalcium Phosphate', categoryId: 'feed-additive', group: 'Phosphates', origin: 'China', packaging: 'Zak 25kg' },

  // --- FERTILIZER SPECIALITY ---
  { id: 'fr1', name: 'Sodium Humate 50% / 60% Powder', categoryId: 'fertilizer', group: 'Pembenah Tanah', origin: 'China', packaging: 'Zak 25kg' },
  { id: 'fr2', name: 'Potassium Humate 12%', categoryId: 'fertilizer', group: 'Pembenah Tanah', origin: 'China', packaging: 'Zak 25kg' },
  
  { id: 'fr3', name: 'Monopotassium Phosphate (MKP)', categoryId: 'fertilizer', group: 'Macro & Micro Nutrient', origin: 'China', packaging: 'Zak 25kg' },
  { id: 'fr4', name: 'Silica Powder & Zeolit', categoryId: 'fertilizer', group: 'Macro & Micro Nutrient', origin: 'Local / China', packaging: 'Zak 25kg' },
  { id: 'fr5', name: 'Potassium Carbonate / Hydroxide', categoryId: 'fertilizer', group: 'Macro & Micro Nutrient', origin: 'Korea / China', packaging: 'Zak 25kg' },
  { id: 'fr6', name: 'Potassium Nitrate (KNO3)', categoryId: 'fertilizer', group: 'Macro & Micro Nutrient', origin: 'China', packaging: 'Zak 25kg' },
  { id: 'fr7', name: 'Phosphoric Acid & Borate', categoryId: 'fertilizer', group: 'Macro & Micro Nutrient', origin: 'China / Turkey', packaging: 'Jerigen / Zak' },
  
  { id: 'fr8', name: 'Amino Acid Powder & Liquid', categoryId: 'fertilizer', group: 'Biostimulan', origin: 'China', packaging: 'Zak / IBC' },
  { id: 'fr9', name: 'Fulvic Acid Powder & Seaweed Extract', categoryId: 'fertilizer', group: 'Biostimulan', origin: 'China', packaging: 'Zak 25kg' },

  // --- GENERAL CHEMICAL ---
  { id: 'g1', name: 'Acetic Acid 99.85%', categoryId: 'general-chemical', group: 'Acids', origin: 'Taiwan', packaging: 'Jerigen 30kg' },
  { id: 'g2', name: 'Asam Sulfat & Phosphoric Acid 85%', categoryId: 'general-chemical', group: 'Acids', origin: 'Local / China', packaging: 'Jerigen / IBC' },
  { id: 'g3', name: 'Nitric Acid & HCL', categoryId: 'general-chemical', group: 'Acids', origin: 'Local', packaging: 'Jerigen 30kg' },
  
  { id: 'g4', name: 'Sodium Metabisulphite & Sulphate', categoryId: 'general-chemical', group: 'Sulphates & Sulphites', origin: 'China', packaging: 'Zak 25kg' },
  
  { id: 'g5', name: 'Cal. Hypochlorite 65%/70%', categoryId: 'general-chemical', group: 'Chlorination', origin: 'China', packaging: 'Drum 45kg' },
  { id: 'g6', name: 'TCCA 90% (Powder/Granular/Tablet)', categoryId: 'general-chemical', group: 'Chlorination', origin: 'China', packaging: 'Drum 50kg' },
  
  { id: 'g7', name: 'STPP FG & Trisodium Phosphate', categoryId: 'general-chemical', group: 'Phosphates', origin: 'China', packaging: 'Zak 25kg' },
  
  { id: 'g8', name: 'Caustic Soda 48% & Flakes', categoryId: 'general-chemical', group: 'Alkalis', origin: 'Local / China', packaging: 'IBC / Zak 25kg' },
  
  { id: 'g9', name: 'Aluminium Sulphate & PAC', categoryId: 'general-chemical', group: 'Others', origin: 'Local / China', packaging: 'Zak 25kg' },
  { id: 'g10', name: 'Soda Ash Dense / Light', categoryId: 'general-chemical', group: 'Soda & Carbonates', origin: 'China', packaging: 'Zak 40kg / 50kg' },
  { id: 'g11', name: 'Sodium Bicarbonate', categoryId: 'general-chemical', group: 'Soda & Carbonates', origin: 'China', packaging: 'Zak 25kg' },
]
