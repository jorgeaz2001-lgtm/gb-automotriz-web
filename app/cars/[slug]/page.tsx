"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import WhatsAppModal from "@/components/WhatsAppModal";
import styles from "./page.module.css";

const MAIN_WHATSAPP = "526675032395";

const vehicles = {
  territory: {
    brand: "Ford",
    model: "Ford Territory",
    year: 2026,
    price: "$599,000 - $798,500",
    image: "/images/cars/territory.png",
    description:
      "Disfruta de viajes seguros y placenteros con tu familia gracias al amplio espacio y moderno diseño de Ford Territory 2026, SUV de Gran Tecnología que ofrece todo lo que necesitas para convertir cada viaje en una experiencia inolvidable.",
    features: [
      "Tecnología y Rendimiento en una SUV",
      "Amplio espacio interior",
      "Diseño moderno",
      "Gran tecnología integrada",
      "Seguridad avanzada",
      "Confort para toda la familia",
    ],
    specs: {
      motor: "1.8L EcoBoost",
      potencia: "190 HP",
      transmision: "Automática",
      combustible: "Gasolina",
      traccion: "Delantera",
    },
  },
  mazda2: {
    brand: "Mazda",
    model: "Mazda 2",
    year: 2025,
    price: "$301,900 - $398,900",
    image: "/images/cars/mazda2.jpg",
    description:
      "El Mazda 2 combina diseño elegante con tecnología avanzada. Faros LED con función de encendido y apagado automático, rines de aleación de aluminio de 16″, sistema de monitoreo de presión de llantas (TPMS) y cámara de visión trasera.",
    features: [
      "Faros LED con encendido automático",
      "Rines de aluminio de 16″",
      "TPMS",
      "Cámara de visión trasera",
      "Diseño elegante",
      "Tecnología avanzada",
    ],
    specs: {
      motor: "1.5L Skyactiv",
      potencia: "110 HP",
      transmision: "Automática 6 vel",
      combustible: "Gasolina",
      traccion: "Delantera",
    },
  },
  "p-22": {
    brand: "DFAC",
    model: "DFAC P22",
    year: 2025,
    price: "$467,900 - $517,900",
    image: "/images/cars/p22.jpg",
    description:
      "Una nueva generación de líderes. Robustez y eficiencia para el trabajo diario. Combina potencia y capacidad de carga para enfrentar los retos del día a día.",
    features: [
      "Robustez y eficiencia",
      "Gran capacidad de carga",
      "Potencia confiable",
      "Diseño funcional",
      "Ideal para trabajo",
      "Durabilidad garantizada",
    ],
    specs: {
      motor: "2.0L Turbo Diesel",
      potencia: "140 HP",
      transmision: "Manual 6 vel",
      combustible: "Diésel",
      traccion: "4x2",
    },
  },
  "ram-700": {
    brand: "Ram",
    model: "Ram 700",
    year: 2025,
    price: "$339,900 - $517,900",
    image: "/images/cars/ram-700.jpg",
    description:
      "Excelente capacidad para cualquier tipo de trabajo. Exclusivo equipamiento interior y exterior que destaca. La pickup compacta más capaz del mercado.",
    features: [
      "Capacidad de carga superior",
      "Equipamiento exclusivo",
      "Diseño robusto",
      "Versatilidad total",
      "Confort interior",
      "Tecnología conectada",
    ],
    specs: {
      motor: "1.4L Tigershark",
      potencia: "85 HP",
      transmision: "Manual 5 vel",
      combustible: "Gasolina",
      traccion: "Delantera",
    },
  },
  "peugeot-2009": {
    brand: "Peugeot",
    model: "Peugeot 2008",
    year: 2025,
    price: "$463,900 - $545,900",
    image: "/images/cars/peugeot-2008.jpg",
    description:
      "La nueva SUV PEUGEOT 2008 redefine sin esfuerzo los códigos estéticos del segmento, con un estilo contundente: nuevas luces LED, tanto delanteras como traseras, una nueva y amplia parrilla que enmarca el nuevo escudo de PEUGEOT y nuevos rines de aluminio.",
    features: [
      "Luces LED delanteras y traseras",
      "Parrilla amplia con escudo PEUGEOT",
      "Rines de aluminio de 17″",
      "Motor turbo",
      "SUV compacta moderna",
      "Diseño contundente",
    ],
    specs: {
      motor: "1.2L Turbo",
      potencia: "130 HP",
      transmision: "Automática 6 vel",
      combustible: "Gasolina",
      traccion: "Delantera",
    },
  },
  "pulse-fiat": {
    brand: "Fiat",
    model: "Fiat Pulse",
    year: 2025,
    price: "$355,900 - $432,900",
    image: "/images/cars/pulse-fiat.jpg",
    description:
      "Conoce el nuevo SUV de Fiat® y acelera tu pulso con su auténtico diseño italiano, dinámico y moderno, característico de Fiat® con el que seguro robarás miradas.",
    features: [
      "Diseño italiano auténtico",
      "Dinámico y moderno",
      "Tecnología conectada",
      "Estilo único",
      "Versatilidad urbana",
      "Confort superior",
    ],
    specs: {
      motor: "1.3L Firefly",
      potencia: "101 HP",
      transmision: "CVT",
      combustible: "Gasolina",
      traccion: "Delantera",
    },
  },
  navigator: {
    brand: "Lincoln",
    model: "Lincoln Navigator",
    year: 2025,
    price: "$2,599,900 - $3,079,900",
    image: "/images/cars/navigator.png",
    description:
      "Conoce la totalmente nueva Lincoln Navigator 2025, la camioneta que redefine el lujo con su diseño audaz y un interior que cautiva. Su tecnología Lincoln Digital Experience, junto a su pantalla panorámica de 48 pulgadas y funciones como Lincoln Rejuvenate transforman cada viaje en una experiencia de spa en movimiento.",
    features: [
      "Pantalla panorámica 48″",
      "Lincoln Digital Experience",
      "Lincoln Rejuvenate",
      "Asientos de piel premium",
      "Sistema Revel Ultima 3D",
      "Lincoln Co-Pilot360",
    ],
    specs: {
      motor: "3.5L V6 Biturbo",
      potencia: "450 HP",
      transmision: "Automática 10 vel",
      combustible: "Gasolina",
      traccion: "4x4",
    },
  },
  "x-70": {
    brand: "Jetour",
    model: "Jetour X70",
    year: 2025,
    price: "$439,900",
    image: "/images/cars/x70.jpeg",
    description:
      "Conducción segura y disfrute de la vida. Alto Factor de Seguridad EPB+AUTOHOLD. Motor con garantía prolongada. La suspensión independiente multibrazo con barra estabilizadora mejora la estabilidad de conducción.",
    features: [
      "EPB + AUTOHOLD",
      "Motor con garantía prolongada",
      "Suspensión independiente multibrazo",
      "Barra estabilizadora",
      "Alta seguridad",
      "Estabilidad de conducción",
    ],
    specs: {
      motor: "1.5L Turbo",
      potencia: "156 HP",
      transmision: "Automática 6 vel",
      combustible: "Gasolina",
      traccion: "Delantera",
    },
  },
  attitude: {
    brand: "Dodge",
    model: "Dodge Attitude",
    year: 2025,
    price: "$398,900",
    image: "/images/cars/attitude.jpg",
    description:
      "El nuevo DODGE ATTITUDE R/T cuenta con un imponente diseño frontal y lateral, con líneas de carácter robustas, que hablan de su atractiva potencia. Diseño deportivo con líneas agresivas y contornos dinámicos.",
    features: [
      "Diseño deportivo R/T",
      "Líneas agresivas",
      "Contornos dinámicos",
      "Imponente diseño frontal",
      "Carácter robusto",
      "Potencia atractiva",
    ],
    specs: {
      motor: "1.2L Turbo",
      potencia: "116 HP",
      transmision: "CVT",
      combustible: "Gasolina",
      traccion: "Delantera",
    },
  },
};

export default function CarDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const vehicle = vehicles[slug as keyof typeof vehicles];
  const [showModal, setShowModal] = useState(false);

  const whatsappLink = `https://wa.me/${MAIN_WHATSAPP}?text=${encodeURIComponent(
    `Hola, estoy interesado en el ${vehicle?.model || "vehículo"}. ¿Me pueden brindar más información?`
  )}`;

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

              <div className={styles.actionButtons}>
                <Link href="/contacts" className={styles.btnFull}>
                  Solicitar información
                </Link>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnWhatsApp}
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
              </div>
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
