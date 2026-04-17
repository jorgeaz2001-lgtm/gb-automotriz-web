"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, MessageCircle, Phone } from "lucide-react";
import styles from "./page.module.css";

interface Dealership {
  city: string;
  phone: string;
  whatsapp: string;
}

interface BrandData {
  name: string;
  displayName: string;
  heroImage: string;
  description: string;
  tagline: string;
  dealerships: Dealership[];
  subBrands?: string[];
}

const brandsData: Record<string, BrandData> = {
  ford: {
    name: "ford",
    displayName: "Ford",
    heroImage: "/images/brands-pages/ford.jpg",
    description:
      "Ford es sinónimo de innovación, rendimiento y confiabilidad. Desde pickups icónicas hasta SUVs familiares, cada vehículo Ford está diseñado para superar expectativas. En GB Automotriz contamos con la línea completa Ford en el noroeste de México.",
    tagline: "Construido para ser el mejor.",
    dealerships: [
      { city: "Culiacán", phone: "667-503-2395", whatsapp: "526675032395" },
      { city: "Ciudad Obregón", phone: "644-222-2834", whatsapp: "526442222834" },
      { city: "Los Mochis", phone: "668-253-3839", whatsapp: "526682533839" },
    ],
  },
  lincoln: {
    name: "lincoln",
    displayName: "Lincoln",
    heroImage: "/images/brands-pages/lincoln.jpg",
    description:
      "Lincoln representa el pináculo del lujo americano. Cada detalle está diseñado para ofrecer una experiencia de conducción inigualable, combinando elegancia, tecnología de vanguardia y confort supremo.",
    tagline: "El poder del lujo.",
    dealerships: [
      { city: "Culiacán", phone: "667-303-8502", whatsapp: "526673038502" },
    ],
  },
  mazda: {
    name: "mazda",
    displayName: "Mazda",
    heroImage: "/images/brands-pages/mazda.jpg",
    description:
      "Mazda crea vehículos que despiertan las emociones. Con el enfoque Jinba Ittai —caballo y jinete como uno solo— cada Mazda ofrece una conexión única entre conductor y máquina, sin sacrificar eficiencia ni seguridad.",
    tagline: "Conducir importa.",
    dealerships: [
      { city: "Culiacán", phone: "667-467-2828", whatsapp: "526674672828" },
      { city: "Mazatlán", phone: "669-918-4897", whatsapp: "526699184897" },
      { city: "Los Cabos", phone: "624-184-0641", whatsapp: "526241840641" },
    ],
  },
  dongfeng: {
    name: "dongfeng",
    displayName: "Dongfeng",
    heroImage: "/images/brands-pages/dongfeng.png",
    description:
      "Dongfeng combina ingeniería china de clase mundial con precios competitivos. Sus vehículos comerciales y de pasajeros ofrecen durabilidad, tecnología moderna y excelente relación calidad-precio para el mercado mexicano.",
    tagline: "Fuerza y confianza.",
    dealerships: [
      { city: "Culiacán", phone: "667-303-8702", whatsapp: "526673038702" },
      { city: "Ciudad Obregón", phone: "644-222-0969", whatsapp: "526442220969" },
      { city: "Hermosillo", phone: "662-123-3933", whatsapp: "526621233933" },
      { city: "Guadalajara", phone: "332-256-7752", whatsapp: "523322567752" },
    ],
  },
  jetour: {
    name: "jetour",
    displayName: "Jetour",
    heroImage: "/images/brands-pages/jetour.jpg",
    description:
      "Jetour redefine la movilidad con SUVs modernas, espaciosas y tecnológicamente avanzadas. Diseñadas para familias que buscan confort, seguridad y estilo sin comprometer el presupuesto.",
    tagline: "Viaja con estilo.",
    dealerships: [
      { city: "Culiacán", phone: "667-102-5850", whatsapp: "526671025850" },
      { city: "Ciudad Obregón", phone: "644-204-4858", whatsapp: "526442044858" },
    ],
  },
  stellantis: {
    name: "stellantis",
    displayName: "Stellantis",
    heroImage: "/images/brands-pages/jetour2.jpeg",
    description:
      "Stellantis reúne las marcas más icónicas del mundo automotriz: Jeep, Peugeot, Fiat, Ram y Dodge. Cada una con su propia identidad, pero todas con el respaldo de GB Automotriz y más de 90 años de experiencia.",
    tagline: "Cinco marcas, una familia.",
    dealerships: [
      { city: "Ciudad Obregón", phone: "644-222-0568", whatsapp: "526442220568" },
    ],
    subBrands: ["Jeep", "Peugeot", "Fiat", "Ram", "Dodge"],
  },
};

export default function BrandDetailPage() {
  const params = useParams();
  const brandSlug = (params.brand as string)?.toLowerCase();
  const brand = brandsData[brandSlug];

  if (!brand) {
    return (
      <main style={{ paddingTop: "120px" }}>
        <div className={styles.container}>
          <h1>Marca no encontrada</h1>
          <Link href="/distribuidores">Volver a distribuidores</Link>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <Image src={brand.heroImage} alt={brand.displayName} fill priority />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <div className={styles.container}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/distribuidores" className={styles.backLink}>
                <ArrowLeft size={18} />
                Distribuidores
              </Link>
            </motion.div>

            <motion.span
              className={styles.tagline}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {brand.tagline}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {brand.displayName}
            </motion.h1>

            <motion.p
              className={styles.description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              {brand.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Sub-brands (Stellantis only) */}
      {brand.subBrands && (
        <section className={styles.subBrandsSection}>
          <div className={styles.container}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Nuestras marcas
            </motion.h2>
            <div className={styles.subBrandsGrid}>
              {brand.subBrands.map((sub) => (
                <motion.div
                  key={sub}
                  className={styles.subBrandCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <span>{sub}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Dealerships */}
      <section className={styles.dealershipsSection}>
        <div className={styles.container}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Sucursales {brand.displayName}
          </motion.h2>

          <div className={styles.dealershipsGrid}>
            {brand.dealerships.map((d, index) => (
              <motion.div
                key={d.city}
                className={styles.dealershipCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={styles.dealershipHeader}>
                  <h3>{d.city}</h3>
                  <span className={styles.badge}>{brand.displayName}</span>
                </div>

                <div className={styles.dealershipInfo}>
                  <div className={styles.infoRow}>
                    <Phone size={16} />
                    <span>{d.phone}</span>
                  </div>
                </div>

                <div className={styles.dealershipActions}>
                  <a
                    href={`https://wa.me/${d.whatsapp}?text=${encodeURIComponent(
                      `Hola, me interesa obtener información de ${brand.displayName} en ${d.city}. ¿Podrían ayudarme?`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.whatsappBtn}
                  >
                    <MessageCircle size={18} />
                    WhatsApp
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.ctaContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>¿Te interesa {brand.displayName}?</h2>
            <p>Visítanos en cualquiera de nuestras sucursales o contáctanos por WhatsApp.</p>
            <Link href="/distribuidores" className={styles.btnOutline}>
              Ver todas las marcas
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
