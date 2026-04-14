"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function ContactsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [acceptedPolicy, setAcceptedPolicy] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mensaje enviado correctamente");
  };

  return (
    <main style={{ paddingTop: "120px" }}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>Contáctanos</h1>
          <p>¿Tiene preguntas? ¡Ponte en contacto!</p>
        </div>
      </section>

      {/* Contact Info */}
      <section className={styles.contactInfo}>
        <div className={styles.container}>
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <h3>Teléfono</h3>
              <p>+521 644 415 2100</p>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
              <h3>Email</h3>
              <p>atencion@gbautomotriz.mx</p>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3>Ubicación</h3>
              <p>Av. Miguel Alemán y Nainari No. 300<br />CP. 85000, Navojoa, Sonora</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className={styles.contactForm}>
        <div className={styles.container}>
          <div className={styles.formWrapper}>
            <h2>Envíanos un mensaje</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Nombre *</label>
                  <input 
                    type="text" 
                    id="name"
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email *</label>
                  <input 
                    type="email" 
                    id="email"
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Teléfono</label>
                  <input 
                    type="tel" 
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="subject">Asunto</label>
                  <select 
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="cotizacion">Cotización</option>
                    <option value="servicio">Servicio</option>
                    <option value="general">Consulta General</option>
                  </select>
                </div>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Mensaje *</label>
                <textarea 
                  id="message"
                  rows={5} 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <div className={styles.checkboxGroup}>
                <input 
                  type="checkbox" 
                  id="policy" 
                  checked={acceptedPolicy}
                  onChange={(e) => setAcceptedPolicy(e.target.checked)}
                />
                <label htmlFor="policy">Acepto las políticas de privacidad.</label>
              </div>
              <button type="submit" className={styles.submitBtn} disabled={!acceptedPolicy}>
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
