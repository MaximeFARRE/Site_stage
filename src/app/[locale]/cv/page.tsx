import type { Metadata } from "next";

import CvPage from "@/app/cv/page";
import { resolveLocale } from "@/lib/locale";
import { getPageAlternates } from "@/lib/seo";

type CvLocalePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: CvLocalePageProps): Promise<Metadata> {
  const { locale: localeCandidate } = await params;
  const locale = resolveLocale(localeCandidate);

  return {
    alternates: getPageAlternates(locale, "/cv")
  };
}

export default CvPage;
