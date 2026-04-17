"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { brandGroups, generateWhatsAppLink } from "@/lib/dealerships";
import styles from "./page.module.css";

// Mapeo de marcas individuales a sus grupos para mostrar en la página de servicio
const serviceBrands = [
  {
    name: "Ford",
    groupName: "ford",
    image: "/images/brands/ford.png",
    description: "Concesionario oficial Ford con la más amplia gama de vehículos comerciales y de pasajeros. Servicio técnico especializado y refacciones originales.",
  },
  {
    name: "Lincoln",
    groupName: "lincoln",
    image: "/images/brands/lincoln.png",
    description: "Experimenta el lujo americano con Lincoln. Vehículos premium diseñados para ofrecer confort y elegancia en cada viaje.",
  },
  {
    name: "Mazda",
    groupName: "mazda",
    image: "/images/brands/mazda.png",
    description: "La pasión por conducir se siente en cada Mazda. Diseño Kodo, tecnología Skyactiv y una experiencia de manejo única.",
  },
  {
    name: "Peugeot",
    groupName: "stellantis",
    image: "/images/brands/peugeot.png",
    description: "El espíritu deportivo francés en cada vehículo. Diseño elegante, tecnología avanzada y eficiencia en consumo de combustible.",
  },
  {
    name: "Ram",
    groupName: "stellantis",
    image: "/images/brands/ram.png",
    description: "Fuerza y capacidad para el trabajo pesado. Las pickups más potentes del mercado con tecnología de última generación.",
  },
  {
    name: "Dodge",
    groupName: "stellantis",
    image: "/images/brands/dodge.png",
    description: "Potencia americana sin compromisos. Vehículos deportivos con diseño agresivo y motores de alto rendimiento.",
  },
  {
    name: "Jeep",
    groupName: "stellantis",
    image: "/images/brands/jeep.png",
    description: "Aventura sin límites. SUVs 4x4 legendarias diseñadas para conquistar cualquier terreno con estilo y confianza.",
  },
  {
    name: "Fiat",
    groupName: "stellantis",
    image: "/images/brands/fiat.png",
    description: "Estilo italiano en cada detalle. Diseño icónico, tecnología innovadora y la pasión por la conducción urbana.",
  },
  {
    name: "DFAC",
    groupName: "dongfeng",
    image: "/images/brands/dfac.png",
    description: "Vehículos comerciales robustos y confiables para tu negocio. Camiones y unidades de carga con la mejor relación costo-beneficio.",
  },
  {
    name: "Jetour",
    groupName: "jetour",
    image: "/images/brands/jetour.png",
    description: "Descubre la nueva era de movilidad con Jetour. SUVs modernas, equipadas y con garantía extendida.",
  },
];

export default function ServicesPage() {
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
          <source src="/videos/servicio-hero.mp4" type="video/mp4" />
        </video>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <h1>Servicios del Grupo</h1>
          <p>Con atención personalizada en cada sucursal.</p>
        </div>
      </section>

      {/* Brands with Locations & WhatsApp */}
      <section className={styles.services}>
        <div className={styles.container}>
          {serviceBrands.map((serviceBrand, index) => {
            const group = brandGroups.find((g) => g.name === serviceBrand.groupName);
            if (!group) return null;

            return (
              <motion.div
                key={serviceBrand.name}
                className={`${styles.serviceRow} ${index % 2 === 1 ? styles.reversed : ""}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <div className={styles.serviceImage}>
                  <Image src={serviceBrand.image} alt={serviceBrand.name} width={400} height={200} />
                </div>
                <div className={styles.serviceContent}>
                  <span className={styles.brandLabel}>{serviceBrand.name}</span>
                  <h2>{serviceBrand.name} Servicio</h2>
                  <p>{serviceBrand.description}</p>

                  <div className={styles.sucursales}>
                    <span className={styles.sucursalesLabel}>Sucursales</span>
                    <div className={styles.sucursalesList}>
                      {group.dealerships.map((dealership) => (
                        <div key={dealership.city} className={styles.sucursalCard}>
                          <div className={styles.sucursalInfo}>
                            <strong>{dealership.city}</strong>
                            <span>{dealership.phone}</span>
                          </div>
                          <a
                            href={generateWhatsAppLink(
                              dealership.whatsapp,
                              serviceBrand.name,
                              dealership.city
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.whatsappBtn}
                            aria-label={`WhatsApp ${serviceBrand.name} ${dealership.city}`}
                          >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                            WhatsApp
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Excelencia automotriz en todos los aspectos</h2>
          <p>Selecciona tu marca y sucursal para contactar directamente por WhatsApp.</p>
        </div>
      </section>
    </main>
  );
}
