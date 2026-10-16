import React from 'react'
import { Sparkles, ArrowUpRight } from 'lucide-react'

export default function SkinEnvyWhyUs({ onOpenBooking }) {
  const cards = [
    {
      title: 'Couture Bridal Artistry',
      description:
        'Personalized bridal looks crafted by master artists using authentic MAC, Charlotte Tilbury, Huda Beauty, and NARS cosmetics.',
      image:
        'https://cdn.prod.website-files.com/69db201b114de85f9288b627/69db201b114de85f9288b7df_Why%20Us%20Image%204.webp',
    },
    {
      title: 'Clinical Skincare',
      description:
        'Original HydraFacial MD 7-step protocols, derma whitening glo infusions, and customized collagen therapy in sanitized suites.',
      image:
        'https://cdn.prod.website-files.com/69db201b114de85f9288b627/69db201b114de85f9288b7db_Why%20Us%20Image%203.webp',
    },
    {
      title: 'Master Hair Sculptors',
      description:
        'Organic Nanoplastia, French dimensional balayage, Extenso rebonding, and protein repair treatments tailored to your hair texture.',
      image:
        'https://cdn.prod.website-files.com/69db201b114de85f9288b627/69db201b114de85f9288b7e2_Why%20Us%20Image%202.webp',
    },
    {
      title: '9 Prime Karachi Salons',
      description:
        'Centrally situated across Tariq Road, Gulshan, Hyderi, Jauhar, Malir Cantt & Safoora with dedicated VIP bridal lounges.',
      image:
        'https://cdn.prod.website-files.com/69db201b114de85f9288b627/69db201b114de85f9288b7de_Why%20Us%20Image%201.webp',
    },
  ]

  return (
    <section id="why-us" className="bg-white text-[#1E1E24] py-24 sm:py-32 overflow-hidden border-b border-[#EAEAEB]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ED5642] block mb-3">
              WHY KARACHI TRUSTS NAJLA’S
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#1E1E24] leading-[1.12] tracking-tight">
              Uncompromising beauty standards across every appointment.
            </h2>
          </div>

          <button
            onClick={onOpenBooking}
            className="skinenvy-btn-primary flex items-center gap-2 group w-fit shadow-md"
          >
            <span>Book Your Session</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* 4 Interactive Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#F7F7F8] border border-[#EAEAEB] overflow-hidden flex flex-col justify-between group card-hover p-6 sm:p-7"
            >
              <div>
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden mb-6 bg-[#EAEAEB]">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                </div>

                {/* Content */}
                <h4 className="text-xl font-bold text-[#1E1E24] mb-2 group-hover:text-[#ED5642] transition-colors">
                  {card.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#5A5A63] leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EAEAEB] flex items-center justify-between text-xs font-bold text-[#ED5642]">
                <span>0{idx + 1}</span>
                <span className="w-6 h-[1px] bg-[#ED5642]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


