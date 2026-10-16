import React, { useState } from 'react'
import g1 from '../../assets/images/gallery-01.jpg'
import g2 from '../../assets/images/gallery-02.jpg'
import g3 from '../../assets/images/gallery-03.jpg'
import g4 from '../../assets/images/gallery-04.jpg'
import g5 from '../../assets/images/gallery-05.jpg'
import g6 from '../../assets/images/gallery-06.jpg'

export default function GallerySection({ onSelectImage }) {
  const [activeIndex, setActiveIndex] = useState(2) // 03 is active by default as shown in screenshot

  const galleryItems = [
    {
      id: '01',
      title: 'BESPOKE NATURAL MAKEUP',
      image: g1,
      alt: 'Natural makeup styling',
    },
    {
      id: '02',
      title: 'RADIANT SKINCARE THERAPY',
      image: g2,
      alt: 'Glowing skin treatment',
    },
    {
      id: '03',
      title: 'LUXURY HAIR STYLING EXPERIENCE',
      image: g3,
      alt: 'Luxury hair styling',
    },
    {
      id: '04',
      title: 'EDITORIAL COIFFURE & JEWELRY',
      image: g4,
      alt: 'Editorial sleek coiffure',
    },
    {
      id: '05',
      title: 'SILK BLOWOUT & REPAIR RITUAL',
      image: g5,
      alt: 'Silk hair treatment',
    },
    {
      id: '06',
      title: 'TIMELESS GLAMOUR & ACCENTS',
      image: g6,
      alt: 'Timeless styling',
    },
  ]

  const activeItem = galleryItems[activeIndex]

  return (
    <section id="gallery" className="relative bg-[#F7F4EE] text-[#141312] pt-24 sm:pt-32 pb-20 overflow-hidden border-b border-[#E2DDD3]">
      {/* Top Header Row matching screenshot */}
      <div className="max-w-[1700px] mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Top Left: Subtitle INSIDE VELINA */}
          <div className="lg:col-span-4">
            <span className="text-[11px] tracking-[0.24em] uppercase font-medium text-[#4A453F]">
              INSIDE VELINA
            </span>
          </div>

          {/* Top Right: Grand Headline matching screenshot */}
          <div className="lg:col-span-8">
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.4rem] font-light leading-[1.08] tracking-[0.02em] text-[#141312]">
              <span className="block">
                M<span className="font-flourish">O</span>MENTS OF
              </span>
              <span className="block">
                <span className="font-flourish">B</span>EAUTY,{' '}
                <span className="font-flourish">E</span>LEGANCE
              </span>
            </h2>

            {/* Active item label above gallery grid matching screenshot position */}
            <div className="mt-14 sm:mt-16 mb-4">
              <div className="text-[11px] tracking-[0.2em] font-medium text-[#141312]">
                {activeItem.id}
              </div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-[#4A453F] font-normal mt-0.5">
                {activeItem.title}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6-Column Gallery Row with Hairline Dividers matching screenshot */}
      <div className="mt-8 border-t border-b border-[#E2DDD3]">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-y sm:divide-y-0 sm:divide-x divide-[#E2DDD3]">
          {galleryItems.map((item, index) => {
            const isSelected = activeIndex === index
            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => {
                  setActiveIndex(index)
                  if (onSelectImage) onSelectImage(item)
                }}
                className={`relative flex flex-col justify-end transition-all duration-300 group cursor-pointer ${
                  isSelected ? 'bg-[#EFE9DF]' : 'bg-transparent hover:bg-[#F2ECE2]'
                }`}
              >
                {/* Column number on top of image */}
                <div className="px-4 py-2.5">
                  <span className="text-[10px] tracking-[0.16em] uppercase text-[#6B655D] font-medium">
                    {item.id}
                  </span>
                </div>

                {/* Portrait Image container */}
                <div className="relative aspect-square w-full overflow-hidden bg-[#E2DBD0]">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className={`w-full h-full object-cover object-center transition-all duration-700 ${
                      isSelected
                        ? 'scale-105 saturate-110'
                        : 'grayscale-[15%] group-hover:scale-105 group-hover:grayscale-0'
                    }`}
                  />
                  {/* Subtle active frame indicator */}
                  {isSelected && (
                    <div className="absolute inset-0 border-2 border-[#141312]/30 pointer-events-none" />
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
