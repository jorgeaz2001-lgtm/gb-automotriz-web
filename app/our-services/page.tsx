import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const services = [
  {
    brand: "Ford",
    title: "Ford Sucursales",
    description: "Concesionario oficial Ford con la más amplia gama de vehículos comerciales y de pasajeros. Servicio técnico especializado y refacciones originales.",
    image: "/images/brands/ford.png",
    locations: ["Culiacán", "Los Mochis", "Obregón"]
  },
  {
    brand: "Lincoln",
    title: "Lincoln Sinaloa",
    description: "Experimenta el lujo americano con Lincoln. Vehículos premium diseñados para ofrecer confort y elegancia en cada viaje.",
    image: "/images/brands/lincoln.png",
    locations: ["Culiacán", "Mazatlán"]
  },
  {
    brand: "Mazda",
    title: "Mazda Sucursales",
    description: "La pasión por conducir se siente en cada Mazda. Diseño Kodo, tecnología Skyactiv y una experiencia de manejo única.",
    image: "/images/brands/mazda.png",
    locations: ["Culiacán", "Obregón", "Los Mochis"]
  },
  {
    brand: "Peugeot",
    title: "Peugeot Sucursales",
    description: "El espíritu deportivo francés en cada vehículo. Diseño elegante, tecnología avanzada y eficiencia en consumo de combustible.",
    image: "/images/brands/peugeot.png",
    locations: ["Culiacán"]
  },
  {
    brand: "Ram",
    title: "Ram Sucursales",
    description: "Fuerza y capacidad para el trabajo pesado. Las pickups más potentes del mercado con tecnología de última generación.",
    image: "/images/brands/ram.png",
    locations: ["Culiacán", "Obregón", "Los Mochis"]
  },
  {
    brand: "Dodge",
    title: "Dodge Sucursales",
    description: "Potencia americana sin compromisos. Vehículos deportivos con diseño agresivo y motores de alto rendimiento.",
    image: "/images/brands/dodge.png",
    locations: ["Culiacán"]
  },
  {
    brand: "Jeep",
    title: "Jeep Sucursales",
    description: "Aventura sin límites. SUVs 4x4 legendarias diseñadas para conquistar cualquier terreno con estilo y confianza.",
    image: "/images/brands/jeep.png",
    locations: ["Culiacán", "Obregón"]
  },
  {
    brand: "Fiat",
    title: "Fiat Sucursales",
    description: "Estilo italiano en cada detalle. Diseño icónico, tecnología innovadora y la pasión por la conducción urbana.",
    image: "/images/brands/fiat.png",
    locations: ["Culiacán"]
  },
  {
    brand: "DFAC",
    title: "DFAC Sucursales",
    description: "Vehículos comerciales robustos y confiables para tu negocio. Camiones y unidades de carga con la mejor relación costo-beneficio.",
    image: "/images/brands/dfac.png",
    locations: ["Culiacán", "Hermosillo"]
  },
  {
    brand: "Jetour",
    title: "Jetour Sucursales",
    description: "Descubre la nueva era de movilidad con Jetour. SUVs modernas, equipadas y con garantía extendida.",
    image: "/images/brands/jetour.png",
    locations: ["Culiacán", "Obregón"]
  },
];

export default function ServicesPage() {
  return (
    <main style={{ paddingTop: "120px" }}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>Servicios del Grupo</h1>
          <p>con atención personalizada.</p>
        </div>
      </section>

      {/* Services List */}
      <section className={styles.services}>
        <div className={styles.container}>
          {services.map((service, index) => (
            <div key={service.brand} className={`${styles.serviceRow} ${index % 2 === 1 ? styles.reversed : ''}`}>
              <div className={styles.serviceImage}>
                <Image src={service.image} alt={service.title} width={400} height={200} />
              </div>
              <div className={styles.serviceContent}>
                <span className={styles.brandLabel}>{service.brand}</span>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <div className={styles.locations}>
                  <span>Sucursales:</span>
                  <div className={styles.locationTags}>
                    {service.locations.map(loc => (
                      <span key={loc} className={styles.locationTag}>{loc}</span>
                    ))}
                  </div>
                </div>
                <Link href="/contacts" className={styles.btnPrimary}>Contactar</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Excelencia automotriz en todos los aspectos</h2>
          <Link href="/contacts" className={styles.btnWhite}>Contáctanos</Link>
        </div>
      </section>
    </main>
  );
}
