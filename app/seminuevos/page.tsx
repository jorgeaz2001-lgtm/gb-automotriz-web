import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const locations = [
  {
    name: "Agencia Seminuevos Obregón",
    address: "Calle Jalisco #151 esq. con Chiapas, Fracc. San Benito, C.P. 83179, Cd. Obregón, Son.",
    phone: "644 236 4338",
    image: "/images/seminuevos-app.png",
    hours: "Lunes a Viernes: 9:00 - 19:00, Sábados: 9:00 - 14:00",
    mapUrl: "https://maps.google.com/maps?q=Ford%20obregon&t=m&z=13&output=embed&iwloc=near"
  },
  {
    name: "Agencia Seminuevos Los Mochis",
    address: "Blvd. Centenario #1240 Sur, Fracc. Vista Hermosa, C.P. 81278, Los Mochis, Sin.",
    phone: "668 818 1611",
    image: "/images/nosotros-agencia.jpg",
    hours: "Lunes a Viernes: 9:00 - 19:00, Sábados: 9:00 - 14:00",
    mapUrl: "https://maps.google.com/maps?q=Ford%20mochis&t=m&z=14&output=embed&iwloc=near"
  },
  {
    name: "Agencia Seminuevos Culiacán",
    address: "Blvd. Pedro Infante #3540, Desarrollo Urbano Tres Ríos, C.P. 80110, Culiacán, Sin.",
    phone: "667 715 1010",
    image: "/images/servicios-hero.jpg",
    hours: "Lunes a Viernes: 9:00 - 19:00, Sábados: 9:00 - 14:00",
    mapUrl: "https://maps.google.com/maps?q=ford%20culiacan&t=m&z=14&output=embed&iwloc=near"
  },
];

export default function SeminuevosPage() {
  return (
    <main style={{ paddingTop: "120px" }}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroVisual}>
          <Image src="/images/seminuevos-app.png" alt="Seminuevos GB App" fill className={styles.heroImg} priority />
        </div>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1>Seminuevos GB</h1>
            <p>Encuentra tu vehículo seminuevo con garantía y certificación</p>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className={styles.locations}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Nuestras Agencias</span>
            <h2>Visítanos en cualquiera de nuestras ubicaciones</h2>
          </div>
          
          {locations.map((location, index) => (
            <div key={location.name} className={styles.locationCard}>
              <div className={`${styles.locationGrid} ${index % 2 === 1 ? styles.reversed : ''}`}>
                {/* Image */}
                <div className={styles.locationImage}>
                  <Image src={location.image} alt={location.name} width={600} height={400} />
                </div>
                
                {/* Info */}
                <div className={styles.locationInfo}>
                  <h3>{location.name}</h3>
                  <p className={styles.address}>{location.address}</p>
                  <p className={styles.hours}>{location.hours}</p>
                  <a href={`tel:${location.phone.replace(/\s/g, '')}`} className={styles.phone}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    {location.phone}
                  </a>
                  <div className={styles.buttons}>
                    <a href={`tel:${location.phone.replace(/\s/g, '')}`} className={styles.btnPrimary}>
                      Llamar
                    </a>
                    <Link href="/contacts" className={styles.btnSecondary}>
                      Cotizar
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className={styles.mapContainer}>
                <iframe
                  src={location.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={location.name}
                  aria-label={location.name}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>¿Buscas un vehículo seminuevo?</h2>
          <p>Tenemos más de 100 unidades disponibles en todo el noroeste</p>
          <Link href="/contacts" className={styles.btnWhite}>Ver catálogo completo</Link>
        </div>
      </section>
    </main>
  );
}
