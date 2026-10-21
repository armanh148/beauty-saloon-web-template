import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, MessageCircle, Clock, Check, Send, Sparkles } from 'lucide-react'

export default function ContactPage({ onOpenBooking }) {
  const [activeArea, setActiveArea] = useState('All')
  const [formSent, setFormSent] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    branch: 'Tariq Road (PECHS)',
    service: 'Bridal Makeover Consultation',
    message: '',
  })

  const branches = [
    {
      id: 1,
      name: 'Tariq Road (PECHS Flagship)',
      area: 'PECHS',
      address: 'A-137, Block 2, P.E.C.H.S., near Zahid Nihari, Tariq Road, Karachi',
      phone: '0334-1430303',
      whatsapp: '923341430303',
      hours: '10:30 AM — 08:30 PM (Daily)',
      highlight: 'Central Bridal Lounge & VIP Suites',
    },
    {
      id: 2,
      name: 'Gulshan-e-Iqbal (KDA Block 3)',
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
      address: 'Shop 4-6, Rufi Green City, Block 17, Gulistan-e-Jauhar, Karachi',
      phone: '0335-0262993',
      whatsapp: '923350262993',
      hours: '11:00 AM — 08:30 PM (Daily)',
      highlight: 'Nanoplastia Organic Smoothing Center',
    },
    {
      id: 5,
      name: 'Gulshan-e-Iqbal (Bait-ul-Mukarram)',
      area: 'Gulshan',
      address: 'Plot SB-11, Block 13-C, opposite Bait-ul-Mukarram Masjid, University Road, Karachi',
      phone: '0331-2099940',
      whatsapp: '923312099940',
      hours: '11:00 AM — 08:30 PM (Daily)',
      highlight: 'Express Hair & Party Glam Hub',
    },
    {
      id: 6,
      name: 'Gulistan-e-Jauhar (Block 3)',
      area: 'Jauhar',
      address: 'Plot C-12, Block 3, near Kamran Chowrangi, Gulistan-e-Jauhar, Karachi',
      phone: '0333-2240525',
      whatsapp: '923332240525',
      hours: '11:00 AM — 08:30 PM (Daily)',
      highlight: 'Spa Pedicure & Nail Atelier',
    },
    {
      id: 7,
      name: 'Nazimabad Central',
      area: 'Nazimabad',
      address: 'Near 1st Chowrangi, Main Nazimabad, Karachi',
      phone: '0335-0262992',
      whatsapp: '923350262992',
      hours: '11:00 AM — 08:00 PM (Daily)',
      highlight: 'Skin Glow Peels & Hair Coloring',
    },
    {
      id: 8,
      name: 'Malir Cantt Check Post 6',
      area: 'Malir',
      address: 'AD Market, Malir Cantt Check Post No. 6, Karachi',
      phone: '0335-0203771',
      whatsapp: '923350203771',
      hours: '11:00 AM — 08:30 PM (Daily)',
      highlight: 'Cantt VIP Salon & Grooming',
    },
    {
      id: 9,
      name: 'Safoora Chowrangi / University Road',
      area: 'Jauhar',
      address: 'Sarah Grands, Block 7, Gulistan-e-Johar, near Safoorah Chowrangi, Karachi',
      phone: '0336-8128652',
      whatsapp: '923368128652',
      hours: '11:00 AM — 08:30 PM (Daily)',
      highlight: 'Training Institute & Express Salon',
    },
  ]

  const areas = ['All', 'PECHS', 'Gulshan', 'Nazimabad', 'Jauhar', 'Malir']

  const filtered = activeArea === 'All'
    ? branches
    : branches.filter((b) => b.area === activeArea)

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = `Hi Najla's, my name is ${formData.name}. Phone: ${formData.phone}. Preferred Branch: ${formData.branch}. Service: ${formData.service}. Message: ${formData.message}`
    window.open(`https://wa.me/923341430303?text=${encodeURIComponent(msg)}`, '_blank')
    setFormSent(true)
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <section className="bg-white border-b border-[#EAEAEB] py-10 sm:py-20">
        <div className="w-full px-4 sm:px-10 lg:px-14">
          <div className="max-w-4xl scroll-reveal">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ED5642] mb-3">
              <Link to="/" className="hover:underline text-[#5A5A63]">HOME</Link>
              <span>/</span>
              <span>KARACHI NETWORK & CONTACT</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#1E1E24] leading-[1.12] tracking-tight mb-4 sm:mb-6">
              Contact Najla’s & Find Your Nearest Karachi Flagship Branch.
            </h1>
            <p className="text-sm sm:text-lg text-[#5A5A63] leading-relaxed max-w-3xl">
              With 9 accessible branches across Karachi, exceptional bridal styling, clinical skincare, and certified hair treatments are never more than a short drive away.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid: Inquiry Form & Quick Helpline Box */}
      <section className="py-12 sm:py-24 border-b border-[#EAEAEB] bg-white overflow-hidden">
        <div className="w-full px-4 sm:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            {/* Left: Quick Helpline Cards */}
            <div className="lg:col-span-5 flex flex-col gap-6 scroll-reveal-left">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ED5642] block mb-2 sm:mb-3">
                  CENTRAL HELPLINE
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold text-[#1E1E24] leading-[1.15] tracking-tight mb-3 sm:mb-4">
                  We’re here to assist your bridal planning.
                </h2>
                <p className="text-xs sm:text-sm text-[#5A5A63] leading-relaxed mb-6 sm:mb-8">
                  Connect directly with our master concierge for dates, customized packages, and pricing inquiries across any of our 9 Karachi salons.
                </p>
              </div>

              <div className="p-4 sm:p-7 bg-[#F7F7F8] rounded-2xl border border-[#EAEAEB] flex flex-col gap-4 sm:gap-5 hover:border-[#ED5642]/40 transition-all duration-300 shadow-xs hover:shadow-md">
                <div className="flex items-start gap-3 sm:gap-4 group">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white border border-[#EAEAEB] text-[#ED5642] flex items-center justify-center flex-shrink-0 rounded-xl group-hover:scale-105 group-hover:bg-[#ED5642] group-hover:text-white transition-all duration-300 shadow-xs">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8B8B93] block">Direct Phone Helpline</span>
                    <a href="tel:03341430303" className="text-base sm:text-lg font-extrabold text-[#1E1E24] hover:text-[#ED5642] transition-colors inline-block">
                      0334-1430303
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 group">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white border border-[#EAEAEB] text-[#1EBE5D] flex items-center justify-center flex-shrink-0 rounded-xl group-hover:scale-105 group-hover:bg-[#1EBE5D] group-hover:text-white transition-all duration-300 shadow-xs">
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8B8B93] block">Official WhatsApp Support</span>
                    <a href="https://wa.me/923341430303" target="_blank" rel="noreferrer" className="text-base sm:text-lg font-extrabold text-[#1EBE5D] hover:underline inline-block">
                      0334-1430303 (Instant Reply)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 group">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white border border-[#EAEAEB] text-[#ED5642] flex items-center justify-center flex-shrink-0 rounded-xl group-hover:scale-105 group-hover:bg-[#ED5642] group-hover:text-white transition-all duration-300 shadow-xs">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8B8B93] block">Operating Hours</span>
                    <span className="text-xs sm:text-sm font-bold text-[#1E1E24]">
                      Daily 10:30 AM — 08:30 PM (All 7 Days)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Direct Contact Form */}
            <div className="lg:col-span-7 bg-[#F7F7F8] p-4 sm:p-12 rounded-2xl sm:rounded-3xl border border-[#EAEAEB] scroll-reveal-right delay-200 hover:border-[#ED5642]/30 transition-all duration-300 shadow-xs">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1E1E24] mb-1 sm:mb-2">Send an Instant Inquiry</h3>
              <p className="text-xs text-[#5A5A63] mb-6 sm:mb-8">
                Fill in your details to immediately forward your inquiry to our central reservation desk.
              </p>

              {formSent ? (
                <div className="p-5 sm:p-6 bg-white border border-[#ED5642] rounded-xl text-center animate-fade-in">
                  <Check className="w-7 h-7 sm:w-8 sm:h-8 text-[#ED5642] mx-auto mb-2" />
                  <h4 className="text-base sm:text-lg font-bold text-[#1E1E24] mb-1">Inquiry Forwarded!</h4>
                  <p className="text-xs text-[#5A5A63]">
                    Your message has been transferred to our WhatsApp concierge. Our team will respond promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 sm:gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label className="text-[11px] sm:text-xs font-bold text-[#1E1E24] block mb-1 uppercase tracking-wider">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ayesha Malik"
                        className="w-full bg-white p-3 rounded-lg border border-[#EAEAEB] text-xs text-[#1E1E24] outline-none focus:border-[#ED5642] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] sm:text-xs font-bold text-[#1E1E24] block mb-1 uppercase tracking-wider">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 0300-1234567"
                        className="w-full bg-white p-3 rounded-lg border border-[#EAEAEB] text-xs text-[#1E1E24] outline-none focus:border-[#ED5642] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label className="text-[11px] sm:text-xs font-bold text-[#1E1E24] block mb-1 uppercase tracking-wider">
                        Preferred Branch
                      </label>
                      <select
                        value={formData.branch}
                        onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                        className="w-full bg-white p-3 rounded-lg border border-[#EAEAEB] text-xs text-[#1E1E24] outline-none focus:border-[#ED5642] transition-colors"
                      >
                        {branches.map((b) => (
                          <option key={b.id} value={b.name}>{b.name}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-[11px] sm:text-xs font-bold text-[#1E1E24] block mb-1 uppercase tracking-wider">
                        Service of Interest
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-white p-3 rounded-lg border border-[#EAEAEB] text-xs text-[#1E1E24] outline-none focus:border-[#ED5642] transition-colors"
                      >
                        <option value="Bridal Makeover (Barat / Walima)">Bridal Makeover (Barat / Walima)</option>
                        <option value="HydraFacial MD 7-Step">HydraFacial MD 7-Step</option>
                        <option value="Organic Nanoplastia Smoothing">Organic Nanoplastia Smoothing</option>
                        <option value="Sindh Board Beautician Course">Sindh Board Beautician Course</option>
                        <option value="Spa Pedicure & Hair Color">Spa Pedicure & Hair Color</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] sm:text-xs font-bold text-[#1E1E24] block mb-1 uppercase tracking-wider">
                      Event Date & Details
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify your wedding date, branch preferences, or service questions..."
                      className="w-full bg-white p-3 rounded-lg border border-[#EAEAEB] text-xs text-[#1E1E24] outline-none focus:border-[#ED5642] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="skinenvy-btn-primary flex items-center justify-center gap-2 cursor-pointer mt-2 h-12 rounded-full font-bold text-xs uppercase tracking-wider hover:shadow-lg transition-all duration-300"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message on WhatsApp</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Complete 9 Karachi Branches Directory */}
      <section className="py-12 sm:py-24 border-b border-[#EAEAEB] bg-white">
        <div className="w-full px-4 sm:px-10 lg:px-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12 scroll-reveal">
            <div className="max-w-xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ED5642] block mb-2 sm:mb-3">
                KARACHI DIRECTORY
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1E1E24] leading-[1.15] tracking-tight">
                All 9 flagship branch locations.
              </h2>
            </div>

            {/* Area Filter Buttons */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {areas.map((area) => (
                <button
                  key={area}
                  onClick={() => setActiveArea(area)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-bold rounded-full transition-all duration-300 cursor-pointer border ${
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filtered.map((b, idx) => (
              <div
                key={b.id}
                className={`bg-white p-4 sm:p-7 rounded-2xl border border-[#EAEAEB] flex flex-col justify-between card-hover shadow-xs group scroll-reveal-scale scroll-reveal-delay-${(idx % 4) + 1}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#ED5642] bg-[#F7F7F8] px-2.5 py-0.5 sm:py-1 rounded-full border border-[#EAEAEB] group-hover:border-[#ED5642]/30 transition-colors">
                      {b.area}
                    </span>
                    <span className="text-xs text-[#8B8B93] flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#ED5642]" />
                      <span>Daily</span>
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#1E1E24] mb-1 group-hover:text-[#ED5642] transition-colors">{b.name}</h3>
                  <span className="text-xs font-semibold text-[#ED5642] block mb-3 sm:mb-4">{b.highlight}</span>

                  <p className="text-xs text-[#5A5A63] leading-relaxed mb-4 sm:mb-6 flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#8B8B93] flex-shrink-0 mt-0.5 group-hover:text-[#ED5642] transition-colors" />
                    <span>{b.address}</span>
                  </p>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-[#EAEAEB] flex items-center justify-between">
                  <a
                    href={`tel:${b.phone.replace(/[^0-9]/g, '')}`}
                    className="text-xs font-bold text-[#1E1E24] hover:text-[#ED5642] flex items-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#ED5642]" />
                    <span>{b.phone}</span>
                  </a>

                  <a
                    href={`https://wa.me/${b.whatsapp}?text=Hi%20Najla's,%20I%20would%20like%20to%20visit%20your%20${encodeURIComponent(b.name)}%20branch`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-bold text-[#1EBE5D] hover:underline flex items-center gap-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
