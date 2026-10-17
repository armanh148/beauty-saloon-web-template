import React, { useState } from 'react'
import { Clock, ArrowUpRight, X, Sparkles } from 'lucide-react'

export default function SkinEnvyBlog() {
  const [selectedPost, setSelectedPost] = useState(null)

  const featuredPost = {
    title: 'The Ultimate 60-Day Bridal Skincare & Makeover Countdown',
    category: 'Bridal Prep',
    date: 'October 24, 2026',
    image:
      'https://cdn.prod.website-files.com/69db201b114de85f9288b627/69db201b114de85f9288b801_Hero%20Image%2003.jpg',
    description:
      'Essential clinical treatments, HydraFacial vortex scheduling, and customized makeup trial roadmaps for Karachi brides.',
    content:
      'Preparing your skin for wedding photography requires a tailored roadmap: HydraFacial sessions 4 weeks prior, deep hydration ampoules, and gentle derma polishes that guarantee seamless airbrush base adhesion without flaking. Our master bridal artists share insider tips to maintain flawless glow from Mayon to Walima.',
  }

  const gridPosts = [
    {
      id: 1,
      title: 'Nanoplastia vs. Keratin: Beating Karachi’s Coastal Humidity',
      category: 'Hair Artistry',
      date: 'October 18, 2026',
      image:
        'https://cdn.prod.website-files.com/69db201b114de85f9288b638/69db201b114de85f9288b723_Blog%20Image%207.jpg',
      content:
        'Karachi’s coastal moisture can wreak havoc on sleek hairstyles. Discover how 100% formaldehyde-free organic nanoplastia seals the hair cuticle with vegetal amino acids for pin-straight, frizz-free texture that lasts 8+ months through every wedding ceremony.',
    },
    {
      id: 2,
      title: 'Why HydraFacial MD is the Secret to Flawless Bridal Base',
      category: 'Clinical Skin',
      date: 'October 12, 2026',
      image:
        'https://cdn.prod.website-files.com/69db201b114de85f9288b638/69db201b114de85f9288b722_Blog%20Image%206.jpg',
      content:
        'Vortex exfoliation, painless blackhead extraction, and dual antioxidant infusion: why our medical estheticians recommend HydraFacial MD at least 7 days before major wedding receptions to create a velvet-smooth canvas for airbrush foundations.',
    },
    {
      id: 3,
      title: 'Trending Mehndi & Reception Nail Aesthetics in Karachi',
      category: 'Nail Art',
      date: 'October 05, 2026',
      image:
        'https://cdn.prod.website-files.com/69db201b114de85f9288b638/69db201b114de85f9288b721_Blog%20Image%205.jpg',
      content:
        'From glazed-donut chrome gels that accentuate fresh henna patterns to French tips embellished with subtle gold leaf foil, explore the bridal nail art aesthetics dominating wedding runways this season.',
    },
    {
      id: 4,
      title: 'Sindh Board Beautician Diplomas: Launching Your Career',
      category: 'Institute',
      date: 'September 28, 2026',
      image:
        'https://cdn.prod.website-files.com/69db201b114de85f9288b638/69db201b114de85f9288b75c_Team%20image.jpg',
      content:
        'Najla’s Institute is officially recognized by the Sindh Board of Technical Education. Learn how our comprehensive 3-month and 6-month hands-on cosmetology diplomas prepare aspiring artists for salon ownership and high-earning freelance careers.',
    },
  ]

  return (
    <section id="blog" className="w-full py-20 sm:py-28 bg-white border-b border-[#EAEAEB]">
      <div className="w-full px-6 sm:px-10 lg:px-14">
        {/* Section Header matching the reference screenshot */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 scroll-reveal">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-[#EAEAEB] rounded-full text-xs font-bold uppercase tracking-[0.2em] text-[#ED5642] mb-3 shadow-2xs hover:border-[#ED5642] transition-colors duration-300">
              <span className="w-2 h-2 rounded-full bg-[#ED5642] animate-pulse" />
              EDITORIAL JOURNAL
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-[3.2rem] font-bold text-[#1E1E24] leading-[1.12] tracking-tight mb-3">
              Latest beauty news & insights
            </h2>
            <p className="text-sm sm:text-base text-[#5A5A63] leading-relaxed max-w-xl">
              Stay informed! Explore our latest updates on bridal artistry, clinical skincare insights, and Karachi beauty trends.
            </p>
          </div>

          <div>
            <a
              href="#blog"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-white hover:bg-[#1E1E24] text-[#1E1E24] hover:text-white border border-[#EAEAEB] hover:border-[#1E1E24] rounded-full text-xs font-bold transition-all duration-300 shadow-xs cursor-pointer hover:shadow-md hover:-translate-y-0.5"
            >
              View all blogs
            </a>
          </div>
        </div>

        {/* Asymmetric 5-Post Layout matching user's screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* ================= LEFT COLUMN: LARGE FEATURED POST ================= */}
          <div
            onClick={() => setSelectedPost(featuredPost)}
            className="lg:col-span-5 bg-white border border-[#EAEAEB] hover:border-[#ED5642]/50 rounded-3xl flex flex-col justify-between group card-hover shadow-xs cursor-pointer overflow-hidden min-h-[520px] hover:-translate-y-2.5 hover:shadow-2xl transition-all duration-500 scroll-reveal-left delay-100"
          >
            {/* Image Flush edge-to-edge (no padding around it) */}
            <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#EAEAEB]">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110 group-hover:brightness-105"
              />
              <span className="absolute top-4 left-4 bg-[#1E1E24]/85 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border border-white/10 shadow-xs group-hover:bg-[#ED5642] group-hover:border-[#ED5642] transition-colors duration-300">
                {featuredPost.category}
              </span>
            </div>

            {/* Card Content with inner padding */}
            <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1E1E24] leading-snug tracking-tight mb-3 group-hover:text-[#ED5642] transition-colors duration-300">
                  {featuredPost.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#5A5A63] leading-relaxed mb-6 group-hover:text-[#1E1E24] transition-colors duration-300">
                  {featuredPost.description}
                </p>
              </div>

              {/* Date with Clock Icon matching screenshot */}
              <div className="pt-4 border-t border-[#EAEAEB] flex items-center justify-between text-xs text-[#8B8B93]">
                <div className="flex items-center gap-1.5 font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#ED5642]" />
                  <span>{featuredPost.date}</span>
                </div>

                <div className="flex items-center gap-1.5 font-bold text-[#ED5642] group-hover:translate-x-1.5 transition-transform duration-300">
                  <span>Read Story</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: 2x2 GRID (4 POSTS) ================= */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 scroll-reveal-right delay-200">
            {gridPosts.map((post) => (
              <div
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="bg-white border border-[#EAEAEB] hover:border-[#ED5642]/50 rounded-3xl flex flex-col justify-between group card-hover shadow-xs cursor-pointer overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
              >
                {/* Image Flush edge-to-edge (no padding around it) */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EAEAEB]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110 group-hover:brightness-105"
                  />
                  <span className="absolute top-3 left-3 bg-[#1E1E24]/85 backdrop-blur-md text-white text-[9.5px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full border border-white/10 shadow-xs group-hover:bg-[#ED5642] group-hover:border-[#ED5642] transition-colors duration-300">
                    {post.category}
                  </span>
                </div>

                {/* Card Content with inner padding */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h4 className="text-base font-bold text-[#1E1E24] leading-snug tracking-tight mb-4 line-clamp-2 group-hover:text-[#ED5642] transition-colors duration-300">
                      {post.title}
                    </h4>
                  </div>

                  {/* Date with Clock Icon matching screenshot */}
                  <div className="pt-3 border-t border-[#EAEAEB] flex items-center justify-between text-xs text-[#8B8B93]">
                    <div className="flex items-center gap-1.5 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#ED5642]" />
                      <span>{post.date}</span>
                    </div>

                    <span className="text-[#ED5642] font-bold group-hover:translate-x-1.5 transition-transform duration-300">
                      →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Article Reader Modal */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="relative max-w-xl w-full bg-white border border-[#EAEAEB] rounded-3xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/60 hover:bg-[#ED5642] text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="aspect-[16/9] w-full bg-[#EAEAEB] overflow-hidden">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-7 sm:p-8">
              <div className="flex items-center gap-3 text-xs font-bold text-[#ED5642] uppercase mb-2">
                <span className="px-3 py-1 bg-[#ED5642]/10 rounded-full">{selectedPost.category}</span>
                <span>•</span>
                <span className="text-[#8B8B93]">{selectedPost.date}</span>
              </div>

              <h3 className="text-2xl font-bold text-[#1E1E24] mb-4">
                {selectedPost.title}
              </h3>

              <p className="text-sm text-[#5A5A63] leading-relaxed mb-6">
                {selectedPost.content}
              </p>

              <button
                onClick={() => setSelectedPost(null)}
                className="skinenvy-btn-dark text-xs px-6 py-2.5 cursor-pointer rounded-full"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
