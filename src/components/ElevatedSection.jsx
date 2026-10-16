import React, { useState } from 'react'
import elevatedImage from '../../assets/images/elevated.jpg'

export default function ElevatedSection() {
  const [activeItem, setActiveItem] = useState(0)

  const items = [
    {
      number: '01',
      title: 'PERSONALIZED BEAUTY CARE',
      description:
        'Every consultation starts with an in-depth assessment of your skin tone, hair texture, and personal style to craft a custom treatment plan.',
    },
    {
      number: '02',
      title: 'CERTIFIED BEAUTY SPECIALISTS',
      description:
        'Our world-class hair stylists, master estheticians, and makeup artists bring decades of international editorial and salon excellence.',
    },
    {
      number: '03',
      title: 'LUXURY SALON ATMOSPHERE',
      description:
        'Step into an oasis of acoustic calmness, warm architectural ambient lighting, and bespoke ergonomic seating designed for serene comfort.',
    },
    {
      number: '04',
      title: 'PREMIUM BEAUTY PRODUCTS',
      description:
        'We exclusively utilize organic botanical elixirs, clinical-grade serums, and sustainable luxury haircare formulations imported from France and Italy.',
    },
    {
      number: '05',
      title: 'COMFORT & HYGIENE FIRST',
      description:
        'Hospital-grade sterilization, single-use sanitary accessories, and pristine private treatment suites guarantee complete peace of mind.',
    },
  ]

  return (
    <section id="elevated" className="relative bg-[#F7F4EE] text-[#141312] border-b border-[#E2DDD3] overflow-hidden">
      {/* Architectural vertical guide lines */}
      <div className="absolute inset-0 pointer-events-none flex justify-between max-w-[1700px] mx-auto px-6 sm:px-12">
        <div className="w-[1px] h-full bg-[#E5DFD4]" />
        <div className="w-[1px] h-full bg-[#E5DFD4] hidden md:block" />
        <div className="w-[1px] h-full bg-[#E5DFD4]" />
      </div>

      <div className="max-w-[1700px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Column: Heading, intro, and service list */}
          <div className="py-20 sm:py-28 px-6 sm:px-12 lg:pr-16 xl:pr-24 flex flex-col justify-between">
            <div>
              {/* Grand Title matching screenshot */}
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-light leading-[1.08] tracking-[0.02em] text-[#141312]">
                <span className="block">
                  <span className="font-flourish">E</span>LEVATED
                </span>
                <span className="block">
                  BEAUT<span className="font-flourish">Y</span>
                </span>
                <span className="block">
                  E<span className="font-flourish">X</span>PERIENCE
                </span>
              </h2>

              {/* Subtitle / tag */}
              <div className="mt-10 mb-3">
                <span className="text-[11px] tracking-[0.2em] uppercase font-medium text-[#141312]">
                  WHY VELINA
                </span>
              </div>

              {/* Body text */}
              <p className="max-w-xl text-[11px] sm:text-[12px] tracking-[0.14em] uppercase text-[#4A453F] font-normal leading-[1.8]">
                EVERY DETAIL AT VELINA IS INTENTIONALLY DESIGNED TO CREATE A BEAUTY EXPERIENCE THAT FEELS REFINED, RELAXING, AND DEEPLY PERSONAL. FROM OUR EXPERT ARTISTS TO OUR THOUGHTFULLY CURATED INTERIOR, LUXURY IS FELT IN EVERY MOMENT.
              </p>
            </div>

            {/* List with divider lines matching screenshot */}
            <div className="mt-16 sm:mt-20 border-t border-[#DFD8CC]">
              {items.map((item, index) => {
                const isOpen = activeItem === index
                return (
                  <div
                    key={item.number}
                    className="border-b border-[#DFD8CC] transition-colors duration-300 group cursor-pointer"
                    onClick={() => setActiveItem(isOpen ? -1 : index)}
                  >
                    <div className="py-4 sm:py-5 flex items-center justify-between gap-4">
                      <span className="text-[11px] sm:text-[12px] tracking-[0.18em] uppercase text-[#141312] font-medium group-hover:text-[#9e7f53] transition-colors duration-200">
                        {item.title}
                      </span>
                      <span className="text-[11px] sm:text-[12px] tracking-[0.18em] text-[#6B655D] font-light">
                        {item.number}
                      </span>
                    </div>

                    {/* Collapsible details for high luxury experience */}
                    {isOpen && (
                      <div className="pb-5 pt-1 text-[11px] sm:text-[11.5px] tracking-[0.12em] text-[#605A52] leading-relaxed uppercase animate-fade-in">
                        {item.description}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Column: Full-height portrait image */}
          <div className="relative min-h-[500px] lg:min-h-full border-t lg:border-t-0 lg:border-l border-[#E2DDD3] bg-[#EAE4D9]">
            <img
              src={elevatedImage}
              alt="Elevated Beauty Experience Model"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
