import Image from "next/image";
import styles from "@/components/sections/ProcessSteps.module.css";

type ProcessStep = {
  icon: string;
  title: string;
  body: string;
};

type ProcessStepsProps = {
  heading: string;
  body: string;
  steps: ProcessStep[];
};

export function ProcessSteps({ heading, body, steps }: ProcessStepsProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2>{heading}</h2>
        <p className={styles.body}>{body}</p>
        <div className={styles.grid}>
          {steps.map((step) => (
            <article key={step.title} className={styles.card}>
              <Image src={step.icon} alt="" width={40} height={40} />
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
