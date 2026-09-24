import layerBattery from "../assets/keyboard/xk75-layer-battery.png";
import layerBottom from "../assets/keyboard/xk75-layer-bottom.png";
import layerFoam from "../assets/keyboard/xk75-layer-foam.png";
import layerFrame from "../assets/keyboard/xk75-layer-frame.png";
import layerKeycaps from "../assets/keyboard/xk75-layer-keycaps.png";
import layerPcb from "../assets/keyboard/xk75-layer-pcb.png";
import layerPlate from "../assets/keyboard/xk75-layer-plate.png";
import layerSwitches from "../assets/keyboard/xk75-layer-switches.png";

export const architectureVisualMode = "layers" as const;

export const architectureLayers = [
  { id: "keycaps", code: "KEYCAPS", index: "01", asset: null },
  { id: "switches", code: "SWITCHES", index: "02", asset: null },
  { id: "frame", code: "TOP FRAME", index: "03", asset: null },
  { id: "plate", code: "PLATE", index: "04", asset: null },
  { id: "foam", code: "ACOUSTIC FOAM", index: "05", asset: null },
  { id: "pcb", code: "PCB", index: "06", asset: null },
  { id: "battery", code: "POWER MODULE", index: "07", asset: null },
  { id: "bottom", code: "BOTTOM CASE", index: "08", asset: null },
] as const;

export type ArchitectureLayerId = (typeof architectureLayers)[number]["id"];

export const architectureLayerAssets: Record<ArchitectureLayerId, string> = {
  keycaps: layerKeycaps,
  switches: layerSwitches,
  frame: layerFrame,
  plate: layerPlate,
  foam: layerFoam,
  pcb: layerPcb,
  battery: layerBattery,
  bottom: layerBottom,
};

export const architectureStackOrder = [
  "bottom",
  "battery",
  "pcb",
  "foam",
  "plate",
  "frame",
  "switches",
  "keycaps",
] as const satisfies readonly ArchitectureLayerId[];
