import React from 'react'
import { Camera, Palette, Frame, Droplets, Clock, Star } from 'lucide-react'

// ─── REPLACE THE BOOTH IMAGE HERE ────────────────────────────────────
// 1. Place your booth photo in /src/assets/ (e.g., wooden-booth.jpg)
// 2. Import it: import boothImg from '../assets/wooden-booth.jpg'
// 3. Replace the placeholder div with:
//    <img src={boothImg} alt="Our wooden selfie mirror booth" className="w-full h-full object-cover" />
// ─────────────────────────────────────────────────────────────────────

const perks = [
  {
    icon: Clock,
    title: '2-Hour Unlimited Shots',
    desc: 'Strike as many poses as you want. No limits, no rushing — just pure fun.',
  },
  {
    icon: Palette,
    title: 'FREE Custom Themed Layouts',
    desc: 'We design layouts that match your event theme — weddings, birthdays, corporate, and more.',
  },
  {
    icon: Frame,
    title: 'FREE Elegant Backdrop & Props',
    desc: 'Curated backdrops and fun props included at no extra cost to complete your setup.',
  },
  {
    icon: Droplets,
    title: 'Waterproof & Non-Fading Prints',
    desc: 'Your memories last. Every print is lab-quality — waterproof and resistant to fading.',
  },
  {
    icon: Camera,
    title: 'Selfie Mirror Setup',
    desc: 'Our stunning wooden booth with a selfie mirror design is a head-turner at any event.',
  },
  {
    icon: Star,
    title: 'Dedicated On-Site Attendant',
    desc: 'A friendly team member assists your guests throughout the entire event.',
  },
]

export default function Inclusions() {
  return (
    <section id="inclusions" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-xs font-medium tracking-[0.3em] text-muted uppercase mb-3">
            What's Included
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal">
            Everything you need,
            <br />
            <em>nothing you don't.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Booth image */}
          <div className="relative">
            {/* Replace this div with your booth image */}
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-[#f0e8e0] to-[#e8ede5] flex items-center justify-center relative overflow-hidden">
              <div className="text-center opacity-40">
                <Camera size={48} className="mx-auto mb-3 text-charcoal" />
                <p className="text-sm text-charcoal font-medium">
                  Replace with your booth photo
                  <br />
                  <span className="text-xs font-normal">/src/assets/wooden-booth.jpg</span>
                </p>
              </div>
              {/* Decorative corner accent */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-blush/60 rounded-tr-lg" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-sage/60 rounded-bl-lg" />
            </div>

            {/* Floating stat badge */}
            <div className="absolute -bottom-5 -right-5 bg-charcoal text-cream rounded-2xl px-6 py-4 shadow-xl">
              <p className="font-display text-3xl font-bold">100+</p>
              <p className="text-xs text-cream/70 mt-0.5">Events Served</p>
            </div>
          </div>

          {/* Perks grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {perks.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group p-5 rounded-xl bg-white border border-gray-100 hover:border-blush/40 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-cream flex items-center justify-center mb-3 group-hover:bg-blush/20 transition-colors">
                  <Icon size={18} className="text-charcoal" />
                </div>
                <h3 className="font-semibold text-sm text-charcoal mb-1 leading-snug">{title}</h3>
                <p className="text-xs text-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
