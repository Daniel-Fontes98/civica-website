"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/Navbar"
import { Phone, Mail, MapPin, Clock, Building2, Factory } from "lucide-react"
import { useState } from "react"
import { content } from "@/lib/utils"

export default function ContactPage() {
  const [language, setLanguage] = useState<"en" | "pt">("en")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const t = content[language]

  const handleLanguageChange = (newLanguage: "en" | "pt") => {
    setLanguage(newLanguage)
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form or show success message
  }

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
        {/* Same background as contact section */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-50 to-sky-100"></div>

        {/* Blueprint construction grid - same as contact section */}
        <div
          className="absolute inset-0 opacity-[0.08] z-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='header-grid' width='80' height='80' patternUnits='userSpaceOnUse'%3e%3cg fill='none' stroke='%233B82F6' stroke-width='0.8'%3e%3cpath d='M 80 0 L 0 0 0 80'/%3e%3cpath d='M 16 0 L 16 80 M 32 0 L 32 80 M 48 0 L 48 80 M 64 0 L 64 80'/%3e%3cpath d='M 0 16 L 80 16 M 0 32 L 80 32 M 0 48 L 80 48 M 0 64 L 80 64'/%3e%3c/g%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23header-grid)'/%3e%3c/svg%3e")`,
          }}
        />

        {/* Construction beam pattern */}
        <div
          className="absolute inset-0 opacity-[0.04] z-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='header-beams' width='120' height='120' patternUnits='userSpaceOnUse'%3e%3cg fill='none' stroke='%23475569' stroke-width='2'%3e%3cpath d='M0 40h120M0 80h120'/%3e%3cpath d='M40 0v120M80 0v120'/%3e%3ccircle cx='40' cy='40' r='3' fill='%23475569'/%3e%3ccircle cx='80' cy='40' r='3' fill='%23475569'/%3e%3ccircle cx='40' cy='80' r='3' fill='%23475569'/%3e%3ccircle cx='80' cy='80' r='3' fill='%23475569'/%3e%3c/g%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23header-beams)'/%3e%3c/svg%3e")`,
          }}
        />

        <div className="relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-7xl font-serif font-black bg-gradient-to-r from-slate-900 via-blue-900 to-sky-900 bg-clip-text text-transparent mb-8 leading-tight relative">
              Contact Us
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-sky-600 rounded-full"></div>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Ready to build your next project? Get in touch with our expert
              team today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Strong blue gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-50 to-sky-100"></div>

        {/* Construction blueprint pattern - more visible */}
        <div
          className="absolute inset-0 opacity-[0.08] z-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='contact-grid' width='80' height='80' patternUnits='userSpaceOnUse'%3e%3cg fill='none' stroke='%233B82F6' stroke-width='0.8'%3e%3cpath d='M 80 0 L 0 0 0 80'/%3e%3cpath d='M 16 0 L 16 80 M 32 0 L 32 80 M 48 0 L 48 80 M 64 0 L 64 80'/%3e%3cpath d='M 0 16 L 80 16 M 0 32 L 80 32 M 0 48 L 80 48 M 0 64 L 80 64'/%3e%3c/g%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23contact-grid)'/%3e%3c/svg%3e")`,
          }}
        />

        {/* Construction beam pattern */}
        <div
          className="absolute inset-0 opacity-[0.04] z-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='beams' width='120' height='120' patternUnits='userSpaceOnUse'%3e%3cg fill='none' stroke='%23475569' stroke-width='2'%3e%3cpath d='M0 40h120M0 80h120'/%3e%3cpath d='M40 0v120M80 0v120'/%3e%3ccircle cx='40' cy='40' r='3' fill='%23475569'/%3e%3ccircle cx='80' cy='40' r='3' fill='%23475569'/%3e%3ccircle cx='40' cy='80' r='3' fill='%23475569'/%3e%3ccircle cx='80' cy='80' r='3' fill='%23475569'/%3e%3c/g%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23beams)'/%3e%3c/svg%3e")`,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details Card */}
              <Card className="border-0 shadow-2xl bg-white/98 backdrop-blur-sm overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-sky-50/50 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <CardContent className="p-8 relative z-10">
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6 flex items-center">
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 group/item">
                      <Phone className="h-5 w-5 text-blue-600 group-hover/item:scale-110 transition-transform duration-300" />
                      <span className="text-lg text-slate-700 font-medium">
                        +244 222 719 374
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 group/item">
                      <Mail className="h-5 w-5 text-blue-600 group-hover/item:scale-110 transition-transform duration-300" />
                      <span className="text-lg text-slate-700 font-medium">
                        jc@civica-lda.com
                      </span>
                    </div>
                    <div className="flex items-start space-x-4 group/item">
                      <Clock className="h-5 w-5 text-blue-600 mt-1 group-hover/item:scale-110 transition-transform duration-300" />
                      <div className="text-lg text-slate-700">
                        <div className="font-semibold mb-2">Business Hours</div>
                        <div className="space-y-1 text-slate-600">
                          <div>Monday - Friday: 8:00 AM - 6:00 PM</div>
                          <div>Saturday: 8:00 AM - 2:00 PM</div>
                          <div>Sunday: Closed</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Addresses */}
            </div>
            <div className="grid gap-6">
              {/* Office Address */}
              <Card className="border-0 shadow-2xl bg-white/98 backdrop-blur-sm overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-sky-50/50 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <CardContent className="p-6 relative z-10">
                  <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                    <Building2 className="h-5 w-5 text-blue-600 mr-3" />
                    Head Office
                  </h4>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div className="text-slate-700">
                      <div>Rua Major Kanhangulo</div>
                      <div>Torre Ambiente, Piso 1 E</div>
                      <div>Luanda, Angola</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Base Address */}
              <Card className="border-0 shadow-2xl bg-white/98 backdrop-blur-sm overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-sky-50/50 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <CardContent className="p-6 relative z-10">
                  <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                    <Factory className="h-5 w-5 text-blue-600 mr-3" />
                    Operations Base
                  </h4>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div className="text-slate-700">
                      <div>Polo Industrial de Viana</div>
                      <div>Viana, Luanda</div>
                      <div>Angola</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative py-16 overflow-hidden">
        {/* Light background to separate from header/contact sections */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"></div>

        {/* Subtle pattern for texture */}
        <div
          className="absolute inset-0 opacity-[0.03] z-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='map-dots' width='60' height='60' patternUnits='userSpaceOnUse'%3e%3ccircle cx='30' cy='30' r='2' fill='%23475569'/%3e%3ccircle cx='0' cy='0' r='1' fill='%23475569'/%3e%3ccircle cx='60' cy='0' r='1' fill='%23475569'/%3e%3ccircle cx='0' cy='60' r='1' fill='%23475569'/%3e%3ccircle cx='60' cy='60' r='1' fill='%23475569'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23map-dots)'/%3e%3c/svg%3e")`,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-serif font-black bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent mb-4 relative">
              Find Us
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-sky-600 rounded-full"></div>
            </h2>
          </div>

          {/* Map Container - Replace with your preferred map service */}
          <Card className="border-0 shadow-2xl bg-white/98 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0">
              <div className="w-full h-96 bg-gradient-to-br from-slate-200 to-blue-100 flex items-center justify-center relative">
                {/* Placeholder for map - replace with actual map component */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.2171892179244!2d13.394606083646906!3d-8.933230243834899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a518accae1c9589%3A0x1372f5647c6c0238!2sPetrowork%20Solution%20LDA!5e0!3m2!1sen!2sao!4v1756366525416!5m2!1sen!2sao"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                {/* Example iframe for Google Maps - Replace with your actual coordinates */}
                {/* 
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.123456789!2d13.123456!3d-8.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDcnMjQuNCJTIDEzwrAwNyczNi4wIkU!5e0!3m2!1sen!2sao!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                */}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Enhanced Footer */}
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

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(1deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
