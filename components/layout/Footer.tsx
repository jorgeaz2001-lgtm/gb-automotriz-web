"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          {/* Brand */}
          <div className={styles.footerBrand}>
            <Link href="/" className={styles.logo}>
              <Image
                src="/images/logo.png"
                alt="GB Automotriz"
                width={160}
                height={50}
              />
            </Link>
            <p>Grupo Líder Automotriz en el Noroeste de México. Más de 90 años de experiencia brindando confianza y excelencia.</p>
            <div className={styles.contactInfo}>
              <a href="tel:+5216444152100" className={styles.contactLink}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                +521 644 415 2100
              </a>
              <a href="mailto:atencion@gbautomotriz.mx" className={styles.contactLink}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                atencion@gbautomotriz.mx
              </a>
            </div>
          </div>
          
          {/* Navigation */}
          <div className={styles.footerCol}>
            <h4>Navegación</h4>
            <ul>
              <li><Link href="/">Inicio</Link></li>
              <li><Link href="/seminuevos">Seminuevos</Link></li>
              <li><Link href="/our-services">Servicios</Link></li>
              <li><Link href="/about-us">Nosotros</Link></li>
            </ul>
          </div>
          
          {/* Brands */}
          <div className={styles.footerCol}>
            <h4>Marcas</h4>
            <ul>
              <li><Link href="/brand/ford">Ford</Link></li>
              <li><Link href="/brand/lincoln">Lincoln</Link></li>
              <li><Link href="/brand/mazda">Mazda</Link></li>
              <li><Link href="/brand/peugeot">Peugeot</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className={styles.footerCol}>
            <h4>Contacto</h4>
            <ul>
              <li><Link href="/contacts">Contáctanos</Link></li>
              <li><Link href="#">Aviso de Privacidad</Link></li>
              <li><span>Navojoa, Sonora, México</span></li>
            </ul>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <span>©{currentYear} GB Automotriz. Todos los derechos reservados.</span>
          <span>Grupo Líder Automotriz</span>
        </div>
      </div>
    </footer>
  );
}
