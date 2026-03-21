import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

const inputClass =
  'w-full border border-rose-200 rounded-xl px-4 py-3 font-sans text-gray-700 bg-white outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-300 transition-all placeholder-rose-200'

export default function RSVP() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    attendance: 'present',
    guests: '0',
    notes: '',
    vegetarian: false,
  })
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="rsvp" className="py-28 px-6 bg-rose-50/60">
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 30 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <p className="font-sans text-rose-400 tracking-[0.4em] uppercase text-xs mb-3">Fateci sapere</p>
        <h2 className="font-serif text-4xl md:text-5xl text-rose-800">Conferma la Presenza</h2>
        <div className="w-16 h-px bg-rose-300 mx-auto mt-4" />
        <p className="font-sans text-gray-500 mt-4 text-sm">
          Vi preghiamo di confermare la presenza entro il <strong>1 Maggio 2026</strong>.
        </p>
      </motion.div>

      <AnimatePresence mode="wait">
        {!sent ? (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, scale: 0.97 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto space-y-4"
          >
            {/* Name */}
            <div>
              <label className="block font-sans text-rose-700 text-xs tracking-widest uppercase mb-1">
                Nome e Cognome *
              </label>
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Es. Maria Rossi"
                className={inputClass}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-sans text-rose-700 text-xs tracking-widest uppercase mb-1">
                Email *
              </label>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="maria@esempio.it"
                className={inputClass}
              />
            </div>

            {/* Attendance */}
            <div>
              <label className="block font-sans text-rose-700 text-xs tracking-widest uppercase mb-1">
                Presenza *
              </label>
              <select
                name="attendance"
                value={form.attendance}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="present">Sarò presente 🎉</option>
                <option value="absent">Non potrò esserci 😢</option>
              </select>
            </div>

            {/* Guests */}
            <div>
              <label className="block font-sans text-rose-700 text-xs tracking-widest uppercase mb-1">
                Numero di Accompagnatori
              </label>
              <select
                name="guests"
                value={form.guests}
                onChange={handleChange}
                className={inputClass}
              >
                {[0, 1, 2, 3, 4, 5].map(n => (
                  <option key={n} value={String(n)}>{n === 0 ? 'Solo/a' : `+${n} accompagnator${n === 1 ? 'e' : 'i'}`}</option>
                ))}
              </select>
            </div>

            {/* Notes */}
            <div>
              <label className="block font-sans text-rose-700 text-xs tracking-widest uppercase mb-1">
                Note / Allergie Alimentari
              </label>
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                placeholder="Allergie, intolleranze o altre comunicazioni..."
                rows={3}
                className={inputClass}
              />
            </div>

            {/* Vegetarian checkbox */}
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <input
                  type="checkbox"
                  name="vegetarian"
                  checked={form.vegetarian}
                  onChange={handleChange}
                  className="sr-only"
                />
                <motion.div
                  animate={{ backgroundColor: form.vegetarian ? '#e11d48' : '#fff' }}
                  className="w-5 h-5 border-2 border-rose-300 rounded flex items-center justify-center"
                >
                  {form.vegetarian && (
                    <motion.svg
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </motion.svg>
                  )}
                </motion.div>
              </div>
              <span className="font-sans text-gray-600 text-sm group-hover:text-rose-600 transition-colors">
                Dieta vegetariana/vegana 🥗
              </span>
            </label>

            {/* Submit */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, backgroundColor: '#9f1239' }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="w-full bg-rose-700 text-white py-4 rounded-xl font-sans tracking-[0.2em] uppercase text-sm font-semibold shadow-md mt-6"
            >
              Invia Conferma
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="max-w-lg mx-auto text-center py-16"
          >
            <motion.div
              animate={{ rotate: [0, -10, 10, -5, 5, 0] }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-6xl mb-6"
            >
              🌸
            </motion.div>
            <h3 className="font-serif text-3xl text-rose-800 mb-3">Grazie mille!</h3>
            <p className="font-sans text-gray-500">
              Non vediamo l&apos;ora di festeggiare con te questo momento meraviglioso.
            </p>
            <p className="font-serif italic text-rose-400 mt-4 text-lg">Con amore, Sofia &amp; Marco 💍</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
