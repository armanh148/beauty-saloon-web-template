import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import NajlaNavbar from './components/NajlaNavbar'
import SkinEnvyFooter from './components/SkinEnvyFooter'
import SkinEnvyCartDrawer from './components/SkinEnvyCartDrawer'
import NajlaBookingModal from './components/NajlaBookingModal'
import MobileBottomDock from './components/MobileBottomDock'
import { Check } from 'lucide-react'

// Page Components
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import SessionsPage from './pages/SessionsPage'
import ServicesPage from './pages/ServicesPage'
import BridalDealsPage from './pages/BridalDealsPage'
import HydraFacialPage from './pages/HydraFacialPage'
import TeamPage from './pages/TeamPage'
import ReviewsPage from './pages/ReviewsPage'
import FaqPage from './pages/FaqPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [bookingOpen, setBookingOpen] = useState(false)
  const [preselectedService, setPreselectedService] = useState(null)
  const [selectedBranch, setSelectedBranch] = useState('Tariq Road (PECHS)')
  const [toastMessage, setToastMessage] = useState(null)
  const location = useLocation()

  // Global Scroll-Reveal Animation Observer with robust multi-variant support
  useEffect(() => {
    const selector =
      '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale, .scroll-reveal-fade'

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            // Once visible, keep it visible
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    )

    const observeElements = () => {
      const elements = document.querySelectorAll(selector)
      elements.forEach((el) => {
        // If element is already in viewport, make it visible immediately
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('is-visible')
        } else {
          observer.observe(el)
        }
      })
    }

    // Run immediately and after paint
    observeElements()
    const timer1 = setTimeout(observeElements, 100)
    const timer2 = setTimeout(observeElements, 350)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      observer.disconnect()
    }
  }, [location.pathname])

  // Reactive Cart State with PKR pricing
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Najla’s Revitalizing Glow Serum',
      price: 4500,
      quantity: 1,
      image:
        'https://cdn.prod.website-files.com/69db201b114de85f9288b638/69db201b114de85f9288b71a_Shop%20Image%206.jpg',
    },
  ])

  const showToast = (msg) => {
    setToastMessage(msg)
    setTimeout(() => {
      setToastMessage(null)
    }, 3000)
  }

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      } else {
        return [...prev, { ...product, quantity: 1 }]
      }
    })
    showToast(`Added ${product.name} to cart`)
    setCartOpen(true)
  }

  const handleUpdateQty = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id)
      return
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    )
  }

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const handleSelectService = (service) => {
    setPreselectedService(service)
    setBookingOpen(true)
  }

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <div className="min-h-screen w-full bg-white text-[#1E1E24] selection:bg-[#ED5642] selection:text-white flex flex-col justify-between overflow-x-hidden">
      <ScrollToTop />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-white text-[#1E1E24] px-5 py-3 shadow-2xl flex items-center gap-3 border border-[#EAEAEB] rounded-2xl animate-fade-in">
          <div className="w-5 h-5 bg-[#ED5642] rounded-full flex items-center justify-center text-white">
            <Check className="w-3.5 h-3.5" />
          </div>
          <span className="text-xs font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Persistent Two-Tier Navbar */}
      <NajlaNavbar
        cartCount={cartCount}
        onOpenCart={() => setCartOpen(true)}
        onOpenBooking={() => setBookingOpen(true)}
        selectedBranch={selectedBranch}
        onSelectBranch={setSelectedBranch}
      />

      {/* Multi-Page Routes */}
      <main className="flex-1 w-full bg-white pb-20 md:pb-0">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onOpenBooking={() => setBookingOpen(true)}
                onSelectService={handleSelectService}
                selectedBranch={selectedBranch}
                onSelectBranch={setSelectedBranch}
              />
            }
          />
          <Route
            path="/about"
            element={<AboutPage onOpenBooking={() => setBookingOpen(true)} />}
          />
          <Route
            path="/sessions"
            element={
              <SessionsPage
                onOpenBooking={() => setBookingOpen(true)}
                onSelectService={handleSelectService}
              />
            }
          />
          <Route
            path="/services"
            element={
              <ServicesPage
                onSelectService={handleSelectService}
                onOpenBooking={() => setBookingOpen(true)}
              />
            }
          />
          <Route
            path="/bridal-deals"
            element={
              <BridalDealsPage
                onOpenBooking={() => setBookingOpen(true)}
                onSelectService={handleSelectService}
              />
            }
          />
          <Route
            path="/hydrafacial"
            element={
              <HydraFacialPage
                onOpenBooking={() => setBookingOpen(true)}
                onSelectService={handleSelectService}
              />
            }
          />
          <Route
            path="/team"
            element={<TeamPage onOpenBooking={() => setBookingOpen(true)} />}
          />
          <Route
            path="/reviews"
            element={<ReviewsPage onOpenBooking={() => setBookingOpen(true)} />}
          />
          <Route
            path="/faqs"
            element={<FaqPage onOpenBooking={() => setBookingOpen(true)} />}
          />
          <Route
            path="/contact"
            element={<ContactPage onOpenBooking={() => setBookingOpen(true)} />}
          />
        </Routes>
      </main>

      {/* Persistent Global Footer with 9 Branches Directory */}
      <SkinEnvyFooter onOpenBooking={() => setBookingOpen(true)} />

      {/* Slide-out Cart Drawer with WhatsApp Order Confirmation */}
      <SkinEnvyCartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onCheckout={() => {
          const orderSummary = cartItems
            .map((item) => `• ${item.name} x${item.quantity} (Rs. ${(item.price * item.quantity).toLocaleString()})`)
            .join('%0A')
          const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
          const text = `Hello Najla’s Beauty Clinic Boutique,%0A%0AI would like to order the following products:%0A${orderSummary}%0A%0ATotal Amount: Rs. ${total.toLocaleString()}%0A%0APlease confirm delivery details.`
          window.open(`https://wa.me/923341430303?text=${text}`, '_blank')
        }}
      />

      {/* Online Reservation Concierge Modal */}
      <NajlaBookingModal
        isOpen={bookingOpen}
        onClose={() => {
          setBookingOpen(false)
          setPreselectedService(null)
        }}
        preselectedService={preselectedService}
        defaultBranch={selectedBranch}
      />

      {/* Mobile Floating Glass Action Dock */}
      <MobileBottomDock
        onOpenBooking={() => setBookingOpen(true)}
        onOpenCart={() => setCartOpen(true)}
        cartCount={cartCount}
      />
    </div>
  )
}
