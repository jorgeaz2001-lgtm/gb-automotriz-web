import Image from "next/image";
import styles from "@/components/sections/BenefitsPanel.module.css";

type BenefitsPanelProps = {
  image: string;
  imageAlt: string;
  heading: string;
  points: string[];
};

export function BenefitsPanel({ image, imageAlt, heading, points }: BenefitsPanelProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageWrap}>
          <Image src={image} alt={imageAlt} width={560} height={380} />
        </div>
        <div className={styles.copy}>
          <h2>{heading}</h2>
          <ul>
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
