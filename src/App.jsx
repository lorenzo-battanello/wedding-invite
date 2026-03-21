import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from './components/Hero'
import Countdown from './components/Countdown'
import Details from './components/Details'
import Gallery from './components/Gallery'
import RSVP from './components/RSVP'
import Footer from './components/Footer'

const navLinks = [
  { label: 'Il Giorno', href: '#details' },
  { label: 'Conto alla Rovescia', href: '#countdown' },
  { label: 'Galleria', href: '#gallery' },
  { label: 'RSVP', href: '#rsvp' },
]

export default function App() {
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > window.innerHeight * 0.6)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#fdf6f0]">
      {/* Floating Navbar */}
      <AnimatePresence>
        {showNav && (
          <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-rose-100"
          >
            <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
              <span className="font-serif text-rose-800 text-xl tracking-wider">Sofia &amp; Marco</span>
              <ul className="hidden md:flex gap-8">
                {navLinks.map(link => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm font-sans text-rose-600 tracking-widest uppercase hover:text-rose-800 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <Hero />
      <Countdown />
      <Details />
      <Gallery />
      <RSVP />
      <Footer />
    </div>
  )
}
