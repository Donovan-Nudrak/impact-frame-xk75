import { useRef } from "react";
import materialChassis from "../../assets/materials/xk75-macro-chassis.png";
import materialFinish from "../../assets/materials/xk75-macro-finish.png";
import materialFoam from "../../assets/materials/xk75-macro-foam.png";
import materialKeycaps from "../../assets/materials/xk75-macro-keycaps.png";
import materialKnob from "../../assets/materials/xk75-macro-knob.png";
import materialPlate from "../../assets/materials/xk75-macro-plate.png";
import { getMaterial, materialsVisualMode } from "../../data/materials";
import { useLocale } from "../../hooks/useLocale";
import { usePointerSheen } from "../../hooks/usePointerSheen";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { gsap, revealFrom, useGSAP } from "../../lib/gsap";
import styles from "./Materials.module.css";

export function Materials() {
  const { locale, copy } = useLocale();
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const aluminum = getMaterial("aluminum");
  const keycaps = getMaterial("keycaps");
  const plate = getMaterial("plate");
  const foam = getMaterial("foam");
  const knob = getMaterial("knob");
  const finish = getMaterial("finish");

  usePointerSheen(sectionRef, !reducedMotion);

  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section || reducedMotion) {
        return;
      }

      revealFrom(
        '[data-materials="intro"]',
        { opacity: 0, y: 16, duration: 0.45, stagger: 0.07 },
        { trigger: section, start: "top 76%", id: "reveal-materials-intro" },
      );

      const blocks = gsap.utils.toArray<HTMLElement>(
        section.querySelectorAll("[data-materials-block]"),
      );

      blocks.forEach((block, index) => {
        revealFrom(
          block.querySelectorAll("[data-enter]"),
          { opacity: 0, y: 18, duration: 0.55, stagger: 0.08 },
          {
            trigger: block,
            start: "top 78%",
            id: `reveal-materials-block-${index}`,
          },
        );
      });
    },
    { scope: sectionRef, dependencies: [locale, reducedMotion] },
  );

  return (
    <section
      ref={sectionRef}
      id="materials"
      className={styles.materials}
      data-visual-mode={materialsVisualMode}
      aria-labelledby="materials-title"
    >
      <header className={styles.intro}>
        <h2 id="materials-title" className={styles.title} data-materials="intro">
          {copy.materials.title}
        </h2>
        <p className={styles.lead} data-materials="intro">
          {copy.materials.intro}
        </p>
      </header>

      <article className={styles.chassis} data-materials-block>
        <div className={styles.copy} data-enter>
          <p className={styles.code}>
            {aluminum.index} / {aluminum.code}
          </p>
          <h3 className={styles.name}>{copy.materials.items.aluminum.name}</h3>
          <p className={styles.body}>
            {copy.materials.items.aluminum.description}
          </p>
        </div>
        <figure className={styles.photo} data-enter data-sheen>
          <p className={styles.frameCode}>
            {aluminum.index} / {aluminum.code}
          </p>
          <img
            className={styles.chassisImage}
            src={materialChassis}
            alt={copy.materials.items.aluminum.imageAlt}
            width={1536}
            height={1024}
            loading="lazy"
            decoding="async"
          />
        </figure>
      </article>

      <div className={styles.surfaces} data-materials-block>
        <figure className={styles.photo} data-enter data-sheen>
          <p className={styles.frameCode}>
            {keycaps.index} / {keycaps.code}
          </p>
          <img
            className={styles.keycapsImage}
            src={materialKeycaps}
            alt={copy.materials.items.keycaps.imageAlt}
            width={1536}
            height={1024}
            loading="lazy"
            decoding="async"
          />
        </figure>

        <div className={styles.surfacesSide}>
          <div className={styles.copy} data-enter>
            <p className={styles.code}>
              {keycaps.index} / {keycaps.code}
            </p>
            <h3 className={styles.name}>{copy.materials.items.keycaps.name}</h3>
            <p className={styles.body}>
              {copy.materials.items.keycaps.description}
            </p>
          </div>

          <figure className={`${styles.photo} ${styles.knobPhoto}`} data-enter data-sheen>
            <p className={styles.frameCode}>
              {knob.index} / {knob.code}
            </p>
            <img
              className={styles.knobImage}
              src={materialKnob}
              alt={copy.materials.items.knob.imageAlt}
              width={1536}
              height={1024}
              loading="lazy"
              decoding="async"
            />
          </figure>

          <div className={styles.copy} data-enter>
            <p className={styles.code}>
              {knob.index} / {knob.code}
            </p>
            <h3 className={styles.name}>{copy.materials.items.knob.name}</h3>
            <p className={styles.body}>{copy.materials.items.knob.description}</p>
          </div>
        </div>
      </div>

      <article className={styles.finish} data-materials-block>
        <figure className={styles.photo} data-enter data-sheen>
          <p className={styles.frameCode}>
            {finish.index} / {finish.code}
          </p>
          <img
            className={styles.finishImage}
            src={materialFinish}
            alt={copy.materials.items.finish.imageAlt}
            width={1536}
            height={1024}
            loading="lazy"
            decoding="async"
          />
        </figure>
        <div className={styles.copy} data-enter>
          <p className={styles.code}>
            {finish.index} / {finish.code}
          </p>
          <h3 className={styles.name}>{copy.materials.items.finish.name}</h3>
          <p className={styles.body}>{copy.materials.items.finish.description}</p>
        </div>
      </article>

      <div className={styles.construction} data-materials-block>
        <figure className={styles.detail} data-enter>
          <div className={styles.photo} data-sheen>
            <p className={styles.frameCode}>
              {plate.index} / {plate.code}
            </p>
            <img
              className={styles.plateImage}
              src={materialPlate}
              alt={copy.materials.items.plate.imageAlt}
              width={1536}
              height={1024}
              loading="lazy"
              decoding="async"
            />
          </div>
          <figcaption className={styles.copy}>
            <p className={styles.code}>
              {plate.index} / {plate.code}
            </p>
            <h3 className={styles.name}>{copy.materials.items.plate.name}</h3>
            <p className={styles.body}>{copy.materials.items.plate.description}</p>
          </figcaption>
        </figure>

        <figure className={styles.detail} data-enter>
          <div className={styles.photo} data-sheen>
            <p className={styles.frameCode}>
              {foam.index} / {foam.code}
            </p>
            <img
              className={styles.foamImage}
              src={materialFoam}
              alt={copy.materials.items.foam.imageAlt}
              width={1536}
              height={1024}
              loading="lazy"
              decoding="async"
            />
          </div>
          <figcaption className={styles.copy}>
            <p className={styles.code}>
              {foam.index} / {foam.code}
            </p>
            <h3 className={styles.name}>{copy.materials.items.foam.name}</h3>
            <p className={styles.body}>{copy.materials.items.foam.description}</p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
