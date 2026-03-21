import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const images = [
  { seed: 'wedding1', caption: 'Il Nostro Amore' },
  { seed: 'wedding2', caption: 'Insieme per Sempre' },
  { seed: 'wedding3', caption: 'Il Nostro Viaggio' },
  { seed: 'wedding4', caption: 'Momenti Preziosi' },
  { seed: 'wedding5', caption: 'La Nostra Storia' },
  { seed: 'wedding6', caption: 'Per Sempre' },
]

function GalleryItem({ image, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover="hover"
      className="relative overflow-hidden rounded-2xl aspect-[3/2] cursor-pointer shadow-sm"
    >
      <motion.img
        variants={{ hover: { scale: 1.08 } }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        src={`https://picsum.photos/seed/${image.seed}/600/400`}
        alt={image.caption}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      {/* Overlay */}
      <motion.div
        variants={{ hover: { opacity: 1 } }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-rose-900/40 flex flex-col items-center justify-center"
      >
        <motion.span
          variants={{ hover: { y: 0, opacity: 1 } }}
          initial={{ y: 10, opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="text-3xl mb-2"
        >
          🤍
        </motion.span>
        <motion.p
          variants={{ hover: { y: 0, opacity: 1 } }}
          initial={{ y: 10, opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="font-serif italic text-white text-lg tracking-wide"
        >
          {image.caption}
        </motion.p>
      </motion.div>
    </motion.div>
  )
}

export default function Gallery() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' })

  return (
    <section id="gallery" className="py-28 px-6 bg-[#fdf6f0]">
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 30 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <p className="font-sans text-rose-400 tracking-[0.4em] uppercase text-xs mb-3">I Nostri Ricordi</p>
        <h2 className="font-serif text-4xl md:text-5xl text-rose-800">Galleria</h2>
        <div className="w-16 h-px bg-rose-300 mx-auto mt-4" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {images.map((image, i) => (
          <GalleryItem key={image.seed} image={image} index={i} />
        ))}
      </div>
    </section>
  )
}
