import { pageNavItems } from "../../data/navigation";
import { useLocale } from "../../hooks/useLocale";
import styles from "./Footer.module.css";

export function Footer() {
  const { copy } = useLocale();

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.identity}>
          <a className={styles.brand} href="#hero">
            {copy.brand.mark} <span className={styles.slash}>//</span>{" "}
            {copy.brand.product}
          </a>
          <p className={styles.tagline}>{copy.footer.tagline}</p>
        </div>

        <nav className={styles.nav} aria-label={copy.footer.navLabel}>
          {pageNavItems.map((item) => (
            <a key={item.key} className={styles.link} href={item.href}>
              {copy.nav[item.key]}
            </a>
          ))}
        </nav>
      </div>

      <div className={styles.bottom}>
        <p className={styles.notice}>{copy.footer.notice}</p>
        <p className={styles.rights}>
          <span className={styles.rightsMark}>{copy.brand.mark}</span>
          <span>© {copy.footer.year}</span>
          <span>{copy.footer.rights}</span>
          <span>{copy.footer.author}</span>
        </p>
      </div>
    </footer>
  );
}
