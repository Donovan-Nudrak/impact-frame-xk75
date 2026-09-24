import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { Bluetooth, Cable, Radio } from "lucide-react";
import keyboardHero from "../../assets/keyboard/xk75-hero-assembled.png";
import hostMonitor from "../../assets/diagrams/Host.png";
import {
  connectionModes,
  getConnectionMode,
  performanceVisualMode,
  type ConnectionModeId,
} from "../../data/performance";
import { useLocale } from "../../hooks/useLocale";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { gsap, revealFrom, ScrollTrigger, useGSAP } from "../../lib/gsap";
import {
  HorizontalTracks,
  VerticalTracks,
} from "./ConnectionDiagram";
import styles from "./Performance.module.css";

const modeIcons = {
  usbc: Cable,
  ghz24: Radio,
  bluetooth: Bluetooth,
} as const;

function visibleNode<T extends Element>(
  root: HTMLElement,
  selector: string,
): T | null {
  const nodes = [...root.querySelectorAll<T>(selector)];

  return (
    nodes.find((node) => {
      const svg = node.closest("svg");
      return svg !== null && getComputedStyle(svg).display !== "none";
    }) ?? null
  );
}

export function Performance() {
  const { locale, copy } = useLocale();
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const diagramRef = useRef<HTMLDivElement>(null);
  const signalTween = useRef<gsap.core.Timeline | null>(null);
  const enteredRef = useRef(false);
  const [activeId, setActiveId] = useState<ConnectionModeId>(
    connectionModes[0].id,
  );
  const activeIdRef = useRef(activeId);

  useEffect(() => {
    activeIdRef.current = activeId;
  }, [activeId]);

  const activeMode = getConnectionMode(activeId);
  const activeCopy = copy.performance.modes[activeId];

  const playConnection = useCallback(
    (modeId: ConnectionModeId) => {
      const diagram = diagramRef.current;

      if (!diagram) {
        return;
      }

      signalTween.current?.kill();
      signalTween.current = null;

      const mode = getConnectionMode(modeId);
      const track = visibleNode<SVGPathElement>(
        diagram,
        `[data-track="${modeId}"]`,
      );
      const signal = visibleNode<SVGCircleElement>(diagram, "[data-signal]");

      if (!track || !signal) {
        return;
      }

      const length = track.getTotalLength();
      const start = track.getPointAtLength(0);
      const end = track.getPointAtLength(length);

      if (mode.signal === "arc") {
        gsap.set(signal, { attr: { cx: start.x, cy: start.y }, autoAlpha: 1 });

        if (reducedMotion) {
          return;
        }

        const waves = [...diagram.querySelectorAll(`[data-arc="${modeId}"] path`)].filter(
          (node) => {
            const svg = node.closest("svg");
            return (
              svg !== null &&
              getComputedStyle(svg).display !== "none" &&
              node.getClientRects().length > 0
            );
          },
        );

        if (waves.length > 0) {
          signalTween.current = gsap.timeline({
            onComplete: () => {
              signalTween.current = null;
            },
          });
          signalTween.current.fromTo(
            waves,
            { autoAlpha: 0.2 },
            { autoAlpha: 1, duration: 0.28, stagger: 0.08, ease: "power2.out" },
          );
        }

        return;
      }

      if (reducedMotion) {
        gsap.set(signal, { attr: { cx: end.x, cy: end.y }, autoAlpha: 0 });
        return;
      }

      gsap.set(signal, { attr: { cx: start.x, cy: start.y }, autoAlpha: 1 });

      const timeline = gsap.timeline({
        defaults: { ease: "power2.out" },
        onComplete: () => {
          gsap.set(diagram.querySelectorAll("[data-signal]"), { autoAlpha: 0 });
          signalTween.current = null;
        },
      });
      signalTween.current = timeline;

      if (mode.signal === "continuous") {
        timeline.fromTo(
          track,
          { strokeDasharray: length, strokeDashoffset: length },
          {
            strokeDashoffset: 0,
            duration: 0.42,
            onComplete: () => {
              gsap.set(track, {
                clearProps: "strokeDasharray,strokeDashoffset",
              });
            },
          },
        );
      } else {
        const extraSelector =
          mode.signal === "pulse"
            ? `[data-pulse="${modeId}"] circle`
            : `[data-arc="${modeId}"] path`;
        const extras = [...diagram.querySelectorAll(extraSelector)].filter(
          (node) => {
            const svg = node.closest("svg");
            return (
              svg !== null &&
              getComputedStyle(svg).display !== "none" &&
              node.getClientRects().length > 0
            );
          },
        );

        if (extras.length > 0) {
          timeline.fromTo(
            extras,
            { autoAlpha: 0 },
            { autoAlpha: 1, duration: 0.22, stagger: 0.07 },
          );
        }
      }

      const proxy = { t: 0 };
      timeline.to(
        proxy,
        {
          t: 1,
          duration: 0.7,
          ease: "power2.inOut",
          onUpdate: () => {
            const point = track.getPointAtLength(proxy.t * length);
            gsap.set(signal, { attr: { cx: point.x, cy: point.y } });
          },
        },
        0.08,
      );
      timeline.to(signal, { autoAlpha: 0, duration: 0.22 }, ">-0.04");
    },
    [reducedMotion],
  );

  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section) {
        return;
      }

      enteredRef.current = false;

      if (!reducedMotion) {
        const enter = {
          trigger: section,
          start: "top 76%",
        };

        revealFrom(
          '[data-performance="intro"]',
          { opacity: 0, y: 16, duration: 0.45, stagger: 0.07 },
          { ...enter, id: "reveal-performance-intro" },
        );

        revealFrom(
          '[data-performance="stage"]',
          { opacity: 0, y: 18, duration: 0.6 },
          { ...enter, start: "top 70%", id: "reveal-performance-stage" },
        );
      }

      const onEnter = ScrollTrigger.create({
        trigger: section,
        start: "top 72%",
        once: true,
        onEnter: () => {
          enteredRef.current = true;
          playConnection(activeIdRef.current);
        },
      });

      if (reducedMotion) {
        enteredRef.current = true;
        playConnection(activeIdRef.current);
      }

      return () => {
        onEnter.kill();
        signalTween.current?.kill();
        signalTween.current = null;
      };
    },
    { scope: sectionRef, dependencies: [locale, reducedMotion, playConnection] },
  );

  useEffect(() => {
    if (!enteredRef.current) {
      return;
    }

    playConnection(activeId);

    return () => {
      signalTween.current?.kill();
    };
  }, [activeId, playConnection]);

  const onModeKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    const last = connectionModes.length - 1;
    let nextIndex = index;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextIndex = index === last ? 0 : index + 1;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      nextIndex = index === 0 ? last : index - 1;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = last;
    } else {
      return;
    }

    event.preventDefault();
    const nextId = connectionModes[nextIndex].id;
    setActiveId(nextId);
    sectionRef.current
      ?.querySelector<HTMLButtonElement>(`[data-mode="${nextId}"]`)
      ?.focus();
  };

  return (
    <section
      ref={sectionRef}
      id="performance"
      className={styles.performance}
      data-visual-mode={performanceVisualMode}
      aria-labelledby="performance-title"
    >
      <header className={styles.intro}>
        <h2
          id="performance-title"
          className={styles.title}
          data-performance="intro"
        >
          {copy.performance.title}
        </h2>
        <p className={styles.lead} data-performance="intro">
          {copy.performance.intro}
        </p>
      </header>

      <div className={styles.layout} data-performance="stage">
        <div
          ref={diagramRef}
          className={styles.diagram}
          data-mode={activeId}
        >
          <figure className={styles.keyboard}>
            <p className={styles.deviceCode}>XK75</p>
            <img
              className={styles.keyboardImage}
              src={keyboardHero}
              alt={copy.performance.keyboardAlt}
              width={1586}
              height={992}
              loading="lazy"
              decoding="async"
            />
          </figure>

          <HorizontalTracks className={styles.trackHorizontal} />
          <VerticalTracks className={styles.trackVertical} />

          <figure className={styles.host}>
            <p className={styles.deviceCode}>{copy.performance.hostLabel}</p>
            <img
              className={styles.hostGlyph}
              src={hostMonitor}
              alt={copy.performance.hostAlt}
              width={1536}
              height={1024}
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>

        <div
          className={styles.modes}
          role="radiogroup"
          aria-label={copy.performance.modeLabel}
        >
          {connectionModes.map((mode, index) => {
            const Icon = modeIcons[mode.id];
            const selected = mode.id === activeId;
            const modeCopy = copy.performance.modes[mode.id];

            return (
              <button
                key={mode.id}
                type="button"
                role="radio"
                className={styles.mode}
                data-mode={mode.id}
                data-active={selected ? "true" : "false"}
                aria-checked={selected}
                tabIndex={selected ? 0 : -1}
                onClick={() => {
                  setActiveId(mode.id);
                }}
                onKeyDown={(event) => {
                  onModeKeyDown(event, index);
                }}
              >
                <Icon className={styles.modeIcon} aria-hidden="true" />
                <span className={styles.modeIndex}>{mode.index}</span>
                <span className={styles.modeCopy}>
                  <span className={styles.modeCode}>{mode.code}</span>
                  <span className={styles.modeName}>{modeCopy.name}</span>
                </span>
              </button>
            );
          })}
        </div>

        <div className={styles.detail}>
          <p className={styles.detailIndex}>
            {activeMode.index} / {activeMode.code}
          </p>
          <h3 className={styles.detailName}>{activeCopy.name}</h3>
          <p className={styles.detailBody}>{activeCopy.description}</p>
        </div>
      </div>
    </section>
  );
}
