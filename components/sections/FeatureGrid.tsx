import styles from "@/components/sections/FeatureGrid.module.css";

type FeatureItem = {
  title: string;
  body: string;
};

type FeatureGridProps = {
  heading?: string;
  items: FeatureItem[];
};

export function FeatureGrid({ heading, items }: FeatureGridProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {heading ? <h2>{heading}</h2> : null}
        <div className={styles.grid}>
          {items.map((item) => (
            <article key={item.title} className={styles.card}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
