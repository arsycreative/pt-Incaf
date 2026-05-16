'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, CheckCircle2, FlaskConical, Wheat, Sprout, Factory, MessagesSquare, Search, FileText, ShoppingCart, Truck } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { PageHeader } from '@/components/ui/PageHeader'
import { fadeUp, stagger } from '@/lib/animations'
import { generateWhatsAppLink } from '@/lib/whatsapp'

const problemSolutions = [
  {
    problem: 'Butuh bahan food additive aman & sesuai standar?',
    solution: 'Food grade ingredients terverifikasi global.',
    icon: FlaskConical,
    color: 'text-amber-500',
    bg: 'bg-amber-500/10'
  },
  {
    problem: 'Ternak kurang produktif & mudah sakit?',
    solution: 'Feed additive untuk optimasi nutrisi ternak.',
    icon: Wheat,
    color: 'text-green',
    bg: 'bg-green/10'
  },
  {
    problem: 'Tanah tidak subur atau tanaman rentan stres?',
    solution: 'Biostimulan & pembenah tanah presisi.',
    icon: Sprout,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10'
  },
  {
    problem: 'Butuh bahan kimia industri kualitas stabil?',
    solution: 'General chemical standar industri manufaktur.',
    icon: Factory,
    color: 'text-navy',
    bg: 'bg-navy/10'
  }
]

const steps = [
  {
    title: 'Konsultasi',
    desc: 'Ceritakan kebutuhan spesifik operasional atau formulasi Anda kepada tim ahli kami.',
    icon: MessagesSquare
  },
  {
    title: 'Rekomendasi',
    desc: 'Kami menganalisis dan merekomendasikan produk speciality chemical yang paling sesuai.',
    icon: Search
  },
  {
    title: 'Penawaran',
    desc: 'Kami mengirimkan quotation yang transparan dan kompetitif.',
    icon: FileText
  },
  {
    title: 'Konfirmasi',
    desc: 'Proses pemesanan dan administrasi diselesaikan dengan mudah dan cepat.',
    icon: ShoppingCart
  },
  {
    title: 'Pengiriman & Support',
    desc: 'Produk tiba tepat waktu dengan dukungan after-sales teknis yang berkesinambungan.',
    icon: Truck
  }
]

export default function SolutionsPage() {
  const reduced = useReducedMotion()

  return (
    <>
      <PageHeader 
        title="Lebih dari Supplier — Mitra Solusi Industri Anda"
        subtitle="Kami tidak hanya menyediakan produk, tapi juga membantu menemukan formulasi yang tepat, efisien, dan sesuai standar."
        breadcrumbCurrent="Solusi"
        imageSrc="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=2070"
      />

      {/* Problem -> Solution Section */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              variants={reduced ? {} : fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Solusi Berdasarkan Kebutuhan
            </motion.h2>
            <motion.p 
              variants={reduced ? {} : fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={1}
              className="text-lg text-gray-500 leading-relaxed"
            >
              Sampaikan kendala teknis Anda, dan kami akan merumuskan solusinya.
            </motion.p>
          </div>

          <motion.div 
            variants={reduced ? {} : stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {problemSolutions.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div 
                  key={i} 
                  variants={reduced ? {} : fadeUp} 
                  custom={i}
                  className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 ease-out group"
                >
                  <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ease-out`}>
                    <Icon className={`w-7 h-7 ${item.color}`} />
                  </div>
                  
                  <div className="mb-6">
                    <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider block mb-2">Tantangan:</span>
                    <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                      {item.problem}
                    </h3>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-green shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-semibold text-green uppercase tracking-wider block mb-1">Solusi Incaf:</span>
                      <p className="text-gray-700 font-medium">{item.solution}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.h2 
              variants={reduced ? {} : fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Proses Kerja 5 Langkah
            </motion.h2>
            <motion.p 
              variants={reduced ? {} : fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={1}
              className="text-lg text-gray-500 leading-relaxed"
            >
              Dari kontak pertama hingga produk digunakan, kami memastikan alur yang efisien dan transparan.
            </motion.p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-green/20 via-green to-navy/20" />

            <motion.div 
              variants={reduced ? {} : stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10"
            >
              {steps.map((step, idx) => {
                const Icon = step.icon
                return (
                  <motion.div key={idx} variants={reduced ? {} : fadeUp} custom={idx} className="relative flex flex-col items-center text-center group">
                    
                    {/* Step Number Badge */}
                    <div className="absolute -top-3 -right-2 w-8 h-8 rounded-full bg-navy text-white font-bold flex items-center justify-center border-4 border-white shadow-sm z-20 group-hover:scale-110 transition-transform">
                      {idx + 1}
                    </div>

                    {/* Icon Circle */}
                    <div className="w-24 h-24 rounded-full bg-white shadow-xl border border-gray-100 flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-500 ease-out z-10">
                      <Icon className="w-10 h-10 text-green group-hover:text-green-dark transition-colors" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-[250px]">
                      {step.desc}
                    </p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>

        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber to-orange" />
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10">
          <motion.h2 
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Siap Memulai Kolaborasi?
          </motion.h2>
          <motion.p 
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={1}
            className="text-xl text-white/70 mb-10"
          >
            Diskusikan kebutuhan operasional Anda dengan tim ahli kami sekarang.
          </motion.p>
          
          <motion.div 
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={2}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={generateWhatsAppLink("Halo, saya ingin konsultasi mengenai solusi chemical untuk perusahaan saya.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white hover:bg-gray-100 text-gray-900 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-500 ease-out flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="w-5 h-5 text-green" />
              Konsultasi Gratis
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link 
              href="/products"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full backdrop-blur-sm transition-all duration-500 ease-out flex items-center justify-center"
            >
              Lihat Katalog Produk
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
