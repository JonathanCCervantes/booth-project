import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Inclusions from './components/Inclusions'
import Packages from './components/Packages'
import Gallery from './components/Gallery'
import Booking from './components/Booking'

export default function App() {
  return (
    <div className="min-h-screen font-body">
      <Navbar />
      <main>
        <Hero />
        <Inclusions />
        <Packages />
        <Gallery />
        <Booking />
      </main>
    </div>
  )
}
