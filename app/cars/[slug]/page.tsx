"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import WhatsAppModal from "@/components/WhatsAppModal";
import { vehicles } from "@/lib/vehicles";
import styles from "./page.module.css";

const MAIN_WHATSAPP = "526675032395";

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
