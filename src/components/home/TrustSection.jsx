'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useReducedMotion, useInView } from 'framer-motion'
import { Package, Building2, Globe, ShieldCheck, Truck, Award } from 'lucide-react'
import { fadeUp, stagger } from '@/lib/animations'

const stats = [
  { value: 50, suffix: '+', label: 'Produk Tersedia', icon: Package },
  { value: 17, suffix: '+', label: 'Industri Dilayani', icon: Building2 },
  { value: 10, suffix: '+', label: 'Negara Asal Supplier', icon: Globe },
]

const trustPillars = [
  { icon: ShieldCheck, label: 'Sertifikasi Global', desc: 'Produk terverifikasi standar internasional' },
  { icon: Truck, label: 'Pengiriman Nasional', desc: 'Distribusi ke seluruh wilayah Indonesia' },
  { icon: Award, label: 'Jaminan Kualitas', desc: 'QC ketat di setiap batch pengiriman' },
]

function AnimatedCounter({ target, suffix, inView }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let current = 0
    const increment = Math.ceil(target / 40)
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(current)
      }
    }, 30)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span>
      {count}{suffix}
    </span>
  )
}

export function TrustSection() {
  const reduced = useReducedMotion()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="trust" className="relative py-24 overflow-hidden bg-white" ref={ref}>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-green font-semibold text-xs uppercase tracking-widest mb-3 block"
          >
            Kepercayaan
          </motion.span>
          <motion.h2
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={1}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Dipercaya oleh Pelaku Industri
          </motion.h2>
          <motion.p
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={2}
            className="text-gray-500 max-w-2xl mx-auto text-lg"
          >
            Angka-angka yang mencerminkan komitmen kami dalam menyediakan solusi
            speciality chemical terbaik untuk industri Indonesia.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                variants={reduced ? {} : fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="bg-white border border-gray-100 shadow-sm rounded-2xl p-8 text-center group hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-xl bg-navy/5 flex items-center justify-center mx-auto mb-5
                                group-hover:bg-green group-hover:scale-110 transition-all duration-500">
                  <Icon className="w-7 h-7 text-navy/60 group-hover:text-white transition-colors duration-500" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-navy mb-2">
                  {reduced ? (
                    <span>{stat.value}{stat.suffix}</span>
                  ) : (
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} inView={inView} />
                  )}
                </div>
                <div className="w-10 h-0.5 bg-gradient-to-r from-amber to-orange mx-auto mb-3 rounded-full" />
                <div className="text-gray-400 text-sm font-medium uppercase tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Trust Pillars */}
        <motion.div
          variants={reduced ? {} : stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {trustPillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.label}
                variants={reduced ? {} : fadeUp}
                custom={i}
                className="flex items-center gap-4 bg-gray-50 border border-gray-100 rounded-2xl px-6 py-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-green/10 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-green" />
                </div>
                <div>
                  <div className="text-gray-900 font-semibold text-sm">{pillar.label}</div>
                  <div className="text-gray-400 text-xs mt-0.5">{pillar.desc}</div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
