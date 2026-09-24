export const pageNavItems = [
  { href: "#manifesto", key: "manifesto" },
  { href: "#architecture", key: "architecture" },
  { href: "#switches", key: "switches" },
  { href: "#materials", key: "materials" },
  { href: "#performance", key: "performance" },
  { href: "#specs", key: "specs" },
  { href: "#reserve", key: "reserve" },
  { href: "#final-statement", key: "final" },
] as const;

export type PageNavKey = (typeof pageNavItems)[number]["key"];
