import React from 'react'
import { Download, Award, Users, Clock, Star } from 'lucide-react'

export default function AboutPage() {
  const stats = [
    { icon: Award, value: '50+', label: 'Projects Completed' },
    { icon: Users, value: '30+', label: 'Happy Clients' },
    { icon: Clock, value: '3+', label: 'Years Experience' },
    { icon: Star, value: '5.0', label: 'Client Rating' }
  ]

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-yellow-500 text-sm font-semibold tracking-wider mb-2">ABOUT ME</h2>
          <div className="w-16 h-1 bg-yellow-500 mx-auto mb-4"></div>
          <h1 className="text-4xl md:text-5xl font-bold">Know Me More</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Hi, I am <span className="text-yellow-500">Peace Bamurange</span>
            </h3>
            <p className="text-slate-300 mb-4 leading-relaxed">
              I am a passionate Full Stack Developer and UI/UX Designer based in Kigali, Rwanda. 
              With over 3 years of experience in web development, I specialize in creating beautiful, 
              functional, and user-centered digital experiences.
            </p>
            <p className="text-slate-300 mb-4 leading-relaxed">
              My expertise lies in modern web technologies including React, Next.js, TypeScript, 
              and Tailwind CSS. I bring ideas to life through clean code, elegant design, and 
              a deep understanding of user needs.
            </p>
            <p className="text-slate-300 mb-6 leading-relaxed">
              I am constantly learning and staying updated with the latest trends in web development 
              to deliver cutting-edge solutions to my clients.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex gap-4 items-center">
                <span className="text-slate-400 w-32">Name:</span>
                <span className="font-semibold">Peace Bamurange</span>
              </div>
              <div className="flex gap-4 items-center">
                <span className="text-slate-400 w-32">Email:</span>
                <a href="mailto:peace@example.com" className="font-semibold hover:text-yellow-500 transition">
                  peace@gmail.com
                </a>
              </div>
              <div className="flex gap-4 items-center">
                <span className="text-slate-400 w-32">Phone:</span>
                <span className="font-semibold">+250 123 456 789</span>
              </div>
              <div className="flex gap-4 items-center">
                <span className="text-slate-400 w-32">From:</span>
                <span className="font-semibold">Kigali, Rwanda</span>
              </div>
            </div>

            <button className="bg-yellow-500 text-slate-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition flex items-center gap-2 transform hover:scale-105">
              <Download className="w-5 h-5" />
              Download CV
            </button>
          </div>

          <div className="relative">
            <div className="aspect-[3/4] bg-slate-800 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://i.postimg.cc/FRfb4wYM/image.png"
                alt="Peace Bamurange"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="bg-slate-800/50 p-6 rounded-lg text-center hover:bg-slate-700/50 transition group">
                <Icon className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-yellow-500 mb-1">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}