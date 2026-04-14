"use client";

import { useState } from "react";
import { siteConfig } from "@/content/site";
import styles from "./page.module.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Contáctanos</h1>
          <p>¿Interesado en alguna unidad? Escríbenos y te ayudamos.</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.info}>
            <div className={styles.infoItem}>
              <strong>Teléfono</strong>
              <span>{siteConfig.phone}</span>
            </div>
            <div className={styles.infoItem}>
              <strong>Email</strong>
              <span>{siteConfig.email}</span>
            </div>
            <div className={styles.infoItem}>
              <strong>Ubicación</strong>
              <span>{siteConfig.address}</span>
            </div>
          </div>

          <div className={styles.formWrapper}>
            {submitted ? (
              <div className={styles.success}>
                <h3>¡Mensaje enviado!</h3>
                <p>Nos pondremos en contacto contigo pronto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Nombre completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Correo electrónico</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@email.com"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Teléfono</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="(668) 123 4567"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="¿Qué auto te interesa?"
                  />
                </div>
                <button type="submit" className={styles.submitBtn}>
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
