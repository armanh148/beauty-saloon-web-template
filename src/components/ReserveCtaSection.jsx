import React from 'react'
import ctaImage from '../../assets/images/cta-salon.jpg'
import { ArrowUpRight } from 'lucide-react'

export default function ReserveCtaSection({ onOpenBooking }) {
  return (
    <section
      id="reserve"
      className="relative w-full min-h-[480px] sm:min-h-[580px] md:min-h-[640px] lg:min-h-[720px] flex items-center justify-center text-center overflow-hidden py-14 sm:py-20 lg:py-24"
      style={{
        backgroundImage: `url(${ctaImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
      }}
    >
      {/* Dark Ambient Luxury Overlay */}
      <div className="absolute inset-0 bg-black/65 backdrop-blur-[1px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/70 pointer-events-none" />

      <div className="relative z-10 max-w-6xl w-full mx-auto px-4 sm:px-8 lg:px-12 flex flex-col items-center">
        {/* Grand Glowing Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-light leading-[1.1] tracking-[0.02em] text-[#FAF6F0] drop-shadow-md">
          <span className="block">
            <span className="font-flourish">R</span>ESERVE YO<span className="font-script-word">UR</span>
          </span>

          <span className="block mt-1 sm:mt-2">
            MOMEN<span className="font-flourish">T</span> OF BEAUTY
          </span>

          <span className="block mt-1 sm:mt-2">
            <span className="font-flourish-ampersand">&</span> <span className="font-flourish">R</span>E<span className="font-flourish">E</span>LAXATION
          </span>
        </h2>

        {/* Two CTAs centered below with rounded buttons & hover animation */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 md:gap-6 mt-8 sm:mt-12 lg:mt-16 w-full sm:w-auto">
          <button
            onClick={onOpenBooking}
            className="skinenvy-btn-primary w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 text-[11px] sm:text-xs tracking-[0.2em] font-bold uppercase rounded-full shadow-2xl cursor-pointer hover:scale-105 transition-all inline-flex items-center justify-center gap-2"
          >
            <span>BOOK AN APPOINTMENT</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-[11px] sm:text-xs tracking-[0.2em] font-bold uppercase text-white bg-white/10 hover:bg-white hover:text-[#1E1E24] backdrop-blur-md border border-white/30 hover:border-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all duration-300 shadow-lg hover:-translate-y-0.5 cursor-pointer"
          >
            <span>CONTACT OUR TEAM</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
