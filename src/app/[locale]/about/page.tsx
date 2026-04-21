import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import Container from "@/components/layout/container";
import {
  aboutFaqItems,
  aboutHighlights,
  aboutKeyNumbers,
  aboutPillars
} from "@/data/about";
import { personalInfo } from "@/data/personal-info";
import { aboutToolsGroups } from "@/data/skills";
import { resolveLocale } from "@/lib/locale";
import { getPageAlternates } from "@/lib/seo";

type AboutPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const { locale: localeCandidate } = await params;
  const locale = resolveLocale(localeCandidate);
  const t = await getTranslations({ locale, namespace: "AboutPage" });

  return {
    title: t("metadataTitle"),
    description: t("metadataDescription"),
    alternates: getPageAlternates(locale, "/about")
  };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale: localeCandidate } = await params;
  const locale = resolveLocale(localeCandidate);
  const t = await getTranslations({ locale, namespace: "AboutPage" });
  const traits = t.raw("traits") as string[];

  return (
    <section className="section">
      <Container className="container-custom max-w-6xl">
        <div className="space-y-20">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                  {t("badge")}
                </p>

                <div className="space-y-3">
                  <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--muted)]">
                    {t("subtitle")}
                  </p>

                  <h1 className="max-w-4xl">{t("title")}</h1>
                </div>

                <p className="max-w-3xl text-lg leading-8 text-[var(--muted)]">{t("intro")}</p>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-medium text-[var(--foreground)]">
                  {t("chips.marketFinance")}
                </span>
                <span className="rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-medium text-[var(--foreground)]">
                  {t("chips.operations")}
                </span>
                <span className="rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-medium text-[var(--foreground)]">
                  {t("chips.dataTools")}
                </span>
              </div>

              <div className="card space-y-5 p-8">
                <div className="space-y-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
                    {t("professionalProfile")}
                  </p>

                  <p className="text-base leading-8 whitespace-pre-line text-[var(--muted)]">
                    {personalInfo.longBio}
                  </p>
                </div>

                <p className="text-base leading-8 text-[var(--muted)]">{t("qualityParagraph")}</p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="card p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
                  {t("professionalIdentity")}
                </p>

                <div className="mt-4 space-y-3">
                  <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">
                    {personalInfo.title}
                  </h2>

                  <p className="leading-7 text-[var(--muted)]">{personalInfo.headline}</p>
                </div>
              </div>

              <div className="card p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
                  {t("traitsTitle")}
                </p>

                <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--muted)]">
                  {traits.map((trait) => (
                    <li key={trait}>• {trait}</li>
                  ))}
                </ul>
              </div>

              <div className="card p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
                  {t("todayTitle")}
                </p>

                <div className="mt-4 space-y-3">
                  <p className="font-medium text-[var(--foreground)]">{personalInfo.currentGoal}</p>
                  <p className="text-sm leading-7 text-[var(--muted)]">{t("todayDescription")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                {t("toolsBadge")}
              </p>
              <h2 className="section-title">{t("toolsTitle")}</h2>
              <p className="max-w-3xl text-[var(--muted)]">{t("toolsDescription")}</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {aboutToolsGroups.map((group) => (
                <div key={group.title} className="card p-7">
                  <h3 className="text-lg font-semibold text-[var(--foreground)]">{group.title}</h3>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 text-sm text-[var(--muted)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                {t("pillarsBadge")}
              </p>
              <h2 className="section-title">{t("pillarsTitle")}</h2>
              <p className="max-w-3xl text-[var(--muted)]">{t("pillarsDescription")}</p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {aboutPillars.map((pillar) => (
                <div key={pillar.title} className="card p-8">
                  <h3 className="text-xl font-semibold text-[var(--foreground)]">{pillar.title}</h3>
                  <p className="mt-4 leading-7 text-[var(--muted)]">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="card p-8 sm:p-10">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                  {t("motivationBadge")}
                </p>

                <h2 className="section-title">{t("motivationTitle")}</h2>

                <p className="leading-8 text-[var(--muted)]">{t("motivationParagraph1")}</p>

                <p className="leading-8 text-[var(--muted)]">{t("motivationParagraph2")}</p>
              </div>
            </div>

            <div className="card p-8 sm:p-10">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                  {t("sportsBadge")}
                </p>

                <h2 className="section-title">{t("sportsTitle")}</h2>

                <p className="leading-8 text-[var(--muted)]">{t("sportsParagraph1")}</p>

                <p className="leading-8 text-[var(--muted)]">{t("sportsParagraph2")}</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                {t("keyNumbersBadge")}
              </p>
              <h2 className="section-title">{t("keyNumbersTitle")}</h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {aboutKeyNumbers.map((item) => (
                <div key={item.label} className="card p-8">
                  <p className="text-3xl font-semibold tracking-tight text-[var(--foreground)]">{item.value}</p>
                  <p className="mt-3 leading-7 text-[var(--muted)]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-8 sm:p-10">
            <div className="space-y-8">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                  {t("summaryBadge")}
                </p>
                <h2 className="section-title">{t("summaryTitle")}</h2>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {aboutHighlights.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6">
                    <p className="text-sm font-medium text-[var(--muted)]">{item.label}</p>
                    <p className="mt-2 text-lg font-semibold text-[var(--foreground)]">{item.value}</p>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                {t("faqBadge")}
              </p>
              <h2 className="section-title">{t("faqTitle")}</h2>
              <p className="max-w-3xl text-[var(--muted)]">{t("faqDescription")}</p>
            </div>

            <div className="space-y-4">
              {aboutFaqItems.map((item) => (
                <details key={item.question} className="card group p-0">
                  <summary className="list-none cursor-pointer px-6 py-5 text-left text-base font-semibold text-[var(--foreground)] marker:hidden">
                    <div className="flex items-center justify-between gap-4">
                      <span>{item.question}</span>
                      <span className="text-[var(--primary)] transition-transform duration-200 group-open:rotate-45">+</span>
                    </div>
                  </summary>

                  <div className="px-6 pb-6">
                    <p className="leading-7 text-[var(--muted)]">{item.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
