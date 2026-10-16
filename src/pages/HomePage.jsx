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
      <div className="scroll-reveal">
        <SkinEnvyStats />
      </div>

      {/* About Section */}
      <div className="scroll-reveal">
        <SkinEnvyAbout onOpenBooking={onOpenBooking} />
      </div>

      {/* Comprehensive Services (Bento Grid) */}
      <div className="scroll-reveal">
        <NajlaServices onSelectService={onSelectService} />
      </div>

      {/* Exclusive 4-Card Sessions Section */}
      <div className="scroll-reveal">
        <NajlaSessionsSection
          onOpenBooking={onOpenBooking}
          onSelectService={onSelectService}
        />
      </div>

      {/* Master Beauty Professionals & Directors */}
      <div className="scroll-reveal">
        <SkinEnvyTeam onOpenBooking={onOpenBooking} />
      </div>

      {/* Client Testimonials (3 Reviews in a Line) */}
      <div className="scroll-reveal">
        <SkinEnvyTestimonials onOpenBooking={onOpenBooking} />
      </div>

      {/* FAQ Section */}
      <div className="scroll-reveal">
        <SkinEnvyFaq onOpenBooking={onOpenBooking} />
      </div>



      {/* Editorial Journal / Blog */}
      <div className="scroll-reveal">
        <SkinEnvyBlog />
      </div>
    </div>
  )
}

