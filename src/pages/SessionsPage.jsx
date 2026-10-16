import React from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, Clock, Calendar, Check, ArrowRight, ArrowUpRight } from 'lucide-react'
import NajlaSessionsSection from '../components/NajlaSessionsSection'
import SkinEnvyCta from '../components/SkinEnvyCta'

export default function SessionsPage({ onOpenBooking, onSelectService }) {
  const specializedSessions = [
    {
      id: 1,
      title: 'Derma Renewal & Cellular Glow Session',
      duration: '90 Minutes',
      price: 'Rs. 12,500',
      tag: 'Clinical Rejuvenation',
      desc: 'Triple-action enzymatic micro-peel combined with ultrasonic peptide infusion, cryo-firming wand massage, and customized alginate marine mask for tired or hyperpigmented skin.',
      includes: [
        'Skin moisture barrier diagnostic',
        'Enzymatic double cleanse & steam',
        'Ultrasonic peptide deep infusion',
        'Cryo globe lymphatic contouring',
      ],
      image: 'https://cdn.prod.website-files.com/69db201b114de85f9288b627/69db201b114de85f9288b7bd_About%20Image%201.webp',
    },
    {
      id: 2,
      title: 'Anti-Stress Scalp & Hair Restoration Ritual',
      duration: '75 Minutes',
      price: 'Rs. 8,500',
      tag: 'Hair Wellness',
      desc: 'Therapeutic pressure-point scalp massage using warm organic botanical oils, high-frequency ozone therapy for microcirculation, and deep keratin protein hair steam bath.',
      includes: [
        'Ayurvedic warm oil scalp massage',
        'High-frequency stimulating therapy',
        'Ozone micro-mist deep condition',
        'Blowdry & organic serum finish',
      ],
      image: 'https://cdn.prod.website-files.com/69db201b114de85f9288b627/69db201b114de85f9288b7be_About%20Image%202.webp',
    },
    {
      id: 3,
      title: 'Pre-Bridal Full Body Detox & Polishing Spa',
      duration: '120 Minutes',
      price: 'Rs. 16,000',
      tag: 'Bridal Pampering',
      desc: 'The ultimate pre-wedding ritual. Full body sea salt exfoliation, saffron-infused brightening body wrap, and hot stone hydro-massage for satiny-smooth all-over radiance.',
      includes: [
        'Himalayan sea-salt body polish',
        'Brightening saffron hydro-pack',
        'Heated stone restorative massage',
        'Full body hydration lock',
      ],
      image: 'https://cdn.prod.website-files.com/69db201b114de85f9288b627/69db201b114de85f9288b7e2_Why%20Us%20Image%202.webp',
    },
    {
      id: 4,
      title: 'Express Red Carpet Radiance Session',
      duration: '45 Minutes',
      price: 'Rs. 7,000',
      tag: 'Event Ready',
      desc: 'Designed for high-profile evenings and family gatherings. Instant oxygen mist jet, fast-acting hyaluronic lifting mask, and cooling jade stone facial depuffing.',
      includes: [
        'Hyperbaric oxygen jet peel',
        'Instant flash lifting ampoule',
        'Contour jade stone drainage',
        'Velvet primer preparation',
      ],
      image: 'https://cdn.prod.website-files.com/69db201b114de85f9288b638/69db201b114de85f9288b729_Service%20Image%206.jpg',
    },
  ]

  const workflow = [
    {
      step: '01',
      title: 'Personalized Diagnostic',
      desc: 'Our master therapist analyzes your skin barrier, scalp condition, or bridal timeline.',
    },
    {
      step: '02',
      title: 'Custom Formulation',
      desc: 'Botanical and clinical serums are hand-mixed precisely for your sensitivity and skin needs.',
    },
    {
      step: '03',
      title: 'Dedicated VIP Therapy',
      desc: 'Private, acoustic-dampened therapy suite with heated bed and calming aromatherapeutic ambience.',
    },
    {
      step: '04',
      title: 'Prescribed Aftercare',
      desc: 'Receive tailored home maintenance instructions and post-session protective hydrators.',
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
              <span>EXCLUSIVE SESSIONS</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-[#1E1E24] leading-[1.1] tracking-tight mb-6">
              Curated Therapeutic & Luxury Beauty Sessions.
            </h1>
            <p className="text-base sm:text-lg text-[#5A5A63] leading-relaxed max-w-3xl">
              Escape the frantic pace of Karachi. Immerse yourself in private, bespoke aesthetic sessions combining high-potency clinical actives with deep restorative wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Signature 4-Card Sessions Section */}
      <NajlaSessionsSection
        onOpenBooking={onOpenBooking}
        onSelectService={onSelectService}
      />

      {/* Extended Specialized Sessions Catalog */}
      <section className="py-24 sm:py-32 border-b border-[#EAEAEB] bg-white">
        <div className="w-full px-6 sm:px-10 lg:px-14">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ED5642] block mb-3">
              SPECIALIZED THERAPIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#1E1E24] leading-[1.12] tracking-tight">
              Targeted treatments tailored for specific skin & hair goals.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-4 xl:gap-6 items-stretch">
            {specializedSessions.map((session) => (
              <div
                key={session.id}
                className="bg-[#F7F7F8] border border-[#EAEAEB] p-5 lg:p-4 xl:p-6 flex flex-col justify-between card-hover"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#ED5642] bg-white px-2.5 py-1 border border-[#EAEAEB] rounded-full">
                      {session.tag}
                    </span>
                    <span className="text-xs font-bold text-[#5A5A63] flex items-center gap-1 flex-shrink-0">
                      <Clock className="w-3.5 h-3.5 text-[#ED5642]" />
                      <span>{session.duration}</span>
                    </span>
                  </div>

                  <h3 className="text-lg xl:text-xl font-bold text-[#1E1E24] mb-2.5 leading-snug">
                    {session.title}
                  </h3>

                  <p className="text-xs xl:text-sm text-[#5A5A63] leading-relaxed mb-5">
                    {session.desc}
                  </p>

                  <div className="mb-6 p-3.5 bg-white border border-[#EAEAEB]">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#1E1E24] block mb-2">
                      Session Includes:
                    </span>
                    <div className="flex flex-col gap-1.5 text-xs text-[#5A5A63]">
                      {session.includes.map((inc, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#ED5642] flex-shrink-0 mt-0.5" />
                          <span className="leading-tight">{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-5 border-t border-[#EAEAEB] flex flex-row items-center justify-between gap-2">
                  <div className="flex-shrink-0">
                    <span className="text-[10px] uppercase text-[#8B8B93] block">Investment</span>
                    <span className="text-base sm:text-lg xl:text-xl font-extrabold text-[#1E1E24]">{session.price}</span>
                  </div>

                  <button
                    onClick={() => onSelectService({ title: session.title, price: session.price })}
                    className="skinenvy-btn-primary rounded-full text-xs py-2 px-3.5 sm:px-4 cursor-pointer flex-shrink-0 text-center"
                  >
                    Reserve Session
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Najla's Session Workflow */}
      <section className="py-24 sm:py-32 border-b border-[#EAEAEB] bg-white">
        <div className="w-full px-6 sm:px-10 lg:px-14">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ED5642] block mb-3">
              THE VIP EXPERIENCE
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#1E1E24] leading-[1.12] tracking-tight">
              What to expect during your private session.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflow.map((w, idx) => (
              <div key={idx} className="bg-white p-8 border border-[#EAEAEB] flex flex-col justify-between">
                <div>
                  <span className="text-3xl font-extrabold text-[#ED5642] block mb-4">{w.step}</span>
                  <h4 className="text-lg font-bold text-[#1E1E24] mb-2">{w.title}</h4>
                  <p className="text-xs text-[#5A5A63] leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
