"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  brandGroups,
  allCities,
  findNearestCity,
  getDealershipsByCity,
  getGroupByBrand,
  generateWhatsAppLink,
  type BrandGroup,
  type Dealership,
} from "@/lib/dealerships";
import styles from "./WhatsAppModal.module.css";

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedBrand?: string;
  preselectedVehicle?: string;
}

type Step = "location" | "brands" | "result";

export default function WhatsAppModal({
  isOpen,
  onClose,
  preselectedBrand,
  preselectedVehicle,
}: WhatsAppModalProps) {
  const [step, setStep] = useState<Step>("location");
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<BrandGroup | null>(null);
  const [selectedDealership, setSelectedDealership] = useState<Dealership | null>(null);
  const [detecting, setDetecting] = useState(false);
  const [geoError, setGeoError] = useState<string | null>(null);
  const [cityDealerships, setCityDealerships] = useState<
    { brand: BrandGroup; dealership: Dealership }[]
  >([]);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setStep("location");
      setSelectedCity(null);
      setSelectedBrand(null);
      setSelectedDealership(null);
      setGeoError(null);
      setCityDealerships([]);

      // If preselected brand only has one city, skip to result
      if (preselectedBrand) {
        const group = getGroupByBrand(preselectedBrand);
        if (group && group.dealerships.length === 1) {
          setSelectedBrand(group);
          setSelectedCity(group.dealerships[0].city);
          setSelectedDealership(group.dealerships[0]);
          setStep("result");
        }
      }
    }
  }, [isOpen, preselectedBrand]);

  const detectLocation = () => {
    setDetecting(true);
    setGeoError(null);

    if (!navigator.geolocation) {
      setGeoError("Tu navegador no soporta geolocalización.");
      setDetecting(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const nearest = findNearestCity(
          position.coords.latitude,
          position.coords.longitude
        );
        setDetecting(false);
        if (nearest) {
          handleCitySelect(nearest);
        } else {
          setGeoError("No pudimos detectar tu ubicación.");
        }
      },
      (err) => {
        setDetecting(false);
        if (err.code === 1) {
          setGeoError("Permiso de ubicación denegado. Selecciona tu ciudad manualmente.");
        } else {
          setGeoError("Error al detectar ubicación. Selecciona tu ciudad manualmente.");
        }
      },
      { timeout: 10000, enableHighAccuracy: false }
    );
  };

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    const dealerships = getDealershipsByCity(city);
    setCityDealerships(dealerships);

    // If preselected brand is available in this city, use it
    if (preselectedBrand) {
      const group = getGroupByBrand(preselectedBrand);
      const match = dealerships.find((d) => d.brand.name === group?.name);
      if (match) {
        setSelectedBrand(match.brand);
        setSelectedDealership(match.dealership);
        setStep("result");
        return;
      }
    }

    setStep("brands");
  };

  const handleBrandSelect = (brand: BrandGroup, dealership: Dealership) => {
    setSelectedBrand(brand);
    setSelectedDealership(dealership);
    setStep("result");
  };

  const handleBack = () => {
    if (step === "result") {
      if (preselectedBrand && cityDealerships.length === 1) {
        setStep("location");
      } else {
        setStep("brands");
      }
    } else if (step === "brands") {
      setStep("location");
    }
  };

  const whatsappLink = selectedDealership
    ? generateWhatsAppLink(
        selectedDealership.whatsapp,
        selectedBrand?.displayName || "",
        selectedCity || "",
        preselectedVehicle
      )
    : "";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className={styles.header}>
              {step !== "location" && (
                <button className={styles.backBtn} onClick={handleBack} aria-label="Atrás">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m15 18-6-6 6-6"/>
                  </svg>
                </button>
              )}
              <h2>
                {step === "location" && "¿Dónde te encuentras?"}
                {step === "brands" && `${selectedCity}`}
                {step === "result" && "¡Listo!"}
              </h2>
              <button className={styles.closeBtn} onClick={onClose} aria-label="Cerrar">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18"/>
                  <path d="m6 6 12 12"/>
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className={styles.body}>
              <AnimatePresence mode="wait">
                {/* STEP 1: Location */}
                {step === "location" && (
                  <motion.div
                    key="location"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className={styles.subtitle}>
                      Detectamos tu ubicación para enviarte al centro de venta más cercano.
                    </p>

                    <button
                      className={styles.detectBtn}
                      onClick={detectLocation}
                      disabled={detecting}
                    >
                      {detecting ? (
                        <>
                          <span className={styles.spinner} />
                          Detectando...
                        </>
                      ) : (
                        <>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"/>
                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                            <path d="M2 12h20"/>
                          </svg>
                          Usar mi ubicación
                        </>
                      )}
                    </button>

                    {geoError && <p className={styles.error}>{geoError}</p>}

                    <div className={styles.divider}>
                      <span>o selecciona tu ciudad</span>
                    </div>

                    <div className={styles.cityGrid}>
                      {allCities.map((city) => (
                        <button
                          key={city}
                          className={styles.cityBtn}
                          onClick={() => handleCitySelect(city)}
                        >
                          {city}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: Brands */}
                {step === "brands" && (
                  <motion.div
                    key="brands"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className={styles.subtitle}>
                      {preselectedVehicle
                        ? `${preselectedVehicle} — Selecciona la marca para contactar:`
                        : "Selecciona la marca que te interesa:"}
                    </p>

                    <div className={styles.brandList}>
                      {cityDealerships.map(({ brand, dealership }) => (
                        <button
                          key={brand.name}
                          className={styles.brandBtn}
                          onClick={() => handleBrandSelect(brand, dealership)}
                        >
                          <div className={styles.brandInfo}>
                            <strong>{brand.displayName}</strong>
                            <span>Tel: {dealership.phone}</span>
                          </div>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m9 18 6-6-6-6"/>
                          </svg>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: Result */}
                {step === "result" && selectedDealership && selectedBrand && (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className={styles.result}
                  >
                    <div className={styles.resultIcon}>
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>

                    <h3 className={styles.resultTitle}>
                      {preselectedVehicle || selectedBrand.displayName}
                    </h3>
                    <p className={styles.resultMeta}>
                      {selectedCity} — Tel: {selectedDealership.phone}
                    </p>

                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.whatsappBtn}
                    >
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Abrir WhatsApp
                    </a>

                    <p className={styles.resultNote}>
                      Se abrirá WhatsApp con un mensaje pre-escrito para {selectedBrand.displayName} en {selectedCity}.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
