import Image from "next/image";
import styles from "@/components/sections/StatsGrid.module.css";

type Stat = {
  icon: string;
  value: string;
  label: string;
};

type StatsGridProps = {
  items: Stat[];
};

export function StatsGrid({ items }: StatsGridProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {items.map((item) => (
          <article key={item.value} className={styles.card}>
            <Image src={item.icon} alt="" width={34} height={34} />
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
