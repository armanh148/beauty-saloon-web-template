import React, { useState, useEffect } from 'react'
import { Sparkles, ArrowUpRight, Menu, X } from 'lucide-react'

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#121110]/85 backdrop-blur-md py-4 border-b border-white/10 shadow-lg'
          : 'bg-transparent py-7'
      }`}
      style={{
        paddingLeft: 'clamp(1.5rem, 4vw, 4rem)',
        paddingRight: 'clamp(1.5rem, 4vw, 4rem)',
      }}
    >
      <div className="max-w-[1700px] mx-auto flex items-start justify-between text-[#F5EFEB]">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-2 group pt-1">
          <svg
            className="w-5 h-5 text-[#EFE7DC] transition-transform duration-300 group-hover:rotate-45"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
          </svg>
          <span
            className="text-2xl font-light tracking-[0.25em] text-[#F5EFEB] uppercase"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            VELINA
          </span>
        </a>

        {/* Center 3-column navigation links matching screenshot */}
        <nav className="hidden lg:flex items-start gap-16 xl:gap-24 text-[11px] tracking-[0.16em] uppercase text-[#E5DFD5]/90">
          {/* Column 1 */}
          <div className="flex flex-col gap-2">
            <a href="#hero" className="hover:text-white transition-colors duration-200">
              HOME
            </a>
            <a href="#elevated" className="hover:text-white transition-colors duration-200">
              SERVICES +
            </a>
            <a href="#gallery" className="hover:text-white transition-colors duration-200">
              GALLERY
            </a>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-2">
            <a href="#about" className="hover:text-white transition-colors duration-200">
              ABOUT
            </a>
            <a href="#transformations" className="hover:text-white transition-colors duration-200">
              TESTIMONIALS
            </a>
            <a href="#transformations" className="hover:text-white transition-colors duration-200">
              TRANSFORMATION
            </a>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-2">
            <a href="#contact" className="hover:text-white transition-colors duration-200">
              CONTACT
            </a>
            <a
              href="tel:+123324598612"
              className="hover:text-white transition-colors duration-200 text-[#D2C8BA]"
            >
              (+123) 3245-98612
            </a>
          </div>
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center gap-1.5 text-[11px] tracking-[0.2em] uppercase text-[#F5EFEB] border-b border-[#F5EFEB]/50 pb-1 hover:border-white hover:text-white transition-all duration-300 group"
          >
            <span>BOOK A APPOINTMENT</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-[#C5A880] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-4 pt-6 pb-8 border-t border-white/10 bg-[#141210]/95 backdrop-blur-lg px-6 flex flex-col gap-6 animate-fade-in text-xs tracking-[0.16em] uppercase">
          <div className="grid grid-cols-2 gap-6 text-[#E0D7CB]">
            <div className="flex flex-col gap-3">
              <a href="#hero" onClick={() => setMobileMenuOpen(false)}>HOME</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>ABOUT</a>
              <a href="#elevated" onClick={() => setMobileMenuOpen(false)}>SERVICES +</a>
              <a href="#gallery" onClick={() => setMobileMenuOpen(false)}>GALLERY</a>
            </div>
            <div className="flex flex-col gap-3">
              <a href="#transformations" onClick={() => setMobileMenuOpen(false)}>TRANSFORMATION</a>
              <a href="#transformations" onClick={() => setMobileMenuOpen(false)}>TESTIMONIALS</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>CONTACT</a>
              <span className="text-[#C5A880] normal-case text-sm">(+123) 3245-98612</span>
            </div>
          </div>
          <button
            onClick={() => {
              setMobileMenuOpen(false)
              onOpenBooking()
            }}
            className="w-full py-3 bg-[#C5A880] text-black font-medium tracking-[0.2em] uppercase text-center mt-2 rounded-sm"
          >
            BOOK AN APPOINTMENT ↗
          </button>
        </div>
      )}
    </header>
  )
}
