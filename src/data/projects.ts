export type ProjectLink = {
    label: string;
    href: string;
};

export type Project = {
    slug: string;
    title: string;
    category: string;
    shortDescription: string;
    longDescription: string;
    technologies: string[];
    image: string;
    featured: boolean;

    whatItShows: string;
    context: string;
    objective: string;
    role: string;

    challenges: string[];
    outcomes: string[];
    links?: ProjectLink[];
};

export const projects: Project[] = [
    {
        slug: "suivi-patrimoine",
        title: "Application de suivi de patrimoine",
        category: "Finance · Data · Produit",
        shortDescription:
            "Outil multi-actifs pour centraliser des positions, suivre l’allocation et analyser l’évolution d’un portefeuille personnel.",
        longDescription:
            "Ce projet consiste à concevoir une application capable de regrouper plusieurs classes d’actifs dans un même environnement : actions cotées, private equity, immobilier, cash et autres positions patrimoniales. L’objectif est d’obtenir une lecture claire de l’allocation, de l’exposition et de l’évolution du portefeuille, avec une structure de données plus robuste qu’un tableur.",
        technologies: ["Python", "SQL", "SQLite", "Streamlit"],
        image: "/images/projects/patrimoine_kpi.png",
        featured: true,

        whatItShows:
            "Structuration de données financières, modélisation d’un portefeuille multi-actifs et capacité à produire un outil de suivi exploitable.",
        context:
            "Je voulais disposer d’un outil plus fiable pour suivre un patrimoine hétérogène, avec centralisation des positions, historique des mouvements et lecture rapide des allocations. Les solutions existantes étaient souvent trop fermées ou peu adaptées à un suivi patrimonial global.",
        objective:
            "Créer un outil clair et évolutif permettant de suivre l’allocation, les performances, les flux et la structure globale d’un patrimoine dans un seul environnement.",
        role:
            "Conception fonctionnelle, structuration de la base de données, définition des indicateurs, développement de l’interface et amélioration continue.",

        challenges: [
            "Modéliser plusieurs classes d’actifs avec une structure cohérente et maintenable.",
            "Conserver une interface lisible tout en gardant assez de profondeur pour l’analyse.",
            "Préparer une base exploitable pour de futures projections, automatisations ou imports de données.",
        ],
        outcomes: [
            "Tableau de bord centralisé couvrant actions, private equity, immobilier, cash et autres positions patrimoniales.",
            "Suivi consolidé de l’allocation, des expositions et des flux avec une lecture par poche d’actifs.",
            "Base de données SQLite prête pour des imports automatiques et des modules de projection.",
        ],
        links: [
            {
                label: "GitHub (profil)",
                href: "https://github.com/MaximeFARRE",
            },
            {
                label: "Capture KPI",
                href: "/images/projects/patrimoine_kpi.png",
            },
        ],
    },
    {
        slug: "backtest-optimisation-portefeuille",
        title: "Backtest et optimisation de portefeuille",
        category: "Finance quantitative · Analyse · Python",
        shortDescription:
            "Environnement Python pour backtester des stratégies, comparer des métriques risque/rendement et analyser un portefeuille.",
        longDescription:
            "Ce projet vise à construire un environnement d’analyse pour tester différentes approches d’investissement sur plusieurs actifs, comparer leurs performances et étudier la dynamique risque/rendement d’un portefeuille. Il s’inscrit dans une logique de finance quantitative appliquée : données propres, hypothèses explicites, métriques comparables et visualisations lisibles.",
        technologies: ["Python", "Pandas", "NumPy", "Backtesting", "Streamlit"],
        image: "/images/projects/backtest_5ans.png",
        featured: true,

        whatItShows:
            "Capacité à structurer un backtest, calculer des métriques de risque et comparer des stratégies avec un cadre reproductible.",
        context:
            "Je voulais compléter l’apprentissage académique de la finance de marché par un outil d’analyse construit de bout en bout. L’objectif était de tester des hypothèses d’investissement, comparer des résultats et interpréter concrètement performance, volatilité, drawdown et diversification.",
        objective:
            "Développer un cadre d’analyse permettant de comparer plusieurs stratégies, visualiser leurs résultats et évaluer la robustesse d’un portefeuille selon plusieurs métriques.",
        role:
            "Définition des hypothèses, récupération et nettoyage des données, calcul des métriques, visualisation des résultats et interprétation financière.",

        challenges: [
            "Construire une logique de comparaison claire entre actifs, stratégies et portefeuille agrégé.",
            "Choisir des métriques pertinentes sans masquer les limites du backtest.",
            "Garder un cadre lisible, reproductible et utile pour l’analyse.",
        ],
        outcomes: [
            "Backtests reproductibles sur un horizon de 5 ans pour comparer stratégies et allocations.",
            "Comparaison normalisée de métriques de risque/rendement: volatilité, drawdown, performance cumulée.",
            "Visualisations exploitables pour arbitrer entre robustesse, rendement et diversification.",
        ],
        links: [
            {
                label: "GitHub (profil)",
                href: "https://github.com/MaximeFARRE",
            },
            {
                label: "Capture backtest",
                href: "/images/projects/backtest_5ans.png",
            },
        ],
    },
    {
        slug: "occifloc",
        title: "Occifloc",
        category: "Opérations · Pilotage · Automatisation",
        shortDescription:
            "Pilotage d’une activité de personnalisation textile avec suivi des marges, trésorerie, production et amélioration des process.",
        longDescription:
            "Occifloc est une activité réelle de personnalisation textile et d’objets publicitaires. Je la présente ici pour ce qu’elle démontre concrètement : gestion de clients, calcul de prix, suivi des marges, trésorerie, qualité, délais, organisation de production et amélioration progressive des méthodes de travail.",
        technologies: ["Gestion", "KPI", "Process", "Automatisation", "Vente"],
        image: "/images/logos/logo occifloc couleur.png",
        featured: true,

        whatItShows:
            "Capacité à piloter une activité réelle avec des indicateurs, des contraintes opérationnelles et des décisions concrètes.",
        context:
            "Occifloc m’a donné un cadre concret pour travailler sur des sujets rarement théoriques : vendre, produire, livrer, gérer les délais, suivre les coûts et tenir une relation client. Cette expérience reste utile car elle relie chiffres, organisation et responsabilité.",
        objective:
            "Structurer une activité rentable, suivre les marges et la trésorerie, améliorer les process et conserver un niveau de service fiable.",
        role:
            "Développement commercial, suivi d’activité, calcul des prix, pilotage des marges, organisation de la production et amélioration des méthodes de travail.",

        challenges: [
            "Concilier développement commercial, production, qualité et délais.",
            "Prendre des décisions avec des contraintes de marge, de trésorerie et de capacité.",
            "Structurer progressivement l’activité sans perdre en réactivité opérationnelle.",
        ],
        outcomes: [
            "Mise en place d’un suivi régulier des marges, des coûts et de la trésorerie pour piloter les arbitrages.",
            "Structuration de process entre vente, production et livraison avec meilleure visibilité sur les délais.",
            "Renforcement d’une logique de décision orientée indicateurs dans un contexte opérationnel réel.",
        ],
        links: [
            {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/maxime-farre",
            },
            {
                label: "Échanger sur le projet",
                href: "/contact",
            },
        ],
    },
];

export function getFeaturedProjects() {
    return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string) {
    return projects.find((project) => project.slug === slug);
}
