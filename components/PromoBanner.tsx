"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./PromoBanner.module.css";

const banners = [
  { id: 1, image: "/images/banners/banner-1.png", link: "/marcas/ford" },
  { id: 11, image: "/images/banners/banner-11.png", link: "/marcas/stellantis" },
  { id: 3, image: "/images/banners/banner-3.png", link: "/marcas/ford" },
  { id: 12, image: "/images/banners/banner-12.png", link: "/marcas/stellantis" },
  { id: 5, image: "/images/banners/banner-5.png", link: "/marcas/ford" },
  { id: 13, image: "/images/banners/banner-13.png", link: "/marcas/stellantis" },
  { id: 7, image: "/images/banners/banner-7.png", link: "/marcas/ford" },
  { id: 14, image: "/images/banners/banner-14.png", link: "/marcas/stellantis" },
  { id: 9, image: "/images/banners/banner-9.png", link: "/marcas/ford" },
  { id: 15, image: "/images/banners/banner-15.png", link: "/marcas/stellantis" },
  { id: 2, image: "/images/banners/banner-2.png", link: "/marcas/ford" },
  { id: 4, image: "/images/banners/banner-4.png", link: "/marcas/ford" },
  { id: 6, image: "/images/banners/banner-6.png", link: "/marcas/ford" },
  { id: 8, image: "/images/banners/banner-8.png", link: "/marcas/ford" },
];

export default function PromoBanner() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) => {
      if (newDirection === 1) {
        return prev === banners.length - 1 ? 0 : prev + 1;
      }
      return prev === 0 ? banners.length - 1 : prev - 1;
    });
  }, []);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [paginate]);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 80 : -80,
      opacity: 0,
      scale: 1.04,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 80 : -80,
      opacity: 0,
      scale: 0.98,
    }),
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Carousel */}
        <div className={styles.carousel}>
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={styles.slide}
            >
              <Link href={banners[current].link} className={styles.slideLink}>
                <Image
                  src={banners[current].image}
                  alt={`Promoción ${current + 1}`}
                  fill
                  className={styles.bannerImage}
                  priority
                />
              </Link>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <button
            type="button"
            className={`${styles.navBtn} ${styles.navBtnLeft}`}
            onClick={() => paginate(-1)}
            aria-label="Anterior"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            type="button"
            className={`${styles.navBtn} ${styles.navBtnRight}`}
            onClick={() => paginate(1)}
            aria-label="Siguiente"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots */}
        <div className={styles.dots}>
          {banners.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`${styles.dot} ${index === current ? styles.dotActive : ""}`}
              onClick={() => goTo(index)}
              aria-label={`Ir a promoción ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
