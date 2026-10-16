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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen w-full flex items-center overflow-hidden bg-white">
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
          {/* Luminous Light Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
          <div className="absolute inset-0 bg-white/20" />
        </div>
      ))}

      {/* Main Content Box */}
      <div className="relative z-20 w-full px-6 sm:px-10 lg:px-14 pt-28 pb-20">
        <div className="max-w-2xl text-[#1E1E24]">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/95 backdrop-blur-md border border-[#EAEAEB] rounded-full text-xs font-bold uppercase tracking-wider text-[#ED5642] mb-6 shadow-xs hover:border-[#ED5642]/40 transition-colors">
            <span className="w-2 h-2 rounded-full bg-[#ED5642] animate-pulse" />
            {slides[current].badge}
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-[4.2rem] font-bold tracking-tight text-[#1E1E24] leading-[1.08] mb-6">
            {slides[current].headline}
          </h1>

          {/* Subtitle Description */}
          <p className="text-base sm:text-lg text-[#5A5A63] font-normal leading-relaxed max-w-xl mb-10">
            {slides[current].description}
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-10">
            <button
              onClick={onOpenBooking}
              className="skinenvy-btn-primary shadow-lg cursor-pointer"
            >
              Book an Appointment
            </button>

            <a
              href="https://wa.me/923341430303"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 bg-[#1EBE5D] hover:bg-[#18A450] text-white font-semibold text-[0.95rem] rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>

            <button
              onClick={onScrollToServices}
              className="px-6 py-3.5 bg-white hover:bg-[#1E1E24] text-[#1E1E24] hover:text-white border border-[#EAEAEB] hover:border-[#1E1E24] font-semibold text-[0.95rem] rounded-full transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5 cursor-pointer flex items-center gap-1.5"
            >
              <span>View Services</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Branch Selector Pills */}
          <div className="pt-6 border-t border-[#EAEAEB] flex flex-wrap items-center gap-2.5 text-xs">
            <span className="text-[#5A5A63] font-bold flex items-center gap-1 mr-1">
              <MapPin className="w-3.5 h-3.5 text-[#ED5642]" />
              Branches:
            </span>
            {branchPills.map((b) => (
              <button
                key={b}
                onClick={() => onSelectBranch(b)}
                className={`px-3.5 py-1.5 rounded-full transition-all text-xs font-semibold cursor-pointer border ${
                  selectedBranch.includes(b)
                    ? 'bg-[#ED5642] text-white border-[#ED5642] shadow-xs scale-105'
                    : 'bg-white hover:bg-[#EAEAEB] text-[#5A5A63] border-[#EAEAEB] hover:-translate-y-0.5'
                }`}
              >
                {b}
              </button>
            ))}
            <a href="#contact" className="text-[#ED5642] hover:underline font-bold text-xs ml-2 hover:translate-x-0.5 transition-transform inline-flex items-center">
              +4 more →
            </a>
          </div>
        </div>
      </div>

      {/* Slide Navigation Buttons: PREVIOUS / NEXT */}
      <div className="absolute bottom-8 right-6 sm:right-10 z-20 flex items-center gap-3">
        <button
          onClick={prevSlide}
          className="flex items-center gap-2 px-5 py-2.5 bg-white/95 hover:bg-[#ED5642] text-[#1E1E24] hover:text-white backdrop-blur-md border border-[#EAEAEB] rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-0.5"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>PREVIOUS</span>
        </button>

        <button
          onClick={nextSlide}
          className="flex items-center gap-2 px-5 py-2.5 bg-white/95 hover:bg-[#ED5642] text-[#1E1E24] hover:text-white backdrop-blur-md border border-[#EAEAEB] rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-0.5"
        >
          <span>NEXT</span>
          <ChevronRight className="w-4 h-4" />
        </button>
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
