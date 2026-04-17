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
            "Outil de suivi patrimonial multi-actifs pour centraliser, structurer et analyser un portefeuille personnel.",
        longDescription:
            "Ce projet consiste à concevoir une application capable de regrouper différentes classes d’actifs au sein d’un même environnement : actions cotées, private equity, immobilier, cash et autres positions patrimoniales. L’objectif est de disposer d’une vision claire, exploitable et évolutive d’un patrimoine global, avec une logique plus structurée qu’un simple tableur.",
        technologies: ["Python", "SQL", "SQLite", "React"],
        image: "/images/projects/patrimoine-app.jpg",
        featured: true,

        whatItShows:
            "Structuration de données, logique produit, vision patrimoniale et capacité à transformer un besoin personnel en outil concret.",
        context:
            "Je voulais disposer d’un outil personnel plus robuste pour suivre un patrimoine hétérogène, avec une logique de centralisation, d’historique et d’analyse. Les solutions classiques étaient souvent trop limitées, trop fermées ou peu adaptées à une vision patrimoniale plus large.",
        objective:
            "Créer un outil clair, exploitable et évolutif permettant de suivre l’allocation, les performances et la structure globale d’un patrimoine dans un seul environnement.",
        role:
            "Conception du projet, structuration de la base de données, logique fonctionnelle, développement et amélioration continue.",

        challenges: [
            "Modéliser plusieurs classes d’actifs avec une structure cohérente.",
            "Conserver une logique simple d’utilisation tout en gardant de la profondeur analytique.",
            "Créer une base exploitable pour de futures analyses, projections ou automatisations.",
        ],
        outcomes: [
            "Création d’un outil personnel centralisé et évolutif.",
            "Meilleure lecture de l’allocation patrimoniale et des performances.",
            "Renforcement de mes compétences en structuration de données et en logique produit.",
        ],
        links: [],
    },
    {
        slug: "backtest-optimisation-portefeuille",
        title: "Backtest et optimisation de portefeuille",
        category: "Finance quantitative · Analyse · Python",
        shortDescription:
            "Projet de recherche appliquée autour du backtesting, de la comparaison de stratégies et de l’analyse de portefeuille.",
        longDescription:
            "Ce projet vise à construire un environnement d’analyse pour tester différentes approches d’investissement sur plusieurs actifs, comparer leurs performances et mieux comprendre la dynamique risque/rendement d’un portefeuille. Il s’inscrit dans une logique de finance quantitative appliquée, avec une approche volontairement concrète.",
        technologies: ["Python", "Pandas", "NumPy", "Backtesting"],
        image: "/images/projects/backtest.jpg",
        featured: true,

        whatItShows:
            "Capacité d’analyse quantitative, compréhension du risque, rigueur dans les comparaisons et intérêt réel pour la gestion d’actifs.",
        context:
            "Je voulais aller plus loin que l’apprentissage théorique de la finance de marché en construisant mes propres outils d’analyse. L’idée était de tester concrètement des hypothèses, de comparer des résultats et de mieux comprendre ce que signifient vraiment performance, volatilité ou drawdown dans un cadre appliqué.",
        objective:
            "Développer un cadre d’analyse permettant de comparer plusieurs stratégies, de visualiser leurs résultats et d’évaluer la robustesse d’un portefeuille sous différents angles.",
        role:
            "Définition des hypothèses, récupération et traitement des données, développement des métriques, interprétation des résultats.",

        challenges: [
            "Construire une logique de comparaison claire entre actifs, stratégies et portefeuille global.",
            "Choisir des métriques pertinentes sans surcharger l’analyse.",
            "Garder un cadre lisible et utile, sans tomber dans une complexité inutile.",
        ],
        outcomes: [
            "Mise en place d’un environnement de backtest personnel.",
            "Comparaison plus concrète entre stratégies simples et portefeuille agrégé.",
            "Approfondissement de mes réflexes en analyse quantitative et en gestion du risque.",
        ],
        links: [],
    },
    {
        slug: "occifloc",
        title: "Occifloc",
        category: "Entrepreneuriat · Opérations · Business",
        shortDescription:
            "Développement d’une entreprise de personnalisation textile avec production, vente, pilotage opérationnel et structuration progressive.",
        longDescription:
            "Occifloc est un projet entrepreneurial réel, construit sur le terrain, autour de la personnalisation textile, des objets publicitaires et de la production locale. C’est une expérience centrale dans mon parcours, car elle m’a confronté très tôt à la réalité du pilotage d’une activité : clients, prix, marges, délais, qualité, organisation et amélioration continue.",
        technologies: ["Gestion", "Process", "Automatisation", "Vente"],
        image: "/images/projects/occifloc.jpg",
        featured: true,

        whatItShows:
            "Esprit entrepreneurial, sens de l’exécution, compréhension économique concrète et capacité à faire avancer un projet dans la réalité.",
        context:
            "Je voulais construire un projet concret, avec une vraie logique de création de valeur, de relation client et de pilotage opérationnel. Occifloc m’a donné un terrain réel pour apprendre, tester, ajuster et progresser au contact direct du marché.",
        objective:
            "Développer une activité rentable, mieux structurée dans le temps, avec une logique de croissance, de qualité de service et d’amélioration continue des processus.",
        role:
            "Développement commercial, pilotage global, réflexion sur les marges, suivi d’activité, structuration et amélioration des méthodes de travail.",

        challenges: [
            "Concilier développement commercial, production et organisation.",
            "Prendre de bonnes décisions avec des contraintes concrètes de terrain.",
            "Structurer progressivement l’activité sans perdre en réactivité.",
        ],
        outcomes: [
            "Développement d’une entreprise réelle avec des clients et des flux concrets.",
            "Montée en compétence sur les sujets business, opérationnels et financiers.",
            "Construction d’un profil plus complet, entre analyse, action et responsabilité.",
        ],
        links: [],
    },
];

export function getFeaturedProjects() {
    return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string) {
    return projects.find((project) => project.slug === slug);
}