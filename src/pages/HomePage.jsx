import React from 'react'
import NajlaHero from '../components/NajlaHero'
import NajlaTickerRibbon from '../components/NajlaTickerRibbon'
import SkinEnvyStats from '../components/SkinEnvyStats'
import SkinEnvyAbout from '../components/SkinEnvyAbout'
import NajlaServices from '../components/NajlaServices'
import NajlaSessionsSection from '../components/NajlaSessionsSection'
import SkinEnvyTeam from '../components/SkinEnvyTeam'
import SkinEnvyTestimonials from '../components/SkinEnvyTestimonials'
import SkinEnvyFaq from '../components/SkinEnvyFaq'
import SkinEnvyBlog from '../components/SkinEnvyBlog'

export default function HomePage({
  onOpenBooking,
  onSelectService,
  selectedBranch,
  onSelectBranch,
}) {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <NajlaHero
        onOpenBooking={onOpenBooking}
        onScrollToServices={() => {
          const el = document.getElementById('services')
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }}
        selectedBranch={selectedBranch}
        onSelectBranch={onSelectBranch}
      />

      {/* Infinite Scrolling Ticker Ribbon */}
      <NajlaTickerRibbon />

      {/* 4 Numbers / Stats Banner */}
      <SkinEnvyStats />

      {/* About Section */}
      <SkinEnvyAbout onOpenBooking={onOpenBooking} />

      {/* Comprehensive Services (Bento Grid) */}
      <NajlaServices onSelectService={onSelectService} />

      {/* Exclusive 4-Card Sessions Section */}
      <NajlaSessionsSection
        onOpenBooking={onOpenBooking}
        onSelectService={onSelectService}
      />

      {/* Master Beauty Professionals & Directors */}
      <SkinEnvyTeam onOpenBooking={onOpenBooking} />

      {/* Client Testimonials (3 Reviews in a Line) */}
      <SkinEnvyTestimonials onOpenBooking={onOpenBooking} />

      {/* FAQ Section */}
      <SkinEnvyFaq onOpenBooking={onOpenBooking} />

      {/* Editorial Journal / Blog */}
      <SkinEnvyBlog />
    </div>
  )
}

