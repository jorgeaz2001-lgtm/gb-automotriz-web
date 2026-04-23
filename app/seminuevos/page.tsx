import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const locations = [
  {
    name: "Agencia Seminuevos Obregón",
    address: "Miguel Alemán y Morelos, No. 300, Col. Centro, 85000 Cd. Obregón, Son.",
    phone: "644 236 4338",
    whatsapp: "526442364338",
    image: "/images/seminuevos-app.png",
    hours: "Lunes a Viernes: 8:00 - 19:00, Sábados: 8:00 - 13:00",
    mapUrl: "https://maps.google.com/maps?q=Ford%20obregon&t=m&z=13&output=embed&iwloc=near"
  },
  {
    name: "Agencia Seminuevos Los Mochis",
    address: "Blvd. Centenario #1240 Sur, Fracc. Vista Hermosa, C.P. 81278, Los Mochis, Sin.",
    phone: "644 236 4338",
    whatsapp: "526442364338",
    image: "/images/nosotros-agencia.jpg",
    hours: "Lunes a Viernes: 8:00 - 19:00, Sábados: 8:00 - 13:00",
    mapUrl: "https://maps.google.com/maps?q=Ford%20mochis&t=m&z=14&output=embed&iwloc=near"
  },
  {
    name: "Agencia Seminuevos Culiacán",
    address: "Blvd. Pedro Infante #3540, Desarrollo Urbano Tres Ríos, C.P. 80110, Culiacán, Sin.",
    phone: "644 236 4338",
    whatsapp: "526442364338",
    image: "/images/servicios-hero.jpg",
    hours: "Lunes a Viernes: 8:00 - 19:00, Sábados: 8:00 - 13:00",
    mapUrl: "https://maps.google.com/maps?q=ford%20culiacan&t=m&z=14&output=embed&iwloc=near"
  },
];

export default function SeminuevosPage() {
  return (
    <main style={{ paddingTop: "120px" }}>
      {/* Hero */}
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
          <source src="/videos/seminuevos-hero.mp4" type="video/mp4" />
        </video>
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
                    <a
                      href={`https://wa.me/${location.whatsapp}?text=${encodeURIComponent(
                        `Hola, me interesa un seminuevo en ${location.name}. ¿Podrían ayudarme?`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.btnWhatsApp}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      WhatsApp
                    </a>
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
