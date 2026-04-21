import type { Metadata } from "next";

import type { Locale } from "@/i18n/routing";

const localeAlternates: Record<Locale, string> = {
  fr: "fr",
  en: "en"
};

export function getPageAlternates(locale: Locale, path: string): Metadata["alternates"] {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const safePath = normalizedPath === "/" ? "" : normalizedPath;

  return {
    canonical: `/${locale}${safePath}`,
    languages: {
      fr: `/fr${safePath}`,
      en: `/en${safePath}`,
      "x-default": `/${localeAlternates.fr}${safePath}`
    }
  };
}
