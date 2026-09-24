import { useRef } from "react";
import { Cuboid, Keyboard, Unplug, Wifi } from "lucide-react";
import keyboardHero from "../../assets/keyboard/xk75-hero-assembled.png";
import { Button } from "../../components/Button/Button";
import type { HeroFeatureId } from "../../data/copy/types";
import { useLocale } from "../../hooks/useLocale";
import { usePointerParallax } from "../../hooks/usePointerParallax";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { gsap, useGSAP } from "../../lib/gsap";
import styles from "./Hero.module.css";

const RESERVE_HREF = "#reserve";

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function emphasizeTagline(tagline: string, accents: readonly string[]) {
  if (accents.length === 0) {
    return tagline;
  }

  const pattern = new RegExp(`(${accents.map(escapeRegExp).join("|")})`, "gi");

  return tagline.split(pattern).map((part, index) => {
    const isAccent = accents.some(
      (accent) => accent.toLowerCase() === part.toLowerCase(),
    );

    if (!isAccent) {
      return part;
    }

    return (
      <span key={`${part}-${index}`} className={styles.taglineAccent}>
        {part}
      </span>
    );
  });
}

const featureOrder: HeroFeatureId[] = [
  "form",
  "material",
  "hotswap",
  "connectivity",
];

const featureIcons = {
  form: Keyboard,
  material: Cuboid,
  hotswap: Unplug,
  connectivity: Wifi,
} as const;

export function Hero() {
  const { copy } = useLocale();
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const productRef = useRef<HTMLDivElement>(null);

  usePointerParallax(productRef, sectionRef, {
    enabled: !reducedMotion,
    maxTilt: 4.5,
  });

  useGSAP(
    () => {
      if (reducedMotion) {
        return;
      }

      const timeline = gsap.timeline({
        defaults: { ease: "power2.out" },
      });

      timeline
        .from(
          '[data-hero="copy"]',
          { opacity: 0, y: 16, duration: 0.45, stagger: 0.07 },
          0,
        )
        .from(
          '[data-hero="product"]',
          { opacity: 0, y: 28, duration: 0.85 },
          0.18,
        )
        .from('[data-hero="glow"]', { opacity: 0, duration: 0.9 }, 0.4)
        .from(
          '[data-hero="feature"]',
          { opacity: 0, y: 10, duration: 0.4, stagger: 0.06 },
          0.52,
        );
    },
    { scope: sectionRef, dependencies: [reducedMotion] },
  );

  return (
    <section
      ref={sectionRef}
      id="hero"
      className={styles.hero}
      aria-labelledby="hero-title"
    >
      <link rel="preload" as="image" href={keyboardHero} fetchPriority="high" />

      <div className={styles.layout}>
        <div className={styles.intro}>
          <div className={styles.copy}>
            <h1 id="hero-title" className={styles.title} data-hero="copy">
              <span className="sr-only">{copy.brand.name} </span>
              {copy.brand.product}
            </h1>
            <p className={styles.tagline} data-hero="copy">
              {emphasizeTagline(copy.brand.tagline, copy.brand.taglineAccents)}
            </p>
          </div>
          <div className={styles.cta} data-hero="copy">
            <Button href={RESERVE_HREF}>{copy.hero.cta}</Button>
          </div>

          <ul className={styles.features}>
            {featureOrder.map((id) => {
              const Icon = featureIcons[id];
              const feature = copy.hero.features[id];

              return (
                <li key={id} className={styles.feature} data-hero="feature">
                  <Icon className={styles.featureIcon} aria-hidden="true" />
                  <div>
                    <p className={styles.featureCode}>{feature.code}</p>
                    <p className={styles.featureLabel}>{feature.label}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={styles.stage}>
          <div className={styles.glow} data-hero="glow" aria-hidden="true" />
          <div ref={productRef} className={styles.product} data-hero="product">
            <img
              className={styles.image}
              src={keyboardHero}
              alt={copy.hero.imageAlt}
              width={1586}
              height={992}
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
