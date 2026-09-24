export const performanceVisualMode = "schematic" as const;

export const connectionModes = [
  { id: "usbc", code: "USB-C", index: "01", signal: "continuous" },
  { id: "ghz24", code: "2.4 GHZ", index: "02", signal: "pulse" },
  { id: "bluetooth", code: "BLUETOOTH", index: "03", signal: "arc" },
] as const;

export type ConnectionModeId = (typeof connectionModes)[number]["id"];
export type ConnectionSignal = (typeof connectionModes)[number]["signal"];

export function getConnectionMode(id: ConnectionModeId) {
  const mode = connectionModes.find((item) => item.id === id);

  if (!mode) {
    throw new Error(`Unknown connection mode: ${id}`);
  }

  return mode;
}
