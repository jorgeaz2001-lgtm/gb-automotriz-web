import Image from "next/image";
import styles from "@/components/sections/IndustriesGrid.module.css";

type Industry = {
  label: string;
  icon: string;
};

type IndustriesGridProps = {
  heading: string;
  items: Industry[];
};

export function IndustriesGrid({ heading, items }: IndustriesGridProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2>{heading}</h2>
        <div className={styles.grid}>
          {items.map((item) => (
            <article key={item.label} className={styles.card}>
              <Image src={item.icon} alt="" width={44} height={44} />
              <h3>{item.label}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
