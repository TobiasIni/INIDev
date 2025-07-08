"use client"

import React from "react"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  User,
  Briefcase,
  MessageSquare,
  Twitter,
  Instagram,
  Send,
  Code,
  Zap,
  Computer,
} from "lucide-react"

// SplashScreen Component
function SplashScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete()
    }, 2000)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-black via-black to-emerald-900 flex items-center justify-center z-50">
      <div className="text-center space-y-8">
        <div className="relative">
          <div className="w-40 h-40 mx-auto bg-gradient-to-r from-black-400 to-emerald-600 rounded-full flex items-center justify-center animate-pulse">
            <img src="/ini-logo.png" alt="Logo" className="w-full h-full object-cover rounded-full border-4 border-emerald-400" />
          </div>
          <div className="absolute inset-0 w-40 h-40 mx-auto border-4 border-emerald-400 rounded-full animate-ping opacity-20"></div>
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent animate-pulse">
            Desarrollo Web Profesional
          </h1>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
            <div
              className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Hook para animaciones de scroll
function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return { ref, isVisible }
}

// Componente de Card de Proyecto con diseño elegante
function ProjectCard({ proyecto, index }: { proyecto: any; index: number }) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="group relative overflow-hidden rounded-xl aspect-[16/10] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-emerald-500/50">
        {/* Fondo oscuro para resaltar el logo */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>
        
        <img
          src={proyecto.imagen || "/placeholder.svg"}
          alt={proyecto.titulo}
          className="absolute inset-0 w-full h-full object-contain p-8 transition-transform duration-500 group-hover:scale-110 z-10"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20"></div>
        
        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-30">
          <h3 className="text-xl font-bold mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            {proyecto.titulo}
          </h3>
          
          {/* Icono de enlace que aparece en hover */}
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
            <a 
              href={proyecto.enlace} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span className="text-sm font-medium mr-2">Ver proyecto</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Border accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-40"></div>
        
        {/* Corner glow effect */}
        <div className="absolute top-2 right-2 w-4 h-4 bg-emerald-500/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-40"></div>
      </div>
    </div>
  )
}

// Componente de Card de Servicio Premium
function ServiceCard({ servicio, index }: { servicio: any; index: number }) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Card className="group relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/25 h-full hover:-translate-y-2">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute top-4 right-4 w-20 h-20 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-colors duration-500"></div>
        
        <CardContent className="relative p-8 text-center space-y-6 h-full flex flex-col justify-center">
          {/* Icon Container */}
          <div className="w-16 h-16 mx-auto bg-emerald-500/10 rounded-2xl flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-500 group-hover:scale-110 transform">
            <div className="text-3xl">{servicio.icono}</div>
          </div>
          
          <div className="space-y-4">
            <CardTitle className="text-emerald-400 group-hover:text-emerald-300 transition-colors text-xl font-bold">
              {servicio.titulo}
            </CardTitle>
            <CardDescription className="text-gray-300 leading-relaxed text-sm group-hover:text-gray-200 transition-colors select-none">
              {servicio.descripcion}
            </CardDescription>
          </div>
          
          {/* Feature indicator */}
        </CardContent>

        {/* Animated Border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        
        {/* Corner Accent */}
        <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </Card>
    </div>
  )
}

export default function Portfolio() {
  const [showSplash, setShowSplash] = useState(true)
  const [activeSection, setActiveSection] = useState("inicio")
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState({ type: '', message: '' })

  const proyectos = [
    {
      id: 1,
      descripcion: "Landing Page para la fiesta de reggueton con dashboard de administracion de usuarios y eventos, con galeria de fotos y videos, formulario de contacto y login de usuarios",
      tecnologias: ["React", "Node.js", "Supabase", "Tailwind"],
      imagen: "/logoGarete.png",
      enlace: "https://gare7e.com",
    },
  ]

  const servicios = [
    {
      id: 1,
      titulo: "Soporte 24/7",
      descripcion: "Atención continua para mantener tu sitio web funcionando perfectamente en todo momento.",
      icono: "🛠️",
    },
    {
      id: 2,
      titulo: "Tecnología de Punta",
      descripcion: "Desarrollos modernos adaptables a todos los dispositivos con las últimas tecnologías.",
      icono: "🚀",
    },
    {
      id: 3,
      titulo: "Métricas",
      descripcion: "Análisis detallado del rendimiento de tu sitio web y métricas de usuarios.",
      icono: "📊",
    },
    {
      id: 4,
      titulo: "Dashboard de Administracion",
      descripcion: "Dashboard de administracion para gestionar tu sitio web, con funcionalidades de usuarios, eventos, productos, etc.",
      icono: "🔧",
    },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage({ type: '', message: '' })

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitMessage({ 
          type: 'success', 
          message: '✅ ¡Mensaje enviado correctamente! Te contactaremos pronto.' 
        })
        // Limpiar formulario después del envío exitoso
        setFormData({
          nombre: '',
          email: '',
          asunto: '',
          mensaje: ''
        })
      } else {
        setSubmitMessage({ 
          type: 'error', 
          message: `❌ Error: ${result.error || 'No se pudo enviar el mensaje'}` 
        })
      }
    } catch (error) {
      console.error('Error al enviar formulario:', error)
      setSubmitMessage({ 
        type: 'error', 
        message: '❌ Error de conexión. Por favor intenta de nuevo.' 
      })
    } finally {
      setIsSubmitting(false)
      // Limpiar mensaje después de 5 segundos
      setTimeout(() => {
        setSubmitMessage({ type: '', message: '' })
      }, 5000)
    }
  }

  const scrollToContact = () => {
    setActiveSection("contacto")
  }

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-emerald-900">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-md border-b border-emerald-500/20 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10  flex items-center justify-center">
                <img src="/ini-logo.png" alt="Logo" className="w-full h-full object-cover rounded-full" />
              </div>
              <h1 className="text-lg md:text-2xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                INI Desarrollos
              </h1>
            </div>
            <nav className="flex space-x-1">
              <Button
                variant={activeSection === "inicio" ? "default" : "ghost"}
                onClick={() => setActiveSection("inicio")}
                className={`flex items-center space-x-2 ${
                  activeSection === "inicio"
                    ? "bg-emerald-500 text-black hover:bg-emerald-600"
                    : "text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10"
                }`}
              >
                <Computer className="h-4 w-4" />
                <span>Inicio</span>
              </Button>
              <Button
                variant={activeSection === "contacto" ? "default" : "ghost"}
                onClick={() => setActiveSection("contacto")}
                className={`flex items-center space-x-2 ${
                  activeSection === "contacto"
                    ? "bg-emerald-500 text-black hover:bg-emerald-600"
                    : "text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10"
                }`}
              >
                <MessageSquare className="h-4 w-4" />
                <span>Contacto</span>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full">
        {activeSection === "inicio" && (
          <div className="space-y-0">
            {/* Hero Section */}
            <section className="relative py-32 overflow-hidden">
              {/* Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-emerald-600/5"></div>
              <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
              
              <div className="relative z-10 max-w-6xl mx-auto px-4 text-center space-y-12">
                {/* Badge/Credencial */}
                <div className="inline-flex items-center px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-8 animate-fade-in">
                  <Zap className="w-4 h-4 mr-2" />
                  Transformamos ideas en experiencias digitales
                </div>

                {/* Título principal */}
                <div className="space-y-6">
                  <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent leading-tight animate-slide-up">
                    Desarrollo web
                  </h1>
                  <h2 className="text-4xl md:text-6xl font-bold text-white animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    a medida para tu{' '}
                    <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                      negocio
                    </span>
                  </h2>
                </div>

                {/* Descripción */}
                <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
                  Impulsa tu presencia digital con soluciones web profesionales, modernas y completamente personalizadas. 
                  
                </p>

                {/* Botones de acción */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
                  <Button
                    onClick={scrollToContact}
                    size="lg"
                    className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-black font-semibold px-12 py-6 text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/25"
                  >
                    <MessageSquare className="h-5 w-5 mr-2" />
                    Empezar mi proyecto
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-400 px-12 py-6 text-lg transition-all duration-300"
                    onClick={() => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <Code className="h-5 w-5 mr-2" />
                    Ver trabajos
                  </Button>
                </div>

                {/* Estadísticas/Credenciales */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-16 animate-slide-up" style={{ animationDelay: '0.8s' }}>
                  <div className="text-center space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-emerald-400">24/7</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide">Respuesta</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-3xl md:text-4xl font-bold text-emerald-400">24/7</div>
                    <div className="text-sm text-gray-400 uppercase tracking-wide">Soporte</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-3xl md:text-4xl font-bold text-emerald-400">100%</div>
                    <div className="text-sm text-gray-400 uppercase tracking-wide">Personalizado</div>
                  </div>
                  <div className="text-center space-y-2">
                  </div>
                </div>

                {/* Flecha indicadora */}

              </div>
            </section>

            {/* Servicios Section */}
            <section className="relative py-24 overflow-hidden">
              {/* Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-emerald-600/5"></div>
              <div className="absolute top-10 right-20 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 left-20 w-80 h-80 bg-emerald-600/5 rounded-full blur-3xl"></div>
              
              <div className="relative z-10 max-w-6xl mx-auto px-4 space-y-16">
                <div className="text-center space-y-8">
                  {/* Badge */}
                  
                  <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent animate-slide-up">
                    Nuestros Servicios
                  </h2>
                  <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    Ofrecemos soluciones completas para llevar tu negocio al siguiente nivel digital con{' '}
                    <span className="text-emerald-400 font-semibold">Las ultimas tecnologias</span>
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                  {servicios.map((servicio, index) => (
                    <ServiceCard key={servicio.id} servicio={servicio} index={index} />
                  ))}
                </div>
              </div>
            </section>

            {/* Proyectos Section */}
            <section id="proyectos" className="relative py-24 overflow-hidden">
              {/* Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-bl from-emerald-500/5 via-transparent to-emerald-600/5"></div>
              <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-600/5 rounded-full blur-3xl"></div>
              
              <div className="relative z-10 max-w-6xl mx-auto px-4 space-y-16">
                <div className="text-center space-y-8">
                  {/* Badge */}
                  <div className="inline-flex items-center px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium animate-fade-in">
                    <Code className="w-4 h-4 mr-2" />
                    Portfolio
                  </div>
                  
                  <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    Nuestro diferencial{' '}
                    <span className="text-emerald-400 font-semibold">son nuestros clientes</span>
                  </p>
                  
                  {/* Animated Icon */}
                  <div className="flex items-center justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
                    <div className="relative">
                      <Zap className="w-8 h-8 text-emerald-400 animate-pulse" />
                      <div className="absolute inset-0 w-8 h-8 bg-emerald-400/20 rounded-full animate-ping"></div>
                    </div>
                  </div>
                </div>

                {/* Carrousel horizontal */}
                <div className="relative animate-slide-up" style={{ animationDelay: '0.4s' }}>
                  {/* Gradient fade edges */}
                
                  <div className="flex-row overflow-x-auto scrollbar-hide gap-6 pb-1 snap-x snap-mandatory px-4 md:px-8 col-span-2">
                    {proyectos.map((proyecto, index) => (
                      <div key={proyecto.id} className="flex-none w-80 md:w-96 snap-start col-span-2">
                        <ProjectCard proyecto={proyecto} index={index} />
                      </div>
                    ))}
                  </div>
                  
                  {/* Indicador de scroll */}
                  <div className="flex justify-center mt-6 space-x-2">
                    {proyectos.map((_, index) => (
                      <div 
                        key={index}
                        className="w-2 h-2 rounded-full bg-emerald-500/30 hover:bg-emerald-500/60 transition-colors cursor-pointer"
                      ></div>
                    ))}
                  </div>
              
                </div>
                
                {/* Call to Action */}
                <div className="text-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
                  <p className="text-emerald-400 mb-6">¿Te gusta lo que ves? 🚀</p>
                  <Button
                    onClick={scrollToContact}
                    variant="outline"
                    size="lg"
                    className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-400 px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
                  >
                    <MessageSquare className="h-5 w-5 mr-2" />
                    Contactame
                  </Button>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeSection === "contacto" && (
          <section className="relative py-24 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 via-transparent to-emerald-600/5"></div>
            <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 max-w-6xl mx-auto px-4 space-y-16">
              <div className="text-center space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium animate-fade-in">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Contame tu proyecto
                </div>
                
                <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent animate-slide-up">
                  Contacto
                </h2>
                <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  ¿Te gusta lo distinto?{' '}
                  <span className="text-emerald-400 font-semibold">hacelo realidad</span>
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" style={{ animationDelay: '0.4s' }}>
                {/* Información de contacto */}
                <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/25 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  <CardHeader className="relative">
                    <CardTitle className="text-emerald-400 text-2xl font-bold flex items-center space-x-2">
                      <Mail className="h-6 w-6" />
                      <span>Información de Contacto</span>
                    </CardTitle>
                    <CardDescription className="text-gray-300 text-lg">
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 relative">
                  <div 
                    className="flex items-center space-x-4 p-4 rounded-lg bg-emerald-500/5 border border-emerald-500/20 cursor-pointer hover:bg-emerald-500/10 transition-all duration-300 hover:border-emerald-500/40 hover:scale-[1.02]"
                    onClick={() => window.open('mailto:inidesarrollos@gmail.com', '_blank')}
                  >
                    <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center hover:scale-[1.02]">
                      <Mail className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <p className="font-semibold text-emerald-400">Email</p>
                      <p className="text-gray-300">inidesarrollos@gmail.com</p>
                    </div>
                  </div>

                  <div 
                    className="flex items-center space-x-4 p-4 rounded-lg bg-emerald-500/5 border border-emerald-500/20 cursor-pointer hover:bg-emerald-500/10 transition-all duration-300 hover:border-emerald-500/40 hover:scale-[1.02]"
                    onClick={() => window.open(
                      'https://wa.me/+541154745584?text=Hola!%20me%20comunico%20desde%20tu%20pagina%20web%20me%20gustaría%20empezar%20un%20proyecto%20con%20vos','_blank')}>
                    <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center hover:scale-[1.02]">
                      <Phone className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <p className="font-semibold text-emerald-400">Teléfono</p>
                      <p className="text-gray-300">+5411 5474-5584</p>
                    </div>
                  </div>

                  <div 
                    className="flex items-center space-x-4 p-4 rounded-lg bg-emerald-500/5 border border-emerald-500/20 cursor-pointer hover:bg-emerald-500/10 transition-all duration-300 hover:border-emerald-500/40 hover:scale-[1.02]"
                  >
                    <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center hover:scale-[1.02]">
                      <MapPin className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <p className="font-semibold text-emerald-400">Ubicación</p>
                      <p className="text-gray-300">Buenos Aires, Argentina</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

                {/* Formulario de contacto mejorado */}
                <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/25 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  <CardHeader className="relative">
                    <CardTitle className="text-emerald-400 text-2xl font-bold flex items-center space-x-2">
                      <Send className="h-6 w-6" />
                      <span>¿Listo para el salto digital? 🚀</span>
                    </CardTitle>
                    <CardDescription className="text-gray-300 text-lg">
                      Completa el formulario y te nosotros te contactamos.
                    </CardDescription>
                  </CardHeader>
                <CardContent className="relative z-10">
                  {/* Mensaje de feedback */}
                  {submitMessage.message && (
                    <div className={`mb-6 p-4 rounded-lg border ${
                      submitMessage.type === 'success' 
                        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' 
                        : 'bg-red-500/10 border-red-500/30 text-red-400'
                    }`}>
                      {submitMessage.message}
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="nombre" className="block text-sm font-medium text-emerald-400">
                          Nombre *
                        </label>
                        <Input
                          id="nombre"
                          value={formData.nombre}
                          onChange={handleInputChange}
                          placeholder="Tu nombre"
                          required
                          disabled={isSubmitting}
                          className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-emerald-500 focus:ring-emerald-500 disabled:opacity-50"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-emerald-400">
                          Email *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="tu@email.com"
                          required
                          disabled={isSubmitting}
                          className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-emerald-500 focus:ring-emerald-500 disabled:opacity-50"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="asunto" className="block text-sm font-medium text-emerald-400">
                        Asunto *
                      </label>
                      <Input
                        id="asunto"
                        value={formData.asunto}
                        onChange={handleInputChange}
                        placeholder="Asunto del mensaje"
                        required
                        disabled={isSubmitting}
                        className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-emerald-500 focus:ring-emerald-500 disabled:opacity-50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="mensaje" className="block text-sm font-medium text-emerald-400">
                        Mensaje *
                      </label>
                      <Textarea
                        id="mensaje"
                        value={formData.mensaje}
                        onChange={handleInputChange}
                        placeholder="Escribe tu mensaje aquí..."
                        rows={5}
                        required
                        disabled={isSubmitting}
                        className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-emerald-500 focus:ring-emerald-500 resize-none disabled:opacity-50"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-black font-semibold py-3 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 mr-2 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Enviar Mensaje
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
                                </Card>
                </div>
              </div>
            </section>
          )}
      </main>

      {/* WhatsApp Plugin Premium */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/+541154745584?text=Hola!%20me%20comunico%20desde%20tu%20pagina%20web%20me%20gustaría%20empezar%20un%20proyecto%20con%20vos"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full shadow-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-110 animate-glow"
        >
          <svg
            className="w-8 h-8 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.106"/>
          </svg>
          
          {/* Tooltip */}
          <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            ¡Contactanos por WhatsApp!
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
          </div>
        </a>
      </div>
    </div>
  )
}
