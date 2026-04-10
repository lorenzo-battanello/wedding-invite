import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function DetailCard({ icon, title, time, place, address, direction, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const xFrom = direction === 'left' ? -80 : 80

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: xFrom }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.03, boxShadow: '0 24px 48px rgba(190, 18, 60, 0.13)' }}
      whileTap={{ scale: 0.98 }}
      className="bg-white border border-rose-100 rounded-3xl p-10 flex flex-col items-center text-center shadow-sm cursor-default"
    >
      <div className="text-5xl mb-5">{icon}</div>
      <h3 className="font-serif text-2xl md:text-3xl text-rose-800 mb-4">{title}</h3>
      <div className="w-10 h-px bg-rose-200 mb-4" />
      <p className="font-sans text-rose-500 tracking-[0.2em] uppercase text-sm mb-1">Ore {time}</p>
      <p className="font-serif text-xl text-gray-700 mt-2">{place}</p>
      <p className="font-sans text-gray-400 text-sm mt-1">{address}</p>
      <a href={`https://www.google.com/maps/place/Villa+Ronchi/@45.2852864,8.8897918,14z/data=!4m6!3m5!1s0x4786e22cee6650c9:0xa07d19efd690240c!8m2!3d45.2857373!4d8.9338927!16s%2Fg%2F1ptz3lzt8?entry=ttu&g_ep=EgoyMDI2MDQwNy4wIKXMDSoASAFQAw%3D%3D`} 
        title='Indicazioni' target="_blank" rel="noopener noreferrer" 
        className="mt-5 inline-flex items-center gap-1 text-rose-300 text-lg font-semibold hover:underline">
        📍
        Indicazioni
      </a>
    </motion.div>
  )
}

export default function Details() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' })

  return (
    <section id="details" className="py-28 px-6 bg-rose-50/50">
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 30 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <p className="font-sans text-rose-400 tracking-[0.4em] uppercase text-xs mb-3">Dove e quando</p>
        <h2 className="font-serif text-4xl md:text-5xl text-rose-800">Il Grande Giorno</h2>
        <div className="w-16 h-px bg-rose-300 mx-auto mt-4" />
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <DetailCard
          icon="🚙"
          title="Arrivo"
          time="11:00"
          place="Villa Ronchi"
          address="Corso Pavia 164, Vigevano (PV)"
          direction="left"
          index={0}
        />
        <DetailCard
          icon="💍"
          title="Rito Civile"
          time="11:30"
          place="Villa Ronchi"
          address="Corso Pavia 164, Vigevano (PV)"
          direction="right"
          index={1}
        />
        <DetailCard
          icon="🥂"
          title="Ricevimento"
          time="13:30"
          place="Villa Ronchi"
          address="Corso Pavia 164, Vigevano (PV)"
          direction="right"
          index={2}
        />
      </div>

      {/* Additional note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-center font-serif italic text-rose-400 mt-12 text-base"
      >
        Vi aspettiamo con gioia per condividere questo momento speciale con voi.
      </motion.p>
    </section>
  )
}
