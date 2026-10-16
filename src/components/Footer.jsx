import React from 'react'

export default function Footer({ onOpenBooking }) {
  return (
    <footer id="contact" className="relative bg-[#F6F2EC] text-[#141312] pt-24 pb-12 overflow-hidden border-t border-[#E2DDD3]">
      {/* Architectural vertical guide lines matching the aesthetic */}
      <div className="absolute inset-0 pointer-events-none flex justify-between max-w-[1700px] mx-auto px-6 sm:px-12">
        <div className="w-[1px] h-full bg-[#E2DDD3]" />
        <div className="w-[1px] h-full bg-[#E2DDD3]" />
        <div className="w-[1px] h-full bg-[#E2DDD3] hidden md:block" />
        <div className="w-[1px] h-full bg-[#E2DDD3] hidden lg:block" />
        <div className="w-[1px] h-full bg-[#E2DDD3]" />
      </div>

      <div className="relative z-10 max-w-[1700px] mx-auto px-6 sm:px-12">
        {/* Top Row: Giant VELINA on Left, Monogram & Navigation on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-20 border-b border-[#E2DDD3]">
          {/* Left: Huge VELINA Branding matching screenshot */}
          <div className="lg:col-span-7">
            <h1
              className="text-6xl sm:text-8xl md:text-9xl xl:text-[10.5rem] font-medium tracking-[0.04em] text-[#141312] leading-none select-none"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              VELINA
            </h1>
          </div>

          {/* Right: Monogram and Two Link Columns */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full pt-4">
            {/* Logo Monogram */}
            <div className="flex justify-start lg:justify-end mb-8">
              <div className="flex items-center gap-2">
                <svg
                  className="w-8 h-8 text-[#141312]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
                </svg>
              </div>
            </div>

            {/* Two Columns of Navigation */}
            <div className="grid grid-cols-2 gap-8 text-[11px] sm:text-[11.5px] tracking-[0.16em] uppercase text-[#3A3632]">
              {/* Directory 1 */}
              <div className="flex flex-col gap-2.5">
                <a href="#hero" className="hover:text-black transition-colors">HOME</a>
                <a href="#about" className="hover:text-black transition-colors">ABOUT</a>
                <a href="#elevated" className="hover:text-black transition-colors">SERVICES</a>
                <a href="#gallery" className="hover:text-black transition-colors">GALLERY</a>
                <a href="#testimonials" className="hover:text-black transition-colors">TESTIMONIALS</a>
                <a href="#contact" className="hover:text-black transition-colors">CONTACT</a>
              </div>

              {/* Directory 2 */}
              <div className="flex flex-col gap-2.5">
                <span className="font-semibold text-black">SERVICES</span>
                <span className="text-[#59534C] hover:text-black transition-colors cursor-pointer" onClick={onOpenBooking}>
                  HAIR ARTISTRY
                </span>
                <span className="text-[#59534C] hover:text-black transition-colors cursor-pointer" onClick={onOpenBooking}>
                  BRIDAL BEAUTY
                </span>
                <span className="text-[#59534C] hover:text-black transition-colors cursor-pointer" onClick={onOpenBooking}>
                  SKIN RITUALS
                </span>
                <span className="text-[#59534C] hover:text-black transition-colors cursor-pointer" onClick={onOpenBooking}>
                  NAIL CARE
                </span>
                <span className="text-[#59534C] hover:text-black transition-colors cursor-pointer" onClick={onOpenBooking}>
                  LUXURY TREATMENTS
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Row: Hours, Social, Contacts matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-16 border-b border-[#E2DDD3] text-[10.5px] sm:text-[11px] tracking-[0.16em] uppercase text-[#423D37]">
          {/* Opening Hours */}
          <div className="md:col-span-5 flex flex-col sm:flex-row gap-6 sm:gap-12">
            <div>
              <span className="font-semibold text-black block mb-1">OPENING HOURS</span>
              <div className="text-[#5C554D] leading-relaxed">
                <div>MON — SAT</div>
                <div>10:00 AM — 8:00 PM</div>
              </div>
            </div>

            <div>
              <span className="font-semibold text-black block mb-1">SATURDAY</span>
              <div className="text-[#5C554D] leading-relaxed">
                <div>10:00 AM — 7:00 PM</div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="md:col-span-3 flex flex-col gap-2">
            <span className="font-semibold text-black mb-1">SOCIAL LINKS</span>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-[#5C554D] hover:text-black transition-colors">
              INSTAGRAM
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-[#5C554D] hover:text-black transition-colors">
              FACEBOOK
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="text-[#5C554D] hover:text-black transition-colors">
              PINTEREST
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="text-[#5C554D] hover:text-black transition-colors">
              TIKTOK
            </a>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 flex flex-col gap-2">
            <a href="tel:+123324598612" className="text-[#141312] font-medium hover:text-[#9e7f53] transition-colors">
              (+123) 3245-98612
            </a>
            <a href="mailto:hello@velina.com" className="text-[#5C554D] hover:text-black transition-colors">
              HELLO@VELINA.COM
            </a>
            <div className="mt-3">
              <span className="font-semibold text-black block mb-0.5">ADDRESS</span>
              <span className="text-[#5C554D]">245 MADISON AVENUE, NEW YORK, NY</span>
            </div>
          </div>
        </div>

        {/* Bottom Row: Legal Copyright & Massive Watermark © 2026 */}
        <div className="pt-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 text-[10.5px] sm:text-[11px] tracking-[0.16em] uppercase text-[#6B655D]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12">
            <span>© 2026 VELINA. ALL RIGHTS RESERVED.</span>
            <a href="#privacy" className="hover:text-black transition-colors">PRIVACY POLICY</a>
            <a href="#terms" className="hover:text-black transition-colors">TERMS & CONDITION</a>
          </div>

          {/* Giant © 2026 Watermark matching screenshot */}
          <div className="text-right select-none ml-auto">
            <span
              className="text-6xl sm:text-8xl md:text-9xl font-semibold tracking-tighter text-[#141312] leading-none"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              © 2026
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
