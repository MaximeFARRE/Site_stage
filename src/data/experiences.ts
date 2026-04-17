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

export const featuredExperiences: FeaturedExperience[] = [
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

export const timelineExperiences: TimelineExperience[] = [
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

export const earlyExperiences: TimelineExperience[] = [
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

export const cvExperiences: CvExperience[] = [
  {
    period: "2022 - Aujourd’hui",
    title: "Président · Occifloc",
    description:
      "Développement d’une activité de personnalisation textile, gestion du budget, suivi des marges, pilotage de la trésorerie, mise en place de KPI financiers et amélioration des process.",
  },
  {
    period: "sept. 2025 - Aujourd’hui",
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

export const educationEntries: CvExperience[] = [
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
