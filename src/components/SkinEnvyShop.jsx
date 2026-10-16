import React from 'react'
import { ShoppingBag, ArrowRight } from 'lucide-react'

export default function SkinEnvyShop({ onAddToCart }) {
  const products = [
    {
      id: 1,
      name: 'Najla’s Revitalizing Glow Serum',
      price: 4500,
      image:
        'https://cdn.prod.website-files.com/69db201b114de85f9288b638/69db201b114de85f9288b71a_Shop%20Image%206.jpg',
      category: 'Anti-Aging Elixir',
    },
    {
      id: 2,
      name: 'Deep Hydrating Hyaluronic Mist',
      price: 3200,
      image:
        'https://cdn.prod.website-files.com/69db201b114de85f9288b638/69db201b114de85f9288b719_Shop%20Image%205.jpg',
      category: 'HydraFacial Aftercare',
    },
    {
      id: 3,
      name: 'Ultra-Luminous Bridal Pearl Cream',
      price: 4800,
      image:
        'https://cdn.prod.website-files.com/69db201b114de85f9288b638/69db201b114de85f9288b718_Shop%20Image%204.jpg',
      category: 'Radiance Therapy',
    },
    {
      id: 4,
      name: 'Nanoplastia Keratin Hair Mask',
      price: 3900,
      image:
        'https://cdn.prod.website-files.com/69db201b114de85f9288b638/69db201b114de85f9288b717_Shop%20Image%203.jpg',
      category: 'Intensive Hair Repair',
    },
    {
      id: 5,
      name: 'Derma Calming Soothing Lotion',
      price: 2800,
      image:
        'https://cdn.prod.website-files.com/69db201b114de85f9288b638/69db201b114de85f9288b716_Shop%20Image%202.jpg',
      category: 'Post-Polishing Relief',
    },
    {
      id: 6,
      name: 'French Botanical Renewal Mud Mask',
      price: 3400,
      image:
        'https://cdn.prod.website-files.com/69db201b114de85f9288b638/69db201b114de85f9288b715_Shop%20Image%201.jpg',
      category: 'Detoxifying Clay',
    },
  ]

  return (
    <section id="shop" className="bg-[#F7F7F8] py-24 sm:py-32 border-b border-[#EAEAEB]">
      <div className="w-full px-6 sm:px-10 lg:px-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ED5642] block mb-3">
              NAJLA’S CLINICAL BOUTIQUE
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#1E1E24] leading-[1.15] tracking-tight">
              Curated post-care & bridal beauty formulations.
            </h2>
          </div>

          <a href="#shop" className="skinenvy-link-line group">
            <span>SEE ALL FORMULAS</span>
            <span className="w-8 h-[2px] bg-current transition-all duration-300 group-hover:w-14" />
          </a>
        </div>

        {/* 6 Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl border border-[#EAEAEB] p-6 card-hover flex flex-col justify-between group"
            >
              {/* Product Header Info */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h4 className="text-xl font-bold text-[#1E1E24] group-hover:text-[#ED5642] transition-colors">
                    {product.name}
                  </h4>
                  <span className="text-xs text-[#8B8B93] uppercase font-semibold">
                    {product.category}
                  </span>
                </div>
                <span className="text-lg font-bold text-[#ED5642] whitespace-nowrap">
                  Rs. {product.price.toLocaleString()}
                </span>
              </div>

              {/* Product Image */}
              <div className="aspect-square w-full rounded-2xl overflow-hidden bg-[#F7F7F8] my-4 p-4 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>

              {/* Action Button */}
              <button
                onClick={() => onAddToCart(product)}
                className="w-full mt-2 py-3.5 px-6 rounded-full bg-[#1E1E24] hover:bg-[#ED5642] text-white font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm group-hover:shadow-md"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Cart</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

