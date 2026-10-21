import React, { useState } from 'react'
import { ArrowUpRight, Clock, MapPin, Sparkles } from 'lucide-react'

export default function NajlaSessionsSection({ onOpenBooking, onSelectService }) {
  const sessions = [
    {
      id: '01',
      number: '/01',
      badge: 'CLINICAL SKINCARE',
      price: 'Rs. 8,500',
      duration: '60 Min',
      title: 'HydraFacial MD Cellular Rejuvenation',
      description:
        'Vortex exfoliation, antioxidant infusion, and cellular deep pore hydration for long-lasting radiant glass skin.',
      thumbnail:
        'https://cdn.prod.website-files.com/69db201b114de85f9288b638/69db201b114de85f9288b728_Service%20Image%205.jpg',
      bgImage:
        'https://cdn.prod.website-files.com/69db201b114de85f9288b627/69db201b114de85f9288b7bd_About%20Image%201.webp',
      gradient: 'from-[#EAF2F8]/85 via-[#F3EDF7]/75 to-white/95',
    },
    {
      id: '02',
      number: '/02',
      badge: 'SIGNATURE BRIDAL',
      price: 'Rs. 35,000+',
      duration: '180 Min',
      title: 'Couture Bridal Artistry & Glow',
      description:
        'Bespoke Barat & Walima makeover crafted with luxury international cosmetics (MAC, Charlotte Tilbury, NARS).',
      thumbnail:
        'https://cdn.prod.website-files.com/69db201b114de85f9288b627/69db201b114de85f9288b801_Hero%20Image%2003.jpg',
      bgImage:
        'https://cdn.prod.website-files.com/69db201b114de85f9288b627/69db201b114de85f9288b801_Hero%20Image%2003.jpg',
      gradient: 'from-[#F9EFEA]/85 via-[#F8EEF2]/75 to-white/95',
    },
    {
      id: '03',
      number: '/03',
      badge: 'HAIR ARTISTRY',
      price: 'Rs. 18,000+',
      duration: '180 Min',
      title: 'Nanoplastia Cuticle Smoothing',
      description:
        'Formaldehyde-free bio-amino treatment that locks in liquid mirror shine and beats coastal Karachi humidity.',
      thumbnail:
        'https://cdn.prod.website-files.com/69db201b114de85f9288b638/69db201b114de85f9288b729_Service%20Image%206.jpg',
      bgImage:
        'https://cdn.prod.website-files.com/69db201b114de85f9288b627/69db201b114de85f9288b7e5_About%20Image%203.webp',
      gradient: 'from-[#EAF2F5]/85 via-[#EDF0F7]/75 to-white/95',
    },
    {
      id: '04',
      number: '/04',
      badge: 'DERMAL THERAPY',
      price: 'Rs. 6,500',
      duration: '75 Min',
      title: 'Derma Whitening Glo Infusion',
      description:
        'Botanical glutathione and brightening peel targeting hyperpigmentation, sun exposure, and dull skin texture.',
      thumbnail:
        'https://cdn.prod.website-files.com/69db201b114de85f9288b638/69db201b114de85f9288b727_Service%20Image%207.jpg',
      bgImage:
        'https://cdn.prod.website-files.com/69db201b114de85f9288b627/69db201b114de85f9288b802_Hero%20Image%2001.jpg',
      gradient: 'from-[#F3EFF8]/85 via-[#F7F2EC]/75 to-white/95',
    },
  ]

  const handleCardClick = (session) => {
    if (onSelectService) {
      onSelectService({
        title: session.title,
        price: session.price,
        duration: session.duration,
        category: session.badge,
        description: session.description,
      })
    } else if (onOpenBooking) {
      onOpenBooking()
    }
  }

  return (
    <section id="sessions" className="w-full py-12 sm:py-24 bg-white border-b border-[#EAEAEB] overflow-hidden">
      <div className="w-full px-4 sm:px-10 lg:px-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-16 scroll-reveal">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1 sm:py-1.5 bg-white border border-[#EAEAEB] rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#ED5642] mb-2 sm:mb-3 shadow-2xs hover:border-[#ED5642] transition-colors duration-300">
              <span className="w-2 h-2 rounded-full bg-[#ED5642] animate-pulse" />
              EXCLUSIVE BEAUTY SESSIONS
            </div>
            <h2 className="text-2xl sm:text-5xl font-bold text-[#1E1E24] leading-[1.15] sm:leading-[1.12] tracking-tight">
              Curated therapeutic & beauty sessions.
            </h2>
          </div>

          <div className="flex items-center justify-between sm:justify-start gap-4">
            <span className="text-xs font-semibold text-[#5A5A63] hidden sm:inline">
              Available across all 9 Karachi Flagship branches
            </span>
            <button
              onClick={onOpenBooking}
              className="skinenvy-btn-primary flex items-center gap-2 group text-xs py-2 sm:py-2.5 px-5 sm:px-6 shadow-sm rounded-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 touch-feedback"
            >
              <span>Book A Session</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>

        {/* 4 Cards (Horizontal Touch Swipe Carousel on Mobile, Grid on Tablet/Desktop) */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 no-scrollbar touch-momentum sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:mx-0 sm:px-0 sm:overflow-visible items-stretch">
          {sessions.map((session, idx) => {
            const delayClass = `scroll-reveal-delay-${idx + 1}`
            return (
              <div
                key={session.id}
                onClick={() => handleCardClick(session)}
                className={`scroll-reveal ${delayClass} group relative w-[82vw] max-w-[310px] flex-shrink-0 snap-center min-h-[460px] sm:w-auto sm:min-h-[580px] lg:min-h-[610px] sm:flex-shrink-1 rounded-3xl border border-[#EAEAEB] hover:border-[#ED5642]/60 bg-white flex flex-col justify-between overflow-hidden cursor-pointer card-hover shadow-xs hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 touch-feedback`}
              >
                {/* Layer 1: Ethereal Atmospheric Background Photography */}
                <div className="absolute inset-0 overflow-hidden bg-[#F7F7F8]">
                  <img
                    src={session.bgImage}
                    alt={session.title}
                    className="w-full h-full object-cover object-center filter blur-[1.5px] scale-105 opacity-45 transition-all duration-700 ease-out group-hover:scale-115 group-hover:opacity-65"
                  />
                </div>

                {/* Layer 2: Soft Ambient Luminous Pastel Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${session.gradient} transition-opacity duration-500`}
                />

                {/* Layer 3: Vertical Prism Glass Refraction Scanline Effect */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.45)_1px,transparent_1px)] bg-[size:36px_100%] opacity-40 pointer-events-none" />

                {/* Layer 4: Top Row with Category Badge & Price Pill */}
                <div className="relative z-10 p-5 sm:p-7 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#ED5642] bg-white/95 backdrop-blur-md px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-[#EAEAEB] shadow-xs group-hover:border-[#ED5642]/40 transition-colors">
                    {session.badge}
                  </span>
                  <span className="text-xs font-bold text-[#1E1E24] bg-white/90 backdrop-blur-md px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-[#EAEAEB] shadow-xs group-hover:text-[#ED5642] transition-colors">
                    {session.price}
                  </span>
                </div>

                {/* Layer 5: Middle Ambient Spacer */}
                <div className="relative z-10 flex-1 min-h-[40px] sm:min-h-0" />

                {/* Layer 6: Signature Bottom Content Box */}
                <div className="relative z-10 p-5 sm:p-7 pt-4 sm:pt-5 bg-gradient-to-t from-white via-white/95 to-transparent">
                  {/* Thumbnail & Counter Row */}
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl border border-[#EAEAEB] overflow-hidden bg-white shadow-xs group-hover:border-[#ED5642] group-hover:scale-105 transition-all duration-300">
                      <img
                        src={session.thumbnail}
                        alt={session.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-115"
                      />
                    </div>

                    <span className="text-xs sm:text-sm font-extrabold text-[#5A5A63] tracking-widest font-mono group-hover:text-[#ED5642] transition-colors">
                      {session.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#1E1E24] leading-snug tracking-tight mb-1.5 sm:mb-2 group-hover:text-[#ED5642] transition-colors duration-300">
                    {session.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#5A5A63] leading-relaxed line-clamp-2 sm:line-clamp-3 mb-3 sm:mb-4">
                    {session.description}
                  </p>

                  {/* Interactive Meta Bar */}
                  <div className="pt-2.5 sm:pt-3 border-t border-[#EAEAEB] flex items-center justify-between text-xs font-bold text-[#ED5642]">
                    <span className="flex items-center gap-1.5 text-[#5A5A63] font-semibold text-[11px] sm:text-xs">
                      <Clock className="w-3.5 h-3.5 text-[#ED5642]" />
                      <span>{session.duration}</span>
                    </span>

                    <span className="flex items-center gap-1 group-hover:translate-x-1.5 transition-transform duration-300 text-xs">
                      <span>Reserve</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="sm:hidden flex items-center justify-center gap-1.5 pt-2 text-[11px] text-[#8B8B93] font-semibold">
          <span>← Swipe to explore all 4 sessions →</span>
        </div>

        {/* Bottom Concierge Note */}
        <div className="mt-12 pt-8 border-t border-[#EAEAEB] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5A5A63]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#ED5642]" />
            <span className="font-semibold text-[#1E1E24]">
              Personalized Consultations Available Prior to Every Treatment Session
            </span>
          </div>

          <div className="flex items-center gap-4 font-bold">
            <a
              href="https://wa.me/923341430303?text=Hi%20Najla’s,%20I%20want%20to%20inquire%20about%20your%20therapeutic%20and%20bridal%20sessions."
              target="_blank"
              rel="noreferrer"
              className="text-[#1EBE5D] hover:underline flex items-center gap-1"
            >
              <span>Instant WhatsApp Concierge: 0334-1430303</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
