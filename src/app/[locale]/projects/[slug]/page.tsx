import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

import Container from "@/components/layout/container";
import YoutubeEmbed from "@/components/ui/youtube-embed";
import { localizeProject } from "@/data/project-i18n";
import { getProjectBySlug, projects } from "@/data/projects";
import { Link } from "@/i18n/navigation";
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
  const t = await getTranslations({ locale, namespace: "ProjectDetailPage" });
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: t("notFoundTitle"),
      description: t("notFoundDescription")
    };
  }
  const localizedProject = localizeProject(project, locale);

  return {
    title: localizedProject.title,
    description: localizedProject.shortDescription,
    alternates: getPageAlternates(locale, `/projects/${project.slug}`)
  };
}

function normalizeInternalHref(href: string): string {
  if (href.startsWith("/projets")) {
    return href.replace("/projets", "/projects");
  }

  if (href === "/a-propos") {
    return "/about";
  }

  return href;
}

export default async function LocalizedProjectDetailPage({ params }: LocalizedProjectPageProps) {
  const { locale: localeCandidate, slug } = await params;
  const locale = resolveLocale(localeCandidate);
  const t = await getTranslations({ locale, namespace: "ProjectDetailPage" });

  const projectSource = getProjectBySlug(slug);

  if (!projectSource) {
    notFound();
  }

  const project = localizeProject(projectSource, locale);
  const otherProjects = projects
    .filter((item) => item.slug !== project.slug)
    .slice(0, 2)
    .map((item) => localizeProject(item, locale));
  const deepDive = project.deepDive;

  return (
    <section className="section">
      <Container className="container-custom max-w-6xl">
        <div className="space-y-20">
          <div className="space-y-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] transition-opacity hover:opacity-80"
            >
              <span aria-hidden="true">←</span>
              {t("backToProjects")}
            </Link>

            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">{project.category}</p>

                  <h1>{project.title}</h1>

                  <p className="max-w-3xl text-lg leading-8 text-[var(--muted)]">{project.longDescription}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 text-sm text-[var(--muted)]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="card p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">{t("whatItShows")}</p>

                  <p className="mt-4 leading-8 text-[var(--foreground)]">{project.whatItShows}</p>
                </div>
              </div>

              <div className="space-y-5">
                <div className="overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--card)]">
                  <div className="relative aspect-[4/3]">
                    <Image src={project.image} alt={`${project.title} - detailed view`} fill className="object-cover" priority />
                  </div>
                </div>

                <div className="card p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">{t("myRole")}</p>

                  <p className="mt-4 leading-8 text-[var(--muted)]">{project.role}</p>
                </div>

                {project.links && project.links.length > 0 && (
                  <div className="card p-7">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">{t("links")}</p>

                    <div className="mt-4 flex flex-wrap gap-3">
                      {project.links.map((link) =>
                        link.href.startsWith("/") ? (
                          <Link key={link.href} href={normalizeInternalHref(link.href)} className="button-secondary">
                            {link.label}
                          </Link>
                        ) : (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button-secondary"
                          >
                            {link.label}
                          </a>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="card p-8 lg:col-span-1">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">{t("context")}</p>

              <p className="mt-4 leading-8 text-[var(--muted)]">{project.context}</p>
            </div>

            <div className="card p-8 lg:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">{t("objective")}</p>

              <p className="mt-4 leading-8 text-[var(--muted)]">{project.objective}</p>
            </div>
          </div>

          {project.videoUrl && (
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">{t("demoBadge")}</p>
                <h2 className="section-title">{t("demoTitle")}</h2>
              </div>
              <YoutubeEmbed url={project.videoUrl} title={project.title} />
            </div>
          )}

          {deepDive && (
            <div className="space-y-10">
              <div className="card p-8 sm:p-10">
                <div className="space-y-5">
                  <div className="space-y-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">{t("deepDiveBadge")}</p>
                    <h2 className="section-title">{t("deepDiveTitle")}</h2>
                  </div>

                  <p className="leading-8 text-[var(--muted)]">{deepDive.summary}</p>

                  <ul className="space-y-3 text-sm leading-7 text-[var(--muted)]">
                    {deepDive.scope.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {deepDive.customSections?.map((section) => (
                <div key={section.title} className="space-y-6">
                  <h2 className="section-title">{section.title}</h2>

                  <div className="card p-8 sm:p-10">
                    <div className="space-y-5">
                      {section.summary && <p className="leading-8 text-[var(--muted)]">{section.summary}</p>}

                      {section.points && section.points.length > 0 && (
                        <ul className="space-y-3 text-sm leading-7 text-[var(--muted)]">
                          {section.points.map((item) => (
                            <li key={item}>• {item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {deepDive.gallery && deepDive.gallery.length > 0 && (
                <div className="space-y-6">
                  <div className="space-y-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">{t("galleryBadge")}</p>
                    <h2 className="section-title">{t("galleryTitle")}</h2>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    {deepDive.gallery.map((item) => (
                      <article key={item.src} className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)]">
                        <div className="relative aspect-[16/10]">
                          <Image src={item.src} alt={item.alt} fill className="object-cover" />
                        </div>
                        <p className="px-5 py-4 text-sm leading-7 text-[var(--muted)]">{item.caption}</p>
                      </article>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-6">
                <div className="space-y-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">{t("architectureBadge")}</p>
                  <h2 className="section-title">{t("architectureTitle")}</h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {deepDive.architecture.map((block) => (
                    <div key={block.title} className="card p-7">
                      <h3 className="text-xl font-semibold text-[var(--foreground)]">{block.title}</h3>
                      <p className="mt-4 leading-8 text-[var(--muted)]">{block.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <div className="card p-8 sm:p-10">
                  <div className="space-y-5">
                    <div className="space-y-3">
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">{t("pipelineBadge")}</p>
                      <h2 className="section-title">{t("pipelineTitle")}</h2>
                    </div>

                    <ol className="space-y-3">
                      {deepDive.dataFlow.map((step, index) => (
                        <li key={step} className="flex gap-3 text-sm leading-7 text-[var(--muted)]">
                          <span className="font-semibold text-[var(--primary)]">{index + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                <div className="card p-8 sm:p-10">
                  <div className="space-y-5">
                    <div className="space-y-3">
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">{t("technicalChoicesBadge")}</p>
                      <h2 className="section-title">{t("technicalChoicesTitle")}</h2>
                    </div>

                    <div className="space-y-4">
                      {deepDive.technicalChoices.map((choice) => (
                        <div key={choice.title} className="border-t border-[var(--border)] pt-4 first:border-t-0 first:pt-0">
                          <h3 className="text-base font-semibold text-[var(--foreground)]">{choice.title}</h3>
                          <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{choice.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <div className="card p-8 sm:p-10">
                  <div className="space-y-5">
                    <div className="space-y-3">
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">{t("reliabilityBadge")}</p>
                      <h2 className="section-title">{t("reliabilityTitle")}</h2>
                    </div>

                    <ul className="space-y-3 text-sm leading-7 text-[var(--muted)]">
                      {deepDive.quality.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="card p-8 sm:p-10">
                  <div className="space-y-5">
                    <div className="space-y-3">
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">{t("limitationsBadge")}</p>
                      <h2 className="section-title">{t("limitationsTitle")}</h2>
                    </div>

                    <ul className="space-y-3 text-sm leading-7 text-[var(--muted)]">
                      {deepDive.limitations.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="card p-8 sm:p-10">
                <div className="space-y-5">
                  <div className="space-y-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">{t("nextStepsBadge")}</p>
                    <h2 className="section-title">{t("nextStepsTitle")}</h2>
                  </div>

                  <ul className="space-y-3 text-sm leading-7 text-[var(--muted)]">
                    {deepDive.nextSteps.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="card p-8 sm:p-10">
              <div className="space-y-5">
                <div className="space-y-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">{t("challengesBadge")}</p>
                  <h2 className="section-title">{t("challengesTitle")}</h2>
                </div>

                <div className="space-y-4">
                  {project.challenges.map((challenge) => (
                    <div key={challenge} className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-5">
                      <p className="leading-7 text-[var(--muted)]">{challenge}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="card p-8 sm:p-10">
              <div className="space-y-5">
                <div className="space-y-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">{t("outcomesBadge")}</p>
                  <h2 className="section-title">{t("outcomesTitle")}</h2>
                </div>

                <div className="space-y-4">
                  {project.outcomes.map((outcome) => (
                    <div key={outcome} className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-5">
                      <p className="leading-7 text-[var(--muted)]">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {otherProjects.length > 0 && (
            <div className="space-y-8">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">{t("otherProjectsBadge")}</p>
                <h2 className="section-title">{t("otherProjectsTitle")}</h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {otherProjects.map((item) => (
                  <article key={item.slug} className="card overflow-hidden p-0">
                    <div className="relative aspect-[16/10] overflow-hidden border-b border-[var(--border)] bg-[var(--secondary)]">
                      <Image
                        src={item.image}
                        alt={`${item.title} - project preview`}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                      />
                    </div>

                    <div className="space-y-4 p-7">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">{item.category}</p>

                      <h3 className="text-xl font-semibold text-[var(--foreground)]">{item.title}</h3>

                      <p className="leading-7 text-[var(--muted)]">{item.shortDescription}</p>

                      <Link
                        href={`/projects/${item.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] transition-opacity hover:opacity-80"
                      >
                        {t("seeProject")}
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

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
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-80"
                >
                  {t("ctaProjects")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
