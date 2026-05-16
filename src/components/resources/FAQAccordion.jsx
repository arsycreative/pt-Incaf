'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { FAQ_DATA } from '@/data/faq'
import { fadeUp, stagger } from '@/lib/animations'

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null)
  const reduced = useReducedMotion()

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <motion.div 
      variants={reduced ? {} : stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="max-w-3xl mx-auto space-y-4"
    >
      {FAQ_DATA.map((faq, index) => {
        const isOpen = openIndex === index

        return (
          <motion.div 
            key={index} 
            variants={reduced ? {} : fadeUp}
            custom={index}
            className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
              isOpen ? 'border-navy bg-white shadow-lg' : 'border-gray-200 bg-white hover:border-gray-300'
            }`}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className={`font-semibold text-lg transition-colors duration-300 ${isOpen ? 'text-navy' : 'text-gray-900'}`}>
                {faq.question}
              </span>
              <div className={`shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                isOpen ? 'bg-navy text-white rotate-180' : 'bg-gray-100 text-gray-500'
              }`}>
                <ChevronDown className="w-5 h-5" />
              </div>
            </button>
            
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{
                    hidden: { height: 0, opacity: 0 },
                    visible: { height: 'auto', opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } }
                  }}
                >
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed pt-2 border-t border-gray-50">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
