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
      <section className="bg-white border-b border-[#EAEAEB] py-10 sm:py-20">
        <div className="w-full px-4 sm:px-10 lg:px-14">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ED5642] mb-3">
              <Link to="/" className="hover:underline text-[#5A5A63]">HOME</Link>
              <span>/</span>
              <span>CLINICAL SKINCARE</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#1E1E24] leading-[1.12] tracking-tight mb-4 sm:mb-6">
              Original HydraFacial MD® 7-Step Vortex Clinical Skincare.
            </h1>
            <p className="text-sm sm:text-lg text-[#5A5A63] leading-relaxed max-w-3xl">
              Experience the world’s most celebrated medical facial. Painless extraction, deep cellular hydration, and immediate red-carpet glass skin glow with zero downtime.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Visual & Feature Row */}
      <section className="py-12 sm:py-24 border-b border-[#EAEAEB] bg-white overflow-hidden">
        <div className="w-full px-4 sm:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-6 overflow-hidden rounded-2xl sm:rounded-3xl border border-[#EAEAEB] group aspect-[16/10] sm:aspect-[4/3] bg-[#EAEAEB] shadow-md hover:shadow-2xl hover:border-[#ED5642]/40 transition-all duration-500 scroll-reveal-left">
              <img
                src="https://cdn.prod.website-files.com/69db201b114de85f9288b638/69db201b114de85f9288b722_Blog%20Image%206.jpg"
                alt="HydraFacial MD Treatment at Najla's"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-105"
              />
            </div>

            <div className="lg:col-span-6 flex flex-col justify-center scroll-reveal-right delay-200">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ED5642] block mb-2 sm:mb-3">
                PATENTED TECHNOLOGY
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1E1E24] leading-[1.15] tracking-tight mb-4 sm:mb-6">
                Why Karachi brides swear by HydraFacial MD.
              </h2>
              <p className="text-sm sm:text-base text-[#5A5A63] leading-relaxed mb-6 sm:mb-8">
                Karachi’s coastal humidity and urban dust clog pores and accelerate premature dullness. HydraFacial MD is the only hydra-dermabrasion procedure that uses patented Vortex-Fusion technology to simultaneously vacuum impurities while infusing medical antioxidants.
              </p>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 text-xs font-bold text-[#1E1E24]">
                <div className="p-3.5 sm:p-4 bg-[#F7F7F8] hover:bg-white border border-[#EAEAEB] hover:border-[#ED5642]/40 rounded-xl sm:rounded-2xl transition-all duration-300 card-hover">
                  <span className="text-base sm:text-lg font-extrabold text-[#ED5642] block mb-0.5 sm:mb-1">0 Days</span>
                  <span className="text-[11px] sm:text-xs">Zero Downtime or Redness</span>
                </div>
                <div className="p-3.5 sm:p-4 bg-[#F7F7F8] hover:bg-white border border-[#EAEAEB] hover:border-[#ED5642]/40 rounded-xl sm:rounded-2xl transition-all duration-300 card-hover">
                  <span className="text-base sm:text-lg font-extrabold text-[#ED5642] block mb-0.5 sm:mb-1">30+ Days</span>
                  <span className="text-[11px] sm:text-xs">Lasting Dewy Moisture</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7-Step Protocol Breakdown */}
      <section className="py-12 sm:py-24 border-b border-[#EAEAEB] bg-white">
        <div className="w-full px-4 sm:px-10 lg:px-14">
          <div className="max-w-2xl mb-8 sm:mb-16 scroll-reveal">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ED5642] block mb-2 sm:mb-3">
              THE 7-STEP PROTOCOL
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1E1E24] leading-[1.15] tracking-tight">
              A comprehensive clinical facial tailored for maximum luminosity.
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {steps.map((st, idx) => {
              const delayClass = `scroll-reveal-delay-${(idx % 4) + 1}`
              const isLast = idx === steps.length - 1
              return (
                <div
                  key={idx}
                  className={`scroll-reveal ${delayClass} ${isLast ? 'col-span-2 sm:col-span-2 lg:col-span-1' : ''} bg-[#F7F7F8] sm:bg-white hover:bg-[#FDF6F4] p-3.5 sm:p-7 rounded-xl sm:rounded-2xl border border-[#EAEAEB] hover:border-[#ED5642]/50 flex flex-col justify-between card-hover hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 group cursor-default`}
                >
                  <div>
                    <span className="text-lg sm:text-2xl font-extrabold text-[#ED5642] block mb-1.5 sm:mb-3">{st.num}</span>
                    <h4 className="text-xs sm:text-base font-bold text-[#1E1E24] mb-1 sm:mb-2 group-hover:text-[#ED5642] transition-colors duration-300">{st.title}</h4>
                    <p className="text-[11px] sm:text-xs text-[#5A5A63] leading-relaxed group-hover:text-[#1E1E24] transition-colors duration-300">{st.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* HydraFacial Packages */}
      <section className="py-12 sm:py-24 border-b border-[#EAEAEB] bg-white">
        <div className="w-full px-4 sm:px-10 lg:px-14">
          <div className="max-w-2xl mb-8 sm:mb-16 scroll-reveal">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ED5642] block mb-2 sm:mb-3">
              HYDRAFACIAL RATES
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1E1E24] leading-[1.15] tracking-tight">
              Select your clinical treatment level.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch">
            {packages.map((pkg, idx) => {
              const delayClass = `scroll-reveal-delay-${idx + 1}`
              return (
                <div
                  key={idx}
                  className={`scroll-reveal ${delayClass} p-4 sm:p-7 rounded-2xl sm:rounded-3xl border flex flex-col justify-between transition-all duration-300 card-hover hover:-translate-y-2 hover:shadow-xl group ${
                    pkg.popular
                      ? 'bg-white border-[#ED5642] shadow-sm hover:border-[#ED5642]'
                      : 'bg-[#F7F7F8] hover:bg-white border-[#EAEAEB] hover:border-[#ED5642]/50'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-[#ED5642] px-2.5 py-1 rounded-full shadow-xs">
                        {pkg.tag}
                      </span>
                      <span className="text-xs text-[#8B8B93] flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#ED5642]" />
                        <span>{pkg.duration}</span>
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#1E1E24] mb-2 leading-snug group-hover:text-[#ED5642] transition-colors duration-300">
                      {pkg.title}
                    </h3>

                    <p className="text-xs text-[#5A5A63] leading-relaxed mb-4 sm:mb-6 group-hover:text-[#1E1E24] transition-colors duration-300">
                      {pkg.desc}
                    </p>
                  </div>

                  <div className="pt-3 sm:pt-4 border-t border-[#EAEAEB]">
                    <div className="text-xl font-extrabold text-[#1E1E24] mb-3 sm:mb-4 group-hover:text-[#ED5642] transition-colors">{pkg.price}</div>
                    <button
                      onClick={() => onSelectService({ title: pkg.title, price: pkg.price })}
                      className="w-full skinenvy-btn-dark rounded-full text-xs h-11 flex items-center justify-center font-bold cursor-pointer hover:bg-[#ED5642] hover:border-[#ED5642] hover:shadow-lg transition-all duration-300"
                    >
                      Book Treatment
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

    </div>
  )
}
