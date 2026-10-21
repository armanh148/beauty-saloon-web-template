import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, X, ArrowRight, MessageCircle, MapPin, ChevronDown } from 'lucide-react'

export default function NajlaNavbar({
  cartCount,
  onOpenCart,
  onOpenBooking,
  selectedBranch,
  onSelectBranch,
}) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchOpen, setSearchOpen] = useState(false)
  const location = useLocation()

  const branches = [
    'Tariq Road (PECHS)',
    'Gulshan KDA Block 3',
    'Gulshan Bait-ul-Mukarram',
    'North Nazimabad Hyderi',
    'Gulistan-e-Jauhar Blk 17',
    'Gulistan-e-Jauhar Blk 3',
    'Malir Cantt',
    'Nazimabad Central',
    'Safoora Chowrangi',
  ]

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Sessions', path: '/sessions' },
    { label: 'Services', path: '/services' },
    { label: 'Bridal Deals', path: '/bridal-deals' },
    { label: 'HydraFacial', path: '/hydrafacial' },
    { label: 'Team', path: '/team' },
    { label: 'Reviews', path: '/reviews' },
    { label: 'FAQs', path: '/faqs' },
    { label: 'Contact', path: '/contact' },
  ]

  const quickSearches = [
    { name: 'Bridal Makeovers (Barat & Walima)', path: '/bridal-deals' },
    { name: 'HydraFacial MD 7-Step Clinical', path: '/hydrafacial' },
    { name: '100% Organic Nanoplastia Smoothing', path: '/services' },
    { name: 'Curated Therapeutic Sessions', path: '/sessions' },
    { name: 'Sindh Board Beautician Institute', path: '/about' },
    { name: '9 Karachi Flagship Branches', path: '/contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    setSearchOpen(false)
  }

  // Live Current Day & Date formatted
  const today = new Date()
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const dayName = days[today.getDay()]
  const dateNum = today.getDate()
  const monthName = months[today.getMonth()]
  const yearNum = today.getFullYear()

  return (
    <>
      <header
        className={`sticky top-0 left-0 right-0 z-40 bg-white transition-shadow duration-300 ${
          scrolled ? 'shadow-sm' : ''
        }`}
      >
        {/* ================= TIER 1: TOP BRAND, SEARCH BAR & ACTIONS ================= */}
        <div className="w-full px-4 sm:px-10 lg:px-14 py-2.5 sm:py-3.5 border-b border-[#EAEAEB] flex items-center justify-between gap-3 sm:gap-8">
          {/* Left: Brand Logo in Editorial Lowercase Style */}
          <Link to="/" className="flex items-center gap-2 sm:gap-2.5 group flex-shrink-0 touch-feedback">
            <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#ED5642] to-[#ff7b69] flex items-center justify-center text-white font-extrabold text-sm shadow-xs transition-transform duration-300 group-hover:scale-105">
              N
            </span>
            <div className="flex flex-col">
              <span className="text-lg sm:text-2xl font-bold tracking-tight text-[#1E1E24] lowercase font-sans leading-none">
                najlas<span className="text-[#ED5642]">clinic</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.18em] text-[#8B8B93] font-semibold sm:hidden mt-0.5">
                Beauty & Institute
              </span>
            </div>
          </Link>

          {/* Center: Search Bar (Desktop) */}
          <div className="relative flex-1 max-w-md hidden md:block">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchOpen(true)}
                placeholder="Search for services, bridal, branches..."
                className="w-full bg-[#F7F7F8] hover:bg-white focus:bg-white text-[#1E1E24] text-xs py-2.5 pl-9 pr-4 rounded-full border border-[#EAEAEB] focus:border-[#ED5642] outline-none transition-all duration-200 shadow-2xs"
              />
              <Search className="w-4 h-4 text-[#8B8B93] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </form>

            {/* Quick Search Popover */}
            {searchOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setSearchOpen(false)}
                />
                <div className="absolute left-0 right-0 top-full mt-2 bg-white border border-[#EAEAEB] rounded-2xl shadow-xl p-3 z-20">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8B8B93] block mb-2 px-2">
                    Popular Pages & Treatments
                  </span>
                  <div className="flex flex-col gap-1">
                    {quickSearches.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.path}
                        onClick={() => setSearchOpen(false)}
                        className="text-xs text-[#1E1E24] hover:text-[#ED5642] hover:bg-[#F7F7F8] px-3 py-2 rounded-xl transition-colors flex items-center justify-between"
                      >
                        <span>{item.name}</span>
                        <ArrowRight className="w-3 h-3 text-[#ED5642]" />
                      </Link>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2 sm:gap-6 flex-shrink-0">
            {/* Desktop Branch Selector Dropdown */}
            <div className="relative hidden xl:flex items-center gap-1.5 text-xs text-[#5A5A63] bg-[#F7F7F8] px-3 py-1.5 rounded-full border border-[#EAEAEB]">
              <MapPin className="w-3.5 h-3.5 text-[#ED5642]" />
              <select
                value={selectedBranch}
                onChange={(e) => onSelectBranch(e.target.value)}
                className="bg-transparent text-xs font-semibold text-[#1E1E24] outline-none cursor-pointer pr-1"
              >
                {branches.map((b) => (
                  <option key={b} value={b} className="bg-white text-[#1E1E24]">
                    {b}
                  </option>
                ))}
              </select>
            </div>

            {/* Mobile Branch Quick Pill (clickable to open menu) */}
            <button
              onClick={() => setMenuOpen(true)}
              className="xl:hidden flex items-center gap-1 text-[11px] font-semibold text-[#5A5A63] bg-[#F7F7F8] px-2.5 py-1 rounded-full border border-[#EAEAEB] touch-feedback"
            >
              <MapPin className="w-3 h-3 text-[#ED5642]" />
              <span className="truncate max-w-[85px] sm:max-w-[130px]">
                {selectedBranch.split(' ')[0]}
              </span>
              <ChevronDown className="w-3 h-3 text-[#8B8B93]" />
            </button>

            {/* Cart Trigger */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-1.5 p-2 text-[#1E1E24] hover:text-[#ED5642] rounded-full hover:bg-[#F7F7F8] transition-colors cursor-pointer touch-feedback"
              aria-label="View Cart"
            >
              <ShoppingBag className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              {cartCount > 0 && (
                <span className="bg-[#ED5642] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Main Action Button (Desktop "SUBSCRIBE" / Booking) */}
            <button
              onClick={onOpenBooking}
              className="hidden sm:inline-flex bg-[#1E1E24] hover:bg-[#ED5642] text-white text-xs font-bold uppercase tracking-wider px-5 sm:px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 cursor-pointer shadow-xs"
            >
              SUBSCRIBE
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-9 h-9 bg-[#F7F7F8] hover:bg-[#EAEAEB] active:scale-95 text-[#1E1E24] flex items-center justify-center border border-[#EAEAEB] rounded-full cursor-pointer transition-all shadow-xs"
              aria-label="Toggle Navigation"
            >
              <span className="flex flex-col gap-1 w-4">
                <span className="h-[2px] bg-current w-full rounded-full" />
                <span className="h-[2px] bg-[#ED5642] w-3/4 rounded-full" />
                <span className="h-[2px] bg-current w-full rounded-full" />
              </span>
            </button>
          </div>
        </div>

        {/* ================= TIER 2: DATE & STATUS PILL + HORIZONTAL CATEGORIES ================= */}
        <div className="w-full px-4 sm:px-10 lg:px-14 py-2 sm:py-2.5 border-b border-[#EAEAEB] bg-white flex items-center justify-between gap-3 sm:gap-6 overflow-x-auto no-scrollbar touch-momentum">
          {/* Left: Weather/Status Pill + Date Indicator */}
          <div className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
            {/* Orange/Coral Pill */}
            <div className="bg-[#ED5642] text-white px-2.5 sm:px-3.5 py-0.5 sm:py-1 text-[11px] sm:text-xs font-bold rounded-full flex items-center gap-1 shadow-2xs">
              <span>28°C</span>
            </div>

            {/* Day and Date display */}
            <div className="flex flex-col leading-tight text-[10px] sm:text-[11px] text-[#5A5A63]">
              <span className="font-bold text-[#1E1E24]">{dayName}</span>
              <span className="text-[9px] sm:text-[10px] text-[#8B8B93] italic">
                {dateNum}th {monthName} {yearNum}
              </span>
            </div>
          </div>

          {/* Right / Center: Horizontal Navigation Links with active indicator dot */}
          <nav className="flex items-center gap-4 sm:gap-8 flex-shrink-0">
            {navLinks.map((item) => {
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`relative text-xs sm:text-[13px] transition-colors py-1 flex flex-col items-center whitespace-nowrap touch-feedback ${
                    isActive
                      ? 'font-bold text-[#1E1E24]'
                      : 'font-medium text-[#5A5A63] hover:text-[#1E1E24]'
                  }`}
                >
                  <span>{item.label}</span>
                  {/* Active Indicator Dot matching reference screenshot */}
                  {isActive && (
                    <span className="w-1.5 h-1.5 bg-[#ED5642] rounded-full mt-0.5 block" />
                  )}
                </Link>
              )
            })}
          </nav>
        </div>
      </header>

      {/* ================= LUXURY SLIDE-IN MOBILE DRAWER ================= */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Dimmed Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity animate-fade-in"
            onClick={() => setMenuOpen(false)}
          />

          {/* Drawer Container */}
          <div className="relative w-full max-w-sm sm:max-w-md h-full bg-white text-[#1E1E24] flex flex-col justify-between p-6 sm:p-8 z-10 shadow-2xl overflow-y-auto animate-fade-in touch-momentum">
            {/* Top Bar */}
            <div className="w-full flex items-center justify-between pb-4 border-b border-[#EAEAEB]">
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2.5"
              >
                <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#ED5642] to-[#ff7b69] flex items-center justify-center text-white font-extrabold text-sm shadow-sm">
                  N
                </span>
                <div>
                  <span className="text-xl font-bold tracking-tight text-[#1E1E24] block leading-tight">
                    Najla’s <span className="text-[#ED5642]">Clinic</span>
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#8B8B93] font-bold">
                    Karachi Sanctuary & Institute
                  </span>
                </div>
              </Link>

              <button
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 bg-[#F7F7F8] hover:bg-[#ED5642] text-[#1E1E24] hover:text-white flex items-center justify-center transition-all cursor-pointer border border-[#EAEAEB] rounded-full shadow-xs active:scale-95"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Branch Selector Card */}
            <div className="my-4 p-3.5 bg-[#F7F7F8] rounded-2xl border border-[#EAEAEB]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8B8B93] flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#ED5642]" />
                  Current Branch
                </span>
                <span className="text-[10px] font-bold text-[#1EBE5D] bg-[#1EBE5D]/10 px-2 py-0.5 rounded-full">
                  Open Today 11am - 8pm
                </span>
              </div>
              <select
                value={selectedBranch}
                onChange={(e) => onSelectBranch(e.target.value)}
                className="w-full bg-white text-xs font-bold text-[#1E1E24] p-2.5 rounded-xl border border-[#EAEAEB] outline-none shadow-2xs"
              >
                {branches.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>

            {/* Nav Links with Badges */}
            <div className="py-2 flex-1">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#ED5642] block mb-3">
                EXPLORE NAJLA’S
              </span>
              <nav className="flex flex-col gap-1 text-base sm:text-lg font-bold text-[#1E1E24]">
                {navLinks.map((item) => {
                  const isActive = location.pathname === item.path
                  return (
                    <Link
                      key={item.label}
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center justify-between group py-2.5 px-3 rounded-xl transition-all ${
                        isActive
                          ? 'bg-[#ED5642]/10 text-[#ED5642]'
                          : 'hover:bg-[#F7F7F8] text-[#1E1E24] hover:text-[#ED5642]'
                      }`}
                    >
                      <span className="transition-transform duration-200 group-hover:translate-x-1.5">
                        {item.label}
                      </span>
                      <ArrowRight className="w-4 h-4 text-[#ED5642] opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </Link>
                  )
                })}
              </nav>
            </div>

            {/* Drawer Footer Actions */}
            <div className="pt-4 border-t border-[#EAEAEB] flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMenuOpen(false)
                  onOpenBooking()
                }}
                className="w-full py-3 bg-gradient-to-r from-[#ED5642] to-[#D8432F] text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-md active:scale-98 transition-transform cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/923341430303?text=Hi%20Najla’s,%20I%20have%20an%20inquiry%20regarding%20appointments%20and%20rates."
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 bg-[#1EBE5D]/10 hover:bg-[#1EBE5D]/20 text-[#1EBE5D] font-bold text-xs rounded-full border border-[#1EBE5D]/25 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Helpline: 0334-1430303</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

