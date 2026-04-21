"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";

import Container from "@/components/layout/container";
import { localizeProject } from "@/data/project-i18n";
import { projects } from "@/data/projects";
import { Link } from "@/i18n/navigation";
import { type Locale } from "@/i18n/routing";

type CategoryId = "all" | "finance" | "data" | "automation" | "operations";

const categories: Array<{ id: CategoryId; matches: string[] }> = [
  { id: "all", matches: [] },
  { id: "finance", matches: ["finance"] },
  { id: "data", matches: ["data"] },
  { id: "automation", matches: ["automatisation", "automation"] },
  { id: "operations", matches: ["pilotage", "operations", "operation"] }
];

export default function ProjectsPageContent() {
  const locale = useLocale() as Locale;
  const t = useTranslations("ProjectsPage");
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");

  const localizedProjects = useMemo(
    () => projects.map((project) => localizeProject(project, locale)),
    [locale]
  );

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") {
      return localizedProjects;
    }

    const currentCategory = categories.find((category) => category.id === activeCategory);
    if (!currentCategory) {
      return localizedProjects;
    }

    return localizedProjects.filter((project) => {
      const normalizedCategory = project.category.toLowerCase();
      return currentCategory.matches.some((term) => normalizedCategory.includes(term));
    });
  }, [activeCategory, localizedProjects]);

  const featuredProjects = filteredProjects.filter((project) => project.featured);

  return (
    <section className="section">
      <Container className="container-custom max-w-6xl">
        <div className="space-y-20">
          <div className="max-w-4xl space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">{t("badge")}</p>

            <div className="space-y-4">
              <h1>{t("title")}</h1>

              <p className="text-lg leading-8 text-[var(--muted)]">{t("description")}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  type="button"
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                    activeCategory === category.id
                      ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                      : "border-[var(--border)] bg-[var(--card)] text-[var(--muted)] hover:border-[var(--primary)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {t(`categories.${category.id}`)}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">{t("featuredBadge")}</p>
              <h2 className="section-title">{t("featuredTitle")}</h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {featuredProjects.map((project, index) => (
                <article key={project.slug} className="card overflow-hidden p-0">
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-[var(--border)] bg-[var(--secondary)]">
                    <Image
                      src={project.image}
                      alt={`${project.title} - project preview`}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                    />

                    {index === 0 && (
                      <div className="absolute left-5 top-5 rounded-full bg-[var(--foreground)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                        {t("selected")}
                      </div>
                    )}
                  </div>

                  <div className="space-y-6 p-8">
                    <div className="space-y-3">
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">{project.category}</p>

                      <h3 className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">{project.title}</h3>

                      <p className="leading-8 text-[var(--muted)]">{project.shortDescription}</p>
                    </div>

                    <div className="space-y-3">
                      <p className="text-sm font-medium text-[var(--muted)]">{t("whatProjectShows")}</p>
                      <p className="text-base leading-7 text-[var(--foreground)]">{project.whatItShows}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 text-sm text-[var(--muted)]"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between gap-4 pt-2">
                      <p className="text-sm text-[var(--muted)]">
                        {t("keyResultLabel")}: {project.outcomes[0] ?? t("keyResultFallback")}
                      </p>

                      <Link href={`/projects/${project.slug}`} className="button-primary whitespace-nowrap">
                        {t("viewProject")}
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {featuredProjects.length === 0 && (
              <p className="rounded-xl border border-[var(--border)] bg-[var(--card)] px-5 py-4 text-sm text-[var(--muted)]">
                {t("noFeaturedForCategory", { category: t(`categories.${activeCategory}`) })}
              </p>
            )}
          </div>

          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">{t("allProjectsBadge")}</p>
              <h2 className="section-title">{t("allProjectsTitle")}</h2>
              <p className="max-w-3xl text-[var(--muted)]">{t("allProjectsDescription")}</p>
            </div>

            <div className="grid gap-6 xl:grid-cols-3">
              {filteredProjects.map((project) => (
                <article key={project.slug} className="card overflow-hidden p-0">
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-[var(--border)] bg-[var(--secondary)]">
                    <Image
                      src={project.image}
                      alt={`${project.title} - project preview`}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                    />
                  </div>

                  <div className="space-y-5 p-7">
                    <div className="space-y-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">{project.category}</p>

                      <h3 className="text-xl font-semibold text-[var(--foreground)]">{project.title}</h3>

                      <p className="leading-7 text-[var(--muted)]">{project.shortDescription}</p>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-medium text-[var(--muted)]">{t("whatThisShows")}</p>
                      <p className="text-sm leading-7 text-[var(--foreground)]">{project.whatItShows}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1 text-xs text-[var(--muted)]"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] transition-opacity hover:opacity-80"
                      >
                        {t("viewDetail")}
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <p className="rounded-xl border border-[var(--border)] bg-[var(--card)] px-5 py-4 text-sm text-[var(--muted)]">
                {t("noProjectForCategory", { category: t(`categories.${activeCategory}`) })}
              </p>
            )}
          </div>

          <div className="rounded-[32px] bg-[var(--foreground)] px-8 py-10 sm:px-10 sm:py-12">
            <div className="max-w-3xl space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">{t("ctaBadge")}</p>

              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{t("ctaTitle")}</h2>

              <p className="leading-8 text-white/80">{t("ctaDescription")}</p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  {t("ctaContact")}
                </Link>

                <Link
                  href="/cv"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-80"
                >
                  {t("ctaCv")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
