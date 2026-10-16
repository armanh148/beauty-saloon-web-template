import React, { useState } from 'react'
import { X, Calendar, Clock, Check, Sparkles, MapPin, MessageCircle } from 'lucide-react'

export default function NajlaBookingModal({ isOpen, onClose, preselectedService, defaultBranch }) {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    branch: defaultBranch || 'Tariq Road (PECHS)',
    service: preselectedService ? preselectedService.title : 'Barat Signature Bridal Makeover',
    date: '2026-10-25',
    time: '12:00 PM',
    fullName: '',
    phone: '',
    email: '',
    notes: '',
  })

  if (!isOpen) return null

  const branches = [
    { name: 'Tariq Road (PECHS)', phone: '923341430303' },
    { name: 'Gulshan-e-Iqbal (KDA Block 3)', phone: '923362542923' },
    { name: 'Gulshan-e-Iqbal (Bait-ul-Mukarram)', phone: '923312099940' },
    { name: 'Gulistan-e-Jauhar (Block 17)', phone: '923350262993' },
    { name: 'Gulistan-e-Jauhar (Block 3)', phone: '923332240525' },
    { name: 'North Nazimabad (Hyderi)', phone: '923357227457' },
    { name: 'Nazimabad Central', phone: '923350262992' },
    { name: 'Malir Cantt', phone: '923350203771' },
    { name: 'Safoora Chowrangi', phone: '923368128652' },
  ]

  const services = [
    { title: 'Barat Signature Bridal Makeover', price: 'Rs. 35,000+' },
    { title: 'Walima Reception Royal Look', price: 'Rs. 32,000+' },
    { title: 'Mehndi / Mayon Traditional Glow', price: 'Rs. 22,000+' },
    { title: 'HydraFacial MD 7-Step Glow', price: 'Rs. 8,500' },
    { title: 'Derma Whitening Glo Infusion', price: 'Rs. 6,500' },
    { title: 'Nanoplastia Organic Smoothing', price: 'Rs. 18,000+' },
    { title: 'French Balayage & Babylights', price: 'Rs. 15,000+' },
    { title: 'Whitening Spa Mani-Pedi with Paraffin', price: 'Rs. 3,500' },
    { title: 'Beautician Institute Diploma Inquiry', price: 'Free Consultation' },
  ]

  const times = ['11:00 AM', '12:30 PM', '02:00 PM', '03:30 PM', '05:00 PM', '06:30 PM', '07:30 PM']

  const selectedBranchObj = branches.find((b) => b.name === formData.branch) || branches[0]

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleReset = () => {
    setSubmitted(false)
    onClose()
  }

  const generateWhatsAppUrl = () => {
    const text = `Hello Najla’s Beauty Clinic (${formData.branch}),%0A%0AI would like to book an appointment:%0A• Service: ${encodeURIComponent(formData.service)}%0A• Branch: ${encodeURIComponent(formData.branch)}%0A• Date: ${formData.date}%0A• Time: ${formData.time}%0A• Client Name: ${encodeURIComponent(formData.fullName)}%0A• Phone: ${encodeURIComponent(formData.phone)}`
    return `https://wa.me/${selectedBranchObj.phone}?text=${text}`
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-xl bg-white text-[#1E1E24] rounded-3xl p-6 sm:p-10 shadow-2xl max-h-[90vh] overflow-y-auto border border-[#EAEAEB]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleReset}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#F7F7F8] hover:bg-[#ED5642] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center flex flex-col items-center animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-[#25D366]/15 text-[#25D366] flex items-center justify-center mb-5">
              <Check className="w-8 h-8" />
            </div>

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ED5642] mb-2 block">
              APPOINTMENT RESERVED
            </span>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#1E1E24] mb-3">
              Thank you, {formData.fullName || 'Valued Client'}
            </h3>

            <p className="text-sm text-[#5A5A63] max-w-sm mb-6 leading-relaxed">
              Your appointment request at <span className="font-bold text-[#1E1E24]">{formData.branch}</span> has been registered.
            </p>

            <div className="bg-[#F7F7F8] border border-[#EAEAEB] rounded-2xl p-5 w-full text-left text-xs text-[#5A5A63] flex flex-col gap-2.5 mb-6">
              <div className="flex justify-between border-b border-[#EAEAEB] pb-2">
                <span className="font-semibold text-[#1E1E24]">Branch:</span>
                <span className="font-bold text-[#ED5642]">{formData.branch}</span>
              </div>
              <div className="flex justify-between border-b border-[#EAEAEB] pb-2">
                <span className="font-semibold text-[#1E1E24]">Service:</span>
                <span>{formData.service}</span>
              </div>
              <div className="flex justify-between border-b border-[#EAEAEB] pb-2">
                <span className="font-semibold text-[#1E1E24]">Schedule:</span>
                <span>{formData.date} at {formData.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-[#1E1E24]">Client Phone:</span>
                <span>{formData.phone}</span>
              </div>
            </div>

            {/* Direct WhatsApp Confirmation Button */}
            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm transition-all flex items-center justify-center gap-2 mb-3 shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send Confirmation on WhatsApp</span>
            </a>

            <button
              onClick={handleReset}
              className="text-xs text-[#8B8B93] hover:text-[#1E1E24] underline mt-2"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#ED5642] mb-1">
                <Sparkles className="w-4 h-4" />
                <span>NAJLA’S CONCIERGE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1E1E24]">
                Book at Najla’s Beauty Clinic
              </h2>
              <p className="text-xs text-[#5A5A63] mt-1">
                Choose your nearest Karachi branch, treatment, and preferred schedule.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Branch Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1E1E24] mb-1.5 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#ED5642]" />
                  <span>Select Karachi Branch</span>
                </label>
                <select
                  value={formData.branch}
                  onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                  className="w-full p-3 rounded-xl bg-[#F7F7F8] border border-[#EAEAEB] text-xs font-semibold focus:border-[#ED5642] outline-none"
                >
                  {branches.map((b) => (
                    <option key={b.name} value={b.name}>
                      {b.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1E1E24] mb-1.5">
                  Treatment / Service
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full p-3 rounded-xl bg-[#F7F7F8] border border-[#EAEAEB] text-xs font-medium focus:border-[#ED5642] outline-none"
                >
                  {services.map((s) => (
                    <option key={s.title} value={s.title}>
                      {s.title} — {s.price}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1E1E24] mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full p-3 rounded-xl bg-[#F7F7F8] border border-[#EAEAEB] text-xs focus:border-[#ED5642] outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1E1E24] mb-1.5">
                    Time Slot
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full p-3 rounded-xl bg-[#F7F7F8] border border-[#EAEAEB] text-xs focus:border-[#ED5642] outline-none"
                  >
                    {times.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1E1E24] mb-1.5">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="E.g. Ayesha Khan"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full p-3 rounded-xl bg-[#F7F7F8] border border-[#EAEAEB] text-xs focus:border-[#ED5642] outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1E1E24] mb-1.5">
                    WhatsApp / Mobile Number
                  </label>
                  <input
                    type="tel"
                    placeholder="0300-1234567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-3 rounded-xl bg-[#F7F7F8] border border-[#EAEAEB] text-xs focus:border-[#ED5642] outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1E1E24] mb-1.5">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  placeholder="ayesha@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3 rounded-xl bg-[#F7F7F8] border border-[#EAEAEB] text-xs focus:border-[#ED5642] outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full skinenvy-btn-primary py-3.5 text-center cursor-pointer shadow-lg"
                >
                  Confirm Reservation at Najla’s
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
