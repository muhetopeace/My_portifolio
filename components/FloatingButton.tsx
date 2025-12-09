'use client'

import React, { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function FloatingButtons() {
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true)
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false)
      }
    }

    window.addEventListener('scroll', checkScrollTop)
    return () => window.removeEventListener('scroll', checkScrollTop)
  }, [showScroll])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className={`fixed bottom-8 right-8 z-40 transition-opacity duration-300 ${showScroll ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <button 
        onClick={scrollToTop}
        className="w-14 h-14 bg-slate-800 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-all duration-300 group shadow-lg hover:shadow-yellow-500/50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 text-white group-hover:text-slate-900 transition" />
      </button>
    </div>
  )
}
