"use client"

import { useState, useEffect } from "react"

export type Language = "pt" | "en"

export function useLanguage() {
  const [language, setLanguage] = useState<Language>("pt")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "pt" || savedLanguage === "en")) {
      setLanguage(savedLanguage)
    }
    setIsLoaded(true)
  }, [])

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage)
    localStorage.setItem("language", newLanguage)
  }

  return { language, changeLanguage, isLoaded }
}
