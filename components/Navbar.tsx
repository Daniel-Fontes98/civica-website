import { Button } from "@/components/ui/button"
import { Languages } from "lucide-react"
import { content } from "@/lib/utils"

interface NavbarProps {
  language: "en" | "pt"
  onLanguageChange: (language: "en" | "pt") => void
  className?: string
}

export function Navbar({
  language,
  onLanguageChange,
  className = "",
}: NavbarProps) {
  const t = content[language]

  return (
    <nav
      className={`bg-white/95 backdrop-blur-xl shadow-xl border-b border-blue-100/50 sticky top-0 z-50 transition-all duration-300 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center hover:cursor-pointer">
            <div className="text-3xl font-serif font-black bg-gradient-to-r from-blue-600 via-blue-700 to-sky-600 bg-clip-text text-transparent relative">
              CIVICA
              <span className="text-black text-2xl ml-1 relative">
                LDA
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-sky-600"></div>
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-10">
            {Object.values(t.nav).map((item, index) => {
              const key = Object.keys(t.nav)[index]
              let href = ""

              switch (key) {
                case "home":
                  href = "/"
                  break
                case "projects":
                  href = "/projects"
                  break
                case "contact":
                  href = "/contact"
                  break
                default:
                  href = `/#${key}`
                  break
              }

              return (
                <a
                  key={index}
                  href={href}
                  className="text-slate-700 hover:text-blue-600 transition-all duration-300 hover:scale-110 font-semibold relative group"
                >
                  {item}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-sky-600 group-hover:w-full transition-all duration-300"></div>
                </a>
              )
            })}
          </div>

          {/* Language Toggle */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onLanguageChange(language === "en" ? "pt" : "en")}
              className="flex items-center space-x-2 hover:bg-blue-50 transition-all duration-300 font-semibold hover:cursor-pointer hover:scale-110 border border-blue-200/50"
            >
              <Languages className="h-5 w-5" />
              <span>{language === "en" ? "PT" : "EN"}</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
