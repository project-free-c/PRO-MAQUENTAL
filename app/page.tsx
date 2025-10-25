"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Waves,
  Leaf,
  Droplets,
  Users,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ChevronDown,
  CheckCircle,
  Sprout,
  TrendingUp,
  Shield,
  ChevronLeft,
  ChevronRight,
  Play,
  ImageIcon,
  Microscope,
  ChevronUp,
  Menu,
  X
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const Header = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);

  // --- Detecta sección activa (opcional, puedes quitar si ya lo tienes en otro lado) ---
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const navLinks = [
    { href: "#producto", label: "Producto" },
    { href: "#beneficios", label: "Beneficios" },
    { href: "#origen", label: "Origen" },
    { href: "#proceso", label: "Proceso" },
    { href: "#cientifico", label: "Respaldo Científico" },
    { href: "#galeria", label: "Galería" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* --- Logo --- */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <Image
              src="/galeria/logo.png"
              alt="Logo Maquental"
              width={60}
              height={60}
              className="mx-auto rounded-full"
            />
          </motion.div>

          {/* --- Menú de escritorio --- */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center gap-6"
          >
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`transition-colors ${
                  activeSection === href.replace("#", "")
                    ? "text-primary font-bold"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {label}
              </a>
            ))}
            <Button className="bg-primary hover:bg-ocean-deep text-primary-foreground">
              <a href="https://wa.me/56983105174" target="_blank">
                Solicitar Información
              </a>
            </Button>
          </motion.div>

          {/* --- Botón hamburguesa (solo móvil) --- */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* --- Menú móvil desplegable --- */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-4 flex flex-col items-center gap-4  border-t border-border py-4"
            >
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`transition-colors ${
                    activeSection === href.replace("#", "")
                      ? "text-primary font-bold"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {label}
                </a>
              ))}
              <Button className="bg-primary hover:bg-ocean-deep text-primary-foreground">
                <a
                  href="https://wa.me/56983105174"
                  target="_blank"
                  onClick={() => setMenuOpen(false)}
                >
                  Solicitar Información
                </a>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}


export default function MaquentalLanding() {
  const [currentOriginImage, setCurrentOriginImage] = useState(0)
  const [isScientificExpanded, setIsScientificExpanded] = useState(false)
  const [selectedItem, setSelectedItem] = useState<null | { src: string; type: string; alt?: string }>(null);

  const originImages = [
    { src: "/galeria/origen/origen.jpeg", alt: "Origen", type: "image" },
    { src: "/galeria/origen/origen_1.jpeg", alt: "Origen", type: "image" },
    { src: "/galeria/origen/origen_2.jpeg", alt: "Origen", type: "image" },
    { src: "/galeria/origen/origen_3.jpeg", alt: "Origen", type: "image" },
    { src: "/galeria/origen/origen_4.jpeg", alt: "Origen", type: "image" },
    { src: "/galeria/origen/origen_5.jpeg", alt: "Origen", type: "image" },
    { src: "/galeria/origen/origen_6.jpeg", alt: "Origen", type: "image" },
    { src: "/galeria/origen/origen_7.jpeg", alt: "Origen", type: "image" },
    { src: "/galeria/origen/origen_8.jpeg", alt: "Origen", type: "image" },
    { src: "/galeria/origen/origen_9.jpeg", alt: "Origen", type: "image" },
    // { src: "/mehuin-chile-coastal-village-fishing.jpg", alt: "Mehuín costa" },
    // { src: "/mehuin-coast-chile-beach.jpg", alt: "Playa de Mehuín" },
    // { src: "/ocean-waves-seaweed-underwater.jpg", alt: "Algas bajo el agua" },
  ]

  const galleryItems = [
    { src: "/galeria/galaria_1.jpeg", alt: "Algas marinas", type: "image" },
    { src: "/galeria/galeria_2.jpeg", alt: "Algas marinas", type: "image" },
    { src: "/galeria/galeria_3.jpeg", alt: "Algas marinas", type: "image" },
    { src: "/galeria/galeria_4.jpeg", alt: "Algas marinas", type: "image" },
    { src: "/galeria/galeria_5.jpeg", alt: "Algas marinas", type: "image" },
    { src: "/galeria/galeria_6.jpeg", alt: "Algas marinas", type: "image" },
    { src: "/galeria/galeria_7.jpeg", alt: "Algas marinas", type: "image" },
    { src: "/galeria/galeria_1_1.jpeg", alt: "Algas marinas", type: "image" },
    { src: "/galeria/galeria_8.jpeg", alt: "Algas marinas", type: "image" },
    { src: "/galeria/galeria_9.jpeg", alt: "Algas marinas", type: "image" },
    { src: "/galeria/galeria_10.jpeg", alt: "Algas marinas", type: "image" },
    { src: "/galeria/galeria_11.jpeg", alt: "Algas marinas", type: "image" },
    { src: "/galeria/galeria_12.jpeg", alt: "Algas marinas", type: "image" },
    { src: "/galeria/galeria_13.jpeg", alt: "Algas marinas", type: "image" },
    { src: "/galeria/galeria_14.jpeg", alt: "Algas marinas", type: "image" },
    { src: "/galeria/galeria_15.jpeg", alt: "Algas marinas", type: "image" },
    { src: "/galeria/galeria_16.jpeg", alt: "Algas marinas", type: "image" },
    { src: "/galeria/galeria_18.jpeg", alt: "Algas marinas", type: "image" },
    // { src: "/galeria/mehuin-coast-chile-beach.jpg", alt: "Costa de Mehuín", type: "image" },
    // { src: "/galeria/recoleccion.mp4", alt: "Proceso de recolección", type: "video" },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  }

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true },
  }

  const nextOriginImage = () => {
    setCurrentOriginImage((prev) => (prev + 1) % originImages.length)
  }

  const prevOriginImage = () => {
    setCurrentOriginImage((prev) => (prev - 1 + originImages.length) % originImages.length)
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header/>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-10 bg-gradient-to-br 
                from-[rgba(2,48,71,0.6)] 
                via-[rgba(0,128,128,0.4)] 
                to-[rgba(0,128,128,0.6)]" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/videos/hero.mp4" 
        />

        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-block mb-6 bg-sand rounded-full"
            >
              <Image
                src="/galeria/logo.png" 
                alt="Logo Maquental"
                width={200}   
                height={200}  
                className="mx-auto"
              />
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">AgroAlgas</h1>
            <p className="text-xl md:text-2xl mb-4 text-balance leading-relaxed font-bold">
              Bioestimulante Natural
            </p>
            <p className="text-lg md:text-xl mb-8 text-balance opacity-90 max-w-4xl mx-auto leading-relaxed font-bold">
              Potencia tu agricultura con el poder de las algas marinas de la costa de la Región de Los Ríos, Chile
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#origen">
                <Button size="lg" className="bg-white text-ocean hover:bg-sand text-lg px-8">
                  Conocer Más
                </Button>
              </a>
              <a href="#beneficios">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 text-lg px-8 bg-transparent"
                >
                  Ver Beneficios
                </Button>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-white" />
        </motion.div>
      </section>

      {/* Product Info Section */}
      <section id="producto" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">¿Qué es AgroAlgas?</h2>
            <p className="text-xl text-muted-foreground max-w-7xl mx-auto text-balance leading-relaxed">
              Un bioestimulante 100% natural elaborado a partir de algas marinas recolectadas artesanalmente en la costa
              de Mehuín
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div {...fadeInUp}>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/galeria/producto.jpg"
                  alt="Agroalgas producto"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Droplets className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">100% Natural</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Sin químicos sintéticos, solo el poder nutritivo de las algas marinas del Pacífico Sur
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Agricultura Sostenible</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Mejora la salud del suelo y fortalece tus cultivos de manera ecológica
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Origen Local</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Recolectado en Mehuín, Región de Los Ríos, apoyando a comunidades costeras
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Beneficios para tu Cultivo</h2>
            <p className="text-xl text-muted-foreground max-w-7xl mx-auto text-balance leading-relaxed">
              AgroAlgas aporta nutrientes esenciales y bioestimulantes naturales que transforman tu producción agrícola
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {[
              {
                icon: TrendingUp,
                title: "Mayor Rendimiento",
                description: "Incrementa la productividad de tus cultivos hasta un 30% con nutrición natural",
              },
              {
                icon: Shield,
                title: "Mayor Resistencia",
                description: "Fortalece las defensas naturales contra plagas y enfermedades",
              },
              {
                icon: Droplets,
                title: "Mejor Absorción",
                description: "Optimiza la captación de agua y nutrientes del suelo",
              },
              {
                icon: Leaf,
                title: "Crecimiento Vigoroso",
                description: "Estimula el desarrollo radicular y foliar de manera equilibrada",
              },
              {
                icon: CheckCircle,
                title: "Calidad Superior",
                description: "Mejora el sabor, color y valor nutricional de tus productos",
              },
              {
                icon: Sprout,
                title: "Suelo Saludable",
                description: "Enriquece la microbiología del suelo para cultivos más fuertes",
              },
            ].map((benefit, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <benefit.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Origin Section */}
      <section
        id="origen"
        className="py-20 bg-gradient-to-br from-ocean-deep to-ocean text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/galeria/origen/paralax.jpeg')] bg-cover bg-center opacity-20" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Nuestro Origen</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto text-balance leading-relaxed">
              Desde las costas de Mehuín, Región de Los Ríos
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div {...fadeInUp} className="relative">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={originImages[currentOriginImage].src || "/placeholder.svg"}
                  alt={originImages[currentOriginImage].alt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Carousel Controls */}
              <button
                onClick={prevOriginImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-all"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="w-6 h-6 text-ocean-deep" />
              </button>
              <button
                onClick={nextOriginImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-all"
                aria-label="Siguiente imagen"
              >
                <ChevronRight className="w-6 h-6 text-ocean-deep" />
              </button>

              {/* Carousel Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {originImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentOriginImage(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentOriginImage ? "bg-white w-8" : "bg-white/50"
                    }`}
                    aria-label={`Ir a imagen ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="space-y-6">
              <p className="text-lg leading-relaxed">
                Nuestro bioestimulante nace en campos ubicados cerca de la costa sur de Chile, donde el mar y la tierra se encuentran en equilibrio perfecto.
              </p>
              <p className="text-lg leading-relaxed">
                Gracias a la cercanía con el océano Pacífico, podemos acceder a algas marinas frescas, cultivadas y recolectadas de manera responsable en un entorno rico en nutrientes y minerales esenciales.
              </p>
              <p className="text-lg leading-relaxed">
                El agua utilizada en la elaboración de nuestro bioestimulante proviene de una vertiente nativa ubicada dentro del mismo terreno donde vivimos y trabajamos. Esta fuente natural, pura y libre de contaminación, fluye directamente desde las napas subterráneas de la zona costera, aportando minerales y equilibrio biológico al proceso. Gracias a este recurso propio y sostenible, mantenemos una producción auténtica, en armonía con el entorno y con un profundo respeto por la naturaleza que nos rodea
              </p>
              <div className="flex items-center gap-3 pt-4">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-semibold">Mehuín, Región de Los Ríos, Chile</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="proceso" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Nuestro Proceso</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              De la costa a tu campo, con cuidado artesanal en cada paso
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto"
          >
            {[
              {
                step: "01",
                title: "Recolección",
                description: "Cosecha artesanal de algas en las costas de Mehuín",
              },
              {
                step: "02",
                title: "Selección",
                description: "Clasificación cuidadosa de las mejores especies de algas",
              },
              {
                step: "03",
                title: "Procesamiento",
                description: "Tratamiento natural que preserva todos los nutrientes",
              },
              {
                step: "04",
                title: "Envasado",
                description: "Envase de vidrio reciclado de Valdivia (Reciclajes Pudú), listo para tu cultivo",
              },
            ].map((process, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center">
                <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{process.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="cientifico" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Respaldo Científico</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              La ciencia detrás del poder de las algas marinas
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left: Image */}
              <motion.div {...fadeInUp} className="md:sticky top-24">
                <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/galeria/analisis.png"
                    alt="Investigación científica de algas"
                    fill
                    className="object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/80 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <Microscope className="w-6 h-6" />
                        <span className="font-semibold">Laboratorio Análisis de Suelo y Forraje</span>
                      </div>
                      <p className="text-sm opacity-90">Estudios validados sobre bioestimulantes marinos por Cooprinsem</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right: Expandable Content */}
              <motion.div {...fadeInUp} className="space-y-6">
                <Card className="border-2 border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Microscope className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">Composición y Función de AgroAlgas</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          El líquido derivado de <strong>Macrocystis pyrifera</strong> (alga gigante) se ha utilizado para promover el crecimiento y la productividad de numerosos cultivos. Contiene fitohormonas (citoquininas, giberelinas, zeatina, fucoidan y ácido indol-3-acético) y nutrientes esenciales como fósforo, potasio, hierro, calcio, cobre, zinc, manganeso, sodio, taninos y vitaminas.
                        </p>
                      </div>
                    </div>

                    {/* Preview Content */}
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        <strong className="text-foreground">Problemas con fertilizantes químicos:</strong> El uso excesivo genera degradación del suelo, eutrofización y contaminación ambiental, además de elevados costos.
                      </p>

                      <motion.div
                        initial={false}
                        animate={{
                          height: isScientificExpanded ? "auto" : 0,
                          opacity: isScientificExpanded ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-4 pt-4 border-t border-border">

                          <p>
                            <strong className="text-foreground">Roles de las Citoquininas:</strong>
                          </p>
                          <ul className="list-disc list-inside space-y-2">
                            <li><strong>División y Diferenciación Celular:</strong> Promueven la división celular en meristemos y regulan el equilibrio entre división y diferenciación, esencial para hojas, raíces y flores.</li>
                            <li><strong>Citoquininas y Ácido Abscísico (ABA):</strong> Mantienen los estomas abiertos, favoreciendo transpiración e intercambio gaseoso, antagonizando los efectos del ABA durante sequía.</li>
                          </ul>

                          <p>
                            <strong className="text-foreground">Efectos fisiológicos:</strong>
                          </p>
                          <ul className="list-disc list-inside space-y-2">
                            <li>Controlan el crecimiento y elongación de tallos.</li>
                            <li>Estimulan la elongación del escapo floral en plantas de roseta.</li>
                            <li>Inducen floración en plantas de día largo en épocas no adecuadas.</li>
                            <li>Estimulan el crecimiento y desarrollo de frutos.</li>
                            <li>Rompen la dormición de semillas y movilizan reservas en cereales.</li>
                            <li>Inducen formación de flores masculinas en especies diclinas.</li>
                            <li>Reemplazan la necesidad de horas de frío (vernalización) para floración.</li>
                            <li>Aumentan la fructificación y la floración temprana (fructificación partenocárpica).</li>
                            <li>Suprimen estrés producido por algunos virus.</li>
                          </ul>

                        </div>
                      </motion.div>
                    </div>

                    {/* Expand/Collapse Button */}
                    <Button
                      onClick={() => setIsScientificExpanded(!isScientificExpanded)}
                      variant="outline"
                      className="w-full mt-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      {isScientificExpanded ? (
                        <>
                          <ChevronUp className="w-4 h-4 mr-2" />
                          Ver Menos
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-4 h-4 mr-2" />
                          Ver Más Información Científica
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>

                {/* Additional Scientific Highlights */}
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="p-4 text-center">
                      <p className="text-3xl font-bold text-primary mb-1">60+</p>
                      <p className="text-sm text-muted-foreground">Oligoelementos</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="p-4 text-center">
                      <p className="text-3xl font-bold text-primary mb-1">35%</p>
                      <p className="text-sm text-muted-foreground">Aumento en Rendimiento</p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Título */}
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Lo que Dicen Nuestros Clientes</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              Agricultores de toda la comunidad confían en AgroAlgas
            </p>
          </motion.div>

          {/* Tarjetas de testimonios */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {[
            {
              name: "María González",
              role: "Productora de Hortalizas",
              text: "Desde que empezamos a usar AgroAlgas en mi huerto de frutillas y lechugas, las plantas se ven más fuertes y saludables. Las cosechas rinden mejor.",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
            },
            {
              name: "Pedro Ramírez",
              role: "Agricultor de Papas",
              text: "AgroAlgas ha sido un gran aliado en mis cultivos. Mis papas crecen más uniformes y la tierra se siente más fértil. Es un producto natural.",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pedro",
            },
            {
              name: "Carmen Silva",
              role: "Huerto Familiar",
              text: "Aplicar AgroAlgas en mis huertos ha hecho que las verduras y hortalizas crezcan más sanas y sabrosas. Mis vecinos ya lo usan también y los resultados se notan día a día.",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carmen",
            },
            ].map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow flex flex-col">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    {/* Avatar */}
                    <div className="relative w-16 h-16 rounded-full overflow-hidden bg-muted mb-4">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Estrellas */}
                    <div className="flex gap-1 mb-4 justify-center">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">
                          ★
                        </span>
                      ))}
                    </div>

                    {/* Testimonio */}
                    <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.text}"</p>

                    {/* Nombre y rol */}
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* Partners Section */}
      <section className="py-20 bg-muted" id="aliados">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Nuestros Aliados</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              Trabajamos junto a organizaciones que apoyan el desarrollo rural y sostenible
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {/* Tarjeta 1 - MuCech */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/5">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/galeria/mucech.png" 
                      alt="MUCECH"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <CardContent className="p-6">                  
                  <h3 className="text-2xl font-bold text-center mb-2">MUCECH</h3>
                  <p className="text-center text-muted-foreground mb-4 leading-relaxed">
                    La Mesa Campesina de Chile es una organización que representa a pequeños agricultores y promueve la
                    agricultura familiar sostenible en todo el país.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Tarjeta 2 - Expo Mundo Rural */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-secondary/20 to-secondary/5">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/galeria/expomundorural.png"
                      alt="Fedafruc"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <CardContent className="p-6">                  
                  <h3 className="text-2xl font-bold text-center mb-2">Expo Mundo Rural</h3>
                  <p className="text-center text-muted-foreground mb-4 leading-relaxed">
                    La feria más importante de agricultura sostenible en Chile, donde se reúnen productores, innovadores
                    y consumidores comprometidos con el campo.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Tarjeta 3 - Fedafruc */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-accent/20 to-accent/5">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/galeria/fedafruc.png" 
                      alt="Fedafruc"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <CardContent className="p-6">                  
                  <h3 className="text-2xl font-bold text-center mb-2">Fedafruc</h3>
                  <p className="text-center text-muted-foreground mb-4 leading-relaxed">
                    Federación de productores de frutas de la Región de Los Ríos que fomenta la innovación y sostenibilidad en los huertos familiares y comerciales.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>


      <section id="galeria" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Galería</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              Conoce más sobre nuestro proceso y productos
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                {item.type === "image" ? (
                  <Image
                    src={item.src}
                    alt={item.alt || ""}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <video
                      src={item.src}
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Lightbox */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            {selectedItem.type === "image" ? (
              <Image
                src={selectedItem.src}
                alt={selectedItem.alt || ""}
                width={1200}
                height={800}
                className="object-contain max-h-full max-w-full"
              />
            ) : (
              <video
                src={selectedItem.src}
                autoPlay
                muted
                loop
                controls
                className="max-h-full max-w-full"
              />
            )}
          </div>
        )}
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Contáctanos</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              Estamos aquí para ayudarte a mejorar tu producción agrícola
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Teléfono</h3>
                  <p className="text-muted-foreground">+56 9 8310 5174</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">Nival2jose@gmail.com</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Ubicación</h3>
                  <p className="text-muted-foreground">Región de Los Ríos, Chile</p>
                </CardContent>
              </Card>
            </div>

            <motion.div {...fadeInUp} className="mb-12">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-[400px] bg-muted">
                    {/* Placeholder for map - Replace the src with actual Google Maps embed URL */}
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48624.59446538!2d-73.41!3d-39.43!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9615f1b0c0c0c0c1%3A0x0!2sMehu%C3%ADn%2C%20Los%20R%C3%ADos%2C%20Chile!5e0!3m2!1ses!2scl!4v1234567890"
                      width="100%"
                      height="400"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Ubicación de Maquental"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <Card className="bg-gradient-to-br from-ocean to-teal text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">¿Listo para potenciar tu cultivo?</h3>
                <p className="text-lg mb-6 opacity-90 leading-relaxed">
                  Solicita información sobre Agroalgas y descubre cómo podemos ayudarte
                </p>
                <Button size="lg" className="bg-white text-ocean hover:bg-sand text-lg px-8">
                  <a href="https://wa.me/56983105174" target="_blank">
                    Solicitar Información
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ocean-deep text-white py-12 text-center md:text-left">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-white m-auto rounded-full">
                  <Image
                    src="/galeria/logo.png" 
                    alt="Logo Maquental"
                    width={100}   
                    height={100}  
                    className="mx-auto"
                  />
                </div>
                {/* <Waves className="w-8 h-8" /> */}
                {/* <span className="text-2xl font-bold">Maquental</span> */}
              </div>
              <p className="opacity-80 leading-relaxed">
                Bioestimulante naturales desde las costas de Mehuín para una agricultura sostenible.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Producto</h4>
              <ul className="space-y-2 opacity-80">
                <li>
                  <a href="#producto" className="hover:opacity-100 transition-opacity">
                    Agroalgas
                  </a>
                </li>
                <li>
                  <a href="#beneficios" className="hover:opacity-100 transition-opacity">
                    Beneficios
                  </a>
                </li>
                <li>
                  <a href="#proceso" className="hover:opacity-100 transition-opacity">
                    Proceso
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 opacity-80">
                <li>
                  <a href="#origen" className="hover:opacity-100 transition-opacity">
                    Nuestro Origen
                  </a>
                </li>
                <li>
                  <a href="#galeria" className="hover:opacity-100 transition-opacity">
                    Galería
                  </a>
                </li>
                <li>
                  <a href="#aliados" className="hover:opacity-100 transition-opacity">
                    Aliados
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 opacity-80">
                <li>contacto@maquental.cl</li>
                <li>+56 9 8310 5174</li>
                <li>Región de Los Ríos, Chile</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center opacity-80">
            <p>&copy; 2025 Maquental. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/56983105174"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </motion.a>
    </div>
  )
}
