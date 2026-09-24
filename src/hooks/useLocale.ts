import { useCallback, useSyncExternalStore } from "react";
import { dictionaries } from "../data/copy";
import type { AppCopy, Locale } from "../data/copy/types";
import {
  getLocale,
  setLocale as writeLocale,
  subscribeLocale,
} from "../i18n/localeStore";

export function useLocale(): {
  locale: Locale;
  copy: AppCopy;
  setLocale: (locale: Locale) => void;
} {
  const locale = useSyncExternalStore(subscribeLocale, getLocale, getLocale);
  const setLocale = useCallback((next: Locale) => {
    writeLocale(next);
  }, []);

  return {
    locale,
    copy: dictionaries[locale],
    setLocale,
  };
}
