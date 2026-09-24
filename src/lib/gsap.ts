import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export function revealScrollTrigger(
  vars: ScrollTrigger.Vars,
): ScrollTrigger.Vars {
  return {
    once: true,
    toggleActions: "play none none none",
    ...vars,
    invalidateOnRefresh: false,
    id: vars.id ?? "reveal",
  };
}

const revealClearProps = "opacity,visibility,transform";

export function revealFrom(
  targets: gsap.TweenTarget,
  vars: gsap.TweenVars,
  trigger: ScrollTrigger.Vars,
) {
  return gsap.from(targets, {
    ease: "power2.out",
    ...vars,
    immediateRender: false,
    overwrite: "auto",
    scrollTrigger: revealScrollTrigger(trigger),
    onComplete() {
      gsap.set(targets, { clearProps: revealClearProps });
      vars.onComplete?.call(this);
    },
  });
}

function collectRevealTargets(animation: gsap.core.Animation): Element[] {
  const tweens =
    "getChildren" in animation
      ? (animation as gsap.core.Timeline).getChildren(true, true, false)
      : [animation];

  return tweens.flatMap((tween) => {
    if (!("targets" in tween) || typeof tween.targets !== "function") {
      return [];
    }

    return tween.targets().filter((target: unknown): target is Element => {
      return target instanceof Element;
    });
  });
}

function isHeldInvisible(target: Element): boolean {
  if (!(target instanceof HTMLElement || target instanceof SVGElement)) {
    return false;
  }

  if (target.style.visibility === "hidden") {
    return true;
  }

  if (target.style.opacity === "") {
    return false;
  }

  const opacity = Number.parseFloat(target.style.opacity);
  return Number.isFinite(opacity) && opacity < 0.05;
}

function isElementInView(element: Element): boolean {
  const rect = element.getBoundingClientRect();
  const height = window.innerHeight || 1;

  return rect.bottom > height * 0.04 && rect.top < height * 0.96;
}

function clearRevealStyles(targets: Element[]) {
  if (targets.length === 0) {
    return;
  }

  gsap.set(targets, { clearProps: revealClearProps });
}

export function releaseStuckReveals() {
  ScrollTrigger.getAll().forEach((trigger) => {
    const id = String(trigger.vars.id ?? "");

    if (!id.startsWith("reveal")) {
      return;
    }

    const animation = trigger.animation;

    if (!animation) {
      return;
    }

    const targets = collectRevealTargets(animation);
    const hidden = targets.filter(isHeldInvisible);

    if (hidden.length === 0) {
      return;
    }

    const triggerEl = trigger.trigger;
    const inView = triggerEl instanceof Element && isElementInView(triggerEl);
    const playing = animation.isActive() && animation.progress() < 1;

    if (playing) {
      return;
    }

    const scroller =
      trigger.scroller instanceof HTMLElement ? trigger.scroller : window;
    const maxScroll = ScrollTrigger.maxScroll(scroller);
    const unreachable =
      typeof trigger.start === "number" && trigger.start > maxScroll + 1;
    const shouldShow =
      inView ||
      unreachable ||
      trigger.progress > 0 ||
      animation.progress() > 0;

    if (!shouldShow) {
      return;
    }

    if (animation.progress() < 1) {
      animation.progress(1);
    }

    animation.pause();
    clearRevealStyles(targets);
  });
}

function settleRevealAnimations() {
  const hash = window.location.hash.slice(1);
  const target = hash ? document.getElementById(hash) : null;

  ScrollTrigger.getAll().forEach((trigger) => {
    const id = String(trigger.vars.id ?? "");

    if (!id.startsWith("reveal")) {
      return;
    }

    const animation = trigger.animation;

    if (!animation) {
      return;
    }

    const triggerEl = trigger.trigger;
    const isTarget =
      target instanceof HTMLElement &&
      triggerEl instanceof Element &&
      (triggerEl === target ||
        target.contains(triggerEl) ||
        triggerEl.contains(target));

    if (isTarget || trigger.progress > 0 || animation.progress() > 0) {
      if (animation.progress() < 1) {
        animation.progress(1);
      }
    }
  });

  releaseStuckReveals();
}

if (typeof window !== "undefined") {
  let releaseTimer = 0;

  const scheduleRelease = () => {
    requestAnimationFrame(releaseStuckReveals);
    window.clearTimeout(releaseTimer);
    releaseTimer = window.setTimeout(releaseStuckReveals, 120);
  };

  window.addEventListener("hashchange", () => {
    requestAnimationFrame(settleRevealAnimations);
  });
  window.addEventListener("load", scheduleRelease);
  ScrollTrigger.addEventListener("refresh", scheduleRelease);
  ScrollTrigger.addEventListener("scrollEnd", scheduleRelease);
}

export { gsap, ScrollTrigger, SplitText, useGSAP };
