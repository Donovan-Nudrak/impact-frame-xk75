import { useRef } from "react";
import keyboardFinal from "../../assets/keyboard/xk75-final-assembled.png";
import { Button } from "../../components/Button/Button";
import { useLocale } from "../../hooks/useLocale";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { gsap, revealScrollTrigger, useGSAP } from "../../lib/gsap";
import styles from "./FinalStatement.module.css";

const HERO_HREF = "#hero";

export function FinalStatement() {
  const { locale, copy } = useLocale();
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (reducedMotion) {
        return;
      }

      const timeline = gsap.timeline({
        defaults: { ease: "power2.out", immediateRender: false },
        scrollTrigger: revealScrollTrigger({
          trigger: sectionRef.current,
          start: "top bottom",
          id: "reveal-final",
        }),
        onComplete() {
          const section = sectionRef.current;

          if (!section) {
            return;
          }

          gsap.set(section.querySelectorAll("[data-final]"), {
            clearProps: "opacity,visibility,transform",
          });
        },
      });

      timeline
        .from('[data-final="product"]', { opacity: 0, y: 28, duration: 0.8 }, 0)
        .from('[data-final="glow"]', { opacity: 0, duration: 0.9 }, 0.25)
        .from(
          '[data-final="copy"]',
          { opacity: 0, y: 16, duration: 0.5, stagger: 0.08 },
          0.32,
        );
    },
    { scope: sectionRef, dependencies: [locale, reducedMotion] },
  );

  return (
    <section
      ref={sectionRef}
      id="final-statement"
      className={styles.finalStatement}
      aria-labelledby="final-statement-title"
    >
      <div className={styles.layout}>
        <div className={styles.stage}>
          <div className={styles.glow} data-final="glow" aria-hidden="true" />
          <div className={styles.product} data-final="product">
            <img
              className={styles.image}
              src={keyboardFinal}
              alt={copy.finalStatement.imageAlt}
              width={1586}
              height={992}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <p
          id="final-statement-title"
          className={styles.signature}
          data-final="copy"
        >
          {copy.brand.mark} <span className={styles.slash}>//</span>{" "}
          {copy.brand.product}
        </p>
        <p className={styles.tagline} data-final="copy">
          {copy.finalStatement.tagline}
        </p>

        <div className={styles.actions} data-final="copy">
          <Button href={HERO_HREF}>
            {copy.finalStatement.ctaPrimary}
          </Button>
        </div>
      </div>
    </section>
  );
}
