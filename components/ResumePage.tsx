import React from 'react'
import { Briefcase, Award } from 'lucide-react'
import { title } from 'process'

export default function ResumePage() {
  const skills = [
    { name: 'HTML/CSS', level: 95 },
    { name: 'Tailwind CSS', level: 92 },
    { name: 'React', level: 90 },
    { name: 'Next.js', level: 88 },
    { name: 'TypeScript', level: 85 },
    { name: 'JavaScript', level: 93 }
  ]

  const experience = [
   
   
    {
      title: 'SheCanCode Frontend trainee',
      company: 'Igire Rwanda Organization',
      period: '2025 - Present',
      description: 'Learning and working on frontend development projects using React, Next.js, and TypeScript. implementing best practices.'
    },
    {
        title:'Network operation eengineer',
        campany: 'KT Rwanda Network',
        period: 'march,2025 - may,2025',
        description: 'KT Rwanda Networks operates Rwanda’s national 4G LTE and fiber-optic infrastructure. Its networking operations involve monitoring and maintaining the nationwide LTE and fiber backbone, ensuring high-quality network performance, reliability, and uptime. The team handles network configuration, troubleshooting, upgrades, and optimization to provide fast, secure, and stable connectivity to mobile operators, ISPs, government systems, and businesses across Rwanda.'
    }
  ]

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Rwanda',
      period: '2022- Present',
      description: 'Focused on software engineering, algorithms, and web development.'
    }
  ]

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-yellow-500 text-sm font-semibold tracking-wider mb-2">RESUME</h2>
          <div className="w-16 h-1 bg-yellow-500 mx-auto mb-4"></div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Journey</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-yellow-500" />
              Experience
            </h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-lg border-l-4 border-yellow-500">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                    <h4 className="text-xl font-bold">{exp.title}</h4>
                    <span className="text-xs bg-slate-700 text-yellow-500 px-3 py-1 rounded-full self-start">{exp.period}</span>
                  </div>
                  <p className="text-yellow-500 mb-2">{exp.company}</p>
                  <p className="text-slate-400 text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-yellow-500" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-lg border-l-4 border-yellow-500">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                    <h4 className="text-xl font-bold">{edu.degree}</h4>
                    <span className="text-xs bg-slate-700 text-yellow-500 px-3 py-1 rounded-full self-start">{edu.period}</span>
                  </div>
                  <p className="text-yellow-500 mb-2">{edu.school}</p>
                  <p className="text-slate-400 text-sm">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Technical Skills</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-lg group-hover:text-yellow-500 transition">{skill.name}</span>
                  <span className="text-slate-400">{skill.level}%</span>
                </div>
                <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
