import React from 'react'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">P</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Peace Bamurange</h3>
            <p className="text-gray-600">Full Stack Developer & UI/UX Designer</p>
          </div>
          
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="https://github.com/muhetopeace" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center  hover:text-yellow-500 transition"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/peacebamurange" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center  hover:text-yellow-500 transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:muhetobpeace@gmail.com" 
              className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center  hover:text-yellow-500 transition"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          
          <div className="border-t border-gray-200 pt-8">
            <p className="text-gray-600 flex items-center justify-center gap-2">
              © 2024 Peace Bamurange. Made with 
              <Heart className="w-4 h-4 text-red-500 fill-current" /> 
              in Rwanda
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
