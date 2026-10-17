import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { InstagramIcon } from './Icons'

export default function SkinEnvyTeam({ onOpenBooking }) {
  const members = [
    {
      name: 'Madame Najla',
      role: 'Founder & Master Aesthetic Director',
      badge: '25+ Yrs Exp.',
      image:
        'https://cdn.prod.website-files.com/69db201b114de85f9288b638/69db201b114de85f9288b744_Team%20Image%208.jpg',
    },
    {
      name: 'Areeba Tariq',
      role: 'Senior Bridal Makeup Artist (PECHS)',
      badge: 'Bridal Specialist',
      image:
        'https://cdn.prod.website-files.com/69db201b114de85f9288b638/69db201b114de85f9288b75c_Team%20image.jpg',
    },
    {
      name: 'Dr. Shahzeen Khan',
      role: 'Clinical Esthetician (HydraFacial MD)',
      badge: 'Dermal Specialist',
      image:
        'https://cdn.prod.website-files.com/69db201b114de85f9288b638/69db201b114de85f9288b743_Team%20Image%206.jpg',
    },
    {
      name: 'Farhan Malik',
      role: 'Master Hair Sculptor & Colorist',
      badge: 'Nanoplastia Pro',
      image:
        'https://cdn.prod.website-files.com/69db201b114de85f9288b638/69db201b114de85f9288b742_Team%20Image%205.jpg',
    },
  ]

  return (
    <section id="team" className="w-full py-20 sm:py-28 bg-white border-b border-[#EAEAEB]">
      <div className="w-full px-6 sm:px-10 lg:px-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 scroll-reveal">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-[#EAEAEB] rounded-full text-xs font-bold uppercase tracking-[0.2em] text-[#ED5642] mb-3 shadow-2xs hover:border-[#ED5642] transition-colors duration-300">
              <span className="w-2 h-2 rounded-full bg-[#ED5642] animate-pulse" />
              MASTER ARTISTS & CLINICIANS
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#1E1E24] leading-[1.15] tracking-tight">
              Meet our certified beauty directors.
            </h2>
          </div>

          <button
            onClick={onOpenBooking}
            className="skinenvy-btn-outline group flex items-center gap-2 text-xs py-2.5 px-6 rounded-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <span>RESERVE WITH A SPECIALIST</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>

        {/* 4 Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {members.map((member, idx) => {
            const delayClass = `scroll-reveal-delay-${idx + 1}`
            return (
              <div
                key={idx}
                className={`scroll-reveal ${delayClass} bg-white rounded-3xl border border-[#EAEAEB] hover:border-[#ED5642]/50 overflow-hidden group card-hover flex flex-col hover:-translate-y-3 hover:shadow-2xl transition-all duration-500`}
              >
                {/* Photo Container */}
                <div className="relative aspect-[3/4] overflow-hidden bg-[#EAEAEB]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110 group-hover:brightness-105"
                  />

                  <span className="absolute top-4 left-4 bg-[#1E1E24]/85 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/10 group-hover:bg-[#ED5642] group-hover:border-[#ED5642] transition-colors duration-300">
                    {member.badge}
                  </span>
                </div>

                {/* Information */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h4 className="text-xl font-bold text-[#1E1E24] mb-1 group-hover:text-[#ED5642] transition-colors duration-300">
                      {member.name}
                    </h4>
                    <p className="text-xs font-semibold text-[#8B8B93] leading-snug group-hover:text-[#5A5A63] transition-colors duration-300">
                      {member.role}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-[#EAEAEB] flex items-center justify-between text-xs text-[#5A5A63]">
                    <span>Karachi Flagship</span>
                    <span className="text-[#ED5642] font-bold group-hover:translate-x-0.5 transition-transform">Najla’s Elite</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

