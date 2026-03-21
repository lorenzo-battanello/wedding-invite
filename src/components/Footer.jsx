import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <footer ref={ref} className="py-20 px-6 bg-[#fdf6f0] border-t border-rose-100">
      <div className="max-w-xl mx-auto text-center">
        {/* Animated divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="w-32 h-px bg-rose-300 mx-auto mb-10 origin-center"
        />

        {/* Ornament */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl mb-5"
          aria-hidden="true"
        >
          💍
        </motion.div>

        {/* Names */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-serif text-4xl text-rose-800 mb-3"
        >
          Sofia &amp; Marco
        </motion.h2>

        {/* Date */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="font-sans text-rose-400 tracking-[0.4em] uppercase text-xs mb-6"
        >
          14 Giugno 2026 — Venezia
        </motion.p>

        {/* Romantic phrase */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-serif italic text-rose-500 text-lg"
        >
          &ldquo;L&apos;amore non si vede con gli occhi, ma con il cuore.&rdquo;
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="font-sans text-rose-300 text-sm mt-3 tracking-wide"
        >
          Con amore, Sofia &amp; Marco
        </motion.p>

        {/* Bottom ornament */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="w-32 h-px bg-rose-300 mx-auto mt-10 origin-center"
        />
      </div>
    </footer>
  )
}
