'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import HomePage from '@/components/HomePage'
import AboutPage from '@/components/About'
import ServicesPage from '@/components/Services'
import PortfolioPage from '@/components/PortifolioPage'
import ResumePage from '@/components/ResumePage'
import ContactPage from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButton'

export default function Home() {
  const [activePage, setActivePage] = useState('home')

  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <Navigation activePage={activePage} setActivePage={setActivePage} />
      
      <section id="home">
        <HomePage setActivePage={setActivePage} />
      </section>
      <section id="about">
        <AboutPage />
      </section>
      <section id="services">
        <ServicesPage />
      </section>
      <section id="portfolio">
        <PortfolioPage />
      </section>
      <section id="resume">
        <ResumePage />
      </section>
      <section id="contact">
        <ContactPage />
      </section>
      
      <Footer />
      <FloatingButtons />
    </main>
  )
}