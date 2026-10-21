import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Home, Sparkles, Calendar, ShoppingBag, MessageCircle } from 'lucide-react'

export default function MobileBottomDock({ onOpenBooking, onOpenCart, cartCount }) {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const isServices = location.pathname === '/services' || location.pathname === '/sessions'

  const handleServicesClick = (e) => {
    if (isHome) {
      e.preventDefault()
      const el = document.getElementById('services') || document.getElementById('sessions')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <aside
      aria-label="Mobile Navigation Dock"
      className="md:hidden fixed bottom-3 left-1/2 -translate-x-1/2 z-40 w-[94%] max-w-[400px] animate-dock-slide"
    >
      <div className="bg-white/95 backdrop-blur-xl border border-[#EAEAEB]/90 shadow-[0_12px_36px_-6px_rgba(30,30,36,0.18),0_4px_16px_rgba(237,86,66,0.1)] rounded-full px-2.5 py-1.5 flex items-center justify-between gap-1">
        {/* Tab 1: Home */}
        <Link
          to="/"
          className={`flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-2xl transition-all duration-200 touch-feedback ${
            isHome
              ? 'text-[#ED5642] font-bold'
              : 'text-[#5A5A63] hover:text-[#1E1E24]'
          }`}
        >
          <Home className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] tracking-tight">Home</span>
        </Link>

        {/* Tab 2: Services / Sessions */}
        <Link
          to="/services"
          onClick={handleServicesClick}
          className={`flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-2xl transition-all duration-200 touch-feedback ${
            isServices
              ? 'text-[#ED5642] font-bold'
              : 'text-[#5A5A63] hover:text-[#1E1E24]'
          }`}
        >
          <Sparkles className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] tracking-tight">Services</span>
        </Link>

        {/* Tab 3: Center Elevated Action "Book Now" */}
        <button
          onClick={onOpenBooking}
          className="relative -top-2 flex flex-col items-center justify-center px-3.5 py-2.5 bg-gradient-to-r from-[#ED5642] to-[#D8432F] text-white rounded-full shadow-lg animate-coral-dock-pulse touch-feedback cursor-pointer transition-transform active:scale-90"
          aria-label="Book Appointment Now"
        >
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span className="text-xs font-extrabold tracking-wide uppercase">Book</span>
          </div>
        </button>

        {/* Tab 4: 1-Tap WhatsApp Concierge */}
        <a
          href="https://wa.me/923341430303?text=Hi%20Najla’s%20Clinic,%20I%20would%20like%20to%20inquire%20about%20your%20services%20and%20bridal%20packages."
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-2xl text-[#1EBE5D] hover:text-[#18A450] transition-all duration-200 touch-feedback"
          aria-label="Chat with WhatsApp Concierge"
        >
          <div className="relative">
            <MessageCircle className="w-4 h-4 mb-0.5" />
            <span className="absolute -top-0.5 -right-1 w-2 h-2 bg-[#1EBE5D] rounded-full border border-white animate-pulse" />
          </div>
          <span className="text-[10px] font-semibold tracking-tight text-[#1EBE5D]">Chat</span>
        </a>

        {/* Tab 5: Cart with Count Badge */}
        <button
          onClick={onOpenCart}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-2xl text-[#5A5A63] hover:text-[#1E1E24] transition-all duration-200 touch-feedback relative cursor-pointer"
          aria-label="View Shopping Cart"
        >
          <div className="relative">
            <ShoppingBag className="w-4 h-4 mb-0.5" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-[#ED5642] text-white text-[9px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                {cartCount}
              </span>
            )}
          </div>
          <span className="text-[10px] tracking-tight">Cart</span>
        </button>
      </div>
    </aside>
  )
}
