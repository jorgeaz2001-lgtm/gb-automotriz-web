import styles from "@/components/sections/MapSection.module.css";

type MapSectionProps = {
  heading: string;
  body: string;
  embedUrl: string;
};

export function MapSection({ heading, body, embedUrl }: MapSectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.copy}>
          <h2>{heading}</h2>
          <p>{body}</p>
        </div>
        <div className={styles.mapWrap}>
          <iframe
            title="Ubicación BBC Factoring"
            src={embedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
