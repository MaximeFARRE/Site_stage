import type { Metadata } from "next";

import LegacyProjectDetailPage from "@/app/projets/[slug]/page";
import { getProjectBySlug, projects } from "@/data/projects";
import { routing } from "@/i18n/routing";
import { resolveLocale } from "@/lib/locale";
import { getPageAlternates } from "@/lib/seo";

type LocalizedProjectPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    projects.map((project) => ({
      locale,
      slug: project.slug
    }))
  );
}

export async function generateMetadata({ params }: LocalizedProjectPageProps): Promise<Metadata> {
  const { locale: localeCandidate, slug } = await params;
  const locale = resolveLocale(localeCandidate);
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Projet introuvable",
      description: "Le projet demande n'existe pas ou n'est plus disponible."
    };
  }

  return {
    title: project.title,
    description: project.shortDescription,
    alternates: getPageAlternates(locale, `/projects/${project.slug}`)
  };
}

export default async function LocalizedProjectDetailPage({ params }: LocalizedProjectPageProps) {
  const { slug } = await params;

  return <LegacyProjectDetailPage params={{ slug }} />;
}
