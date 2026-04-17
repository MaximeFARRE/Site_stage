import Container from "@/components/layout/container";
import { personalInfo } from "@/data/personal-info";

const pillars = [
  {
    title: "Finance",
    description:
      "Je m’intéresse à la finance de marché, à l’analyse d’entreprise et à la construction d’outils utiles pour mieux suivre, comparer et comprendre des actifs ou des portefeuilles.",
  },
  {
    title: "Entrepreneuriat",
    description:
      "Avec Occifloc, j’ai appris à vendre, structurer, suivre des chiffres, piloter une petite organisation et faire avancer un projet concret avec des contraintes réelles.",
  },
  {
    title: "Technique",
    description:
      "J’aime transformer une idée en outil exploitable. J’utilise le code, l’automatisation et les outils data pour créer des solutions simples, utiles et fiables.",
  },
];

const highlights = [
  {
    label: "Formation",
    value: personalInfo.school,
    detail: personalInfo.degree,
  },
  {
    label: "Localisation",
    value: personalInfo.location,
    detail: "Disponible pour de nouvelles opportunités",
  },
  {
    label: "Objectif actuel",
    value: personalInfo.currentGoal,
    detail: "Recherche d’expériences à forte courbe d’apprentissage",
  },
  {
    label: "Vision long terme",
    value: personalInfo.longTermGoal,
    detail: "Construire des projets ambitieux dans la durée",
  },
];

const keyNumbers = [
  {
    value: "2022",
    label: "Début de l’aventure Occifloc",
  },
  {
    value: "35k€",
    label: "Chiffre d’affaires atteint en 2025",
  },
  {
    value: "100k€",
    label: "Objectif de chiffre d’affaires 2026",
  },
  {
    value: "3",
    label: "Axes forts : finance, entrepreneuriat, technique",
  },
];

const faqItems = [
  {
    question: "Pourquoi la finance ?",
    answer:
      "J’aime les environnements où il faut raisonner clairement, prendre du recul, analyser des données et comprendre ce qui crée réellement de la valeur. La finance rassemble tout cela, avec en plus une forte exigence intellectuelle.",
  },
  {
    question: "Pourquoi entreprendre en parallèle de vos études ?",
    answer:
      "Parce que j’aime construire. Entreprendre m’a apporté une expérience concrète de terrain : vente, organisation, suivi financier, prise de décision et sens des priorités. Cela complète très bien mon parcours académique.",
  },
  {
    question: "Qu’est-ce qui vous différencie d’un profil plus classique ?",
    answer:
      "Je combine un socle académique en ingénierie financière, une vraie expérience entrepreneuriale et une forte appétence pour les outils techniques. J’aime autant comprendre un sujet que le transformer en action concrète.",
  },
  {
    question: "Quelle place occupe la technique dans votre profil ?",
    answer:
      "La technique est un levier. Je m’en sers pour automatiser, structurer, analyser et gagner en qualité d’exécution. Je ne code pas pour coder : je code pour résoudre un problème utile.",
  },
  {
    question: "Pourquoi parler du sport sur votre site ?",
    answer:
      "Parce que le sport d’endurance a façonné ma manière de travailler. Il m’a appris la discipline, la constance, la gestion de l’effort, la lucidité sous fatigue et le goût des objectifs ambitieux construits sur le long terme.",
  },
  {
    question: "Que recherchez-vous aujourd’hui ?",
    answer:
      "Je recherche des expériences exigeantes, formatrices et responsabilisantes, dans lesquelles je peux apprendre vite, produire un travail sérieux et apporter de la valeur dès le départ.",
  },
];

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
                    Étudiant en ingénierie financière · Entrepreneur · Builder
                  </p>

                  <h1 className="max-w-4xl">
                    Un profil hybride entre finance, exécution terrain et
                    construction d’outils.
                  </h1>
                </div>

                <p className="max-w-3xl text-lg leading-8 text-[var(--muted)]">
                  Je m’appelle {personalInfo.fullName}. Je développe un profil à
                  la croisée de la finance, de l’entrepreneuriat et de la
                  technique. J’aime comprendre les mécanismes d’un projet,
                  analyser ce qui crée de la valeur et construire des solutions
                  concrètes, utiles et bien exécutées.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-medium text-[var(--foreground)]">
                  Finance de marché
                </span>
                <span className="rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-medium text-[var(--foreground)]">
                  Entrepreneuriat opérationnel
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
                  Au-delà du cadre académique, je suis aussi quelqu’un de
                  terrain. J’aime faire avancer des projets, assumer des
                  responsabilités et progresser dans des environnements où la
                  qualité du travail compte réellement.
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
                  <li>• Capacité à passer de l’idée à l’exécution</li>
                  <li>• Appétence forte pour les projets concrets</li>
                  <li>• Autonomie, intensité de travail et sens du progrès</li>
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
                    Je cherche à continuer à monter en niveau, à multiplier les
                    expériences utiles et à construire un profil fort, crédible
                    et différenciant sur le long terme.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                Mon profil en 3 dimensions
              </p>
              <h2 className="section-title">Trois forces qui se complètent</h2>
              <p className="max-w-3xl text-[var(--muted)]">
                Ce qui rend mon profil particulier, c’est l’association entre
                une formation exigeante, une expérience entrepreneuriale réelle
                et une envie forte de construire des outils et des systèmes
                utiles.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {pillars.map((pillar) => (
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
                  Comprendre, structurer, exécuter
                </h2>

                <p className="leading-8 text-[var(--muted)]">
                  Je suis attiré par les environnements dans lesquels il faut
                  comprendre vite, prendre du recul et produire un travail
                  propre. J’aime les sujets qui demandent à la fois de l’analyse,
                  de la méthode et une vraie capacité d’exécution.
                </p>

                <p className="leading-8 text-[var(--muted)]">
                  À long terme, mon ambition est de continuer à développer un
                  profil capable de relier compréhension financière, vision
                  stratégique et construction opérationnelle. Je suis très
                  sensible aux environnements où l’on apprend beaucoup, où
                  l’exigence est réelle et où les responsabilités sont
                  progressives mais concrètes.
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
                  Triathlon, course à pied, cyclisme ou projets plus exigeants
                  en autonomie m’ont appris à aimer les objectifs construits
                  dans le temps.
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
              {keyNumbers.map((item) => (
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
                {highlights.map((item) => (
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
                Quelques réponses aux questions que l’on peut se poser
              </h2>
              <p className="max-w-3xl text-[var(--muted)]">
                Cette section permet de donner rapidement plus de contexte sur
                ma démarche, ma logique de parcours et la manière dont je
                construis mon profil.
              </p>
            </div>

            <div className="space-y-4">
              {faqItems.map((item) => (
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