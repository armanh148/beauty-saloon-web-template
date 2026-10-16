import React from 'react'
import aboutImage from '../../assets/images/about.jpg'

export default function AboutSection({ onReadMore }) {
  return (
    <section id="about" className="relative bg-[#F7F4EE] text-[#141312] py-24 sm:py-32 overflow-hidden border-b border-[#E2DDD3]">
      {/* Architectural vertical guide lines */}
      <div className="absolute inset-0 pointer-events-none flex justify-between max-w-[1700px] mx-auto px-6 sm:px-12">
        <div className="w-[1px] h-full bg-[#E5DFD4]" />
        <div className="w-[1px] h-full bg-[#E5DFD4]" />
        <div className="w-[1px] h-full bg-[#E5DFD4] hidden md:block" />
        <div className="w-[1px] h-full bg-[#E5DFD4] hidden lg:block" />
        <div className="w-[1px] h-full bg-[#E5DFD4]" />
      </div>

      <div className="relative z-10 max-w-[1700px] mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Sub-tag WHO WE ARE */}
          <div className="lg:col-span-3">
            <span className="text-[11px] tracking-[0.22em] uppercase font-medium text-[#4A453F]">
              WHO WE ARE
            </span>
          </div>

          {/* Right Column: Main Content */}
          <div className="lg:col-span-9 max-w-4xl">
            {/* Grand Editorial Headline matching screenshot */}
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-light leading-[1.08] tracking-[0.02em] text-[#141312]">
              <span className="block">
                A <span className="font-flourish">L</span>UXURY <span className="font-flourish">B</span>EAUTY
              </span>
              <span className="block">EXPERIENCE</span>
              <span className="block">
                <span className="font-flourish">D</span>ESIGNED <span className="font-flourish">A</span>ROUND
              </span>
              <span className="block">YOU</span>
            </h2>

            {/* Description */}
            <p className="mt-8 sm:mt-10 max-w-2xl text-[11px] sm:text-[12px] md:text-[12.5px] tracking-[0.14em] uppercase text-[#4A453F] font-normal leading-[1.8]">
              AT VELINA, WE BELIEVE BEAUTY IS DEEPLY PERSONAL. EVERY APPOINTMENT IS THOUGHTFULLY TAILORED TO ENHANCE CONFIDENCE, ELEVATE SELF-CARE, AND CREATE A RELAXING EXPERIENCE THAT FEELS EFFORTLESSLY LUXURIOUS FROM BEGINNING TO END.
            </p>

            {/* Read More Link */}
            <div className="mt-6 sm:mt-8">
              <button
                onClick={onReadMore}
                className="text-[11px] tracking-[0.2em] uppercase font-medium text-[#141312] border-b border-[#141312] pb-1 hover:text-[#9e7f53] hover:border-[#9e7f53] transition-colors duration-300"
              >
                READ MORE ABOUT US
              </button>
            </div>

            {/* Center Featured Image Container */}
            <div className="mt-14 sm:mt-20 max-w-lg mx-auto lg:mx-0">
              <div className="relative overflow-hidden bg-[#E8E2D8] border border-[#DDD6CB] shadow-sm group">
                <img
                  src={aboutImage}
                  alt="Velina Luxury Experience"
                  className="w-full h-auto object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>

              {/* 4 Stats Grid Below Image */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-8 mt-10 sm:mt-12 pt-8 border-t border-[#E2DDD3]">
                <div>
                  <div className="text-2xl sm:text-3xl font-light text-[#141312] tracking-tight">
                    10+
                  </div>
                  <div className="mt-1 text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-[#6B655D] font-medium leading-relaxed">
                    YEARS OF BEAUTY EXCELLENCE
                  </div>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-light text-[#141312] tracking-tight">
                    5K+
                  </div>
                  <div className="mt-1 text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-[#6B655D] font-medium leading-relaxed">
                    SATISFIED CLIENTS SERVED
                  </div>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-light text-[#141312] tracking-tight">
                    15+
                  </div>
                  <div className="mt-1 text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-[#6B655D] font-medium leading-relaxed">
                    CERTIFIED BEAUTY SPECIALISTS
                  </div>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-light text-[#141312] tracking-tight">
                    4.9★
                  </div>
                  <div className="mt-1 text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-[#6B655D] font-medium leading-relaxed">
                    AVERAGE CLIENT RATING
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
