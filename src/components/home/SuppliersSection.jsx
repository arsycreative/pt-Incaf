'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/animations'

const SUPPLIERS = [
  {
    name: 'Changsha Zhengli Biological Technology',
    short: 'Zhengli Biological',
    logo: '/images/suplier/Changsa_Zhengli_Biological_Technology.jpeg',
    country: 'China',
  },
  {
    name: 'Fengda Mudanjiang',
    short: 'Fengda',
    logo: '/images/suplier/Fengda_Mudanjiang.jpeg',
    country: 'China',
  },
  {
    name: 'Hubei Xingfa Chemical Group',
    short: 'Xingfa Chemical',
    logo: '/images/suplier/Hubei_Xingfa_Chemical_Group.jpg',
    country: 'China',
  },
  {
    name: 'Tagrow',
    short: 'Tagrow',
    logo: '/images/suplier/tagrow.jpeg',
    country: 'China',
  },
]

export function SuppliersSection() {
  const reduced = useReducedMotion()

  return (
    <section id="suppliers" className="py-20 bg-navy">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-green font-semibold text-xs uppercase tracking-widest mb-3 block"
          >
            Mitra Global
          </motion.span>
          <motion.h2
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={1}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Supplier Terpercaya Kami
          </motion.h2>
          <motion.p
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={2}
            className="text-white/60 max-w-2xl mx-auto text-sm md:text-base"
          >
            Kami bermitra langsung dengan produsen kimia terkemuka dari China untuk
            memastikan kualitas, konsistensi, dan ketersediaan produk terbaik.
          </motion.p>
        </div>

        {/* Logo Grid */}
        <motion.div
          variants={reduced ? {} : stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {SUPPLIERS.map((supplier, i) => (
            <motion.div
              key={supplier.name}
              variants={reduced ? {} : fadeUp}
              custom={i}
              className="group flex flex-col items-center bg-white/5 hover:bg-white/10
                         border border-white/10 hover:border-white/25
                         rounded-2xl p-6 transition-all duration-400 ease-out"
            >
              {/* Logo */}
              <div className="relative w-full h-20 mb-4 grayscale brightness-110 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500">
                <Image
                  src={supplier.logo}
                  alt={`Logo ${supplier.name}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>

              {/* Name */}
              <p className="text-white/70 group-hover:text-white text-xs font-medium text-center leading-snug transition-colors duration-300">
                {supplier.short}
              </p>
              <p className="text-white/30 text-xs text-center mt-0.5">
                {supplier.country}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
