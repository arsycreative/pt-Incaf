'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useReducedMotion, useInView } from 'framer-motion'
import { Package, Building2, Globe } from 'lucide-react'
import { fadeUp } from '@/lib/animations'

const stats = [
  { value: 50, suffix: '+', label: 'Produk Tersedia', icon: Package },
  { value: 17, suffix: '+', label: 'Industri Dilayani', icon: Building2 },
  { value: 10, suffix: '+', label: 'Negara Asal Supplier', icon: Globe },
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
    <section id="trust" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <motion.span
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-green font-semibold text-xs uppercase tracking-widest mb-2 block"
          >
            Kepercayaan
          </motion.span>
          <motion.h2
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={1}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Dipercaya oleh Pelaku Industri
          </motion.h2>
          <motion.p
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={2}
            className="text-gray-500 max-w-2xl mx-auto"
          >
            Angka-angka yang mencerminkan komitmen kami dalam menyediakan solusi
            speciality chemical terbaik untuk industri Indonesia.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
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
                className="text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-navy/10 flex items-center justify-center mx-auto mb-4
                                group-hover:bg-navy group-hover:scale-105 transition-all duration-300">
                  <Icon className="w-7 h-7 text-navy group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-navy mb-2">
                  {reduced ? (
                    <span>{stat.value}{stat.suffix}</span>
                  ) : (
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} inView={inView} />
                  )}
                </div>
                <div className="text-gray-500 text-sm font-medium uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
