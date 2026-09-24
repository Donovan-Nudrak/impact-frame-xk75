import { en } from "./en";
import { es } from "./es";
import type { AppCopy, Locale } from "./types";

export type { AppCopy, Locale } from "./types";

export const dictionaries: Record<Locale, AppCopy> = {
  en,
  es,
};

export const locales: readonly Locale[] = ["es", "en"];
