import Container from "@/components/layout/container";
import { personalInfo } from "@/data/personal-info";
import { socialLinks } from "@/data/social-links";

export default function Hero() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="max-w-4xl">
        <div className="space-y-8">
          <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">
            {personalInfo.title}
          </div>

          <div className="space-y-6">
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {personalInfo.headline}
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-gray-600 sm:text-xl">
              {personalInfo.shortBio}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="/projets"
              className="rounded-xl bg-blue-700 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-800"
            >
              Voir mes projets
            </a>

            <a
              href={socialLinks.cv}
              target="_blank"
              className="rounded-xl border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:bg-white"
            >
              Télécharger mon CV
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}