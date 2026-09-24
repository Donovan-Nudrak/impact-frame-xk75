import { useRef } from "react";
import keyboardManifesto from "../../assets/keyboard/xk75-manifesto-presence.png";
import { useLocale } from "../../hooks/useLocale";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { gsap, revealScrollTrigger, SplitText, useGSAP } from "../../lib/gsap";
import styles from "./Manifesto.module.css";

export function Manifesto() {
  const { locale, copy } = useLocale();
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const headline = headlineRef.current;
      const body = bodyRef.current;
      const visual = visualRef.current;

      if (!section || !headline || !body || !visual) {
        return;
      }

      if (reducedMotion) {
        return;
      }

      const scroll = revealScrollTrigger({
        trigger: section,
        start: "top 78%",
        id: "reveal-manifesto",
      });

      gsap.from(visual, {
        opacity: 0,
        duration: 0.9,
        delay: 0.12,
        ease: "power2.out",
        immediateRender: false,
        scrollTrigger: { ...scroll, start: "top 72%", id: "reveal-manifesto-visual" },
      });

      const headlineSplit = SplitText.create(headline, {
        type: "lines",
        aria: "auto",
        autoSplit: true,
        onSplit(self) {
          return gsap.from(self.lines, {
            y: 22,
            opacity: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.out",
            immediateRender: false,
            scrollTrigger: {
              ...scroll,
              start: "top 72%",
              id: "reveal-manifesto-headline",
            },
          });
        },
      });

      const bodySplit = SplitText.create(body, {
        type: "lines",
        aria: "auto",
        autoSplit: true,
        onSplit(self) {
          return gsap.from(self.lines, {
            y: 16,
            opacity: 0,
            duration: 0.45,
            delay: 0.16,
            stagger: 0.06,
            ease: "power2.out",
            immediateRender: false,
            scrollTrigger: {
              ...scroll,
              start: "top 72%",
              id: "reveal-manifesto-body",
            },
          });
        },
      });

      return () => {
        headlineSplit.revert();
        bodySplit.revert();
      };
    },
    { scope: sectionRef, dependencies: [locale, reducedMotion] },
  );

  return (
    <section
      ref={sectionRef}
      id="manifesto"
      className={styles.manifesto}
      aria-labelledby="manifesto-title"
    >
      <div className={styles.layout}>
        <div className={styles.copy} key={locale}>
          <h2
            id="manifesto-title"
            ref={headlineRef}
            className={styles.headline}
          >
            {copy.manifesto.headline}
          </h2>
          <p ref={bodyRef} className={styles.body}>
            {copy.manifesto.body}
          </p>
        </div>

        <div ref={visualRef} className={styles.visual}>
          <img
            className={styles.image}
            src={keyboardManifesto}
            alt={copy.manifesto.imageAlt}
            width={1585}
            height={992}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
