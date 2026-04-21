import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import Container from "@/components/layout/container";
import {
  getEarlyExperiences,
  getFeaturedExperiences,
  getTimelineExperiences
} from "@/data/experiences";
import { getWorkflowTools } from "@/data/skills";
import { resolveLocale } from "@/lib/locale";
import { getPageAlternates } from "@/lib/seo";

type ExperiencesLocalePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: ExperiencesLocalePageProps): Promise<Metadata> {
  const { locale: localeCandidate } = await params;
  const locale = resolveLocale(localeCandidate);
  const t = await getTranslations({ locale, namespace: "ExperiencesPage" });

  return {
    title: t("metadataTitle"),
    description: t("metadataDescription"),
    alternates: getPageAlternates(locale, "/experiences")
  };
}

export default async function ExperiencesPage({ params }: ExperiencesLocalePageProps) {
  const { locale: localeCandidate } = await params;
  const locale = resolveLocale(localeCandidate);
  const t = await getTranslations({ locale, namespace: "ExperiencesPage" });

  const featuredExperiences = getFeaturedExperiences(locale);
  const timelineExperiences = getTimelineExperiences(locale);
  const earlyExperiences = getEarlyExperiences(locale);
  const workflowTools = getWorkflowTools(locale);

  return (
    <section className="section">
      <Container className="container-custom max-w-6xl">
        <div className="space-y-20">
          <div className="max-w-4xl space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">{t("badge")}</p>

            <div className="space-y-4">
              <h1>{t("heroTitle")}</h1>

              <p className="text-lg leading-8 text-[var(--muted)]">{t("heroDescription")}</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">{t("featuredBadge")}</p>
              <h2 className="section-title">{t("featuredTitle")}</h2>
              <p className="max-w-3xl text-[var(--muted)]">{t("featuredDescription")}</p>
            </div>

            <div className="space-y-8">
              {featuredExperiences.map((experience) => (
                <div key={experience.title} className="card p-8 sm:p-10">
                  <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                    <div className="space-y-4">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
                        {experience.period}
                      </p>

                      <div className="space-y-3">
                        <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">
                          {experience.title}
                        </h2>
                        <p className="text-base font-medium text-[var(--muted)]">{experience.subtitle}</p>
                      </div>

                      <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6">
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
                          {t("learningCardTitle")}
                        </p>

                        <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--muted)]">
                          {experience.learnings.map((learning) => (
                            <li key={learning}>• {learning}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-5">
                      {experience.description.map((paragraph, index) => (
                        <p key={`${experience.title}-${index}`} className="leading-8 text-[var(--muted)]">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">{t("timelineBadge")}</p>
              <h2 className="section-title">{t("timelineTitle")}</h2>
            </div>

            <div className="relative space-y-8 before:absolute before:left-[11px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-[var(--border)]">
              {timelineExperiences.map((experience) => (
                <div key={experience.title} className="relative pl-10">
                  <span className="absolute left-0 top-2 h-6 w-6 rounded-full border border-[var(--border)] bg-[var(--card)] shadow-sm" />

                  <div className="card p-7">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
                      {experience.period}
                    </p>

                    <h3 className="mt-3 text-xl font-semibold text-[var(--foreground)]">{experience.title}</h3>

                    <p className="mt-4 leading-8 text-[var(--muted)]">{experience.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="card p-8 sm:p-10">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">{t("narrativeBadge")}</p>

                <h2 className="section-title">{t("narrativeTitle")}</h2>

                <p className="leading-8 text-[var(--muted)]">{t("narrativeParagraph1")}</p>

                <p className="leading-8 text-[var(--muted)]">{t("narrativeParagraph2")}</p>
              </div>
            </div>

            <div className="card p-8 sm:p-10">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">{t("developmentBadge")}</p>

                <h2 className="section-title">{t("developmentTitle")}</h2>

                <p className="leading-8 text-[var(--muted)]">{t("developmentParagraph1")}</p>

                <p className="leading-8 text-[var(--muted)]">{t("developmentParagraph2")}</p>
              </div>
            </div>
          </div>
          <div className="card p-8 sm:p-10">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">{t("toolsBadge")}</p>
                <h2 className="section-title">{t("toolsTitle")}</h2>
              </div>

              <p className="leading-8 text-[var(--muted)]">{t("toolsDescription")}</p>

              <div className="flex flex-wrap gap-2">
                {workflowTools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 text-sm text-[var(--muted)]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">{t("earlyBadge")}</p>
              <h2 className="section-title">{t("earlyTitle")}</h2>
              <p className="max-w-3xl text-[var(--muted)]">{t("earlyDescription")}</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {earlyExperiences.map((experience) => (
                <div key={`${experience.period}-${experience.title}`} className="card p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
                    {experience.period}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold text-[var(--foreground)]">{experience.title}</h3>

                  <p className="mt-4 leading-7 text-[var(--muted)]">{experience.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
