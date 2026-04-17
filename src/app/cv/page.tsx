import Container from "@/components/layout/container";
import { socialLinks } from "@/data/social-links";

export default function CvPage() {
  return (
    <section className="py-24">
      <Container className="max-w-3xl">
        <div className="space-y-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-700">
            CV
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Mon CV
          </h1>

          <p className="text-lg leading-8 text-gray-600">
            Retrouvez ici une version téléchargeable de mon CV ainsi qu’un
            résumé rapide de mon profil.
          </p>

          <div className="rounded-3xl border border-gray-200 bg-white p-8">
            <div className="space-y-4">
              <p className="leading-7 text-gray-600">
                Étudiant en ingénierie financière, entrepreneur et passionné par
                la gestion d’actifs, la technologie et la création de projets.
              </p>

              <a
                href={socialLinks.cv}
                target="_blank"
                className="inline-flex rounded-xl bg-blue-700 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-800"
              >
                Télécharger le CV
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}