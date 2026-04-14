"use client";

import { FormEvent, useState } from "react";
import styles from "@/components/sections/ContactForm.module.css";

type ContactFormProps = {
  panel: {
    heading: string;
    bullets: string[];
    supportCopy: string;
    supportLabel: string;
    supportHref: string;
  };
  labels: {
    firstNameLabel: string;
    firstNamePlaceholder: string;
    lastNameLabel: string;
    lastNamePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    companyLabel: string;
    companyPlaceholder: string;
    annualSalesLabel: string;
    annualSalesOptions: string[];
    sourceLabel: string;
    sourceOptions: string[];
    submitLabel: string;
  };
};

export function ContactForm({ panel, labels }: ContactFormProps) {
  const [sent, setSent] = useState(false);
  
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const form = event.currentTarget;
    const formData = new FormData(form);
    
    // Get form values
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const asunto = formData.get("asunto") as string;
    const tipoConsulta = formData.get("tipoConsulta") as string;
    const comoNosConociste = formData.get("comoNosConociste") as string;
    
    // Build email body
    const subject = encodeURIComponent(`Nuevo mensaje: ${asunto || 'Contacto desde web'}`);
    const body = encodeURIComponent(
      `Nombre: ${firstName} ${lastName}\n` +
      `Email: ${email}\n` +
      `Teléfono: ${phone}\n` +
      `Asunto: ${asunto}\n` +
      `Tipo de consulta: ${tipoConsulta}\n` +
      `¿Cómo nos conoció?: ${comoNosConociste}\n\n` +
      `---\nMensaje enviado desde fundacionvaldezballi.org`
    );
    
    // Open email client
    window.location.href = `mailto:contacto@fundacionvaldezballi.org?subject=${subject}&body=${body}`;
    
    setSent(true);
    form.reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <aside className={styles.side}>
          <h1>{panel.heading}</h1>
          <ul>
            {panel.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
          <p className={styles.supportCopy}>{panel.supportCopy}</p>
          <a className={styles.supportLink} href={panel.supportHref} target="_blank" rel="noreferrer">
            {panel.supportLabel}
          </a>
        </aside>

        <form className={styles.form} onSubmit={onSubmit}>
          <label>
            {labels.firstNameLabel}
            <input required type="text" name="firstName" placeholder={labels.firstNamePlaceholder} />
          </label>

          <label>
            {labels.lastNameLabel}
            <input required type="text" name="lastName" placeholder={labels.lastNamePlaceholder} />
          </label>

          <label>
            {labels.emailLabel}
            <input required type="email" name="email" placeholder={labels.emailPlaceholder} />
          </label>

          <label>
            {labels.companyLabel}
            <input required type="text" name="asunto" placeholder={labels.companyPlaceholder} />
          </label>

          <label>
            {labels.annualSalesLabel}
            <select required name="tipoConsulta" defaultValue="">
              <option value="" disabled>
                Selecciona...
              </option>
              {labels.annualSalesOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label>
            {labels.phoneLabel}
            <input required type="tel" name="phone" placeholder={labels.phonePlaceholder} />
          </label>

          <label>
            {labels.sourceLabel}
            <select required name="comoNosConociste" defaultValue="">
              <option value="" disabled>
                Selecciona...
              </option>
              {labels.sourceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <button type="submit" className={styles.submitButton}>
            {labels.submitLabel}
          </button>
          
          {sent && (
            <p className={styles.success}>
              ✅ Se abrirá tu app de correo. Si no tienes una configurada, envía un email a contacto@fundacionvaldezballi.org
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
