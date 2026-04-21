import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";

import { routing } from "./routing";
import { messages } from "@/messages";

export default getRequestConfig(async ({ requestLocale }) => {
  const localeCandidate = await requestLocale;
  const locale = hasLocale(routing.locales, localeCandidate)
    ? localeCandidate
    : routing.defaultLocale;

  return {
    locale,
    messages: messages[locale]
  };
});
