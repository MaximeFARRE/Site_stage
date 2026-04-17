import Container from "@/components/layout/container";

const featuredExperiences = [
  {
    period: "févr. 2023 - aujourd’hui",
    title: "Président · Occifloc",
    subtitle: "Entreprise de personnalisation textile et objets",
    description: [
      "Occifloc m’a donné une expérience directe du pilotage d’activité : clients, prix, marges, production, délais, qualité et trésorerie. Les décisions ont des effets immédiats, ce qui oblige à suivre les bons indicateurs.",
      "Cette expérience m’a appris à vendre, organiser, suivre les chiffres, améliorer les processus et arbitrer rapidement. Elle m’a surtout donné une culture d’exécution et de responsabilité.",
      "Ce cadre reste utile pour la finance : raisonner avec des contraintes, prioriser, mesurer les coûts, suivre le cash-flow et garder une lecture claire des risques opérationnels.",
    ],
    learnings: [
      "Pilotage opérationnel et sens des priorités",
      "Suivi de marge, cash-flow et logique économique",
      "Résolution de problèmes et amélioration continue",
      "Relation client, qualité de service et responsabilité",
    ],
  },
  {
    period: "sept. 2025 - aujourd’hui",
    title: "Membre · Blast Club",
    subtitle: "Club d’investissement orienté sociétés early-stage et private markets",
    description: [
      "Blast Club m’expose à des dossiers d’investissement early-stage et private markets. J’y travaille la lecture d’un marché, d’un modèle économique, d’une trajectoire de croissance et d’une équipe.",
      "Cette expérience m’aide à analyser des sociétés non cotées avec un regard plus structuré : taille de marché, unit economics, qualité de l’exécution, risques et potentiel de sortie.",
      "Elle complète mon intérêt pour l’asset management et le private equity en apportant une pratique concrète de l’analyse d’entreprise et du risque d’investissement.",
    ],
    learnings: [
      "Analyse de sociétés early-stage et de business models",
      "Lecture du risque, du potentiel de marché et des unit economics",
      "Culture investissement et premiers réflexes de due diligence",
      "Meilleure compréhension des private markets",
    ],
  },
  {
    period: "sept. 2024 - aujourd’hui",
    title: "Responsable événement · Club Entrepreneurs",
    subtitle: "Animation, organisation et dynamisation d’un collectif étudiant",
    description: [
      "Au sein du Club Entrepreneurs, j’ai pris un rôle d’organisation et de coordination. L’enjeu était de cadrer des événements utiles, gérer les intervenants, anticiper la logistique et maintenir une dynamique régulière.",
      "Cette responsabilité m’a appris à structurer une initiative collective, communiquer clairement et transformer une intention en action organisée.",
      "Je la présente comme une expérience d’exécution : tenir un calendrier, coordonner plusieurs parties prenantes et livrer un format propre aux membres.",
    ],
    learnings: [
      "Organisation et coordination d’événements",
      "Communication claire et gestion des parties prenantes",
      "Prise de responsabilité dans un cadre associatif",
      "Capacité à tenir un calendrier et livrer un format utile",
    ],
  },
];
const workflowTools = [
  "Bloomberg Terminal",
  "Python",
  "SQL",
  "Git",
  "Linux",
  "Excel avancé",
  "Codex",
  "Claude Code",
  "agents IA",
  "automatisation",
  "RAG",
  "n8n",
];

const timelineExperiences = [
  {
    period: "2024 - aujourd’hui",
    title: "ESILV · Master en ingénierie financière",
    description:
      "Formation en ingénierie financière orientée finance de marché, produits dérivés, risque, outils quantitatifs et programmation. Elle structure mon socle académique et renforce mon approche des marchés, du portefeuille et de l’analyse de données.",
  },
  {
    period: "2022 - 2024",
    title: "Classe préparatoire PTSI / PT · Lycée Jean Dupuy",
    description:
      "Une période fondatrice dans ma méthode de travail. La prépa m’a appris la rigueur, la discipline, la modélisation et la résolution de problèmes sous contrainte de temps, notamment en mathématiques, physique et sciences de l’ingénieur.",
  },
  {
    period: "2019 - 2025",
    title: "Professeur particulier · Mathématiques et physique",
    description:
      "Donner des cours m’a appris à expliquer clairement, adapter le niveau de détail et structurer un raisonnement étape par étape. Cette expérience renforce ma capacité à rendre un sujet technique compréhensible.",
  },
];

const earlyExperiences = [
  {
    period: "juil. 2021 - août 2021",
    title: "Assistant production · PLASTISUD",
    description:
      "Travail en environnement industriel avec contraintes de rythme, précision et continuité. Une expérience utile pour comprendre ce que signifie produire, suivre une cadence et rester fiable sur une tâche répétée.",
  },
  {
    period: "juil. 2020 - août 2020",
    title: "Assistant production · PLASTISUD",
    description:
      "Deuxième saison dans un cadre industriel, avec davantage de maturité dans l’organisation, la discipline et la tenue d’un rythme de travail régulier.",
  },
  {
    period: "juil. 2019 - août 2019",
    title: "Chef d’équipe · Exploitation agricole Laurac",
    description:
      "Expérience de terrain avec responsabilité d’équipe, organisation des tâches et suivi du travail réalisé. Elle m’a appris l’effort, la fiabilité et la clarté dans les consignes.",
  },
  {
    period: "févr. 2019",
    title: "Stagiaire · O2SPOT",
    description:
      "Première immersion professionnelle, utile pour découvrir un cadre de travail structuré, des attentes précises et des échanges professionnels formalisés.",
  },
  {
    period: "juil. 2018 - août 2018",
    title: "Ouvrier agricole · Exploitation agricole Laurac",
    description:
      "Première expérience de travail exigeante, très terrain, qui m’a appris tôt la régularité, le sérieux et la fiabilité dans l’exécution.",
  },
];

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

                <h2 className="section-title">Un profil solide et utile</h2>

                <p className="leading-8 text-[var(--muted)]">
                  À travers ces expériences, je cherche à construire un profil
                  capable de combiner analyse financière, maîtrise technique,
                  sens opérationnel et capacité à produire des livrables utiles.
                </p>

                <p className="leading-8 text-[var(--muted)]">
                  L’objectif est simple : être précis dans l’analyse, fiable
                  dans l’exécution et capable de transformer un besoin en outil
                  ou en décision exploitable.
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
