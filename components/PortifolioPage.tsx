'use client'

import React, { useEffect, useRef, useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'

export default function PortfolioPage() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setScrollPosition(prev => {
        const maxScroll = scrollRef.current ? scrollRef.current.scrollWidth / 2 : 0
        return prev >= maxScroll ? 0 : prev + 1
      })
    }, 30)

    return () => clearInterval(interval)
  }, [isPaused])

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with Next.js, TypeScript, and Tailwind CSS. Features include product management, shopping cart, and secure checkout.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      github: 'https://https://github.com/muhetopeace',
      live: '#'
    },
    {
      title: 'Task Management App',
      description: 'A modern task management application with drag-and-drop functionality, real-time updates, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
      tags: ['React', 'TypeScript', 'Firebase'],
      github: 'https://https://github.com/muhetopeace',
      live: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing creative work with smooth animations and modern design patterns.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      tags: ['Next.js', 'React', 'Tailwind CSS'],
      github: 'https://https://github.com/muhetopeace',
      live: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'A real-time weather dashboard that provides detailed forecasts and weather data visualization for multiple locations.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      tags: ['React', 'TypeScript', 'OpenWeather API'],
      github: 'https://https://github.com/muhetopeace',
      live: '#'
    },
    {
      title: 'To do app Platform',
      description: 'A modern blogging platform with markdown support, comment system, and user authentication.',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop',
      tags: ['Next.js', 'TypeScript', 'MongoDB'],
      github: 'https://github.com/peacebamurange',
      live: '#'
    },
    {
      title: 'Social Media Dashboard',
      description: 'An analytics dashboard for tracking social media metrics with beautiful charts and data visualization.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tags: ['React', 'TypeScript', 'Chart.js'],
      github: 'https://github.com/peacebamurange',
      live: '#'
    }
  ]

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-yellow-500 text-sm font-semibold tracking-wider mb-2">Work</h2>
          <div className="w-16 h-1 bg-yellow-500 mx-auto mb-4"></div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Recent Work</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills in web development and design
          </p>
        </div>

        <div 
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            ref={scrollRef}
            className="flex gap-6 md:gap-8 transition-transform duration-1000 ease-linear"
            style={{ transform: `translateX(-${scrollPosition}px)` }}
          >
            {[...projects, ...projects].map((project, index) => (
              <div 
                key={index} 
                className="bg-slate-800 rounded-lg overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 group shadow-lg hover:shadow-2xl border border-slate-700 flex-shrink-0 w-80"
              >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-500 transition">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-slate-700 text-yellow-500 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm hover:text-yellow-500 transition"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a 
                    href={project.live}
                    className="flex items-center gap-2 text-sm hover:text-yellow-500 transition"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}