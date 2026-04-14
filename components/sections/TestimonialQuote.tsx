import styles from "@/components/sections/TestimonialQuote.module.css";

type TestimonialQuoteProps = {
  heading: string;
  quote: string;
  author: string;
};

export function TestimonialQuote({ heading, quote, author }: TestimonialQuoteProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2>{heading}</h2>
        <blockquote>{quote}</blockquote>
        <p className={styles.author}>- {author}</p>
      </div>
    </section>
  );
}
