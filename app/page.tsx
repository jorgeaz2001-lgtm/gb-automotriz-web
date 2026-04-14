"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import styles from "./page.module.css";

const heroSlides = [
  { image: "/images/hero-mazda2.jpg", alt: "Mazda 2" },
  { image: "/images/hero-territory.jpg", alt: "Ford Territory" },
  { image: "/images/hero-ram700.jpg", alt: "Ram 700" },
];

const categories = [
  { name: "SUVs", image: "/images/auto4.jpg", count: 24 },
  { name: "Sedanes", image: "/images/auto1.jpg", count: 18 },
  { name: "Pickups", image: "/images/auto3.jpg", count: 12 },
  { name: "Eléctricos", image: "/images/auto5.jpg", count: 8 },
];

const featuredVehicles = [
  { 
    id: 1, 
    brand: "Mazda", 
    model: "Mazda 2 Sedán", 
    year: 2025, 
    price: "$389,900", 
    image: "/images/auto1.jpg",
    location: "Culiacán",
    tag: "Nuevo"
  },
  { 
    id: 2, 
    brand: "Ram", 
    model: "Ram 700 Regular", 
    year: 2025, 
    price: "$329,900", 
    image: "/images/auto3.jpg",
    location: "Los Mochis",
    tag: "Nuevo"
  },
  { 
    id: 3, 
    brand: "Peugeot", 
    model: "Peugeot 3008", 
    year: 2025, 
    price: "$529,900", 
    image: "/images/auto4.jpg",
    location: "Culiacán",
    tag: "Nuevo"
  },
  { 
    id: 4, 
    brand: "Fiat", 
    model: "Fiat Pulse", 
    year: 2025, 
    price: "$349,900", 
    image: "/images/auto5.jpg",
    location: "Obregón",
    tag: "Nuevo"
  },
  { 
    id: 5, 
    brand: "Lincoln", 
    model: "Lincoln Navigator", 
    year: 2025, 
    price: "$1,899,000", 
    image: "/images/auto6.png",
    location: "Culiacán",
    tag: "Nuevo"
  },
  { 
    id: 6, 
    brand: "Dodge", 
    model: "Dodge Attitude", 
    year: 2025, 
    price: "$299,900", 
    image: "/images/hero.jpg",
    location: "Los Mochis",
    tag: "Nuevo"
  },
];

const brands = [
  { name: "Ford", logo: "/images/brands/ford.png" },
  { name: "Lincoln", logo: "/images/brands/lincoln.png" },
  { name: "Mazda", logo: "/images/brands/mazda.png" },
  { name: "Peugeot", logo: "/images/brands/peugeot.png" },
  { name: "Ram", logo: "/images/brands/ram.png" },
  { name: "Dodge", logo: "/images/brands/dodge.png" },
  { name: "Jeep", logo: "/images/brands/jeep.png" },
  { name: "Fiat", logo: "/images/brands/fiat.png" },
];

const testimonials = [
  {
    text: "Todo se sintió tranquilo y profesional. El equipo fue servicial sin ser agresivo, lo que facilitó la decisión.",
    author: "Carlos Ramírez",
    role: "Cliente Verificado"
  },
  {
    text: "Aprecié lo transparente que fue el proceso. Precios, papeleo y tiempos fueron explicados claramente.",
    author: "María González",
    role: "Cliente Verificado"
  },
  {
    text: "La experiencia fue organizada y confiable. Las preguntas fueron respondidas rápidamente.",
    author: "Juan López",
    role: "Cliente Verificado"
  },
];

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main>
      {/* Hero Section with Moving Background */}
      <section className={styles.hero}>
        {/* Animated Background Slider */}
        <div className={styles.heroSlider}>
          {heroSlides.map((slide, index) => (
            <motion.div
              key={index}
              className={styles.heroSlide}
              initial={false}
              animate={{
                opacity: index === currentSlide ? 1 : 0,
                scale: index === currentSlide ? 1 : 1.1,
              }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={styles.heroSlideInner}>
                <Image 
                  src={slide.image} 
                  alt={slide.alt}
                  fill 
                  className={styles.heroImage}
                  priority={index === 0}
                />
                {/* Motion blur overlay effect */}
                <div className={styles.motionOverlay} />
              </div>
            </motion.div>
          ))}
          {/* Gradient overlay */}
          <div className={styles.heroOverlay} />
        </div>
        
        {/* Floating particles effect */}
        <div className={styles.particles}>
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className={styles.particle}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: Math.random() * 4 + 2,
                height: Math.random() * 4 + 2,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 4,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        <div className={styles.heroContent}>
          <div className={styles.container}>
            <motion.h1 
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              El auto de tus sueños<br />
              <span>te espera</span>
            </motion.h1>
            
            <motion.p 
              className={styles.heroSubtitle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              Grupo Líder Automotriz en el Noroeste. Más de 50 años de experiencia.
            </motion.p>
            
            <motion.div 
              className={styles.heroButtons}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href="/seminuevos" className={styles.btnPrimary}>
                Explorar Vehículos
              </Link>
              <Link href="/contacts" className={styles.btnSecondary}>
                Buscar Vehículos
              </Link>
            </motion.div>

            {/* Slide indicators */}
            <motion.div 
              className={styles.slideIndicators}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.indicator} ${index === currentSlide ? styles.active : ''}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div 
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className={styles.scrollLine} />
        </motion.div>
      </section>

      {/* Categories Section */}
      <section className={styles.categoriesSection}>
        <div className={styles.container}>
          <motion.div 
            className={styles.sectionHeaderCenter}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.sectionLabel}>Categorías de Vehículos</span>
            <h2 className={styles.sectionTitle}>Explora por Tipo de Vehículo</h2>
          </motion.div>
          
          <motion.div 
            className={styles.categoriesGrid}
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {categories.map((cat, index) => (
              <motion.div
                key={cat.name}
                variants={fadeInUp}
              >
                <Link href="/seminuevos" className={styles.categoryCard}>
                  <div className={styles.categoryImage}>
                    <Image src={cat.image} alt={cat.name} fill />
                  </div>
                  <div className={styles.categoryOverlay} />
                  <div className={styles.categoryInfo}>
                    <h3>{cat.name}</h3>
                    <span>{cat.count} disponibles</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className={styles.categoriesFooter}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/seminuevos" className={styles.btnOutline}>
              Ver Todos los Vehículos
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className={styles.featuredSection}>
        <div className={styles.container}>
          <motion.div 
            className={styles.sectionHeaderRow}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <span className={styles.sectionLabel}>Algunas de nuestras unidades</span>
              <h2 className={styles.sectionTitle}>Los vehículos favoritos<br />de nuestros clientes.</h2>
            </div>
            <Link href="/seminuevos" className={styles.linkArrow}>
              Ver todos →
            </Link>
          </motion.div>
          
          <motion.div 
            className={styles.featuredGrid}
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {featuredVehicles.map((vehicle) => (
              <motion.div 
                key={vehicle.id} 
                className={styles.featuredCard}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className={styles.featuredImage}>
                  <Image 
                    src={vehicle.image} 
                    alt={`${vehicle.brand} ${vehicle.model}`} 
                    fill
                  />
                  <span className={styles.featuredTag}>{vehicle.tag}</span>
                </div>
                <div className={styles.featuredInfo}>
                  <div className={styles.featuredMeta}>
                    <span>{vehicle.brand}</span>
                    <span>•</span>
                    <span>{vehicle.year}</span>
                  </div>
                  <h3>{vehicle.model}</h3>
                  <p className={styles.featuredLocation}>{vehicle.location}</p>
                  <div className={styles.featuredFooter}>
                    <span className={styles.featuredPrice}>{vehicle.price}</span>
                    <Link href="/contacts">Ver detalles →</Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trade-in Section */}
      <section className={styles.splitSection}>
        <div className={styles.splitGrid}>
          <motion.div 
            className={styles.splitLeft}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image 
              src="/images/nosotros-agencia.jpg" 
              alt="Auto a cuenta" 
              fill
            />
          </motion.div>
          <motion.div 
            className={styles.splitRight}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.splitContent}>
              <h3>Auto a cuenta y Opciones de Financiamiento</h3>
              <p>
                Usa tu vehículo actual como parte de pago y agiliza el proceso de estrenar. 
                Aceptamos autos con hasta 5 años de antigüedad.
              </p>
              <Link href="/contacts" className={styles.btnPrimary}>
                Explorar Más
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Financing Section */}
      <section className={styles.financingSection}>
        <div className={styles.container}>
          <div className={styles.financingGrid}>
            <motion.div 
              className={styles.financingContent}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <span className={styles.sectionLabel}>Financiamiento</span>
              <h2>Opciones de Financiamiento</h2>
              <p>
                Explora soluciones de financiamiento flexibles diseñadas 
                para adaptarse a tu presupuesto y necesidades. Hasta 60 meses de plazo.
              </p>
              <Link href="/contacts" className={styles.btnOutlineDark}>
                Más Información
              </Link>
            </motion.div>
            <motion.div 
              className={styles.financingImage}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image 
                src="/images/auto6.png" 
                alt="Financiamiento" 
                fill
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className={styles.brandsSection}>
        <div className={styles.container}>
          <motion.div 
            className={styles.sectionHeaderCenter}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.sectionLabel}>Marcas</span>
            <h2 className={styles.sectionTitle}>Nuestros Socios de Confianza</h2>
          </motion.div>
          
          <motion.div 
            className={styles.brandsGrid}
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {brands.map((brand) => (
              <motion.div 
                key={brand.name} 
                className={styles.brandItem}
                variants={fadeInUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <Image 
                  src={brand.logo} 
                  alt={brand.name} 
                  width={140} 
                  height={60}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <motion.div 
              className={styles.aboutImage}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <Image 
                src="/images/nosotros-volante.jpg" 
                alt="Conoce GB Automotriz" 
                fill
              />
            </motion.div>
            <motion.div 
              className={styles.aboutContent}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className={styles.sectionLabel}>Nosotros</span>
              <h2>Conoce GB Automotriz</h2>
              <p>
                Desde 1927 en Navojoa, Sonora, nos hemos consolidado como el grupo 
                líder automotriz del noroeste de México. Representamos las mejores 
                marcas con excelencia y compromiso.
              </p>
              <div className={styles.aboutStats}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <span>4</span>
                  <p>Estados</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <span>10+</span>
                  <p>Marcas</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <span>50+</span>
                  <p>Años de experiencia</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonialsSection}>
        <div className={styles.container}>
          <motion.div 
            className={styles.sectionHeaderCenter}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.sectionLabel}>Testimonios</span>
            <h2 className={styles.sectionTitle}>Opiniones de Clientes</h2>
          </motion.div>
          
          <motion.div 
            className={styles.testimonialsGrid}
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {testimonials.map((item, index) => (
              <motion.div 
                key={index} 
                className={styles.testimonialCard}
                variants={fadeInUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <p className={styles.testimonialText}>"{item.text}"</p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialAvatar}>
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <p className={styles.testimonialName}>{item.author}</p>
                    <p className={styles.testimonialRole}>{item.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <motion.div 
            className={styles.ctaContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2>¿Listo para encontrar tu próximo vehículo?</h2>
            <p>Visítanos en cualquiera de nuestras agencias o contáctanos.</p>
            <motion.div 
              className={styles.ctaButtons}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link href="/seminuevos" className={styles.btnWhite}>
                Explorar Vehículos
              </Link>
              <Link href="/contacts" className={styles.btnOutlineWhite}>
                Contáctanos
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
