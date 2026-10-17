import React, { useState } from 'react'
import { Sparkles, ArrowUpRight, CheckCircle2, Clock, Calendar, X } from 'lucide-react'

export default function NajlaServices({ onSelectService }) {
  const [selectedService, setSelectedService] = useState(null)

  const services = {
    bridal: {
      title: 'Signature Bridal & Couture Makeovers',
      category: 'Bridal Artistry',
      price: 'Rs. 35,000+',
      duration: '180 Min',
      image:
        'https://cdn.prod.website-files.com/69db201b114de85f9288b627/69db201b114de85f9288b801_Hero%20Image%2003.jpg',
      description:
        'Full luxury couture bridal makeover by Najla’s senior master artist. Includes HD airbrush base, eye couture styling, dupata setting, jewelry fixing, and nail paint using MAC, Charlotte Tilbury, Huda Beauty & NARS.',
      features: ['Airbrush Base Adhesion', 'Dupata & Jewelry Fixing', 'Luxury Lashes & Lenses', 'VIP Bridal Suite'],
    },
    institute: {
      title: 'Sindh Board Beautician Training Institute',
      category: 'Training Institute',
      price: 'Free Consultation',
      duration: '3 — 6 Months',
      image:
        'https://cdn.prod.website-files.com/69db201b114de85f9288b638/69db201b114de85f9288b75c_Team%20image.jpg',
      description:
        'Sindh Board recognized professional diploma courses in Cosmetology, Advanced Hair Artistry, Skin Aesthetics, and Couture Bridal Makeup with hands-on clinical client practice.',
      features: ['Sindh Board Recognized', '100% Practical Training', 'Official Certification', 'Career Placement'],
    },
    hair: {
      title: 'Advanced Hair Aesthetics & Nanoplastia',
      category: 'Hair Aesthetics',
      price: 'Rs. 18,000+',
      duration: '180 Min',
      image:
        'https://cdn.prod.website-files.com/69db201b114de85f9288b638/69db201b114de85f9288b729_Service%20Image%206.jpg',
      description:
        '100% Formaldehyde-free organic nanoplastia treatment that restores protein structure, eliminates frizz completely, and leaves hair silk-straight for 8+ months.',
      features: ['Formaldehyde-Free', 'Zero Frizz in Karachi Humidity', 'Liquid Mirror Shine', 'Cuticle Sealing'],
    },
    skincare: {
      title: 'Clinical Skincare & HydraFacial MD',
      category: 'Clinical Skincare',
      price: 'Rs. 8,500',
      duration: '60 Min',
      image:
        'https://cdn.prod.website-files.com/69db201b114de85f9288b638/69db201b114de85f9288b728_Service%20Image%205.jpg',
      description:
        '7-Step original HydraFacial vortex pore suction, salicylic extraction, ultrasound peptide infusion, and LED phototherapy for an instant, month-long glass skin glow.',
      features: ['Vortex Extraction', 'Salicylic Cleansing', 'Peptide Infusion', 'Phototherapy'],
    },
    spa: {
      title: 'Luxury Spa, Nails & Reflexology Atelier',
      category: 'Spa & Nails',
      price: 'Rs. 3,500+',
      duration: '60 Min',
      image:
        'https://cdn.prod.website-files.com/69db201b114de85f9288b638/69db201b114de85f9288b727_Service%20Image%207.jpg',
      description:
        'Russian hardware cuticle manicures, organic sea salt scrubs, soothing reflexology massage, and warm mineral paraffin baths for total revitalization.',
      features: ['Russian Cuticle Care', 'Warm Mineral Paraffin', 'Dead Sea Scrub', 'Stress Relief'],
    },
  }

  const handleCardClick = (serviceObj) => {
    setSelectedService(serviceObj)
  }

  const handleBookNow = (serviceObj) => {
    setSelectedService(null)
    if (onSelectService) {
      onSelectService(serviceObj)
    }
  }

  return (
    <section id="services" className="w-full py-20 sm:py-28 bg-white border-b border-[#EAEAEB]">
      <div className="w-full px-6 sm:px-10 lg:px-14">
        {/* Section Header strictly matching the uploaded reference image */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 scroll-reveal">
          <div className="max-w-2xl">
            {/* Pill Tag with Icon */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-[#EAEAEB] rounded-full text-xs font-bold text-[#1E1E24] mb-4 shadow-2xs hover:border-[#ED5642] hover:text-[#ED5642] transition-colors duration-300">
              <Sparkles className="w-3.5 h-3.5 text-[#ED5642]" />
              <span>Our services</span>
            </div>

            {/* Bold Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-[3.2rem] font-bold text-[#1E1E24] leading-[1.12] tracking-tight">
              Professional Services That Showcase Our Expertise.
            </h2>
          </div>

          {/* Right Subtitle */}
          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[#5A5A63] leading-relaxed">
              From bespoke bridal couture makeovers to certified clinical skincare and training diplomas, our services define beauty excellence across Karachi.
            </p>
          </div>
        </div>

        {/* BENTO GRID (3 COLUMNS) STRICTLY MATCHING USER'S SCREENSHOT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* ================= COLUMN 1 (LEFT TALL CARD) ================= */}
          <div
            onClick={() => handleCardClick(services.bridal)}
            className="lg:col-span-4 bg-white border border-[#EAEAEB] hover:border-[#ED5642]/50 rounded-3xl p-6 sm:p-8 flex flex-col justify-between group card-hover shadow-xs cursor-pointer min-h-[580px] sm:min-h-[640px] scroll-reveal-left delay-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
          >
            <div>
              {/* Top Showcase Preview Container matching screenshot */}
              <div className="aspect-[16/11] w-full bg-[#F3EFF8] border border-[#EAEAEB] group-hover:border-[#ED5642]/30 rounded-2xl p-3 mb-6 overflow-hidden flex items-center justify-center relative shadow-xs transition-colors duration-300">
                <div className="w-full h-full relative overflow-hidden rounded-xl bg-[#1E1E24] shadow-sm">
                  <img
                    src={services.bridal.image}
                    alt={services.bridal.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:brightness-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex flex-col justify-end p-4 transition-opacity duration-300">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#ED5642]">
                      Signature Collection
                    </span>
                    <span className="text-sm font-bold text-white">
                      Barat & Walima Couture
                    </span>
                  </div>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl sm:text-2xl font-bold text-[#1E1E24] leading-snug tracking-tight mb-2 group-hover:text-[#ED5642] transition-colors duration-300">
                {services.bridal.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#5A5A63] leading-relaxed mb-6">
                We craft flawless couture bridal looks with luxury international cosmetics (MAC, Charlotte Tilbury, NARS, Huda Beauty) for your special day.
              </p>
            </div>

            {/* Bottom: Brand Badges clearly visible in front without cutoffs */}
            <div className="pt-4 border-t border-[#EAEAEB] flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5">
                <span className="h-7 px-3 bg-[#1E1E24] text-white text-[11px] font-extrabold flex items-center justify-center rounded-full shadow-xs whitespace-nowrap group-hover:bg-[#ED5642] transition-colors duration-300">
                  MAC
                </span>
                <span className="h-7 px-3 bg-[#ED5642] text-white text-[11px] font-extrabold flex items-center justify-center rounded-full shadow-xs whitespace-nowrap">
                  CT
                </span>
                <span className="h-7 px-3 bg-[#28282F] text-white text-[11px] font-extrabold flex items-center justify-center rounded-full shadow-xs whitespace-nowrap group-hover:bg-[#1E1E24] transition-colors duration-300">
                  NARS
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-bold text-[#ED5642] group-hover:translate-x-1.5 transition-transform duration-300 whitespace-nowrap">
                <span>{services.bridal.price}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </div>

          {/* ================= COLUMN 2 (MIDDLE 2 STACKED CARDS) ================= */}
          <div className="lg:col-span-4 flex flex-col gap-6 scroll-reveal delay-200">
            {/* Top Card: Soft Tinted Card with Student/Instructor Avatars matching screenshot */}
            <div
              onClick={() => handleCardClick(services.institute)}
              className="bg-[#F1F3FA] hover:bg-white border border-[#E4E7F2] hover:border-[#ED5642]/50 rounded-3xl p-6 sm:p-8 flex flex-col justify-between group card-hover shadow-xs cursor-pointer flex-1 min-h-[290px] hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
            >
              <div>
                <h3 className="text-xl font-bold text-[#1E1E24] leading-snug tracking-tight mb-2 group-hover:text-[#ED5642] transition-colors">
                  {services.institute.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5A5A63] leading-relaxed mb-6">
                  Sindh Board recognized professional beautician diplomas and masterclasses in Cosmetology, Hair Artistry, and Clinical Skin Therapy.
                </p>
              </div>

              {/* Bottom: 3 Avatar Circles matching screenshot */}
              <div className="pt-4 border-t border-[#E4E7F2]/80 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-9 h-9 rounded-full border-2 border-white overflow-hidden shadow-xs z-10 bg-white">
                    <img
                      src="https://cdn.prod.website-files.com/69db201b114de85f9288b638/69db201b114de85f9288b75c_Team%20image.jpg"
                      alt="Instructor"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-9 h-9 rounded-full border-2 border-white overflow-hidden shadow-xs -ml-2 z-20 bg-white">
                    <img
                      src="https://cdn.prod.website-files.com/69db201b114de85f9288b638/69db201b114de85f9288b744_Team%20Image%208.jpg"
                      alt="Instructor"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-9 h-9 rounded-full border-2 border-white overflow-hidden shadow-xs -ml-2 z-30 bg-white">
                    <img
                      src="https://cdn.prod.website-files.com/69db201b114de85f9288b638/69db201b114de85f9288b743_Team%20Image%206.jpg"
                      alt="Instructor"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <span className="text-[11px] font-bold uppercase tracking-wider text-[#ED5642] bg-white px-3.5 py-1.5 rounded-full border border-[#E4E7F2] shadow-2xs">
                  Certified Diploma
                </span>
              </div>
            </div>

            {/* Bottom Card: Soft Cyan Tinted Card with Peeking Device Display matching screenshot */}
            <div
              onClick={() => handleCardClick(services.hair)}
              className="bg-[#EDF5FA] hover:bg-white border border-[#DFECF5] hover:border-[#ED5642]/50 rounded-3xl p-6 sm:p-8 pb-0 flex flex-col justify-between group card-hover shadow-xs cursor-pointer flex-1 min-h-[320px] overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
            >
              <div>
                <h3 className="text-xl font-bold text-[#1E1E24] leading-snug tracking-tight mb-2 group-hover:text-[#ED5642] transition-colors duration-300">
                  {services.hair.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5A5A63] leading-relaxed mb-4">
                  100% Formaldehyde-free organic nanoplastia smoothing, French balayage, and restorative keratin protein repair.
                </p>
              </div>

              {/* Peeking Device Frame at the bottom edge matching screenshot */}
              <div className="w-full mt-2 bg-white border border-[#DFECF5] group-hover:border-[#ED5642]/40 rounded-t-2xl shadow-md transform translate-y-3 group-hover:translate-y-0.5 transition-transform duration-500 overflow-hidden">
                <div className="h-5 bg-[#F7F7F8] border-b border-[#DFECF5] flex items-center px-2.5 gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
                  <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2 h-2 rounded-full bg-[#27C93F]" />
                </div>
                <div className="h-32 w-full overflow-hidden">
                  <img
                    src={services.hair.image}
                    alt={services.hair.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ================= COLUMN 3 (RIGHT 2 STACKED CARDS) ================= */}
          <div className="lg:col-span-4 flex flex-col gap-6 scroll-reveal-right delay-300">
            {/* Top Card: Gallery Showcase Grid matching screenshot */}
            <div
              onClick={() => handleCardClick(services.skincare)}
              className="bg-white border border-[#EAEAEB] hover:border-[#ED5642]/50 rounded-3xl p-6 sm:p-8 flex flex-col justify-between group card-hover shadow-xs cursor-pointer flex-1 min-h-[350px] hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
            >
              <div>
                {/* Showcase Collage matching screenshot */}
                <div className="grid grid-cols-2 gap-2 mb-6 p-2 bg-[#F7F7F8] group-hover:bg-[#FDF6F4] border border-[#EAEAEB] group-hover:border-[#ED5642]/30 rounded-2xl transition-colors duration-300">
                  <div className="aspect-[4/3] bg-white rounded-xl overflow-hidden shadow-xs">
                    <img
                      src={services.skincare.image}
                      alt="Facial Step 1"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="aspect-[4/3] bg-white rounded-xl overflow-hidden shadow-xs">
                    <img
                      src="https://cdn.prod.website-files.com/69db201b114de85f9288b627/69db201b114de85f9288b7bd_About%20Image%201.webp"
                      alt="Facial Step 2"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-[#1E1E24] leading-snug tracking-tight mb-2 group-hover:text-[#ED5642] transition-colors duration-300">
                  {services.skincare.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5A5A63] leading-relaxed mb-4">
                  Vortex pore extraction, salicylic peeling, antioxidant peptide infusion, and derma whitening glow for lasting radiance.
                </p>
              </div>

              {/* Bottom: Badges & Price Tag clearly visible in front without cutoffs */}
              <div className="pt-4 border-t border-[#EAEAEB] flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="h-7 px-3 bg-[#ED5642] text-white text-[11px] font-extrabold flex items-center justify-center rounded-full shadow-xs whitespace-nowrap">
                    MD
                  </span>
                  <span className="h-7 px-3 bg-[#1E1E24] text-white text-[11px] font-extrabold flex items-center justify-center rounded-full shadow-xs whitespace-nowrap group-hover:bg-[#ED5642] transition-colors duration-300">
                    7-Step
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-bold text-[#ED5642] group-hover:translate-x-1.5 transition-transform duration-300 whitespace-nowrap">
                  <span>{services.skincare.price}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>

            {/* Bottom Card: Minimal Clean Card matching screenshot */}
            <div
              onClick={() => handleCardClick(services.spa)}
              className="bg-white border border-[#EAEAEB] hover:border-[#ED5642]/50 rounded-3xl p-6 sm:p-8 flex flex-col justify-between group card-hover shadow-xs cursor-pointer min-h-[220px] hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
            >
              <div>
                <h3 className="text-xl font-bold text-[#1E1E24] leading-snug tracking-tight mb-2 group-hover:text-[#ED5642] transition-colors duration-300">
                  {services.spa.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5A5A63] leading-relaxed">
                  Russian hardware cuticle care, warm mineral paraffin baths, and organic salt scrubs for total relaxation.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#EAEAEB] flex items-center justify-between text-xs font-bold text-[#ED5642]">
                <span className="text-[#5A5A63] font-semibold">{services.spa.price}</span>
                <span className="flex items-center gap-1.5 group-hover:translate-x-1.5 transition-transform duration-300">
                  <span>Reserve</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Concierge Link */}
        <div className="mt-12 pt-8 border-t border-[#EAEAEB] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5A5A63]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ED5642]" />
            <span className="font-semibold text-[#1E1E24]">
              All Services Available Across 9 Flagship Karachi Branches
            </span>
          </div>

          <a
            href="https://wa.me/923341430303?text=Hi%20Najla’s,%20I%20would%20like%20to%20inquire%20about%20your%20services%20and%20packages."
            target="_blank"
            rel="noreferrer"
            className="text-[#1EBE5D] font-bold hover:underline flex items-center gap-1.5"
          >
            <span>WhatsApp Appointment Desk: 0334-1430303</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Detail Modal on Click */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="relative max-w-lg w-full bg-white p-7 sm:p-9 border border-[#EAEAEB] rounded-3xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 w-8 h-8 bg-[#F7F7F8] hover:bg-[#ED5642] hover:text-white flex items-center justify-center rounded-full transition-colors cursor-pointer border border-[#EAEAEB]"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="aspect-[16/10] w-full bg-[#F7F7F8] border border-[#EAEAEB] rounded-2xl overflow-hidden mb-6">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ED5642]">
                {selectedService.category}
              </span>
              <span className="text-lg font-bold text-[#1E1E24]">
                {selectedService.price}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-[#1E1E24] mb-3">
              {selectedService.title}
            </h3>

            <p className="text-sm text-[#5A5A63] leading-relaxed mb-6">
              {selectedService.description}
            </p>

            {/* Features checkmarks */}
            {selectedService.features && (
              <div className="grid grid-cols-2 gap-2 mb-6 text-xs text-[#1E1E24] font-semibold bg-[#F7F7F8] p-3.5 border border-[#EAEAEB] rounded-2xl">
                {selectedService.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#ED5642]" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="flex items-center gap-3">
              <button
                onClick={() => handleBookNow(selectedService)}
                className="flex-1 skinenvy-btn-primary py-3 text-sm"
              >
                Book Appointment
              </button>
              <button
                onClick={() => setSelectedService(null)}
                className="px-6 py-3 border border-[#EAEAEB] rounded-full text-sm font-semibold hover:bg-[#F7F7F8] transition-colors cursor-pointer"
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
