import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

// ─── REPLACE YOUR LOGO HERE ─────────────────────────────────────────
// Option A: Use an image file — place it in /src/assets/ then import it:
//   import logo from '../assets/your-logo.png'
//   Then replace <LogoPlaceholder /> with: <img src={logo} alt="The Booth Project" className="h-10" />
//
// Option B: Keep the text logo below as-is.
// ─────────────────────────────────────────────────────────────────────

const LogoPlaceholder = () => (
  <span className="font-display text-xl font-bold tracking-tight text-charcoal">
    THE <span className="text-[#2D2D2D] font-extrabold">BOOTH</span> PROJECT
  </span>
)

const navLinks = [
  { label: 'Inclusions', href: '#inclusions' },
  { label: 'Packages', href: '#packages' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Book Now', href: '#booking', cta: true },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" aria-label="The Booth Project home">
          <LogoPlaceholder />
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.cta ? (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="bg-charcoal text-cream px-5 py-2.5 rounded-full text-sm font-medium tracking-wide hover:bg-[#444] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ) : (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted hover:text-charcoal transition-colors"
                >
                  {link.label}
                </a>
              </li>
            )
          )}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-charcoal"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-cream border-t border-gray-100 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block text-sm font-medium ${
                    link.cta
                      ? 'bg-charcoal text-cream px-4 py-2.5 rounded-full text-center'
                      : 'text-muted hover:text-charcoal'
                  } transition-colors`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
