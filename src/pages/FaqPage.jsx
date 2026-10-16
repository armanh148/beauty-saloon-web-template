import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Minus, MessageCircle, Phone, HelpCircle } from 'lucide-react'
import SkinEnvyFaq from '../components/SkinEnvyFaq'
import SkinEnvyCta from '../components/SkinEnvyCta'

export default function FaqPage({ onOpenBooking }) {
  const [openIndex, setOpenIndex] = useState(0)

  const categorizedFaqs = [
    {
      category: 'Bridal Bookings',
      q: 'What is the advance booking policy for signature bridal makeovers?',
      a: 'We require a 50% non-refundable advance deposit to confirm your wedding date and reserve our senior master director and private VIP suite. The remaining balance is payable on the day of the event before service commencement.',
    },
    {
      category: 'Bridal Bookings',
      q: 'Do you offer on-location or home bridal makeup services?',
      a: 'While our signature experience is hosted in our specialized private VIP suites equipped with calibrated vanity lights, we offer on-location services for destination weddings and private residences in Karachi subject to master director availability and travel surcharges.',
    },
    {
      category: 'Clinical Skincare',
      q: 'How many HydraFacial MD sessions are recommended before my wedding?',
      a: 'For brides, we recommend a 3-session roadmap: 8 weeks out (deep extraction & baseline detox), 4 weeks out (collagen boost & hydration), and 5–7 days prior to the wedding (final glass-skin infusion for flawless foundation adhesion).',
    },
    {
      category: 'Hair Treatments',
      q: 'Can I wash or color my hair after an organic Nanoplastia smoothing session?',
      a: 'Unlike traditional harsh relaxers that require 72 hours of dry waiting, organic Nanoplastia is rinsed thoroughly during the session! However, we advise using sulfate-free organic shampoo and waiting at least 10–14 days before any chemical hair bleaching.',
    },
    {
      category: 'Institute Admissions',
      q: 'What are the eligibility criteria for the Sindh Board Beautician Diploma?',
      a: 'Admissions are open to all passionate individuals aged 16 and above. No prior salon experience is necessary as our courses build from foundational hygiene up to advanced bridal and clinical esthetics. Matriculation qualification is preferred for government certification.',
    },
    {
      category: 'Salon Policies',
      q: 'What hygiene and sterilization protocols are observed across Karachi branches?',
      a: 'We enforce hospital-grade sanitation: metal tools undergo medical autoclaving, makeup sponges and mascara wands are single-use, pedicure basins are lined with disposable liners, and all makeup palettes are sanitized with 70% isopropyl alcohol between clients.',
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
              <span>HELP & FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-[#1E1E24] leading-[1.1] tracking-tight mb-6">
              Frequently Asked Questions & Salon Policies.
            </h1>
            <p className="text-base sm:text-lg text-[#5A5A63] leading-relaxed max-w-3xl">
              Everything you need to know regarding bridal appointments, clinical protocols, payments, institute diplomas, and branch hours across Karachi.
            </p>
          </div>
        </div>
      </section>

      {/* Main FAQ Component matching reference layout */}
      <SkinEnvyFaq onOpenBooking={onOpenBooking} />

      {/* Additional Salon Policies & Booking Terms */}
      <section className="py-24 sm:py-32 border-b border-[#EAEAEB] bg-white">
        <div className="w-full px-6 sm:px-10 lg:px-14">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ED5642] block mb-3">
              POLICIES & ADVISORIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#1E1E24] leading-[1.12] tracking-tight">
              Essential guidelines for a seamless salon experience.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categorizedFaqs.map((item, idx) => (
              <div key={idx} className="bg-[#F7F7F8] p-7 sm:p-8 border border-[#EAEAEB] flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#ED5642] bg-white px-2.5 py-0.5 border border-[#EAEAEB] inline-block mb-3">
                    {item.category}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-[#1E1E24] mb-3">
                    {item.q}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5A5A63] leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct WhatsApp Concierge Help Box */}
      <section className="py-20 border-b border-[#EAEAEB] bg-white">
        <div className="w-full px-6 sm:px-10 lg:px-14">
          <div className="bg-[#1E1E24] text-white p-8 sm:p-12 border border-[#28282F] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ED5642] block mb-2">
                STILL HAVE A SPECIFIC QUESTION?
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                Connect directly with our Central Karachi Concierge.
              </h3>
              <p className="text-xs sm:text-sm text-[#DDDDDF]">
                Available daily from 10:30 AM to 08:30 PM across all 9 Karachi branches.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
              <a
                href="https://wa.me/923341430303?text=Hi%20Najla's,%20I%20have%20an%20inquiry"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1EBE5D] hover:bg-[#18a44f] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="tel:03341430303"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#28282F] hover:bg-[#ED5642] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 transition-colors cursor-pointer border border-white/10"
              >
                <Phone className="w-4 h-4" />
                <span>Call 0334-1430303</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
