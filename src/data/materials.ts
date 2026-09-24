export const materialsVisualMode = "editorial" as const;

export const materialItems = [
  { id: "aluminum", code: "CNC ALUMINUM", index: "01", visual: "photo" },
  { id: "keycaps", code: "PBT KEYCAPS", index: "02", visual: "photo" },
  { id: "plate", code: "METAL PLATE", index: "03", visual: "photo" },
  { id: "foam", code: "ACOUSTIC FOAM", index: "04", visual: "photo" },
  { id: "knob", code: "MACHINED KNOB", index: "05", visual: "photo" },
  { id: "finish", code: "GRAPHITE FINISH", index: "06", visual: "photo" },
] as const;

export type MaterialId = (typeof materialItems)[number]["id"];
export type MaterialVisual = (typeof materialItems)[number]["visual"];

export function getMaterial(id: MaterialId) {
  const item = materialItems.find((material) => material.id === id);

  if (!item) {
    throw new Error(`Unknown material id: ${id}`);
  }

  return item;
}
