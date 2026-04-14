import Image from "next/image";
import styles from "@/components/sections/SplitFeatureSection.module.css";

type FeatureItem = {
  title: string;
  body: string;
  imageUrl: string;
};

type SplitFeatureSectionProps = {
  heading: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  items: FeatureItem[];
};

export function SplitFeatureSection({
  heading,
  body,
  items
}: SplitFeatureSectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.copy}>
          <h2>{heading}</h2>
          <p>{body}</p>
        </div>

        <div className={styles.list}>
          {items.map((item, index) => (
            <article key={item.title} className={styles.card}>
              <div className={styles.cardMedia}>
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={656}
                  height={360}
                  sizes="(max-width: 1100px) 100vw, 33vw"
                />
                <div className={styles.cardOverlay}>
                  <span className={styles.cardIndex}>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
