'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { PageHeader } from '@/components/ui/PageHeader'
import { FAQAccordion } from '@/components/resources/FAQAccordion'
import { ArticleCard } from '@/components/resources/ArticleCard'
import { ARTICLES } from '@/data/articles'
import { fadeUp, stagger } from '@/lib/animations'

export default function ResourcesPage() {
  const reduced = useReducedMotion()

  return (
    <>
      <PageHeader 
        title="Insights & Resources untuk Pelaku Industri"
        subtitle="Wawasan industri, tren kimia terbaru, dan update dari tim ahli kami untuk membantu bisnis Anda berkembang."
        breadcrumbCurrent="Resources"
        imageSrc="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070"
      />

      {/* Articles Hub */}
      <section className="py-24 bg-gray-50 border-b border-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-green font-semibold text-xs uppercase tracking-widest mb-2 block">
                Artikel Terbaru
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Wawasan Industri
              </h2>
            </div>
            {/* Future category filter could go here */}
          </div>

          <motion.div 
            variants={reduced ? {} : stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {ARTICLES.map((article, i) => (
              <motion.div key={article.slug} variants={reduced ? {} : fadeUp} custom={i}>
                <ArticleCard article={article} />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span 
              variants={reduced ? {} : fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-green font-semibold text-xs uppercase tracking-widest mb-2 block"
            >
              FAQ
            </motion.span>
            <motion.h2 
              variants={reduced ? {} : fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={1}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Pertanyaan yang Sering Diajukan
            </motion.h2>
            <motion.p 
              variants={reduced ? {} : fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={2}
              className="text-lg text-gray-500 leading-relaxed"
            >
              Temukan jawaban cepat untuk pertanyaan umum seputar produk, pemesanan, dan layanan kami.
            </motion.p>
          </div>

          <FAQAccordion />

        </div>
      </section>
    </>
  )
}
