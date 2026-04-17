import Container from "@/components/layout/container";

const experiences = [
  {
    period: "2024 - Aujourd’hui",
    title: "Fondateur - Occifloc",
    description:
      "Création et développement d’une entreprise spécialisée dans la personnalisation textile, les objets publicitaires et les outils de production.",
  },
  {
    period: "2025 - Aujourd’hui",
    title: "Étudiant en ingénierie financière - ESILV",
    description:
      "Formation en finance, gestion d’actifs, analyse quantitative, data et entrepreneuriat.",
  },
];

export default function ExperiencesPage() {
  return (
    <section className="py-24">
      <Container className="max-w-4xl">
        <div className="mb-14 space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-700">
            Expériences
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Mon parcours
          </h1>
        </div>

        <div className="space-y-6">
          {experiences.map((experience) => (
            <div
              key={experience.title}
              className="rounded-3xl border border-gray-200 bg-white p-8"
            >
              <p className="mb-3 text-sm font-medium text-blue-700">
                {experience.period}
              </p>

              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                {experience.title}
              </h2>

              <p className="leading-7 text-gray-600">
                {experience.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}