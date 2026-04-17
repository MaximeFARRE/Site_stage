import Container from "@/components/layout/container";

const featuredExperiences = [
  {
    period: "févr. 2023 - aujourd’hui",
    title: "Président · Occifloc",
    subtitle: "Entreprise de personnalisation textile et objets",
    description: [
      "Occifloc est mon expérience la plus structurante. En développant cette entreprise, j’ai appris à faire avancer un projet réel, avec des clients, des contraintes de marge, de production, de délais et de qualité.",
      "Cette aventure m’a obligé à être concret : vendre, organiser, suivre les chiffres, améliorer les processus et prendre des décisions rapidement. C’est là que j’ai développé une vraie culture de l’exécution.",
      "Au-delà de l’entrepreneuriat, Occifloc m’a appris des réflexes précieux pour la finance et le management : regarder les bons indicateurs, arbitrer, prioriser, piloter sous contrainte et garder une vision long terme.",
    ],
    learnings: [
      "Pilotage opérationnel et sens des priorités",
      "Suivi de marge, cash-flow et logique économique",
      "Résolution de problèmes et amélioration continue",
      "Management, relation client et sens du résultat",
    ],
  },
  {
    period: "sept. 2025 - aujourd’hui",
    title: "Membre · Blast Club",
    subtitle: "Club d’investissement orienté startups et private markets",
    description: [
      "Blast Club s’inscrit naturellement dans mon intérêt pour l’investissement, l’analyse d’entreprise et la compréhension des modèles économiques.",
      "Être membre me permet de me confronter à des logiques d’investissement concrètes, avec une approche plus orientée startup, croissance, potentiel de marché et qualité de l’exécution entrepreneuriale.",
      "Cette expérience complète bien mon profil : elle nourrit ma curiosité pour l’investissement, affine mon regard sur la création de valeur et m’aide à mieux relier analyse financière, vision stratégique et lecture business.",
    ],
    learnings: [
      "Analyse simplifiée de startups et de business models",
      "Réflexion autour du risque, du potentiel et de l’exécution",
      "Culture investissement et lecture entrepreneuriale",
      "Vision plus large des private markets",
    ],
  },
  {
    period: "sept. 2024 - aujourd’hui",
    title: "Responsable événement · Club Entrepreneurs",
    subtitle: "Animation, organisation et dynamisation d’un collectif étudiant",
    description: [
      "Au sein du Club Entrepreneurs, j’ai pris un rôle d’organisation et de coordination. L’objectif n’est pas seulement de faire des événements, mais de créer une dynamique, de fédérer et d’apporter une vraie valeur aux membres.",
      "Cette responsabilité m’a appris à mieux structurer, communiquer, anticiper les besoins et porter une énergie collective. C’est une expérience plus humaine, mais très formatrice.",
      "Elle renforce aussi une dimension importante de mon profil : savoir prendre des initiatives, entraîner les autres et faire vivre un projet dans la durée.",
    ],
    learnings: [
      "Organisation et coordination d’événements",
      "Communication, initiative et sens du collectif",
      "Prise de responsabilité dans un cadre associatif",
      "Capacité à fédérer et faire avancer un groupe",
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
      "Formation exigeante en ingénierie financière, tournée vers la finance de marché, les outils quantitatifs, l’analyse et la technique. Elle structure mon socle académique et donne de la profondeur à mon intérêt pour les marchés et l’investissement.",
  },
  {
    period: "2022 - 2024",
    title: "Classe préparatoire PTSI / PT · Lycée Jean Dupuy",
    description:
      "Une période fondatrice dans ma manière de travailler. La prépa m’a appris l’intensité, la rigueur, la discipline et l’humilité face à des sujets difficiles. J’y ai développé une vraie solidité analytique, notamment en sciences de l’ingénieur.",
  },
  {
    period: "2019 - 2025",
    title: "Professeur particulier · Mathématiques et physique",
    description:
      "Donner des cours m’a appris à expliquer clairement, à m’adapter au niveau de l’autre et à structurer mon raisonnement. C’est une expérience discrète, mais très formatrice sur le plan pédagogique et humain.",
  },
];

const earlyExperiences = [
  {
    period: "juil. 2021 - août 2021",
    title: "Assistant production · PLASTISUD",
    description:
      "Travail en environnement industriel avec des contraintes de rythme, de précision et de continuité. Une expérience utile pour comprendre concrètement ce que signifie produire, suivre une cadence et rester fiable dans l’exécution.",
  },
  {
    period: "juil. 2020 - août 2020",
    title: "Assistant production · PLASTISUD",
    description:
      "Deuxième saison dans un cadre industriel, qui m’a permis de gagner en maturité, en discipline et en endurance au travail.",
  },
  {
    period: "juil. 2019 - août 2019",
    title: "Chef d’équipe · Exploitation agricole Laurac",
    description:
      "Une expérience de terrain très formatrice, avec une dimension pratique forte. Elle m’a appris le sens de l’effort, la responsabilité et le respect du travail concret.",
  },
  {
    period: "févr. 2019",
    title: "Stagiaire · O2SPOT",
    description:
      "Première immersion professionnelle, utile pour découvrir un cadre de travail structuré et commencer à comprendre les attentes du monde professionnel.",
  },
  {
    period: "juil. 2018 - août 2018",
    title: "Ouvrier agricole · Exploitation agricole Laurac",
    description:
      "Une première expérience de travail exigeante, très terrain, qui m’a appris tôt la valeur de l’effort, de la régularité et du sérieux.",
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
              <h1>Un parcours construit par l’action, la rigueur et la progression.</h1>

              <p className="text-lg leading-8 text-[var(--muted)]">
                Mon parcours mêle entrepreneuriat, finance, responsabilités
                associatives, expériences de terrain et formation exigeante.
                J’essaie de construire un profil cohérent : comprendre, exécuter,
                progresser et prendre des responsabilités de plus en plus fortes.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                Expériences clés
              </p>
              <h2 className="section-title">Les expériences qui structurent le plus mon profil</h2>
              <p className="max-w-3xl text-[var(--muted)]">
                Ce sont les expériences qui ont le plus façonné ma manière de
                travailler, de réfléchir et d’aborder la création de valeur.
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
                  Quand je regarde mon parcours, je vois une continuité claire :
                  j’ai commencé par des expériences très concrètes, parfois
                  physiques, puis j’ai renforcé ma rigueur avec une formation
                  exigeante, avant de prendre davantage d’initiatives dans
                  l’entrepreneuriat, la finance et les projets collectifs.
                </p>

                <p className="leading-8 text-[var(--muted)]">
                  Ce chemin m’a appris une chose simple : la valeur ne vient pas
                  seulement des idées, mais de la capacité à exécuter avec
                  méthode, à tenir dans le temps et à progresser avec constance.
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
                  capable de combiner compréhension analytique, sens du terrain,
                  intensité de travail et capacité à faire avancer un projet.
                </p>

                <p className="leading-8 text-[var(--muted)]">
                  C’est ce mélange qui m’intéresse : être à la fois sérieux dans
                  l’analyse, crédible dans l’exécution et fiable dans la durée.
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
                Au-delà des outils académiques plus classiques, j’accorde une place
                croissante aux outils d’exécution modernes : développement assisté,
                automatisation, structuration de workflows, agents IA et logiques de RAG.
                Je les utilise comme des accélérateurs de productivité, mais aussi comme
                des outils de qualité, pour mieux organiser, mieux analyser et exécuter
                plus proprement.
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
                m’ont appris tôt la discipline, l’effort, la régularité et le
                respect du travail concret.
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