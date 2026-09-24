import { useEffect, type RefObject } from "react";
import { gsap } from "../lib/gsap";

type PointerParallaxOptions = {
  enabled: boolean;
  maxTilt?: number;
};

export function usePointerParallax(
  targetRef: RefObject<HTMLElement | null>,
  scopeRef: RefObject<HTMLElement | null>,
  { enabled, maxTilt = 4.5 }: PointerParallaxOptions,
): void {
  useEffect(() => {
    const target = targetRef.current;
    const scope = scopeRef.current;

    if (!enabled || !target || !scope) {
      return;
    }

    const pointerQuery = window.matchMedia("(pointer: fine) and (hover: hover)");
    let disposeInteraction: (() => void) | undefined;

    const bindInteraction = () => {
      disposeInteraction?.();
      disposeInteraction = undefined;
      gsap.set(target, { rotationX: 0, rotationY: 0 });

      if (!pointerQuery.matches) {
        return;
      }

      gsap.set(target, {
        transformPerspective: 1200,
        transformStyle: "preserve-3d",
      });

      const tiltX = gsap.quickTo(target, "rotationX", {
        duration: 0.45,
        ease: "power2.out",
      });
      const tiltY = gsap.quickTo(target, "rotationY", {
        duration: 0.45,
        ease: "power2.out",
      });

      const onMove = (event: PointerEvent) => {
        const rect = scope.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        tiltX(-y * maxTilt * 2);
        tiltY(x * maxTilt * 2);
      };

      const reset = () => {
        tiltX(0);
        tiltY(0);
      };

      scope.addEventListener("pointermove", onMove);
      scope.addEventListener("pointerleave", reset);

      disposeInteraction = () => {
        scope.removeEventListener("pointermove", onMove);
        scope.removeEventListener("pointerleave", reset);
        gsap.killTweensOf(target, "rotationX,rotationY");
        gsap.set(target, { rotationX: 0, rotationY: 0 });
      };
    };

    bindInteraction();
    pointerQuery.addEventListener("change", bindInteraction);

    return () => {
      pointerQuery.removeEventListener("change", bindInteraction);
      disposeInteraction?.();
    };
  }, [enabled, maxTilt, scopeRef, targetRef]);
}
