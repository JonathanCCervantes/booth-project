import React, { useState } from 'react'
import { MapPin, Phone, Facebook, Send, CheckCircle } from 'lucide-react'

// ─── BUSINESS CONTACT CONFIG ──────────────────────────────────────────
// Update these values with your actual business information.
const BUSINESS_EMAIL = 'theboothprojectx@gmail.com'  // ← Change this
const BUSINESS_PHONE = '0908 103 1814'
const BUSINESS_LOCATION = 'Pasig City, Metro Manila'
const FACEBOOK_URL = 'https://www.facebook.com/theboothprojectph'  // ← Change this
const TIKTOK_URL = 'https://tiktok.com/@theboothprojectph'    // ← Change this
// ─────────────────────────────────────────────────────────────────────

const packageOptions = ['Package A – 4R Print', 'Package B – Strip Print', 'Package C – Polaroid Print', "I'm not sure yet"]

const TikTokIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.94a8.17 8.17 0 0 0 4.78 1.52V7.02a4.85 4.85 0 0 1-1.01-.33z"/>
  </svg>
)

export default function Booking() {
  const [form, setForm] = useState({ name: '', email: '', date: '', package: '', notes: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Build a mailto link — opens the user's email client pre-filled
    const subject = encodeURIComponent(`Booth Booking Inquiry – ${form.name}`)
    const body = encodeURIComponent(
      `Hi, I'd like to book The Booth Project!\n\n` +
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Event Date: ${form.date}\n` +
      `Package: ${form.package}\n` +
      `Additional Notes: ${form.notes || 'None'}\n\n` +
      `Looking forward to hearing from you!`
    )

    window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <section id="booking" className="py-24 bg-charcoal text-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — Info */}
          <div>
            <p className="text-xs font-medium tracking-[0.3em] text-cream/50 uppercase mb-3">
              Let's Make It Happen
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to book?
              <br />
              <em>We'd love to be there.</em>
            </h2>
            <p className="text-cream/60 text-base leading-relaxed mb-10 max-w-sm">
              Fill out the form and we'll get back to you within 24 hours. Or reach us directly below.
            </p>

            <div className="space-y-5">
              <a
                href={`tel:${BUSINESS_PHONE.replace(/\s/g, '')}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-blush/30 transition-colors">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-xs text-cream/50 mb-0.5">Call or Text</p>
                  <p className="text-sm font-medium">{BUSINESS_PHONE}</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-xs text-cream/50 mb-0.5">Location</p>
                  <p className="text-sm font-medium">{BUSINESS_LOCATION}</p>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-4 py-2.5 rounded-full text-xs font-medium"
                >
                  <Facebook size={14} />
                  Facebook
                </a>
                <a
                  href={TIKTOK_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-4 py-2.5 rounded-full text-xs font-medium"
                >
                  <TikTokIcon />
                  TikTok
                </a>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle size={48} className="mx-auto mb-4 text-sage" />
                <h3 className="font-display text-2xl font-bold mb-2">You're all set!</h3>
                <p className="text-cream/60 text-sm">
                  Your email client should have opened with a pre-filled message. If not,
                  email us directly at{' '}
                  <a href={`mailto:${BUSINESS_EMAIL}`} className="underline">
                    {BUSINESS_EMAIL}
                  </a>
                  .
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-xs text-cream/50 underline"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-cream/60 mb-1.5 font-medium">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Maria Santos"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:outline-none focus:border-blush transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-cream/60 mb-1.5 font-medium">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="maria@email.com"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:outline-none focus:border-blush transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-cream/60 mb-1.5 font-medium">Event Date *</label>
                  <input
                    type="date"
                    name="date"
                    required
                    value={form.date}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm text-cream focus:outline-none focus:border-blush transition-colors [color-scheme:dark]"
                  />
                </div>

                <div>
                  <label className="block text-xs text-cream/60 mb-1.5 font-medium">Package *</label>
                  <select
                    name="package"
                    required
                    value={form.package}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm text-cream focus:outline-none focus:border-blush transition-colors [color-scheme:dark]"
                  >
                    <option value="" disabled>Choose a package...</option>
                    {packageOptions.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-cream/60 mb-1.5 font-medium">Additional Notes</label>
                  <textarea
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Event type, theme, venue, number of guests..."
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:outline-none focus:border-blush transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-cream text-charcoal py-3.5 rounded-full text-sm font-semibold tracking-wide hover:bg-blush transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={14} />
                  Send Booking Request
                </button>

                <p className="text-center text-[11px] text-cream/30">
                  This will open your email app with a pre-filled message to {BUSINESS_EMAIL}
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Footer bar */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream/30">
          <p>© {new Date().getFullYear()} The Booth Project. All rights reserved.</p>
          <p>Made with love in Metro Manila 🇵🇭</p>
        </div>
      </div>
    </section>
  )
}
