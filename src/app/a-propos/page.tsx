import Container from "@/components/layout/container";
import { personalInfo } from "@/data/personal-info";

const pillars = [
  {
    title: "Finance",
    description:
      "Je travaille sur la finance de marché, l’analyse d’entreprise et le suivi de portefeuille avec une attention particulière aux données, aux métriques de risque et à la lecture des performances.",
  },
  {
    title: "Pilotage",
    description:
      "Avec Occifloc, j’ai appris à suivre des marges, gérer une trésorerie, prioriser des commandes et prendre des décisions avec des contraintes de coûts, de délais et de qualité.",
  },
  {
    title: "Technique",
    description:
      "J’utilise Python, SQL, Linux, Git et Streamlit pour structurer des données, automatiser des tâches, construire des dashboards et rendre une analyse plus exploitable.",
  },
];

const toolsGroups = [
  {
    title: "Finance & analyse",
    items: ["Bloomberg Terminal", "Excel avancé", "SQL", "Python", "Backtesting"],
  },
  {
    title: "Développement",
    items: ["VS Code", "Git", "Linux", "Streamlit", "SQLite"],
  },
  {
    title: "Automatisation & productivité",
    items: ["Codex", "Claude Code", "agents IA", "automatisation", "RAG"],
  },
  {
    title: "Exécution & workflows",
    items: ["n8n", "structuration de process", "workflows assistés", "outils no-code / low-code"],
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
    detail: "Disponible pour des opportunités en finance et analyse",
  },
  {
    label: "Objectif actuel",
    value: personalInfo.currentGoal,
    detail: "Recherche d’expériences à forte courbe d’apprentissage",
  },
  {
    label: "Cap long terme",
    value: personalInfo.longTermGoal,
    detail: "Approfondir finance quantitative, marchés et outils financiers",
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
    label: "Axes forts : finance, data, exécution",
  },
];

const faqItems = [
  {
    question: "Pourquoi la finance ?",
    answer:
      "La finance demande de raisonner avec des données imparfaites, de comparer des scénarios et de comprendre le lien entre risque, rendement et valeur. C’est un cadre exigeant où l’analyse doit rester claire, vérifiable et utile à la décision.",
  },
  {
    question: "Pourquoi entreprendre en parallèle de vos études ?",
    answer:
      "Occifloc m’a surtout apporté une expérience de pilotage réel : prix, marge, trésorerie, production, relation client et arbitrages. Cette expérience complète mon parcours académique par une pratique concrète de la responsabilité.",
  },
  {
    question: "Qu’est-ce qui vous différencie d’un profil plus classique ?",
    answer:
      "Je combine un socle d’ingénierie financière avec une pratique concrète de Python, SQL, Linux, Streamlit, Bloomberg Terminal et des outils de suivi. Je cherche à produire des analyses propres, mais aussi des supports exploitables par d’autres.",
  },
  {
    question: "Quelle place occupe la technique dans votre profil ?",
    answer:
      "La technique sert à fiabiliser le travail : automatiser une extraction, structurer une base, backtester une hypothèse, construire un dashboard ou réduire les tâches répétitives. Le code est un moyen d’améliorer l’analyse.",
  },
  {
    question: "Pourquoi parler du sport sur votre site ?",
    answer:
      "Le sport d’endurance explique une partie de ma méthode de travail : régularité, gestion de l’effort, lucidité sous fatigue et préparation sur plusieurs mois. Je le mentionne comme un repère personnel, pas comme un argument principal.",
  },
  {
    question: "Que recherchez-vous aujourd’hui ?",
    answer:
      "Je recherche un stage ou une opportunité en finance de marché, asset management, private equity, analyse financière ou recherche quantitative, avec des sujets concrets et une vraie exigence sur la qualité du travail.",
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
                  Au-delà du cadre académique, je garde une approche très
                  opérationnelle. J’avance par itérations, avec des livrables
                  concrets : base de données propre, dashboard exploitable,
                  analyse documentée ou process mieux structuré.
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
                  <li>• Maîtrise progressive de Python, SQL, Linux et Git</li>
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
              {toolsGroups.map((group) => (
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
                  Je suis attiré par les environnements où il faut comprendre
                  vite, structurer l’information et produire un travail propre.
                  Les sujets qui me motivent combinent analyse financière,
                  données, méthode et exécution.
                </p>

                <p className="leading-8 text-[var(--muted)]">
                  À long terme, je veux développer une expertise solide en
                  gestion d’actifs, analyse quantitative et développement
                  d’outils financiers. Je recherche des environnements où les
                  responsabilités progressent avec le niveau de rigueur fourni.
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
                Ce qui me construit aussi au quotidien
              </p>

              <h2 className="section-title">
                Qui je suis en dehors du travail ?
              </h2>

              <p className="max-w-3xl text-[var(--muted)] leading-8">
                En dehors de mes études et de mes projets, je consacre du temps
                à des activités qui renforcent ma méthode de travail. Le sport
                d’endurance, la lecture financière, l’investissement personnel et
                les projets autonomes demandent de la discipline, de la régularité
                et une progression mesurée.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <div className="card p-8">
                <div className="space-y-5">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
                      Endurance & discipline
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold text-[var(--foreground)]">
                      Le sport comme école de discipline
                    </h3>
                  </div>

                  <p className="leading-8 text-[var(--muted)]">
                    Le sport d’endurance occupe une place importante dans mon
                    équilibre. Il demande de la constance, une progression
                    mesurée et la capacité à rester discipliné sur plusieurs mois.
                  </p>

                  <div className="space-y-4 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-5">
                    <div>
                      <p className="font-semibold text-[var(--foreground)]">
                        Triathlon / Ironman
                      </p>
                      <p className="mt-1 text-sm leading-7 text-[var(--muted)]">
                        Je prépare actuellement un objectif Ironman avec une cible
                        sous les 11 heures. Cette préparation impose un plan
                        structuré, un suivi régulier et une gestion précise de
                        l’effort.
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold text-[var(--foreground)]">
                        Trail, course à pied et cyclisme
                      </p>
                      <p className="mt-1 text-sm leading-7 text-[var(--muted)]">
                        Je pratique régulièrement la course à pied et le cyclisme, avec un
                        nouveau trail prévu cet été. J’apprécie les efforts longs,
                        où la progression dépend surtout de la discipline, de la
                        patience et de la gestion du rythme.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card p-8">
                <div className="space-y-5">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
                      Projet personnel
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold text-[var(--foreground)]">
                      Le GR20 en autonomie
                    </h3>
                  </div>

                  <p className="leading-8 text-[var(--muted)]">
                    L’un des projets personnels les plus exigeants que j’ai menés
                    est la traversée du GR20 en Corse, réalisée en autonomie.
                  </p>

                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium text-[var(--muted)]">
                          Distance
                        </p>
                        <p className="mt-1 text-2xl font-semibold text-[var(--foreground)]">
                          180 km
                        </p>
                      </div>

                      <div>
                        <p className="text-sm font-medium text-[var(--muted)]">
                          Dénivelé positif
                        </p>
                        <p className="mt-1 text-2xl font-semibold text-[var(--foreground)]">
                          14 000 m
                        </p>
                      </div>
                    </div>

                    <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
                      Nous sommes partis avec la nourriture, le matériel de couchage
                      et l’équipement nécessaire, soit près de 20 kg sur le dos. Ce
                      projet m’a appris la préparation, la gestion de l’effort et
                      la lucidité dans des conditions dégradées.
                    </p>
                  </div>

                  <p className="leading-8 text-[var(--muted)]">
                    Ce type d’expérience m’intéresse parce qu’il demande des
                    qualités utiles dans le travail : méthode, constance,
                    adaptation et exécution jusqu’au bout.
                  </p>
                </div>
              </div>

              <div className="card p-8">
                <div className="space-y-5">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
                      Lecture & réflexion
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold text-[var(--foreground)]">
                      Comprendre avant d’agir
                    </h3>
                  </div>

                  <p className="leading-8 text-[var(--muted)]">
                    Je lis régulièrement pour approfondir des sujets utiles à mon
                    parcours : finance de marché, investissement, analyse
                    d’entreprise, gestion du risque et méthode de travail.
                  </p>

                  <div className="space-y-3 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-5">
                    <div>
                      <p className="font-semibold text-[var(--foreground)]">
                        Finance & investissement
                      </p>
                      <p className="mt-1 text-sm leading-7 text-[var(--muted)]">
                        Je travaille notamment la finance de marché, les produits
                        dérivés, la gestion de portefeuille et les métriques de
                        risque. Je lis des ouvrages de John Hull, comme{" "}
                        <em>Options, Futures and Other Derivatives</em>, pour
                        consolider les bases académiques.
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold text-[var(--foreground)]">
                        Méthode & prise de décision
                      </p>
                      <p className="mt-1 text-sm leading-7 text-[var(--muted)]">
                        Je lis aussi sur la prise de décision, l’organisation et
                        la discipline de travail. Ces sujets m’aident à mieux
                        prioriser, mieux documenter et mieux exécuter dans la
                        durée.
                      </p>
                    </div>
                  </div>

                </div>
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
                Quelques réponses pour mieux situer mon profil
              </h2>
              <p className="max-w-3xl text-[var(--muted)]">
                Cette section précise ma logique de parcours, la place de la
                technique et le type d’opportunités que je recherche aujourd’hui.
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
