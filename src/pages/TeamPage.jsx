import React from 'react'
import { Link } from 'react-router-dom'
import { Award, Sparkles, Star, MapPin, ArrowUpRight } from 'lucide-react'
import SkinEnvyTeam from '../components/SkinEnvyTeam'

export default function TeamPage({ onOpenBooking }) {
  const masterFaculty = [
    {
      name: 'Madame Najla R.',
      role: 'Founder & Master Creative Director',
      experience: '25+ Years Experience',
      branch: 'Tariq Road (PECHS Flagship)',
      specialty: 'Signature Royal Barat Couture & Runway Direction',
      bio: 'Pioneered luxury bridal aesthetics in Karachi. Trained in London and Paris, Madame Najla has personally styled over 15,000 brides and trained multiple generations of Pakistan’s leading salon owners.',
      image: 'https://cdn.prod.website-files.com/69db201b114de85f9288b627/69db201b114de85f9288b7e5_About%20Image%203.webp',
    },
    {
      name: 'Dr. Ayesha Malik',
      role: 'Head of Clinical Dermatology & Aesthetics',
      experience: '12+ Years Experience',
      branch: 'Gulshan-e-Iqbal KDA Clinic',
      specialty: 'HydraFacial MD®, Chemical Peels & Skin Barrier Repair',
      bio: 'Certified clinical esthetician specializing in non-invasive skin rejuvenation, hormonal acne management, and custom pre-bridal dermatological roadmaps.',
      image: 'https://cdn.prod.website-files.com/69db201b114de85f9288b638/69db201b114de85f9288b744_Team%20Image%208.jpg',
    },
    {
      name: 'Zainab Qazi',
      role: 'Senior Master Bridal Artist',
      experience: '10+ Years Experience',
      branch: 'North Nazimabad (Hyderi)',
      specialty: 'Dewy Walima Airbrush & Modern Soft Glam',
      bio: 'Renowned for seamless skin-like foundation finishes that withstand tears, bright reception cameras, and Karachi heat without creasing.',
      image: 'https://cdn.prod.website-files.com/69db201b114de85f9288b638/69db201b114de85f9288b75c_Team%20image.jpg',
    },
    {
      name: 'Tariq Mehmood',
      role: 'Technical Hair Director & Color Specialist',
      experience: '14+ Years Experience',
      branch: 'Gulistan-e-Jauhar Block 17',
      specialty: 'Organic Nanoplastia & Balayage Highlights',
      bio: 'Master colorist trained in organic formaldehyde-free protein smoothing. Expert in neutralizing brassy undertones on dark Asian hair.',
      image: 'https://cdn.prod.website-files.com/69db201b114de85f9288b638/69db201b114de85f9288b743_Team%20Image%206.jpg',
    },
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <section className="bg-white border-b border-[#EAEAEB] py-16 sm:py-24">
        <div className="w-full px-6 sm:px-10 lg:px-14">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ED5642] mb-4">
              <Link to="/" className="hover:underline text-[#5A5A63]">HOME</Link>
              <span>/</span>
              <span>MASTER DIRECTORS & ARTISTS</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-[#1E1E24] leading-[1.1] tracking-tight mb-6">
              Meet Karachi’s Foremost Bridal Stylists & Clinical Estheticians.
            </h1>
            <p className="text-base sm:text-lg text-[#5A5A63] leading-relaxed max-w-3xl">
              Over 100 passionate, certified professionals across 9 branches dedicated to making your salon visit relaxing, hygienic, and transformative.
            </p>
          </div>
        </div>
      </section>

      {/* Main Team Showcase */}
      <SkinEnvyTeam onOpenBooking={onOpenBooking} />

      {/* Senior Master Faculty Detailed Profiles */}
      <section className="py-24 sm:py-32 border-b border-[#EAEAEB] bg-white">
        <div className="w-full px-6 sm:px-10 lg:px-14">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ED5642] block mb-3">
              FACULTY PROFILES
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#1E1E24] leading-[1.12] tracking-tight">
              Certified leadership with international credentials.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-4 xl:gap-6 items-stretch">
            {masterFaculty.map((member, idx) => (
              <div
                key={idx}
                className="bg-[#F7F7F8] border border-[#EAEAEB] p-5 lg:p-4 xl:p-6 flex flex-col justify-between card-hover"
              >
                <div>
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden bg-[#EAEAEB] border border-[#EAEAEB] flex-shrink-0">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base xl:text-lg font-bold text-[#1E1E24] leading-tight">
                        {member.name}
                      </h3>
                      <span className="text-[11px] xl:text-xs font-semibold text-[#ED5642] block mt-0.5 leading-tight">
                        {member.role}
                      </span>
                      <span className="text-[10px] text-[#8B8B93] block mt-1">
                        {member.experience}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-[#5A5A63] leading-relaxed mb-4">
                    {member.bio}
                  </p>

                  <div className="p-3 bg-white border border-[#EAEAEB] mb-5 text-xs">
                    <strong className="text-[#1E1E24] block mb-1 text-[11px]">Specialty:</strong>
                    <span className="text-[#5A5A63] text-xs leading-snug block">{member.specialty}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#EAEAEB] flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start sm:items-center lg:items-start xl:items-center justify-between gap-2 text-xs">
                  <span className="text-[#8B8B93] flex items-center gap-1 text-[11px] truncate">
                    <MapPin className="w-3.5 h-3.5 text-[#ED5642] flex-shrink-0" />
                    <span className="truncate">{member.branch}</span>
                  </span>

                  <button
                    onClick={onOpenBooking}
                    className="text-[#ED5642] font-bold hover:underline cursor-pointer text-xs flex-shrink-0"
                  >
                    Request Appointment →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
