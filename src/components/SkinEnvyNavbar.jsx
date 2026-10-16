import React, { useState, useEffect } from 'react'
import { ShoppingBag, X, ArrowRight } from 'lucide-react'
import { FacebookIcon, InstagramIcon, TwitterIcon } from './Icons'

export default function SkinEnvyNavbar({ cartCount, onOpenCart, onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#1E1E24]/90 backdrop-blur-md py-4 shadow-lg border-b border-white/10'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <span className="w-8 h-8 rounded-full bg-[#ED5642] flex items-center justify-center text-white font-bold text-sm shadow-md transition-transform duration-300 group-hover:scale-110">
              S
            </span>
            <span className="text-2xl font-bold tracking-tight text-white">
              Skin<span className="text-[#ED5642]">Envy</span>
            </span>
          </a>

          {/* Right Controls: Cart & Hamburger Menu Button */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Cart Trigger */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 rounded-full transition-all duration-200 border border-white/15 cursor-pointer"
              aria-label="Open cart"
            >
              <ShoppingBag className="w-4 h-4 text-[#ED5642]" />
              <span className="text-xs font-semibold uppercase tracking-wider hidden sm:inline">
                Cart
              </span>
              <span className="bg-[#ED5642] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
                {cartCount}
              </span>
            </button>

            {/* Hamburger Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-11 h-11 rounded-full bg-white text-[#1E1E24] hover:bg-[#ED5642] hover:text-white transition-all duration-300 flex flex-col items-center justify-center gap-1.5 shadow-md cursor-pointer group"
              aria-label="Toggle navigation menu"
            >
              <span className="w-5 h-[2px] bg-current transition-transform duration-300 group-hover:w-6" />
              <span className="w-3.5 h-[2px] bg-current transition-transform duration-300 group-hover:w-6" />
              <span className="w-5 h-[2px] bg-current transition-transform duration-300 group-hover:w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Overlay Navigation Menu matching Webflow SkinEnvy */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[#1E1E24] text-white flex flex-col justify-between p-8 sm:p-14 animate-fade-in overflow-y-auto">
          {/* Menu Top Bar */}
          <div className="max-w-[1400px] w-full mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-full bg-[#ED5642] flex items-center justify-center text-white font-bold text-sm">
                S
              </span>
              <span className="text-2xl font-bold tracking-tight text-white">
                Skin<span className="text-[#ED5642]">Envy</span>
              </span>
            </div>

            <button
              onClick={() => setMenuOpen(false)}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#ED5642] text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Menu Links */}
          <div className="max-w-[1400px] w-full mx-auto my-auto py-12">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#ED5642] block mb-6">
              ALL PAGES
            </span>
            <nav className="flex flex-col gap-4 sm:gap-6 text-4xl sm:text-6xl md:text-7xl font-bold">
              {[
                { label: 'Home', href: '#' },
                { label: 'About Us', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Why Us', href: '#why-us' },
                { label: 'Our Team', href: '#team' },
                { label: 'Beauty Shop', href: '#shop' },
                { label: 'Testimonials', href: '#testimonials' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Contact', href: '#contact' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between group hover:text-[#ED5642] transition-colors py-1 border-b border-white/5"
                >
                  <span className="transition-transform duration-300 group-hover:translate-x-4">
                    {item.label}
                  </span>
                  <ArrowRight className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 group-hover:translate-x-0 text-[#ED5642]" />
                </a>
              ))}
            </nav>
          </div>

          {/* Menu Footer */}
          <div className="max-w-[1400px] w-full mx-auto pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-sm text-neutral-400">
              <span>Follow us:</span>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#ED5642] transition-colors">
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#ED5642] transition-colors">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#ED5642] transition-colors">
                <TwitterIcon className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={() => {
                setMenuOpen(false)
                onOpenBooking()
              }}
              className="skinenvy-btn-primary"
            >
              Make a reservation
            </button>
          </div>
        </div>
      )}
    </>
  )
}
