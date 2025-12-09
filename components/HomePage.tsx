import React from 'react'
import { Github, Linkedin, Instagram, ChevronRight } from 'lucide-react'

interface HomePageProps {
  setActivePage: (page: string) => void
}

export default function HomePage({ setActivePage }: HomePageProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/50 to-slate-900"></div>
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-8">
          <img 
            src="https://i.postimg.cc/FRfb4wYM/IMG_64.jpg"
            alt="Peace Bamurange"
            className="w-48 h-48 rounded-full mx-auto border-4 border-yellow-500 shadow-2xl object-cover"
          />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
          Hi, I am <span className="text-yellow-500">Peace Bamurange</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 mb-4">
          Full Stack Developer & UI/UX Designer
        </p>
        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-8 px-4">
          I am a passionate developer based in Kigali, Rwanda, specializing in building 
          beautiful and functional web applications with React, Next.js, and TypeScript.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <button
            onClick={() => setActivePage('portfolio')}
            className="bg-yellow-500 text-slate-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition transform hover:scale-105 flex items-center gap-2"
          >
            View My Work
            <ChevronRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => setActivePage('contact')}
            className="bg-transparent border-2 border-yellow-500 text-yellow-500 px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 hover:text-slate-900 transition transform hover:scale-105"
          >
            Get In Touch
          </button>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a 
            href="https://github.com/muhetopeace" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition transform hover:scale-110"
          >
            <Github className="w-7 h-7" />
          </a>
          <a 
            href="https://linkedin.com/in/peacebamurange" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition transform hover:scale-110"
          >
            <Linkedin className="w-7 h-7" />
          </a>
          <a 
            href="https://instagram.com/pea__.__ce" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition transform hover:scale-110"
          >
            <Instagram className="w-7 h-7" />
          </a>
        </div>
      </div>
    </div>
  )
}