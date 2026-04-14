import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";

const distribuidores = [
  {
    name: "Ford",
    city: "Culiacán",
    phone: "+52 668 103 0004",
    image: "/images/auto3.jpg",
  },
  {
    name: "Jeep",
    city: "Culiacán",
    phone: "+52 668 103 0004",
    image: "/images/auto4.jpg",
  },
  {
    name: "Mazda",
    city: "Culiacán",
    phone: "+52 668 103 0004",
    image: "/images/auto1.jpg",
  },
  {
    name: "Lincoln",
    city: "Culiacán",
    phone: "+52 668 103 0004",
    image: "/images/auto6.png",
  },
  {
    name: "Peugeot",
    city: "Culiacán",
    phone: "+52 668 103 0004",
    image: "/images/auto4.jpg",
  },
  {
    name: "Fiat",
    city: "Culiacán",
    phone: "+52 668 103 0004",
    image: "/images/auto5.jpg",
  },
];

export default function DistribuidoresPage() {
  return (
    <main style={{ paddingTop: "104px", minHeight: "100vh", background: "var(--white)" }}>
      {/* Hero */}
      <section className={styles.hero} style={{ height: "50vh" }}>
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
      <section style={{ padding: "80px 48px", background: "var(--white)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", 
            gap: "24px" 
          }}>
            {distribuidores.map((dist, index) => (
              <div key={index} style={{
                background: "var(--cream)",
                borderRadius: "16px",
                overflow: "hidden",
                transition: "transform 0.3s ease",
              }}>
                <div style={{ aspectRatio: "16/10", position: "relative" }}>
                  <Image src={dist.image} alt={dist.name} fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ padding: "24px" }}>
                  <h3 style={{ 
                    fontFamily: "'Syne', sans-serif", 
                    fontSize: "22px", 
                    fontWeight: 700,
                    marginBottom: "8px"
                  }}>{dist.name}</h3>
                  <p style={{ color: "var(--gray)", marginBottom: "4px" }}>{dist.city}</p>
                  <p style={{ 
                    color: "var(--accent-dark)", 
                    fontWeight: 600,
                    marginBottom: "16px"
                  }}>{dist.phone}</p>
                  <Link href="/contacto" style={{
                    background: "var(--black)",
                    color: "var(--white)",
                    padding: "10px 20px",
                    borderRadius: "100px",
                    fontSize: "14px",
                    fontWeight: 500,
                    textDecoration: "none",
                    display: "inline-block"
                  }}>Contactar</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
