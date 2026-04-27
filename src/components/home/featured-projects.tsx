import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import Container from "@/components/layout/container";
import { localizeProject } from "@/data/project-i18n";
import { projects, sortProjectsForDisplay } from "@/data/projects";
import { Link } from "@/i18n/navigation";
import { type Locale } from "@/i18n/routing";

export default function FeaturedProjects() {
  const locale = useLocale() as Locale;
  const t = useTranslations("FeaturedProjects");
  const featured = sortProjectsForDisplay(projects.filter((p) => p.featured)).map((project) =>
    localizeProject(project, locale)
  );

  return (
    <section className="section border-t border-[var(--border)]">
      <Container>
        <div className="mb-12 flex items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-[var(--primary)]">
              {t("badge")}
            </span>
            <h2 className="mb-3">{t("title")}</h2>
            <p className="text-base text-[var(--muted)]">{t("description")}</p>
          </div>

          <Link
            href="/projects"
            className="hidden shrink-0 text-sm font-medium text-[var(--primary)] underline-offset-4 hover:underline md:block"
          >
            {t("allProjects")} →
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="group card flex flex-col gap-5 no-underline">
              <div className="relative h-40 w-full overflow-hidden rounded-lg bg-[var(--secondary)]">
                <Image
                  src={project.image}
                  alt={`${project.title} - project preview`}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-medium text-[var(--muted)]">
                  {project.category}
                </span>
                {i === 0 && (
                  <span className="rounded-full bg-[var(--primary)] px-3 py-1 text-xs font-medium text-white">
                    {t("selected")}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-[var(--foreground)] transition group-hover:text-[var(--primary)]">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--muted)]">{project.shortDescription}</p>
              </div>

              <div className="mt-auto flex flex-wrap gap-2 border-t border-[var(--border)] pt-4">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-[var(--secondary)] px-2 py-1 text-xs font-medium text-[var(--muted)]"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="rounded-md bg-[var(--secondary)] px-2 py-1 text-xs font-medium text-[var(--muted)]">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/projects" className="button-secondary">
            {t("viewAllMobile")}
          </Link>
        </div>
      </Container>
    </section>
  );
}
