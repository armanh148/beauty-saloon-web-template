import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, Clock, Check, ArrowUpRight } from 'lucide-react'
import NajlaServices from '../components/NajlaServices'

export default function ServicesPage({ onSelectService, onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('All')

  const serviceCategories = ['All', 'Bridal & Party', 'Clinical Skincare', 'Hair Artistry', 'Spa & Nails']

  const serviceCatalog = [
    // Bridal & Party
    {
      category: 'Bridal & Party',
      title: 'Barat Signature Royal Couture Makeover',
      duration: '3.5 Hours',
      price: 'Rs. 45,000',
      desc: 'Complete airbrush HD base, dramatic eye couture, mink lashes, dupatta setting, jewelry placement, and touchup kit with senior master director.',
    },
    {
      category: 'Bridal & Party',
      title: 'Walima Dewy Glow Luxury Makeover',
      duration: '3 Hours',
      price: 'Rs. 40,000',
      desc: 'Soft ethereal glass skin finish, bespoke Hollywood waves, veil fixation, and dewy body shimmer highlighting.',
    },
    {
      category: 'Bridal & Party',
      title: 'Mehndi & Mayon Traditional Makeover',
      duration: '2.5 Hours',
      price: 'Rs. 30,000',
      desc: 'Vibrant ethnic eye art, floral braid creation, fresh coral tint, and sweat-proof breathable foundation.',
    },
    {
      category: 'Bridal & Party',
      title: 'Signature Party Glam & Hair Styling',
      duration: '90 Minutes',
      price: 'Rs. 14,000',
      desc: 'Flawless camera-ready makeup with customized lashes and professional curls or sleek updo.',
    },

    // Clinical Skincare
    {
      category: 'Clinical Skincare',
      title: 'Original HydraFacial MD® 7-Step Vortex Glow',
      duration: '60 Minutes',
      price: 'Rs. 8,500',
      desc: 'Pore extraction, glycolic peel, hyaluronic infusion, and blue/red LED light therapy for lasting radiant rejuvenation.',
    },
    {
      category: 'Clinical Skincare',
      title: 'Bridal Oxygen Jet Glow & Derma Polish',
      duration: '75 Minutes',
      price: 'Rs. 9,500',
      desc: 'Hyperbaric oxygen delivery with fine micro-dermabrasion to smooth skin texture and brighten tone.',
    },
    {
      category: 'Clinical Skincare',
      title: 'Korean Glass Skin Hydro-Infusion',
      duration: '90 Minutes',
      price: 'Rs. 11,000',
      desc: 'Intense collagen ampoules with multi-peptide ultrasound massage for deeply plump, porcelain skin.',
    },

    // Hair Artistry
    {
      category: 'Hair Artistry',
      title: '100% Organic Nanoplastia Hair Smoothing',
      duration: '4 Hours',
      price: 'Rs. 24,000',
      desc: 'Zero-formaldehyde botanical hair transformation. Eliminates humidity frizz with mirror-like shine lasting up to 8 months.',
    },
    {
      category: 'Hair Artistry',
      title: 'French Balayage & Customized Color Melt',
      duration: '3.5 Hours',
      price: 'Rs. 22,000',
      desc: 'Hand-painted dimensional blonde, mocha, or caramel highlights with Olaplex bond protection.',
    },
    {
      category: 'Hair Artistry',
      title: 'Keratin Protein Restorative Deep Mask',
      duration: '90 Minutes',
      price: 'Rs. 9,000',
      desc: 'Intensive moisture therapy to repair heat-damaged, bleached, or brittle hair cuticles.',
    },

    // Spa & Nails
    {
      category: 'Spa & Nails',
      title: 'Whitening Collagen Spa Manicure & Pedicure',
      duration: '75 Minutes',
      price: 'Rs. 5,500',
      desc: 'Exfoliating rose-sugar scrub, collagen paraffin dip, cuticle detailing, and stress-relieving massage.',
    },
    {
      category: 'Spa & Nails',
      title: 'Russian Dry Gel Extensions & Chrome Nail Art',
      duration: '90 Minutes',
      price: 'Rs. 7,500',
      desc: 'Precision cuticle hardware manicure with durable builder gel extensions and trendy glazed chrome finish.',
    },
  ]

  const filtered = activeCategory === 'All'
    ? serviceCatalog
    : serviceCatalog.filter((s) => s.category === activeCategory)

  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <section className="bg-white border-b border-[#EAEAEB] py-16 sm:py-24">
        <div className="w-full px-6 sm:px-10 lg:px-14">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ED5642] mb-4">
              <Link to="/" className="hover:underline text-[#5A5A63]">HOME</Link>
              <span>/</span>
              <span>SERVICES & MENU</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-[#1E1E24] leading-[1.1] tracking-tight mb-6">
              Complete Signature Salon & Clinical Treatment Menu.
            </h1>
            <p className="text-base sm:text-lg text-[#5A5A63] leading-relaxed max-w-3xl">
              Explore our full suite of luxury bridal artistry, dermatological skincare, organic hair reconstruction, and relaxing spa therapies across all 9 Karachi flagship clinics.
            </p>
          </div>
        </div>
      </section>

      {/* Bento Grid Services Showcase */}
      <NajlaServices onSelectService={onSelectService} />

      {/* Detailed Service Price Catalog */}
      <section className="py-24 sm:py-32 border-b border-[#EAEAEB] bg-white">
        <div className="w-full px-6 sm:px-10 lg:px-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ED5642] block mb-3">
                PRICING DIRECTORY
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-[#1E1E24] leading-[1.12] tracking-tight">
                Transparent rates for every signature treatment.
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {serviceCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs font-bold transition-all cursor-pointer border ${
                    activeCategory === cat
                      ? 'bg-[#ED5642] text-white border-[#ED5642]'
                      : 'bg-[#F7F7F8] text-[#5A5A63] hover:bg-[#EAEAEB] border-[#EAEAEB]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F7F7F8] p-7 border border-[#EAEAEB] flex flex-col justify-between card-hover"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#ED5642] bg-white px-2.5 py-0.5 border border-[#EAEAEB]">
                      {item.category}
                    </span>
                    <span className="text-xs text-[#8B8B93] flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#ED5642]" />
                      <span>{item.duration}</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#1E1E24] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#5A5A63] leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EAEAEB] flex items-center justify-between">
                  <span className="text-lg font-extrabold text-[#1E1E24]">{item.price}</span>
                  <button
                    onClick={() => onSelectService({ title: item.title, price: item.price })}
                    className="skinenvy-btn-dark text-xs py-2 px-4 cursor-pointer"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
