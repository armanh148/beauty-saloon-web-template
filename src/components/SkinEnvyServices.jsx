import React, { useState } from 'react'
import { ArrowRight, Eye, Sparkles } from 'lucide-react'

export default function SkinEnvyServices({ onSelectService }) {
  const [activeModal, setActiveModal] = useState(null)

  const services = [
    {
      title: 'Precision Haircutting',
      image:
        'https://cdn.prod.website-files.com/69db201b114de85f9288b638/69db201b114de85f9288b72a_Service%20Image%208.jpg',
      duration: '60 Min',
      price: '$95',
      description:
        'Tailored scissor sculpting, face-framing layers, and personalized texture mapping designed to elevate your natural facial architecture.',
    },
    {
      title: 'Spa Treatments',
      image:
        'https://cdn.prod.website-files.com/69db201b114de85f9288b638/69db201b114de85f9288b727_Service%20Image%207.jpg',
      duration: '90 Min',
      price: '$160',
      description:
        'Holistic therapeutic aromatherapy massages, body scrubs with Himalayan mineral crystals, and deep tension release rituals.',
    },
    {
      title: 'Hair Coloring',
      image:
        'https://cdn.prod.website-files.com/69db201b114de85f9288b638/69db201b114de85f9288b729_Service%20Image%206.jpg',
      duration: '120 Min',
      price: '$185',
      description:
        'Dimensional French balayage, custom gloss toning, root melts, and non-damaging botanical pigment infusions.',
    },
    {
      title: 'Custom Skincare',
      image:
        'https://cdn.prod.website-files.com/69db201b114de85f9288b638/69db201b114de85f9288b728_Service%20Image%205.jpg',
      duration: '75 Min',
      price: '$140',
      description:
        'Clinical LED light therapy, ultrasound collagen infusion, deep pore purification, and oxygenating revitalizing masks.',
    },
  ]

  return (
    <section id="services" className="bg-[#F7F7F8] py-24 sm:py-32 border-b border-[#EAEAEB]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        {/* Section Header matching SkinEnvy */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ED5642] block mb-3">
              WHAT WE OFFER
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#1E1E24] leading-[1.15] tracking-tight">
              Comprehensive beauty services perfectly tailored for you
            </h2>
          </div>

          <a href="#services" className="skinenvy-link-line group">
            <span>SEE ALL</span>
            <span className="w-8 h-[2px] bg-current transition-all duration-300 group-hover:w-14" />
          </a>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActiveModal(item)}
              className="bg-white rounded-3xl border border-[#EAEAEB] overflow-hidden group cursor-pointer card-hover flex flex-col"
            >
              {/* Image Container with Hover Badge */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#1E1E24]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Hover overlay with 'View' cursor */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#ED5642] text-white flex items-center justify-center font-bold text-xs uppercase tracking-wider shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    View
                  </div>
                </div>

                {/* Duration/Price badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#1E1E24] text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                  {item.price}
                </div>
              </div>

              {/* Title & Info */}
              <div className="p-6 flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-bold text-[#1E1E24] group-hover:text-[#ED5642] transition-colors">
                    {item.title}
                  </h4>
                  <span className="text-xs text-[#5A5A63] mt-1 block">
                    {item.duration} Session
                  </span>
                </div>

                <div className="w-8 h-8 rounded-full bg-[#F7F7F8] group-hover:bg-[#ED5642] group-hover:text-white flex items-center justify-center transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="relative max-w-lg w-full bg-white rounded-3xl p-8 border border-[#EAEAEB] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden mb-6">
              <img
                src={activeModal.image}
                alt={activeModal.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-2xl font-bold text-[#1E1E24]">{activeModal.title}</h3>
              <span className="text-lg font-bold text-[#ED5642]">{activeModal.price}</span>
            </div>
            <p className="text-sm text-[#5A5A63] leading-relaxed mb-6">
              {activeModal.description}
            </p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  const service = activeModal
                  setActiveModal(null)
                  if (onSelectService) onSelectService(service)
                }}
                className="flex-1 skinenvy-btn-primary"
              >
                Book This Service
              </button>
              <button
                onClick={() => setActiveModal(null)}
                className="px-6 py-3 rounded-full border border-[#EAEAEB] text-sm font-semibold hover:bg-[#F7F7F8]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
