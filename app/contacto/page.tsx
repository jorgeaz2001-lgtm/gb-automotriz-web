"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function ContactoPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionLabel}>Contacto</span>
          <h1 className={styles.title}>¿Interesado en algún vehículo?</h1>
          <p className={styles.subtitle}>
            Completa el formulario y un asesor se pondrá en contacto contigo a la brevedad
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.infoSection}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>A</div>
              <h3>Visítanos</h3>
              <p>Culiacán, Sinaloa, México</p>
              <span className={styles.infoLink}>Ver ubicación</span>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>T</div>
              <h3>Teléfono</h3>
              <p>+52 668 103 0004</p>
              <a href="tel:+526681030004" className={styles.infoLink}>Llamar ahora</a>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>E</div>
              <h3>Email</h3>
              <p>contacto@gbautomotriz.mx</p>
              <a href="mailto:contacto@gbautomotriz.mx" className={styles.infoLink}>Enviar correo</a>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>W</div>
              <h3>WhatsApp</h3>
              <p>Chatea con nosotros</p>
              <a href="https://wa.me/526681030004" target="_blank" className={styles.infoLink}>Abrir chat</a>
            </div>
          </div>

          <div className={styles.formSection}>
            {submitted ? (
              <div className={styles.success}>
                <div className={styles.successIcon}>✓</div>
                <h3>¡Mensaje enviado!</h3>
                <p>Gracias por contactarnos. Un asesor se comunicará contigo muy pronto.</p>
                <Link href="/" className={styles.backBtn}>
                  Volver al inicio
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="nombre">Nombre completo *</label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="telefono">Teléfono *</label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      placeholder="(668) 123 4567"
                      required
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Correo electrónico</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="tu@email.com"
                  />
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="marca">Marca de interés</label>
                    <select id="marca" name="marca">
                      <option value="">Selecciona</option>
                      <option value="mazda">Mazda</option>
                      <option value="ford">Ford</option>
                      <option value="jeep">Jeep</option>
                      <option value="lincoln">Lincoln</option>
                      <option value="peugeot">Peugeot</option>
                      <option value="fiat">Fiat</option>
                      <option value="dodge">Dodge</option>
                      <option value="ram">Ram</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="tipo">Tipo de vehículo</label>
                    <select id="tipo" name="tipo">
                      <option value="">Selecciona</option>
                      <option value="sedan">Sedán</option>
                      <option value="suv">SUV</option>
                      <option value="pickup">Pickup</option>
                      <option value="hatchback">Hatchback</option>
                    </select>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="mensaje">Mensaje</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    placeholder="¿Qué vehículo te interesa?"
                  />
                </div>

                <button type="submit" className={styles.btnPrimary}>
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
