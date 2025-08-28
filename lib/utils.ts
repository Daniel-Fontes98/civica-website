import { clsx, type ClassValue } from "clsx"
import { Building2, Shield, Target, Zap } from "lucide-react"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const content = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      projects: "Projects",
      about: "About",
      contact: "Contact Us",
    },
    hero: {
      tagline: "WE THINK GLOBALLY, IN ANGOLA",
      title: "Building Tomorrow, Today",
      subtitle:
        "Innovative Construction Solutions for Iconic Projects. Your trusted partner delivering world-class industrial, commercial, and residential developments with 100% Angolan expertise.",
      cta: "Discover Our Projects",
      contact: "Contact Us",
    },
    services: {
      title: "Our Expertise",
      subtitle: "Comprehensive construction solutions that build the future",
      items: [
        {
          title: "Industrial Excellence",
          description:
            "State-of-the-art warehouses, factories, and industrial facilities engineered to global standards",
          icon: Building2,
        },
        {
          title: "Commercial Innovation",
          description:
            "Dynamic office buildings, retail spaces, and commercial complexes that inspire business growth",
          icon: Target,
        },
        {
          title: "Residential Quality",
          description:
            "Premium housing projects and residential complexes designed for modern living",
          icon: Shield,
        },
        {
          title: "Infrastructure Power",
          description:
            "Essential roads, utilities, and infrastructure that connects communities and drives progress",
          icon: Zap,
        },
      ],
    },
    portfolio: {
      title: "Trusted by Industry Leaders",
      subtitle:
        "Building partnerships with Angola's most prestigious organizations",
    },
    stats: {
      projects: "Projects Delivered",
      clients: "Satisfied Clients",
      experience: "Years of Excellence",
      employees: "Expert Team Members",
    },
    footer: {
      company: "Company",
      services: "Services",
      contact: "Contact Info",
      luanda: "Luanda Office",
      viana: "Production Office",
      rights: "© 2025 CIVICA LDA. All rights reserved.",
    },
  },
  pt: {
    nav: {
      home: "Início",
      services: "Serviços",
      projects: "Projetos",
      about: "Sobre",
      contact: "Contacto",
    },
    hero: {
      tagline: "A PENSAR GLOBALMENTE, EM ANGOLA",
      title: "Construindo o Amanhã, Hoje",
      subtitle:
        "Soluções Inovadoras de Construção para Projetos Icônicos. Seu parceiro de confiança oferecendo desenvolvimentos industriais, comerciais e residenciais de classe mundial com expertise 100% angolana.",
      cta: "Descubra os Nossos Projetos",
      contact: "Contacte-nos",
    },
    services: {
      title: "Nossa Expertise",
      subtitle: "Soluções abrangentes de construção que constroem o futuro",
      items: [
        {
          title: "Excelência Industrial",
          description:
            "Armazéns, fábricas e instalações industriais de última geração projetadas com padrões globais",
          icon: Building2,
        },
        {
          title: "Inovação Comercial",
          description:
            "Edifícios de escritórios dinâmicos, espaços comerciais e complexos que inspiram crescimento empresarial",
          icon: Target,
        },
        {
          title: "Qualidade Residencial",
          description:
            "Projetos habitacionais premium e complexos residenciais projetados para a vida moderna",
          icon: Shield,
        },
        {
          title: "Poder da Infraestrutura",
          description:
            "Estradas essenciais, serviços públicos e infraestrutura que conecta comunidades e impulsiona o progresso",
          icon: Zap,
        },
      ],
    },
    portfolio: {
      title: "Confiança dos Líderes da Indústria",
      subtitle:
        "Construindo parcerias com as organizações mais prestigiosas de Angola",
    },
    stats: {
      projects: "Projetos Entregues",
      clients: "Clientes Satisfeitos",
      experience: "Anos de Excelência",
      employees: "Membros da Equipe Especializada",
    },
    footer: {
      company: "Empresa",
      services: "Serviços",
      contact: "Informações de Contacto",
      luanda: "Escritório Luanda",
      viana: "Escritório de Produção",
      rights: "© 2025 CIVICA LDA. Todos os direitos reservados.",
    },
  },
}
