import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";

const valores = [
  {
    title: "Transparencia",
    desc: "Precios claros y sin sorpresas en todo momento.",
  },
  {
    title: "Compromiso",
    desc: "Nos preocupamos por encontrar el auto perfecto para ti.",
  },
  {
    title: "Calidad",
    desc: "Vehículos certificados y revisados exhaustivamente.",
  },
  {
    title: "Servicio",
    desc: "Atención personalizada antes, durante y después de tu compra.",
  },
];

export default function NosotrosPage() {
  return (
    <main style={{ paddingTop: "104px", minHeight: "100vh", background: "var(--white)" }}>
      {/* Hero */}
      <section className={styles.hero} style={{ height: "50vh" }}>
        <div className={styles.heroBg}></div>
        <div className={styles.heroImg}>
          <Image src="/images/auto4.jpg" alt="Nosotros" fill priority />
        </div>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <span className={styles.heroEyebrow}>Nosotros</span>
          <h1>Conoce GB Automotriz</h1>
          <p>Más de 90 años de experiencia brindando el mejor servicio automotriz del noroeste.</p>
        </div>
      </section>

      {/* Historia */}
      <section style={{ padding: "80px 48px", background: "var(--white)" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
          <div>
            <span style={{
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: "12px",
              display: "block"
            }}>Nuestra Historia</span>
            <h2 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 700,
              letterSpacing: "-1px",
              marginBottom: "24px",
              lineHeight: 1.1
            }}>Más de 90 años de trayectoria automotriz</h2>
            <p style={{ color: "var(--gray)", lineHeight: 1.7, marginBottom: "16px" }}>
              Desde 1927, nos hemos consolidado como el grupo líder automotriz del noroeste de México.
              Con más de 90 años de experiencia, representamos las marcas más prestigiosas del 
              mercado con el compromiso de brindar un servicio excepcional y una experiencia de compra única.
            </p>
            <p style={{ color: "var(--gray)", lineHeight: 1.7 }}>
              Nuestro equipo de profesionales está capacitado para asesorarte en cada paso del proceso, 
              desde la elección de tu vehículo hasta el financiamiento y servicio post-venta.
            </p>
          </div>
          <div style={{ borderRadius: "20px", overflow: "hidden" }}>
            <Image src="/images/auto6.png" alt="GB Automotriz" width={600} height={450} style={{ width: "100%", height: "auto" }} />
          </div>
        </div>
      </section>

      {/* Valores */}
      <section style={{ padding: "80px 48px", background: "var(--cream)" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: "12px",
              display: "block"
            }}>Valores</span>
            <h2 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 700,
              letterSpacing: "-1px"
            }}>Lo que nos define</h2>
          </div>
          
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", 
            gap: "24px" 
          }}>
            {valores.map((valor, index) => (
              <div key={index} style={{
                background: "var(--white)",
                borderRadius: "16px",
                padding: "28px",
                textAlign: "center"
              }}>
                <h3 style={{ 
                  fontFamily: "'Syne', sans-serif", 
                  fontSize: "18px", 
                  fontWeight: 700,
                  marginBottom: "8px"
                }}>{valor.title}</h3>
                <p style={{ color: "var(--gray)", fontSize: "14px", lineHeight: 1.5 }}>{valor.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
