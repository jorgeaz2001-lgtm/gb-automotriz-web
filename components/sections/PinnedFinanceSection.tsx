"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import styles from "@/components/sections/PinnedFinanceSection.module.css";

type FinanceItem = {
  label: string;
  title: string;
  description: string;
  mediaType: string;
  mediaUrl: string;
  metric: string;
};

type PinnedFinanceSectionProps = {
  eyebrow: string;
  heading: string;
  summary: string;
  items: FinanceItem[];
};

export function PinnedFinanceSection({ eyebrow, heading, summary, items }: PinnedFinanceSectionProps) {
  const itemRefs = useRef<Array<HTMLElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  const activeItem = useMemo(() => items[activeIndex] ?? items[0], [items, activeIndex]);

  useEffect(() => {
    const onResize = () => {
      setIsDesktop(window.innerWidth > 980);
    };

    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!isDesktop || items.length === 0) {
      return;
    }

    let frame = 0;

    const updateActiveByViewportPosition = () => {
      frame = 0;
      const viewportAnchor = window.innerHeight * 0.48;
      let nextIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      itemRefs.current.forEach((node, index) => {
        if (!node) {
          return;
        }

        const rect = node.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const distance = Math.abs(center - viewportAnchor);
        if (distance < closestDistance) {
          closestDistance = distance;
          nextIndex = index;
        }
      });

      setActiveIndex((prev) => (prev === nextIndex ? prev : nextIndex));
    };

    const onScrollOrResize = () => {
      if (frame) {
        return;
      }
      frame = window.requestAnimationFrame(updateActiveByViewportPosition);
    };

    updateActiveByViewportPosition();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [isDesktop, items.length]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.leftRail}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h2>{heading}</h2>
          <p className={styles.summary}>{summary}</p>

          <div className={styles.activeInfo}>
            <p className={styles.activeLabel}>{activeItem.label}</p>
            <h3>{activeItem.title}</h3>
            <p>{activeItem.description}</p>
            <p className={styles.metric}>{activeItem.metric}</p>
          </div>
        </div>

        <div className={styles.rightRail}>
          {items.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <article
                key={item.title}
                ref={(node) => {
                  itemRefs.current[index] = node;
                }}
                className={`${styles.card} ${isActive ? styles.cardActive : ""}`}
                data-index={index}
              >
                <div className={styles.cardMedia}>
                  {item.mediaType === "video" ? (
                    <video autoPlay loop muted playsInline preload="metadata">
                      <source src={item.mediaUrl} type="video/mp4" />
                    </video>
                  ) : (
                    <Image src={item.mediaUrl} alt={item.title} width={1200} height={675} />
                  )}
                </div>

                <div className={styles.cardBody}>
                  <p className={styles.cardLabel}>{item.label}</p>
                  <div className={styles.cardTextSplit}>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
