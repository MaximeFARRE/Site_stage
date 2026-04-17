import Link from "next/link";

const experiences = [
  {
    period: "2022 - Aujourd’hui",
    title: "Président · Occifloc",
    description:
      "Développement d’une activité de personnalisation textile, gestion du budget, suivi des marges, pilotage de la trésorerie, mise en place de KPI financiers et amélioration des process.",
  },
  {
    period: "2024 - Aujourd’hui",
    title: "Membre investisseur · Blast Club",
    description:
      "Analyse de sociétés early-stage, étude de marché, lecture des business models, unit economics et première approche des logiques de valorisation.",
  },
  {
    period: "2019 - 2025",
    title: "Professeur particulier · Mathématiques / Physique",
    description:
      "Explication de sujets techniques, adaptation au niveau de l’élève et structuration d’un raisonnement mathématique étape par étape.",
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
      "Bloomberg Terminal",
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
      "Automatisation de workflows",
      "n8n",
      "IA appliquée au code et à l’analyse",
      "Rigueur",
      "Autonomie",
      "Documentation",
    ],
  },
];

const highlights = [
  "Étudiant en ingénierie financière à l’ESILV",
  "Recherche de stage en finance de marché, asset management ou analyse",
  "Construction d’outils quantitatifs en Python sur environnement Linux",
  "Compétences en SQL, Streamlit, backtesting et dashboards financiers",
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
                Un profil orienté finance quantitative, analyse de portefeuille
                et développement d’outils financiers.
              </h1>

              <p className="max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">
                Je suis étudiant à l’ESILV en ingénierie financière, avec un
                intérêt marqué pour les marchés, l’asset management, le private
                equity, l’analyse financière et la recherche quantitative. Je
                construis des outils en Python, SQL et Streamlit pour suivre des
                portefeuilles, backtester des stratégies et structurer des
                données exploitables.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="/files/cv_maxime_farre.pdf"
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

        {/* CV PDF */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
              CV PDF
            </p>
            <a
              href="/files/cv_maxime_farre.pdf"
              download="CV_Maxime_Farre.pdf"
              className="button-primary"
            >
              Télécharger
            </a>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[var(--border)]">
            <embed
              src="/files/cv_maxime_farre.pdf"
              type="application/pdf"
              className="h-[900px] w-full"
            />
          </div>
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
              opérationnelle, et une capacité à construire des outils
              exploitables. Je ne me limite pas à l’analyse : je cherche aussi à
              produire des supports fiables, testables et utiles.
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
                <h3 className="mb-2 text-lg font-semibold">Pilotage</h3>
                <p className="text-sm leading-7 text-[var(--muted)]">
                  Pilotage d’activité, suivi des marges, trésorerie, indicateurs,
                  prise de décision sous contrainte et sens des responsabilités.
                </p>
              </div>

              <div className="rounded-2xl border border-[var(--border)] p-5">
                <h3 className="mb-2 text-lg font-semibold">Mentalité</h3>
                <p className="text-sm leading-7 text-[var(--muted)]">
                  Rigueur, autonomie, documentation, capacité d’adaptation et
                  régularité dans les projets qui demandent de la précision.
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
              href="/files/cv_maxime_farre.pdf"
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
              Je suis ouvert aux échanges autour d’un stage ou d’une opportunité
              en finance de marché, asset management, private equity, analyse
              financière, recherche quantitative ou développement d’outils.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-[var(--background)] px-5 py-3 text-sm font-medium text-[var(--foreground)] transition hover:opacity-90"
              >
                Aller à la page contact
              </Link>

              <a
                href="/files/cv_maxime_farre.pdf"
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
