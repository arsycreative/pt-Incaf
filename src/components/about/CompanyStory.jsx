'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp } from '@/lib/animations'

export function CompanyStory() {
  const reduced = useReducedMotion()

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Column */}
          <motion.div
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <span className="text-green font-semibold text-xs uppercase tracking-widest mb-4 block">
              Siapakah Kami?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Membangun Kepercayaan Melalui Kualitas dan Konsistensi
            </h2>
            
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>
                Berawal dari dedikasi untuk mendukung pertumbuhan industri nasional, 
                <strong className="text-gray-900 font-semibold"> PT. Incaf Nutri Solusindo </strong> 
                hadir sebagai perusahaan importir dan distributor speciality chemical terpercaya di Indonesia. 
                Kami menjembatani kebutuhan produsen lokal dengan inovasi dan bahan baku berkualitas dari seluruh dunia.
              </p>
              <p>
                Fokus utama kami terbagi dalam empat pilar strategis: <em>Food Additive, Feed Additive, 
                Fertilizer Speciality,</em> dan <em>General Chemical</em>. Dengan jaringan pemasok yang membentang 
                di lebih dari 10 negara, kami memastikan setiap produk yang kami salurkan telah melewati 
                standar verifikasi industri yang ketat.
              </p>
              <p>
                Bagi kami, kesuksesan tidak hanya diukur dari angka penjualan, melainkan dari seberapa besar 
                kontribusi kami terhadap efisiensi dan peningkatan kualitas produk mitra bisnis kami. 
                Kami berkomitmen untuk tidak sekadar menjadi pemasok, melainkan menjadi mitra strategis 
                jangka panjang yang dapat selalu diandalkan.
              </p>
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={1}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070"
                alt="Kantor profesional PT Incaf Nutri Solusindo"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Decorative accent */}
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/20 to-transparent mix-blend-multiply" />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green to-green-dark">
                  10+
                </div>
                <div className="text-sm font-medium text-gray-600 leading-tight">
                  Tahun<br/>Pengalaman
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
