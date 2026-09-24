import { afterEach, describe, expect, it, vi } from "vitest";

vi.hoisted(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }),
  });
});

import { gsap, releaseStuckReveals, ScrollTrigger } from "./gsap";

function rect(
  top: number,
  bottom: number,
): DOMRect {
  return {
    top,
    bottom,
    left: 0,
    right: 800,
    width: 800,
    height: bottom - top,
    x: 0,
    y: top,
    toJSON() {
      return {};
    },
  } as DOMRect;
}

describe("releaseStuckReveals", () => {
  afterEach(() => {
    ScrollTrigger.getAll().forEach((trigger) => {
      trigger.kill();
    });
    document.body.replaceChildren();
  });

  it("restores a reveal left at opacity 0 while its section is on screen", () => {
    document.body.innerHTML =
      '<section id="final-statement"><p data-final="copy">Cierre</p></section>';
    const section = document.getElementById("final-statement");
    const copy = section?.querySelector("p");

    if (!section || !copy) {
      throw new Error("missing fixture");
    }

    section.getBoundingClientRect = () => rect(120, 640);
    gsap.set(copy, { opacity: 0 });

    const tween = gsap.from(copy, {
      opacity: 0,
      duration: 1,
      paused: true,
      immediateRender: false,
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        once: true,
        id: "reveal-final-test",
        toggleActions: "play none none none",
      },
    });

    gsap.set(copy, { opacity: 0 });
    tween.pause(0);

    releaseStuckReveals();

    expect(copy.style.opacity).not.toBe("0");
    expect(Number.parseFloat(getComputedStyle(copy).opacity)).toBeGreaterThan(0.9);
  });
});
