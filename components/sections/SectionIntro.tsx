import Image from "next/image";
import styles from "@/components/sections/SectionIntro.module.css";

type IntroStat = {
  icon: string;
  value: string;
  label: string;
};

type SectionIntroProps = {
  heading: string;
  body?: string;
  variant?: "stack" | "split";
  framed?: boolean;
  rightCards?: IntroStat[];
  compact?: boolean;
};

export function SectionIntro({
  heading,
  body,
  variant = "stack",
  framed = false,
  rightCards,
  compact = false
}: SectionIntroProps) {
  if (variant === "split" && rightCards && rightCards.length > 0) {
    return (
      <section className={`${styles.section} ${framed ? styles.framed : ""} ${compact ? styles.compact : ""}`}>
        <div
          className={`${styles.container} ${styles.split} ${framed ? styles.frameCard : ""}`}
        >
          <div className={styles.splitPrimary}>
            <h2>{heading}</h2>
            {body ? <p>{body}</p> : null}
          </div>

          <div className={styles.statsRail}>
            {rightCards.map((card) => (
              <article key={card.value} className={styles.statCard}>
                <Image src={card.icon} alt="" width={28} height={28} className={styles.statIcon} />
                <h3 className={styles.statValue}>{card.value}</h3>
                <p className={styles.statLabel}>{card.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`${styles.section} ${framed ? styles.framed : ""} ${compact ? styles.compact : ""}`}>
      <div
        className={`${styles.container} ${variant === "split" ? styles.split : ""} ${
          framed ? styles.frameCard : ""
        }`}
      >
        <h2>{heading}</h2>
        {body ? <p>{body}</p> : null}
      </div>
    </section>
  );
}
