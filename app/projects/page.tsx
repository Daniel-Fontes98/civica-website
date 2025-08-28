"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/Navbar"
import { useState } from "react"
import { Building2, Home, Warehouse } from "lucide-react"

export default function ProjectsPage() {
  const [language, setLanguage] = useState<"en" | "pt">("en")

  const handleLanguageChange = (newLanguage: "en" | "pt") => {
    setLanguage(newLanguage)
  }

  const projects = [
    {
      title: "Industrial Warehouse",
      description:
        "A state-of-the-art industrial warehouse designed for logistics and manufacturing. This project features a high-ceiling structure, reinforced concrete flooring, and advanced loading dock systems to optimize supply chain operations.",
      image: "/industrial-warehouse.png",
      icon: Warehouse,
      category: "Industrial",
    },
    {
      title: "Commercial Office Building",
      description:
        "A modern, multi-story office building in the heart of the city. This project showcases a sleek glass facade, energy-efficient systems, and flexible interior spaces designed to foster collaboration and productivity.",
      image: "/commercial-office-construction.png",
      icon: Building2,
      category: "Commercial",
    },
    {
      title: "Residential Development",
      description:
        "A large-scale residential community featuring single-family homes and shared amenities. The development was designed with a focus on creating a safe, comfortable, and modern living environment for families.",
      image: "/angola-residential-development.png",
      icon: Home,
      category: "Residential",
    },
    {
      title: "Urban Construction Site",
      description:
        "A complex urban construction project involving deep foundations and high-rise structures. This highlights our expertise in managing large-scale projects in dense urban environments with a focus on safety and efficiency.",
      image: "/angola-construction-site.png",
      icon: Building2,
      category: "Infrastructure",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-white relative overflow-hidden">
      {/* Global background patterns */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='global-grid' width='100' height='100' patternUnits='userSpaceOnUse'%3e%3cpath d='M 100 0 L 0 0 0 100' fill='none' stroke='%23334155' stroke-width='1'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23global-grid)'/%3e%3c/svg%3e")`,
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='dots' width='20' height='20' patternUnits='userSpaceOnUse'%3e%3ccircle cx='2' cy='2' r='1' fill='%23475569'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23dots)'/%3e%3c/svg%3e")`,
          }}
        />
      </div>

      <Navbar language={language} onLanguageChange={handleLanguageChange} />

      {/* Header Section */}
      <section className="relative overflow-hidden py-24 lg:pt-20 lg:pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-50 to-sky-100"></div>
        <div
          className="absolute inset-0 opacity-[0.08] z-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='header-grid' width='80' height='80' patternUnits='userSpaceOnUse'%3e%3cg fill='none' stroke='%233B82F6' stroke-width='0.8'%3e%3cpath d='M 80 0 L 0 0 0 80'/%3e%3cpath d='M 16 0 L 16 80 M 32 0 L 32 80 M 48 0 L 48 80 M 64 0 L 64 80'/%3e%3cpath d='M 0 16 L 80 16 M 0 32 L 80 32 M 0 48 L 80 48 M 0 64 L 80 64'/%3e%3c/g%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23header-grid)'/%3e%3c/svg%3e")`,
          }}
        />
        <div className="relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-7xl font-serif font-black bg-gradient-to-r from-slate-900 via-blue-900 to-sky-900 bg-clip-text text-transparent mb-8 leading-tight relative">
              Our Projects
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-sky-600 rounded-full"></div>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Explore a selection of our landmark projects that showcase our
              commitment to quality, innovation, and excellence in construction.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-slate-50/80 to-white/95"></div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='service-dots' width='60' height='60' patternUnits='userSpaceOnUse'%3e%3ccircle cx='30' cy='30' r='2' fill='%23475569'/%3e%3ccircle cx='0' cy='0' r='1' fill='%23475569'/%3e%3ccircle cx='60' cy='0' r='1' fill='%23475569'/%3e%3ccircle cx='0' cy='60' r='1' fill='%23475569'/%3e%3ccircle cx='60' cy='60' r='1' fill='%23475569'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23service-dots)'/%3e%3c/svg%3e")`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((project, index) => {
              const IconComponent = project.icon
              return (
                <Card
                  key={index}
                  className="group border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-2 bg-white/98 backdrop-blur-sm overflow-hidden relative flex flex-col"
                >
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <IconComponent className="h-5 w-5" />
                        <span className="font-semibold">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-serif font-bold">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <CardContent className="p-6 flex-grow">
                    <p className="text-slate-600 leading-relaxed text-lg">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-sky-900"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='footer-grid' width='120' height='120' patternUnits='userSpaceOnUse'%3e%3cg fill='none' stroke='%23ffffff' stroke-width='1'%3e%3cpath d='M 120 0 L 0 0 0 120'/%3e%3cpath d='M 40 0 L 40 120 M 80 0 L 80 120'/%3e%3cpath d='M 0 40 L 120 40 M 0 80 L 120 80'/%3e%3c/g%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23footer-grid)'/%3e%3c/svg%3e")`,
          }}
        />

        <div className="relative py-16 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-3xl font-serif font-black mb-6 bg-gradient-to-r from-white to-sky-200 bg-clip-text text-transparent">
              CIVICA LDA
            </div>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Building excellence across Angola since 2011. Your trusted
              construction partner for tomorrow&apos;s infrastructure.
            </p>
            <div className="border-t border-slate-700 mt-12 pt-8">
              <p className="text-slate-400">
                © 2024 CIVICA LDA. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
