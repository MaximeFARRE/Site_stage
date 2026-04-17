import { notFound } from "next/navigation";

import Container from "@/components/layout/container";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="py-24">
      <Container className="max-w-4xl">
        <div className="space-y-8">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-blue-700">
              {project.category}
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {project.title}
            </h1>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-8 sm:p-10">
            <p className="mb-8 whitespace-pre-line text-lg leading-8 text-gray-700">
              {project.longDescription}
            </p>

            <div>
              <h2 className="mb-4 text-lg font-semibold text-gray-900">
                Technologies
              </h2>

              <div className="flex flex-wrap gap-3">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}