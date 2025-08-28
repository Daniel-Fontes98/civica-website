"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react"
import { ClientCarousel } from "@/components/ClientCaroussel"
import { useState } from "react"
import { content } from "@/lib/utils"
import { Navbar } from "@/components/Navbar"

export default function HomePage() {
  const [language, setLanguage] = useState<"en" | "pt">("en")
  const handleLanguageChange = (newLanguage: "en" | "pt") => {
    setLanguage(newLanguage)
  }

  const t = content[language]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-white relative overflow-hidden">
      {/* Global background patterns */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Professional construction grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='global-grid' width='100' height='100' patternUnits='userSpaceOnUse'%3e%3cpath d='M 100 0 L 0 0 0 100' fill='none' stroke='%23334155' stroke-width='1'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23global-grid)'/%3e%3c/svg%3e")`,
          }}
        />
        {/* Blueprint-style dotted pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='dots' width='20' height='20' patternUnits='userSpaceOnUse'%3e%3ccircle cx='2' cy='2' r='1' fill='%23475569'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23dots)'/%3e%3c/svg%3e")`,
          }}
        />
      </div>

      {/* Navigation */}
      <Navbar language={language} onLanguageChange={handleLanguageChange} />

      {/* Hero Section with Enhanced Textures */}
      <section
        id="home"
        className="relative overflow-hidden py-24 lg:pt-20 lg:pb-28"
      >
        {/* Base gradient with enhanced depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-white/98 to-sky-50/90"></div>

        {/* Blueprint construction grid - more visible */}
        <div
          className="absolute inset-0 opacity-[0.08] z-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='blueprint-grid' width='80' height='80' patternUnits='userSpaceOnUse'%3e%3cg fill='none' stroke='%233B82F6' stroke-width='0.8'%3e%3cpath d='M 80 0 L 0 0 0 80'/%3e%3cpath d='M 16 0 L 16 80 M 32 0 L 32 80 M 48 0 L 48 80 M 64 0 L 64 80'/%3e%3cpath d='M 0 16 L 80 16 M 0 32 L 80 32 M 0 48 L 80 48 M 0 64 L 80 64'/%3e%3c/g%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23blueprint-grid)'/%3e%3c/svg%3e")`,
          }}
        />

        {/* Construction beam pattern */}
        <div
          className="absolute inset-0 opacity-[0.06] z-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='beams' width='120' height='120' patternUnits='userSpaceOnUse'%3e%3cg fill='none' stroke='%23475569' stroke-width='2'%3e%3cpath d='M0 40h120M0 80h120'/%3e%3cpath d='M40 0v120M80 0v120'/%3e%3ccircle cx='40' cy='40' r='4' fill='%23475569'/%3e%3ccircle cx='80' cy='40' r='4' fill='%23475569'/%3e%3ccircle cx='40' cy='80' r='4' fill='%23475569'/%3e%3ccircle cx='80' cy='80' r='4' fill='%23475569'/%3e%3c/g%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23beams)'/%3e%3c/svg%3e")`,
          }}
        />

        {/* Architectural hexagon pattern */}
        <div
          className="absolute inset-0 opacity-[0.05] z-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='100' height='87' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='hexagons' width='100' height='87' patternUnits='userSpaceOnUse'%3e%3cg fill='none' stroke='%236366F1' stroke-width='1.5'%3e%3cpolygon points='50,1 93,25 93,73 50,97 7,73 7,25'/%3e%3c/g%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23hexagons)'/%3e%3c/svg%3e")`,
          }}
        />

        {/* Premium paper texture */}
        <div
          className="absolute inset-0 opacity-[0.035] z-10 mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3e%3cfilter id='paper-texture'%3e%3cfeTurbulence baseFrequency='0.65' numOctaves='4' result='noise'/%3e%3cfeColorMatrix in='noise' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3e%3c/filter%3e%3crect width='100%25' height='100%25' fill='%23f8fafc' filter='url(%23paper-texture)'/%3e%3c/svg%3e")`,
          }}
        />

        {/* Dynamic floating elements with enhanced animations */}
        <div className="absolute inset-0 z-5">
          <div
            className="absolute top-20 left-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl animate-pulse"
            style={{ animation: "float 6s ease-in-out infinite" }}
          ></div>
          <div
            className="absolute bottom-20 right-10 w-56 h-56 bg-sky-600/20 rounded-full blur-3xl animate-pulse delay-1000"
            style={{ animation: "float 8s ease-in-out infinite reverse" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-sky-400/10 rounded-full blur-3xl"
            style={{ animation: "pulse 4s ease-in-out infinite" }}
          ></div>

          {/* Construction-themed geometric elements */}
          <div
            className="absolute top-32 right-1/4 w-24 h-24 bg-gradient-to-br from-blue-500/15 to-transparent rounded-2xl blur-xl rotate-45"
            style={{ animation: "float 10s ease-in-out infinite" }}
          ></div>
          <div
            className="absolute bottom-32 left-1/4 w-32 h-32 bg-gradient-to-tl from-sky-500/15 to-transparent rounded-full blur-xl"
            style={{ animation: "float 7s ease-in-out infinite reverse" }}
          ></div>
          <div
            className="absolute top-10 right-10 w-16 h-16 bg-blue-400/10 transform rotate-12 blur-sm"
            style={{ animation: "float 5s ease-in-out infinite" }}
          ></div>
        </div>

        <div className="relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 space-y-8 space-x-8">
                <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-sky-100 text-blue-800 hover:from-blue-200 hover:to-sky-200 transition-all duration-300 shadow-xl text-sm font-bold px-6 py-3 border border-blue-200/50 hidden md:block">
                  {t.hero.tagline}
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-serif font-black bg-gradient-to-r from-slate-900 via-blue-900 to-sky-900 bg-clip-text text-transparent mb-8 leading-tight relative">
                  {t.hero.title}
                  <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-blue-600 to-sky-600 rounded-full"></div>
                </h1>
                <p className="text-xl lg:text-2xl text-slate-600 mb-10 leading-relaxed font-medium relative z-10">
                  {t.hero.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <Button
                    size="lg"
                    className="hover:scale-105 hover:cursor-pointer bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 group px-8 py-4 text-lg font-bold relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <span className="relative z-10">{t.hero.cta}</span>
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform relative z-10" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="hover:scale-105 hover:cursor-pointer border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-white/95 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-300 px-8 py-4 text-lg font-bold"
                    onClick={() => (window.location.href = "/contact")}
                  >
                    {t.hero.contact}
                  </Button>
                </div>
              </div>
              <div className="relative order-1 lg:order-2">
                <div className="absolute -inset-8 bg-gradient-to-r from-blue-600 to-sky-600 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
                <div className="relative p-4 md:p-0">
                  <img
                    src="/angola-construction-site.png"
                    alt="CIVICA construction projects"
                    className="relative rounded-2xl  hover:shadow-2xl transition-all duration-700 w-full h-auto md:scale-125 animate-float"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-sky-900"></div>
        {/* Construction blueprint pattern for stats */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='blueprint' width='200' height='200' patternUnits='userSpaceOnUse'%3e%3cg fill='none' stroke='%23ffffff' stroke-width='1'%3e%3cpath d='M 200 0 L 0 0 0 200'/%3e%3cpath d='M 50 0 L 50 200 M 100 0 L 100 200 M 150 0 L 150 200'/%3e%3cpath d='M 0 50 L 200 50 M 0 100 L 200 100 M 0 150 L 200 150'/%3e%3ccircle cx='50' cy='50' r='3'/%3e%3ccircle cx='150' cy='50' r='3'/%3e%3ccircle cx='50' cy='150' r='3'/%3e%3ccircle cx='150' cy='150' r='3'/%3e%3c/g%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23blueprint)'/%3e%3c/svg%3e")`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>

        <div className="relative text-white z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { number: "500+", label: t.stats.projects },
                { number: "50+", label: t.stats.clients },
                { number: "14", label: t.stats.experience },
                { number: "180+", label: t.stats.employees },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center group hover:scale-110 transition-all duration-500 relative"
                >
                  <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm"></div>
                  <div className="relative p-6">
                    <div className="text-5xl lg:text-7xl font-serif font-black mb-4 bg-gradient-to-r from-white to-sky-200 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-sky-100 group-hover:text-white transition-colors text-lg font-semibold">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section id="services" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-slate-50/80 to-white/95"></div>
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>

        {/* Services background pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='service-dots' width='60' height='60' patternUnits='userSpaceOnUse'%3e%3ccircle cx='30' cy='30' r='2' fill='%23475569'/%3e%3ccircle cx='0' cy='0' r='1' fill='%23475569'/%3e%3ccircle cx='60' cy='0' r='1' fill='%23475569'/%3e%3ccircle cx='0' cy='60' r='1' fill='%23475569'/%3e%3ccircle cx='60' cy='60' r='1' fill='%23475569'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23service-dots)'/%3e%3c/svg%3e")`,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-serif font-black bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent mb-6 relative">
              {t.services.title}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-600 to-sky-600 rounded-full"></div>
            </h2>
            <p className="text-2xl text-slate-600 max-w-4xl mx-auto font-medium">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {t.services.items.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={index}
                  className="group border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-6 bg-white/98 backdrop-blur-sm overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-sky-50/50 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <CardContent className="p-8 relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-sky-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <div className="pb-20">
        <ClientCarousel />
      </div>

      {/* Enhanced Footer */}
      <footer
        id="about"
        className="relative bg-slate-900 text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-sky-900"></div>
        {/* Professional footer pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='footer-grid' width='120' height='120' patternUnits='userSpaceOnUse'%3e%3cg fill='none' stroke='%23ffffff' stroke-width='1'%3e%3cpath d='M 120 0 L 0 0 0 120'/%3e%3cpath d='M 40 0 L 40 120 M 80 0 L 80 120'/%3e%3cpath d='M 0 40 L 120 40 M 0 80 L 120 80'/%3e%3cpath d='M 0 0 L 40 40 M 80 0 L 120 40 M 0 80 L 40 120 M 80 80 L 120 120'/%3e%3c/g%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23footer-grid)'/%3e%3c/svg%3e")`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>

        <div className="relative py-20 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-12">
              <div className="md:col-span-1">
                <div className="text-3xl font-serif font-black mb-6 bg-gradient-to-r from-white to-sky-200 bg-clip-text text-transparent relative">
                  CIVICA LDA
                  <div className="absolute -bottom-1 left-0 w-16 h-0.5 bg-gradient-to-r from-sky-400 to-blue-400"></div>
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed text-lg">
                  Building excellence across Angola since 2011. Your trusted
                  construction partner for tomorrow&apos;s infrastructure.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6 text-sky-200 relative">
                  {t.footer.company}
                  <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-sky-400"></div>
                </h3>
                <ul className="space-y-4 text-slate-300">
                  {[
                    { name: "About Us", href: "#about" },
                    { name: "Services", href: "#services" },
                    { name: "Projects", href: "#projects" },
                    { name: "Contact Us", href: "/contact" },
                  ].map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="hover:text-sky-200 transition-all duration-300 hover:translate-x-2 inline-block text-lg font-medium relative group"
                      >
                        {item.name}
                        <div className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-sky-400 group-hover:w-full transition-all duration-300"></div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6 text-sky-200 relative">
                  {t.footer.luanda}
                  <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-sky-400"></div>
                </h3>
                <div className="space-y-4 text-slate-300">
                  <div className="flex items-start space-x-4 group">
                    <MapPin className="h-6 w-6 mt-1 flex-shrink-0 text-sky-400 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-base leading-relaxed">
                      <div>Rua Major Kanhangulo</div>
                      <div>Torre Ambiente, Piso 1 E</div>
                      <div>Luanda, Angola</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6 text-sky-200 relative">
                  {t.footer.contact}
                  <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-sky-400"></div>
                </h3>
                <div className="space-y-4 text-slate-300">
                  <div className="flex items-center space-x-4 hover:text-sky-200 transition-colors group">
                    <Phone className="h-6 w-6 text-sky-400 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-base font-medium">
                      +244 222 719 374
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 hover:text-sky-200 transition-colors group">
                    <Mail className="h-6 w-6 text-sky-400 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-base font-medium">
                      jc@civica-lda.com
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 hover:text-sky-200 transition-colors group">
                    <MapPin className="h-6 w-6 text-sky-400 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-base font-medium">
                      Polo Industrial de Viana
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-700 mt-16 pt-10 text-center relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-sky-400 to-transparent"></div>
              <p className="text-slate-400 text-lg mt-6">{t.footer.rights}</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom animations and styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(1deg);
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.5);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .construction-pattern {
          background-image: url("data:image/svg+xml,%3csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='construction-pattern' width='100' height='100' patternUnits='userSpaceOnUse'%3e%3cg fill='none' stroke='%23475569' stroke-width='1'%3e%3cpath d='M0 50h100M50 0v100'/%3e%3cpath d='M25 0v100M75 0v100'/%3e%3cpath d='M0 25h100M0 75h100'/%3e%3c/g%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23construction-pattern)'/%3e%3c/svg%3e");
        }

        .blueprint-grid {
          background-image: url("data:image/svg+xml,%3csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='blueprint-grid' width='200' height='200' patternUnits='userSpaceOnUse'%3e%3cg fill='none' stroke='%23ffffff' stroke-width='1'%3e%3cpath d='M 200 0 L 0 0 0 200'/%3e%3cpath d='M 50 0 L 50 200 M 100 0 L 100 200 M 150 0 L 150 200'/%3e%3cpath d='M 0 50 L 200 50 M 0 100 L 200 100 M 0 150 L 200 150'/%3e%3ccircle cx='50' cy='50' r='2'/%3e%3ccircle cx='150' cy='50' r='2'/%3e%3ccircle cx='50' cy='150' r='2'/%3e%3ccircle cx='150' cy='150' r='2'/%3e%3c/g%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23blueprint-grid)'/%3e%3c/svg%3e");
        }
      `}</style>
    </div>
  )
}
