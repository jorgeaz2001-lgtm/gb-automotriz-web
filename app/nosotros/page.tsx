"use client";

import Image from "next/image";
import styles from "./page.module.css";

const valores = [
  {
    title: "Transparencia",
    desc: "Precios claros y sin sorpresas en todo momento.",
  },
  {
    title: "Compromiso",
    desc: "Nos preocupamos por encontrar el auto perfecto para ti.",
  },
  {
    title: "Calidad",
    desc: "Vehículos certificados y revisados exhaustivamente.",
  },
  {
    title: "Servicio",
    desc: "Atención personalizada antes, durante y después de tu compra.",
  },
];

export default function NosotrosPage() {
  return (
    <main className={styles.main}>
      {/* Hero with Video */}
      <section className={styles.hero}>
        <video
          className={styles.heroVideo}
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          preload="metadata"
        >
          <source src="/videos/nosotros-hero.mp4" type="video/mp4" />
        </video>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.heroEyebrow}>Nosotros</span>
          <h1>Conoce GB Automotriz</h1>
          <p>Más de 90 años de experiencia brindando el mejor servicio automotriz del noroeste.</p>
        </div>
      </section>

      {/* Historia */}
      <section className={styles.historiaSection}>
        <div className={styles.container}>
          <div className={styles.historiaGrid}>
            <div className={styles.historiaText}>
              <span className={styles.historiaLabel}>Nuestra Historia</span>
              <h2>Más de 90 años de trayectoria automotriz</h2>
              <p>
                Desde 1927, nos hemos consolidado como el grupo líder automotriz del noroeste de México.
                Con más de 90 años de experiencia, representamos las marcas más prestigiosas del 
                mercado con el compromiso de brindar un servicio excepcional y una experiencia de compra única.
              </p>
              <p>
                Nuestro equipo de profesionales está capacitado para asesorarte en cada paso del proceso, 
                desde la elección de tu vehículo hasta el financiamiento y servicio post-venta.
              </p>
            </div>
            <div className={styles.historiaVideoFrame}>
              <video
                className={styles.historiaVideo}
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                preload="metadata"
              >
                <source src="/videos/nosotros-historia.mp4" type="video/mp4" />
              </video>
              <div className={styles.historiaVideoOverlay} />
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className={styles.valoresSection}>
        <div className={styles.container}>
          <div className={styles.valoresHeader}>
            <span className={styles.valoresLabel}>Valores</span>
            <h2>Lo que nos define</h2>
          </div>
          
          <div className={styles.valoresGrid}>
            {valores.map((valor, index) => (
              <div key={index} className={styles.valorCard}>
                <h3>{valor.title}</h3>
                <p>{valor.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
