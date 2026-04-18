import type { Metadata } from "next";
import Container from "@/components/layout/container";
import {
  aboutFaqItems,
  aboutHighlights,
  aboutKeyNumbers,
  aboutPillars,
} from "@/data/about";
import { personalInfo } from "@/data/personal-info";
import { aboutToolsGroups } from "@/data/skills";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Profil de Maxime Farré: ingénierie financière, analyse de portefeuille, Python, SQL et construction d’outils financiers.",
  alternates: {
    canonical: "/a-propos",
  },
};

export default function AboutPage() {
  return (
    <section className="section">
      <Container className="container-custom max-w-6xl">
        <div className="space-y-20">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                  À propos
                </p>

                <div className="space-y-3">
                  <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--muted)]">
                    Ingénierie financière · Python · Analyse de portefeuille
                  </p>

                  <h1 className="max-w-4xl">
                    Un profil orienté finance quantitative, données et
                    construction d’outils financiers.
                  </h1>
                </div>

                <p className="max-w-3xl text-lg leading-8 text-[var(--muted)]">
                  Je m’appelle {personalInfo.fullName}. Je développe un profil
                  centré sur la finance de marché, l’analyse de portefeuille et
                  les outils data. J’aime cadrer un problème, structurer les
                  données, produire une analyse lisible et construire un support
                  utile à la décision.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-medium text-[var(--foreground)]">
                  Finance de marché
                </span>
                <span className="rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-medium text-[var(--foreground)]">
                  Pilotage opérationnel
                </span>
                <span className="rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-medium text-[var(--foreground)]">
                  Data, automatisation et outils
                </span>
              </div>

              <div className="card space-y-5 p-8">
                <div className="space-y-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
                    Mon profil professionnel
                  </p>

                  <p className="text-base leading-8 text-[var(--muted)] whitespace-pre-line">
                    {personalInfo.longBio}
                  </p>
                </div>

                <p className="text-base leading-8 text-[var(--muted)]">
                  Au-delà du cadre académique, je cherche à produire des choses
                  concrètes et vérifiables : une base qui tient dans la durée,
                  un dashboard qu’on peut vraiment utiliser, une analyse qu’on
                  peut relire et corriger. La qualité du livrable compte autant
                  que le raisonnement.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="card p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
                  Identité professionnelle
                </p>

                <div className="mt-4 space-y-3">
                  <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">
                    {personalInfo.title}
                  </h2>

                  <p className="leading-7 text-[var(--muted)]">
                    {personalInfo.headline}
                  </p>
                </div>
              </div>

              <div className="card p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
                  Ce qui me caractérise
                </p>

                <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--muted)]">
                  <li>• Rigueur analytique et goût des sujets exigeants</li>
                  <li>• Python, SQL, Linux et Git utilisés dans mes projets</li>
                  <li>• Capacité à produire des outils lisibles et utilisables</li>
                  <li>• Autonomie, organisation et attention aux détails</li>
                </ul>
              </div>

              <div className="card p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
                  Aujourd’hui
                </p>

                <div className="mt-4 space-y-3">
                  <p className="font-medium text-[var(--foreground)]">
                    {personalInfo.currentGoal}
                  </p>
                  <p className="text-sm leading-7 text-[var(--muted)]">
                    Je cherche à travailler sur des sujets exigeants en finance,
                    analyse et outils quantitatifs, avec un niveau d’attente
                    élevé sur la rigueur, la précision et la qualité d’exécution.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                Outils maîtrisés
              </p>
              <h2 className="section-title">Les outils que j’utilise pour analyser et produire</h2>
              <p className="max-w-3xl text-[var(--muted)]">
                J’utilise les outils comme des supports de fiabilité : mieux
                collecter les données, réduire les tâches répétitives, suivre des
                indicateurs et rendre une analyse plus claire. L’objectif est
                d’améliorer la qualité du raisonnement, pas d’empiler des outils.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {aboutToolsGroups.map((group) => (
                <div key={group.title} className="card p-7">
                  <h3 className="text-lg font-semibold text-[var(--foreground)]">
                    {group.title}
                  </h3>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 text-sm text-[var(--muted)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                Trois axes de travail
              </p>
              <h2 className="section-title">Finance, data et exécution</h2>
              <p className="max-w-3xl text-[var(--muted)]">
                Mon parcours repose sur une base d’ingénierie financière, une
                pratique technique régulière et une expérience de pilotage réel.
                Ces trois axes me servent à analyser, construire et livrer.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {aboutPillars.map((pillar) => (
                <div key={pillar.title} className="card p-8">
                  <h3 className="text-xl font-semibold text-[var(--foreground)]">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 leading-7 text-[var(--muted)]">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="card p-8 sm:p-10">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                  Ce qui me motive
                </p>

                <h2 className="section-title">
                  Finance, données, rigueur
                </h2>

                <p className="leading-8 text-[var(--muted)]">
                  Ce qui me motive, c’est travailler sur des sujets où la
                  qualité de l’analyse change vraiment le résultat : pricing,
                  gestion de portefeuille, risque, données financières. Des
                  environnements où on est attendu sur la précision, pas
                  seulement sur l’intention.
                </p>

                <p className="leading-8 text-[var(--muted)]">
                  À terme, je veux construire une expertise solide en gestion
                  d’actifs et analyse quantitative. Je cherche des contextes où
                  la courbe d’apprentissage est raide et où les responsabilités
                  suivent le niveau de travail fourni.
                </p>
              </div>
            </div>

            <div className="card p-8 sm:p-10">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                  Sport et mentalité
                </p>

                <h2 className="section-title">
                  Endurance, discipline et lucidité
                </h2>

                <p className="leading-8 text-[var(--muted)]">
                  Le sport occupe une place importante dans mon équilibre.
                  Triathlon, course à pied, cyclisme ou projets en autonomie
                  m’ont appris à préparer un effort, tenir un plan et rester
                  lucide lorsque la fatigue s’installe.
                </p>

                <p className="leading-8 text-[var(--muted)]">
                  J’y retrouve des qualités que j’essaie aussi d’appliquer dans
                  le travail : régularité, patience, résistance à l’effort,
                  gestion de l’incertitude et volonté de progresser sans brûler
                  les étapes.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                Repères clés
              </p>
              <h2 className="section-title">Quelques éléments concrets</h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {aboutKeyNumbers.map((item) => (
                <div key={item.label} className="card p-8">
                  <p className="text-3xl font-semibold tracking-tight text-[var(--foreground)]">
                    {item.value}
                  </p>
                  <p className="mt-3 leading-7 text-[var(--muted)]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-8 sm:p-10">
            <div className="space-y-8">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                  En bref
                </p>
                <h2 className="section-title">Mon profil aujourd’hui</h2>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {aboutHighlights.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6">
                    <p className="text-sm font-medium text-[var(--muted)]">
                      {item.label}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-[var(--foreground)]">
                      {item.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                FAQ recruteur
              </p>
              <h2 className="section-title">
                Quelques réponses pour mieux situer mon profil
              </h2>
              <p className="max-w-3xl text-[var(--muted)]">
                Cette section précise ma logique de parcours, la place de la
                technique et le type d’opportunités que je recherche aujourd’hui.
              </p>
            </div>

            <div className="space-y-4">
              {aboutFaqItems.map((item) => (
                <details
                  key={item.question}
                  className="card group p-0"
                >
                  <summary className="cursor-pointer list-none px-6 py-5 text-left text-base font-semibold text-[var(--foreground)] marker:hidden">
                    <div className="flex items-center justify-between gap-4">
                      <span>{item.question}</span>
                      <span className="text-[var(--primary)] transition-transform duration-200 group-open:rotate-45">
                        +
                      </span>
                    </div>
                  </summary>

                  <div className="px-6 pb-6">
                    <p className="leading-7 text-[var(--muted)]">
                      {item.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
