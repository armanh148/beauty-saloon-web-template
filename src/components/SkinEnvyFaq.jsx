import React, { useState } from 'react'
import { Plus, Minus, ArrowRight, MessageCircle } from 'lucide-react'

export default function SkinEnvyFaq({ onOpenBooking }) {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      q: 'What signature services & treatments does Najla’s provide?',
      a: 'We offer full-spectrum luxury beauty care: bespoke bridal makeovers (Barat, Walima, Mehndi), clinical HydraFacial MD treatments, 100% organic Nanoplastia & keratin hair smoothing, balayage hair color artistry, whitening spa manicures/pedicures, and certified cosmetology courses.',
    },
    {
      q: 'How early should I book my bridal appointment for wedding season?',
      a: 'For peak wedding months (October to April), we recommend reserving your Barat, Walima, or Mehndi signature bridal dates at least 4 to 8 weeks in advance to secure senior master artists, hair specialists, and private VIP bridal suites.',
    },
    {
      q: 'Is HydraFacial MD safe for sensitive or acne-prone skin?',
      a: 'Yes, absolutely. Our certified clinical estheticians adjust the vortex suction intensity and infuse tailored medical-grade serums containing salicylic acid, hyaluronic acid, and botanical antioxidants to clear congestion without redness or downtime.',
    },
    {
      q: 'Are your hair treatments like Nanoplastia 100% formaldehyde-free?',
      a: 'Yes. Our Nanoplastia treatment is 100% formaldehyde-free and uses organic amino acids, collagen, and vegetal nutrients that penetrate the hair cortex to restore strength, eliminate humidity frizz, and deliver sleek mirror shine for up to 6–8 months.',
    },
    {
      q: 'Can I get a customized bridal trial & skin consultation beforehand?',
      a: 'Certainly. We invite prospective brides for a personalized one-on-one consultation where our senior stylists analyze your skin type, wedding attire, jewelry aesthetic, and ceremony lighting to design your bespoke look.',
    },
    {
      q: 'Does Najla’s Institute offer Sindh Board recognized beautician diplomas?',
      a: 'Yes! Najla’s Beauty Institute is recognized by the Sindh Board of Technical Education. We provide comprehensive 3-month and 6-month hands-on diplomas in Cosmetology, Advanced Hair Artistry, and Professional Makeup Artistry.',
    },
    {
      q: 'How do I book an appointment or get in touch with your concierge?',
      a: 'You can book directly through our online reservation form on this website, call our central Karachi helpline at 0334-1430303, or message us directly on WhatsApp for instant booking confirmation.',
    },
  ]

  const avatars = [
    'https://cdn.prod.website-files.com/69db201b114de85f9288b638/69db201b114de85f9288b744_Team%20Image%208.jpg',
    'https://cdn.prod.website-files.com/69db201b114de85f9288b638/69db201b114de85f9288b75c_Team%20image.jpg',
    'https://cdn.prod.website-files.com/69db201b114de85f9288b638/69db201b114de85f9288b743_Team%20Image%206.jpg',
  ]

  return (
    <section id="faq" className="w-full py-20 sm:py-28 bg-white border-b border-[#EAEAEB]">
      <div className="w-full px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* ================= LEFT COLUMN: HEADER & STILL HAVE QUESTIONS CARD ================= */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full scroll-reveal-left">
            <div>
              {/* Header strictly matching reference image typography */}
              <h2 className="text-3xl sm:text-5xl lg:text-[3.2rem] font-bold text-[#1E1E24] leading-[1.12] tracking-tight mb-4">
                Frequently asked questions
              </h2>

              <p className="text-sm sm:text-base text-[#5A5A63] leading-relaxed max-w-md mb-10">
                Find quick answers to common questions about our services, bridal packages, pricing, and appointments across Karachi.
              </p>
            </div>

            {/* "Still have questions?" Card matching user's layout & styled to theme */}
            <div className="bg-[#1E1E24] text-white p-7 sm:p-9 rounded-3xl border border-[#28282F] shadow-lg max-w-md mt-4 hover:border-[#ED5642]/60 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-400 group">
              {/* Avatar Cluster + "+ You" Pill */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex -space-x-3">
                  {avatars.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt="Consultant"
                      className="w-10 h-10 rounded-full object-cover border-2 border-[#1E1E24] group-hover:border-[#ED5642] transition-colors"
                    />
                  ))}
                </div>
                <span className="text-[11px] font-bold tracking-wide uppercase px-3 py-1 bg-white/10 text-white rounded-full border border-white/15 group-hover:border-[#ED5642] group-hover:text-[#ED5642] transition-colors">
                  + You
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-white">
                Still have questions?
              </h3>
              <p className="text-xs sm:text-sm text-[#DDDDDF] mb-6 leading-relaxed">
                Reach out, and our expert bridal and clinic team will guide you.
              </p>

              {/* Action Button */}
              <a
                href="https://wa.me/923341430303?text=Hi%20Najla's,%20I%20have%20a%20question%20regarding%20services"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-between w-full bg-[#28282F] hover:bg-[#ED5642] text-white px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 border border-white/15 group-hover:border-transparent cursor-pointer shadow-sm hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-[#1EBE5D] group-hover:text-white transition-colors" />
                  <span>Talk to our team</span>
                </div>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: NUMBERED ACCORDION ================= */}
          <div className="lg:col-span-7 flex flex-col gap-3 sm:gap-4 scroll-reveal-right delay-200">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx
              const number = idx + 1

              return (
                <div
                  key={idx}
                  className={`transition-all duration-300 rounded-2xl overflow-hidden border ${
                    isOpen
                      ? 'bg-[#1E1E24] text-white border-[#1E1E24] shadow-md -translate-y-1'
                      : 'bg-[#F7F7F8]/60 hover:bg-white text-[#1E1E24] border-[#EAEAEB] hover:border-[#ED5642]/50 hover:shadow-md hover:-translate-y-0.5'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer group"
                  >
                    <span
                      className={`font-bold text-base sm:text-lg tracking-tight transition-colors ${
                        isOpen ? 'text-white' : 'text-[#1E1E24] group-hover:text-[#ED5642]'
                      }`}
                    >
                      {number}. {faq.q}
                    </span>

                    <div className="flex-shrink-0 ml-2">
                      {isOpen ? (
                        <Minus className="w-5 h-5 text-white transform rotate-180 transition-transform duration-300" />
                      ) : (
                        <Plus className="w-5 h-5 text-[#8B8B93] group-hover:text-[#ED5642] group-hover:rotate-90 transition-all duration-300" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-[#DDDDDF] leading-relaxed border-t border-white/10 pt-4 animate-fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
