"use client";

import { useState, useMemo } from "react";
import styles from "./page.module.css";

const brands = [
  "Ford",
  "Lincoln",
  "Mazda",
  "Peugeot",
  "Ram",
  "Dodge",
  "Jeep",
  "Fiat",
  "DFAC",
  "Jetour",
];

const states = ["Sinaloa", "Sonora", "Baja California Sur", "Jalisco"];

const agenciesByState: Record<string, string[]> = {
  Sinaloa: ["Culiacán", "Los Mochis", "Mazatlán"],
  Sonora: ["Ciudad Obregón", "Hermosillo"],
  "Baja California Sur": ["Los Cabos"],
  Jalisco: ["Guadalajara"],
};

// Ciudades disponibles por marca (para filtrar el select de agencias)
const citiesByBrand: Record<string, string[]> = {
  Ford: ["Culiacán", "Ciudad Obregón", "Los Mochis"],
  Lincoln: ["Culiacán"],
  Mazda: ["Los Cabos", "Culiacán", "Mazatlán"],
  Peugeot: ["Ciudad Obregón"],
  Ram: ["Ciudad Obregón"],
  Dodge: ["Ciudad Obregón"],
  Jeep: ["Ciudad Obregón"],
  Fiat: ["Ciudad Obregón"],
  DFAC: ["Culiacán", "Ciudad Obregón", "Hermosillo", "Guadalajara"],
  Jetour: ["Culiacán", "Ciudad Obregón"],
};

const years = Array.from({ length: 18 }, (_, i) => 2027 - i); // 2027 to 2010

const serviceTypes = [
  "Servicio de Mantenimiento",
  "Servicio Correctivo",
  "Servicio de Afinación",
  "Cambio de Aceite",
  "Revisión General",
  "Garantía",
  "Otro",
];

// Map individual brand to group name used in dealerships data
function brandToGroupName(brand: string): string {
  const map: Record<string, string> = {
    Ford: "ford",
    Lincoln: "lincoln",
    Mazda: "mazda",
    Peugeot: "stellantis",
    Ram: "stellantis",
    Dodge: "stellantis",
    Jeep: "stellantis",
    Fiat: "stellantis",
    DFAC: "dongfeng",
    Jetour: "jetour",
  };
  return map[brand] || "";
}

// Phone numbers from lib/dealerships.ts (hardcoded for client component)
const phoneByBrandCity: Record<string, Record<string, string>> = {
  ford: {
    Culiacán: "526675032395",
    "Ciudad Obregón": "526442222834",
    "Los Mochis": "526682533839",
  },
  mazda: {
    "Los Cabos": "526241840641",
    Culiacán: "526674672828",
    Mazatlán: "526699184897",
  },
  lincoln: {
    Culiacán: "526673038502",
  },
  dongfeng: {
    Culiacán: "526673038702",
    "Ciudad Obregón": "526442220969",
    Hermosillo: "526621233933",
    Guadalajara: "523322567752",
  },
  stellantis: {
    "Ciudad Obregón": "526442220568",
  },
  jetour: {
    Culiacán: "526671025850",
    "Ciudad Obregón": "526442044858",
  },
};

function getWhatsAppPhone(brand: string, city: string): string {
  const group = brandToGroupName(brand);
  const cityPhones = phoneByBrandCity[group];
  if (cityPhones && cityPhones[city]) {
    return cityPhones[city];
  }
  // Fallback: generic Ford Culiacán number
  return "526675032395";
}

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const [year, month, day] = dateStr.split("-");
  return `${day}/${month}/${year}`;
}

export default function ContactsPage() {
  const [formData, setFormData] = useState({
    brand: "",
    state: "",
    agency: "",
    model: "",
    year: "",
    service: "",
    date: "",
    time: "",
    name: "",
    phone: "",
    email: "",
    comments: "",
  });
  const [acceptedPolicy, setAcceptedPolicy] = useState(false);

  const availableAgencies = useMemo(() => {
    if (!formData.state) return [];
    const stateAgencies = agenciesByState[formData.state] || [];
    // Si hay marca seleccionada, filtrar solo las agencias que atienden esa marca
    if (formData.brand && citiesByBrand[formData.brand]) {
      const allowedCities = citiesByBrand[formData.brand];
      return stateAgencies.filter((city) => allowedCities.includes(city));
    }
    return stateAgencies;
  }, [formData.state, formData.brand]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const next = { ...prev, [name]: value };
      // Reset agency when state or brand changes
      if (name === "state" || name === "brand") {
        next.agency = "";
      }
      return next;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phone = getWhatsAppPhone(formData.brand, formData.agency);
    const message = `Hola, quiero agendar una cita de servicio.

*Marca:* ${formData.brand}
*Agencia:* ${formData.agency}, ${formData.state}
*Modelo:* ${formData.model}
*Año:* ${formData.year}
*Servicio:* ${formData.service}
*Fecha:* ${formatDate(formData.date)}
*Hora:* ${formData.time}

*Nombre:* ${formData.name}
*Teléfono:* ${formData.phone}
*Email:* ${formData.email}

*Comentarios:*
${formData.comments || "Ninguno"}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const isFormValid =
    formData.brand &&
    formData.state &&
    formData.agency &&
    formData.model &&
    formData.year &&
    formData.service &&
    formData.date &&
    formData.time &&
    formData.name &&
    formData.phone &&
    acceptedPolicy;

  return (
    <main style={{ paddingTop: "120px" }}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>Cita de Servicio</h1>
          <p>Agenda tu cita de servicio y recibe atención profesional para tu vehículo</p>
        </div>
      </section>

      {/* Service Appointment Form */}
      <section className={styles.contactForm}>
        <div className={styles.container}>
          <div className={styles.formWrapper}>
            <h2>Agenda tu cita de servicio</h2>
            <form onSubmit={handleSubmit}>
              {/* Brand */}
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="brand">Selecciona una marca *</label>
                  <select
                    id="brand"
                    name="brand"
                    required
                    value={formData.brand}
                    onChange={handleChange}
                  >
                    <option value="">Selecciona una marca</option>
                    {brands.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="state">Selecciona el estado *</label>
                  <select
                    id="state"
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleChange}
                  >
                    <option value="">Selecciona el estado</option>
                    {states.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Agency */}
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="agency">Selecciona la agencia *</label>
                  <select
                    id="agency"
                    name="agency"
                    required
                    value={formData.agency}
                    onChange={handleChange}
                    disabled={!formData.state}
                  >
                    <option value="">
                      {formData.state
                        ? "Selecciona la agencia"
                        : "Primero selecciona un estado"}
                    </option>
                    {availableAgencies.map((a) => (
                      <option key={a} value={a}>
                        {a}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="model">Selecciona el modelo *</label>
                  <input
                    type="text"
                    id="model"
                    name="model"
                    required
                    placeholder="Ej. Territory, CX-5, etc."
                    value={formData.model}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Year + Service */}
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="year">Selecciona el año *</label>
                  <select
                    id="year"
                    name="year"
                    required
                    value={formData.year}
                    onChange={handleChange}
                  >
                    <option value="">Selecciona el año</option>
                    {years.map((y) => (
                      <option key={y} value={y}>
                        {y}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="service">Selecciona el servicio *</label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Selecciona el servicio</option>
                    {serviceTypes.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date + Time */}
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="date">Fecha de la cita *</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="time">Hora de la cita *</label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Personal Info */}
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Nombre *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Tu nombre completo"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Teléfono / WhatsApp *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="Ej. 667 123 4567"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="tu@correo.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="comments">Comentarios</label>
                <textarea
                  id="comments"
                  name="comments"
                  rows={4}
                  placeholder="¿Algo que debamos saber sobre tu vehículo?"
                  value={formData.comments}
                  onChange={handleChange}
                />
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

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={!isFormValid}
              >
                Agendar Cita
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
