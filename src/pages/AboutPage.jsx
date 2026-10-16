import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, Award, Sparkles, BookOpen, ShieldCheck, HeartHandshake, ArrowRight, ArrowUpRight } from 'lucide-react'
import SkinEnvyAbout from '../components/SkinEnvyAbout'
import SkinEnvyStats from '../components/SkinEnvyStats'

export default function AboutPage({ onOpenBooking }) {
  const milestones = [
    { year: '1998', title: 'First Salon in Tariq Road (PECHS)', desc: 'Founded by senior cosmetologist Najla with a commitment to European salon standards and bespoke Pakistani bridal makeovers.' },
    { year: '2005', title: 'Sindh Board Accreditation', desc: 'Officially recognized by the Sindh Board of Technical Education to offer government-approved vocational diplomas in cosmetology.' },
    { year: '2014', title: 'Expansion Across Gulshan & Nazimabad', desc: 'Introduced medical-grade HydraFacial MD equipment and established private VIP bridal suites for Karachi brides.' },
    { year: '2022', title: 'Organic Hair Smoothing Pioneer', desc: 'Launched formaldehyde-free Nanoplastia organic hair treatments, setting a new benchmark for humidity-resistant hair in coastal Karachi.' },
    { year: '2026', title: '9 Flagship Salons & Over 50,000 Brides', desc: 'Today operating 9 premier locations with 100+ licensed stylists, serving generations of Karachi families.' },
  ]

  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Medical-Grade Sterilization',
      desc: 'Autoclaved metal tools, single-use disposables, and certified derma-sanitization for 100% infection-free peace of mind.',
    },
    {
      icon: Sparkles,
      title: 'Luxury Global Formulations',
      desc: 'Only authentic international cosmetics: Charlotte Tilbury, MAC, NARS, Huda Beauty, and Dior Beauty for airbrushed longevity.',
    },
    {
      icon: Award,
      title: 'Sindh Board Master Faculty',
      desc: 'Our senior directors are certified trainers with decades of bridal runway, television, and editorial fashion experience.',
    },
    {
      icon: HeartHandshake,
      title: 'Private VIP Bridal Lounges',
      desc: 'Dedicated soundproof suites with private dressers, refreshments, bridal helpers, and photography lighting at our flagship branches.',
    },
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header Banner */}
      <section className="bg-white border-b border-[#EAEAEB] py-16 sm:py-24">
        <div className="w-full px-6 sm:px-10 lg:px-14">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ED5642] mb-4">
              <Link to="/" className="hover:underline text-[#5A5A63]">HOME</Link>
              <span>/</span>
              <span>ABOUT NAJLA’S</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-[#1E1E24] leading-[1.1] tracking-tight mb-6">
              25 Years of Redefining Luxury Bridal Care & Clinical Aesthetics in Karachi.
            </h1>
            <p className="text-base sm:text-lg text-[#5A5A63] leading-relaxed max-w-3xl">
              From our flagship bridal lounge on Tariq Road to 9 accessible branches across the metropolis, Najla’s Beauty Clinic & Institute combines international cosmetic science with timeless bridal artistry.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <SkinEnvyStats />

      {/* Main About Component matching approved layout */}
      <SkinEnvyAbout onOpenBooking={onOpenBooking} />

      {/* 4 Pillars of Excellence */}
      <section className="py-24 sm:py-32 border-b border-[#EAEAEB] bg-white">
        <div className="w-full px-6 sm:px-10 lg:px-14">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ED5642] block mb-3">
              THE NAJLA’S DISTINCTION
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#1E1E24] leading-[1.12] tracking-tight">
              Why generations of Karachi families entrust us with their biggest milestones.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="bg-[#F7F7F8] p-8 border border-[#EAEAEB] flex flex-col justify-between card-hover"
                >
                  <div>
                    <div className="w-12 h-12 bg-white text-[#ED5642] flex items-center justify-center border border-[#EAEAEB] mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1E1E24] mb-3">{item.title}</h3>
                    <p className="text-sm text-[#5A5A63] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Sindh Board Beautician Training Institute Spotlight */}
      <section className="py-24 sm:py-32 border-b border-[#EAEAEB] bg-white">
        <div className="w-full px-6 sm:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 overflow-hidden border border-[#EAEAEB] aspect-[4/3] bg-white">
              <img
                src="https://cdn.prod.website-files.com/69db201b114de85f9288b638/69db201b114de85f9288b75c_Team%20image.jpg"
                alt="Sindh Board Institute Students"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#ED5642] mb-3">
                <BookOpen className="w-4 h-4" />
                <span>GOVERNMENT ACCREDITED TRAINING</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-[#1E1E24] leading-[1.12] tracking-tight mb-6">
                Najla’s Beauty Institute of Cosmetology & Aesthetics.
              </h2>
              <p className="text-base text-[#5A5A63] leading-relaxed mb-8">
                Officially recognized by the Sindh Board of Technical Education, our institute has trained over 12,000 professional beauticians, bridal makeup artists, and salon entrepreneurs across Pakistan.
              </p>

              <div className="flex flex-col gap-3.5 mb-10 text-sm font-semibold text-[#1E1E24]">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#ED5642]" />
                  <span>3-Month Professional Cosmetology & Hair Design Diploma</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#ED5642]" />
                  <span>6-Month Comprehensive Master Cosmetology & Salon Management</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#ED5642]" />
                  <span>100% Practical hands-on training on real salon clients</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#ED5642]" />
                  <span>Government recognized certification accepted globally</span>
                </div>
              </div>

              <a
                href="https://wa.me/923341430303?text=Hi%20Najla's,%20I%20would%20like%20information%20on%20Institute%20courses"
                target="_blank"
                rel="noreferrer"
                className="skinenvy-btn-primary flex items-center gap-2 group w-fit"
              >
                <span>Inquire About Course Admissions</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 25-Year Heritage Timeline */}
      <section className="py-24 sm:py-32 border-b border-[#EAEAEB] bg-white">
        <div className="w-full px-6 sm:px-10 lg:px-14">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ED5642] block mb-3">
              OUR HISTORIC JOURNEY
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#1E1E24] leading-[1.12] tracking-tight">
              A quarter-century of pioneering beauty standards in Karachi.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {milestones.map((m, idx) => (
              <div key={idx} className="border-t-2 border-[#ED5642] pt-6 flex flex-col justify-between">
                <div>
                  <span className="text-2xl font-extrabold text-[#ED5642] block mb-2">{m.year}</span>
                  <h4 className="text-base font-bold text-[#1E1E24] mb-2">{m.title}</h4>
                  <p className="text-xs text-[#5A5A63] leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
