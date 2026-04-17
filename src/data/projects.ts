export type ProjectLink = {
    label: string;
    href: string;
};

export type ProjectGalleryItem = {
    src: string;
    alt: string;
    caption: string;
};

export type ProjectDeepDiveBlock = {
    title: string;
    detail: string;
};

export type ProjectDeepDive = {
    summary: string;
    scope: string[];
    architecture: ProjectDeepDiveBlock[];
    dataFlow: string[];
    technicalChoices: ProjectDeepDiveBlock[];
    quality: string[];
    limitations: string[];
    nextSteps: string[];
    gallery?: ProjectGalleryItem[];
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
    deepDive?: ProjectDeepDive;
};

export const projects: Project[] = [
    {
        slug: "suivi-patrimoine",
        title: "Application de suivi de patrimoine",
        category: "Finance personnelle · Python · PyQt6",
        shortDescription:
            "Application desktop PyQt6 + SQLite pour centraliser des comptes multi-actifs, reconstruire l’historique hebdomadaire et analyser la performance d’un portefeuille.",
        longDescription:
            "Ce projet est une application Python orientée finance patrimoniale construite autour d’une architecture modulaire (couches services + interface Qt + base SQLite). Elle agrège des transactions de plusieurs comptes (banque, livret, PEA/CTO, private equity), normalise les données et produit des snapshots hebdomadaires pour suivre l’évolution du patrimoine dans le temps. Le module analytics calcule des métriques risque/rendement avec neutralisation des flux (achats/ventes) et prend en compte les effets de devise. L’application intègre aussi un import Trade Republic avec mapping d’alias (symboles/ISIN), des contrôles de qualité de données et une reconstruction complète de l’historique famille depuis la première transaction.",
        technologies: ["Python", "PyQt6", "SQLite", "Pandas", "Plotly", "yfinance"],
        image: "/images/projects/patrimoine_kpi.png",
        featured: true,

        whatItShows:
            "Conception d’un outil financier complet: modélisation de données, ingestion/normalisation de transactions, analytics portefeuille avancée, interface utilisateur desktop et logique de test.",
        context:
            "Le besoin initial était de remplacer un suivi fragmenté (tableurs + exports manuels) par un système unique et robuste, capable de gérer plusieurs classes d’actifs, plusieurs comptes et un historique long avec corrections rétroactives.",
        objective:
            "Construire une base fiable pour le suivi patrimonial et l’analyse de portefeuille: allocation, performance, flux nets, revenus passifs, reconstruction historique, et simulation/optimisation d’allocation via les modules d’analytics.",
        role:
            "J’ai conçu l’architecture, implémenté les services métiers et la base SQLite, développé les écrans Qt (dashboards, import, contrôle), et fait évoluer les métriques portefeuille avec une logique orientée qualité des données.",

        challenges: [
            "Modéliser des transactions hétérogènes (achat, vente, dividende, intérêts, dépôts, retraits) en gardant une cohérence comptable multi-comptes.",
            "Calculer des rendements réellement exploitables en neutralisant les flux hebdomadaires (cashflow-adjusted returns) au lieu d’utiliser uniquement la variation de valorisation brute.",
            "Gérer les imports réels Trade Republic (mapping ISIN/symboles, alias d’import, edge cases, token WAF) sans casser l’historique existant.",
            "Permettre un rebuild complet des snapshots famille depuis la première transaction, avec progression, annulation et contrôles de qualité.",
        ],
        outcomes: [
            "Mise en place d’un moteur de snapshots hebdomadaires personne/famille, avec reconstruction complète de l’historique.",
            "Ajout de métriques portefeuille avancées: performance annualisée, volatilité, Sharpe, beta vs URTH, max drawdown, avec calcul cashflow-adjusted.",
            "Intégration d’un flux d’import robuste (Trade Republic) avec alias d’actifs, prévisualisation ticker live et validation avant insertion.",
            "Couverture de tests sur les briques critiques (analytics, mappings d’alias, revenus passifs, transactions, nouveaux types de comptes).",
        ],
        links: [
            {
                label: "Repository GitHub",
                href: "https://github.com/MaximeFARRE/Suivie-patrimoine",
            },
            {
                label: "Commit analytics portefeuille",
                href: "https://github.com/MaximeFARRE/Suivie-patrimoine/commit/728d62a37934cf1e576418854d9357add62b29e0",
            },
            {
                label: "Commit import & mapping actifs",
                href: "https://github.com/MaximeFARRE/Suivie-patrimoine/commit/91d35ca87e5a29c2db1076602204f9890abdfddf",
            },
        ],
        deepDive: {
            summary:
                "Le projet fonctionne comme un moteur de suivi patrimonial: ingestion de transactions, normalisation comptable, snapshots hebdomadaires et analytics portefeuille orientée décision.",
            scope: [
                "Suivi multi-comptes: banque, livret, PEA/CTO, private equity.",
                "Historique hebdomadaire reconstruit depuis la première transaction.",
                "Calcul de performance portefeuille avec neutralisation des flux.",
                "Import Trade Republic avec mapping d’alias (symboles/ISIN).",
                "Interface desktop PyQt6 pour pilotage, contrôle et visualisation.",
            ],
            architecture: [
                {
                    title: "Couche persistence",
                    detail:
                        "Base SQLite versionnée (migrations SQL), tables transactions/comptes/assets/prices/snapshots, plus tables d’alias d’import pour fiabiliser les rapprochements.",
                },
                {
                    title: "Couche services métier",
                    detail:
                        "Modules dédiés pour repository CRUD, snapshots personne/famille, revenus consolidés, analytics bourse avancée, et conversions FX hebdomadaires.",
                },
                {
                    title: "Couche import",
                    detail:
                        "Pipeline d’import CSV Trade Republic avec phase de preview, résolution ISIN/symboles, mapping canonique, validation puis insertion.",
                },
                {
                    title: "Couche interface",
                    detail:
                        "Panels Qt orientés métier (patrimoine global, bourse, revenus, santé des données) avec rendu Plotly et actions de rebuild.",
                },
            ],
            dataFlow: [
                "Export des transactions broker et chargement dans le module d’import.",
                "Parsing/normalisation des opérations (achat, vente, dividende, intérêts, flux cash).",
                "Résolution actif canonique via ISIN/symbole et table d’alias.",
                "Écriture en base puis reconstruction des snapshots hebdomadaires.",
                "Calcul des métriques risque/rendement et production des graphes.",
                "Contrôles de cohérence et ajustements manuels via l’interface.",
            ],
            technicalChoices: [
                {
                    title: "Rendements cashflow-adjusted",
                    detail:
                        "Les rendements sont calculés en neutralisant les achats/ventes hebdomadaires pour éviter de confondre apports de capital et performance réelle.",
                },
                {
                    title: "Métriques annualisées robustes",
                    detail:
                        "Volatilité annualisée, Sharpe, beta versus URTH et max drawdown calculés à partir d’une série hebdomadaire cohérente.",
                },
                {
                    title: "Rebuild complet backdated-aware",
                    detail:
                        "Le moteur de snapshots permet une reconstruction historique complète, utile quand des transactions anciennes sont corrigées ou ajoutées.",
                },
                {
                    title: "Preview ticker avant import",
                    detail:
                        "Une prévisualisation ticker/prix/devise réduit le risque d’erreur de mapping avant insertion en base.",
                },
            ],
            quality: [
                "Tests ciblés sur analytics portefeuille, alias d’import et règles de revenus consolidés.",
                "Validation forte des relations personne/compte/transaction avant update/delete.",
                "Séparation claire UI / services / base pour limiter les régressions.",
            ],
            limitations: [
                "Dépendance aux exports externes broker et aux changements de mécanismes d’authentification.",
                "Architecture desktop mono-utilisateur (pas encore d’usage collaboratif multi-comptes en ligne).",
                "Couverture benchmark encore centrée sur un univers marché limité.",
            ],
            nextSteps: [
                "Étendre le module simulation de portefeuille (scénarios, contraintes, stress tests).",
                "Ajouter des connecteurs de données marché plus riches et plus résilients.",
                "Produire des rapports automatisés (mensuels/trimestriels) orientés décision.",
            ],
            gallery: [
                {
                    src: "/images/projects/patrimoine_kpi.png",
                    alt: "Tableau de bord KPI du suivi patrimonial",
                    caption: "Vue KPI consolidée du patrimoine et des principales métriques.",
                },
                {
                    src: "/images/projects/projection_montecarlo.png",
                    alt: "Projection Monte Carlo de portefeuille",
                    caption: "Projection de scénarios pour la simulation de trajectoires de portefeuille.",
                },
            ],
        },
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
