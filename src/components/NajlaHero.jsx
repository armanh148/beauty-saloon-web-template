import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, ArrowUpRight, MessageCircle, MapPin, Sparkles } from 'lucide-react'
import { FacebookIcon, InstagramIcon, TwitterIcon } from './Icons'

export default function NajlaHero({ onOpenBooking, onScrollToServices, selectedBranch, onSelectBranch }) {
  const slides = [
    {
      image:
        'https://cdn.prod.website-files.com/69db201b114de85f9288b627/69db201b114de85f9288b801_Hero%20Image%2003.jpg',
      badge: 'Karachi’s #1 Bridal & Aesthetic Sanctuary',
      headline: 'Redefining your beauty with precision craftsmanship.',
      description:
        'Experience luxury aesthetics, signature bridal makeovers, clinical HydraFacial treatments, and hair artistry across 9 flagship branches in Karachi.',
    },
    {
      image:
        'https://cdn.prod.website-files.com/69db201b114de85f9288b627/69db201b114de85f9288b802_Hero%20Image%2001.jpg',
      badge: 'Signature Bridal & Makeovers',
      headline: 'Flawless couture bridal looks crafted for your special day.',
      description:
        'Barat, Walima, Mehndi & Engagement makeovers tailored with international luxury cosmetics (MAC, Charlotte Tilbury, Huda Beauty, NARS) by senior artists.',
    },
    {
      image:
        'https://cdn.prod.website-files.com/69db201b114de85f9288b627/69db201b114de85f9288b800_Hero%20Image%2002.jpg',
      badge: 'Advanced Hair Aesthetics & Institute',
      headline: 'French balayage, nanoplastia, and certified diplomas.',
      description:
        'Restore hair strength with keratin gold infusions, precision styling, or enroll in our recognized Professional Beautician Training Institute.',
    },
  ]

  const branchPills = [
    'Tariq Road',
    'Gulshan KDA',
    'Hyderi',
    'Jauhar Blk 17',
    'Malir Cantt',
  ]

  const [current, setCurrent] = useState(0)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

  // Touch Swipe Handlers for smooth mobile gestures
  const handleTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50
    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }
  }

  return (
    <section
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative min-h-[82vh] sm:min-h-[90vh] lg:min-h-screen w-full flex items-center overflow-hidden bg-white"
    >
      {/* Background Image Carousel with smooth crossfade */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            current === idx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Luminous Light Gradient Overlay tailored for mobile clarity */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 sm:via-white/90 to-transparent" />
          <div className="absolute inset-0 bg-white/30 sm:bg-white/20" />
        </div>
      ))}

      {/* Main Content Box */}
      <div className="relative z-20 w-full px-4 sm:px-10 lg:px-14 pt-16 sm:pt-28 pb-16 sm:pb-20">
        <div className="max-w-2xl text-[#1E1E24]">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 bg-white/95 backdrop-blur-md border border-[#EAEAEB] rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#ED5642] mb-4 sm:mb-6 shadow-xs hover:border-[#ED5642]/40 transition-colors">
            <span className="w-2 h-2 rounded-full bg-[#ED5642] animate-pulse" />
            <span>{slides[current].badge}</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif-editorial text-3xl sm:text-5xl lg:text-[4.2rem] font-semibold tracking-tight text-[#1E1E24] leading-[1.12] sm:leading-[1.08] mb-4 sm:mb-6">
            {slides[current].headline}
          </h1>

          {/* Subtitle Description */}
          <p className="text-sm sm:text-lg text-[#5A5A63] font-normal leading-relaxed max-w-xl mb-6 sm:mb-10">
            {slides[current].description}
          </p>

          {/* Dual Action Buttons (Mobile Grid & Desktop Row) */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2.5 sm:gap-6 mb-6 sm:mb-10">
            <button
              onClick={onOpenBooking}
              className="skinenvy-btn-primary text-xs sm:text-sm py-2.5 sm:py-3.5 px-4 sm:px-8 shadow-lg cursor-pointer text-center touch-feedback"
            >
              Book Appointment
            </button>

            <a
              href="https://wa.me/923341430303"
              target="_blank"
              rel="noreferrer"
              className="px-4 sm:px-6 py-2.5 sm:py-3.5 bg-[#1EBE5D] hover:bg-[#18A450] text-white font-semibold text-xs sm:text-[0.95rem] rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-1.5 sm:gap-2 touch-feedback"
            >
              <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>WhatsApp Us</span>
            </a>

            <button
              onClick={onScrollToServices}
              className="col-span-2 sm:col-span-1 px-4 sm:px-6 py-2 sm:py-3.5 bg-white hover:bg-[#1E1E24] text-[#1E1E24] hover:text-white border border-[#EAEAEB] hover:border-[#1E1E24] font-semibold text-xs sm:text-[0.95rem] rounded-full transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-1.5 touch-feedback"
            >
              <span>Explore Services</span>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>

          {/* Quick Branch Selector (Swipeable Pills on Mobile) */}
          <div className="pt-4 sm:pt-6 border-t border-[#EAEAEB] flex items-center gap-2 text-xs">
            <span className="text-[#5A5A63] font-bold flex items-center gap-1 flex-shrink-0">
              <MapPin className="w-3.5 h-3.5 text-[#ED5642]" />
              <span className="hidden sm:inline">Branches:</span>
            </span>

            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar snap-x touch-momentum py-1">
              {branchPills.map((b) => (
                <button
                  key={b}
                  onClick={() => onSelectBranch(b)}
                  className={`px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full transition-all text-[11px] sm:text-xs font-semibold cursor-pointer border whitespace-nowrap flex-shrink-0 snap-center touch-feedback ${
                    selectedBranch.includes(b)
                      ? 'bg-[#ED5642] text-white border-[#ED5642] shadow-xs scale-105'
                      : 'bg-white hover:bg-[#EAEAEB] text-[#5A5A63] border-[#EAEAEB]'
                  }`}
                >
                  {b}
                </button>
              ))}
              <a
                href="#contact"
                className="text-[#ED5642] hover:underline font-bold text-[11px] sm:text-xs whitespace-nowrap flex-shrink-0 px-2 inline-flex items-center"
              >
                +4 more →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Navigation & Indicator Dots */}
      <div className="absolute bottom-6 sm:bottom-8 right-4 sm:right-10 z-20 flex items-center gap-3">
        {/* Animated Slide Dots Indicator */}
        <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#EAEAEB] shadow-2xs">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                current === idx
                  ? 'w-6 bg-[#ED5642]'
                  : 'w-2 bg-[#8B8B93]/40 hover:bg-[#8B8B93]'
              }`}
            />
          ))}
        </div>

        {/* Desktop Previous / Next Buttons */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={prevSlide}
            className="flex items-center gap-1.5 px-4 py-2 bg-white/95 hover:bg-[#ED5642] text-[#1E1E24] hover:text-white backdrop-blur-md border border-[#EAEAEB] rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>PREV</span>
          </button>

          <button
            onClick={nextSlide}
            className="flex items-center gap-1.5 px-4 py-2 bg-white/95 hover:bg-[#ED5642] text-[#1E1E24] hover:text-white backdrop-blur-md border border-[#EAEAEB] rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            <span>NEXT</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Floating Side Social Icons */}
      <div className="hidden lg:flex absolute right-10 top-1/2 -translate-y-1/2 z-20 flex-col gap-4 text-[#8B8B93]">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
          className="w-10 h-10 bg-white/95 backdrop-blur-sm border border-[#EAEAEB] rounded-full flex items-center justify-center hover:bg-[#ED5642] hover:border-[#ED5642] hover:text-white transition-all duration-300 shadow-xs hover:shadow-md hover:scale-110"
        >
          <FacebookIcon className="w-4 h-4" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="w-10 h-10 bg-white/95 backdrop-blur-sm border border-[#EAEAEB] rounded-full flex items-center justify-center hover:bg-[#ED5642] hover:border-[#ED5642] hover:text-white transition-all duration-300 shadow-xs hover:shadow-md hover:scale-110"
        >
          <InstagramIcon className="w-4 h-4" />
        </a>
        <a
          href="https://wa.me/923341430303"
          target="_blank"
          rel="noreferrer"
          className="w-10 h-10 bg-white/95 backdrop-blur-sm border border-[#EAEAEB] rounded-full flex items-center justify-center hover:bg-[#1EBE5D] hover:border-[#1EBE5D] hover:text-white transition-all duration-300 text-[#1EBE5D] shadow-xs hover:shadow-md hover:scale-110"
        >
          <MessageCircle className="w-4 h-4" />
        </a>
      </div>
    </section>

  )
}
