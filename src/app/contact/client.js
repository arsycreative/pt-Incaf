'use client'

import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, ShieldCheck, Warehouse } from 'lucide-react'
import { PageHeader } from '@/components/ui/PageHeader'
import { fadeUp, stagger } from '@/lib/animations'
import { COMPANY } from '@/lib/constants'
import { generateWhatsAppFromForm } from '@/lib/whatsapp'

export default function ContactPage() {
  const reduced = useReducedMotion()

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    category: 'Food Additive',
    product: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Generate WA Link and open it
    const url = generateWhatsAppFromForm(formData)
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <PageHeader 
        title="Ayo Mulai Diskusi"
        subtitle="Ceritakan kebutuhan operasional Anda, dan tim kami akan membantu menemukan solusi chemical terbaik."
        breadcrumbCurrent="Hubungi Kami"
        imageSrc="/contact_hero.png"
      />

      <section className="py-20 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Left: Contact Form */}
            <motion.div 
              variants={reduced ? {} : fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Kirim Pesan Langsung</h2>
                  <p className="text-gray-500">Isi formulir di bawah ini. Pesan Anda akan langsung diteruskan ke WhatsApp tim sales kami untuk respons cepat.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-gray-700">Nama Lengkap *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-navy focus:border-navy transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-semibold text-gray-700">Nama Perusahaan *</label>
                      <input 
                        type="text" 
                        id="company" 
                        name="company" 
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-navy focus:border-navy transition-all duration-300"
                        placeholder="PT Mitra Jaya"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-navy focus:border-navy transition-all duration-300"
                        placeholder="john@perusahaan.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Nomor WhatsApp / HP *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-navy focus:border-navy transition-all duration-300"
                        placeholder="0812xxxxxx"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="category" className="text-sm font-semibold text-gray-700">Kategori Kebutuhan</label>
                      <select 
                        id="category" 
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-navy focus:border-navy transition-all duration-300"
                      >
                        <option value="Food Additive">Food Additive</option>
                        <option value="Feed Additive">Feed Additive</option>
                        <option value="Fertilizer">Fertilizer Speciality</option>
                        <option value="General Chemical">General Chemical</option>
                        <option value="Lainnya">Lainnya / Belum Yakin</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="product" className="text-sm font-semibold text-gray-700">Produk yang Diminati (Opsional)</label>
                      <input 
                        type="text" 
                        id="product" 
                        name="product" 
                        value={formData.product}
                        onChange={handleChange}
                        className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-navy focus:border-navy transition-all duration-300"
                        placeholder="Contoh: STPP, Amino Acid..."
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-gray-700">Pesan / Detail Kebutuhan</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-navy focus:border-navy transition-all duration-300 resize-none"
                      placeholder="Jelaskan kebutuhan operasional atau spesifikasi produk yang Anda cari..."
                    ></textarea>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-6 bg-green/5 p-4 rounded-xl">
                    <ShieldCheck className="w-5 h-5 text-green shrink-0" />
                    Data Anda aman. Form ini akan membuka WhatsApp secara aman di perangkat Anda.
                  </div>

                  <button 
                    type="submit"
                    className="w-full sm:w-auto bg-green hover:bg-green-dark text-white font-bold px-10 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-500 ease-out flex items-center justify-center gap-2 text-lg"
                  >
                    Kirim via WhatsApp
                    <Send className="w-5 h-5" />
                  </button>

                </form>
              </div>
            </motion.div>

            {/* Right: Direct Contact Info */}
            <motion.div 
              variants={reduced ? {} : stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-8"
            >
              
              <motion.div variants={reduced ? {} : fadeUp} className="bg-navy text-white rounded-3xl p-8 md:p-10 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-amber rounded-full blur-[60px] opacity-20 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                
                <h3 className="text-2xl font-bold mb-8 relative z-10">Informasi Kontak</h3>
                
                <div className="space-y-8 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-amber" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Kantor Pusat</h4>
                      <p className="text-white/70 leading-relaxed text-sm">
                        {COMPANY.address}
                      </p>
                    </div>
                  </div>

                  {/* Alamat Gudang */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                      <Warehouse className="w-6 h-6 text-green-light" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Gudang</h4>
                      <p className="text-white/70 leading-relaxed text-sm">
                        Jl. Mawar No.12, RT.004/RW.002, Padurenan,<br />
                        Kec. Mustika Jaya, Kota Bks,<br />
                        Jawa Barat 17156
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-green-light" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Telepon & WhatsApp</h4>
                      <p className="text-white/70 text-sm mb-1">{COMPANY.phone}</p>
                      <div className="flex flex-col gap-1">
                        <a href={`https://wa.me/${COMPANY.whatsapp}`} className="text-green-light hover:text-white font-medium text-sm transition-colors">
                          +62 813-1002-831 (WhatsApp)
                        </a>
                        <a href={`https://wa.me/${COMPANY.whatsapp2}`} className="text-green-light hover:text-white font-medium text-sm transition-colors">
                          +62 815-7510-1093 (WhatsApp)
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Email</h4>
                      <div className="flex flex-col gap-1">
                        <a href={`mailto:${COMPANY.email}`} className="text-white/70 hover:text-white text-sm transition-colors">
                          {COMPANY.email}
                        </a>
                        <a href={`mailto:${COMPANY.email2}`} className="text-white/70 hover:text-white text-sm transition-colors">
                          {COMPANY.email2}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Jam Operasional</h4>
                      <p className="text-white/70 text-sm">{COMPANY.hours}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Trust block */}
              <motion.div variants={reduced ? {} : fadeUp} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm text-center">
                <p className="text-gray-600 italic">
                  &ldquo;Kami berkomitmen memberikan respons cepat dan dukungan teknis penuh untuk setiap mitra bisnis kami.&rdquo;
                </p>
              </motion.div>

            </motion.div>

          </div>
        </div>
      </section>
    </>
  )
}
