'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

interface NavigationProps {
  activePage: string
  setActivePage: (page: string) => void
}

export default function Navigation({ activePage, setActivePage }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'HOME', page: 'home' },
    { name: 'ABOUT', page: 'about' },
    { name: 'SERVICES', page: 'services' },
    { name: 'PORTFOLIO', page: 'portfolio' },
    { name: 'RESUME', page: 'resume' },
    { name: 'CONTACT', page: 'contact' }
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-slate-900/80'
    } border-b border-slate-800`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div onClick={() => setActivePage('home')} className="flex items-center gap-2 cursor-pointer">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform">
                <span className="text-slate-900 font-bold text-xl">P</span>
              </div>
              <span className="font-bold text-xl hidden sm:block">Peace Bamurange</span>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              {menuItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => setActivePage(item.page)}
                  className={`hover:text-yellow-500 transition text-sm ${
                    activePage === item.page ? 'text-yellow-500' : ''
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <a href="tel:+250123456789" className="flex items-center gap-2 text-sm hover:text-yellow-500 transition">
                <Phone className="w-4 h-4" />
                +250 123 456 789
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.page}
                onClick={() => {
                  setActivePage(item.page)
                  setMobileMenuOpen(false)
                }}
                className={`block w-full text-left px-3 py-2 hover:bg-slate-700 rounded transition ${
                  activePage === item.page ? 'text-yellow-500 bg-slate-700' : ''
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}