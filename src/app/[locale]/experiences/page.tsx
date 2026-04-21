import type { Metadata } from "next";

import ExperiencesPage from "@/app/experiences/page";
import { getPageAlternates } from "@/lib/seo";
import { resolveLocale } from "@/lib/locale";

type ExperiencesLocalePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: ExperiencesLocalePageProps): Promise<Metadata> {
  const { locale: localeCandidate } = await params;
  const locale = resolveLocale(localeCandidate);

  return {
    alternates: getPageAlternates(locale, "/experiences")
  };
}

export default ExperiencesPage;
