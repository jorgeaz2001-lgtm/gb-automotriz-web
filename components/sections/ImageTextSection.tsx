import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import styles from "@/components/sections/ImageTextSection.module.css";

type ImageTextSectionProps = {
  heading: string;
  body: string;
  listItems?: string[];
  image: string;
  imageAlt: string;
  ctaLabel?: string;
  ctaHref?: string;
  reverse?: boolean;
};

export function ImageTextSection({
  heading,
  body,
  listItems,
  image,
  imageAlt,
  ctaLabel,
  ctaHref,
  reverse = false
}: ImageTextSectionProps) {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} ${reverse ? styles.reverse : ""}`}>
        <div className={styles.media}>
          <Image src={image} alt={imageAlt} width={560} height={380} />
        </div>
        <div className={styles.copy}>
          <h2>{heading}</h2>
          <p>{body}</p>
          {listItems && listItems.length > 0 ? (
            <ol>
              {listItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          ) : null}
          {ctaLabel && ctaHref ? <ButtonLink href={ctaHref} label={ctaLabel} /> : null}
        </div>
      </div>
    </section>
  );
}
