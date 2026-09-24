import { useId, useRef, useState, type FormEvent } from "react";
import { Button } from "../../components/Button/Button";
import { useLocale } from "../../hooks/useLocale";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { revealFrom, useGSAP } from "../../lib/gsap";
import styles from "./Reserve.module.css";

const ARCHITECTURE_HREF = "#architecture";

type FieldErrors = {
  name?: string;
  email?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function Reserve() {
  const { locale, copy } = useLocale();
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const nameErrorId = useId();
  const emailErrorId = useId();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section || reducedMotion) {
        return;
      }

      revealFrom(
        '[data-reserve="copy"]',
        { opacity: 0, y: 16, duration: 0.45, stagger: 0.07 },
        { trigger: section, start: "top 76%", id: "reveal-reserve-copy" },
      );

      revealFrom(
        '[data-reserve="panel"]',
        { opacity: 0, y: 14, duration: 0.5 },
        {
          trigger: section,
          start: "top 70%",
          id: "reveal-reserve-panel",
        },
      );
    },
    { scope: sectionRef, dependencies: [locale, reducedMotion] },
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: FieldErrors = {};
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName) {
      nextErrors.name = copy.reserve.nameRequired;
    }

    if (!trimmedEmail) {
      nextErrors.email = copy.reserve.emailRequired;
    } else if (!isValidEmail(trimmedEmail)) {
      nextErrors.email = copy.reserve.emailInvalid;
    }

    setErrors(nextErrors);

    if (nextErrors.name) {
      nameRef.current?.focus();
      return;
    }

    if (nextErrors.email) {
      emailRef.current?.focus();
      return;
    }

    setSubmitted(true);
  };

  return (
    <section
      ref={sectionRef}
      id="reserve"
      className={styles.reserve}
      aria-labelledby="reserve-title"
    >
      <div className={styles.layout}>
        <div className={styles.copy}>
          <h2 id="reserve-title" className={styles.title} data-reserve="copy">
            {copy.reserve.title}
          </h2>
          <p className={styles.intro} data-reserve="copy">
            {copy.reserve.intro}
          </p>
          <p className={styles.notice} data-reserve="copy">
            {copy.reserve.notice}
          </p>
        </div>

        <div className={styles.panel} data-reserve="panel">
          {submitted ? (
            <div className={styles.result} role="status">
              <h3 className={styles.resultTitle}>{copy.reserve.resultTitle}</h3>
              <p className={styles.resultMessage}>
                {copy.reserve.resultMessage}
              </p>
              <Button href={ARCHITECTURE_HREF}>{copy.reserve.continue}</Button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="reserve-name">
                  {copy.reserve.nameLabel}
                </label>
                <input
                  ref={nameRef}
                  id="reserve-name"
                  className={styles.input}
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  aria-invalid={errors.name ? true : undefined}
                  aria-describedby={errors.name ? nameErrorId : undefined}
                  onChange={(event) => {
                    setName(event.target.value);
                    setErrors((current) => ({ ...current, name: undefined }));
                  }}
                />
                {errors.name ? (
                  <p id={nameErrorId} className={styles.error}>
                    {errors.name}
                  </p>
                ) : null}
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="reserve-email">
                  {copy.reserve.emailLabel}
                </label>
                <input
                  ref={emailRef}
                  id="reserve-email"
                  className={styles.input}
                  name="email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  value={email}
                  aria-invalid={errors.email ? true : undefined}
                  aria-describedby={errors.email ? emailErrorId : undefined}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setErrors((current) => ({ ...current, email: undefined }));
                  }}
                />
                {errors.email ? (
                  <p id={emailErrorId} className={styles.error}>
                    {errors.email}
                  </p>
                ) : null}
              </div>

              <Button type="submit">{copy.reserve.submit}</Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
