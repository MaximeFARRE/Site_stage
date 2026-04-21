import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { getCvHighlights } from "@/data/cv";
import { getCvExperiences, getEducationEntries } from "@/data/experiences";
import { getPersonalInfo } from "@/data/personal-info";
import { getCvSkills } from "@/data/skills";
import { Link } from "@/i18n/navigation";
import { resolveLocale } from "@/lib/locale";
import { getPageAlternates } from "@/lib/seo";

type CvLocalePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: CvLocalePageProps): Promise<Metadata> {
  const { locale: localeCandidate } = await params;
  const locale = resolveLocale(localeCandidate);
  const t = await getTranslations({ locale, namespace: "CvPage" });

  return {
    title: t("metadataTitle"),
    description: t("metadataDescription"),
    alternates: getPageAlternates(locale, "/cv")
  };
}

export default async function CvPage({ params }: CvLocalePageProps) {
  const { locale: localeCandidate } = await params;
  const locale = resolveLocale(localeCandidate);
  const t = await getTranslations({ locale, namespace: "CvPage" });

  const personalInfo = getPersonalInfo(locale);
  const cvHighlights = getCvHighlights(locale);
  const cvExperiences = getCvExperiences(locale);
  const educationEntries = getEducationEntries(locale);
  const cvSkills = getCvSkills(locale);

  return (
    <main className="section">
      <div className="container-custom space-y-16">
        <section className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div className="space-y-6">
            <div className="inline-flex w-fit items-center rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm text-[var(--muted)]">
              {t("badge")}
            </div>

            <div className="space-y-4">
              <h1 className="section-title max-w-3xl">{t("heroTitle")}</h1>

              <p className="max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">{t("heroDescription")}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="/files/cv_maxime_farre.pdf" target="_blank" rel="noreferrer" className="button-primary">
                {t("downloadCv")}
              </a>

              <Link href="/contact" className="button-secondary">
                {t("contact")}
              </Link>
            </div>
          </div>

          <aside className="card space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--muted)]">{t("quickOverview")}</p>
              <h2 className="text-2xl font-semibold">{personalInfo.fullName}</h2>
              <p className="text-sm leading-6 text-[var(--muted)]">
                {personalInfo.location}
                <br />
                {t("quickAvailabilityLine1")}
                <br />
                {t("quickAvailabilityLine2")}
              </p>
            </div>

            <div className="h-px w-full bg-[var(--border)]" />

            <div className="space-y-3">
              {cvHighlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--muted)]">{t("pdfBadge")}</p>
            <a href="/files/cv_maxime_farre.pdf" download="CV_Maxime_Farre.pdf" className="button-primary">
              {t("download")}
            </a>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[var(--border)]">
            <embed src="/files/cv_maxime_farre.pdf" type="application/pdf" className="h-[70vh] min-h-[480px] w-full md:h-[900px]" />
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <div className="card lg:col-span-1">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-[var(--muted)]">{t("positioningBadge")}</p>
            <h2 className="mb-4 text-2xl font-semibold">{t("positioningTitle")}</h2>
            <p className="text-sm leading-7 text-[var(--muted)]">{t("positioningDescription")}</p>
          </div>

          <div className="card lg:col-span-2">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-[var(--muted)]">{t("summaryBadge")}</p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-[var(--border)] p-5">
                <h3 className="mb-2 text-lg font-semibold">{t("summary.finance.title")}</h3>
                <p className="text-sm leading-7 text-[var(--muted)]">{t("summary.finance.description")}</p>
              </div>

              <div className="rounded-2xl border border-[var(--border)] p-5">
                <h3 className="mb-2 text-lg font-semibold">{t("summary.technology.title")}</h3>
                <p className="text-sm leading-7 text-[var(--muted)]">{t("summary.technology.description")}</p>
              </div>

              <div className="rounded-2xl border border-[var(--border)] p-5">
                <h3 className="mb-2 text-lg font-semibold">{t("summary.operations.title")}</h3>
                <p className="text-sm leading-7 text-[var(--muted)]">{t("summary.operations.description")}</p>
              </div>

              <div className="rounded-2xl border border-[var(--border)] p-5">
                <h3 className="mb-2 text-lg font-semibold">{t("summary.mindset.title")}</h3>
                <p className="text-sm leading-7 text-[var(--muted)]">{t("summary.mindset.description")}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-3">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--muted)]">{t("experienceBadge")}</p>
            <h2 className="section-title">{t("experienceTitle")}</h2>
          </div>

          <div className="space-y-4">
            {cvExperiences.map((item) => (
              <article key={item.title} className="card">
                <div className="grid gap-4 md:grid-cols-[180px_1fr] md:gap-8">
                  <div className="text-sm font-medium text-[var(--primary)]">{item.period}</div>

                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)] md:text-base">{item.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-3">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--muted)]">{t("educationBadge")}</p>
            <h2 className="section-title">{t("educationTitle")}</h2>
          </div>

          <div className="space-y-4">
            {educationEntries.map((item) => (
              <article key={item.title} className="card">
                <div className="grid gap-4 md:grid-cols-[180px_1fr] md:gap-8">
                  <div className="text-sm font-medium text-[var(--primary)]">{item.period}</div>

                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)] md:text-base">{item.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-3">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--muted)]">{t("skillsBadge")}</p>
            <h2 className="section-title">{t("skillsTitle")}</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {cvSkills.map((group) => (
              <div key={group.title} className="card">
                <h3 className="mb-4 text-xl font-semibold">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--muted)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="card">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="space-y-3">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--muted)]">{t("pdfBadge")}</p>
              <h2 className="text-2xl font-semibold md:text-3xl">{t("pdfTitle")}</h2>
              <p className="max-w-2xl text-sm leading-7 text-[var(--muted)] md:text-base">{t("pdfDescription")}</p>
            </div>

            <a href="/files/cv_maxime_farre.pdf" target="_blank" rel="noreferrer" className="button-primary">
              {t("openPdf")}
            </a>
          </div>
        </section>

        <section className="card bg-[var(--foreground)] text-[var(--background)]">
          <div className="space-y-5">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--background)]/70">{t("ctaBadge")}</p>
            <h2 className="max-w-3xl text-3xl font-semibold md:text-4xl">{t("ctaTitle")}</h2>
            <p className="max-w-2xl text-sm leading-7 text-[var(--background)]/75 md:text-base">{t("ctaDescription")}</p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="rounded-full bg-[var(--background)] px-5 py-3 text-sm font-medium text-[var(--foreground)] transition hover:opacity-90"
              >
                {t("viewProjects")}
              </Link>

              <Link
                href="/experiences"
                className="rounded-full border border-[var(--background)]/20 px-5 py-3 text-sm font-medium text-[var(--background)] transition hover:bg-[var(--background)]/10"
              >
                {t("viewExperiences")}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
