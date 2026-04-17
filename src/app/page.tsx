import Link from "next/link";

import Container from "@/components/layout/container";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <section className="py-24">
      <Container>
        <div className="mb-14 max-w-3xl space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-700">
            Projets
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Quelques projets que j’ai réalisés
          </h1>

          <p className="text-lg leading-8 text-gray-600">
            Une sélection de projets autour de la finance, de
            l’entrepreneuriat et de la technologie.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projets/${project.slug}`}
              className="group rounded-3xl border border-gray-200 bg-white p-8 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                {project.category}
              </div>

              <h2 className="mb-4 text-2xl font-semibold text-gray-900 transition group-hover:text-blue-700">
                {project.title}
              </h2>

              <p className="mb-6 text-sm leading-7 text-gray-600">
                {project.shortDescription}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-500"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}