import { hasLocale } from "next-intl";

import { routing, type Locale } from "@/i18n/routing";

export function resolveLocale(localeCandidate: string): Locale {
  return hasLocale(routing.locales, localeCandidate)
    ? localeCandidate
    : routing.defaultLocale;
}
