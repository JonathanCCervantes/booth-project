import React from 'react'
import heroBg from '../assets/hero-booth.jpg'

// ─── REPLACE YOUR HERO IMAGE HERE ────────────────────────────────────
// 1. Place your image in /src/assets/ (e.g., hero-booth.jpg)
// 2. Import it: import heroBg from '../assets/hero-booth.jpg'
// 3. Replace the gradient div below with:
//    <img src={heroBg} alt="The Booth Project" className="absolute inset-0 w-full h-full object-cover" />
// ─────────────────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream">
      {/* Background — replace this div with your image */}
      <img src={heroBg} alt="The Booth Project" className="absolute inset-0 w-full h-full object-cover" />

      {/* Decorative film-strip dots — the signature element */}
      <div className="absolute left-0 top-0 bottom-0 w-6 flex flex-col justify-around opacity-20 pointer-events-none">
        {Array.from({ length: 18 }).map((_, i) => (
          <div key={i} className="w-3 h-4 bg-charcoal rounded-sm mx-auto" />
        ))}
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-6 flex flex-col justify-around opacity-20 pointer-events-none">
        {Array.from({ length: 18 }).map((_, i) => (
          <div key={i} className="w-3 h-4 bg-charcoal rounded-sm mx-auto" />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Eyebrow */}
        <p className="text-xs font-medium tracking-[0.3em] text-muted uppercase mb-6">
          Metro Manila's Photo Booth Experience
        </p>

        {/* Headline */}
        <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight text-charcoal mb-6">
          Your favorite{' '}
          <em className="not-italic text-[#2D2D2D]">
            photobooth
          </em>{' '}
          experience —{' '}
          <span className="italic">made better.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted font-light leading-relaxed mb-10 max-w-xl mx-auto">
          High-quality prints, custom layouts, and retro charm for your next
          celebration in Metro Manila.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#booking"
            className="bg-charcoal text-cream px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-[#444] transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            Book Your Booth
          </a>
          <a
            href="#packages"
            className="border border-charcoal/30 text-charcoal px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:border-charcoal hover:bg-charcoal/5 transition-all"
          >
            View Packages
          </a>
        </div>

        {/* Trust signals */}
        <div className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs text-muted">
          <span className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-sage inline-block" />
            Weddings
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-blush inline-block" />
            Birthdays
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-sage inline-block" />
            Corporate Events
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-blush inline-block" />
            Debuts
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-sage inline-block" />
            & More
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs tracking-widest text-charcoal uppercase">Scroll</span>
        <div className="w-px h-8 bg-charcoal animate-pulse" />
      </div>
    </section>
  )
}