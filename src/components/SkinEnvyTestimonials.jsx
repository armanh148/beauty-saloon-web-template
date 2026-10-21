import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote, ArrowUpRight } from 'lucide-react'

export default function SkinEnvyTestimonials({ onOpenBooking }) {
  const [current, setCurrent] = useState(0)

  const reviews = [
    {
      quote:
        '“ Najla’s Tariq Road team made my Barat look absolute royalty! The airbrush foundation didn’t budge through tears and endless hugs. Truly the best bridal studio in Karachi. ”',
      author: 'Mahnoor Farooq',
      time: 'PECHS Branch Bride',
      image:
        'https://cdn.prod.website-files.com/69db201b114de85f9288b627/69db201b114de85f9288b7d4_Testimonail%20Image.webp',
      service: 'Barat Signature Couture Makeover',
    },
    {
      quote:
        '“ Got the 7-Step HydraFacial MD at the Gulshan KDA branch. The extraction was painless and my glow lasted over a month! Outstanding clinical hygiene and expert staff. ”',
      author: 'Dr. Sarah Qureshi',
      time: 'Gulshan Branch Client',
      image:
        'https://cdn.prod.website-files.com/69db201b114de85f9288b627/69db201b114de85f9288b7d3_Testimonail%20Image%202.webp',
      service: 'HydraFacial MD & Derma Glo Infusion',
    },
    {
      quote:
        '“ Had my Nanoplastia organic smoothing done at the North Nazimabad Hyderi salon. My frizzy bleached hair is now like glass silk. Everyone keeps asking where I got it done! ”',
      author: 'Anum Rizvi',
      time: 'Hyderi Branch Client',
      image:
        'https://cdn.prod.website-files.com/69db201b114de85f9288b627/69db201b114de85f9288b7d5_Testimonail%20Image%203.webp',
      service: 'Nanoplastia Organic Hair Smoothing',
    },
    {
      quote:
        '“ Booked their 3-day complete bridal package for Barat, Walima, and Mehndi. Each look was distinct and breathtaking. Their VIP dressing lounge was so comfortable! ”',
      author: 'Hina Tariq',
      time: 'PECHS Flagship Bride',
      image:
        'https://cdn.prod.website-files.com/69db201b114de85f9288b638/69db201b114de85f9288b744_Team%20Image%208.jpg',
      service: 'Complete 3-Day Wedding Package',
    },
  ]

  const nextReview = () => setCurrent((prev) => (prev + 1) % reviews.length)
  const prevReview = () => setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length)

  const review1 = reviews[current]
  const review2 = reviews[(current + 1) % reviews.length]

  return (
    <section id="testimonials" className="w-full py-12 sm:py-24 bg-[#F7F7F8] border-b border-[#EAEAEB]">
      <div className="w-full px-4 sm:px-10 lg:px-14">
        {/* Responsive Layout: 1 card on mobile with controls, 3 cols on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {/* ================= COLUMN 1: HEADING & CTA ================= */}
          <div className="flex flex-col justify-between py-2 scroll-reveal-left">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1 sm:py-1.5 bg-white border border-[#EAEAEB] rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#ED5642] mb-3 shadow-2xs hover:border-[#ED5642] transition-colors duration-300">
                <span className="w-2 h-2 rounded-full bg-[#ED5642] animate-pulse" />
                CLIENT EXPERIENCES
              </span>

              <h2 className="text-2xl sm:text-4xl xl:text-[2.5rem] font-bold text-[#1E1E24] leading-[1.15] tracking-tight mb-3 sm:mb-5">
                Hear from Karachi brides & clinic clients.
              </h2>

              <p className="text-xs sm:text-sm text-[#5A5A63] leading-relaxed mb-6 sm:mb-8">
                Over 50,000 brides, salon guests, and training graduates have trusted Najla’s Beauty Clinic & Institute across our 9 Karachi locations.
              </p>
            </div>

            <div className="flex items-center justify-between sm:justify-start gap-4">
              <button
                onClick={onOpenBooking}
                className="skinenvy-btn-primary flex items-center gap-2 group w-fit cursor-pointer rounded-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 touch-feedback text-xs py-2.5 px-5 sm:px-6"
              >
                <span>Make an appointment</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>

              {/* Mobile Arrows in Header for quick access */}
              <div className="flex lg:hidden items-center gap-1.5">
                <button
                  onClick={prevReview}
                  className="w-9 h-9 rounded-full bg-white border border-[#EAEAEB] hover:border-[#ED5642] hover:text-[#ED5642] flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95 touch-feedback"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextReview}
                  className="w-9 h-9 rounded-full bg-white border border-[#EAEAEB] hover:border-[#ED5642] hover:text-[#ED5642] flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95 touch-feedback"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* ================= COLUMN 2: REVIEW CARD 1 ================= */}
          <div className="scroll-reveal delay-100 bg-[#F7F7F8]/60 hover:bg-white border border-[#EAEAEB] hover:border-[#ED5642]/50 rounded-3xl p-5 sm:p-8 flex flex-col justify-between shadow-xs card-hover hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group touch-feedback">
            <div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-[#ED5642]/10 text-[#ED5642] flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:bg-[#ED5642] group-hover:text-white transition-all duration-300">
                <Quote className="w-4 h-4 sm:w-5 sm:h-5 rotate-180" />
              </div>

              <p className="text-sm sm:text-lg font-bold text-[#1E1E24] leading-[1.4] tracking-tight mb-6 sm:mb-8 group-hover:text-[#ED5642] transition-colors duration-300">
                {review1.quote}
              </p>
            </div>

            <div className="pt-4 sm:pt-6 border-t border-[#EAEAEB] flex items-center justify-between gap-3 mt-auto">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden bg-[#EAEAEB] border border-[#EAEAEB] group-hover:border-[#ED5642] flex-shrink-0 shadow-xs transition-colors duration-300">
                  <img
                    src={review1.image}
                    alt={review1.author}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="min-w-0">
                  <h5 className="font-bold text-xs sm:text-sm text-[#1E1E24] group-hover:text-[#ED5642] transition-colors">{review1.author}</h5>
                  <p className="text-[10px] sm:text-[11px] text-[#71717A] leading-tight mt-0.5 truncate">
                    {review1.service} • {review1.time}
                  </p>
                </div>
              </div>

              {/* Mobile Card Dots Indicator */}
              <div className="flex lg:hidden items-center gap-1">
                {reviews.map((_, rIdx) => (
                  <span
                    key={rIdx}
                    className={`h-1.5 rounded-full transition-all ${
                      current === rIdx ? 'w-4 bg-[#ED5642]' : 'w-1.5 bg-[#8B8B93]/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ================= COLUMN 3: REVIEW CARD 2 (SIDE-BY-SIDE ON DESKTOP) ================= */}
          <div className="hidden lg:flex scroll-reveal-right delay-200 bg-[#F7F7F8]/60 hover:bg-white border border-[#EAEAEB] hover:border-[#ED5642]/50 rounded-3xl p-7 sm:p-8 flex-col justify-between shadow-xs card-hover hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#ED5642]/10 text-[#ED5642] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#ED5642] group-hover:text-white transition-all duration-300">
                <Quote className="w-5 h-5 rotate-180" />
              </div>

              <p className="text-base sm:text-lg font-bold text-[#1E1E24] leading-[1.4] tracking-tight mb-8 group-hover:text-[#ED5642] transition-colors duration-300">
                {review2.quote}
              </p>
            </div>

            <div className="pt-6 border-t border-[#EAEAEB] flex items-center justify-between gap-3 mt-auto">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-11 h-11 rounded-full overflow-hidden bg-[#EAEAEB] border border-[#EAEAEB] group-hover:border-[#ED5642] flex-shrink-0 shadow-xs transition-colors duration-300">
                  <img
                    src={review2.image}
                    alt={review2.author}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="min-w-0">
                  <h5 className="font-bold text-sm text-[#1E1E24] group-hover:text-[#ED5642] transition-colors">{review2.author}</h5>
                  <p className="text-[11px] text-[#71717A] leading-tight mt-0.5 truncate">
                    {review2.service} • {review2.time}
                  </p>
                </div>
              </div>

              {/* Desktop Navigation Arrows */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={prevReview}
                  className="w-9 h-9 rounded-full border border-[#EAEAEB] hover:border-[#ED5642] hover:bg-[#ED5642] hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-xs"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextReview}
                  className="w-9 h-9 rounded-full border border-[#EAEAEB] hover:border-[#ED5642] hover:bg-[#ED5642] hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-xs"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
