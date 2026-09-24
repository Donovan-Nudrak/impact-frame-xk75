export const switchVisualMode = "photo" as const;

export const switchParts = [
  { id: "keycap", code: "KEYCAP PBT", index: "01" },
  { id: "housingUpper", code: "UPPER HOUSING", index: "02" },
  { id: "stem", code: "STEM", index: "03" },
  { id: "spring", code: "SPRING", index: "04" },
  { id: "contact", code: "CONTACT", index: "05" },
  { id: "housingLower", code: "LOWER HOUSING", index: "06" },
] as const;

export type SwitchPartId = (typeof switchParts)[number]["id"];
