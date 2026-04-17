import Link from "next/link";

import Container from "@/components/layout/container";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
    const featuredProjects = projects.filter((project) => project.featured);

    return (
        <section className="pb-24">
            <Container>
                <div className="mb-10 flex items-end justify-between gap-6">
                    <div className="max-w-2xl space-y-4">
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-700">
                            Projets sélectionnés
                        </p>

                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Quelques projets dont je suis particulièrement fier
                        </h2>
                    </div>

                    <Link
                        href="/projets"
                        className="hidden text-sm font-medium text-blue-700 hover:underline md:block"
                    >
                        Voir tous les projets
                    </Link>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">
                    {featuredProjects.map((project) => (
                        <Link
                            key={project.slug}
                            href={`/projets/${project.slug}`}
                            className="group rounded-3xl border border-gray-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="mb-4 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                                {project.category}
                            </div>

                            <h3 className="mb-4 text-2xl font-semibold text-gray-900 transition group-hover:text-blue-700">
                                {project.title}
                            </h3>

                            <p className="mb-6 text-sm leading-7 text-gray-600">
                                {project.shortDescription}
                            </p>

                            <span className="text-sm font-medium text-blue-700">
                                En savoir plus →
                            </span>
                        </Link>
                    ))}
                </div>
            </Container>
        </section>
    );
}