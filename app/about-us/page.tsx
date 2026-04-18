import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const stats = [
  { value: "1927", label: "Año de Fundación" },
  { value: "4", label: "Estados de Presencia" },
  { value: "10+", label: "Marcas Representadas" },
  { value: "90+", label: "Años de Trayectoria" },
];

export default function AboutUsPage() {
  return (
    <main style={{ paddingTop: "120px" }}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroVideoWrap}>
          <video
            className={styles.heroVideo}
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            preload="metadata"
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1>Sobre Nosotros</h1>
            <p>Grupo Líder Automotriz en el Noroeste</p>
          </div>
        </div>
      </section>

      {/* History */}
      <section className={styles.history}>
        <div className={styles.container}>
          <div className={styles.historyGrid}>
            <div className={styles.historyContent}>
              <span className={styles.sectionLabel}>Nuestra Historia</span>
              <h2>Excelencia automotriz desde 1927</h2>
              <p>
                Con una trayectoria que inicia en el año 1927 en Navojoa, Sonora, 
                Grupo Bours Automotriz es una empresa mexicana que se ha consolidado 
                como un referente en el sector automotriz del noroeste del país.
              </p>
              <p>
                A lo largo de los años, hemos construido un modelo de negocio sólido, 
                sustentado en la excelencia y el compromiso con nuestros clientes.
              </p>
              <p>
                Actualmente, operamos una amplia red de concesionarias con presencia 
                estratégica en los estados de Sonora, Sinaloa, Baja California Sur y Jalisco, 
                representando las mejores marcas automotrices del mercado.
              </p>
              <Link href="/contacts" className={styles.btnPrimary}>Contactar</Link>
            </div>
            <div className={styles.videoContainer}>
              <video autoPlay loop muted playsInline poster="/images/nosotros-agencia.jpg">
                <source src="/videos/about-video.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.stats}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.statItem}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.values}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Nuestros Valores</span>
            <h2>Lo que nos define</h2>
          </div>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <h3>Compromiso</h3>
              <p>Dedicación total a la satisfacción de nuestros clientes en cada interacción.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Excelencia</h3>
              <p>Buscamos los más altos estándares de calidad en todos nuestros servicios.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Integridad</h3>
              <p>Actuamos con honestidad y transparencia en todas nuestras operaciones.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Innovación</h3>
              <p>Adoptamos las últimas tecnologías para mejorar la experiencia automotriz.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
