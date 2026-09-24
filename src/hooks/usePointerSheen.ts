import { useEffect, type RefObject } from "react";

export function usePointerSheen(
  scopeRef: RefObject<HTMLElement | null>,
  enabled: boolean,
): void {
  useEffect(() => {
    const scope = scopeRef.current;

    if (!enabled || !scope) {
      return;
    }

    const pointerQuery = window.matchMedia("(pointer: fine) and (hover: hover)");
    let disposeInteraction: (() => void) | undefined;

    const bindInteraction = () => {
      disposeInteraction?.();
      disposeInteraction = undefined;

      const surfaces = [
        ...scope.querySelectorAll<HTMLElement>("[data-sheen]"),
      ];

      for (const surface of surfaces) {
        surface.style.removeProperty("--sheen-x");
        surface.style.removeProperty("--sheen-y");
      }

      if (!pointerQuery.matches) {
        return;
      }

      const onMove = (event: PointerEvent) => {
        for (const surface of surfaces) {
          const rect = surface.getBoundingClientRect();
          const x = ((event.clientX - rect.left) / rect.width) * 100;
          const y = ((event.clientY - rect.top) / rect.height) * 100;
          surface.style.setProperty("--sheen-x", `${x}%`);
          surface.style.setProperty("--sheen-y", `${y}%`);
        }
      };

      scope.addEventListener("pointermove", onMove);

      disposeInteraction = () => {
        scope.removeEventListener("pointermove", onMove);
        for (const surface of surfaces) {
          surface.style.removeProperty("--sheen-x");
          surface.style.removeProperty("--sheen-y");
        }
      };
    };

    bindInteraction();
    pointerQuery.addEventListener("change", bindInteraction);

    return () => {
      pointerQuery.removeEventListener("change", bindInteraction);
      disposeInteraction?.();
    };
  }, [enabled, scopeRef]);
}
