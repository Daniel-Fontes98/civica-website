"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Navbar } from "@/components/Navbar"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Building2,
  Factory,
  User,
  AtSign,
  MessageSquare,
} from "lucide-react"
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
    // Handle form submission logic here
    console.log("Form submitted:", formData)
    // You can add logic to send this data to an API endpoint
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-white relative overflow-hidden">
      {/* Immersive Background from Main Page */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='global-grid' width='100' height='100' patternUnits='userSpaceOnUse'%3e%3cpath d='M 100 0 L 0 0 0 100' fill='none' stroke='%23334155' stroke-width='1'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23global-grid)'/%3e%3c/svg%3e")`,
          }}
        />
      </div>

      <Navbar language={language} onLanguageChange={handleLanguageChange} />

      {/* Hero Section Layout for Contact */}
      <section className="relative overflow-hidden py-24 lg:pt-20 lg:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-white/98 to-sky-50/90"></div>
        {/* Rich background layers from homepage hero */}
        <div
          className="absolute inset-0 opacity-[0.08] z-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='blueprint-grid' width='80' height='80' patternUnits='userSpaceOnUse'%3e%3cg fill='none' stroke='%233B82F6' stroke-width='0.8'%3e%3cpath d='M 80 0 L 0 0 0 80'/%3e%3cpath d='M 16 0 L 16 80 M 32 0 L 32 80 M 48 0 L 48 80 M 64 0 L 64 80'/%3e%3cpath d='M 0 16 L 80 16 M 0 32 L 80 32 M 0 48 L 80 48 M 0 64 L 80 64'/%3e%3c/g%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23blueprint-grid)'/%3e%3c/svg%3e")`,
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.06] z-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='beams' width='120' height='120' patternUnits='userSpaceOnUse'%3e%3cg fill='none' stroke='%23475569' stroke-width='2'%3e%3cpath d='M0 40h120M0 80h120'/%3e%3cpath d='M40 0v120M80 0v120'/%3e%3ccircle cx='40' cy='40' r='4' fill='%23475569'/%3e%3ccircle cx='80' cy='40' r='4' fill='%23475569'/%3e%3ccircle cx='40' cy='80' r='4' fill='%23475569'/%3e%3ccircle cx='80' cy='80' r='4' fill='%23475569'/%3e%3c/g%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23beams)'/%3e%3c/svg%3e")`,
          }}
        />
        {/* Added Hexagon Pattern */}
        <div
          className="absolute inset-0 opacity-[0.05] z-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='100' height='87' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='hexagons' width='100' height='87' patternUnits='userSpaceOnUse'%3e%3cg fill='none' stroke='%236366F1' stroke-width='1.5'%3e%3cpolygon points='50,1 93,25 93,73 50,97 7,73 7,25'/%3e%3c/g%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23hexagons)'/%3e%3c/svg%3e")`,
          }}
        />
        <div className="absolute inset-0 z-5">
          <div
            className="absolute top-20 left-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl"
            style={{ animation: "float 6s ease-in-out infinite" }}
          ></div>
          <div
            className="absolute bottom-20 right-10 w-56 h-56 bg-sky-600/20 rounded-full blur-3xl"
            style={{ animation: "float 8s ease-in-out infinite reverse" }}
          ></div>
        </div>
        <div className="relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column: Title and Subtitle */}
              <div className="space-y-8">
                <h1 className="text-5xl lg:text-7xl font-serif font-black bg-gradient-to-r from-slate-900 via-blue-900 to-sky-900 bg-clip-text text-transparent mb-8 leading-tight relative">
                  {t.contactPage.title}
                  <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-blue-600 to-sky-600 rounded-full"></div>
                </h1>
                <p className="text-xl lg:text-2xl text-slate-600 mb-10 leading-relaxed font-medium">
                  {t.contactPage.subtitle}
                </p>
              </div>

              {/* Right Column: Contact Form */}
              <div className="relative">
                <div className="absolute -inset-8 bg-gradient-to-r from-blue-600 to-sky-600 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
                <Card className="relative border-0 shadow-2xl bg-white/95 backdrop-blur-lg overflow-hidden p-8 lg:p-12">
                  <h3 className="text-3xl font-serif font-bold text-slate-900 mb-2">
                    {t.contactPage.formTitle}
                  </h3>
                  <p className="text-slate-600 mb-8">
                    {t.contactPage.formSubtitle}
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <Input
                        type="text"
                        name="name"
                        placeholder={t.contactPage.formName}
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="pl-10"
                      />
                    </div>
                    <div className="relative">
                      <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <Input
                        type="email"
                        name="email"
                        placeholder={t.contactPage.formEmail}
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="pl-10"
                      />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <Input
                        type="tel"
                        name="phone"
                        placeholder={t.contactPage.formPhone}
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="pl-10"
                      />
                    </div>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-slate-400" />
                      <Textarea
                        name="message"
                        placeholder={t.contactPage.formMessage}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="pl-10 pt-3"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full text-lg font-bold hover:scale-105 bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      <span className="relative z-10">
                        {t.contactPage.formSubmit}
                      </span>
                    </Button>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Info Section */}
      <section className="py-24 bg-slate-50/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-md group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <CardContent className="p-8">
              <Building2 className="h-10 w-10 text-blue-600 mb-4 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">
                {t.contactPage.headOffice}
              </h3>
              <p className="text-slate-600 text-lg">
                Rua Major Kanhangulo
                <br />
                Torre Ambiente, Piso 1 E<br />
                Luanda, Angola
              </p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-md group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <CardContent className="p-8">
              <Factory className="h-10 w-10 text-blue-600 mb-4 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">
                {t.contactPage.operationsBase}
              </h3>
              <p className="text-slate-600 text-lg">
                Polo Industrial de Viana
                <br />
                Viana, Luanda
                <br />
                Angola
              </p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-md group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <CardContent className="p-8">
              <Clock className="h-10 w-10 text-blue-600 mb-4 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">
                {t.contactPage.businessHours}
              </h3>
              <p className="text-slate-600 text-lg">
                {t.contactPage.weekdays}
                <br />
                {t.contactPage.saturday}
                <br />
                {t.contactPage.sunday}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-serif font-black bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent mb-4">
              {t.contactPage.findUs}
            </h2>
          </div>
          <Card className="border-0 shadow-2xl bg-white/98 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0">
              <div className="w-full h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.4096108746407!2d13.392676375064775!3d-8.934348991123237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a518accae1c9589%3A0x1372f5647c6c0238!2sPetrowork%20Solution%20LDA!5e0!3m2!1sen!2sao!4v1756372009945!5m2!1sen!2sao"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="eager"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="about"
        className="relative bg-slate-900 text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-sky-900"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='footer-grid' width='120' height='120' patternUnits='userSpaceOnUse'%3e%3cg fill='none' stroke='%23ffffff' stroke-width='1'%3e%3cpath d='M 120 0 L 0 0 0 120'/%3e%3cpath d='M 40 0 L 40 120 M 80 0 L 80 120'/%3e%3cpath d='M 0 40 L 120 40 M 0 80 L 120 80'/%3e%3c/g%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23footer-grid)'/%3e%3c/svg%3e")`,
          }}
        />
        <div className="relative py-20 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-12">
              <div className="md:col-span-1">
                <div className="text-3xl font-serif font-black mb-6 bg-gradient-to-r from-white to-sky-200 bg-clip-text text-transparent relative">
                  CIVICA LDA
                  <div className="absolute -bottom-1 left-0 w-16 h-0.5 bg-gradient-to-r from-sky-400 to-blue-400"></div>
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed text-lg">
                  {t.contactPage.footerSubtitle}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-6 text-sky-200 relative">
                  {t.footer.company}
                  <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-sky-400"></div>
                </h3>
                <ul className="space-y-4 text-slate-300">
                  {[
                    { name: t.nav.about, href: "/#about" },
                    { name: t.nav.services, href: "/#services" },
                    { name: t.nav.projects, href: "/projects" },
                    { name: t.nav.contact, href: "/contact" },
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
                    <MapPin className="h-6 w-6 mt-1 flex-shrink-0 text-sky-400" />
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
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-sky-400" />
                    <span className="text-base font-medium">
                      +244 222 719 374
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-sky-400" />
                    <span className="text-base font-medium">
                      jc@civica-lda.com
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
    </div>
  )
}
