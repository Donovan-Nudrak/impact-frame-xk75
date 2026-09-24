export const specificationsVisualMode = "sheet" as const;

export const specificationGroups = [
  {
    id: "identity",
    code: "IDENTITY",
    items: ["model", "identifier", "form"],
  },
  {
    id: "construction",
    code: "BUILD",
    items: ["chassis", "keycaps", "switches", "plate", "foam"],
  },
  {
    id: "connectivity",
    code: "CONNECT",
    items: ["connectivity"],
  },
  {
    id: "controls",
    code: "CONTROL",
    items: ["lighting", "knob"],
  },
] as const;

export type SpecGroupId = (typeof specificationGroups)[number]["id"];
export type SpecItemId = (typeof specificationGroups)[number]["items"][number];
