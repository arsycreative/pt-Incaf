'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { generateWhatsAppLink } from '@/lib/whatsapp'

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={generateWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 bg-green hover:bg-green-dark text-white
                 rounded-full px-4 py-3 shadow-xl flex items-center gap-2 group transition-all duration-300"
      aria-label="Chat kami via WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6" />
      <span
        className="max-w-0 overflow-hidden group-hover:max-w-[100px]
                   transition-all duration-300 text-sm font-semibold whitespace-nowrap"
      >
        Chat Kami
      </span>
    </motion.a>
  )
}
