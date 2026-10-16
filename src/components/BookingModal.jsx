import React, { useState } from 'react'
import { X, Calendar, Clock, User, Check, Sparkles } from 'lucide-react'

export default function BookingModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    service: 'Luxury Hair Styling Experience',
    date: '2026-10-18',
    time: '11:00 AM',
    specialist: 'Master Stylist Elena',
    fullName: '',
    phone: '',
    email: '',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)

  if (!isOpen) return null

  const services = [
    { name: 'Luxury Hair Styling Experience', duration: '90 Min', price: '$220' },
    { name: 'Radiant Skincare & Collagen Facial', duration: '75 Min', price: '$195' },
    { name: 'Bespoke Evening & Editorial Makeup', duration: '60 Min', price: '$180' },
    { name: 'Silk Blowout & Deep Botanical Mask', duration: '50 Min', price: '$140' },
    { name: 'Velina Signature Bridal Transformation', duration: '180 Min', price: '$450' },
  ]

  const times = ['10:00 AM', '11:30 AM', '01:00 PM', '02:30 PM', '04:00 PM', '05:30 PM', '07:00 PM']

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      // simulate auto-close or allow user to close
    }, 4000)
  }

  const handleReset = () => {
    setSubmitted(false)
    setStep(1)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#F8F5F0] text-[#141312] border border-[#DDD6CB] shadow-2xl p-6 sm:p-10 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 text-[#4A453F] hover:text-black transition-colors"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center animate-fade-in flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-[#141312] text-[#F8F5F0] flex items-center justify-center mb-6">
              <Check className="w-7 h-7 text-[#C5A880]" />
            </div>
            <span className="text-[11px] tracking-[0.24em] uppercase text-[#6B655D] font-medium">
              RESERVATION CONFIRMED
            </span>
            <h3 className="text-3xl sm:text-4xl font-light text-[#141312] mt-2 mb-4">
              We look forward to welcoming you
            </h3>
            <p className="max-w-md text-xs tracking-[0.14em] uppercase text-[#544F48] leading-relaxed mb-8">
              A private confirmation with appointment preparation notes has been dispatched to{' '}
              <span className="text-black font-semibold">{formData.email || 'your email'}</span>.
            </p>
            <div className="bg-[#EFE8DD] border border-[#DDD5C7] p-5 w-full max-w-md text-left text-xs tracking-[0.1em] text-[#423E39] mb-8">
              <div className="flex justify-between py-1 border-b border-[#DDD5C7]">
                <span>SERVICE:</span>
                <span className="font-semibold">{formData.service}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#DDD5C7]">
                <span>DATE & TIME:</span>
                <span className="font-semibold">{formData.date} at {formData.time}</span>
              </div>
              <div className="flex justify-between py-1">
                <span>GUEST:</span>
                <span className="font-semibold">{formData.fullName || 'Valued Guest'}</span>
              </div>
            </div>
            <button
              onClick={handleReset}
              className="px-8 py-3 bg-[#141312] text-[#F8F5F0] text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#2C2926] transition-colors"
            >
              RETURN TO SALON
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-8">
              <span className="text-[10px] tracking-[0.22em] uppercase text-[#6B655D] font-medium">
                VELINA PRIVATE CONCIERGE
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-[#141312] mt-1">
                Book Your Appointment
              </h2>
              <p className="text-xs tracking-[0.12em] uppercase text-[#666057] mt-2">
                Select your bespoke service, preferred schedule, and stylist.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Service Selection */}
              <div>
                <label className="block text-[11px] tracking-[0.18em] uppercase font-medium text-[#141312] mb-3">
                  SELECT SERVICE
                </label>
                <div className="flex flex-col gap-2">
                  {services.map((s) => (
                    <label
                      key={s.name}
                      className={`flex items-center justify-between p-3.5 border cursor-pointer transition-all duration-200 ${
                        formData.service === s.name
                          ? 'border-[#141312] bg-[#EFE8DD]'
                          : 'border-[#DDD6CB] hover:bg-[#F2ECE2]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="service"
                          checked={formData.service === s.name}
                          onChange={() => setFormData({ ...formData, service: s.name })}
                          className="accent-[#141312]"
                        />
                        <span className="text-xs tracking-[0.12em] uppercase font-medium text-[#141312]">
                          {s.name}
                        </span>
                      </div>
                      <div className="text-[11px] tracking-[0.14em] text-[#6B655D]">
                        <span>{s.duration}</span> • <span className="font-semibold text-black">{s.price}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] tracking-[0.18em] uppercase font-medium text-[#141312] mb-2">
                    PREFERRED DATE
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full p-3 bg-white border border-[#DDD6CB] text-xs uppercase tracking-[0.1em] focus:border-[#141312] outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[11px] tracking-[0.18em] uppercase font-medium text-[#141312] mb-2">
                    PREFERRED TIME
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full p-3 bg-white border border-[#DDD6CB] text-xs uppercase tracking-[0.1em] focus:border-[#141312] outline-none"
                  >
                    {times.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] tracking-[0.18em] uppercase font-medium text-[#141312] mb-2">
                    YOUR FULL NAME
                  </label>
                  <input
                    type="text"
                    placeholder="E.g. Madeleine Laurent"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full p-3 bg-white border border-[#DDD6CB] text-xs tracking-[0.08em] focus:border-[#141312] outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[11px] tracking-[0.18em] uppercase font-medium text-[#141312] mb-2">
                    PHONE NUMBER
                  </label>
                  <input
                    type="tel"
                    placeholder="(+123) 3245-98612"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-3 bg-white border border-[#DDD6CB] text-xs tracking-[0.08em] focus:border-[#141312] outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] tracking-[0.18em] uppercase font-medium text-[#141312] mb-2">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  placeholder="client@luxuryvelina.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3 bg-white border border-[#DDD6CB] text-xs tracking-[0.08em] focus:border-[#141312] outline-none"
                  required
                />
              </div>

              {/* Submit CTA */}
              <div className="mt-4 pt-4 border-t border-[#DDD6CB] flex items-center justify-between">
                <span className="text-[10px] tracking-[0.14em] uppercase text-[#736C64]">
                  Zero cancellation fee up to 24 hours prior.
                </span>
                <button
                  type="submit"
                  className="px-8 py-3.5 bg-[#141312] text-[#F8F5F0] text-[11px] tracking-[0.22em] uppercase font-medium hover:bg-[#2F2C28] transition-colors"
                >
                  CONFIRM RESERVATION ↗
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
