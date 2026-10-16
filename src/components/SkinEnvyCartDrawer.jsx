import React from 'react'
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react'

export default function SkinEnvyCartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQty,
  onRemoveItem,
  onCheckout,
}) {
  if (!isOpen) return null

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-md bg-white text-[#1E1E24] h-full flex flex-col justify-between shadow-2xl animate-slide-left overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cart Header */}
        <div className="p-6 border-b border-[#EAEAEB] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#ED5642]" />
            <h3 className="text-xl font-bold">Your Cart</h3>
            <span className="text-xs bg-[#F7F7F8] font-bold px-2.5 py-1 rounded-full text-[#5A5A63]">
              {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#F7F7F8] hover:bg-[#ED5642] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16">
              <div className="w-16 h-16 rounded-full bg-[#F7F7F8] flex items-center justify-center mb-4">
                <ShoppingBag className="w-8 h-8 text-[#C2C2C7]" />
              </div>
              <h4 className="text-lg font-bold mb-1">Your cart is empty</h4>
              <p className="text-xs text-[#5A5A63] max-w-xs mb-6">
                Explore our curated selection of professional skincare and salon formulas.
              </p>
              <button
                onClick={onClose}
                className="skinenvy-btn-dark text-xs px-6 py-2.5"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 p-3.5 bg-[#F7F7F8] rounded-2xl border border-[#EAEAEB]"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-xl bg-white shadow-xs"
                />

                <div className="flex-1 min-w-0">
                  <h5 className="font-bold text-sm truncate">{item.name}</h5>
                  <div className="text-xs font-bold text-[#ED5642] mt-0.5">
                    Rs. {Number(item.price).toLocaleString()}
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => onUpdateQty(item.id, item.quantity - 1)}
                      className="w-6 h-6 rounded-md bg-white border border-[#EAEAEB] flex items-center justify-center text-xs hover:border-[#1E1E24]"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-bold w-5 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQty(item.id, item.quantity + 1)}
                      className="w-6 h-6 rounded-md bg-white border border-[#EAEAEB] flex items-center justify-center text-xs hover:border-[#1E1E24]"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="p-2 text-[#8B8B93] hover:text-[#ED5642] transition-colors"
                  aria-label="Remove item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Cart Footer */}
        {cartItems.length > 0 && (
          <div className="p-6 bg-[#F7F7F8] border-t border-[#EAEAEB] flex flex-col gap-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#5A5A63] font-semibold">Subtotal</span>
              <span className="text-xl font-bold text-[#1E1E24]">
                Rs. {subtotal.toLocaleString()}
              </span>
            </div>

            <p className="text-[11px] text-[#8B8B93]">
              Doorstep courier delivery across Karachi or pickup available at any of our 9 branches.
            </p>

            <button
              onClick={onCheckout}
              className="w-full skinenvy-btn-primary flex items-center justify-center gap-2 py-3.5"
            >
              <span>Confirm Order on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  )
}
