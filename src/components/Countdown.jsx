import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const WEDDING_DATE = new Date('2026-09-26T11:00:00')

function getTimeLeft() {
  const now = new Date()
  const diff = WEDDING_DATE - now
  if (diff <= 0) return { giorni: 0, ore: 0, minuti: 0, secondi: 0 }
  return {
    giorni: Math.floor(diff / (1000 * 60 * 60 * 24)),
    ore: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minuti: Math.floor((diff / (1000 * 60)) % 60),
    secondi: Math.floor((diff / 1000) % 60),
  }
}

function CountCard({ value, label, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.06, boxShadow: '0 20px 40px rgba(190, 18, 60, 0.12)' }}
      className="bg-white border border-rose-100 rounded-2xl px-6 py-8 flex flex-col items-center min-w-[120px] shadow-sm cursor-default"
    >
      <motion.span
        key={value}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="font-serif text-5xl md:text-6xl text-rose-800 leading-none"
      >
        {String(value).padStart(2, '0')}
      </motion.span>
      <span className="font-sans text-rose-400 text-xs tracking-[0.3em] uppercase mt-3">{label}</span>
    </motion.div>
  )
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft())
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' })

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="countdown" className="py-28 px-6 bg-[#fdf6f0]">
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 30 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <p className="font-sans text-rose-400 tracking-[0.4em] uppercase text-xs mb-3">Manca sempre meno</p>
        <h2 className="font-serif text-4xl md:text-5xl text-rose-800">Il Conto alla Rovescia</h2>
        <div className="w-16 h-px bg-rose-300 mx-auto mt-4" />
      </motion.div>

      <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-3xl mx-auto">
        <CountCard value={time.giorni} label="Giorni" index={0} />
        <CountCard value={time.ore} label="Ore" index={1} />
        <CountCard value={time.minuti} label="Minuti" index={2} />
        <CountCard value={time.secondi} label="Secondi" index={3} />
      </div>
    </section>
  )
}
