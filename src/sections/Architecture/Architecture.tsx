import { useState, useRef } from "react";
import {
  architectureLayerAssets,
  architectureLayers,
  architectureStackOrder,
  architectureVisualMode,
  type ArchitectureLayerId,
} from "../../data/architecture";
import { useLocale } from "../../hooks/useLocale";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { revealFrom, useGSAP } from "../../lib/gsap";
import styles from "./Architecture.module.css";

export function Architecture() {
  const { locale, copy } = useLocale();
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [activeId, setActiveId] = useState<ArchitectureLayerId>(
    architectureLayers[0].id,
  );

  const activeLayer =
    architectureLayers.find((layer) => layer.id === activeId) ??
    architectureLayers[0];
  const activeCopy = copy.architecture.layers[activeLayer.id];

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
          '[data-arch="intro"]',
          { opacity: 0, y: 16, duration: 0.45, stagger: 0.07 },
          { ...enter, id: "reveal-arch-intro" },
        );

        revealFrom(
          '[data-arch="stage"]',
          { opacity: 0, y: 18, duration: 0.7 },
          { ...enter, start: "top 70%", id: "reveal-arch-stage" },
        );

        revealFrom(
          '[data-arch="layer"]',
          { opacity: 0, y: 12, duration: 0.4, stagger: 0.05 },
          { ...enter, start: "top 64%", id: "reveal-arch-layer" },
        );
      }
    },
    { scope: sectionRef, dependencies: [locale, reducedMotion] },
  );

  return (
    <section
      ref={sectionRef}
      id="architecture"
      className={styles.architecture}
      data-visual-mode={architectureVisualMode}
      aria-labelledby="architecture-title"
    >
      <div className={styles.intro}>
        <h2 id="architecture-title" className={styles.title} data-arch="intro">
          {copy.architecture.title}
        </h2>
        <p className={styles.lead} data-arch="intro">
          {copy.architecture.intro}
        </p>
      </div>

      <div className={styles.layout}>
        <div className={styles.stage} data-arch="stage">
          <div className={styles.frame}>
            <p className={styles.frameCode}>
              COMPONENT {activeLayer.index} / {activeLayer.code}
            </p>
            <div
              className={styles.stack}
              role="img"
              aria-label={copy.architecture.imageAlt}
            >
              {architectureStackOrder.map((layerId, index) => {
                const order = architectureLayers.findIndex(
                  (layer) => layer.id === layerId,
                );
                const activeOrder = architectureLayers.findIndex(
                  (layer) => layer.id === activeId,
                );
                const depth =
                  layerId === activeId
                    ? "active"
                    : order < activeOrder
                      ? "above"
                      : "below";

                return (
                  <img
                    key={layerId}
                    className={index === 0 ? styles.image : styles.layerImage}
                    src={architectureLayerAssets[layerId]}
                    alt=""
                    width={1586}
                    height={992}
                    data-layer={layerId}
                    data-depth={depth}
                    decoding="async"
                  />
                );
              })}
            </div>
          </div>
          <div className={styles.activeCard}>
            <p className={styles.activeIndex}>{activeLayer.index}</p>
            <div>
              <h3 className={styles.activeName}>{activeCopy.name}</h3>
              <p className={styles.activeBody}>{activeCopy.description}</p>
            </div>
          </div>
        </div>

        <ul className={styles.layers}>
          {architectureLayers.map((layer) => {
            const layerCopy = copy.architecture.layers[layer.id];
            const selected = layer.id === activeId;

            return (
              <li key={layer.id} data-arch="layer">
                <button
                  type="button"
                  className={styles.layer}
                  data-layer={layer.id}
                  data-active={selected ? "true" : "false"}
                  aria-current={selected ? "true" : undefined}
                  onClick={() => {
                    setActiveId(layer.id);
                  }}
                >
                  <span className={styles.layerIndex}>{layer.index}</span>
                  <span className={styles.layerCopy}>
                    <span className={styles.layerCode}>{layer.code}</span>
                    <span className={styles.layerName}>{layerCopy.name}</span>
                    <span className={styles.layerDescription}>
                      {layerCopy.description}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
