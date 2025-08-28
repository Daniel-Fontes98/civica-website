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
      title: "Our Prestigious Clients",
      subtitle:
        "Trusted partnerships with industry leaders and government institutions",
      clients: [
        [
          { name: "Coca-Cola", sector: "Beverage Industry", emoji: "🥤" },
          { name: "Chevron", sector: "Oil & Gas", emoji: "🛢️" },
          { name: "French Embassy", sector: "Diplomatic Mission", emoji: "🏛️" },
          { name: "Sumol+Compal", sector: "Food & Beverage", emoji: "🧃" },
          { name: "Sonangol", sector: "Oil & Gas", emoji: "⛽" },
          { name: "SGS Angola", sector: "Inspection Services", emoji: "🔍" },
        ],
        [
          { name: "BNA", sector: "National Bank", emoji: "🏦" },
          { name: "Unitel", sector: "Telecommunications", emoji: "📱" },
          { name: "BAI", sector: "Banking", emoji: "💳" },
          { name: "Standard Bank", sector: "Banking", emoji: "🏧" },
          { name: "ENI Angola", sector: "Oil & Gas", emoji: "⛽" },
          { name: "BP Angola", sector: "Oil & Gas", emoji: "🛢️" },
        ],
        [
          { name: "Total Energies", sector: "Oil & Gas", emoji: "⚡" },
          { name: "US Embassy", sector: "Diplomatic Mission", emoji: "🏛️" },
          { name: "Ensa", sector: "Insurance", emoji: "🛡️" },
          { name: "TAAG", sector: "Aviation", emoji: "✈️" },
          { name: "Refriangol", sector: "Cold Storage", emoji: "❄️" },
          { name: "Pumangol", sector: "Fuel Distribution", emoji: "⛽" },
        ],
      ],
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
    contactPage: {
      title: "Contact Us",
      subtitle:
        "Ready to build your next project? Get in touch with our expert team today.",
      formTitle: "Send Us a Message",
      formSubtitle: "We're here to answer any questions you may have.",
      formName: "Full Name",
      formEmail: "Email Address",
      formPhone: "Phone Number (Optional)",
      formMessage: "Your Message",
      formSubmit: "Send Message",
      contactInfo: "Contact Information",
      businessHours: "Business Hours",
      weekdays: "Monday - Friday: 8:00 AM - 6:00 PM",
      saturday: "Saturday: 8:00 AM - 2:00 PM",
      sunday: "Sunday: Closed",
      headOffice: "Head Office",
      operationsBase: "Operations Base",
      findUs: "Find Us",
      footerTitle: "CIVICA LDA",
      footerSubtitle:
        "Building excellence across Angola since 2011. Your trusted construction partner for tomorrow's infrastructure.",
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
        "Soluções de construção inovadoras para projetos icónicos. O seu parceiro de confiança que oferece soluções de desenvolvimento industrial, comercial e residencial de classe mundial com conhecimento 100% angolano.",
      cta: "Descubra os Nossos Projetos",
      contact: "Contacte-nos",
    },
    services: {
      title: "A Nossa Especialidade",
      subtitle: "Soluções abrangentes de construção que edificam o futuro",
      items: [
        {
          title: "Excelência Industrial",
          description:
            "Armazéns, fábricas e instalações industriais de vanguarda, projetados segundo os padrões globais.",
          icon: Building2,
        },
        {
          title: "Inovação Comercial",
          description:
            "Edifícios de escritórios dinâmicos, espaços comerciais e complexos que inspiram o crescimento empresarial.",
          icon: Target,
        },
        {
          title: "Qualidade Residencial",
          description:
            "Projetos de habitação premium e complexos residenciais concebidos para a vida moderna.",
          icon: Shield,
        },
        {
          title: "Poder da Infraestrutura",
          description:
            "Estradas essenciais, serviços públicos e infraestruturas que conectam comunidades e impulsionam o progresso.",
          icon: Zap,
        },
      ],
    },
    portfolio: {
      title: "Clientes de Prestígio",
      subtitle:
        "Parcerias de confiança com os líderes da indústria e instituições governamentais.",
      clients: [
        [
          { name: "Coca-Cola", sector: "Indústria de Bebidas", emoji: "🥤" },
          { name: "Chevron", sector: "Petróleo e Gás", emoji: "🛢️" },
          {
            name: "Embaixada de França",
            sector: "Missão Diplomática",
            emoji: "🏛️",
          },
          { name: "Sumol+Compal", sector: "Alimentos e Bebidas", emoji: "🧃" },
          { name: "Sonangol", sector: "Petróleo e Gás", emoji: "⛽" },
          { name: "SGS Angola", sector: "Serviços de Inspeção", emoji: "🔍" },
        ],
        [
          { name: "BNA", sector: "Banco Nacional", emoji: "🏦" },
          { name: "Unitel", sector: "Telecomunicações", emoji: "📱" },
          { name: "BAI", sector: "Banca", emoji: "💳" },
          { name: "Standard Bank", sector: "Banca", emoji: "🏧" },
          { name: "ENI Angola", sector: "Petróleo e Gás", emoji: "⛽" },
          { name: "BP Angola", sector: "Petróleo e Gás", emoji: "🛢️" },
        ],
        [
          { name: "Total Energies", sector: "Petróleo e Gás", emoji: "⚡" },
          {
            name: "Embaixada dos EUA",
            sector: "Missão Diplomática",
            emoji: "🏛️",
          },
          { name: "Ensa", sector: "Seguros", emoji: "🛡️" },
          { name: "TAAG", sector: "Aviação", emoji: "✈️" },
          { name: "Refriangol", sector: "Armazenagem de Frio", emoji: "❄️" },
          {
            name: "Pumangol",
            sector: "Distribuição de Combustível",
            emoji: "⛽",
          },
        ],
      ],
    },
    stats: {
      projects: "Projetos Entregues",
      clients: "Clientes Satisfeitos",
      experience: "Anos de Excelência",
      employees: "Membros da Equipa Especializada",
    },
    footer: {
      company: "Empresa",
      services: "Serviços",
      contact: "Informações de Contacto",
      luanda: "Escritório de Luanda",
      viana: "Base Operacional",
      rights: "© 2025 CIVICA LDA. Todos os direitos reservados.",
    },
    contactPage: {
      title: "Contacte-nos",
      subtitle:
        "Pronto para construir o seu próximo projeto? Fale com a nossa equipa de especialistas hoje.",
      formTitle: "Envie-nos uma Mensagem",
      formSubtitle:
        "Estamos aqui para responder a quaisquer perguntas que possa ter.",
      formName: "Nome Completo",
      formEmail: "Endereço de Email",
      formPhone: "Número de Telefone (Opcional)",
      formMessage: "A Sua Mensagem",
      formSubmit: "Enviar Mensagem",
      contactInfo: "Informações de Contacto",
      businessHours: "Horário de Funcionamento",
      weekdays: "Segunda a Sexta-feira: 08:00 - 18:00",
      saturday: "Sábado: 08:00 - 14:00",
      sunday: "Domingo: Fechado",
      headOffice: "Sede",
      operationsBase: "Base Operacional",
      findUs: "Encontre-nos",
      footerTitle: "CIVICA LDA",
      footerSubtitle:
        "Construindo a excelência em Angola desde 2011. O seu parceiro de confiança na construção das infraestruturas do futuro.",
    },
  },
}
