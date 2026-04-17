"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./page.module.css";

const brands = [
  {
    slug: "ford",
    name: "Ford",
    tagline: "Construido para ser el mejor.",
    image: "/images/brands-pages/ford.jpg",
    cities: ["Culiacán", "Ciudad Obregón", "Los Mochis"],
  },
  {
    slug: "lincoln",
    name: "Lincoln",
    tagline: "El poder del lujo.",
    image: "/images/brands-pages/lincoln.jpg",
    cities: ["Culiacán"],
  },
  {
    slug: "mazda",
    name: "Mazda",
    tagline: "Conducir importa.",
    image: "/images/brands-pages/mazda.jpg",
    cities: ["Culiacán", "Mazatlán", "Los Cabos"],
  },
  {
    slug: "dongfeng",
    name: "Dongfeng",
    tagline: "Fuerza y confianza.",
    image: "/images/brands-pages/dongfeng.png",
    cities: ["Culiacán", "Ciudad Obregón", "Hermosillo", "Guadalajara"],
  },
  {
    slug: "jetour",
    name: "Jetour",
    tagline: "Viaja con estilo.",
    image: "/images/brands-pages/jetour.jpg",
    cities: ["Culiacán", "Ciudad Obregón"],
  },
  {
    slug: "stellantis",
    name: "Stellantis",
    tagline: "Jeep · Peugeot · Fiat · Ram · Dodge",
    image: "/images/brands-pages/jetour2.jpeg",
    cities: ["Ciudad Obregón"],
  },
];

export default function DistribuidoresPage() {
  return (
    <main className={styles.main}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className={styles.container}>
            <motion.span
              className={styles.heroEyebrow}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Distribuidores Autorizados
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Nuestras marcas
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Somos distribuidores autorizados de las principales marcas automotrices
              en el noroeste de México. Más de 90 años de experiencia nos respaldan.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className={styles.gridSection}>
        <div className={styles.container}>
          <div className={styles.cardsGrid}>
            {brands.map((brand, index) => (
              <motion.div
                key={brand.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
              >
                <Link
                  href={`/distribuidores/${brand.slug}`}
                  className={styles.card}
                >
                  <div className={styles.cardImage}>
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                    <div className={styles.cardImageOverlay} />
                  </div>
                  <div className={styles.cardContent}>
                    <h3>{brand.name}</h3>
                    <p className={styles.tagline}>{brand.tagline}</p>
                    <div className={styles.cities}>
                      {brand.cities.map((city) => (
                        <span key={city} className={styles.cityBadge}>
                          {city}
                        </span>
                      ))}
                    </div>
                    <span className={styles.cta}>Ver sucursales →</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
