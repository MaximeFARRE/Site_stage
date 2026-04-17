import Link from "next/link";

const experiences = [
  {
    period: "2022 - Aujourd’hui",
    title: "Co-fondateur & dirigeant · Occifloc",
    description:
      "Développement d’une activité de personnalisation textile, gestion du budget, suivi des marges, pilotage de la trésorerie, mise en place de KPI financiers et amélioration des process.",
  },
  {
    period: "2024 - Aujourd’hui",
    title: "Membre investisseur · Blast Club",
    description:
      "Analyse de startups early-stage, étude du marché, compréhension des business models et première approche de la valorisation.",
  },
  {
    period: "2019 - 2025",
    title: "Professeur particulier · Mathématiques / Physique",
    description:
      "Transmission, pédagogie, structuration des idées et capacité à simplifier des sujets techniques.",
  },
];

const education = [
  {
    period: "2024 - 2027",
    title: "ESILV · MSc / Master en finance de marché",
    description:
      "Parcours orienté ingénierie financière : market risk, equity derivatives, commodities markets, machine learning for finance.",
  },
  {
    period: "2022 - 2024",
    title: "Classe préparatoire PTSI / PT · Lycée Jean Dupuy",
    description:
      "Formation exigeante en mathématiques, physique et rigueur analytique.",
  },
];

const skills = [
  {
    title: "Finance",
    items: [
      "Black-Scholes",
      "Monte Carlo",
      "VaR",
      "Stress testing",
      "Portfolio optimisation",
      "Backtesting",
      "Analyse d’entreprise",
    ],
  },
  {
    title: "Data & développement",
    items: [
      "Python",
      "Pandas / NumPy",
      "SQL",
      "Git",
      "Linux",
      "C++",
      "VBA",
      "SQLite",
      "Streamlit",
    ],
  },
  {
    title: "Outils & exécution",
    items: [
      "Excel avancé",
      "Bloomberg Terminal",
      "Automatisation de workflows",
      "n8n",
      "IA appliquée au code et à l’analyse",
      "Rigueur",
      "Autonomie",
      "Décision rapide",
    ],
  },
];

const highlights = [
  "Étudiant en ingénierie financière à l’ESILV",
  "Entrepreneur opérationnel avec une vraie expérience terrain",
  "Construction d’outils quantitatifs en Python sur environnement Linux",
  "Profil hybride : finance, exécution business, technologie",
];

export default function CvPage() {
  return (
    <main className="section">
      <div className="container-custom space-y-16">
        <section className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div className="space-y-6">
            <div className="inline-flex w-fit items-center rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm text-[var(--muted)]">
              CV · Profil · Parcours
            </div>

            <div className="space-y-4">
              <h1 className="section-title max-w-3xl">
                Un profil à l’intersection de la finance, de l’entrepreneuriat
                et de la construction d’outils concrets.
              </h1>

              <p className="max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">
                Je suis étudiant à l’ESILV en ingénierie financière, avec un
                intérêt fort pour l’analyse, les marchés, la recherche
                quantitative et la création de solutions utiles. En parallèle de
                mon parcours académique, je développe des projets concrets en
                Python et je dirige Occifloc, une entreprise que je fais grandir
                sur le terrain.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="/files/cv-maxime-farre.pdf"
                target="_blank"
                rel="noreferrer"
                className="button-primary"
              >
                Télécharger le CV
              </a>

              <Link href="/contact" className="button-secondary">
                Me contacter
              </Link>
            </div>
          </div>

          <aside className="card space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
                Aperçu rapide
              </p>
              <h2 className="text-2xl font-semibold">Maxime Farré</h2>
              <p className="text-sm leading-6 text-[var(--muted)]">
                Paris, France
                <br />
                Stage de 4 à 6 mois
                <br />
                Disponible à partir d’avril
              </p>
            </div>

            <div className="h-px w-full bg-[var(--border)]" />

            <div className="space-y-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <div className="card lg:col-span-1">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
              Positionnement
            </p>
            <h2 className="mb-4 text-2xl font-semibold">
              Ce que mon profil apporte
            </h2>
            <p className="text-sm leading-7 text-[var(--muted)]">
              Une base académique sérieuse en finance, une vraie expérience
              entrepreneuriale, et une capacité à transformer des idées en outils
              ou en systèmes concrets. Je ne me limite pas à l’analyse : j’aime
              aussi construire, tester et améliorer.
            </p>
          </div>

          <div className="card lg:col-span-2">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
              Résumé
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-[var(--border)] p-5">
                <h3 className="mb-2 text-lg font-semibold">Finance</h3>
                <p className="text-sm leading-7 text-[var(--muted)]">
                  Pricing d’options, mesure du risque, optimisation de
                  portefeuille, compréhension des marchés et premiers travaux en
                  finance quantitative.
                </p>
              </div>

              <div className="rounded-2xl border border-[var(--border)] p-5">
                <h3 className="mb-2 text-lg font-semibold">Technologie</h3>
                <p className="text-sm leading-7 text-[var(--muted)]">
                  Développement d’outils en Python, structuration de données,
                  automatisation, utilisation de Linux, Git, SQL et Streamlit.
                </p>
              </div>

              <div className="rounded-2xl border border-[var(--border)] p-5">
                <h3 className="mb-2 text-lg font-semibold">Entrepreneuriat</h3>
                <p className="text-sm leading-7 text-[var(--muted)]">
                  Pilotage d’activité, gestion de la marge, vision opérationnelle,
                  prise de décision rapide et sens des responsabilités.
                </p>
              </div>

              <div className="rounded-2xl border border-[var(--border)] p-5">
                <h3 className="mb-2 text-lg font-semibold">Mentalité</h3>
                <p className="text-sm leading-7 text-[var(--muted)]">
                  Rigueur, autonomie, capacité d’adaptation, résilience et goût
                  de l’effort dans les projets de long terme.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-3">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
              Parcours
            </p>
            <h2 className="section-title">Expériences principales</h2>
          </div>

          <div className="space-y-4">
            {experiences.map((item) => (
              <article key={item.title} className="card">
                <div className="grid gap-4 md:grid-cols-[180px_1fr] md:gap-8">
                  <div className="text-sm font-medium text-[var(--primary)]">
                    {item.period}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)] md:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-3">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
              Formation
            </p>
            <h2 className="section-title">Formation et socle académique</h2>
          </div>

          <div className="space-y-4">
            {education.map((item) => (
              <article key={item.title} className="card">
                <div className="grid gap-4 md:grid-cols-[180px_1fr] md:gap-8">
                  <div className="text-sm font-medium text-[var(--primary)]">
                    {item.period}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)] md:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-3">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
              Compétences
            </p>
            <h2 className="section-title">Compétences clés</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {skills.map((group) => (
              <div key={group.title} className="card">
                <h3 className="mb-4 text-xl font-semibold">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--muted)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="card">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="space-y-3">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
                CV PDF
              </p>
              <h2 className="text-2xl font-semibold md:text-3xl">
                Consulter la version complète de mon CV
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-[var(--muted)] md:text-base">
                Cette page présente une version synthétique de mon parcours. La
                version PDF permet d’avoir une lecture plus directe et plus
                classique pour un recruteur.
              </p>
            </div>

            <a
              href="/files/cv-maxime-farre.pdf"
              target="_blank"
              rel="noreferrer"
              className="button-primary"
            >
              Ouvrir le CV PDF
            </a>
          </div>
        </section>

        <section className="card bg-[var(--foreground)] text-[var(--background)]">
          <div className="space-y-5">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--background)]/70">
              Contact
            </p>
            <h2 className="max-w-3xl text-3xl font-semibold md:text-4xl">
              Vous recherchez un profil capable d’analyser, d’exécuter et de
              construire ?
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-[var(--background)]/75 md:text-base">
              Je suis ouvert aux échanges autour d’un stage, d’une opportunité ou
              d’un projet ambitieux en finance, entrepreneuriat ou technologie.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-[var(--background)] px-5 py-3 text-sm font-medium text-[var(--foreground)] transition hover:opacity-90"
              >
                Aller à la page contact
              </Link>

              <a
                href="/files/cv-maxime-farre.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[var(--background)]/20 px-5 py-3 text-sm font-medium text-[var(--background)] transition hover:bg-[var(--background)]/10"
              >
                Télécharger le CV
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}