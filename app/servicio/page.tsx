import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";

const servicios = [
  {
    title: "Mantenimiento Preventivo",
    desc: "Servicio de mantenimiento programado para mantener tu vehículo en óptimas condiciones.",
    icon: "M",
  },
  {
    title: "Reparación Mecánica",
    desc: "Diagnóstico y reparación de fallas mecánicas con técnicos certificados.",
    icon: "R",
  },
  {
    title: "Hojalatería y Pintura",
    desc: "Restauración de carrocería y pintura con acabados de fábrica.",
    icon: "H",
  },
  {
    title: "Alineación y Balanceo",
    desc: "Servicio de alineación computarizada y balanceo de ruedas.",
    icon: "A",
  },
];

export default function ServicioPage() {
  return (
    <main style={{ paddingTop: "104px", minHeight: "100vh", background: "var(--white)" }}>
      {/* Hero */}
      <section className={styles.hero} style={{ height: "50vh" }}>
        <div className={styles.heroBg}></div>
        <div className={styles.heroImg}>
          <Image src="/images/auto7.jpg" alt="Servicio" fill priority />
        </div>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <span className={styles.heroEyebrow}>Servicio</span>
          <h1>Taller de servicio</h1>
          <p>Mantenimiento y reparación con técnicos certificados y refacciones originales.</p>
        </div>
      </section>

      {/* Servicios */}
      <section style={{ padding: "80px 48px", background: "var(--white)" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))", 
            gap: "24px" 
          }}>
            {servicios.map((servicio, index) => (
              <div key={index} style={{
                background: "var(--cream)",
                borderRadius: "16px",
                padding: "32px",
                display: "flex",
                gap: "20px",
                alignItems: "flex-start"
              }}>
                <div style={{
                  width: "60px",
                  height: "60px",
                  background: "var(--accent)",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "var(--black)",
                  flexShrink: 0
                }}>{servicio.icon}</div>
                <div>
                  <h3 style={{ 
                    fontFamily: "'Syne', sans-serif", 
                    fontSize: "20px", 
                    fontWeight: 700,
                    marginBottom: "8px"
                  }}>{servicio.title}</h3>
                  <p style={{ color: "var(--gray)", lineHeight: 1.6 }}>{servicio.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <Link href="/contacto" className={styles.btnPrimary}>
              Agendar cita →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
