"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function ContactsPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    celular: "",
    correo: "",
    mensaje: "",
    interes: "financiado",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hola, me interesa un vehículo.

*Nombre:* ${formData.nombre}
*Celular:* ${formData.celular}
*Correo:* ${formData.correo}
*Interés:* ${formData.interes === "financiado" ? "Financiado" : "De contado"}

*Mensaje:*
${formData.mensaje || "Ninguno"}`;

    const url = `https://wa.me/526681030004?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

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
          <h1>Contáctanos</h1>
          <p>Envíanos tus datos y un asesor te atenderá</p>
        </div>
      </section>

      {/* Form */}
      <section className={styles.formSection}>
        <div className={styles.container}>
          <div className={styles.formWrapper}>
            {submitted ? (
              <div className={styles.success}>
                <h2>¡Gracias por contactarnos!</h2>
                <p>Tu mensaje se envió por WhatsApp. Un asesor te atenderá pronto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="nombre">Nombre *</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Tu nombre completo"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="celular">Celular con WhatsApp *</label>
                  <input
                    type="tel"
                    id="celular"
                    name="celular"
                    placeholder="Ej. 667 123 4567"
                    required
                    value={formData.celular}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="correo">Correo *</label>
                  <input
                    type="email"
                    id="correo"
                    name="correo"
                    placeholder="tu@email.com"
                    required
                    value={formData.correo}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>¿De qué te interesa tu carro? *</label>
                  <div className={styles.radioGroup}>
                    <label className={styles.radioLabel}>
                      <input
                        type="radio"
                        name="interes"
                        value="financiado"
                        checked={formData.interes === "financiado"}
                        onChange={handleChange}
                      />
                      <span>A) Financiado</span>
                    </label>
                    <label className={styles.radioLabel}>
                      <input
                        type="radio"
                        name="interes"
                        value="contado"
                        checked={formData.interes === "contado"}
                        onChange={handleChange}
                      />
                      <span>B) De contado</span>
                    </label>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="mensaje">Escribe tu mensaje</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    placeholder="¿Qué vehículo te interesa?"
                    value={formData.mensaje}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Enviar por WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
