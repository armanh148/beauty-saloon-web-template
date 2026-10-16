import React from 'react'
import heroImage from '../../assets/images/hero.jpg'

export default function HeroSection({ onOpenBooking }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between text-[#F5EFEB] overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 35%',
      }}
    >
      {/* Cinematic ambient overlay to guarantee text legibility while keeping the glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d0c]/90 via-transparent to-[#0a0908]/60 pointer-events-none" />
      <div className="absolute inset-0 bg-black/25 pointer-events-none" />

      {/* Top spacer for navbar */}
      <div className="h-28 sm:h-36" />

      {/* Main Hero Content */}
      <div
        className="relative z-10 w-full max-w-[1700px] mx-auto px-6 sm:px-12 flex flex-col justify-center items-center text-center my-auto"
      >
        {/* Left absolute micro-tag matching screenshot */}
        <div className="hidden xl:block absolute left-8 2xl:left-12 top-1/2 -translate-y-1/2 text-left">
          <span className="text-[11px] tracking-[0.2em] uppercase text-[#D8CFBF] font-light">
            &ldquo;NOW ACCEPTING NEW CLIENTS&rdquo;
          </span>
        </div>

        {/* Mobile version of micro-tag */}
        <div className="xl:hidden mb-6">
          <span className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#D8CFBF] font-light">
            &ldquo;NOW ACCEPTING NEW CLIENTS&rdquo;
          </span>
        </div>

        {/* Main Headline matching screenshot */}
        <h1 className="leading-[1.05] tracking-[0.02em] font-light select-none">
          <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] xl:text-[6.2rem] text-[#F9F6F0]">
            REVEAL{' '}
            <span className="font-script-word text-[#FAF6F0]">
              Your
            </span>{' '}
            MOST
          </span>

          <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] xl:text-[6.2rem] text-[#F9F6F0] mt-1 sm:mt-2">
            RADIANT{' '}
            <span className="font-flourish text-[#FAF6F0]">
              S
            </span>
            <span className="tracking-[0.06em]">ELF</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-8 sm:mt-10 max-w-3xl text-[11px] sm:text-[12px] md:text-[13px] tracking-[0.16em] uppercase text-[#E3DCD1]/90 font-light leading-relaxed px-4">
          AT VELINA, BEAUTY IS MORE THAN A SERVICE — IT'S A PERSONALIZED LUXURY EXPERIENCE CRAFTED TO ELEVATE CONFIDENCE, ELEGANCE, AND SELF-CARE.
        </p>
      </div>

      {/* Bottom Information Row matching screenshot */}
      <div className="relative z-10 w-full border-t border-white/10 bg-[#0e0d0c]/40 backdrop-blur-sm py-6 sm:py-7">
        <div className="max-w-[1700px] mx-auto px-6 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-[#D8CFBF]">
          {/* Left stats: Rating & Trust */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex text-[#C5A880] text-sm tracking-widest">
              ★★★★★
            </div>
            <span className="font-light tracking-[0.2em] text-[#E0D7CA]">
              TRUSTED BY 5,000+ BEAUTY LOVERS
            </span>
          </div>

          {/* Center info: Opening Hours */}
          <div className="flex items-center gap-4 text-center md:text-left border-y md:border-y-0 md:border-x border-white/10 py-2 md:py-0 md:px-8">
            <span className="font-light text-[#E5DDCF]">OPENING HOURS</span>
            <div className="w-[1px] h-6 bg-white/20 hidden sm:block" />
            <div className="flex flex-col text-left font-light text-[#C2B7A8]">
              <span>MON — SAT</span>
              <span>10:00 AM — 8:00 PM</span>
            </div>
          </div>

          {/* Right stats: Happy clients & experience */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right gap-0.5">
            <span className="font-medium text-[#F5EFEB] tracking-[0.2em]">5K+ HAPPY CLIENTS</span>
            <span className="text-[#BFB4A5] font-light">10+ YEARS EXPERIENCE</span>
          </div>
        </div>
      </div>
    </section>
  )
}
