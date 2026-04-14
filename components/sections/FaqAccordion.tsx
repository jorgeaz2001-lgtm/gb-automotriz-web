"use client";

import { useState } from "react";
import styles from "@/components/sections/FaqAccordion.module.css";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  heading: string;
  items: FaqItem[];
};

export function FaqAccordion({ heading, items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2>{heading}</h2>
        <div className={styles.stack}>
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <article key={item.question} className={styles.item}>
                <button
                  type="button"
                  className={styles.trigger}
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex((prev) => (prev === index ? null : index))}
                >
                  {item.question}
                </button>
                {isOpen ? <p className={styles.answer}>{item.answer}</p> : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
