import {
  Calendar,
  Code,
  ExternalLink,
  Facebook,
  Film,
  Github,
  Globe,
  Linkedin,
  Mail,
  MessageCircle,
  Phone,
  Search,
  ShoppingCart,
  Smartphone,
  Twitter,
  type LucideIcon,
} from "lucide-react"

export type NavLink = {
  href: string
  label: string
}

export type Service = {
  icon: LucideIcon
  title: string
  desc: string
}

export type Project = {
  title: string
  desc: string
  tags: string[]
  image: string
  github?: string
  live: string
}

export type SocialLink = {
  Icon: LucideIcon
  href: string
  name: string
}

export const PROFILE_IMAGE = "/images/sherif.png"
export const WHATSAPP_NUMBER = "2347035321179"
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`
export const EMAIL_ADDRESS = "sherifyusuff25@gmail.com"
export const PHONE_NUMBER = "+234 703 532 1179"

export function buildWhatsAppUrl(details?: {
  name?: string
  email?: string
  subject?: string
  message?: string
}) {
  const lines = [
    "Hello Sherif, I'd like to discuss a project.",
    details?.name ? `Name: ${details.name}` : null,
    details?.email ? `Email: ${details.email}` : null,
    details?.subject ? `Subject: ${details.subject}` : null,
    details?.message ? `Message: ${details.message}` : null,
  ].filter(Boolean)

  return `${WHATSAPP_URL}?text=${encodeURIComponent(lines.join("\n"))}`
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
]

export const services: Service[] = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Building cross-platform mobile applications with React Native and Flutter for seamless user experiences on any device.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    desc: "Custom online store development with smooth checkout, secure payments, and user-friendly shopping.",
  },
  {
    icon: Code,
    title: "Web Development",
    desc: "Modern, responsive, and fast-loading websites tailored to your business needs.",
  },
  {
    icon: Search,
    title: "SEO & Digital Marketing",
    desc: "Driving organic traffic and sales through powerful search optimization and online campaigns.",
  },
  {
    icon: Globe,
    title: "WordPress Development",
    desc: "Custom themes, plugins, and full CMS solutions built on the world's most popular platform.",
  },
  {
    icon: Film,
    title: "UI/UX Design",
    desc: "Creating intuitive and visually stunning interfaces that delight users and drive conversions.",
  },
]

export const projects: Project[] = [
  {
    title: "Tasty Hub Restaurant Website",
    desc: "Restaurant website for Tasty Hub with a bold hero layout, menu-focused presentation, and conversion-friendly ordering touchpoints for food lovers.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive Design"],
    image: "/images/project-tastyhub.png",
    github: "https://github.com/sherifyusuff/tastyhub",
    live: "https://tastyhub-theta.vercel.app/",
  },
  {
    title: "Aurum Salon & Spa",
    desc: "Premium salon and spa website designed with a polished dark aesthetic, service discovery flow, and booking-driven user journey for a luxury brand.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "UI Design"],
    image: "/images/project-aurum.png",
    github: "https://github.com/sherifyusuff/aurum",
    live: "https://aurumm-five.vercel.app/",
  },
  {
    title: "Heritage Fit Fashion Brand",
    desc: "Elegant fashion brand website featuring editorial-style visuals, clear product storytelling, and a modern responsive layout tailored to premium apparel.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Brand Website"],
    image: "/images/project-heritage-fit.png",
    github: "https://github.com/sapwebs2025/v0-heritage-fit-website",
    live: "https://v0-heritagefit.vercel.app/",
  },
  {
    title: "Luxe Ecommerce Platform",
    desc: "Luxury ecommerce storefront with polished product cards, category filtering, cart flows, and a refined responsive shopping experience.",
    tags: ["Vite", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    image: "/images/project-ecommerce-new.webp",
    github: "https://github.com/sherifyusuff/luxe-ecommerce-store",
    live: "https://luxe-ecommerce-store-sigma.vercel.app/",
  },
  {
    title: "Sapwebs Corporate Website",
    desc: "Corporate marketing website for Sapwebs featuring a polished hero section, clear service messaging, and a conversion-focused business layout.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "/images/project-corporate.webp",
    github: "https://github.com/sherifyusuff/sapwebs-corporate-website",
    live: "https://v0-sapwebs-website-design.vercel.app/",
  },
  {
    title: "SaaS Analytical Admin Dashboard",
    desc: "Admin dashboard experience with authentication, KPI-focused layouts, and a clean interface for teams tracking operational performance.",
    tags: ["Vite", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    image: "/images/project-dashboard.webp",
    github: "https://github.com/sherifyusuff/saas-admin-dashboard",
    live: "https://saas-admin-dashboard-pnnu.vercel.app",
  },
  {
    title: "Car Dealership Gallery Website",
    desc: "Luxury dealership website with a dynamic vehicle gallery, inventory browsing, service center highlights, and a strong editorial grid.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "/images/project-cardealership.webp",
    github: "https://github.com/sherifyusuff/car-dealership-websites",
    live: "https://v0-car-dealership-website-lac.vercel.app/",
  },
]

export const skills = [
  { name: "React / Next.js", pct: 95 },
  { name: "TypeScript", pct: 90 },
  { name: "Node.js / Express", pct: 88 },
  { name: "WordPress / PHP", pct: 92 },
  { name: "Tailwind CSS", pct: 95 },
  { name: "MongoDB / PostgreSQL", pct: 85 },
  { name: "REST APIs / GraphQL", pct: 88 },
  { name: "Git / DevOps", pct: 82 },
]

export const testimonials = [
  {
    name: "Chioma Adeyemi",
    role: "CEO, TechHub Nigeria",
    text: "Sherif built our company website from scratch using Next.js. The site loads incredibly fast, ranks well on Google, and the custom CMS he integrated makes content updates effortless for our team.",
    rating: 5,
  },
  {
    name: "Tunde Oluwaseun",
    role: "Founder, LuxeStore Lagos",
    text: "Sherif redesigned our WordPress e-commerce website and the results speak for themselves. Our page speed improved by 60%, mobile conversions doubled, and the new checkout flow is seamless.",
    rating: 5,
  },
  {
    name: "Amara Okafor",
    role: "Director, InnovateTech Solutions",
    text: "Sherif developed our SaaS dashboard website with real-time analytics and user authentication. He delivered pixel-perfect responsive design and the codebase is clean and well-documented.",
    rating: 5,
  },
]

export const socialLinks: SocialLink[] = [
  { Icon: Github, href: "https://github.com/sherifyusuff", name: "github" },
  { Icon: Linkedin, href: "https://linkedin.com/in/sherif-yusuff-381b1495", name: "linkedin" },
  { Icon: Twitter, href: "https://twitter.com/sherifyusuff", name: "twitter" },
  { Icon: Facebook, href: "https://www.facebook.com/sherifyusufff", name: "facebook" },
  { Icon: MessageCircle, href: buildWhatsAppUrl(), name: "whatsapp" },
]

export const quickContact = [
  { icon: Mail, label: "Email", value: EMAIL_ADDRESS, href: `mailto:${EMAIL_ADDRESS}` },
  { icon: Phone, label: "Phone", value: PHONE_NUMBER, href: "tel:+2347035321179" },
  { icon: Calendar, label: "Experience", value: "3+ Years" },
]

export const contactChannels = [
  { icon: Mail, label: "Email", value: EMAIL_ADDRESS, href: `mailto:${EMAIL_ADDRESS}` },
  { icon: Phone, label: "Phone", value: PHONE_NUMBER, href: "tel:+2347035321179" },
  { icon: MessageCircle, label: "WhatsApp", value: PHONE_NUMBER, href: buildWhatsAppUrl() },
  { icon: ExternalLink, label: "Location", value: "Remote / Worldwide" },
]
