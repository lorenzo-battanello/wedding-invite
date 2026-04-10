import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const petals = [
  { x: '10%', y: '15%', size: 80, delay: 0, duration: 7 },
  { x: '85%', y: '20%', size: 60, delay: 1, duration: 9 },
  { x: '5%', y: '70%', size: 50, delay: 2, duration: 8 },
  { x: '90%', y: '65%', size: 70, delay: 0.5, duration: 10 },
  { x: '50%', y: '5%', size: 40, delay: 1.5, duration: 6 },
  { x: '75%', y: '80%', size: 55, delay: 3, duration: 11 },
  { x: '20%', y: '85%', size: 45, delay: 2.5, duration: 8 },
]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  return (
    <section
      id="hero"
      ref={ref}
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#fdf6f0]"
    >
      {/* Subtle radial gradient background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-gradient-radial"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#fde8e8_0%,_#fdf6f0_70%)]" />
      </motion.div>

      {/* Decorative floating petals */}
      {petals.map((petal, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-30 pointer-events-none"
          style={{
            left: petal.x,
            top: petal.y,
            width: petal.size,
            height: petal.size,
            background: `radial-gradient(circle, #f9a8d4 0%, #fda4af 100%)`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 15, -15, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          aria-hidden="true"
        />
      ))}

      {/* Decorative thin horizontal lines */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true">
        <div className="max-w-2xl mx-auto px-8">
          <div className="border-t border-rose-200 opacity-40 mb-2" />
          <div className="border-t border-rose-200 opacity-20" />
        </div>
      </div>

      {/* Main content — with parallax */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 flex flex-col items-center text-center px-4"
      >
        {/* Ornamental top */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-sans text-rose-400 tracking-[0.4em] uppercase text-xs mb-6"
        >
          Invito per celebrare
        </motion.p>

        {/* Names */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-7xl md:text-8xl lg:text-9xl text-rose-800 tracking-tight leading-none"
        >
          Roberto &amp; Sabiana
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="w-48 h-px bg-rose-300 my-6"
        />

        {/* Date */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="font-sans text-rose-400 tracking-[0.5em] uppercase text-sm md:text-base"
        >
          26 Settembre 2026
        </motion.p>

        {/* Location */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="font-serif italic text-rose-600 text-lg md:text-xl mt-3"
        >
          Vigevano, Italia
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={() => document.getElementById('countdown')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="font-sans text-rose-400 text-xs tracking-[0.3em] uppercase">Scorri</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border-2 border-rose-300 flex items-start justify-center pt-1"
        >
          <div className="w-1 h-2 bg-rose-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
