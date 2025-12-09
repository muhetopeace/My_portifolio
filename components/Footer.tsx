import React from 'react'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-800 py-8 px-4 border-t border-slate-700">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-slate-400 text-sm text-center md:text-left">
            <p className="flex items-center gap-1 justify-center md:justify-start">
              © 2024 Peace Bamurange. Made with 
              <Heart className="w-4 h-4 text-red-500 fill-current" /> 
              in Rwanda
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/muhetopeace" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-yellow-500 transition transform hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/peacebamurange" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-yellow-500 transition transform hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:muhetobpeace@gmail.com" 
              className="text-slate-400 hover:text-yellow-500 transition transform hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
