'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, MessageSquare } from 'lucide-react'
import { PageHeader } from '@/components/ui/PageHeader'
import { fadeUp, stagger } from '@/lib/animations'
import { INDUSTRIES } from '@/data/industries'
import { generateWhatsAppLink } from '@/lib/whatsapp'

export default function IndustriesPage() {
  const reduced = useReducedMotion()

  return (
    <>
      <PageHeader 
        title="Solusi untuk Setiap Industri"
        subtitle="Dari pabrik roti sampai lahan sawah — kami hadir sebagai mitra solusi di setiap lini industri."
        breadcrumbCurrent="Industri"
        imageSrc="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070"
      />

      <section className="py-20 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              variants={reduced ? {} : fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Memahami Bahasa Industri Anda
            </motion.h2>
            <motion.p 
              variants={reduced ? {} : fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={1}
              className="text-lg text-gray-500 leading-relaxed"
            >
              Kami memahami bahwa tiap industri punya standar dan kebutuhan yang berbeda. 
              Oleh karena itu, lini produk kami dirancang spesifik untuk memenuhi kriteria 
              teknis di berbagai sektor di bawah ini.
            </motion.p>
          </div>

          {/* Industry Grid */}
          <motion.div 
            variants={reduced ? {} : stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {INDUSTRIES.map((industry, i) => {
              const Icon = industry.icon
              return (
                <motion.div key={industry.name} variants={reduced ? {} : fadeUp} custom={i}>
                  <Link href={`/products/${industry.categoryId}`} className="block group h-full">
                    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm
                                  hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 ease-out flex flex-col h-full">
                      
                      <div className="w-14 h-14 rounded-2xl bg-navy/5 flex items-center justify-center mb-6
                                    group-hover:bg-navy group-hover:scale-110 transition-all duration-500 ease-out">
                        <Icon className="w-7 h-7 text-navy group-hover:text-white transition-colors duration-500 ease-out" />
                      </div>
                      
                      <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-navy transition-colors">
                        {industry.name}
                      </h3>
                      
                      <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-1">
                        {industry.description}
                      </p>
                      
                      <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy mt-auto
                                    opacity-80 group-hover:opacity-100 group-hover:text-amber transition-all duration-500">
                        Lihat Produk Relevan
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500 ease-out" />
                      </div>
                      
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>

          {/* CTA Banner */}
          <motion.div 
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-20 bg-gradient-to-br from-navy to-navy-dark rounded-3xl p-10 md:p-14 text-center shadow-xl relative overflow-hidden"
          >
            {/* Decors */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber rounded-full blur-[80px] opacity-20 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-green rounded-full blur-[80px] opacity-20 translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Tidak Menemukan Industri Anda?
              </h2>
              <p className="text-lg text-white/70 mb-10 leading-relaxed">
                Hubungi kami sekarang. Tim ahli kami siap berdiskusi untuk membantu 
                menemukan atau menformulasikan produk speciality chemical yang paling 
                sesuai dengan kebutuhan unik operasional Anda.
              </p>
              <a
                href={generateWhatsAppLink("Halo, saya ingin konsultasi mengenai bahan chemical untuk industri saya (sebutkan nama industrinya).")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-navy hover:bg-gray-50 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-500 ease-out flex items-center gap-2"
              >
                Konsultasi via WhatsApp
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  )
}
