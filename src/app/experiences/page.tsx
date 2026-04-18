import type { Metadata } from "next";
import Container from "@/components/layout/container";
import {
  earlyExperiences,
  featuredExperiences,
  timelineExperiences,
} from "@/data/experiences";
import { workflowTools } from "@/data/skills";

export const metadata: Metadata = {
  title: "Expériences",
  description:
    "Expériences académiques et opérationnelles en finance, investissement, pilotage d’activité et exécution.",
  alternates: {
    canonical: "/experiences",
  },
};

export default function ExperiencesPage() {
  return (
    <section className="section">
      <Container className="container-custom max-w-6xl">
        <div className="space-y-20">
          <div className="max-w-4xl space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
              Expériences
            </p>

            <div className="space-y-4">
              <h1>Un parcours construit par la rigueur, les données et l’exécution.</h1>

              <p className="text-lg leading-8 text-[var(--muted)]">
                Mon parcours combine formation en ingénierie financière,
                projets quantitatifs, analyse d’investissement, responsabilités
                opérationnelles et expériences de terrain. Je cherche à
                construire un profil capable d’analyser, structurer et livrer.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                Expériences clés
              </p>
              <h2 className="section-title">Les expériences qui structurent le plus ma méthode</h2>
              <p className="max-w-3xl text-[var(--muted)]">
                Ce sont les expériences qui ont le plus renforcé ma manière de
                travailler : suivre des indicateurs, analyser un dossier,
                organiser une équipe et livrer avec régularité.
              </p>
            </div>

            <div className="space-y-8">
              {featuredExperiences.map((experience) => (
                <div key={experience.title} className="card p-8 sm:p-10">
                  <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                    <div className="space-y-4">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
                        {experience.period}
                      </p>

                      <div className="space-y-3">
                        <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">
                          {experience.title}
                        </h2>
                        <p className="text-base font-medium text-[var(--muted)]">
                          {experience.subtitle}
                        </p>
                      </div>

                      <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6">
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
                          Ce que cela m’a apporté
                        </p>

                        <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--muted)]">
                          {experience.learnings.map((learning) => (
                            <li key={learning}>• {learning}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-5">
                      {experience.description.map((paragraph, index) => (
                        <p
                          key={`${experience.title}-${index}`}
                          className="leading-8 text-[var(--muted)]"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                Formation et progression
              </p>
              <h2 className="section-title">Les étapes qui ont construit ma méthode de travail</h2>
            </div>

            <div className="relative space-y-8 before:absolute before:left-[11px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-[var(--border)]">
              {timelineExperiences.map((experience) => (
                <div
                  key={experience.title}
                  className="relative pl-10"
                >
                  <span className="absolute left-0 top-2 h-6 w-6 rounded-full border border-[var(--border)] bg-[var(--card)] shadow-sm" />

                  <div className="card p-7">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
                      {experience.period}
                    </p>

                    <h3 className="mt-3 text-xl font-semibold text-[var(--foreground)]">
                      {experience.title}
                    </h3>

                    <p className="mt-4 leading-8 text-[var(--muted)]">
                      {experience.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="card p-8 sm:p-10">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                  Ce que raconte ce parcours
                </p>

                <h2 className="section-title">Une progression logique</h2>

                <p className="leading-8 text-[var(--muted)]">
                  Quand je regarde mon parcours, je vois une progression claire :
                  des expériences de terrain, une formation scientifique
                  exigeante, puis des projets orientés finance, données et
                  organisation. Chaque étape a renforcé ma méthode.
                </p>

                <p className="leading-8 text-[var(--muted)]">
                  Ce chemin m’a appris qu’un bon résultat dépend surtout de la
                  clarté du cadre, de la qualité des données, de la régularité
                  d’exécution et de la capacité à corriger rapidement.
                </p>
              </div>
            </div>

            <div className="card p-8 sm:p-10">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                  Ce que j’essaie de développer
                </p>

                <h2 className="section-title">Un profil ancré dans la pratique</h2>

                <p className="leading-8 text-[var(--muted)]">
                  Ces expériences m’ont donné des réflexes concrets : cadrer un
                  besoin, choisir les bons indicateurs, produire quelque chose
                  qu’on peut vérifier et corriger.
                </p>

                <p className="leading-8 text-[var(--muted)]">
                  Ce que je cherche maintenant, c’est appliquer cette méthode à
                  des sujets financiers plus complexes — portefeuille, risque,
                  marchés — avec un niveau d’exigence élevé.
                </p>
              </div>
            </div>
          </div>
          <div className="card p-8 sm:p-10">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                  Outils et méthodes de travail
                </p>
                <h2 className="section-title">Les outils que je mobilise dans mes projets</h2>
              </div>

              <p className="leading-8 text-[var(--muted)]">
                Au-delà des outils académiques, j’utilise des outils de
                développement, d’automatisation et de structuration de workflows.
                Ils me servent à accélérer les tâches répétitives, fiabiliser les
                analyses, documenter les étapes et produire des supports plus
                propres.
              </p>

              <div className="flex flex-wrap gap-2">
                {workflowTools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 text-sm text-[var(--muted)]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                Premières expériences
              </p>
              <h2 className="section-title">Le terrain avant tout</h2>
              <p className="max-w-3xl text-[var(--muted)]">
                Ces expériences sont plus anciennes, mais elles comptent. Elles
                m’ont appris tôt la discipline, la régularité, le respect des
                consignes et la fiabilité dans l’exécution.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {earlyExperiences.map((experience) => (
                <div key={`${experience.period}-${experience.title}`} className="card p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
                    {experience.period}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold text-[var(--foreground)]">
                    {experience.title}
                  </h3>

                  <p className="mt-4 leading-7 text-[var(--muted)]">
                    {experience.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
