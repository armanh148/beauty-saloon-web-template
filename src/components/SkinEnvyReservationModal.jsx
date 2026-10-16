import React, { useState } from 'react'
import { X, Calendar, Clock, Check, Sparkles, User, Scissors } from 'lucide-react'

export default function SkinEnvyReservationModal({ isOpen, onClose, preselectedService }) {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    service: preselectedService ? preselectedService.title : 'Precision Haircutting',
    specialist: 'Daniel Clark — Stylist & Makeup Artist',
    date: '2026-10-20',
    time: '11:00 AM',
    fullName: '',
    phone: '',
    email: '',
    notes: '',
  })

  if (!isOpen) return null

  const services = [
    { title: 'Precision Haircutting', duration: '60 Min', price: '$95' },
    { title: 'Spa Treatments', duration: '90 Min', price: '$160' },
    { title: 'Hair Coloring', duration: '120 Min', price: '$185' },
    { title: 'Custom Skincare', duration: '75 Min', price: '$140' },
  ]

  const specialists = [
    'Daniel Clark — Stylist & Makeup Artist',
    'Natalie Adams — Color Specialist',
    'Wayne Josri — Hair Cut Specialist',
    'Jessica Turner — Senior Stylist',
  ]

  const times = ['10:00 AM', '11:30 AM', '01:00 PM', '02:30 PM', '04:00 PM', '05:30 PM']

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleReset = () => {
    setSubmitted(false)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
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
          <div className="py-10 text-center flex flex-col items-center animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-[#ED5642]/10 text-[#ED5642] flex items-center justify-center mb-6">
              <Check className="w-8 h-8" />
            </div>

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ED5642] mb-2 block">
              RESERVATION RECEIVED
            </span>

            <h3 className="text-3xl font-bold text-[#1E1E24] mb-3">
              We look forward to seeing you
            </h3>

            <p className="text-sm text-[#5A5A63] max-w-sm mb-8 leading-relaxed">
              A private confirmation with appointment guidelines has been dispatched to{' '}
              <span className="font-bold text-[#1E1E24]">{formData.email || 'your email'}</span>.
            </p>

            <div className="bg-[#F7F7F8] border border-[#EAEAEB] rounded-2xl p-5 w-full text-left text-xs text-[#5A5A63] flex flex-col gap-2.5 mb-8">
              <div className="flex justify-between border-b border-[#EAEAEB] pb-2">
                <span className="font-semibold text-[#1E1E24]">Service:</span>
                <span>{formData.service}</span>
              </div>
              <div className="flex justify-between border-b border-[#EAEAEB] pb-2">
                <span className="font-semibold text-[#1E1E24]">Specialist:</span>
                <span>{formData.specialist}</span>
              </div>
              <div className="flex justify-between border-b border-[#EAEAEB] pb-2">
                <span className="font-semibold text-[#1E1E24]">Date & Time:</span>
                <span>{formData.date} at {formData.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-[#1E1E24]">Guest:</span>
                <span>{formData.fullName || 'Valued Client'}</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="skinenvy-btn-dark w-full py-3.5"
            >
              Back to Home
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-8">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#ED5642] mb-2">
                <Sparkles className="w-4 h-4" />
                <span>ONLINE BOOKING</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1E1E24]">
                Make an Appointment
              </h2>
              <p className="text-xs text-[#5A5A63] mt-1">
                Select your preferred service, specialist, and schedule.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1E1E24] mb-2">
                  Select Service
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {services.map((s) => (
                    <label
                      key={s.title}
                      className={`p-3 rounded-2xl border cursor-pointer flex flex-col justify-between transition-all ${
                        formData.service === s.title
                          ? 'border-[#ED5642] bg-[#ED5642]/5'
                          : 'border-[#EAEAEB] hover:border-[#1E1E24]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="service"
                          checked={formData.service === s.title}
                          onChange={() => setFormData({ ...formData, service: s.title })}
                          className="accent-[#ED5642]"
                        />
                        <span className="text-xs font-bold text-[#1E1E24]">{s.title}</span>
                      </div>
                      <span className="text-[11px] font-semibold text-[#ED5642] ml-5 mt-1">
                        {s.duration} • {s.price}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Specialist */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1E1E24] mb-2">
                  Preferred Specialist
                </label>
                <select
                  value={formData.specialist}
                  onChange={(e) => setFormData({ ...formData, specialist: e.target.value })}
                  className="w-full p-3 rounded-xl bg-[#F7F7F8] border border-[#EAEAEB] text-xs font-medium focus:border-[#ED5642] outline-none"
                >
                  {specialists.map((sp) => (
                    <option key={sp} value={sp}>
                      {sp}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1E1E24] mb-2">
                    Date
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
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1E1E24] mb-2">
                    Time
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

              {/* Guest Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1E1E24] mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="E.g. Sarah Jenkins"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full p-3 rounded-xl bg-[#F7F7F8] border border-[#EAEAEB] text-xs focus:border-[#ED5642] outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1E1E24] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="(+123) 456-7890"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-3 rounded-xl bg-[#F7F7F8] border border-[#EAEAEB] text-xs focus:border-[#ED5642] outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1E1E24] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="sarah@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3 rounded-xl bg-[#F7F7F8] border border-[#EAEAEB] text-xs focus:border-[#ED5642] outline-none"
                  required
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full skinenvy-btn-primary py-3.5 text-center cursor-pointer"
                >
                  Confirm Appointment
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
