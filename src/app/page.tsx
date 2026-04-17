import Link from "next/link";
import Image from "next/image";

import Container from "@/components/layout/container";
import { projects } from "@/data/projects";

const categories = [
  "Tous",
  "Finance",
  "Data",
  "Automatisation",
  "Entrepreneuriat",
];

export default function ProjectsPage() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section className="section">
      <Container className="container-custom max-w-6xl">
        <div className="space-y-20">
          <div className="max-w-4xl space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
              Projets
            </p>

            <div className="space-y-4">
              <h1>Des projets conçus pour apprendre, construire et démontrer.</h1>

              <p className="text-lg leading-8 text-[var(--muted)]">
                Cette page rassemble des projets qui croisent finance,
                structuration de données, outils d’analyse, automatisation et
                entrepreneuriat. L’objectif n’est pas seulement de montrer ce
                que j’ai fait, mais aussi ce que ces projets disent de ma façon
                de travailler : comprendre un besoin, construire une solution et
                progresser par l’exécution.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-medium text-[var(--muted)]"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                Projets mis en avant
              </p>
              <h2 className="section-title">
                Les projets les plus représentatifs de mon profil
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {featuredProjects.map((project, index) => (
                <article key={project.slug} className="card overflow-hidden p-0">
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-[var(--border)] bg-[var(--secondary)]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                    />

                    {index === 0 && (
                      <div className="absolute left-5 top-5 rounded-full bg-[var(--foreground)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                        Featured
                      </div>
                    )}
                  </div>

                  <div className="space-y-6 p-8">
                    <div className="space-y-3">
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
                        {project.category}
                      </p>

                      <h3 className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">
                        {project.title}
                      </h3>

                      <p className="leading-8 text-[var(--muted)]">
                        {project.shortDescription}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <p className="text-sm font-medium text-[var(--muted)]">
                        Ce que ce projet démontre
                      </p>
                      <p className="text-base leading-7 text-[var(--foreground)]">
                        {project.whatItShows}
                      </p>
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
                        Résumé rapide disponible ici, détail complet sur la page
                        projet.
                      </p>

                      <Link
                        href={`/projets/${project.slug}`}
                        className="button-primary whitespace-nowrap"
                      >
                        Voir le projet
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                Tous les projets
              </p>
              <h2 className="section-title">
                Une sélection de projets construits avec une logique concrète
              </h2>
              <p className="max-w-3xl text-[var(--muted)]">
                Chaque projet répond à une logique simple : partir d’un besoin
                réel, structurer une solution utile et en tirer des
                apprentissages concrets. Certains sont plus orientés finance,
                d’autres davantage produit, data ou entrepreneuriat.
              </p>
            </div>

            <div className="grid gap-6 xl:grid-cols-3">
              {projects.map((project) => (
                <article key={project.slug} className="card overflow-hidden p-0">
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-[var(--border)] bg-[var(--secondary)]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                    />
                  </div>

                  <div className="space-y-5 p-7">
                    <div className="space-y-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
                        {project.category}
                      </p>

                      <h3 className="text-xl font-semibold text-[var(--foreground)]">
                        {project.title}
                      </h3>

                      <p className="leading-7 text-[var(--muted)]">
                        {project.shortDescription}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-medium text-[var(--muted)]">
                        Ce que cela montre
                      </p>
                      <p className="text-sm leading-7 text-[var(--foreground)]">
                        {project.whatItShows}
                      </p>
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
                        href={`/projets/${project.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] transition-opacity hover:opacity-80"
                      >
                        Voir le détail
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] bg-[var(--foreground)] px-8 py-10 sm:px-10 sm:py-12">
            <div className="max-w-3xl space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
                Aller plus loin
              </p>

              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Chaque projet peut être détaillé davantage en entretien.
              </h2>

              <p className="leading-8 text-white/80">
                Cette sélection donne une vue synthétique de ma manière de
                travailler. En entretien, je peux revenir plus en détail sur les
                choix, les difficultés, les arbitrages et les apprentissages
                tirés de chaque projet.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Me contacter
                </Link>

                <Link
                  href="/cv"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-80"
                >
                  Voir mon CV
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}