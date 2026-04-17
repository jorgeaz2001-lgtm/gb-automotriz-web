"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import WhatsAppModal from "@/components/WhatsAppModal";
import styles from "./page.module.css";

const vehicles = {
  "mazda-2": {
    brand: "Mazda",
    model: "Mazda 2 Sedán",
    year: 2025,
    price: "$389,900",
    image: "/images/auto1.jpg",
    description: "El Mazda 2 Sedán combina diseño elegante con tecnología avanzada. Perfecto para la ciudad con su eficiencia de combustible y manejo ágil.",
    features: [
      "Motor 1.5L Skyactiv",
      "Transmisión automática",
      "Pantalla táctil 7 pulgadas",
      "Cámara de reversa",
      "Frenos ABS",
      "6 bolsas de aire"
    ],
    specs: {
      motor: "1.5L 4 cilindros",
      potencia: "110 HP",
      transmision: "Automática 6 vel",
      combustible: "Gasolina",
      traccion: "Delantera"
    }
  },
  "ram-700": {
    brand: "Ram",
    model: "Ram 700 Regular",
    year: 2025,
    price: "$329,900",
    image: "/images/auto3.jpg",
    description: "La Ram 700 es la pickup compacta más capaz del mercado. Ideal para trabajo y aventuras con su robustez y versatilidad.",
    features: [
      "Motor 1.4L Tigershark",
      "Capacidad de carga 400kg",
      "Caja de 1.5m",
      "Aire acondicionado",
      "Dirección asistida",
      "Bluetooth"
    ],
    specs: {
      motor: "1.4L 4 cilindros",
      potencia: "85 HP",
      transmision: "Manual 5 vel",
      combustible: "Gasolina",
      traccion: "Delantera"
    }
  },
  "peugeot-3008": {
    brand: "Peugeot",
    model: "Peugeot 3008",
    year: 2025,
    price: "$529,900",
    image: "/images/auto4.jpg",
    description: "El Peugeot 3008 es un SUV de lujo con diseño francés, tecnología avanzada y confort superior. Experiencia de conducción única.",
    features: [
      "i-Cockpit Peugeot",
      "Pantalla 10 pulgadas",
      "Asientos de piel",
      "Techo panorámico",
      "Asistente de estacionamiento",
 "Frenos de disco"
    ],
    specs: {
      motor: "1.6L Turbo",
      potencia: "165 HP",
      transmision: "Automática 6 vel",
      combustible: "Gasolina",
      traccion: "Delantera"
    }
  },
  "fiat-pulse": {
    brand: "Fiat",
    model: "Fiat Pulse",
    year: 2025,
    price: "$349,900",
    image: "/images/auto5.jpg",
    description: "El Fiat Pulse es un SUV compacto con estilo italiano, ideal para la ciudad. Diseño moderno y tecnología conectada.",
    features: [
      "Motor 1.3L Firefly",
      "Pantalla 8.4 pulgadas",
      "Apple CarPlay / Android Auto",
      "Cámara de reversa",
      "Control de estabilidad",
      "6 bolsas de aire"
    ],
    specs: {
      motor: "1.3L 4 cilindros",
      potencia: "101 HP",
      transmision: "CVT",
      combustible: "Gasolina",
      traccion: "Delantera"
    }
  },
  "lincoln-navigator": {
    brand: "Lincoln",
    model: "Lincoln Navigator",
    year: 2025,
    price: "$1,899,000",
    image: "/images/auto6.png",
    description: "La Lincoln Navigator es el pináculo del lujo americano. SUV full-size con tecnología de vanguardia y confort excepcional.",
    features: [
      "Motor V6 3.5L biturbo",
      "Asientos de piel Bridge of Weir",
      "Sistema Revel Ultima 3D",
      "Lincoln Co-Pilot360",
      "Suspensión adaptativa",
 "Tracción 4x4"
    ],
    specs: {
      motor: "3.5L V6 Biturbo",
      potencia: "450 HP",
      transmision: "Automática 10 vel",
      combustible: "Gasolina",
      traccion: "4x4"
    }
  },
  "dodge-attitude": {
    brand: "Dodge",
    model: "Dodge Attitude",
    year: 2025,
    price: "$299,900",
    image: "/images/hero.jpg",
    description: "El Dodge Attitude es un sedán deportivo con diseño agresivo y excelente rendimiento de combustible. Perfecto para el día a día.",
    features: [
      "Motor 1.2L turbo",
      "Pantalla 8 pulgadas",
      "CarPlay / Android Auto",
      "Cámara de reversa",
      "Frenos ABS + EBD",
      "6 bolsas de aire"
    ],
    specs: {
      motor: "1.2L 3 cilindros turbo",
      potencia: "116 HP",
      transmision: "CVT",
      combustible: "Gasolina",
      traccion: "Delantera"
    }
  },
  "territory": {
    brand: "Ford",
    model: "Ford Territory",
    year: 2025,
    price: "$599,900",
    image: "/images/auto7.jpg",
    description: "La Ford Territory es un SUV mediano con tecnología de punta, espacio interior y eficiencia de combustible. Ideal para familias.",
    features: [
      "Motor 1.8L EcoBoost",
      "Pantalla táctil 10 pulgadas",
      "SYNC 4",
      "Asistente de estacionamiento",
      "Control crucero adaptativo",
      "Tracción delantera"
    ],
    specs: {
      motor: "1.8L 4 cilindros turbo",
      potencia: "190 HP",
      transmision: "Automática CVT",
      combustible: "Gasolina",
      traccion: "Delantera"
    }
  }
};

export default function CarDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const vehicle = vehicles[slug as keyof typeof vehicles];
  const [showModal, setShowModal] = useState(false);

  if (!vehicle) {
    return (
      <main style={{ paddingTop: "120px" }}>
        <div className={styles.container}>
          <h1>Vehículo no encontrado</h1>
          <Link href="/">Volver al inicio</Link>
        </div>
      </main>
    );
  }

  return (
    <main style={{ paddingTop: "80px" }}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <Image src={vehicle.image} alt={`${vehicle.brand} ${vehicle.model}`} fill priority />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <div className={styles.container}>
            <motion.span 
              className={styles.brand}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {vehicle.brand}
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {vehicle.model}
            </motion.h1>
            <motion.p 
              className={styles.year}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {vehicle.year}
            </motion.p>
            <motion.p 
              className={styles.price}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {vehicle.price}
            </motion.p>
            <motion.div
              className={styles.buttons}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <button
                className={styles.btnPrimary}
                onClick={() => setShowModal(true)}
              >
                Cotizar ahora
              </button>
              <Link href="/seminuevos" className={styles.btnSecondary}>
                Ver más vehículos
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className={styles.details}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <motion.div 
              className={styles.info}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Descripción</h2>
              <p>{vehicle.description}</p>
              
              <h3>Características</h3>
              <ul className={styles.features}>
                {vehicle.features.map((feature, index) => (
                  <li key={index}>✓ {feature}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              className={styles.specs}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Especificaciones</h2>
              <div className={styles.specsGrid}>
                <div>
                  <span>Motor</span>
                  <p>{vehicle.specs.motor}</p>
                </div>
                <div>
                  <span>Potencia</span>
                  <p>{vehicle.specs.potencia}</p>
                </div>
                <div>
                  <span>Transmisión</span>
                  <p>{vehicle.specs.transmision}</p>
                </div>
                <div>
                  <span>Combustible</span>
                  <p>{vehicle.specs.combustible}</p>
                </div>
                <div>
                  <span>Tracción</span>
                  <p>{vehicle.specs.traccion}</p>
                </div>
              </div>

              <Link href="/contacts" className={styles.btnFull}>
                Solicitar información
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <WhatsAppModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        preselectedBrand={vehicle.brand}
        preselectedVehicle={vehicle.model}
      />

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>¿Te interesa este vehículo?</h2>
          <p>Contáctanos y agenda una prueba de manejo</p>
          <Link href="/contacts" className={styles.btnWhite}>
            Contactar asesor
          </Link>
        </div>
      </section>
    </main>
  );
}
