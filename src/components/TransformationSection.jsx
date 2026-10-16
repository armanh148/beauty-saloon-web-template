import React, { useState } from 'react'
import transformationImage from '../../assets/images/transformation.jpg'

export default function TransformationSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: transformationImage,
      tagline: 'YOU CAN SEE & FEEL',
      rate: '95%',
      rateLabel: 'CLIENT SATISFACTION RATE',
      count: '5K+',
      countLabel: 'TRANSFORMATIONS COMPLETED',
    },
    {
      image: transformationImage,
      tagline: 'YOU CAN SEE & FEEL',
      rate: '98%',
      rateLabel: 'RETURN APPOINTMENT RATE',
      count: '12K+',
      countLabel: 'HOURS OF BESPOKE CARE',
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const active = slides[currentSlide]

  return (
    <section id="transformations" className="relative bg-[#F7F4EE] text-[#141312] py-20 sm:py-28 px-4 sm:px-10 lg:px-16 border-b border-[#E2DDD3]">
      {/* Outer Bordered Art-Gallery Frame matching screenshot */}
      <div className="relative max-w-[1550px] mx-auto border border-[#E2DDD3] py-16 sm:py-24 px-6 sm:px-12 md:px-20 bg-[#F7F4EE] overflow-hidden">
        {/* Subtle interior vertical column lines */}
        <div className="absolute inset-0 pointer-events-none flex justify-between px-8 sm:px-16 md:px-28">
          <div className="w-[1px] h-full bg-[#E5DFD4]" />
          <div className="w-[1px] h-full bg-[#E5DFD4] hidden sm:block" />
          <div className="w-[1px] h-full bg-[#E5DFD4] hidden md:block" />
          <div className="w-[1px] h-full bg-[#E5DFD4]" />
        </div>

        {/* Top Tag: REAL TRANSFORMATIONS */}
        <div className="relative z-10 text-center mb-12 sm:mb-16">
          <span className="text-[11px] tracking-[0.24em] uppercase font-medium text-[#4A453F]">
            REAL TRANSFORMATIONS
          </span>
        </div>

        {/* Left Arrow Button */}
        <button
          onClick={prevSlide}
          aria-label="Previous Transformation"
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 text-[#141312] hover:text-[#9e7f53] hover:scale-110 transition-all duration-300"
        >
          <span className="text-2xl sm:text-3xl font-light">←</span>
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={nextSlide}
          aria-label="Next Transformation"
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 text-[#141312] hover:text-[#9e7f53] hover:scale-110 transition-all duration-300"
        >
          <span className="text-2xl sm:text-3xl font-light">→</span>
        </button>

        {/* Center Container: Image and Metrics */}
        <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
          <div className="relative w-full max-w-[360px] sm:max-w-[430px] aspect-[4/5] bg-[#EAE4DA] overflow-hidden shadow-sm">
            <img
              src={active.image}
              alt="Real Transformations"
              className="w-full h-full object-cover object-center transition-all duration-500"
            />
          </div>

          {/* Metrics Below Image */}
          <div className="w-full max-w-[430px] grid grid-cols-2 gap-8 mt-12 sm:mt-14 pt-4 text-left">
            <div>
              <div className="text-xl sm:text-2xl font-light text-[#141312]">
                {active.rate}
              </div>
              <div className="mt-1 text-[9.5px] sm:text-[10.5px] tracking-[0.18em] uppercase text-[#6B655D] font-medium leading-relaxed">
                {active.rateLabel}
              </div>
            </div>

            <div>
              <div className="text-xl sm:text-2xl font-light text-[#141312]">
                {active.count}
              </div>
              <div className="mt-1 text-[9.5px] sm:text-[10.5px] tracking-[0.18em] uppercase text-[#6B655D] font-medium leading-relaxed">
                {active.countLabel}
              </div>
            </div>
          </div>
        </div>

        {/* Overlapping Grand Headline across the center matching screenshot */}
        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 z-20 text-center pointer-events-none select-none">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-light tracking-[0.02em] text-[#141312] whitespace-nowrap">
            <span className="font-flourish">Y</span>
            OU CAN SEE{' '}
            <span className="font-flourish-ampersand">&</span>{' '}
            FEEL
          </h2>
        </div>
      </div>
    </section>
  )
}
