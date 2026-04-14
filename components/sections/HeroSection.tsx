 "use client";

import Link from "next/link";
import { useEffect, useState, type CSSProperties } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import styles from "@/components/sections/HeroSection.module.css";

type HeroSectionProps = {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  videoUrl?: string;
  videoPoster?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
};

export function HeroSection({
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  videoUrl,
  videoPoster,
  secondaryCtaLabel,
  secondaryCtaHref
}: HeroSectionProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const distance = Math.max(window.innerHeight * 0.75, 1);
      const rawProgress = window.scrollY / distance;
      const next = Math.min(Math.max(rawProgress, 0), 0.9);
      setScrollProgress(next);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cinematicStyle = {
    "--scroll-progress": scrollProgress
  } as CSSProperties;

  if (videoUrl) {
    return (
      <section className={`${styles.hero} ${styles.heroCinematic}`} style={cinematicStyle}>
        <div className={styles.cinematicFrame}>
          <video
            className={styles.cinematicVideo}
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            poster={videoPoster}
            preload="metadata"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>

          <div className={styles.overlay} />
          <div className={styles.whiteWash} />

          <div className={styles.cinematicContent}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <div className={styles.cinematicActions}>
              {ctaHref.startsWith("http") ? (
                <a
                  className={`${styles.heroButton} ${styles.heroButtonPrimary}`}
                  href={ctaHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  {ctaLabel}
                </a>
              ) : (
                <Link className={`${styles.heroButton} ${styles.heroButtonPrimary}`} href={ctaHref}>
                  {ctaLabel}
                </Link>
              )}
              {secondaryCtaLabel && secondaryCtaHref ? (
                <Link className={`${styles.heroButton} ${styles.heroButtonSecondary}`} href={secondaryCtaHref}>
                  {secondaryCtaLabel}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <ButtonLink href={ctaHref} label={ctaLabel} external={ctaHref.startsWith("http")} />
      </div>
    </section>
  );
}
