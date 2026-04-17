import Container from "@/components/layout/container";
import { personalInfo } from "@/data/personal-info";

export default function AboutPage() {
  return (
    <section className="py-24">
      <Container className="max-w-4xl">
        <div className="space-y-10">
          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-700">
              À propos
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Qui je suis
            </h1>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-8 sm:p-10">
            <div className="space-y-6">
              <p className="text-lg leading-8 text-gray-700 whitespace-pre-line">
                {personalInfo.longBio}
              </p>

              <div className="grid gap-6 pt-6 sm:grid-cols-2">
                <div>
                  <p className="mb-2 text-sm font-medium text-gray-500">
                    Formation
                  </p>
                  <p className="text-base font-semibold text-gray-900">
                    {personalInfo.school}
                  </p>
                  <p className="text-gray-600">{personalInfo.degree}</p>
                </div>

                <div>
                  <p className="mb-2 text-sm font-medium text-gray-500">
                    Localisation
                  </p>
                  <p className="text-base font-semibold text-gray-900">
                    {personalInfo.location}
                  </p>
                </div>

                <div>
                  <p className="mb-2 text-sm font-medium text-gray-500">
                    Objectif actuel
                  </p>
                  <p className="text-gray-700">
                    {personalInfo.currentGoal}
                  </p>
                </div>

                <div>
                  <p className="mb-2 text-sm font-medium text-gray-500">
                    Vision long terme
                  </p>
                  <p className="text-gray-700">
                    {personalInfo.longTermGoal}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}