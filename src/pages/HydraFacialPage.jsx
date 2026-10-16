import React from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, Check, Droplets, Shield, Clock, Zap, ArrowRight, ArrowUpRight } from 'lucide-react'

export default function HydraFacialPage({ onOpenBooking, onSelectService }) {
  const steps = [
    {
      num: '01',
      title: 'Vortex Cleansing & Exfoliation',
      desc: 'Gentle vacuum suction sweeps away dead surface skin cells and environmental sebum build-up.',
    },
    {
      num: '02',
      title: 'Salicylic & Glycolic Acid Peel',
      desc: 'Mild dermatological acid solution loosens deep pore impurities without post-peel scaling or irritation.',
    },
    {
      num: '03',
      title: 'Painless Vortex Extractions',
      desc: 'Automated spiral suction painlessly lifts blackheads, whiteheads, and stubborn comedones.',
    },
    {
      num: '04',
      title: 'Hyaluronic Acid Hydro-Fusion',
      desc: 'Drenches dehydrated dermal layers with medical-grade multi-molecular weight hyaluronic acid.',
    },
    {
      num: '05',
      title: 'Antioxidant & Peptide Infusion',
      desc: 'Fortifies the skin barrier against Karachi air pollution and UV photo-aging using botanical peptides.',
    },
    {
      num: '06',
      title: 'Medical LED Phototherapy',
      desc: 'Red light stimulates collagen fibroblasts, while blue light destroys acne-causing bacteria.',
    },
    {
      num: '07',
      title: 'Derma-Seal & Sun Armor',
      desc: 'Locks in moisture with a mineral peptide shield and broad-spectrum SPF 50+ protection.',
    },
  ]

  const packages = [
    {
      title: 'HydraFacial MD® Classic Glow',
      duration: '45 Minutes',
      price: 'Rs. 6,500',
      tag: 'ESSENTIAL',
      desc: 'Core 4-step deep pore cleansing, hydro-exfoliation, and antioxidant hydration lock.',
    },
    {
      title: 'HydraFacial MD® 7-Step Signature Vortex',
      duration: '60 Minutes',
      price: 'Rs. 8,500',
      popular: true,
      tag: 'MOST POPULAR',
      desc: 'Full 7-step medical-grade protocol including LED light therapy and ultrasonic peptide infusion.',
    },
    {
      title: 'HydraFacial MD® Platinum Bridal Booster',
      duration: '75 Minutes',
      price: 'Rs. 12,000',
      tag: 'BRIDAL GLOW',
      desc: '7-step protocol elevated with customized stem-cell growth factor ampoules and derma whitening glow mask.',
    },
    {
      title: '3-Session Bridal Glow Series Package',
      duration: '3 Monthly Sessions',
      price: 'Rs. 22,000',
      originalPrice: 'Rs. 25,500',
      tag: 'SAVE RS. 3,500',
      desc: 'Scheduled 60, 30, and 7 days prior to wedding to guarantee completely flawless makeup canvas.',
    },
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <section className="bg-white border-b border-[#EAEAEB] py-16 sm:py-24">
        <div className="w-full px-6 sm:px-10 lg:px-14">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ED5642] mb-4">
              <Link to="/" className="hover:underline text-[#5A5A63]">HOME</Link>
              <span>/</span>
              <span>CLINICAL SKINCARE</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-[#1E1E24] leading-[1.1] tracking-tight mb-6">
              Original HydraFacial MD® 7-Step Vortex Clinical Skincare.
            </h1>
            <p className="text-base sm:text-lg text-[#5A5A63] leading-relaxed max-w-3xl">
              Experience the world’s most celebrated medical facial. Painless extraction, deep cellular hydration, and immediate red-carpet glass skin glow with zero downtime.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Visual & Feature Row */}
      <section className="py-24 sm:py-32 border-b border-[#EAEAEB] bg-white">
        <div className="w-full px-6 sm:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 overflow-hidden border border-[#EAEAEB] aspect-[4/3] bg-[#EAEAEB]">
              <img
                src="https://cdn.prod.website-files.com/69db201b114de85f9288b638/69db201b114de85f9288b722_Blog%20Image%206.jpg"
                alt="HydraFacial MD Treatment at Najla's"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="lg:col-span-6 flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ED5642] block mb-3">
                PATENTED TECHNOLOGY
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-[#1E1E24] leading-[1.12] tracking-tight mb-6">
                Why Karachi brides swear by HydraFacial MD.
              </h2>
              <p className="text-base text-[#5A5A63] leading-relaxed mb-8">
                Karachi’s coastal humidity and urban dust clog pores and accelerate premature dullness. HydraFacial MD is the only hydra-dermabrasion procedure that uses patented Vortex-Fusion technology to simultaneously vacuum impurities while infusing medical antioxidants.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-bold text-[#1E1E24]">
                <div className="p-4 bg-[#F7F7F8] border border-[#EAEAEB]">
                  <span className="text-lg font-extrabold text-[#ED5642] block mb-1">0 Days</span>
                  <span>Zero Downtime or Redness</span>
                </div>
                <div className="p-4 bg-[#F7F7F8] border border-[#EAEAEB]">
                  <span className="text-lg font-extrabold text-[#ED5642] block mb-1">30+ Days</span>
                  <span>Lasting Dewy Moisture</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7-Step Protocol Breakdown */}
      <section className="py-24 sm:py-32 border-b border-[#EAEAEB] bg-white">
        <div className="w-full px-6 sm:px-10 lg:px-14">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ED5642] block mb-3">
              THE 7-STEP PROTOCOL
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#1E1E24] leading-[1.12] tracking-tight">
              A comprehensive clinical facial tailored for maximum luminosity.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, idx) => (
              <div key={idx} className="bg-white p-7 border border-[#EAEAEB] flex flex-col justify-between card-hover">
                <div>
                  <span className="text-2xl font-extrabold text-[#ED5642] block mb-3">{st.num}</span>
                  <h4 className="text-base font-bold text-[#1E1E24] mb-2">{st.title}</h4>
                  <p className="text-xs text-[#5A5A63] leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HydraFacial Packages */}
      <section className="py-24 sm:py-32 border-b border-[#EAEAEB] bg-white">
        <div className="w-full px-6 sm:px-10 lg:px-14">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ED5642] block mb-3">
              HYDRAFACIAL RATES
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#1E1E24] leading-[1.12] tracking-tight">
              Select your clinical treatment level.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`p-7 border flex flex-col justify-between ${
                  pkg.popular
                    ? 'bg-white border-[#ED5642] shadow-md'
                    : 'bg-[#F7F7F8] border-[#EAEAEB]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-[#ED5642] px-2.5 py-0.5">
                      {pkg.tag}
                    </span>
                    <span className="text-xs text-[#8B8B93] flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#ED5642]" />
                      <span>{pkg.duration}</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#1E1E24] mb-2 leading-snug">
                    {pkg.title}
                  </h3>

                  <p className="text-xs text-[#5A5A63] leading-relaxed mb-6">
                    {pkg.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EAEAEB]">
                  <div className="text-xl font-extrabold text-[#1E1E24] mb-4">{pkg.price}</div>
                  <button
                    onClick={() => onSelectService({ title: pkg.title, price: pkg.price })}
                    className="w-full skinenvy-btn-dark text-xs py-2.5 text-center cursor-pointer"
                  >
                    Book Treatment
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
