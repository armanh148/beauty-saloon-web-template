import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react'
import { FacebookIcon, InstagramIcon, TwitterIcon } from './Icons'

export default function SkinEnvyHero({ onOpenBooking, onScrollToShop }) {
  const slides = [
    {
      image:
        'https://cdn.prod.website-files.com/69db201b114de85f9288b627/69db201b114de85f9288b801_Hero%20Image%2003.jpg',
      headline: 'Redefining your beauty with precision craftsmanship.',
      description:
        'Tristique massa nisi venenatis auctor nullam. Urna feugiat quisque facilisis maecenas risus ac. Facilisis et rutrum praesent lacus fermentum auctor.',
    },
    {
      image:
        'https://cdn.prod.website-files.com/69db201b114de85f9288b627/69db201b114de85f9288b802_Hero%20Image%2001.jpg',
      headline: 'Experience timeless elegance & modern aesthetics.',
      description:
        'Bespoke hair artistry and dermatological therapies crafted by certified specialists to enhance your individual radiance and self-care.',
    },
    {
      image:
        'https://cdn.prod.website-files.com/69db201b114de85f9288b627/69db201b114de85f9288b800_Hero%20Image%2002.jpg',
      headline: 'Personalized luxury rituals for your hair & skin.',
      description:
        'Immerse in clinical precision and holistic relaxation designed to leave you feeling effortlessly rejuvenated from head to toe.',
    },
  ]

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen w-full flex items-center overflow-hidden bg-[#1E1E24]">
      {/* Background Image Carousel with smooth crossfade */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            current === idx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Cinematic Dark Gradient Overlay matching SkinEnvy */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E1E24]/90 via-[#1E1E24]/60 to-transparent" />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      ))}

      {/* Main Content Box */}
      <div className="relative z-20 max-w-[1400px] w-full mx-auto px-6 sm:px-10 pt-28 pb-20">
        <div className="max-w-2xl text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold uppercase tracking-wider text-[#ED5642] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#ED5642] animate-pulse" />
            Premium Beauty Salon & Spa
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-[4.2rem] font-bold tracking-tight text-white leading-[1.08] mb-6">
            {slides[current].headline}
          </h1>

          {/* Subtitle Description */}
          <p className="text-base sm:text-lg text-[#DDDDDF] font-normal leading-relaxed max-w-xl mb-10">
            {slides[current].description}
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              onClick={onOpenBooking}
              className="skinenvy-btn-primary"
            >
              Make a reservation
            </button>

            <button
              onClick={onScrollToShop}
              className="px-8 py-3.5 rounded-full bg-white text-[#1E1E24] hover:bg-[#1E1E24] hover:text-white border border-white font-semibold text-[0.95rem] transition-all duration-300 shadow-md cursor-pointer flex items-center gap-2"
            >
              <span>Explore Shop</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Slide Navigation Buttons: PREVIOUS / NEXT */}
      <div className="absolute bottom-8 right-6 sm:right-10 z-20 flex items-center gap-3">
        <button
          onClick={prevSlide}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-[#ED5642] text-white backdrop-blur-md border border-white/20 text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>PREVIOUS</span>
        </button>

        <button
          onClick={nextSlide}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-[#ED5642] text-white backdrop-blur-md border border-white/20 text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer"
        >
          <span>NEXT</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Floating Side Social Icons */}
      <div className="hidden lg:flex absolute right-10 top-1/2 -translate-y-1/2 z-20 flex-col gap-5 text-white/60">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
          className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#ED5642] hover:border-[#ED5642] hover:text-white transition-all duration-300"
        >
          <FacebookIcon className="w-4 h-4" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#ED5642] hover:border-[#ED5642] hover:text-white transition-all duration-300"
        >
          <InstagramIcon className="w-4 h-4" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noreferrer"
          className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#ED5642] hover:border-[#ED5642] hover:text-white transition-all duration-300"
        >
          <TwitterIcon className="w-4 h-4" />
        </a>
      </div>
    </section>
  )
}
