import { useRef } from "react";
import keyboardPlan from "../../assets/keyboard/xk75-manifesto-presence.png";
import keyboardSide from "../../assets/keyboard/xk75-specs-side.png";
import {
  specificationGroups,
  specificationsVisualMode,
} from "../../data/specifications";
import { useLocale } from "../../hooks/useLocale";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { revealFrom, useGSAP } from "../../lib/gsap";
import styles from "./Specifications.module.css";

export function Specifications() {
  const { locale, copy } = useLocale();
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section || reducedMotion) {
        return;
      }

      const enter = {
        trigger: section,
        start: "top 76%",
      };

      revealFrom(
        '[data-specs="intro"]',
        { opacity: 0, y: 16, duration: 0.45, stagger: 0.07 },
        { ...enter, id: "reveal-specs-intro" },
      );

      revealFrom(
        '[data-specs="stage"]',
        { opacity: 0, y: 14, duration: 0.5, stagger: 0.08 },
        { ...enter, start: "top 70%", id: "reveal-specs-stage" },
      );
    },
    { scope: sectionRef, dependencies: [locale, reducedMotion] },
  );

  return (
    <section
      ref={sectionRef}
      id="specs"
      className={styles.specifications}
      data-visual-mode={specificationsVisualMode}
      aria-labelledby="specs-title"
    >
      <header className={styles.intro}>
        <h2 id="specs-title" className={styles.title} data-specs="intro">
          {copy.specifications.title}
        </h2>
      </header>

      <div className={styles.layout}>
        <figure className={styles.visual} data-specs="stage">
          <p className={styles.frameCode} aria-hidden="true">
            IF-XK75 / REV.01
          </p>
          <img
            className={styles.image}
            src={keyboardSide}
            alt={copy.specifications.imageAlt}
            width={1942}
            height={809}
            loading="lazy"
            decoding="async"
          />
          <img
            className={styles.plan}
            src={keyboardPlan}
            alt={copy.specifications.planAlt}
            width={1585}
            height={992}
            loading="lazy"
            decoding="async"
          />
        </figure>

        <div className={styles.sheet} data-specs="stage">
          {specificationGroups.map((group) => (
            <section
              key={group.id}
              className={styles.block}
              aria-labelledby={`specs-${group.id}`}
            >
              <h3 id={`specs-${group.id}`} className={styles.groupTitle}>
                {copy.specifications.groups[group.id].title}
              </h3>
              <dl className={styles.list}>
                {group.items.map((itemId) => {
                  const item = copy.specifications.items[itemId];

                  return (
                    <div key={itemId} className={styles.row}>
                      <dt className={styles.term}>{item.label}</dt>
                      <dd className={styles.value}>{item.value}</dd>
                    </div>
                  );
                })}
              </dl>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
