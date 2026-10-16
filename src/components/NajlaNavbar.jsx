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
        <div className="w-full px-6 sm:px-10 lg:px-14 py-3.5 border-b border-[#EAEAEB] flex items-center justify-between gap-4 sm:gap-8">
          {/* Left: Brand Logo in Editorial Lowercase Style matching reference */}
          <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <span className="w-8 h-8 rounded-lg bg-[#ED5642] flex items-center justify-center text-white font-extrabold text-sm shadow-xs transition-transform duration-300 group-hover:scale-105">
              N
            </span>
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#1E1E24] lowercase font-sans">
              najlas<span className="text-[#ED5642]">clinic</span>
            </span>
          </Link>

          {/* Center: Search Bar matching reference image */}
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

          {/* Right: Branch Selector, Cart, Sign In & Primary Action Button */}
          <div className="flex items-center gap-3 sm:gap-6 flex-shrink-0">
            {/* Branch Selector Dropdown */}
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

            {/* Text Link (Helpline / Sign In) */}
            <a
              href="https://wa.me/923341430303"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold uppercase tracking-wider text-[#1E1E24] hover:text-[#ED5642] transition-colors hidden sm:inline"
            >
              SIGN IN
            </a>

            {/* Cart Trigger */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-1.5 p-2 text-[#1E1E24] hover:text-[#ED5642] rounded-full hover:bg-[#F7F7F8] transition-colors cursor-pointer"
              aria-label="View Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="bg-[#ED5642] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            </button>

            {/* Main Action Button matching reference "SUBSCRIBE" button */}
            <button
              onClick={onOpenBooking}
              className="bg-[#1E1E24] hover:bg-[#ED5642] text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 cursor-pointer shadow-xs"
            >
              SUBSCRIBE
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-9 h-9 bg-[#F7F7F8] hover:bg-[#EAEAEB] text-[#1E1E24] flex items-center justify-center border border-[#EAEAEB] rounded-full cursor-pointer transition-colors"
              aria-label="Toggle Navigation"
            >
              <span className="flex flex-col gap-1 w-4">
                <span className="h-[2px] bg-current w-full" />
                <span className="h-[2px] bg-current w-3/4" />
                <span className="h-[2px] bg-current w-full" />
              </span>
            </button>
          </div>
        </div>

        {/* ================= TIER 2: DATE & STATUS PILL + HORIZONTAL CATEGORIES ================= */}
        <div className="w-full px-6 sm:px-10 lg:px-14 py-2.5 border-b border-[#EAEAEB] bg-white flex items-center justify-between gap-6 overflow-x-auto no-scrollbar">
          {/* Left: Weather/Status Pill + Date Indicator strictly matching screenshot */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Orange/Coral Pill */}
            <div className="bg-[#ED5642] text-white px-3.5 py-1 text-xs font-bold rounded-full flex items-center gap-1 shadow-2xs">
              <span>28°C</span>
            </div>

            {/* Day and Date display matching reference */}
            <div className="flex flex-col leading-tight text-[11px] text-[#5A5A63]">
              <span className="font-bold text-[#1E1E24]">{dayName}</span>
              <span className="text-[10px] text-[#8B8B93] italic">
                {dateNum}th {monthName} {yearNum}
              </span>
            </div>
          </div>

          {/* Right / Center: Horizontal Navigation Links with active indicator dot */}
          <nav className="flex items-center gap-6 sm:gap-8 flex-shrink-0">
            {navLinks.map((item) => {
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`relative text-xs sm:text-[13px] transition-colors py-1 flex flex-col items-center ${
                    isActive
                      ? 'font-bold text-[#1E1E24]'
                      : 'font-medium text-[#5A5A63] hover:text-[#1E1E24]'
                  }`}
                >
                  <span>{item.label}</span>
                  {/* Active Indicator Dot matching reference screenshot */}
                  {isActive && (
                    <span className="w-1.5 h-1.5 bg-[#1E1E24] rounded-full mt-0.5 block" />
                  )}
                </Link>
              )
            })}
          </nav>
        </div>
      </header>

      {/* ================= FULLSCREEN MOBILE OVERLAY MENU ================= */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-white text-[#1E1E24] flex flex-col justify-between p-8 sm:p-14 animate-fade-in overflow-y-auto">
          {/* Menu Top Bar */}
          <div className="w-full flex items-center justify-between">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3"
            >
              <span className="w-10 h-10 rounded-xl bg-[#ED5642] flex items-center justify-center text-white font-extrabold text-base shadow-sm">
                N
              </span>
              <div>
                <span className="text-2xl font-bold tracking-tight text-[#1E1E24] block">
                  Najla’s <span className="text-[#ED5642]">Clinic</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#8B8B93] font-bold">
                  Beauty & Institute Karachi
                </span>
              </div>
            </Link>

            <button
              onClick={() => setMenuOpen(false)}
              className="w-11 h-11 bg-[#F7F7F8] hover:bg-[#ED5642] text-[#1E1E24] hover:text-white flex items-center justify-center transition-all cursor-pointer border border-[#EAEAEB] rounded-full shadow-xs hover:shadow-md"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Menu Links */}
          <div className="w-full my-auto py-10">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#ED5642] block mb-6">
              NAJLA’S PAGES
            </span>
            <nav className="flex flex-col gap-3.5 sm:gap-5 text-2xl sm:text-4xl font-bold text-[#1E1E24]">
              {navLinks.map((item) => {
                const isActive = location.pathname === item.path
                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center justify-between group py-1.5 border-b border-[#EAEAEB] transition-colors ${
                      isActive ? 'text-[#ED5642]' : 'hover:text-[#ED5642]'
                    }`}
                  >
                    <span className="transition-transform duration-300 group-hover:translate-x-3">
                      {item.label}
                    </span>
                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-3 group-hover:translate-x-0 text-[#ED5642]" />
                  </Link>
                )
              })}
            </nav>
          </div>

          {/* Menu Footer */}
          <div className="w-full pt-6 border-t border-[#EAEAEB] flex flex-col sm:flex-row items-center justify-between gap-6">
            <a
              href="https://wa.me/923341430303"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#1EBE5D] transition-colors flex items-center gap-1.5 font-bold text-xs text-[#1EBE5D]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Helpline: 0334-1430303</span>
            </a>

            <button
              onClick={() => {
                setMenuOpen(false)
                onOpenBooking()
              }}
              className="skinenvy-btn-primary"
            >
              Book an Appointment
            </button>
          </div>
        </div>
      )}
    </>
  )
}
