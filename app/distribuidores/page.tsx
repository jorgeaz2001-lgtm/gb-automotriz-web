"use client";

import { useState } from "react";
import Image from "next/image";
import WhatsAppModal from "@/components/WhatsAppModal";
import styles from "./page.module.css";

const distribuidores = [
  { name: "Ford", city: "Culiacán", phone: "6675032395", image: "/images/auto3.jpg" },
  { name: "Jeep", city: "Ciudad Obregón", phone: "6442220568", image: "/images/auto4.jpg" },
  { name: "Mazda", city: "Culiacán", phone: "6674672828", image: "/images/auto1.jpg" },
  { name: "Lincoln", city: "Culiacán", phone: "6673038502", image: "/images/auto6.png" },
  { name: "Peugeot", city: "Ciudad Obregón", phone: "6442220568", image: "/images/auto4.jpg" },
  { name: "Fiat", city: "Ciudad Obregón", phone: "6442220568", image: "/images/auto5.jpg" },
  { name: "Ram", city: "Ciudad Obregón", phone: "6442220568", image: "/images/auto3.jpg" },
  { name: "Dodge", city: "Ciudad Obregón", phone: "6442220568", image: "/images/hero.jpg" },
];

export default function DistribuidoresPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState<string | undefined>();

  const openBrand = (brand: string) => {
    setSelectedBrand(brand);
    setShowModal(true);
  };

  return (
    <main className={styles.main}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}></div>
        <div className={styles.heroImg}>
          <Image src="/images/auto7.jpg" alt="Distribuidores" fill priority />
        </div>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <span className={styles.heroEyebrow}>Distribuidores</span>
          <h1>Nuestras marcas</h1>
          <p>Somos distribuidores autorizados de las principales marcas automotrices en el noroeste de México.</p>
        </div>
      </section>

      {/* Distribuidores Grid */}
      <section className={styles.gridSection}>
        <div className={styles.container}>
          <div className={styles.cardsGrid}>
            {distribuidores.map((dist, index) => (
              <button
                key={index}
                className={styles.card}
                onClick={() => openBrand(dist.name)}
              >
                <div className={styles.cardImage}>
                  <Image src={dist.image} alt={dist.name} fill style={{ objectFit: "cover" }} />
                </div>
                <div className={styles.cardContent}>
                  <h3>{dist.name}</h3>
                  <p className={styles.city}>{dist.city}</p>
                  <p className={styles.phone}>{dist.phone}</p>
                  <span className={styles.cta}>Contactar por WhatsApp →</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        preselectedBrand={selectedBrand}
      />
    </main>
  );
}
