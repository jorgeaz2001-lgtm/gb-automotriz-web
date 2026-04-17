"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

const brands = [
  { name: "Ford", logo: "/images/brands/ford.png", slug: "ford" },
  { name: "Lincoln", logo: "/images/brands/lincoln.png", slug: "lincoln" },
  { name: "Mazda", logo: "/images/brands/mazda.png", slug: "mazda" },
  { name: "Peugeot", logo: "/images/brands/peugeot.png", slug: "stellantis" },
  { name: "Ram", logo: "/images/brands/ram.png", slug: "stellantis" },
  { name: "Dodge", logo: "/images/brands/dodge.png", slug: "stellantis" },
  { name: "Jeep", logo: "/images/brands/jeep.png", slug: "stellantis" },
  { name: "Fiat", logo: "/images/brands/fiat.png", slug: "stellantis" },
  { name: "DFAC", logo: "/images/brands/dfac.png", slug: "dongfeng" },
  { name: "Jetour", logo: "/images/brands/jetour.png", slug: "jetour" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

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
                ref={dropdownRef}
                className={styles.dropdown}
              >
                <button 
                  type="button"
                  className={`${styles.navLink} ${styles.dropdownToggle}`}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  aria-expanded={dropdownOpen}
                >
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
                          href={`/distribuidores/${brand.slug}`}
                          className={styles.brandLink}
                          onClick={() => setDropdownOpen(false)}
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
              type="button"
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
