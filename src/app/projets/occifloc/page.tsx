import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Container from "@/components/layout/container";

type IconName =
  | "project"
  | "client"
  | "tech"
  | "automation"
  | "team"
  | "business";

type Responsibility = {
  title: string;
  description: string;
  icon: IconName;
  examples: string[];
};

const tags = [
  "Gestion de projet",
  "Organisation",
  "Relation client",
  "Automatisation",
  "Production",
  "Business Development",
];

const responsibilities: Responsibility[] = [
  {
    title: "Gestion de projet",
    description:
      "Pilotage simultané de plusieurs commandes avec des contraintes de délai, de coût et de qualité.",
    icon: "project",
    examples: [
      "Planification de plusieurs commandes en parallèle selon les échéances clients.",
      "Priorisation quotidienne des tâches critiques pour respecter les délais.",
      "Coordination entre demande commerciale, approvisionnement et production.",
      "Suivi d’avancement avec points de contrôle avant livraison.",
    ],
  },
  {
    title: "Relation client",
    description:
      "Cadrage des besoins et sécurisation des validations pour limiter les retours et les incompréhensions.",
    icon: "client",
    examples: [
      "Qualification du besoin (usage, rendu attendu, budget, délai).",
      "Préparation de devis structurés et argumentés.",
      "Validation systématique des BAT et maquettes avant lancement.",
      "Communication proactive en cas d’imprévu ou d’ajustement.",
    ],
  },
  {
    title: "Gestion technique",
    description:
      "Sélection de la bonne méthode de personnalisation selon les contraintes produit et client.",
    icon: "tech",
    examples: [
      "Choix entre DTF, broderie, sérigraphie ou flocage selon textile et quantités.",
      "Arbitrage qualité/coût/délai en fonction des contraintes du dossier.",
      "Vérification des fichiers sources pour éviter les défauts de production.",
      "Résolution rapide des problèmes techniques avant mise en fabrication.",
    ],
  },
  {
    title: "Optimisation et automatisation",
    description:
      "Structuration des process pour gagner en fiabilité, en vitesse d’exécution et en traçabilité.",
    icon: "automation",
    examples: [
      "Mise en place de tableaux de suivi des commandes et statuts.",
      "Formalisation de checklists de validation avant production.",
      "Réflexion sur l’automatisation des mails et du suivi client.",
      "Amélioration continue des méthodes de traitement des demandes.",
    ],
  },
  {
    title: "Travail d’équipe",
    description:
      "Coordination avec les membres de l’activité, les fournisseurs et les partenaires de production.",
    icon: "team",
    examples: [
      "Répartition des responsabilités selon les charges et compétences.",
      "Synchronisation des contraintes fournisseurs avec les échéances clients.",
      "Transmission claire des consignes de production.",
      "Gestion collective des situations urgentes et des aléas.",
    ],
  },
  {
    title: "Développement commercial",
    description:
      "Contribution active à la croissance de l’activité via des offres adaptées et une prospection ciblée.",
    icon: "business",
    examples: [
      "Recherche et qualification de nouveaux clients locaux.",
      "Structuration d’offres adaptées aux entreprises et associations.",
      "Amélioration de la communication et de la visibilité en ligne.",
      "Suivi des retours clients pour améliorer l’offre et le service.",
    ],
  },
];

const challenges = [
  {
    title: "Gérer plusieurs projets avec des délais courts",
    problem:
      "Certaines périodes concentraient plusieurs commandes urgentes avec des échéances proches.",
    action:
      "Mise en place d’un pilotage par priorité, avec jalons de validation et replanification quotidienne.",
    result:
      "Meilleure tenue des délais et diminution des retards liés aux arbitrages de dernière minute.",
  },
  {
    title: "Adapter la technique de personnalisation au besoin réel",
    problem:
      "Les contraintes de textile, de rendu visuel, de budget et de quantité entraient souvent en conflit.",
    action:
      "Création d’une grille de décision technique (DTF, broderie, sérigraphie, flocage) par cas d’usage.",
    result:
      "Décisions plus rapides, plus cohérentes et meilleure qualité de résultat final.",
  },
  {
    title: "Coordonner clients, fournisseurs et production",
    problem:
      "Le manque de synchronisation entre intervenants créait des tensions sur les délais.",
    action:
      "Centralisation des informations clés et points de suivi réguliers entre les parties prenantes.",
    result:
      "Flux plus fluide et baisse des erreurs de transmission entre phases du projet.",
  },
  {
    title: "Gérer les imprévus opérationnels",
    problem:
      "Retards fournisseurs, fichiers logos non exploitables, ruptures de stock et contraintes de dernière minute.",
    action:
      "Mise en place de contrôles amont (qualité fichiers, disponibilité matières) et plans de repli.",
    result:
      "Réduction des blocages en production et meilleure fiabilité globale des livraisons.",
  },
  {
    title: "Structurer une organisation en croissance",
    problem:
      "L’activité évoluait vite, sans process assez formalisés au départ.",
    action:
      "Standardisation progressive des étapes: devis, validation, lancement, contrôle qualité, livraison.",
    result:
      "Organisation plus stable, meilleure traçabilité et montée en efficacité collective.",
  },
];

const skills = [
  { label: "Gestion de projet", level: 90 },
  { label: "Organisation", level: 88 },
  { label: "Communication", level: 86 },
  { label: "Travail d’équipe", level: 84 },
  { label: "Autonomie", level: 89 },
  { label: "Gestion des priorités", level: 87 },
  { label: "Résolution de problèmes", level: 85 },
  { label: "Amélioration continue", level: 88 },
  { label: "Sens du détail", level: 83 },
  { label: "Compréhension technique", level: 82 },
];

const workflowSteps = [
  "Demande client",
  "Analyse du besoin",
  "Choix de la technique",
  "Devis",
  "Validation",
  "Production",
  "Contrôle qualité",
  "Livraison",
];

const impacts = [
  {
    value: "30+",
    label: "Projets gérés",
    detail: "Commandes pilotées de la demande initiale à la livraison finale.",
  },
  {
    value: "5+",
    label: "Segments clients",
    detail: "Entreprises, associations, écoles, clubs et collectivités locales.",
  },
  {
    value: "-",
    label: "Erreurs réduites",
    detail: "Baisse des incidents grâce aux validations amont et au suivi structuré.",
  },
  {
    value: "8",
    label: "Étapes process",
    detail: "Cycle opérationnel standardisé pour améliorer fiabilité et coordination.",
  },
];

const improvementAxes = [
  "Automatisation des emails de suivi et relances client.",
  "Suivi des commandes en temps réel avec statuts partagés.",
  "Centralisation des données client et historiques de commandes.",
  "Pilotage plus fin des stocks et des seuils de réapprovisionnement.",
];

export const metadata: Metadata = {
  title: "Occifloc - Détail Projet",
  description:
    "Gestion et développement d’une activité de personnalisation textile: pilotage opérationnel, process, coordination client-fournisseur-production et amélioration continue.",
  alternates: {
    canonical: "/projets/occifloc",
  },
};

function Icon({ name }: { name: IconName }) {
  const classes = "h-5 w-5 text-[var(--primary)]";

  switch (name) {
    case "project":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={classes} aria-hidden="true">
          <path d="M4 7h16M4 12h10M4 17h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "client":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={classes} aria-hidden="true">
          <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.8" />
          <path d="M5 19c1.6-2.7 3.9-4 7-4s5.4 1.3 7 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "tech":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={classes} aria-hidden="true">
          <rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
          <path d="M8 10h8M8 14h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "automation":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={classes} aria-hidden="true">
          <path d="M12 4v4m0 8v4m8-8h-4M8 12H4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case "team":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={classes} aria-hidden="true">
          <circle cx="8" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="16" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.8" />
          <path d="M3.5 18c1.2-2 2.9-3 4.5-3M20.5 18c-1.2-2-2.9-3-4.5-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "business":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={classes} aria-hidden="true">
          <path d="M5 19V9m7 10V5m7 14v-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M4 19h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

export default function OcciflocProjectPage() {
  return (
    <section className="section">
      <Container className="container-custom max-w-6xl">
        <div className="space-y-14">
          <header className="relative overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--foreground)] px-6 py-10 text-white sm:px-10 sm:py-12">
            <div className="absolute inset-0 opacity-15">
              <Image
                src="/images/logos/logo occifloc couleur.png"
                alt="Logo Occifloc"
                fill
                className="object-contain object-right"
                priority
              />
            </div>

            <div className="relative z-10 space-y-6">
              <Link
                href="/projets"
                className="inline-flex items-center gap-2 rounded-md border border-white/25 px-3 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10"
              >
                <span aria-hidden="true">←</span>
                Retour aux projets
              </Link>

              <div className="max-w-4xl space-y-4">
                <h1 className="text-white">
                  Occifloc - Gestion et développement d’une activité de personnalisation textile
                </h1>
                <p className="text-lg leading-8 text-white/85">
                  Gestion d’une activité réelle de personnalisation textile: pilotage des projets, optimisation des process, relation client, production et développement.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="rounded-md bg-white/10 px-3 py-1.5 text-sm font-medium text-white/95">
                  Période: 2024 - aujourd’hui
                </span>
                <span className="rounded-md bg-white/10 px-3 py-1.5 text-sm font-medium text-white/95">
                  Rôle: Co-fondateur / gestion opérationnelle
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-white/25 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/90"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </header>

          <nav className="flex flex-wrap gap-2">
            <a href="#contexte" className="button-secondary">
              Contexte
            </a>
            <a href="#responsabilites" className="button-secondary">
              Responsabilités
            </a>
            <a href="#defis" className="button-secondary">
              Défis
            </a>
            <a href="#competences" className="button-secondary">
              Compétences
            </a>
            <a href="#process" className="button-secondary">
              Process
            </a>
            <a href="#impact" className="button-secondary">
              Impact
            </a>
          </nav>

          <section id="contexte" className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-6 lg:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
                Contexte du projet
              </p>
              <h2 className="mt-3">Une activité opérationnelle à contraintes réelles</h2>
              <p className="mt-4 leading-8 text-[var(--muted)]">
                Occifloc est une activité de personnalisation textile et d’objets
                pour des entreprises, associations, écoles, clubs et collectivités.
                Le cycle complet est piloté de bout en bout: demande client, cadrage
                technique, devis, validation, production et livraison.
              </p>
              <p className="mt-4 leading-8 text-[var(--muted)]">
                Chaque commande est traitée comme un mini-projet avec arbitrages
                permanents entre besoin client, contraintes techniques, budget, délai
                et qualité finale. Cette structure m’a permis de développer une
                approche très concrète de la gestion opérationnelle.
              </p>
            </div>

            <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-6">
              <p className="text-sm font-semibold text-[var(--foreground)]">
                Chaque commande = mini-projet
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--muted)]">
                <li>• Besoin client à clarifier</li>
                <li>• Contraintes techniques à arbitrer</li>
                <li>• Budget à respecter</li>
                <li>• Délais à tenir</li>
                <li>• Validation finale de qualité</li>
              </ul>
            </div>
          </section>

          <section id="responsabilites" className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
                Mes responsabilités
              </p>
              <h2 className="mt-2">Pilotage multi-fonctions</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {responsibilities.map((item) => (
                <article
                  key={item.title}
                  className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-5 transition hover:-translate-y-0.5 hover:shadow-sm"
                >
                  <div className="mb-3 flex items-center gap-2">
                    <Icon name={item.icon} />
                    <h3 className="text-lg font-semibold text-[var(--foreground)]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-7 text-[var(--muted)]">{item.description}</p>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-[var(--muted)]">
                    {item.examples.map((example) => (
                      <li key={example}>• {example}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section id="defis" className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
                Défis rencontrés
              </p>
              <h2 className="mt-2">Problème, action, résultat</h2>
            </div>

            <div className="space-y-4">
              {challenges.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-6"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-[var(--primary)] text-xs font-semibold text-white">
                      {index + 1}
                    </span>
                    <h3 className="text-lg font-semibold text-[var(--foreground)]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-7 text-[var(--muted)]">
                    <span className="font-semibold text-[var(--foreground)]">Problème:</span>{" "}
                    {item.problem}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                    <span className="font-semibold text-[var(--foreground)]">Mise en place:</span>{" "}
                    {item.action}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                    <span className="font-semibold text-[var(--foreground)]">Résultat:</span>{" "}
                    {item.result}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section id="competences" className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-6 lg:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
                Ce que ce projet m’a appris
              </p>
              <h2 className="mt-2">Compétences développées sur le terrain</h2>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {skills.map((skill) => (
                  <div key={skill.label} className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-[var(--foreground)]">{skill.label}</span>
                      <span className="text-[var(--muted)]">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-[var(--secondary)]">
                      <div
                        className="h-2 rounded-full bg-[var(--primary)]"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-6">
              <p className="text-sm leading-8 text-[var(--muted)]">
                Cette expérience m’a appris à gérer des responsabilités réelles,
                à coordonner des intervenants avec des contraintes différentes et
                à prendre des décisions rapides dans un contexte opérationnel.
              </p>
              <p className="mt-4 text-sm leading-8 text-[var(--muted)]">
                J’y ai renforcé une méthode de travail orientée exécution:
                structurer, prioriser, sécuriser la qualité, puis améliorer les
                process en continu.
              </p>
            </div>
          </section>

          <section id="process" className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
                Côté technique / process
              </p>
              <h2 className="mt-2">Workflow opérationnel complet</h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {workflowSteps.map((step, index) => (
                <div
                  key={step}
                  className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--primary)]">
                    Étape {index + 1}
                  </p>
                  <p className="mt-1 text-sm font-medium text-[var(--foreground)]">{step}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-6">
                <p className="text-sm font-semibold text-[var(--foreground)]">
                  Outils et méthodes utilisés
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--muted)]">
                  <li>• Tableaux de suivi des commandes et statuts.</li>
                  <li>• Organisation des priorités par niveau d’urgence.</li>
                  <li>• Méthodes de validation technique avant lancement.</li>
                  <li>• Amélioration continue du suivi client et du site.</li>
                </ul>
              </div>

              <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-6">
                <p className="text-sm font-semibold text-[var(--foreground)]">
                  Axes d’amélioration identifiés
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--muted)]">
                  {improvementAxes.map((axis) => (
                    <li key={axis}>• {axis}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-5">
            <div className="grid gap-4 md:grid-cols-2">
              <figure className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--card)]">
                <div className="relative aspect-[16/10]">
                  <Image
                    src="/images/projects/occifloc_workflow.png"
                    alt="Schéma opérationnel du workflow Occifloc"
                    fill
                    className="object-cover"
                  />
                </div>
                <figcaption className="px-4 py-3 text-sm text-[var(--muted)]">
                  Workflow type d’un projet client, de la demande au contrôle qualité.
                </figcaption>
              </figure>

              <figure className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--card)]">
                <div className="relative aspect-[16/10]">
                  <Image
                    src="/images/projects/occifloc_operations.png"
                    alt="Pilotage opérationnel et coordination des intervenants"
                    fill
                    className="object-cover"
                  />
                </div>
                <figcaption className="px-4 py-3 text-sm text-[var(--muted)]">
                  Pilotage opérationnel: coordination client, fournisseurs et production.
                </figcaption>
              </figure>
            </div>
          </section>

          <section id="impact" className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
                Résultats et impact
              </p>
              <h2 className="mt-2">Effets observés sur l’activité</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {impacts.map((item) => (
                <article
                  key={item.label}
                  className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-5"
                >
                  <p className="text-3xl font-semibold text-[var(--foreground)]">{item.value}</p>
                  <p className="mt-2 text-sm font-semibold text-[var(--primary)]">{item.label}</p>
                  <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{item.detail}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
              Aller plus loin
            </p>
            <h2 className="mt-2">Ce que je ferais aujourd’hui pour renforcer le modèle</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--muted)]">
              <li>• Standardiser un CRM léger pour centraliser demandes, devis, échanges et historique.</li>
              <li>• Déployer un suivi de charge atelier en temps réel pour sécuriser les délais.</li>
              <li>• Mettre en place des KPI hebdomadaires (taux de retouche, délai moyen, marge par type de prestation).</li>
              <li>• Automatiser les relances client et confirmations de jalons de production.</li>
            </ul>
          </section>

          <section className="rounded-lg bg-[var(--foreground)] px-8 py-10 text-white">
            <h2 className="text-white">Ce projet en entretien</h2>
            <p className="mt-3 max-w-3xl text-sm leading-8 text-white/80">
              Je peux détailler la méthode de pilotage utilisée, les décisions
              techniques sur les dossiers complexes, les arbitrages coût/qualité/délai
              et la manière dont j’ai structuré l’organisation pour gagner en fiabilité.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="button-primary bg-white !text-[var(--foreground)] hover:bg-white/90">
                Me contacter
              </Link>
              <Link href="/projets" className="button-secondary !border-white/30 !text-white hover:!bg-white/10">
                Voir tous les projets
              </Link>
            </div>
          </section>
        </div>
      </Container>
    </section>
  );
}
