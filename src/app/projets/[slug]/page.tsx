import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Container from "@/components/layout/container";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Projet introuvable",
      description: "Le projet demandé n’existe pas ou n’est plus disponible.",
    };
  }

  return {
    title: project.title,
    description: project.shortDescription,
    alternates: {
      canonical: `/projets/${project.slug}`,
    },
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const otherProjects = projects.filter((item) => item.slug !== project.slug).slice(0, 2);

  return (
    <section className="section">
      <Container className="container-custom max-w-6xl">
        <div className="space-y-20">
          <div className="space-y-8">
            <Link
              href="/projets"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] transition-opacity hover:opacity-80"
            >
              <span aria-hidden="true">←</span>
              Retour aux projets
            </Link>

            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                    {project.category}
                  </p>

                  <h1>{project.title}</h1>

                  <p className="max-w-3xl text-lg leading-8 text-[var(--muted)]">
                    {project.longDescription}
                  </p>
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
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
                    Ce que ce projet démontre
                  </p>

                  <p className="mt-4 leading-8 text-[var(--foreground)]">
                    {project.whatItShows}
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                <div className="overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--card)]">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={project.image}
                      alt={`${project.title} - vue détaillée`}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                <div className="card p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
                    Mon rôle
                  </p>

                  <p className="mt-4 leading-8 text-[var(--muted)]">
                    {project.role}
                  </p>
                </div>

                {project.links && project.links.length > 0 && (
                  <div className="card p-7">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
                      Liens
                    </p>

                    <div className="mt-4 flex flex-wrap gap-3">
                      {project.links.map((link) => (
                        link.href.startsWith("/") ? (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="button-secondary"
                          >
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
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="card p-8 lg:col-span-1">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
                Contexte
              </p>

              <p className="mt-4 leading-8 text-[var(--muted)]">
                {project.context}
              </p>
            </div>

            <div className="card p-8 lg:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
                Objectif
              </p>

              <p className="mt-4 leading-8 text-[var(--muted)]">
                {project.objective}
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="card p-8 sm:p-10">
              <div className="space-y-5">
                <div className="space-y-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                    Difficultés rencontrées
                  </p>
                  <h2 className="section-title">Les principaux enjeux du projet</h2>
                </div>

                <div className="space-y-4">
                  {project.challenges.map((challenge) => (
                    <div
                      key={challenge}
                      className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-5"
                    >
                      <p className="leading-7 text-[var(--muted)]">{challenge}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="card p-8 sm:p-10">
              <div className="space-y-5">
                <div className="space-y-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                    Résultats et apprentissages
                  </p>
                  <h2 className="section-title">Ce que j’en retiens</h2>
                </div>

                <div className="space-y-4">
                  {project.outcomes.map((outcome) => (
                    <div
                      key={outcome}
                      className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-5"
                    >
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
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                  Autres projets
                </p>
                <h2 className="section-title">Continuer la visite</h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {otherProjects.map((item) => (
                  <article key={item.slug} className="card overflow-hidden p-0">
                    <div className="relative aspect-[16/10] overflow-hidden border-b border-[var(--border)] bg-[var(--secondary)]">
                      <Image
                        src={item.image}
                        alt={`${item.title} - aperçu du projet`}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                      />
                    </div>

                    <div className="space-y-4 p-7">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
                        {item.category}
                      </p>

                      <h3 className="text-xl font-semibold text-[var(--foreground)]">
                        {item.title}
                      </h3>

                      <p className="leading-7 text-[var(--muted)]">
                        {item.shortDescription}
                      </p>

                      <Link
                        href={`/projets/${item.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] transition-opacity hover:opacity-80"
                      >
                        Voir ce projet
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
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
                Échanger
              </p>

              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Je peux détailler les choix techniques et les résultats en entretien.
              </h2>

              <p className="leading-8 text-white/80">
                Si ce projet vous intéresse, je peux revenir plus précisément sur
                le besoin initial, la structure des données, les hypothèses, les
                difficultés rencontrées et les limites de l’analyse.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Me contacter
                </Link>

                <Link
                  href="/projets"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-80"
                >
                  Voir tous les projets
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
