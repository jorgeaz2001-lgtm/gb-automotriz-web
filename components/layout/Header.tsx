"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

const brands = [
  { name: "Ford", logo: "/images/brands/ford.png" },
  { name: "Lincoln", logo: "/images/brands/lincoln.png" },
  { name: "Mazda", logo: "/images/brands/mazda.png" },
  { name: "Peugeot", logo: "/images/brands/peugeot.png" },
  { name: "Ram", logo: "/images/brands/ram.png" },
  { name: "Dodge", logo: "/images/brands/dodge.png" },
  { name: "Jeep", logo: "/images/brands/jeep.png" },
  { name: "Fiat", logo: "/images/brands/fiat.png" },
  { name: "DFAC", logo: "/images/brands/dfac.png" },
  { name: "Jetour", logo: "/images/brands/jetour.png" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* Main navigation */}
      <div className={styles.mainNav}>
        <div className={styles.container}>
          <div className={styles.navWrapper}>
            {/* Logo */}
            <Link href="/" className={styles.logo}>
              <Image 
                src="/images/logo.png" 
                alt="GB Automotriz" 
                width={160} 
                height={50}
                priority
              />
            </Link>

            {/* Desktop menu */}
            <nav className={styles.desktopNav}>
              <Link href="/" className={styles.navLink}>Inicio</Link>
              
              {/* Distribuidores dropdown */}
              <div 
                className={styles.dropdown}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className={`${styles.navLink} ${styles.dropdownToggle}`}>
                  Distribuidores
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="12" 
                    height="12" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className={dropdownOpen ? styles.rotated : ''}
                  >
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className={styles.dropdownMenu}>
                    <div className={styles.brandsGrid}>
                      {brands.map((brand) => (
                        <Link 
                          key={brand.name}
                          href={`/brand/${brand.name.toLowerCase().replace(/\s+/g, '-')}`}
                          className={styles.brandLink}
                        >
                          <div className={styles.brandLogo}>
                            <Image 
                              src={brand.logo} 
                              alt={brand.name}
                              width={80}
                              height={40}
                            />
                          </div>
                          <span>{brand.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link href="/seminuevos" className={styles.navLink}>Seminuevos</Link>
              <Link href="/our-services" className={styles.navLink}>Servicio</Link>
              <Link href="/about-us" className={styles.navLink}>Nosotros</Link>
              <Link href="/contacts" className={styles.contactBtn}>Contáctanos</Link>
            </nav>

            {/* Mobile menu button */}
            <button 
              className={styles.mobileMenuBtn}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={mobileMenuOpen ? styles.open : ''}></span>
              <span className={mobileMenuOpen ? styles.open : ''}></span>
              <span className={mobileMenuOpen ? styles.open : ''}></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.container}>
            <nav className={styles.mobileNav}>
              <Link href="/" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Inicio</Link>
              <Link href="/distribuidores" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Distribuidores</Link>
              <Link href="/seminuevos" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Seminuevos</Link>
              <Link href="/our-services" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Servicio</Link>
              <Link href="/about-us" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Nosotros</Link>
              <Link href="/contacts" className={styles.mobileContactBtn} onClick={() => setMobileMenuOpen(false)}>Contáctanos</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
