import React from 'react'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-8 px-4"> 
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="mb-6">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">Peace Bamurange</h3>
            <p className="text-gray-600 text-sm">Full Stack Developer & UI/UX Designer</p>
          </div>
          
          <div className="flex justify-center gap-2 mb-6">
            <a 
              href="https://github.com/muhetopeace" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:text-yellow-500 transition"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/peacebamurange" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:text-yellow-500 transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:muhetobpeace@gmail.com" 
              className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:text-yellow-500 transition"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          
          <div className="border-t border-gray-200 pt-6">
            <p className="text-gray-600 text-sm flex items-center justify-center gap-2">
              © 2025 Peace Bamurange. all rights reseved.
            
      
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
