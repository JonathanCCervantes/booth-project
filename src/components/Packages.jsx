import React from 'react'
import { Check } from 'lucide-react'

const packages = [
  {
    id: 'A',
    name: 'Package A',
    format: '4R Print',
    tagline: 'Classic & Versatile',
    price: '3,250',
    color: 'bg-[#f5ede6]',
    accent: 'border-blush',
    features: [
      'Horizontal or vertical layout',
      '2-hour unlimited shots',
      'Custom themed layout (FREE)',
      'Elegant backdrop & props (FREE)',
      'Full magnet print available',
      'Waterproof non-fading prints',
      'On-site attendant',
    ],
    popular: false,
  },
  {
    id: 'B',
    name: 'Package B',
    format: 'Strip Print',
    tagline: 'Fan-Favorite',
    price: '3,250',
    color: 'bg-charcoal',
    accent: 'border-charcoal',
    textDark: true,
    features: [
      'Bookmark-style strip layout',
      '3 or 4 shots per strip',
      '2-hour unlimited shots',
      'Guest dedication option',
      'Custom themed layout (FREE)',
      'Elegant backdrop & props (FREE)',
      'On-site attendant',
    ],
    popular: true,
  },
  {
    id: 'C',
    name: 'Package C',
    format: 'Polaroid Print',
    tagline: 'Retro & Charming',
    price: '3,250',
    color: 'bg-[#eaf0e8]',
    accent: 'border-sage',
    features: [
      'Polaroid-style retro layout',
      '2 or 4 shots per print',
      '2-hour unlimited shots',
      'Custom themed layout (FREE)',
      'Elegant backdrop & props (FREE)',
      'Waterproof non-fading prints',
      'On-site attendant',
    ],
    popular: false,
  },
]

export default function Packages() {
  return (
    <section id="packages" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-medium tracking-[0.3em] text-muted uppercase mb-3">
            Our Packages
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-4">
            One price.
            <br />
            <em>Three ways to remember it.</em>
          </h2>
          <p className="text-muted text-base max-w-md mx-auto">
            All packages start at <strong className="text-charcoal">₱3,250</strong> — no hidden fees,
            no surprises.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-2xl p-8 ${pkg.color} border-2 ${pkg.accent} transition-transform hover:-translate-y-1`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-blush text-charcoal text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Package label */}
              <div className="mb-6">
                <span
                  className={`text-[10px] font-bold tracking-[0.25em] uppercase ${
                    pkg.textDark ? 'text-cream/60' : 'text-muted'
                  }`}
                >
                  {pkg.name}
                </span>
                <h3
                  className={`font-display text-2xl font-bold mt-1 ${
                    pkg.textDark ? 'text-cream' : 'text-charcoal'
                  }`}
                >
                  {pkg.format}
                </h3>
                <p
                  className={`text-sm mt-1 ${
                    pkg.textDark ? 'text-cream/60' : 'text-muted'
                  }`}
                >
                  {pkg.tagline}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <span
                  className={`text-xs font-medium ${
                    pkg.textDark ? 'text-cream/60' : 'text-muted'
                  }`}
                >
                  Starting at
                </span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span
                    className={`font-display text-4xl font-bold ${
                      pkg.textDark ? 'text-cream' : 'text-charcoal'
                    }`}
                  >
                    ₱{pkg.price}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check
                      size={14}
                      className={`mt-0.5 shrink-0 ${
                        pkg.textDark ? 'text-blush' : 'text-charcoal'
                      }`}
                    />
                    <span
                      className={`text-xs leading-relaxed ${
                        pkg.textDark ? 'text-cream/80' : 'text-muted'
                      }`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#booking"
                className={`block text-center py-3 rounded-full text-sm font-semibold tracking-wide transition-all ${
                  pkg.textDark
                    ? 'bg-cream text-charcoal hover:bg-blush'
                    : 'bg-charcoal text-cream hover:bg-[#444]'
                }`}
              >
                Book This Package
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted mt-8">
          Need something custom? Reach us at{' '}
          <a href="tel:09081031814" className="underline hover:text-charcoal">
            0908 103 1814
          </a>{' '}
          to discuss.
        </p>
      </div>
    </section>
  )
}
