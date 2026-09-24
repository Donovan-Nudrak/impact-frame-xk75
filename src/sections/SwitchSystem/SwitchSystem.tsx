import { useCallback, useRef, useState } from "react";
import {
  switchParts,
  switchVisualMode,
  type SwitchPartId,
} from "../../data/switches";
import { useLocale } from "../../hooks/useLocale";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { gsap, revealFrom, useGSAP } from "../../lib/gsap";
import { SwitchDiagram } from "./SwitchDiagram";
import styles from "./SwitchSystem.module.css";

export function SwitchSystem() {
  const { locale, copy } = useLocale();
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const diagramRef = useRef<HTMLDivElement>(null);
  const pressTween = useRef<gsap.core.Timeline | null>(null);
  const pressRun = useRef(0);
  const releaseTimer = useRef<number>(0);
  const [activePartId, setActivePartId] = useState<SwitchPartId>(
    switchParts[0].id,
  );

  const restOffset = (part: Element) =>
    getComputedStyle(part).getPropertyValue("--rest-y").trim() || "0px";

  const clearPress = useCallback(() => {
    const diagram = diagramRef.current;

    if (!diagram) {
      return;
    }

    const parts = diagram.querySelectorAll("[data-part]");
    gsap.killTweensOf(parts);
    gsap.set(parts, { clearProps: "transform,opacity,visibility" });
    diagram.dataset.pressed = "false";
  }, []);

  const playPress = useCallback(() => {
    const diagram = diagramRef.current;
    const stage = stageRef.current;

    if (!diagram || !stage) {
      return;
    }

    const run = ++pressRun.current;
    window.clearTimeout(releaseTimer.current);
    pressTween.current?.kill();
    clearPress();

    if (reducedMotion) {
      diagram.dataset.pressed = "true";
      stage.dataset.pressed = "true";
      releaseTimer.current = window.setTimeout(() => {
        if (pressRun.current !== run) {
          return;
        }
        diagram.dataset.pressed = "false";
        stage.dataset.pressed = "false";
      }, 180);
      return;
    }

    const parts = [...diagram.querySelectorAll<HTMLElement>("[data-part]")];
    const spring = parts.find((part) => part.dataset.part === "spring");
    const contact = parts.find((part) => part.dataset.part === "contact");
    const others = parts.filter((part) => part !== spring);

    parts.forEach((part) => {
      gsap.set(part, {
        y: restOffset(part),
        scaleY: 1,
        transformOrigin: "50% 0%",
      });
    });

    stage.dataset.pressed = "true";

    pressTween.current = gsap.timeline({
      onComplete: () => {
        if (pressRun.current !== run) {
          return;
        }
        clearPress();
        stage.dataset.pressed = "false";
        pressTween.current = null;
      },
    });

    pressTween.current
      .to(others, { y: 0, duration: 0.16, ease: "power2.in" }, 0)
      .to(
        spring ?? [],
        { y: 0, scaleY: 0.55, duration: 0.16, ease: "power2.in" },
        0,
      )
      .to(contact ?? [], { opacity: 1, duration: 0.08, ease: "none" }, 0.06)
      .to(
        others,
        {
          y: (_index, part) => restOffset(part),
          duration: 0.26,
          ease: "power2.out",
        },
        0.22,
      )
      .to(
        spring ?? [],
        {
          y: () => (spring ? restOffset(spring) : 0),
          scaleY: 1,
          duration: 0.26,
          ease: "power2.out",
        },
        0.22,
      )
      .to(contact ?? [], { opacity: 0.45, duration: 0.16 }, 0.3);
  }, [clearPress, reducedMotion]);

  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section) {
        return;
      }

      if (!reducedMotion) {
        const enter = {
          trigger: section,
          start: "top 76%",
        };

        revealFrom(
          '[data-switch="intro"]',
          { opacity: 0, y: 16, duration: 0.45, stagger: 0.07 },
          { ...enter, id: "reveal-switch-intro" },
        );

        revealFrom(
          '[data-switch="stage"]',
          { opacity: 0, y: 18, duration: 0.65 },
          { ...enter, start: "top 70%", id: "reveal-switch-stage" },
        );

        revealFrom(
          '[data-switch="part"]',
          { opacity: 0, y: 10, duration: 0.4, stagger: 0.05 },
          { ...enter, start: "top 64%", id: "reveal-switch-part" },
        );
      }

      return () => {
        pressTween.current?.kill();
        pressTween.current = null;
        window.clearTimeout(releaseTimer.current);
      };
    },
    { scope: sectionRef, dependencies: [locale, reducedMotion] },
  );

  return (
    <section
      ref={sectionRef}
      id="switches"
      className={styles.switchSystem}
      data-visual-mode={switchVisualMode}
      aria-labelledby="switches-title"
    >
      <div className={styles.intro}>
        <h2 id="switches-title" className={styles.title} data-switch="intro">
          {copy.switchSystem.title}
        </h2>
        <p className={styles.lead} data-switch="intro">
          {copy.switchSystem.intro}
        </p>
      </div>

      <div className={styles.layout}>
        <div ref={stageRef} className={styles.stage} data-switch="stage">
          <p className={styles.frameCode}>MECHANISM / XK75</p>
          <div ref={diagramRef} className={styles.diagramSlot}>
            <SwitchDiagram />
          </div>
          <button
            type="button"
            className={styles.press}
            onClick={playPress}
          >
            {copy.switchSystem.press}
          </button>
          <p className={styles.hint}>{copy.switchSystem.hint}</p>
        </div>

        <ol className={styles.parts}>
          {switchParts.map((part) => {
            const partCopy = copy.switchSystem.parts[part.id];
            const selected = part.id === activePartId;

            return (
              <li key={part.id} data-switch="part">
                <button
                  type="button"
                  className={styles.part}
                  data-active={selected ? "true" : "false"}
                  aria-current={selected ? "true" : undefined}
                  onClick={() => {
                    setActivePartId(part.id);
                  }}
                >
                  <span className={styles.partIndex}>{part.index}</span>
                  <span className={styles.partBody}>
                    <span className={styles.partCode}>{part.code}</span>
                    <span className={styles.partName}>{partCopy.name}</span>
                    <span className={styles.partDescription}>
                      {partCopy.description}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
