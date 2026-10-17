import React from 'react'
import { Star, ArrowRight, Play } from 'lucide-react'

export default function SkinEnvyAbout({ onScrollToShop, onOpenBooking }) {
  return (
    <section id="about" className="w-full py-20 sm:py-28 bg-white border-b border-[#EAEAEB]">
      <div className="w-full px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
        {/* ================= LEFT COLUMN: BADGE AT TOP, CTA AT BOTTOM ================= */}
        <div className="lg:col-span-3 flex flex-col justify-between items-start gap-8 scroll-reveal-left">
          {/* Top Badge matching screenshot */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 border border-[#1E1E24]/15 bg-white text-xs font-bold uppercase tracking-wider text-[#1E1E24] rounded-full shadow-2xs hover:border-[#ED5642] hover:text-[#ED5642] transition-colors duration-300">
            <Star className="w-3.5 h-3.5 fill-[#ED5642] text-[#ED5642]" />
            <span>ABOUT US</span>
          </div>

          {/* Bottom Button matching screenshot */}
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-3.5 bg-[#ED5642] hover:bg-[#D8432F] text-white pl-6 pr-2.5 py-2.5 font-bold text-xs sm:text-sm tracking-wide rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1.5 cursor-pointer group w-fit mt-auto"
          >
            <span>Discover More</span>
            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1.5 group-hover:bg-white group-hover:text-[#ED5642]">
              <ArrowRight className="w-4 h-4 text-white group-hover:text-[#ED5642] transition-colors" />
            </span>
          </button>
        </div>

        {/* ================= RIGHT COLUMN: HEADLINE + 2-COLUMN BOTTOM ================= */}
        <div className="lg:col-span-9 flex flex-col gap-10 sm:gap-12">
          {/* Editorial Headline matching screenshot */}
          <h2 className="text-2xl sm:text-4xl lg:text-[2.65rem] font-normal text-[#1E1E24] leading-[1.25] tracking-tight max-w-4xl scroll-reveal">
            Your wellness retreat starts right here with restorative therapies, skilled professionals, and a truly refreshing spa experience.
          </h2>

          {/* Bottom Row: 3-Image Collage (Left) + Metrics Card (Right) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            {/* 3-Image Collage matching screenshot */}
            <div className="md:col-span-7 grid grid-cols-12 gap-3 min-h-[320px] scroll-reveal-scale">
              {/* Main Large / Tall Image on Left */}
              <div className="col-span-7 overflow-hidden rounded-2xl border border-[#EAEAEB] bg-[#EAEAEB] group shadow-xs cursor-pointer hover:border-[#ED5642]/40 transition-colors">
                <img
                  src="https://cdn.prod.website-files.com/69db201b114de85f9288b627/69db201b114de85f9288b7bd_About%20Image%201.webp"
                  alt="Facial Restorative Therapy"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 group-hover:brightness-105"
                />
              </div>

              {/* Two Stacked Images on Right */}
              <div className="col-span-5 flex flex-col gap-3">
                {/* Top Stacked Image */}
                <div className="flex-1 overflow-hidden rounded-2xl border border-[#EAEAEB] bg-[#EAEAEB] group min-h-[145px] shadow-xs cursor-pointer hover:border-[#ED5642]/40 transition-colors">
                  <img
                    src="https://cdn.prod.website-files.com/69db201b114de85f9288b627/69db201b114de85f9288b7be_About%20Image%202.webp"
                    alt="Skilled Head & Hair Massage"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 group-hover:brightness-105"
                  />
                </div>

                {/* Bottom Stacked Image with Play Icon Button */}
                <div className="flex-1 overflow-hidden rounded-2xl border border-[#EAEAEB] bg-[#EAEAEB] relative group min-h-[145px] shadow-xs cursor-pointer hover:border-[#ED5642]/40 transition-colors">
                  <img
                    src="https://cdn.prod.website-files.com/69db201b114de85f9288b627/69db201b114de85f9288b7e2_Why%20Us%20Image%202.webp"
                    alt="Refreshing Spa Treatment"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 group-hover:brightness-105"
                  />
                  {/* Video Play Button Overlay matching screenshot */}
                  <div className="absolute bottom-3 right-3 z-10 w-10 h-10 rounded-full bg-white/95 backdrop-blur-md shadow-md flex items-center justify-center text-[#ED5642] group-hover:scale-115 group-hover:bg-[#ED5642] group-hover:text-white transition-all duration-300 animate-pulse-coral">
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Info & Metrics Card matching screenshot */}
            <div className="md:col-span-5 bg-[#F7F7F8]/80 hover:bg-white border border-[#EAEAEB] hover:border-[#ED5642]/40 rounded-2xl p-7 sm:p-8 flex flex-col justify-between shadow-xs card-hover transition-all duration-500 scroll-reveal-right delay-200">
              {/* Paragraph */}
              <p className="text-xs sm:text-sm text-[#5A5A63] leading-relaxed mb-8">
                Enjoy revitalizing spa services tailored to renew your energy, promote relaxation, and bring balance to your body and mind.
              </p>

              {/* Metrics Row with Divider */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-[#EAEAEB]">
                <div className="group cursor-default">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#1E1E24] group-hover:text-[#ED5642] tracking-tight mb-1 transition-colors">
                    25+ Yrs
                  </div>
                  <div className="text-[11px] sm:text-xs text-[#8B8B93] leading-snug">
                    Powering Aesthetic Excellence in Karachi
                  </div>
                </div>

                <div className="border-l border-[#EAEAEB] pl-4 group cursor-default">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#1E1E24] group-hover:text-[#ED5642] tracking-tight mb-1 transition-colors">
                    98%
                  </div>
                  <div className="text-[11px] sm:text-xs text-[#8B8B93] leading-snug">
                    Our Happy Brides & Loyal Clients
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)
}
