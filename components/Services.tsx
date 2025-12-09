import React from 'react'
import { Layout, Palette, BarChart3, Smartphone, Code, Globe } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      icon: Layout,
      title: 'Web Design',
      description: 'Creating beautiful and intuitive web designs that engage users and deliver exceptional experiences across all devices.',
      features: ['Responsive Design', 'Modern UI/UX', 'Brand Identity']
    },
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Building responsive and performant web applications using modern frameworks like React and Next.js.',
      features: ['React & Next.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      icon: Globe,
      title: 'Full Stack Development',
      description: 'Developing complete web solutions from frontend to backend with modern technologies and best practices.',
      features: ['API Development', 'Database Design', 'Authentication']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Designing user interfaces that are not only visually appealing but also provide seamless user experiences.',
      features: ['User Research', 'Prototyping', 'Usability Testing']
    },
    {
      icon: Smartphone,
      title: 'Mobile Responsive',
      description: 'Ensuring your website looks perfect and functions flawlessly on all devices, from mobile to desktop.',
      features: ['Mobile First', 'Cross-Browser', 'Performance']
    },
    {
      icon: BarChart3,
      title: 'Optimization',
      description: 'Optimizing websites for speed, SEO, and performance to provide the best user experience possible.',
      features: ['SEO', 'Performance', 'Analytics']
    }
  ]

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-yellow-500 text-sm font-semibold tracking-wider mb-2">SERVICES</h2>
          <div className="w-16 h-1 bg-yellow-500 mx-auto mb-4"></div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">What I Do</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            I provide a wide range of services to help bring your ideas to life
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div 
                key={index} 
                className="bg-slate-800/50 p-6 md:p-8 rounded-lg hover:bg-slate-700/50 transition-all duration-300 group transform hover:-translate-y-2 hover:shadow-xl border border-slate-700"
              >
                <div className="text-yellow-500 mb-4 flex justify-center">
                  <Icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center group-hover:text-yellow-500 transition">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 text-center">{service.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {service.features.map((feature, i) => (
                    <span key={i} className="text-xs bg-slate-700 text-yellow-500 px-3 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}