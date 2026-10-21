import React from 'react'
import { Link } from 'react-router-dom'
import { Star, Quote, CheckCircle2, Heart, ArrowUpRight, MessageCircle } from 'lucide-react'
import SkinEnvyTestimonials from '../components/SkinEnvyTestimonials'

export default function ReviewsPage({ onOpenBooking }) {
  const extendedReviews = [
    {
      author: 'Fatima Siddiqui',
      branch: 'Gulshan Bait-ul-Mukarram',
      treatment: 'Walima Airbrush & Soft Waves',
      date: 'October 2026',
      stars: 5,
      review:
        'Najla’s Gulshan team treated me like family! The VIP bridal room was peaceful and relaxing. My makeup stayed intact from 7 PM until 4 AM without a single blot needed. Truly 10/10!',
    },
    {
      author: 'Hina Tariq',
      branch: 'Tariq Road (PECHS Flagship)',
      treatment: '3-Day Grand Wedding Package',
      date: 'September 2026',
      stars: 5,
      review:
        'Booked their complete 3-day package for Barat, Walima, and Mehndi. Each look was completely distinct and breathtaking. The complimentary HydraFacial beforehand made my skin look porcelain.',
    },
    {
      author: 'Mehak Farooqui',
      branch: 'Gulistan-e-Jauhar Block 17',
      treatment: '100% Organic Nanoplastia',
      date: 'September 2026',
      stars: 5,
      review:
        'I was terrified of damaging my fine hair with keratin. Their technical director Tariq explained Nanoplastia and did a strand test first. Now 3 months later, zero frizz even in Karachi rains!',
    },
    {
      author: 'Dr. Rabia Khan',
      branch: 'North Nazimabad Hyderi',
      treatment: 'HydraFacial MD® Clinical',
      date: 'August 2026',
      stars: 5,
      review:
        'As a physician, hygiene is my first priority. Najla’s clinic uses autoclaved tools and opened sterile tips right in front of me. Painless extraction and noticeable skin clarity.',
    },
    {
      author: 'Ayesha Bilgrami',
      branch: 'Malir Cantt Branch',
      treatment: 'Party Makeup & Gel Polish',
      date: 'August 2026',
      stars: 5,
      review:
        'Super convenient location inside Cantt. Courteous staff, zero wait time when you book ahead, and tasteful elegant glam that didn’t look cakey or overdone.',
    },
    {
      author: 'Nimra Javed',
      branch: 'Safoora Chowrangi Branch',
      treatment: 'Sindh Board Cosmetology Graduate',
      date: 'July 2026',
      stars: 5,
      review:
        'Completed the 6-month Cosmetology Diploma at Najla’s Institute. The hands-on client practice gave me the confidence to open my own home studio. Forever grateful to Madame Najla!',
    },
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <section className="bg-white border-b border-[#EAEAEB] py-10 sm:py-20">
        <div className="w-full px-4 sm:px-10 lg:px-14">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ED5642] mb-3">
              <Link to="/" className="hover:underline text-[#5A5A63]">HOME</Link>
              <span>/</span>
              <span>CLIENT EXPERIENCES</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#1E1E24] leading-[1.12] tracking-tight mb-4 sm:mb-6">
              Loved by Over 50,000 Karachi Brides & Clinic Guests.
            </h1>
            <p className="text-sm sm:text-lg text-[#5A5A63] leading-relaxed max-w-3xl">
              Read authentic, unfiltered testimonials from brides, clinical patients, and salon patrons who trust Najla’s Beauty Clinic & Institute across our 9 Karachi locations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Testimonial Component */}
      <SkinEnvyTestimonials onOpenBooking={onOpenBooking} />

      {/* Extended Client Reviews Grid */}
      <section className="py-12 sm:py-24 border-b border-[#EAEAEB] bg-white">
        <div className="w-full px-4 sm:px-10 lg:px-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-16 scroll-reveal">
            <div className="max-w-xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ED5642] block mb-2 sm:mb-3">
                RECENT TESTIMONIALS
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1E1E24] leading-[1.15] tracking-tight">
                Stories from every Karachi branch.
              </h2>
            </div>

            <div className="flex items-center gap-2 p-3 sm:p-3.5 bg-[#F7F7F8] hover:bg-[#FDF6F4] border border-[#EAEAEB] hover:border-[#ED5642]/30 rounded-xl sm:rounded-2xl text-[11px] sm:text-xs font-bold text-[#1E1E24] transition-all duration-300 shadow-2xs w-fit">
              <div className="flex text-[#ED5642]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span>4.9 / 5.0 Average Rating</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {extendedReviews.map((item, idx) => {
              const delayClass = `scroll-reveal-delay-${(idx % 6) + 1}`
              return (
                <div
                  key={idx}
                  className={`scroll-reveal ${delayClass} bg-[#F7F7F8] hover:bg-white border border-[#EAEAEB] hover:border-[#ED5642]/50 p-4 sm:p-7 rounded-2xl flex flex-col justify-between card-hover hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 group`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <div className="flex text-[#ED5642]">
                        {[...Array(item.stars)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <span className="text-[10px] text-[#8B8B93] uppercase tracking-wider">{item.date}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#5A5A63] leading-relaxed mb-4 sm:mb-6 italic group-hover:text-[#1E1E24] transition-colors duration-300">
                      "{item.review}"
                    </p>
                  </div>

                  <div className="pt-3 sm:pt-4 border-t border-[#EAEAEB]">
                    <h4 className="font-bold text-sm text-[#1E1E24] group-hover:text-[#ED5642] transition-colors duration-300">{item.author}</h4>
                    <span className="text-[11px] text-[#ED5642] font-semibold block">{item.treatment}</span>
                    <span className="text-[10px] text-[#8B8B93] block mt-0.5">{item.branch}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

    </div>
  )
}
