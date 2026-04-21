import type { Locale } from "@/i18n/routing";

export type FeaturedExperience = {
  period: string;
  title: string;
  subtitle: string;
  description: string[];
  learnings: string[];
};

export type TimelineExperience = {
  period: string;
  title: string;
  description: string;
};

export type CvExperience = {
  period: string;
  title: string;
  description: string;
};

const featuredExperiencesFr: FeaturedExperience[] = [
  {
    period: "févr. 2023 - aujourd’hui",
    title: "Président · Occifloc",
    subtitle: "Entreprise de personnalisation textile et objets",
    description: [
      "Occifloc m’a donné une expérience directe du pilotage d’activité : clients, prix, marges, production, délais, qualité et trésorerie. Les décisions ont des effets immédiats, ce qui oblige à suivre les bons indicateurs.",
      "Cette expérience m’a appris à vendre, organiser, suivre les chiffres, améliorer les processus et arbitrer rapidement. Elle m’a surtout donné une culture d’exécution et de responsabilité.",
      "Ce cadre reste utile pour la finance : raisonner avec des contraintes, prioriser, mesurer les coûts, suivre le cash-flow et garder une lecture claire des risques opérationnels."
    ],
    learnings: [
      "Pilotage opérationnel et sens des priorités",
      "Suivi de marge, cash-flow et logique économique",
      "Résolution de problèmes et amélioration continue",
      "Relation client, qualité de service et responsabilité"
    ]
  },
  {
    period: "sept. 2025 - aujourd’hui",
    title: "Membre · Blast Club",
    subtitle: "Club d’investissement orienté sociétés early-stage et private markets",
    description: [
      "Blast Club m’expose à des dossiers d’investissement early-stage et private markets. J’y travaille la lecture d’un marché, d’un modèle économique, d’une trajectoire de croissance et d’une équipe.",
      "Cette expérience m’aide à analyser des sociétés non cotées avec un regard plus structuré : taille de marché, unit economics, qualité de l’exécution, risques et potentiel de sortie.",
      "Elle complète mon intérêt pour l’asset management et le private equity en apportant une pratique concrète de l’analyse d’entreprise et du risque d’investissement."
    ],
    learnings: [
      "Analyse de sociétés early-stage et de business models",
      "Lecture du risque, du potentiel de marché et des unit economics",
      "Culture investissement et premiers réflexes de due diligence",
      "Meilleure compréhension des private markets"
    ]
  },
  {
    period: "sept. 2024 - aujourd’hui",
    title: "Responsable événement · Club Entrepreneurs",
    subtitle: "Animation, organisation et dynamisation d’un collectif étudiant",
    description: [
      "Au sein du Club Entrepreneurs, j’ai pris un rôle d’organisation et de coordination. L’enjeu était de cadrer des événements utiles, gérer les intervenants, anticiper la logistique et maintenir une dynamique régulière.",
      "Cette responsabilité m’a appris à structurer une initiative collective, communiquer clairement et transformer une intention en action organisée.",
      "Je la présente comme une expérience d’exécution : tenir un calendrier, coordonner plusieurs parties prenantes et livrer un format propre aux membres."
    ],
    learnings: [
      "Organisation et coordination d’événements",
      "Communication claire et gestion des parties prenantes",
      "Prise de responsabilité dans un cadre associatif",
      "Capacité à tenir un calendrier et livrer un format utile"
    ]
  }
];

const featuredExperiencesEn: FeaturedExperience[] = [
  {
    period: "Feb 2023 - Present",
    title: "President · Occifloc",
    subtitle: "Textile and promotional items customization company",
    description: [
      "Occifloc gave me direct operating management exposure: clients, pricing, margins, production, deadlines, quality, and cash management. Decisions have immediate effects, which forces you to track the right indicators.",
      "This experience taught me how to sell, organize, monitor numbers, improve processes, and arbitrate quickly. Above all, it built a strong execution and accountability mindset.",
      "This remains highly relevant to finance: reasoning under constraints, setting priorities, measuring costs, tracking cash flow, and maintaining a clear view of operating risks."
    ],
    learnings: [
      "Operational management and prioritization",
      "Margin tracking, cash-flow monitoring, and economic logic",
      "Problem solving and continuous improvement",
      "Client relationship, service quality, and accountability"
    ]
  },
  {
    period: "Sep 2025 - Present",
    title: "Member · Blast Club",
    subtitle: "Investment club focused on early-stage companies and private markets",
    description: [
      "Blast Club exposes me to early-stage and private markets investment cases. I work on market analysis, business model reading, growth trajectories, and team assessment.",
      "This experience helps me analyze private companies with a more structured lens: market size, unit economics, execution quality, risk profile, and exit potential.",
      "It complements my interest in asset management and private equity with practical company analysis and investment risk assessment."
    ],
    learnings: [
      "Early-stage company and business model analysis",
      "Risk reading, market potential analysis, and unit economics",
      "Investment culture and first due diligence reflexes",
      "Stronger understanding of private markets"
    ]
  },
  {
    period: "Sep 2024 - Present",
    title: "Event Lead · Club Entrepreneurs",
    subtitle: "Planning, coordination, and activation of a student collective",
    description: [
      "Within Club Entrepreneurs, I took ownership of organization and coordination. The goal was to frame useful events, manage speakers, anticipate logistics, and keep a steady rhythm.",
      "This responsibility taught me how to structure a collective initiative, communicate clearly, and turn intent into organized execution.",
      "I present it as an execution experience: maintain a timeline, coordinate multiple stakeholders, and deliver a clean format for members."
    ],
    learnings: [
      "Event planning and coordination",
      "Clear communication and stakeholder management",
      "Ownership within an association context",
      "Ability to maintain timelines and deliver useful formats"
    ]
  }
];

const timelineExperiencesFr: TimelineExperience[] = [
  {
    period: "2024 - aujourd’hui",
    title: "ESILV · Master en ingénierie financière",
    description:
      "Formation en ingénierie financière orientée finance de marché, produits dérivés, risque, outils quantitatifs et programmation. Elle structure mon socle académique et renforce mon approche des marchés, du portefeuille et de l’analyse de données."
  },
  {
    period: "2022 - 2024",
    title: "Classe préparatoire PTSI / PT · Lycée Jean Dupuy",
    description:
      "Une période fondatrice dans ma méthode de travail. La prépa m’a appris la rigueur, la discipline, la modélisation et la résolution de problèmes sous contrainte de temps, notamment en mathématiques, physique et sciences de l’ingénieur."
  },
  {
    period: "2019 - 2025",
    title: "Professeur particulier · Mathématiques et physique",
    description:
      "Donner des cours m’a appris à expliquer clairement, adapter le niveau de détail et structurer un raisonnement étape par étape. Cette expérience renforce ma capacité à rendre un sujet technique compréhensible."
  }
];

const timelineExperiencesEn: TimelineExperience[] = [
  {
    period: "2024 - Present",
    title: "ESILV · MSc in Financial Engineering",
    description:
      "Financial engineering curriculum focused on capital markets, derivatives, risk, quantitative tools, and programming. It structures my academic foundation and reinforces my approach to markets, portfolios, and data analysis."
  },
  {
    period: "2022 - 2024",
    title: "PTSI / PT preparatory classes · Lycee Jean Dupuy",
    description:
      "A foundational period for my working method. Preparatory classes taught me rigor, discipline, modeling, and time-constrained problem solving, especially in mathematics, physics, and engineering sciences."
  },
  {
    period: "2019 - 2025",
    title: "Private Tutor · Mathematics and Physics",
    description:
      "Teaching helped me explain clearly, adapt the level of detail, and structure reasoning step by step. This experience strengthened my ability to make technical topics understandable."
  }
];

const earlyExperiencesFr: TimelineExperience[] = [
  {
    period: "juil. 2021 - août 2021",
    title: "Assistant production · PLASTISUD",
    description:
      "Travail en environnement industriel avec contraintes de rythme, précision et continuité. Une expérience utile pour comprendre ce que signifie produire, suivre une cadence et rester fiable sur une tâche répétée."
  },
  {
    period: "juil. 2020 - août 2020",
    title: "Assistant production · PLASTISUD",
    description:
      "Deuxième saison dans un cadre industriel, avec davantage de maturité dans l’organisation, la discipline et la tenue d’un rythme de travail régulier."
  },
  {
    period: "juil. 2019 - août 2019",
    title: "Chef d’équipe · Exploitation agricole Laurac",
    description:
      "Expérience de terrain avec responsabilité d’équipe, organisation des tâches et suivi du travail réalisé. Elle m’a appris l’effort, la fiabilité et la clarté dans les consignes."
  },
  {
    period: "févr. 2019",
    title: "Stagiaire · O2SPOT",
    description:
      "Première immersion professionnelle, utile pour découvrir un cadre de travail structuré, des attentes précises et des échanges professionnels formalisés."
  },
  {
    period: "juil. 2018 - août 2018",
    title: "Ouvrier agricole · Exploitation agricole Laurac",
    description:
      "Première expérience de travail exigeante, très terrain, qui m’a appris tôt la régularité, le sérieux et la fiabilité dans l’exécution."
  }
];

const earlyExperiencesEn: TimelineExperience[] = [
  {
    period: "Jul 2021 - Aug 2021",
    title: "Production Assistant · PLASTISUD",
    description:
      "Worked in an industrial environment with pace, precision, and continuity constraints. It taught me what reliable production really means: maintaining output, following cadence, and staying consistent on repetitive tasks."
  },
  {
    period: "Jul 2020 - Aug 2020",
    title: "Production Assistant · PLASTISUD",
    description:
      "Second season in an industrial setting, with stronger discipline, organization, and ability to sustain a regular work rhythm."
  },
  {
    period: "Jul 2019 - Aug 2019",
    title: "Team Lead · Laurac Farm",
    description:
      "Field experience with team responsibility, task organization, and follow-up on execution. It taught me effort, reliability, and clarity in instructions."
  },
  {
    period: "Feb 2019",
    title: "Intern · O2SPOT",
    description:
      "First professional immersion, useful to discover a structured work environment, clear expectations, and formal professional communication."
  },
  {
    period: "Jul 2018 - Aug 2018",
    title: "Farm Worker · Laurac Farm",
    description:
      "First demanding field work experience. It taught me consistency, seriousness, and reliability in execution very early."
  }
];

const cvExperiencesFr: CvExperience[] = [
  {
    period: "2022 - Aujourd’hui",
    title: "Président · Occifloc",
    description:
      "Développement d’une activité de personnalisation textile, gestion du budget, suivi des marges, pilotage de la trésorerie, mise en place de KPI financiers et amélioration des process."
  },
  {
    period: "sept. 2025 - Aujourd’hui",
    title: "Membre investisseur · Blast Club",
    description:
      "Analyse de sociétés early-stage, étude de marché, lecture des business models, unit economics et première approche des logiques de valorisation."
  },
  {
    period: "2019 - 2025",
    title: "Professeur particulier · Mathématiques / Physique",
    description:
      "Explication de sujets techniques, adaptation au niveau de l’élève et structuration d’un raisonnement mathématique étape par étape."
  }
];

const cvExperiencesEn: CvExperience[] = [
  {
    period: "2022 - Present",
    title: "President · Occifloc",
    description:
      "Built and managed a textile customization activity, including budget ownership, margin tracking, cash management, financial KPI setup, and process improvements."
  },
  {
    period: "Sep 2025 - Present",
    title: "Investor Member · Blast Club",
    description:
      "Analyzed early-stage companies through market studies, business model reading, unit economics, and first valuation frameworks."
  },
  {
    period: "2019 - 2025",
    title: "Private Tutor · Mathematics / Physics",
    description:
      "Explained technical topics, adapted to student level, and structured mathematical reasoning step by step."
  }
];

const educationEntriesFr: CvExperience[] = [
  {
    period: "2024 - 2027",
    title: "ESILV · MSc / Master en finance de marché",
    description:
      "Parcours orienté ingénierie financière : market risk, equity derivatives, commodities markets, machine learning for finance."
  },
  {
    period: "2022 - 2024",
    title: "Classe préparatoire PTSI / PT · Lycée Jean Dupuy",
    description:
      "Formation exigeante en mathématiques, physique et rigueur analytique."
  }
];

const educationEntriesEn: CvExperience[] = [
  {
    period: "2024 - 2027",
    title: "ESILV · MSc in Capital Markets",
    description:
      "Financial engineering track focused on market risk, equity derivatives, commodities markets, and machine learning for finance."
  },
  {
    period: "2022 - 2024",
    title: "PTSI / PT preparatory classes · Lycee Jean Dupuy",
    description:
      "Demanding training in mathematics, physics, and analytical rigor."
  }
];

export const featuredExperiences = featuredExperiencesFr;
export const timelineExperiences = timelineExperiencesFr;
export const earlyExperiences = earlyExperiencesFr;
export const cvExperiences = cvExperiencesFr;
export const educationEntries = educationEntriesFr;

export function getFeaturedExperiences(locale: Locale): FeaturedExperience[] {
  return locale === "en" ? featuredExperiencesEn : featuredExperiencesFr;
}

export function getTimelineExperiences(locale: Locale): TimelineExperience[] {
  return locale === "en" ? timelineExperiencesEn : timelineExperiencesFr;
}

export function getEarlyExperiences(locale: Locale): TimelineExperience[] {
  return locale === "en" ? earlyExperiencesEn : earlyExperiencesFr;
}

export function getCvExperiences(locale: Locale): CvExperience[] {
  return locale === "en" ? cvExperiencesEn : cvExperiencesFr;
}

export function getEducationEntries(locale: Locale): CvExperience[] {
  return locale === "en" ? educationEntriesEn : educationEntriesFr;
}
