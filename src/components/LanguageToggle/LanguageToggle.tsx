import { locales } from "../../data/copy";
import { useLocale } from "../../hooks/useLocale";
import styles from "./LanguageToggle.module.css";

export function LanguageToggle() {
  const { locale, copy, setLocale } = useLocale();

  return (
    <div className={styles.group} role="group" aria-label={copy.language.label}>
      {locales.map((code) => {
        const selected = code === locale;

        return (
          <button
            key={code}
            type="button"
            className={styles.option}
            aria-pressed={selected}
            onClick={() => {
              setLocale(code);
            }}
          >
            {copy.language[code]}
          </button>
        );
      })}
    </div>
  );
}
