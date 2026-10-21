import React from 'react'
import { Award, Clock, Heart, Sparkles, MapPin } from 'lucide-react'

export default function SkinEnvyStats() {
  const stats = [
    {
      number: '9',
      label: 'Flagship Karachi Branches',
      sublabel: 'PECHS, Gulshan, Jauhar & more',
      icon: MapPin,
    },
    {
      number: '25+',
      label: 'Years of Excellence',
      sublabel: 'Established trust since 1999',
      icon: Clock,
    },
    {
      number: '50K+',
      label: 'Brides & Clients Transformed',
      sublabel: 'Signature couture makeovers',
      icon: Heart,
    },
    {
      number: '100+',
      label: 'Certified Master Stylists',
      sublabel: 'Govt. recognized institute',
      icon: Award,
    },
  ]

  return (
    <section className="w-full py-8 sm:py-16 bg-white border-b border-[#EAEAEB]">
      <div className="w-full px-4 sm:px-10 lg:px-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            const delayClass = `scroll-reveal-delay-${idx + 1}`
            return (
              <div
                key={idx}
                className={`scroll-reveal ${delayClass} bg-[#F7F7F8]/80 hover:bg-white p-4 sm:p-7 sm:p-8 rounded-2xl border border-[#EAEAEB] card-hover flex flex-col justify-between min-h-[135px] sm:min-h-[175px] transition-all duration-500 group cursor-default hover:border-[#ED5642]/50 hover:shadow-xl hover:-translate-y-2 touch-feedback`}
              >
                <div className="flex items-center justify-between mb-2.5 sm:mb-4">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl bg-white border border-[#EAEAEB] shadow-2xs flex items-center justify-center text-[#ED5642] group-hover:scale-115 group-hover:rotate-6 group-hover:bg-[#ED5642] group-hover:text-white transition-all duration-300 shadow-sm flex-shrink-0">
                    <Icon className="w-4 h-4 sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-2xl sm:text-4xl font-extrabold text-[#1E1E24] tracking-tight group-hover:text-[#ED5642] group-hover:scale-105 transition-all duration-300">
                    {stat.number}
                  </span>
                </div>

                <div>
                  <div className="text-xs sm:text-sm font-bold text-[#1E1E24] tracking-tight mb-0.5 group-hover:translate-x-1 transition-transform duration-300">
                    {stat.label}
                  </div>
                  <div className="text-[10px] sm:text-xs text-[#8B8B93] font-medium group-hover:text-[#5A5A63] transition-colors duration-300 line-clamp-1 sm:line-clamp-none">
                    {stat.sublabel}
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

