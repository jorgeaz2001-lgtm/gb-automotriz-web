"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { vehicles, getVehiclesByBrand } from "@/lib/vehicles";
import styles from "./page.module.css";

interface BrandData {
  name: string;
  displayName: string;
  heroImage: string;
  description: string;
  tagline: string;
}

const brandsData: Record<string, BrandData> = {
  ford: {
    name: "ford",
    displayName: "Ford",
    heroImage: "/images/brands-pages/ford.jpg",
    description:
      "Ford es sinónimo de innovación, rendimiento y confiabilidad. Desde pickups icónicas hasta SUVs familiares, cada vehículo Ford está diseñado para superar expectativas.",
    tagline: "Construido para ser el mejor.",
  },
  lincoln: {
    name: "lincoln",
    displayName: "Lincoln",
    heroImage: "/images/brands-pages/lincoln.jpg",
    description:
      "Lincoln representa el pináculo del lujo americano. Cada detalle está diseñado para ofrecer una experiencia de conducción inigualable, combinando elegancia, tecnología de vanguardia y confort supremo.",
    tagline: "El poder del lujo.",
  },
  mazda: {
    name: "mazda",
    displayName: "Mazda",
    heroImage: "/images/brands-pages/mazda.jpg",
    description:
      "Mazda crea vehículos que despiertan las emociones. Con el enfoque Jinba Ittai —caballo y jinete como uno solo— cada Mazda ofrece una conexión única entre conductor y máquina.",
    tagline: "Conducir importa.",
  },
  dongfeng: {
    name: "dongfeng",
    displayName: "Dongfeng",
    heroImage: "/images/brands-pages/dongfeng.png",
    description:
      "Dongfeng combina ingeniería china de clase mundial con precios competitivos. Sus vehículos comerciales y de pasajeros ofrecen durabilidad, tecnología moderna y excelente relación calidad-precio.",
    tagline: "Fuerza y confianza.",
  },
  jetour: {
    name: "jetour",
    displayName: "Jetour",
    heroImage: "/images/brands-pages/jetour.jpg",
    description:
      "Jetour redefine la movilidad con SUVs modernas, espaciosas y tecnológicamente avanzadas. Diseñadas para familias que buscan confort, seguridad y estilo sin comprometer el presupuesto.",
    tagline: "Viaja con estilo.",
  },
  stellantis: {
    name: "stellantis",
    displayName: "Stellantis",
    heroImage: "/images/brands-pages/stellantis-culiacan.jpg",
    description:
      "Stellantis reúne las marcas más icónicas del mundo automotriz: Jeep, Peugeot, Fiat, Ram y Dodge. Cada una con su propia identidad, pero todas con el respaldo de GB Automotriz.",
    tagline: "Cinco marcas, una familia.",
  },
};

// Map slug brands to vehicle brand names for filtering
const brandSlugToVehicleBrand: Record<string, string[]> = {
  ford: ["Ford"],
  lincoln: ["Lincoln"],
  mazda: ["Mazda"],
  dongfeng: ["DFAC"],
  jetour: ["Jetour"],
  stellantis: ["Jeep", "Peugeot", "Fiat", "Ram", "Dodge"],
};

export default function BrandDetailPage() {
  const params = useParams();
  const brandSlug = (params.brand as string)?.toLowerCase();
  const brand = brandsData[brandSlug];

  // Get vehicles for this brand
  const vehicleBrands = brandSlugToVehicleBrand[brandSlug] || [brand?.displayName || ""];
  const brandVehicles = Object.values(vehicles).filter((v) =>
    vehicleBrands.some((vb) => vb.toLowerCase() === v.brand.toLowerCase())
  );

  if (!brand) {
    return (
      <main style={{ paddingTop: "120px" }}>
        <div className={styles.container}>
          <h1>Marca no encontrada</h1>
          <Link href="/marcas">Volver a marcas</Link>
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
              <Link href="/marcas" className={styles.backLink}>
                <ArrowLeft size={18} />
                Marcas
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

      {/* Vehicle Inventory */}
      <section className={styles.inventorySection}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Inventario {brand.displayName}</h2>
            <p>Explora nuestros modelos disponibles para venta nacional</p>
          </motion.div>

          {brandVehicles.length > 0 ? (
            <div className={styles.vehiclesGrid}>
              {brandVehicles.map((vehicle, index) => (
                <motion.div
                  key={vehicle.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/cars/${vehicle.slug}`} className={styles.vehicleCard}>
                    <div className={styles.vehicleImage}>
                      <Image
                        src={vehicle.image}
                        alt={`${vehicle.brand} ${vehicle.model}`}
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <div className={styles.vehicleInfo}>
                      <span className={styles.vehicleBrand}>{vehicle.brand}</span>
                      <h3>{vehicle.model}</h3>
                      <div className={styles.vehicleMeta}>
                        <span>{vehicle.year}</span>
                        <span className={styles.dot}>•</span>
                        <span className={styles.vehiclePrice}>{vehicle.price}</span>
                      </div>
                      <span className={styles.vehicleCta}>Ver detalles →</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              className={styles.emptyState}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p>Próximamente nuevos modelos {brand.displayName}</p>
              <Link href="/contacts" className={styles.btnOutline}>
                Solicitar información
              </Link>
            </motion.div>
          )}
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
            <p>Contáctanos y con gusto te brindamos más información sobre nuestros modelos.</p>
            <Link href="/contacts" className={styles.btnOutline}>
              Contactar asesor
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
