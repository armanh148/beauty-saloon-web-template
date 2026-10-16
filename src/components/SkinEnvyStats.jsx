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
    <section className="w-full py-12 sm:py-16 bg-white border-b border-[#EAEAEB]">
      <div className="w-full px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div
                key={idx}
                className="bg-[#F7F7F8]/80 hover:bg-white p-7 sm:p-8 rounded-2xl border border-[#EAEAEB] card-hover flex flex-col justify-between min-h-[175px] transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#EAEAEB] shadow-2xs flex items-center justify-center text-[#ED5642] group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-4xl font-extrabold text-[#1E1E24] tracking-tight group-hover:text-[#ED5642] transition-colors">
                    {stat.number}
                  </span>
                </div>

                <div>
                  <div className="text-sm font-bold text-[#1E1E24] tracking-tight mb-0.5">
                    {stat.label}
                  </div>
                  <div className="text-xs text-[#8B8B93] font-medium">
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

