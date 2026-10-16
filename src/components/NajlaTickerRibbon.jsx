import React from 'react'
import { Sparkles, Heart, Award, ShieldCheck, Clock, MapPin } from 'lucide-react'

export default function NajlaTickerRibbon() {
  const tickerItems = [
    { icon: MapPin, text: '9 Flagship Karachi Branches' },
    { icon: Award, text: '25+ Years of Aesthetic Mastery' },
    { icon: Heart, text: 'Signature Couture Bridal Makeovers' },
    { icon: Sparkles, text: '7-Step HydraFacial MD Clinical Glow' },
    { icon: ShieldCheck, text: '100% Organic Formaldehyde-Free Nanoplastia' },
    { icon: Clock, text: 'Recognized Beautician Training Institute' },
    { icon: Heart, text: '50,000+ Happy Brides & Clients' },
  ]

  return (
    <div className="w-full bg-white py-3.5 overflow-hidden select-none relative z-30 shadow-2xs">
      <div className="animate-najla-marquee flex items-center gap-10 whitespace-nowrap">
        {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => {
          const Icon = item.icon
          return (
            <div
              key={idx}
              className="flex items-center gap-2.5 text-xs font-bold tracking-wide text-[#1E1E24]"
            >
              <span className="w-6 h-6 rounded-full bg-[#ED5642]/10 flex items-center justify-center text-[#ED5642] flex-shrink-0">
                <Icon className="w-3.5 h-3.5" />
              </span>
              <span>{item.text}</span>
              <span className="text-[#ED5642]/40 ml-4 font-normal">•</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
