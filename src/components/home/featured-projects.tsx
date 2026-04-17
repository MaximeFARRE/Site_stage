import Link from "next/link";

import Container from "@/components/layout/container";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="section border-t border-[var(--border)]">
      <Container>
        {/* Header */}
        <div className="mb-12 flex items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-[var(--primary)]">
              Projets sélectionnés
            </span>
            <h2 className="mb-3">Ce que je construis</h2>
            <p className="text-base text-[var(--muted)]">
              Des projets concrets à l'intersection de la finance, de la
              technologie et de l'entrepreneuriat.
            </p>
          </div>

          <Link
            href="/projets"
            className="hidden shrink-0 text-sm font-medium text-[var(--primary)] underline-offset-4 hover:underline md:block"
          >
            Tous les projets →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <Link
              key={project.slug}
              href={`/projets/${project.slug}`}
              className="group card flex flex-col gap-5 no-underline"
            >
              {/* Image placeholder */}
              <div className="h-40 w-full rounded-lg bg-[var(--secondary)] transition group-hover:bg-[var(--border)]" />

              {/* Category */}
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-medium text-[var(--muted)]">
                  {project.category}
                </span>
                {i === 0 && (
                  <span className="rounded-full bg-[var(--primary)] px-3 py-1 text-xs font-medium text-white">
                    Featured
                  </span>
                )}
              </div>

              {/* Title + description */}
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-[var(--foreground)] transition group-hover:text-[var(--primary)]">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  {project.shortDescription}
                </p>
              </div>

              {/* Stack */}
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

        {/* Mobile CTA */}
        <div className="mt-8 text-center md:hidden">
          <Link href="/projets" className="button-secondary">
            Voir tous les projets
          </Link>
        </div>
      </Container>
    </section>
  );
}
