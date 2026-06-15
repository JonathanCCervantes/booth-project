import React, { useState } from 'react'
import { X, ImageIcon } from 'lucide-react'

// ─── REPLACE GALLERY IMAGES HERE ─────────────────────────────────────
// 1. Place your event photos in /src/assets/gallery/
// 2. Import them at the top:
//    import wedding1 from '../assets/gallery/wedding-1.jpg'
//    import bday1 from '../assets/gallery/birthday-1.jpg'
//    ... etc.
// 3. Replace the `src` values in the `photos` array below with your imports.
//    Example:  { src: wedding1, label: 'Wedding', span: 'row-span-2' }
//
// TIP: Mix portrait (tall) and landscape (wide) shots for visual variety.
// ─────────────────────────────────────────────────────────────────────

// Each entry: { src, label, span }
// span options: 'row-span-1', 'row-span-2' (for taller cells)
const photos = [
  { src: null, label: 'Wedding', span: 'row-span-2', bg: 'from-rose-100 to-pink-50' },
  { src: null, label: 'Birthday', span: 'row-span-1', bg: 'from-amber-100 to-yellow-50' },
  { src: null, label: 'Corporate', span: 'row-span-1', bg: 'from-slate-100 to-gray-50' },
  { src: null, label: 'Debut', span: 'row-span-2', bg: 'from-purple-100 to-pink-50' },
  { src: null, label: 'Birthday', span: 'row-span-1', bg: 'from-green-100 to-emerald-50' },
  { src: null, label: 'Wedding', span: 'row-span-1', bg: 'from-orange-100 to-amber-50' },
  { src: null, label: 'Corporate', span: 'row-span-2', bg: 'from-blue-100 to-sky-50' },
  { src: null, label: 'Debut', span: 'row-span-1', bg: 'from-pink-100 to-rose-50' },
]

export default function Gallery() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="gallery" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-medium tracking-[0.3em] text-muted uppercase mb-3">
            The Gallery
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal">
            Moments worth
            <br />
            <em>printing twice.</em>
          </h2>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] gap-3">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`${photo.span} rounded-xl overflow-hidden cursor-pointer group relative`}
              onClick={() => photo.src && setSelected(photo)}
            >
              {photo.src ? (
                <img
                  src={photo.src}
                  alt={photo.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                // Placeholder — remove when you add real images
                <div
                  className={`w-full h-full bg-gradient-to-br ${photo.bg} flex flex-col items-center justify-center gap-2 group-hover:opacity-80 transition-opacity`}
                >
                  <ImageIcon size={20} className="text-charcoal/30" />
                  <span className="text-[10px] font-medium text-charcoal/40 uppercase tracking-wider">
                    {photo.label}
                  </span>
                </div>
              )}

              {/* Hover label */}
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors rounded-xl" />
              <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] text-cream bg-charcoal/70 px-2 py-1 rounded-full">
                  {photo.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selected && (
          <div
            className="fixed inset-0 z-50 bg-charcoal/90 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-5 right-5 text-cream hover:text-blush transition-colors"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              <X size={28} />
            </button>
            <img
              src={selected.src}
              alt={selected.label}
              className="max-h-[90vh] max-w-full rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  )
}
