import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUp } from 'lucide-react'
import { FacebookIcon, InstagramIcon, TwitterIcon, LinkedinIcon } from './Icons'

export default function SkinEnvyFooter({ onOpenBooking }) {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) setSubscribed(true)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="contact" className="bg-white text-[#1E1E24] pt-16 sm:pt-20 lg:pt-24 pb-12 overflow-hidden border-t border-[#EAEAEB]">
      <div className="w-full px-4 sm:px-8 lg:px-14">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 sm:pb-20 border-b border-[#EAEAEB]">
          {/* Left Column: Logo, description, and newsletter */}
          <div className="lg:col-span-5 flex flex-col justify-between scroll-reveal-left">
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <span className="w-9 h-9 rounded-xl bg-[#ED5642] flex items-center justify-center text-white font-extrabold text-base shadow-sm">
                  N
                </span>
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#1E1E24] leading-tight">
                    Najla’s <span className="text-[#ED5642]">Clinic</span>
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#8B8B93] font-bold">
                    Beauty Clinic & Institute
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#5A5A63] max-w-sm leading-relaxed mb-6 sm:mb-8">
                Karachi’s landmark destination for signature couture bridal makeovers, medical-grade HydraFacials, and recognized Beautician Training diplomas across 9 flagship branches.
              </p>
            </div>

            {/* Newsletter form */}
            <div className="max-w-md w-full">
              <span className="text-xs sm:text-sm font-semibold text-[#1E1E24] block mb-3">
                Join our VIP Bridal & Offers Lookbook—
              </span>

              {subscribed ? (
                <div className="text-xs sm:text-sm font-semibold text-[#ED5642] bg-[#ED5642]/10 p-3 sm:p-4 rounded-2xl border border-[#ED5642]/20">
                  ✓ Thank you! You have been added to Najla’s exclusive bridal preview list.
                </div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="relative flex items-center w-full bg-[#F7F7F8] border border-[#EAEAEB] rounded-full p-1 sm:p-1.5 focus-within:border-[#ED5642] focus-within:ring-2 focus-within:ring-[#ED5642]/10 transition-all shadow-2xs"
                >
                  <input
                    type="text"
                    placeholder="Enter email or WhatsApp"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 min-w-0 bg-transparent px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs text-[#1E1E24] outline-none placeholder:text-[#8B8B93]"
                  />
                  <button
                    type="submit"
                    className="skinenvy-btn-primary text-[11px] sm:text-xs py-1.5 sm:py-2 px-3.5 sm:px-5 shadow-xs cursor-pointer rounded-full flex-shrink-0"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Columns: 3 Navigation Link Directories */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-6 lg:gap-8 scroll-reveal-right delay-100">
            {/* Karachi Branches */}
            <div>
              <h5 className="font-bold text-[#1E1E24] text-base mb-4 sm:mb-5">9 Karachi Branches</h5>
              <div className="flex flex-col gap-2 sm:gap-2.5 text-xs sm:text-sm text-[#5A5A63]">
                <a href="https://wa.me/923341430303?text=Hi%20Najla's,%20I%20would%20like%20to%20visit%20Tariq%20Road%20branch" target="_blank" rel="noreferrer" className="hover:text-[#ED5642] hover:translate-x-1 transition-all">Tariq Road (PECHS)</a>
                <a href="https://wa.me/923362542923?text=Hi%20Najla's,%20I%20would%20like%20to%20visit%20Gulshan%20KDA%20branch" target="_blank" rel="noreferrer" className="hover:text-[#ED5642] hover:translate-x-1 transition-all">Gulshan KDA Block 3</a>
                <a href="https://wa.me/923312099940?text=Hi%20Najla's,%20I%20would%20like%20to%20visit%20Gulshan%20Bait-ul-Mukarram%20branch" target="_blank" rel="noreferrer" className="hover:text-[#ED5642] hover:translate-x-1 transition-all">Gulshan Bait-ul-Mukarram</a>
                <a href="https://wa.me/923357227457?text=Hi%20Najla's,%20I%20would%20like%20to%20visit%20North%20Nazimabad%20branch" target="_blank" rel="noreferrer" className="hover:text-[#ED5642] hover:translate-x-1 transition-all">North Nazimabad Hyderi</a>
                <a href="https://wa.me/923350262993?text=Hi%20Najla's,%20I%20would%20like%20to%20visit%20Gulistan-e-Jauhar%20Block%2017%20branch" target="_blank" rel="noreferrer" className="hover:text-[#ED5642] hover:translate-x-1 transition-all">Gulistan-e-Jauhar Blk 17</a>
                <a href="https://wa.me/923332240525?text=Hi%20Najla's,%20I%20would%20like%20to%20visit%20Gulistan-e-Jauhar%20Block%203%20branch" target="_blank" rel="noreferrer" className="hover:text-[#ED5642] hover:translate-x-1 transition-all">Gulistan-e-Jauhar Blk 3</a>
                <a href="https://wa.me/923350203771?text=Hi%20Najla's,%20I%20would%20like%20to%20visit%20Malir%20Cantt%20branch" target="_blank" rel="noreferrer" className="hover:text-[#ED5642] hover:translate-x-1 transition-all">Malir Cantt</a>
                <a href="https://wa.me/923350262992?text=Hi%20Najla's,%20I%20would%20like%20to%20visit%20Nazimabad%20branch" target="_blank" rel="noreferrer" className="hover:text-[#ED5642] hover:translate-x-1 transition-all">Nazimabad Central</a>
                <a href="https://wa.me/923368128652?text=Hi%20Najla's,%20I%20would%20like%20to%20visit%20Safoora%20branch" target="_blank" rel="noreferrer" className="hover:text-[#ED5642] hover:translate-x-1 transition-all">Safoora Chowrangi</a>
              </div>
            </div>

            {/* Core Services & Navigation Links */}
            <div>
              <h5 className="font-bold text-[#1E1E24] text-base mb-4 sm:mb-5">Website Pages</h5>
              <div className="flex flex-col gap-2 sm:gap-2.5 text-xs sm:text-sm text-[#5A5A63]">
                <Link to="/about" className="hover:text-[#ED5642] hover:translate-x-1 transition-all">About Najla’s</Link>
                <Link to="/sessions" className="hover:text-[#ED5642] hover:translate-x-1 transition-all">Therapeutic Sessions</Link>
                <Link to="/services" className="hover:text-[#ED5642] hover:translate-x-1 transition-all">Salon & Clinic Services</Link>
                <Link to="/bridal-deals" className="hover:text-[#ED5642] hover:translate-x-1 transition-all">Bridal Deals & Packages</Link>
                <Link to="/hydrafacial" className="hover:text-[#ED5642] hover:translate-x-1 transition-all">HydraFacial MD® 7-Step</Link>
                <Link to="/team" className="hover:text-[#ED5642] hover:translate-x-1 transition-all">Master Stylists & Team</Link>
                <Link to="/reviews" className="hover:text-[#ED5642] hover:translate-x-1 transition-all">Verified Bride Reviews</Link>
                <Link to="/faqs" className="hover:text-[#ED5642] hover:translate-x-1 transition-all">FAQs & Policies</Link>
                <Link to="/contact" className="hover:text-[#ED5642] hover:translate-x-1 transition-all">Contact & 9 Branches</Link>
              </div>
            </div>

            {/* Contact & Concierge */}
            <div>
              <h5 className="font-bold text-[#1E1E24] text-base mb-4 sm:mb-5">Direct Concierge</h5>
              <div className="flex flex-col gap-2.5 sm:gap-3 text-xs sm:text-sm text-[#5A5A63]">
                <a href="https://wa.me/923341430303" target="_blank" rel="noreferrer" className="text-[#1EBE5D] font-bold hover:underline flex items-center gap-1">
                  WhatsApp: 0334-1430303
                </a>
                <a href="tel:03341430303" className="text-[#1E1E24] hover:text-[#ED5642] transition-colors">
                  Helpline: 0334-1430303
                </a>
                <span className="hover:text-[#ED5642] transition-colors cursor-pointer" onClick={onOpenBooking}>
                  Book Online Appointment
                </span>
                <Link to="/services" className="hover:text-[#ED5642] transition-colors">Full Services Directory</Link>
                <Link to="/faqs" className="hover:text-[#ED5642] transition-colors">FAQ & Support</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar matching Webflow template credit & socials */}
        <div className="pt-8 sm:pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#8B8B93] text-center md:text-left">
          <div>
            © 2026 <span className="text-[#1E1E24] font-semibold">Najla’s Beauty Clinic & Institute</span>. All Rights Reserved • Karachi, Pakistan
          </div>

          <div className="flex items-center gap-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-[#EAEAEB] flex items-center justify-center text-[#8B8B93] hover:text-[#ED5642] hover:border-[#ED5642] transition-all" aria-label="Facebook">
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-[#EAEAEB] flex items-center justify-center text-[#8B8B93] hover:text-[#ED5642] hover:border-[#ED5642] transition-all" aria-label="Instagram">
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-[#EAEAEB] flex items-center justify-center text-[#8B8B93] hover:text-[#ED5642] hover:border-[#ED5642] transition-all" aria-label="Twitter">
              <TwitterIcon className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-[#EAEAEB] flex items-center justify-center text-[#8B8B93] hover:text-[#ED5642] hover:border-[#ED5642] transition-all" aria-label="LinkedIn">
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-[#F7F7F8] hover:bg-[#ED5642] text-[#1E1E24] hover:text-white flex items-center justify-center transition-all border border-[#EAEAEB] ml-2 cursor-pointer shadow-xs hover:shadow-md hover:-translate-y-0.5"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
