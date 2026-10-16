import React, { useState } from 'react'
import { MapPin, Phone, MessageCircle, Clock, Check, ArrowRight } from 'lucide-react'

export default function NajlaBranches({ onBookBranch }) {
  const [activeArea, setActiveArea] = useState('All')

  const branches = [
    {
      id: 1,
      name: 'Tariq Road (PECHS)',
      area: 'PECHS',
      address: 'A-137, Block 2, P.E.C.H.S., near Zahid Nihari, Tariq Road, Karachi',
      phone: '0334-1430303',
      whatsapp: '923341430303',
      hours: '10:30 AM — 08:30 PM (Daily)',
      highlight: 'Flagship Bridal Lounge & VIP Suites',
    },
    {
      id: 2,
      name: 'Gulshan-e-Iqbal (KDA)',
      area: 'Gulshan',
      address: 'A-569, Block 3, near KDA Market, Gulshan-e-Iqbal, Karachi',
      phone: '0336-2542923',
      whatsapp: '923362542923',
      hours: '11:00 AM — 08:30 PM (Daily)',
      highlight: 'HydraFacial Clinic & Hair Studio',
    },
    {
      id: 3,
      name: 'North Nazimabad (Hyderi)',
      area: 'Nazimabad',
      address: 'B-27, Block H, near EBH, Hyderi Market, North Nazimabad, Karachi',
      phone: '0335-7227457',
      whatsapp: '923357227457',
      hours: '11:00 AM — 08:30 PM (Daily)',
      highlight: 'Bridal Makeovers & Skin Polishing',
    },
    {
      id: 4,
      name: 'Gulistan-e-Jauhar (Block 17)',
      area: 'Jauhar',
      address: 'A-206, Long Life Bungalows, Block 17, near Hill Top Banquet, Gulistan-e-Johar',
      phone: '0335-0262993',
      whatsapp: '923350262993',
      hours: '11:00 AM — 08:30 PM (Daily)',
      highlight: 'Keratin Studio & Spa Sanctuary',
    },
    {
      id: 5,
      name: 'Gulistan-e-Jauhar (Block 3)',
      area: 'Jauhar',
      address: 'Shop No. 6, King’s Palm, Block 3, near Bin Hashim Supermarket, Karachi',
      phone: '0333-2240525',
      whatsapp: '923332240525',
      hours: '11:00 AM — 08:30 PM (Daily)',
      highlight: 'Aesthetic Facials & Party Makeovers',
    },
    {
      id: 6,
      name: 'Gulshan (Bait-ul-Mukarram)',
      area: 'Gulshan',
      address: 'B-39, Block 8, near Bait-ul-Mukarram Masjid, Gulshan-e-Iqbal, Karachi',
      phone: '0331-2099940',
      whatsapp: '923312099940',
      hours: '11:00 AM — 08:30 PM (Daily)',
      highlight: 'Bridal Couture & Hair Transformation',
    },
    {
      id: 7,
      name: 'Nazimabad Central',
      area: 'Nazimabad',
      address: 'Near 1st Chowrangi, Nazimabad, Karachi',
      phone: '0335-0262992',
      whatsapp: '923350262992',
      hours: '11:00 AM — 08:00 PM (Daily)',
      highlight: 'Skin Glow Peels & Hair Coloring',
    },
    {
      id: 8,
      name: 'Malir Cantt',
      area: 'Malir',
      address: 'AD Market, Malir Cantt Check Post No. 6, Karachi',
      phone: '0335-0203771',
      whatsapp: '923350203771',
      hours: '11:00 AM — 08:30 PM (Daily)',
      highlight: 'Cantt VIP Salon & Grooming',
    },
    {
      id: 9,
      name: 'Safoora / University Road',
      area: 'Jauhar',
      address: 'Sarah Grands, Block 7, Gulistan-e-Johar, near Safoorah Chowrangi, Karachi',
      phone: '0336-8128652',
      whatsapp: '923368128652',
      hours: '11:00 AM — 08:30 PM (Daily)',
      highlight: 'Training Institute & Express Salon',
    },
  ]

  const areas = ['All', 'PECHS', 'Gulshan', 'Nazimabad', 'Jauhar', 'Malir']

  const filtered = activeArea === 'All' ? branches : branches.filter((b) => b.area === activeArea)

  return (
    <section id="branches" className="bg-[#F7F7F8] text-[#1E1E24] py-24 sm:py-32 overflow-hidden border-b border-[#EAEAEB]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ED5642] block mb-3">
              KARACHI NETWORK
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#1E1E24] leading-[1.12] tracking-tight">
              Visit our 9 flagship branches across Karachi.
            </h2>
          </div>

          {/* Area Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {areas.map((area) => (
              <button
                key={area}
                onClick={() => setActiveArea(area)}
                className={`px-4 py-2 text-xs font-bold transition-all cursor-pointer border ${
                  activeArea === area
                    ? 'bg-[#ED5642] text-white border-[#ED5642] shadow-sm'
                    : 'bg-white text-[#5A5A63] hover:bg-[#EAEAEB] border-[#EAEAEB]'
                }`}
              >
                {area}
              </button>
            ))}
          </div>
        </div>

        {/* 9 Branch Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((branch) => (
            <div
              key={branch.id}
              className="bg-white p-7 border border-[#EAEAEB] card-hover flex flex-col justify-between group shadow-xs"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h4 className="text-xl font-bold text-[#1E1E24] group-hover:text-[#ED5642] transition-colors">
                    {branch.name}
                  </h4>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#ED5642]/10 text-[#ED5642] px-2.5 py-1">
                    {branch.area}
                  </span>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-[#5A5A63] mb-4 leading-relaxed">
                  <MapPin className="w-4 h-4 text-[#ED5642] flex-shrink-0 mt-0.5" />
                  <span>{branch.address}</span>
                </div>

                <div className="flex items-center gap-2 text-xs text-[#8B8B93] mb-6">
                  <Clock className="w-3.5 h-3.5 text-[#ED5642]" />
                  <span>{branch.hours}</span>
                </div>

                <div className="bg-[#F7F7F8] p-3 border border-[#EAEAEB] text-xs text-[#1E1E24] mb-6">
                  <span className="text-[#ED5642] font-bold mr-1.5">Specialty:</span>
                  {branch.highlight}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#EAEAEB] flex items-center justify-between gap-3">
                <a
                  href={`tel:${branch.phone.replace(/[^0-9]/g, '')}`}
                  className="flex-1 py-2.5 bg-[#F7F7F8] hover:bg-[#1E1E24] text-[#1E1E24] hover:text-white border border-[#EAEAEB] hover:border-[#1E1E24] text-xs font-bold text-center transition-all flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{branch.phone}</span>
                </a>

                <a
                  href={`https://wa.me/${branch.whatsapp}?text=Hi%20Najla’s,%20I%20would%20like%20to%20inquire%20about%20an%20appointment%20at%20your%20${encodeURIComponent(branch.name)}%20branch.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 bg-[#1EBE5D] hover:bg-[#18A450] text-white flex items-center justify-center transition-all flex-shrink-0 shadow-xs"
                  title="WhatsApp this branch"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>

                <button
                  onClick={() => onBookBranch(branch.name)}
                  className="px-4 py-2.5 bg-[#ED5642] hover:bg-[#D8432F] text-white text-xs font-bold transition-all cursor-pointer flex-shrink-0 shadow-xs"
                  title="Book at this branch"
                >
                  Book
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  )
}
