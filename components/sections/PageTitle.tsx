import styles from "@/components/sections/PageTitle.module.css";

type PageTitleProps = {
  title: string;
};

export function PageTitle({ title }: PageTitleProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1>{title}</h1>
      </div>
    </section>
  );
}
