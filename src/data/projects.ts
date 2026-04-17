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
            "Ce projet est directement lié au projet « Backtest et optimisation de portefeuille »: le module de simulation/optimisation alimente ici l’analyse patrimoniale globale. C’est une application Python orientée finance patrimoniale construite autour d’une architecture modulaire (couches services + interface Qt + base SQLite). Elle agrège des transactions de plusieurs comptes (banque, livret, PEA/CTO, private equity), normalise les données et produit des snapshots hebdomadaires pour suivre l’évolution du patrimoine dans le temps. Le module analytics calcule des métriques risque/rendement avec neutralisation des flux (achats/ventes) et prend en compte les effets de devise. L’application intègre aussi un import Trade Republic avec mapping d’alias (symboles/ISIN), des contrôles de qualité de données et une reconstruction complète de l’historique famille depuis la première transaction.",
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
            "Ce projet est directement lié au projet « Application de suivi de patrimoine »: les résultats de backtests et de simulations sont utilisés pour piloter les décisions d’allocation du portefeuille suivi dans l’application principale. Il vise à construire un environnement d’analyse pour tester différentes approches d’investissement sur plusieurs actifs, comparer leurs performances et étudier la dynamique risque/rendement d’un portefeuille. Il s’inscrit dans une logique de finance quantitative appliquée : données propres, hypothèses explicites, métriques comparables et visualisations lisibles.",
        technologies: ["Python", "Pandas", "NumPy", "Plotly", "Backtesting", "Monte Carlo"],
        image: "/images/projects/backtest_5ans.png",
        featured: true,

        whatItShows:
            "Capacité à structurer un moteur de backtest, comparer plusieurs allocations et intégrer une simulation Monte Carlo pour estimer la distribution des trajectoires possibles.",
        context:
            "Je voulais compléter l’apprentissage académique de la finance de marché par un outil d’analyse construit de bout en bout. L’objectif était de tester des hypothèses d’investissement, comparer des résultats et interpréter concrètement performance, volatilité, drawdown, diversification et robustesse des trajectoires.",
        objective:
            "Développer un cadre d’analyse permettant de comparer plusieurs stratégies, visualiser leurs résultats, simuler des scénarios (Monte Carlo) et évaluer la robustesse d’un portefeuille selon plusieurs métriques.",
        role:
            "Définition des hypothèses, récupération et nettoyage des données, implémentation des backtests, simulation Monte Carlo, calcul des métriques, visualisation des résultats et interprétation financière.",

        challenges: [
            "Concevoir un cadre unique pour comparer plusieurs stratégies (buy & hold, allocations pondérées, rebalancing périodique) avec les mêmes hypothèses de départ.",
            "Intégrer des simulations Monte Carlo lisibles pour estimer une distribution de scénarios, sans sur-vendre la capacité prédictive du modèle.",
            "Conserver une séparation claire entre données brutes, logique de calcul, visualisations et interprétation afin de garder un pipeline maintenable.",
        ],
        outcomes: [
            "Backtests reproductibles sur un horizon de 5 ans pour comparer stratégies et allocations.",
            "Comparaison normalisée de métriques de risque/rendement: performance annualisée, volatilité, drawdown, Sharpe et stabilité relative.",
            "Ajout d’un module de simulation Monte Carlo pour visualiser des trajectoires probables et quantifier l’incertitude autour des résultats historiques.",
            "Base d’analyse réutilisée dans le projet de suivi de patrimoine pour relier suivi opérationnel et décision d’allocation.",
        ],
        links: [
            {
                label: "Repository GitHub",
                href: "https://github.com/MaximeFARRE/Suivie-patrimoine",
            },
            {
                label: "Projet lié: suivi de patrimoine",
                href: "/projets/suivi-patrimoine",
            },
            {
                label: "Capture backtest",
                href: "/images/projects/backtest_5ans.png",
            },
            {
                label: "Capture Monte Carlo",
                href: "/images/projects/projection_montecarlo.png",
            },
        ],
        deepDive: {
            summary:
                "Ce module constitue la brique quantitative du suivi patrimonial: il backteste des allocations, mesure leur risque/rendement et ajoute des simulations Monte Carlo pour estimer la robustesse des trajectoires.",
            scope: [
                "Backtests multi-stratégies sur un univers d’actifs homogénéisé.",
                "Comparaison de scénarios d’allocation et de fréquences de rebalancing.",
                "Calcul de métriques de risque/rendement annualisées et drawdowns.",
                "Simulation Monte Carlo pour distribution de trajectoires de portefeuille.",
                "Restitution des résultats via graphiques orientés décision.",
            ],
            architecture: [
                {
                    title: "Couche données",
                    detail:
                        "Préparation des séries de prix/rendements, nettoyage des trous de cotation et alignement temporel pour garantir des comparaisons cohérentes.",
                },
                {
                    title: "Moteur de backtest",
                    detail:
                        "Exécution de stratégies paramétrées (allocation initiale, règles de rebalancing, horizon, contraintes) avec journalisation des valeurs de portefeuille.",
                },
                {
                    title: "Moteur simulation",
                    detail:
                        "Génération de trajectoires Monte Carlo à partir des rendements historiques pour évaluer l’éventail de scénarios possibles.",
                },
                {
                    title: "Couche reporting",
                    detail:
                        "Production de KPI et de visualisations comparatives (performance cumulée, drawdown, dispersion des trajectoires) exploitables pour l’arbitrage.",
                },
            ],
            dataFlow: [
                "Chargement des séries marché et normalisation des timestamps.",
                "Application des règles de stratégie et exécution des backtests.",
                "Calcul des métriques portefeuille (rendement, risque, drawdown).",
                "Lancement des simulations Monte Carlo sur l’horizon défini.",
                "Consolidation des résultats dans des graphiques comparables.",
                "Utilisation des conclusions pour orienter les choix d’allocation du projet de suivi patrimonial.",
            ],
            technicalChoices: [
                {
                    title: "Cadre de comparaison unifié",
                    detail:
                        "Les stratégies sont évaluées avec la même base de données, les mêmes périodes et les mêmes conventions de calcul pour limiter les biais de comparaison.",
                },
                {
                    title: "Lecture risque/rendement multi-métriques",
                    detail:
                        "L’évaluation combine performance et risque (volatilité, drawdown, Sharpe) pour éviter des conclusions basées uniquement sur le rendement brut.",
                },
                {
                    title: "Monte Carlo comme test de robustesse",
                    detail:
                        "Les simulations servent à mesurer l’incertitude et la dispersion des issues possibles, pas à prédire précisément le futur.",
                },
                {
                    title: "Intégration au suivi patrimonial",
                    detail:
                        "Les scénarios les plus robustes sont réinjectés dans la logique d’allocation du projet de suivi de patrimoine.",
                },
            ],
            quality: [
                "Paramètres de tests explicités (horizon, règles, hypothèses de base).",
                "Pipeline séparable entre préparation des données, calcul et visualisation.",
                "Contrôles de cohérence sur l’alignement temporel des séries utilisées.",
            ],
            limitations: [
                "Résultats sensibles à la période historique choisie et au régime de marché.",
                "Les simulations Monte Carlo restent dépendantes des hypothèses de distribution et de volatilité.",
                "Pas de prise en compte exhaustive des frictions réelles (frais détaillés, slippage avancé, fiscalité complète).",
            ],
            nextSteps: [
                "Ajouter des contraintes d’optimisation plus fines (bornes par classe d’actifs, budgets de risque).",
                "Étendre les analyses de stress test (chocs de corrélation, baisses extrêmes, scénarios macro).",
                "Automatiser l’échange de résultats entre module backtest et application de suivi patrimonial.",
            ],
            gallery: [
                {
                    src: "/images/projects/backtest_5ans.png",
                    alt: "Comparaison des backtests sur 5 ans",
                    caption: "Comparaison des trajectoires de performance de plusieurs stratégies sur 5 ans.",
                },
                {
                    src: "/images/projects/projection_montecarlo.png",
                    alt: "Simulation Monte Carlo d’un portefeuille",
                    caption: "Projection Monte Carlo pour visualiser la dispersion des scénarios de portefeuille.",
                },
            ],
        },
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
    {
        slug: "projet-machine-learning",
        title: "Projet de machine learning appliqué à l’allocation",
        category: "Finance quantitative · Data science · Machine Learning",
        shortDescription:
            "Pipeline Python de modélisation et backtest pour comparer des stratégies d’allocation (Equal Weight, Markowitz, Random Forest, Logistic Regression) sur des actifs financiers.",
        longDescription:
            "Ce projet est lié aux projets « Backtest et optimisation de portefeuille » et « Application de suivi de patrimoine »: il constitue la brique machine learning utilisée pour tester des signaux et comparer leur impact sur la performance portefeuille. Le repo structure un pipeline complet, de la préparation des données marché à la production de métriques test, avec une logique reproductible (scripts dédiés + orchestration run_all). L’approche combine des baselines classiques (Equal Weight, Markowitz Minimum Variance) et des modèles supervisés (Random Forest, Logistic Regression) pour prédire la direction des rendements journaliers et transformer ces probabilités en poids de portefeuille.",
        technologies: ["Python", "Pandas", "NumPy", "scikit-learn", "Matplotlib", "Seaborn"],
        image: "/images/projects/projection_montecarlo.png",
        featured: true,

        whatItShows:
            "Capacité à transformer un sujet quantitatif en pipeline ML exploitable: ingénierie de features, sélection de variables, entraînement multi-modèles, comparaison à des baselines financières et restitution claire des résultats.",
        context:
            "L’objectif était de dépasser un simple notebook exploratoire pour produire une base de travail rigoureuse et collaborative: code modulaire, scripts dédiés, métriques exportées et graphes de comparaison directement utilisables.",
        objective:
            "Évaluer de manière structurée l’apport de modèles supervisés sur l’allocation de portefeuille, en conservant un point de référence financier robuste grâce aux baselines Equal Weight et Markowitz.",
        role:
            "Participation à la structuration du projet, à l’intégration des modules de comparaison de stratégies et à la formalisation d’un flux complet: préparation des données, entraînement, backtest et reporting.",

        challenges: [
            "Construire un pipeline temporel propre (train/test) pour limiter les biais de fuite d’information dans un contexte série temporelle.",
            "Comparer des approches de nature différente (allocations statiques vs modèles supervisés) avec des métriques homogènes.",
            "Maintenir une architecture lisible malgré la multiplication des briques (features, modèles, baselines, scripts d’orchestration).",
        ],
        outcomes: [
            "Mise en place d’un enchaînement reproductible via scripts (`run_prepare.py`, `run_baselines.py`, `run_random_forest.py`, `run_logistic_regression.py`, `run_all.py`).",
            "Production systématique de rapports de test (`metrics_test_*`) et de figures comparatives (`equity_*_vs_baselines_test.png`).",
            "Intégration de Random Forest avec sélection ANOVA des variables et recherche d’hyperparamètres (`GridSearchCV`).",
            "Ajout d’un benchmark supervisé Logistic Regression comparé aux stratégies financières classiques.",
        ],
        links: [
            {
                label: "Repository GitHub",
                href: "https://github.com/MaximeFARRE/Projet_final_ML",
            },
            {
                label: "Projet lié: backtest portefeuille",
                href: "/projets/backtest-optimisation-portefeuille",
            },
            {
                label: "Projet lié: suivi de patrimoine",
                href: "/projets/suivi-patrimoine",
            },
            {
                label: "Commit Random Forest",
                href: "https://github.com/MaximeFARRE/Projet_final_ML/commit/eba827df76afca95144b9db81a238e4d71ac0c1d",
            },
            {
                label: "Commit Logistic Regression",
                href: "https://github.com/MaximeFARRE/Projet_final_ML/commit/5c76815da29c2485d593eb278b7f08ccac8a9acf",
            },
        ],
        deepDive: {
            summary:
                "Le projet suit une logique quant/ML complète: ingestion des prix, construction de features techniques, entraînement de modèles directionnels par actif, backtest de portefeuille, puis comparaison systématique aux baselines.",
            scope: [
                "Préparation des données et EDA (prix normalisés, distribution des rendements, corrélations, volatilité roulante).",
                "Baselines financières: Equal Weight Buy & Hold et Markowitz Minimum Variance.",
                "Modélisation supervisée par actif: Random Forest et Logistic Regression.",
                "Backtest des stratégies ML sur la période test avec conversion des probabilités en poids portefeuille.",
                "Export des métriques et figures pour lecture comparative.",
            ],
            architecture: [
                {
                    title: "Couche données",
                    detail:
                        "Modules `src/data/load_data.py` et `src/data/preprocess.py` pour charger les prix, calculer les rendements et séparer train/test de façon temporelle.",
                },
                {
                    title: "Feature engineering",
                    detail:
                        "Construction d’indicateurs techniques (`src/features/technical_indicators.py`) et sélection ANOVA (`src/features/feature_selection.py`) sur les variables pertinentes.",
                },
                {
                    title: "Modèles et stratégies",
                    detail:
                        "Implémentation de baselines financières (`src/baselines`) et modèles ML (`src/models/random_forest.py`, `src/models/logistic_regression.py`) avec logique de backtest.",
                },
                {
                    title: "Orchestration et reporting",
                    detail:
                        "Scripts `scripts/run_*.py` + `run_all.py` pour exécuter le pipeline complet, générer les tables de métriques et les graphes d’equity curve.",
                },
            ],
            dataFlow: [
                "Chargement des séries de prix et calcul des rendements quotidiens.",
                "Création des features techniques et sauvegarde de la table consolidée.",
                "Séparation temporelle train/test et entraînement des modèles par actif.",
                "Projection des signaux/probabilités en poids de portefeuille sur la période test.",
                "Calcul des equity curves et des métriques de comparaison inter-stratégies.",
                "Export des résultats (`reports/tables`, `reports/figures`) pour analyse décisionnelle.",
            ],
            technicalChoices: [
                {
                    title: "Comparaison systématique aux baselines",
                    detail:
                        "Chaque stratégie ML est évaluée face à Equal Weight et Markowitz pour garder un référentiel financier stable, pas uniquement un score de classification.",
                },
                {
                    title: "Découpage temporel explicite",
                    detail:
                        "Le split train/test suit la chronologie marché afin de limiter les biais de fuite d’information sur séries temporelles.",
                },
                {
                    title: "Sélection ANOVA + GridSearchCV",
                    detail:
                        "Random Forest combine une réduction de dimension des features et un réglage d’hyperparamètres pour éviter une approche purement arbitraire.",
                },
                {
                    title: "Modélisation par actif puis agrégation portefeuille",
                    detail:
                        "Les prédictions sont faites par ticker puis agrégées via une logique de pondération, ce qui rapproche le modèle du besoin allocation réel.",
                },
            ],
            quality: [
                "Scripts dédiés par étape pour reproductibilité et débogage ciblé.",
                "Exports versionnables des métriques et visualisations de test.",
                "Structure modulaire (`src/data`, `src/features`, `src/models`, `src/baselines`, `scripts`) compatible travail en équipe.",
            ],
            limitations: [
                "Les performances restent dépendantes de la fenêtre historique et du régime de marché observé.",
                "Les frictions de marché réelles sont simplifiées (coûts de transaction, liquidité, slippage avancé).",
                "Validation encore perfectible (walk-forward robuste, stress tests plus systématiques).",
            ],
            nextSteps: [
                "Ajouter une validation walk-forward et des protocoles de robustesse hors-échantillon plus stricts.",
                "Étendre la bibliothèque de modèles (ex: gradient boosting) dans le même cadre de comparaison.",
                "Relier automatiquement les sorties du pipeline ML aux modules de suivi patrimonial.",
            ],
            gallery: [
                {
                    src: "/images/projects/projection_montecarlo.png",
                    alt: "Pipeline machine learning de comparaison de stratégies portefeuille",
                    caption: "Vue synthétique du pipeline ML et des courbes de stratégies comparées.",
                },
                {
                    src: "/images/projects/backtest_5ans.png",
                    alt: "Comparaison Random Forest et baselines sur période test",
                    caption: "Comparaison visuelle du modèle Random Forest face aux baselines financières.",
                },
            ],
        },
    },
];

export function getFeaturedProjects() {
    return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string) {
    return projects.find((project) => project.slug === slug);
}
