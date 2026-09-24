/**
 * Inventario de recursos previstos por DOC-KX-75.
 * No importar archivos que todavía no existan.
 */
export const expectedAssets = {
  fonts: [
    { family: "Barlow Condensed", role: "display", format: "woff2", status: "local-fontsource" },
    { family: "Orbitron", role: "product-title", format: "woff2", status: "local-fontsource" },
    { family: "Inter", role: "body", format: "woff2", status: "local-fontsource" },
    { family: "IBM Plex Mono", role: "mono", format: "woff2", status: "local-fontsource" },
  ],
  keyboard: [
    {
      file: "xk75-hero-assembled.png",
      status: "mounted",
      source: "docs/images/xk75-hero-assembled.png",
      note: "Hero and Performance assembled product view; 1586×992",
    },
    {
      file: "xk75-manifesto-presence.png",
      status: "mounted",
      source: "docs/images/xk75-manifesto-presence.png",
      note: "Top-down supporting view; 1585×992; RK75 legend remains on a keycap",
    },
    {
      file: "xk75-specs-side.png",
      status: "mounted",
      source: "docs/images/xk75-specs-side.png",
      note: "Specifications side view; 1942×809",
    },
    {
      file: "xk75-final-assembled.png",
      status: "mounted",
      source: "docs/images/xk75-final-assembled.png",
      note: "Final Statement closing assembled view; 1586×992",
    },
    {
      file: "xk75-layer-keycaps.png",
      status: "mounted",
      source: "docs/images/xk75-layer-keycaps.png",
      note: "Architecture stack, top layer; highlight mode, cameras not registered",
    },
    {
      file: "xk75-layer-switches.png",
      status: "mounted",
      source: "docs/images/xk75-layer-switches.png",
    },
    {
      file: "xk75-layer-frame.png",
      status: "mounted",
      source: "docs/images/xk75-layer-frame.png",
    },
    {
      file: "xk75-layer-plate.png",
      status: "mounted",
      source: "docs/images/xk75-layer-plate.png",
    },
    {
      file: "xk75-layer-foam.png",
      status: "mounted",
      source: "docs/images/xk75-layer-foam.png",
    },
    {
      file: "xk75-layer-pcb.png",
      status: "mounted",
      source: "docs/images/xk75-layer-pcb.png",
    },
    {
      file: "xk75-layer-battery.png",
      status: "mounted",
      source: "docs/images/xk75-layer-battery.png",
      note: "Orthographic battery/module; not aligned with the 3/4 layers",
    },
    {
      file: "xk75-layer-bottom.png",
      status: "mounted",
      source: "docs/images/xk75-layer-bottom.png",
      note: "Architecture stack, bottom layer",
    },
    "keyboard-keycaps.webp",
    "keyboard-switches.webp",
    "keyboard-frame.webp",
    "keyboard-plate.webp",
    "keyboard-foam.webp",
    "keyboard-pcb.webp",
    "keyboard-battery.webp",
    "keyboard-bottom.webp",
  ],
  backgrounds: [
    {
      file: "background-2.png",
      status: "temporary",
      source: "docs/background-2.png",
      note: "Fixed page background on html; no overlay grid; section fills are transparent",
    },
  ],
  additional: [
    {
      file: "xk75-macro-chassis.png",
      status: "mounted",
      source: "docs/images/xk75-macro-chassis.png",
      note: "Materials chassis macro; 1536×1024",
    },
    {
      file: "xk75-macro-keycaps.png",
      status: "mounted",
      source: "docs/images/xk75-macro-keycaps.png",
      note: "Materials keycaps macro; 1536×1024",
    },
    {
      file: "xk75-macro-knob.png",
      status: "mounted",
      source: "docs/images/xk75-macro-knob.png",
      note: "Materials knob macro; 1536×1024",
    },
    {
      file: "xk75-macro-finish.png",
      status: "mounted",
      source: "docs/images/xk75-macro-finish.png",
      note: "Materials finish macro; 1536×1024",
    },
    {
      file: "xk75-macro-plate.png",
      status: "mounted",
      source: "docs/images/xk75-macro-plate.png",
      note: "Materials plate photograph; 1536×1024",
    },
    {
      file: "xk75-macro-foam.png",
      status: "mounted",
      source: "docs/images/xk75-macro-foam.png",
      note: "Materials foam photograph; 1536×1024",
    },
  ],
  switches: [
    {
      file: "xk75-switch-keycap.png",
      status: "mounted",
      source: "docs/images/xk75-switch-keycap.png",
      note: "Switch System photo stack; 1254×1254; GSAP travel",
    },
    {
      file: "xk75-switch-housing-upper.png",
      status: "mounted",
      source: "docs/images/xk75-switch-housing-upper.png",
      note: "Upper housing; GSAP travel",
    },
    {
      file: "xk75-switch-stem.png",
      status: "mounted",
      source: "docs/images/xk75-switch-stem.png",
      note: "Exploded stem; GSAP travel",
    },
    {
      file: "xk75-switch-spring.png",
      status: "mounted",
      source: "docs/images/xk75-switch-spring.png",
      note: "Spring; GSAP scaleY",
    },
    {
      file: "xk75-switch-contact.png",
      status: "mounted",
      source: "docs/images/xk75-switch-contact.png",
      note: "Contact; GSAP autoAlpha",
    },
    {
      file: "xk75-switch-housing-lower.png",
      status: "mounted",
      source: "docs/images/xk75-switch-housing-lower.png",
      note: "Lower housing; stationary",
    },
  ],
  performance: [
    {
      file: "xk75-hero-assembled.png",
      status: "mounted",
      note: "Reused assembled Hero keyboard as origin of the connection diagram",
    },
    {
      file: "Host.png",
      status: "mounted",
      note: "Desktop monitor. Master in docs/images/Host.png; replaces the schematic host SVG.",
    },
  ],
  specifications: [
    {
      file: "xk75-specs-side.png",
      status: "mounted",
      note: "Dedicated side view for the spec sheet",
    },
  ],
  finalStatement: [
    {
      file: "xk75-final-assembled.png",
      status: "mounted",
      note: "Dedicated assembled closing image",
    },
  ],
  masters: [
    {
      path: "docs/images/",
      note: "Master PNG set of the images mounted from src/assets. Unused sketches, Control frames and variant stems were removed.",
    },
  ],
} as const;
