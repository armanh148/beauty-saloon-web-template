import React from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, Check, Heart, Shield, Crown, Clock, ArrowRight, ArrowUpRight, MessageCircle } from 'lucide-react'

export default function BridalDealsPage({ onOpenBooking, onSelectService }) {
  const deals = [
    {
      id: 'barat',
      title: 'Barat Royal Couture Makeover',
      subtitle: 'Signature Bridal Masterpiece',
      price: 'Rs. 45,000',
      tag: 'MOST POPULAR',
      popular: true,
      desc: 'Crafted for timeless majesty under heavy banquet hall chandeliers and photography lights.',
      features: [
        'High-Definition waterproof Airbrush base',
        'Customized 3D luxury silk/mink eyelashes',
        'Dupatta setting & heavy jewelry fixation',
        'Bridal hairstyle with hair padding & fresh florals',
        'Luxury lip color & touchup emergency kit',
        'Access to Private VIP Bridal Dressing Suite',
      ],
      cosmetics: 'MAC, Charlotte Tilbury, NARS, Huda Beauty',
    },
    {
      id: 'walima',
      title: 'Walima Dewy Elegance Package',
      subtitle: 'Soft Contemporary Glamour',
      price: 'Rs. 40,000',
      tag: 'TRENDING GLOW',
      popular: false,
      desc: 'Ethereal glass-skin finish with soft sculpting and red-carpet Hollywood curls or modern textured updos.',
      features: [
        'Dewy luminous skin prep & derma glow primer',
        'Soft smokey eye or metallic shimmer couture',
        'Hollywood waves or customized texture styling',
        'Veil pinning, dupatta drapery, and brooch setting',
        'Full body shimmer & décolletage illumination',
        'Dedicated bridal assistant throughout session',
      ],
      cosmetics: 'Charlotte Tilbury, Dior Backstage, Tom Ford',
    },
    {
      id: 'mehndi',
      title: 'Mehndi & Mayon Festive Package',
      subtitle: 'Vibrant Ethnic Beauty',
      price: 'Rs. 30,000',
      tag: 'ETHNIC CHIC',
      popular: false,
      desc: 'Breathable, sweat-resistant festive makeup with vibrant colorful details and fresh floral adornments.',
      features: [
        'Lightweight long-wear breathable foundation',
        'Intricate traditional braided or open floral hair',
        'Fresh coral/peach cheek & lip tint',
        'Gota & matha patti secure fixation',
        'Complimentary glitter nail polish application',
      ],
      cosmetics: 'Fenty Beauty, Urban Decay, MAC Cosmetics',
    },
    {
      id: 'complete-3day',
      title: 'Complete 3-Day Grand Bridal Extravaganza',
      subtitle: 'All-Inclusive Wedding Deal',
      price: 'Rs. 95,000',
      originalPrice: 'Rs. 115,000',
      tag: 'SAVE RS. 20,000',
      popular: true,
      desc: 'The ultimate all-inclusive bridal luxury journey across Barat, Walima, and Mehndi ceremonies.',
      features: [
        'Barat Royal Couture Makeover (Master Director)',
        'Walima Dewy Elegance Luxury Makeover',
        'Mehndi / Mayon Festive Traditional Glam',
        'FREE 7-Step Original HydraFacial MD® Session',
        'FREE Whitening Collagen Spa Manicure & Pedicure',
        'VIP Private Suite booking guaranteed for all 3 days',
      ],
      cosmetics: 'Exclusive Premium International Suite',
    },
  ]

  const bridalPerks = [
    {
      icon: Crown,
      title: 'Private VIP Bridal Suites',
      desc: 'Soundproof dressing rooms equipped with Hollywood vanity mirrors, personal bathroom, and bridal helper.',
    },
    {
      icon: Shield,
      title: '16-Hour Airbrush Guarantee',
      desc: 'Sweat-resistant, tear-proof, and humidity-proof base designed specifically for Karachi weather.',
    },
    {
      icon: Sparkles,
      title: 'Pre-Wedding Skin Roadmap',
      desc: 'Complimentary consultation 30 days before wedding to align skincare, facials, and makeup shades.',
    },
    {
      icon: Heart,
      title: '50,000+ Verified Brides',
      desc: 'Over 25 years of making Karachi brides look and feel like absolute royalty on their wedding day.',
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
              <span>BRIDAL PACKAGES</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#1E1E24] leading-[1.12] tracking-tight mb-4 sm:mb-6">
              Karachi’s Benchmark in Bespoke Bridal Makeovers & Packages.
            </h1>
            <p className="text-sm sm:text-lg text-[#5A5A63] leading-relaxed max-w-3xl">
              From majestic Barat couture to modern dewy Walima glam, discover our signature packages crafted with authentic international cosmetics and dedicated VIP suite care.
            </p>
          </div>
        </div>
      </section>

      {/* Bridal Packages Grid */}
      <section className="py-12 sm:py-24 border-b border-[#EAEAEB]">
        <div className="w-full px-4 sm:px-10 lg:px-14">
          <div className="max-w-2xl mb-8 sm:mb-16 scroll-reveal">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ED5642] block mb-2 sm:mb-3">
              SIGNATURE PACKAGES
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1E1E24] leading-[1.15] tracking-tight">
              Select your wedding ceremony deal.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch">
            {deals.map((deal, idx) => {
              const delayClass = `scroll-reveal-delay-${idx + 1}`
              return (
                <div
                  key={deal.id}
                  className={`scroll-reveal ${delayClass} p-4 sm:p-5 lg:p-4 xl:p-6 rounded-2xl sm:rounded-3xl flex flex-col justify-between border transition-all duration-300 group card-hover hover:-translate-y-2 hover:shadow-xl ${
                    deal.popular
                      ? 'bg-white border-[#ED5642] shadow-sm hover:border-[#ED5642]'
                      : 'bg-white border-[#EAEAEB] hover:border-[#ED5642]/60'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3 sm:mb-4 gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-[#ED5642] px-2.5 py-1 rounded-full shadow-xs">
                        {deal.tag}
                      </span>
                      {deal.originalPrice && (
                        <span className="text-xs text-[#8B8B93] line-through">
                          {deal.originalPrice}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg xl:text-xl font-bold text-[#1E1E24] mb-1 leading-snug group-hover:text-[#ED5642] transition-colors duration-300">
                      {deal.title}
                    </h3>
                    <span className="text-xs font-semibold text-[#ED5642] block mb-2 sm:mb-2.5">
                      {deal.subtitle}
                    </span>
                    <p className="text-xs text-[#5A5A63] leading-relaxed mb-4 sm:mb-5 group-hover:text-[#1E1E24] transition-colors duration-300">
                      {deal.desc}
                    </p>

                    {/* Price */}
                    <div className="mb-4 sm:mb-6 pb-3 sm:pb-4 border-t border-b border-[#EAEAEB] pt-3 sm:pt-4">
                      <span className="text-[10px] uppercase text-[#8B8B93] block font-semibold">Package Investment</span>
                      <span className="text-2xl xl:text-3xl font-extrabold text-[#1E1E24] group-hover:text-[#ED5642] transition-colors">{deal.price}</span>
                    </div>

                    {/* Inclusions */}
                    <div className="mb-4 sm:mb-6">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#1E1E24] block mb-2 sm:mb-2.5">
                        Package Inclusions:
                      </span>
                      <div className="flex flex-col gap-2">
                        {deal.features.map((feat, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-[#5A5A63] group-hover:text-[#1E1E24] transition-colors">
                            <Check className="w-3.5 h-3.5 text-[#ED5642] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                            <span className="leading-tight">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="text-[10px] xl:text-[11px] text-[#8B8B93] mb-4 sm:mb-6">
                      <strong className="text-[#1E1E24]">Cosmetics:</strong> {deal.cosmetics}
                    </div>
                  </div>

                  <div className="pt-3 sm:pt-4 border-t border-[#EAEAEB] flex items-center gap-2">
                    <button
                      onClick={() => onSelectService({ title: deal.title, price: deal.price })}
                      className="flex-1 skinenvy-btn-primary rounded-full text-xs h-11 px-3 flex items-center justify-center font-bold cursor-pointer hover:shadow-lg transition-all duration-300"
                    >
                      Reserve Date
                    </button>
                    <a
                      href={`https://wa.me/923341430303?text=Hi%20Najla's,%20I%20am%20interested%20in%20the%20${encodeURIComponent(deal.title)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-11 h-11 bg-[#F7F7F8] hover:bg-[#1EBE5D] hover:text-white border border-[#EAEAEB] hover:border-[#1EBE5D] rounded-full flex items-center justify-center text-[#1EBE5D] cursor-pointer flex-shrink-0 transition-all duration-300 shadow-2xs"
                      title="Ask on WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* The Najla's Bridal VIP Difference */}
      <section className="py-12 sm:py-24 border-b border-[#EAEAEB] bg-white">
        <div className="w-full px-4 sm:px-10 lg:px-14">
          <div className="max-w-2xl mb-8 sm:mb-16 scroll-reveal">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ED5642] block mb-2 sm:mb-3">
              THE BRIDAL SUITE ADVANTAGE
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1E1E24] leading-[1.15] tracking-tight">
              An unhurried sanctuary on your most memorable day.
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {bridalPerks.map((p, idx) => {
              const Icon = p.icon
              const delayClass = `scroll-reveal-delay-${idx + 1}`
              return (
                <div
                  key={idx}
                  className={`scroll-reveal ${delayClass} bg-[#F7F7F8] hover:bg-white p-3.5 sm:p-8 rounded-xl sm:rounded-2xl border border-[#EAEAEB] hover:border-[#ED5642]/50 flex flex-col justify-between card-hover hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 group cursor-default`}
                >
                  <div>
                    <div className="w-9 h-9 sm:w-12 sm:h-12 bg-white text-[#ED5642] flex items-center justify-center rounded-lg sm:rounded-xl border border-[#EAEAEB] mb-3 sm:mb-6 shadow-xs group-hover:bg-[#ED5642] group-hover:text-white group-hover:scale-105 transition-all duration-300">
                      <Icon className="w-4 h-4 sm:w-6 sm:h-6" />
                    </div>
                    <h4 className="text-sm sm:text-lg font-bold text-[#1E1E24] mb-1 sm:mb-2 group-hover:text-[#ED5642] transition-colors duration-300">{p.title}</h4>
                    <p className="text-[11px] sm:text-xs text-[#5A5A63] leading-relaxed group-hover:text-[#1E1E24] transition-colors duration-300">{p.desc}</p>
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
