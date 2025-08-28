import { useEffect, useState } from "react"
import { content } from "@/lib/utils"

interface ClientCarouselProps {
  language: "en" | "pt"
}

export function ClientCarousel({ language }: ClientCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  const t = content[language]
  const clientGroups = t.portfolio.clients

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % clientGroups.length)
        setIsVisible(true)
      }, 500)
    }, 4000)

    return () => clearInterval(interval)
  }, [clientGroups.length])

  return (
    <div className="bg-white/98 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/30 relative overflow-hidden">
      {/* Subtle pattern for client section */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg width='50' height='50' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='client-pattern' width='50' height='50' patternUnits='userSpaceOnUse'%3e%3cg fill='none' stroke='%23475569' stroke-width='0.5'%3e%3cpath d='M25 0v50M0 25h50'/%3e%3c/g%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23client-pattern)'/%3e%3c/svg%3e")`,
        }}
      />

      {/* Progress indicator */}
      <div className="absolute top-4 right-4 flex space-x-2">
        {clientGroups.map((_, index) => (
          <div
            key={index}
            className={`w-8 h-1 rounded-full transition-all duration-500 ${
              index === currentSlide
                ? "bg-gradient-to-r from-blue-600 to-sky-600"
                : "bg-slate-200"
            }`}
          />
        ))}
      </div>

      <div className="relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4 relative">
            {t.portfolio.title}
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-blue-600 to-sky-600"></div>
          </h3>
          <p className="text-lg md:text-xl text-slate-600">
            {t.portfolio.subtitle}
          </p>
        </div>

        {/* Mobile-optimized client grid */}
        <div
          className={`transition-all duration-500 ${
            isVisible
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-4"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8 items-center">
            {clientGroups[currentSlide].map((client, index) => (
              <div
                key={`${currentSlide}-${index}`}
                className="text-center group"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: isVisible
                    ? "slideInUp 0.6s ease-out forwards"
                    : "none",
                }}
              >
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 h-20 md:h-24 rounded-xl md:rounded-2xl flex flex-col items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500 border border-slate-200/50 relative overflow-hidden p-2">
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-blue-50/50 to-blue-50/0 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                  {/* Logo/Icon */}
                  <div className="text-2xl md:text-3xl mb-1 relative z-10 group-hover:scale-110 transition-transform duration-300">
                    {client.emoji}
                  </div>

                  {/* Client name */}
                  <span className="text-xs md:text-sm font-bold text-slate-700 group-hover:text-slate-900 relative z-10 text-center leading-tight">
                    {client.name}
                  </span>

                  {/* Sector tag - hidden on mobile, visible on larger screens */}
                  <span className="hidden lg:block text-xs text-slate-500 mt-1 relative z-10">
                    {client.sector}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slide indicators for mobile */}
        <div className="flex justify-center mt-6 md:hidden">
          <div className="flex space-x-2">
            {clientGroups.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsVisible(false)
                  setTimeout(() => {
                    setCurrentSlide(index)
                    setIsVisible(true)
                  }, 200)
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-blue-600 scale-125"
                    : "bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
