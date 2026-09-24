import type { Locale } from "../data/copy/types";

const STORAGE_KEY = "if-xk75-locale";

const listeners = new Set<() => void>();

function isLocale(value: string | null): value is Locale {
  return value === "es" || value === "en";
}

function readStoredLocale(): Locale | null {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return isLocale(stored) ? stored : null;
  } catch {
    return null;
  }
}

function detectLocale(): Locale {
  const stored = readStoredLocale();

  if (stored) {
    return stored;
  }

  if (navigator.language.toLowerCase().startsWith("es")) {
    return "es";
  }

  return "en";
}

let currentLocale: Locale = detectLocale();

export function getLocale(): Locale {
  return currentLocale;
}

export function subscribeLocale(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function applyDocumentLocale(locale: Locale = currentLocale): void {
  document.documentElement.lang = locale;
}

export function setLocale(locale: Locale): void {
  if (locale === currentLocale) {
    return;
  }

  currentLocale = locale;
  applyDocumentLocale(locale);

  try {
    window.localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    // El idioma sigue activo en memoria si el almacenamiento no está disponible.
  }

  listeners.forEach((listener) => {
    listener();
  });
}
