import Link from "next/link";
import styles from "@/components/ui/ButtonLink.module.css";

type ButtonLinkProps = {
  href: string;
  label: string;
  external?: boolean;
  variant?: "solid" | "outline";
};

export function ButtonLink({
  href,
  label,
  external = false,
  variant = "solid"
}: ButtonLinkProps) {
  const className = variant === "outline" ? `${styles.button} ${styles.outline}` : styles.button;

  if (external) {
    return (
      <a className={className} href={href} target="_blank" rel="noreferrer">
        {label}
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {label}
    </Link>
  );
}
