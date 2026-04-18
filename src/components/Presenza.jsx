import { useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

export default function Presenza() {

  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' })

  return (
    <section id="presenza" className="py-28 px-6 bg-sage-50/50">
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 30 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <p className="font-sans text-sage-400 tracking-[0.4em] uppercase text-xs mb-3">Fateci sapere</p>
        <h2 className="font-serif text-4xl md:text-5xl text-sage-800">Conferma la Presenza</h2>
        <div className="w-16 h-px bg-sage-300 mx-auto mt-4" />
        <p className="font-sans text-gray-500 mt-4 text-sm">
          Gradita conferma entro il <strong>30 Luglio 2026</strong>.
        </p>
      </motion.div>
    <motion.div className="max-w-lg mx-auto space-y-4 mb-16">
      <p className="font-serif text-3xl text-sage-800 mb-3 text-center">Roberto : 
      <span className="font-sans text-gray-500 text-center text-base ml-2">
        +39 393 547 3880
      </span>
      <a href='https://wa.me/393935473880/?text=Ciao%20Roberto,%20volevo%20confermare%20la%20mia%20presenza' className="ml-4 text-green-500 text-sm"><img className='wa mx-auto' src="/logowhatsapp.png" alt="WhatsApp" title='Invia Whatsapp' /></a>
      </p>
      <p className="font-serif text-3xl text-sage-800 mb-3 text-center">Sabiana : 
      <span className="font-sans text-gray-500 text-center text-base ml-2 ">
        +39 392 754 4669
      </span>
      <a href='https://wa.me/393927544669/?text=Ciao%20Sabiana,%20volevo%20confermare%20la%20mia%20presenza' className="ml-4 text-green-500 text-sm"><img className='wa mx-auto' src="/logowhatsapp.png" alt="WhatsApp" title='Invia Whatsapp'/></a>
      </p>
    </motion.div>
    
    <motion.div className="max-w-lg mx-auto space-y-5">
      <AnimatePresence mode="wait">        
            <motion.div
              animate={{ rotate: [0, -10, 10, -5, 5, 0] }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-6xl mb-6 text-center"
            >
              🌸
            </motion.div>
            <h3 className="font-serif text-3xl text-sage-800 mb-3 text-center">Grazie mille!</h3>
            <p className="font-sans text-gray-500 text-center">
              Non vediamo l&apos;ora di festeggiare con te questo momento meraviglioso.
            </p>
            <p className="font-serif italic text-sage-400 mt-4 text-lg text-center">Con amore, Roberto &amp; Sabiana</p>          
        
      </AnimatePresence>
    </motion.div>
     
    </section>
  )
}
