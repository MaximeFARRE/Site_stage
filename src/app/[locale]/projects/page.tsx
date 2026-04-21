import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import ProjectsPageContent from "@/components/projects/projects-page-content";
import { getPageAlternates } from "@/lib/seo";
import { resolveLocale } from "@/lib/locale";

type ProjectsPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: ProjectsPageProps): Promise<Metadata> {
  const { locale: localeCandidate } = await params;
  const locale = resolveLocale(localeCandidate);
  const t = await getTranslations({ locale, namespace: "ProjectsPage" });

  return {
    title: t("metadataTitle"),
    description: t("metadataDescription"),
    alternates: getPageAlternates(locale, "/projects")
  };
}

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}
