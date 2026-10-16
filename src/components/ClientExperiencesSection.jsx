import React, { useState } from 'react'
import sophiaAvatar from '../../assets/images/avatar-sophia.jpg'
import emmaAvatar from '../../assets/images/avatar-emma.jpg'

export default function ClientExperiencesSection() {
  const [currentPage, setCurrentPage] = useState(0)

  const testimonials = [
    [
      {
        rating: '4.9/ AVERAGE RATING',
        quote:
          '“FROM THE MOMENT I WALKED INTO VELINA, EVERYTHING FELT CALMING, ELEGANT, AND INCREDIBLY PROFESSIONAL. THE ATTENTION TO DETAIL, PERSONALIZED CARE, AND FINAL RESULTS EXCEEDED EVERY EXPECTATION.”',
        name: 'SOPHIA BENNETT',
        role: 'BRIDAL MAKEUP CLIENT',
        avatar: sophiaAvatar,
      },
      {
        rating: '4.9/ AVERAGE RATING',
        quote:
          '“THE ATMOSPHERE IS ABSOLUTELY BEAUTIFUL, AND THE TEAM TRULY UNDERSTANDS HOW TO CREATE A LUXURY EXPERIENCE THAT FEELS PERSONAL AND COMFORTABLE.”',
        name: 'EMMA COLLINS',
        role: 'SKIN TREATMENT CLIENT',
        avatar: emmaAvatar,
      },
    ],
    [
      {
        rating: '5.0/ AVERAGE RATING',
        quote:
          '“THE HAIR ARTISTRY AT VELINA IS SECOND TO NONE. THE PRECISION CUT AND CUSTOM BALAYAGE GAVE MY HAIR A LUMINOUS, WEIGHTLESS BOUNCE THAT LASTS FOR MONTHS.”',
        name: 'CAMILLE DUPONT',
        role: 'HAIR ARTISTRY CLIENT',
        avatar: sophiaAvatar,
      },
      {
        rating: '4.9/ AVERAGE RATING',
        quote:
          '“AN OASIS OF PEACE IN THE HEART OF MANHATTAN. THE COLLAGEN INFUSION FACIAL RESTORED A RADIANCE I HAVEN’T SEEN IN YEARS. UNMATCHED ATTENTION TO CARE.”',
        name: 'ISABELLA ROSSI',
        role: 'VIP SPA CLIENT',
        avatar: emmaAvatar,
      },
    ],
  ]

  const activeTestimonials = testimonials[currentPage]

  return (
    <section id="testimonials" className="relative bg-[#F7F4EE] text-[#141312] py-24 sm:py-32 overflow-hidden border-b border-[#E2DDD3]">
      {/* Architectural vertical guide lines */}
      <div className="absolute inset-0 pointer-events-none flex justify-between max-w-[1700px] mx-auto px-6 sm:px-12">
        <div className="w-[1px] h-full bg-[#E5DFD4]" />
        <div className="w-[1px] h-full bg-[#E5DFD4]" />
        <div className="w-[1px] h-full bg-[#E5DFD4] hidden md:block" />
        <div className="w-[1px] h-full bg-[#E5DFD4] hidden lg:block" />
        <div className="w-[1px] h-full bg-[#E5DFD4]" />
      </div>

      <div className="relative z-10 max-w-[1700px] mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Sub-tag & Stats & Arrows matching screenshot */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <span className="text-[11px] tracking-[0.22em] uppercase font-medium text-[#4A453F]">
                CLIENT EXPERIENCES
              </span>

              {/* 4 Stats Grid matching screenshot */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-10 mt-16 sm:mt-24">
                <div>
                  <div className="text-2xl sm:text-3xl font-light text-[#141312]">
                    4.9★
                  </div>
                  <div className="mt-1 text-[10px] sm:text-[10.5px] tracking-[0.16em] uppercase text-[#6B655D] font-medium leading-relaxed">
                    AVERAGE CLIENT RATING
                  </div>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-light text-[#141312]">
                    5K+
                  </div>
                  <div className="mt-1 text-[10px] sm:text-[10.5px] tracking-[0.16em] uppercase text-[#6B655D] font-medium leading-relaxed">
                    HAPPY CLIENTS SERVED
                  </div>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-light text-[#141312]">
                    92%
                  </div>
                  <div className="mt-1 text-[10px] sm:text-[10.5px] tracking-[0.16em] uppercase text-[#6B655D] font-medium leading-relaxed">
                    RETURNING CLIENT RATE
                  </div>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-light text-[#141312]">
                    15+
                  </div>
                  <div className="mt-1 text-[10px] sm:text-[10.5px] tracking-[0.16em] uppercase text-[#6B655D] font-medium leading-relaxed">
                    CERTIFIED BEAUTY SPECIALISTS
                  </div>
                </div>
              </div>
            </div>

            {/* Slider navigation arrows matching screenshot */}
            <div className="flex items-center gap-6 mt-16 sm:mt-24 pt-4">
              <button
                onClick={() => setCurrentPage((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                aria-label="Previous client reviews"
                className="text-2xl font-light text-[#141312] hover:text-[#9e7f53] transition-colors p-1"
              >
                ←
              </button>
              <button
                onClick={() => setCurrentPage((prev) => (prev + 1) % testimonials.length)}
                aria-label="Next client reviews"
                className="text-2xl font-light text-[#141312] hover:text-[#9e7f53] transition-colors p-1"
              >
                →
              </button>
            </div>
          </div>

          {/* Right Column: Headline, Description & 2 Testimonial Cards */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div>
              {/* Grand Headline matching screenshot */}
              <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-light leading-[1.08] tracking-[0.02em] text-[#141312]">
                <span className="block">
                  <span className="font-flourish">W</span>HO VALUE{' '}
                  <span className="font-flourish">L</span>UXURY
                </span>
                <span className="block">
                  <span className="font-flourish-ampersand">&</span> CARE
                </span>
              </h2>

              {/* Subtitle Description */}
              <p className="mt-8 sm:mt-10 max-w-2xl text-[11px] sm:text-[12px] tracking-[0.14em] uppercase text-[#4A453F] font-normal leading-[1.8]">
                FROM PERSONALIZED BEAUTY TREATMENTS TO RELAXING SALON EXPERIENCES, OUR CLIENTS TRUST VELINA FOR RESULTS THAT FEEL ELEGANT, EFFORTLESS, AND CONFIDENCE-BOOSTING.
              </p>
            </div>

            {/* Two Side-by-Side Testimonial Cards matching screenshot */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 sm:mt-20">
              {activeTestimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="border border-[#DDD6CB] bg-[#F7F4EE] p-8 sm:p-10 flex flex-col justify-between min-h-[380px] hover:border-[#141312]/40 transition-colors duration-300"
                >
                  {/* Top Rating */}
                  <div>
                    <div className="flex items-center gap-2 mb-6">
                      <div className="flex text-[#C5A880] text-xs tracking-widest">
                        ★★★★★
                      </div>
                      <span className="text-[10px] tracking-[0.16em] uppercase text-[#6B655D] font-medium">
                        {t.rating}
                      </span>
                    </div>

                    {/* Quote */}
                    <p className="text-[11.5px] sm:text-[12px] tracking-[0.12em] uppercase text-[#242220] font-normal leading-[1.85]">
                      {t.quote}
                    </p>
                  </div>

                  {/* Author Avatar & Name */}
                  <div className="flex items-center gap-4 mt-8 pt-6 border-t border-[#E8E2D7]">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-[#DDD6CB] border border-[#DDD6CB] flex-shrink-0">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div>
                      <div className="text-[11px] tracking-[0.18em] uppercase text-[#141312] font-semibold">
                        {t.name}
                      </div>
                      <div className="text-[10px] tracking-[0.14em] uppercase text-[#736C64] font-normal mt-0.5">
                        {t.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
