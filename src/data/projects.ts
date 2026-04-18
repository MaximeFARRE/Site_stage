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
        slug: "projet-finance-cpp",
        title: "Pricing d’options en C++ (CRR, Black-Scholes, Monte Carlo)",
        category: "Finance quantitative · C++ · Pricing",
        shortDescription:
            "Projet de groupe en C++ pour pricer plusieurs types d’options (européennes, américaines, asiatiques) avec CRR, Black-Scholes et Monte Carlo.",
        longDescription:
            "Projet académique de groupe orienté ingénierie financière en C++. L’objectif était de construire un socle de pricing d’options avec plusieurs approches complémentaires: modèle binomial CRR, formule fermée Black-Scholes (cas européen) et simulation Monte Carlo. Je me suis principalement concentré sur la brique Monte Carlo: amélioration de la précision numérique, gestion de gros volumes de trajectoires dans un temps limité et fiabilisation des calculs (payoffs, bornes, intervalles de confiance).",
        technologies: ["C++", "Monte Carlo", "Black-Scholes", "CRR", "Mersenne Twister", "Visual Studio"],
        image: "/images/projects/monte_carlos_cpp.png",
        featured: true,

        whatItShows:
            "Capacité à implémenter des pricers quantitatifs en C++ avec une architecture orientée objets, et à optimiser une simulation Monte Carlo pour améliorer à la fois robustesse et performance.",
        context:
            "Le projet s’inscrit dans un cadre de finance de marché orienté pricing d’options. Le travail d’équipe portait sur la construction d’une base commune (options + pricers), puis sur l’approfondissement de modules spécifiques.",
        objective:
            "Comparer plusieurs méthodes de valorisation dans un même codebase, valider leur cohérence sur des cas standards et disposer d’une implémentation Monte Carlo utilisable avec un grand nombre de simulations.",
        role:
            "Projet de groupe. Ma contribution principale: développement et amélioration du pricer Monte Carlo (génération de trajectoires, stabilité numérique, intervalle de confiance 95 %, gestion d’un grand nombre de paths dans un temps imparti), ainsi que l’intégration du générateur aléatoire Mersenne Twister.",

        challenges: [
            "Concevoir une architecture option/pricer réutilisable pour des payoffs différents (vanille, digitale, asiatique, américaine).",
            "Faire tourner un volume élevé de simulations Monte Carlo tout en gardant un code lisible et une latence raisonnable.",
            "Limiter les dérives numériques (valeurs non finies, variances négatives dues aux arrondis, cas limites sur les intervalles de confiance).",
            "Conserver une cohérence métier entre les différentes méthodes de pricing (CRR, Black-Scholes, Monte Carlo).",
        ],
        outcomes: [
            "Mise en place d’un framework C++ de pricing couvrant options européennes, américaines et asiatiques.",
            "Implémentation d’un pricer Monte Carlo avec accumulation statistique (moyenne, variance) et intervalle de confiance à 95 %.",
            "Améliorations ciblées de performance Monte Carlo (réutilisation de structures en mémoire, génération de nombreuses trajectoires dans un temps contraint).",
            "Intégration d’un singleton Mersenne Twister pour standardiser la génération aléatoire dans le projet.",
        ],
        links: [
            {
                label: "Repository GitHub",
                href: "https://github.com/MaximeFARRE/Projet-Finance-Cpp",
            },
            {
                label: "Commit final (CRR/BS/MC)",
                href: "https://github.com/MaximeFARRE/Projet-Finance-Cpp/commit/67d4baaefe57f4d162815cadd5b3677651f55ee8",
            },
            {
                label: "Commit Monte Carlo pricer",
                href: "https://github.com/MaximeFARRE/Projet-Finance-Cpp/commit/e9dfebc0ec42d7febe356593b128b795e385b019",
            },
            {
                label: "Commit Mersenne Twister",
                href: "https://github.com/MaximeFARRE/Projet-Finance-Cpp/commit/8894da12e0661f913967c7025709fe37b71233fd",
            },
        ],
        deepDive: {
            summary:
                "Le projet assemble trois approches de pricing (CRR, Black-Scholes, Monte Carlo) dans une architecture C++ orientée objets. Ma partie principale concerne le moteur Monte Carlo et sa robustesse sous charge.",
            scope: [
                "Support de plusieurs familles d’options: vanille, digitale, asiatique et américaine.",
                "Implémentation de plusieurs pricers pour comparaison: CRR, formule fermée Black-Scholes, simulation Monte Carlo.",
                "Génération de trajectoires sous hypothèses Black-Scholes avec pas temporels dédiés.",
                "Calcul de prix, statistiques agrégées et intervalle de confiance 95 %.",
                "Sécurisation des cas limites numériques pour éviter des résultats incohérents.",
            ],
            architecture: [
                {
                    title: "Hiérarchie d’options",
                    detail:
                        "Classe abstraite `Option` et spécialisations pour options européennes, américaines et asiatiques, avec logique de payoff polymorphe.",
                },
                {
                    title: "Couche pricers",
                    detail:
                        "Pricers séparés par méthode (`CRRPricer`, `BlackScholesPricer`, `BlackScholesMCPricer`) pour isoler clairement les hypothèses de valorisation.",
                },
                {
                    title: "Moteur aléatoire",
                    detail:
                        "Générateur `MT` basé sur Mersenne Twister en singleton, utilisé comme source unifiée pour les tirages uniformes et normaux.",
                },
                {
                    title: "Runner de tests de prix",
                    detail:
                        "Exécutable principal pour comparer les résultats des pricers selon des paramètres communs (spot, strike, volatilité, maturité, taux).",
                },
            ],
            dataFlow: [
                "Paramétrage de l’option (type, strike, maturité) et du modèle (S0, r, sigma).",
                "Construction du pricer adapté (CRR, BS fermé ou Monte Carlo).",
                "Pour Monte Carlo: génération de trajectoires avec tirages gaussiens via Mersenne Twister.",
                "Évaluation des payoffs sur chaque trajectoire puis agrégation statistique.",
                "Actualisation des payoffs moyens pour obtenir le prix estimé.",
                "Calcul de l’intervalle de confiance pour qualifier l’incertitude statistique.",
            ],
            technicalChoices: [
                {
                    title: "Réutilisation mémoire dans la simulation",
                    detail:
                        "Le moteur Monte Carlo réutilise des buffers de trajectoires afin de limiter les allocations répétées et tenir un grand nombre de simulations.",
                },
                {
                    title: "Contrôles de robustesse numérique",
                    detail:
                        "Ajout de garde-fous sur les valeurs non finies/négatives et sur la variance pour éviter des sorties instables lors des fortes charges de calcul.",
                },
                {
                    title: "Intervalle de confiance 95 %",
                    detail:
                        "Le pricer ne se limite pas à un prix point-estimé: il retourne aussi une borne statistique pour juger la précision de la simulation.",
                },
                {
                    title: "Séparation claire par méthode de pricing",
                    detail:
                        "Le découpage CRR / BS / MC facilite la comparaison des approches et permet d’améliorer chaque moteur indépendamment.",
                },
            ],
            quality: [
                "Validation des entrées critiques (option nulle, échéances, tailles de trajectoires).",
                "Gestion explicite des cas limites Monte Carlo (nombre de paths insuffisant, stabilité des bornes).",
                "Approche modulaire qui simplifie les tests unitaires par composant (option, pricer, aléatoire).",
            ],
            limitations: [
                "Le modèle reste basé sur les hypothèses Black-Scholes (volatilité constante, dynamique log-normale).",
                "Les comparaisons de vitesse/performance ne sont pas encore outillées par un benchmark automatisé complet.",
                "Le moteur ne couvre pas encore des modèles plus avancés (volatilité stochastique, sauts, calibration marché).",
            ],
            nextSteps: [
                "Ajouter un protocole de benchmark reproductible (temps CPU, erreur statistique selon N paths).",
                "Étendre le moteur à des réductions de variance (antithétiques, control variates) pour gagner en précision à coût constant.",
                "Connecter les résultats de pricing à un module d’analyse portefeuille plus large (sensibilités, scénarios).",
            ],
            gallery: [
                {
                    src: "/images/projects/projection_montecarlo.png",
                    alt: "Simulation Monte Carlo pour le pricing d’options en C++",
                    caption: "Aperçu de la logique Monte Carlo utilisée pour estimer des prix d’options.",
                },
            ],
        },
    },
    {
        slug: "projet-python-git-a4",
        title: "Dashboard quantitatif Python/Git (Quant A & Quant B)",
        category: "Finance quantitative · Python · Streamlit",
        shortDescription:
            "Projet de groupe en Python pour construire un dashboard financier interactif: module single-asset (Quant A) et module portefeuille multi-actifs (Quant B).",
        longDescription:
            "Projet réalisé dans le cadre du cours « Python, Git, Linux for Finance ». Le livrable est une application Streamlit unique qui simule le travail d’une équipe quantitative en gestion d’actifs: récupération de données marché via API, backtests de stratégies, analyse portefeuille multi-actifs, visualisations et métriques de risque/rendement. Le projet a été développé en binôme avec une séparation claire des responsabilités.",
        technologies: ["Python", "Streamlit", "Pandas", "yfinance", "Plotly", "Git", "Linux"],
        image: "/images/projects/projet_python_git_a4.png",
        featured: true,

        whatItShows:
            "Capacité à livrer un outil quantitatif de bout en bout: ingestion de données financières, logique de stratégie, calcul de métriques, interface interactive et intégration collaborative par branches Git.",
        context:
            "Le cadre pédagogique imposait une organisation proche d’un workflow professionnel (division Quant A / Quant B, merge requests, intégration finale), avec un objectif de dashboard exploitable et pas uniquement un notebook de démonstration.",
        objective:
            "Construire une application financière interactive permettant d’analyser un actif, de backtester des stratégies, puis d’étendre l’analyse à un portefeuille multi-actifs avec mesures de diversification et de risque.",
        role:
            "Projet de groupe (2 personnes). Ma contribution principale: Quant A (single asset) avec chargement des données CAC40 via API, implémentation des stratégies Buy & Hold et Moving Average Crossover, calcul des métriques (rendement, volatilité, Sharpe, drawdown), et intégration des sorties dans l’interface Streamlit.",

        challenges: [
            "Structurer un codebase modulaire avec une frontière nette entre logique Quant A (actif unique) et Quant B (portefeuille).",
            "Gérer des données de marché réelles (fréquences multiples, structures de colonnes, cas de données manquantes) sans casser le flux UI.",
            "Maintenir des métriques cohérentes entre stratégies et périodes, tout en conservant un rendu lisible pour l’utilisateur final.",
            "Intégrer les contributions en branche et garder une application unique stable après merges.",
        ],
        outcomes: [
            "Mise en place d’un module Quant A complet: data loader CAC40, stratégies single-asset et affichage des performances dans Streamlit.",
            "Intégration d’un module Quant B multi-actifs avec allocation, rebalancing, backtest portefeuille et indicateurs de diversification.",
            "Application unifiée avec navigation claire, visualisations comparatives et tableaux de synthèse pour l’aide à la décision.",
            "Workflow collaboratif Git/GitHub matérialisé par des branches dédiées et des merges structurés.",
        ],
        links: [
            {
                label: "Repository GitHub",
                href: "https://github.com/MaximeFARRE/Projet-Python-Git-A4",
            },
            {
                label: "Commit data loader Quant A",
                href: "https://github.com/MaximeFARRE/Projet-Python-Git-A4/commit/7e40ab6ee77b99a1c10483cfbd55821e57c36c69",
            },
            {
                label: "Commit stratégies + métriques Quant A",
                href: "https://github.com/MaximeFARRE/Projet-Python-Git-A4/commit/25c0fd3a62683b9f17720f11bde514ae9151894f",
            },
            {
                label: "Merge branche Quant A",
                href: "https://github.com/MaximeFARRE/Projet-Python-Git-A4/commit/6251c229c05e989b1731b3e74bd067f9c1fb41aa",
            },
            {
                label: "Merge branche Quant B",
                href: "https://github.com/MaximeFARRE/Projet-Python-Git-A4/commit/e50c88d936152204ed9027a123803a92768716ba",
            },
        ],
        deepDive: {
            summary:
                "Le projet est organisé comme un dashboard quantitatif modulaire: un module Quant A orienté single-asset et un module Quant B orienté portefeuille multi-actifs, réunis dans une interface Streamlit unique.",
            scope: [
                "Chargement de données marché via API publique (OHLCV, fréquences daily/intraday).",
                "Backtests single-asset sur CAC40 avec stratégies quantitatives configurables.",
                "Analyse portefeuille multi-actifs avec règles d’allocation et rebalancing.",
                "Calcul de KPI risque/rendement et indicateurs de diversification.",
                "Visualisation interactive (courbes, matrices corrélation/covariance, contributions au risque).",
            ],
            architecture: [
                {
                    title: "Module Quant A",
                    detail:
                        "Sous-dossier `app/quant_a` avec `data_loader.py`, `strategies.py`, `metrics.py`, `ui_quant_a.py` pour isoler collecte des données, logique de stratégie et rendu UI.",
                },
                {
                    title: "Module Quant B",
                    detail:
                        "Sous-dossier `app/quant_b` avec moteur portefeuille (`portfolio.py`, `backtest.py`, `metrics.py`) et page Streamlit dédiée pour la configuration multi-actifs.",
                },
                {
                    title: "Couche intégration",
                    detail:
                        "Point d’entrée `main.py` qui orchestre la navigation entre modules et garde une expérience utilisateur cohérente.",
                },
                {
                    title: "Workflow collaboratif",
                    detail:
                        "Développement en branches (`quant_a`, `quant_b`) puis merges sur `main`, avec séparation explicite des responsabilités d’équipe.",
                },
            ],
            dataFlow: [
                "Sélection utilisateur (actifs, période, fréquence, paramètres de stratégie).",
                "Chargement des prix via API et nettoyage/alignement des séries.",
                "Exécution des stratégies et calcul des rendements/courbes d’équité.",
                "Agrégation portefeuille (poids, rebalancing, métriques de risque).",
                "Calcul des indicateurs (Sharpe, drawdown, corrélations, contributions au risque).",
                "Rendu des résultats en graphiques et tables dans Streamlit.",
            ],
            technicalChoices: [
                {
                    title: "Séparation Quant A / Quant B",
                    detail:
                        "Le découpage modulaire réduit les collisions de développement et facilite la maintenance des briques single-asset vs portefeuille.",
                },
                {
                    title: "Uniformisation des séries",
                    detail:
                        "Le module de stratégie force des structures de données homogènes (Series/DataFrame) pour éviter des erreurs silencieuses d’alignement.",
                },
                {
                    title: "KPI orientés décision",
                    detail:
                        "Les sorties privilégient des métriques financières directement interprétables (annualisé, Sharpe, max drawdown, diversification ratio).",
                },
                {
                    title: "UI Streamlit pilotable",
                    detail:
                        "Les paramètres de stratégie/allocation sont exposés en contrôles interactifs pour tester rapidement plusieurs hypothèses.",
                },
            ],
            quality: [
                "Responsabilités d’équipe explicites et intégration par branches Git.",
                "Modules métiers séparés (données, stratégie, métriques, UI) pour limiter les régressions.",
                "Gestion des cas invalides côté interface (dates incohérentes, données absentes, paramètres incompatibles).",
            ],
            limitations: [
                "Dépendance à la qualité et à la disponibilité des APIs de données publiques.",
                "Hypothèses de backtest simplifiées (frais réels, slippage avancé, contraintes de liquidité non exhaustives).",
                "Le déploiement Linux est présent dans le cadre projet mais pas encore industrialisé comme une chaîne CI/CD complète.",
            ],
            nextSteps: [
                "Ajouter des scénarios de stress test et des hypothèses de coûts de transaction plus réalistes.",
                "Étendre la bibliothèque de stratégies (momentum/carry/volatility targeting) dans le même cadre de comparaison.",
                "Renforcer l’observabilité et l’automatisation de déploiement (tests + pipeline CI).",
            ],
            gallery: [
                {
                    src: "/images/projects/projet_python_git_a4.png",
                    alt: "Dashboard quantitatif Python Git A4",
                    caption: "Vue du projet de dashboard quantitatif regroupant analyse single-asset et portefeuille.",
                },
            ],
        },
    },
    {
        slug: "site-stage",
        title: "Site portfolio carrière (ce site)",
        category: "Web · Next.js · Product Design",
        shortDescription:
            "Conception et développement d’un site portfolio orienté finance + technologie, avec une architecture de contenu centralisée et des pages projet détaillées.",
        longDescription:
            "Ce projet correspond au site que vous consultez actuellement. L’objectif est de construire un portfolio crédible pour des recruteurs finance/tech, avec un niveau de finition professionnel sur le fond (contenu, cohérence narrative, structure des projets) et sur la forme (UX, responsive, SEO de base, maintenabilité). Le site suit une architecture App Router avec séparation stricte entre données et composants pour accélérer les itérations sans casser l’interface.",
        technologies: ["Next.js App Router", "TypeScript", "Tailwind CSS", "Vercel", "ESLint"],
        image: "/images/profile/photo de profil.jpeg",
        featured: true,

        whatItShows:
            "Capacité à transformer un simple site vitrine en produit éditorial structuré: contenu piloté par données, pages projet techniques, cohérence UX et workflow d’amélioration continue.",
        context:
            "Le besoin était de remplacer un portfolio trop générique par une version plus exigeante, crédible et orientée résultats pour des recruteurs en finance quantitative, asset management et environnements tech.",
        objective:
            "Créer un site lisible et convaincant, capable de présenter des projets techniques en profondeur tout en conservant une navigation claire et une expérience fluide sur mobile/desktop.",
        role:
            "Conception de l’architecture du site, structuration des données (`src/data`), création des pages projet détaillées, amélioration de la qualité du copywriting technique, corrections UX/SEO et itérations continues sur la crédibilité du rendu final.",

        challenges: [
            "Maintenir une cohérence de ton et de niveau technique entre toutes les pages (home, à propos, projets, détails).",
            "Éviter l’effet template en renforçant la densité des contenus projet sans surcharger la lecture.",
            "Garantir la maintenabilité: tout le contenu doit rester centralisé dans `src/data` et non dispersé dans les composants.",
            "Garder un responsive robuste avec des blocs de texte longs et des cartes riches en informations.",
        ],
        outcomes: [
            "Mise en place d’une base de données front-end claire pour piloter le contenu (projets, expériences, navigation, profils).",
            "Ajout de pages projet approfondies avec architecture, choix techniques, limites et prochaines étapes.",
            "Amélioration de la crédibilité globale du site via un ton plus concret et des preuves techniques (liens commits/repositories).",
            "Workflow itératif de correction continue (UX, contenu, structure) pour converger vers un rendu prêt pour candidatures.",
        ],
        links: [
            {
                label: "Repository GitHub",
                href: "https://github.com/MaximeFARRE/Site_stage",
            },
            {
                label: "Commit ajout projets détaillés",
                href: "https://github.com/MaximeFARRE/Site_stage/commit/5a33191",
            },
            {
                label: "Commit page suivi patrimoine",
                href: "https://github.com/MaximeFARRE/Site_stage/commit/d5f5b5b",
            },
            {
                label: "Commit correction bugs",
                href: "https://github.com/MaximeFARRE/Site_stage/commit/51cf4d3",
            },
        ],
        deepDive: {
            summary:
                "Le site est structuré comme un produit éditorial maintenable: données centralisées, composants réutilisables, pages détaillées et logique d’amélioration incrémentale.",
            scope: [
                "Pages clés: accueil, à propos, expériences, projets, détails projet, CV, contact.",
                "Centralisation du contenu dans `src/data` pour éviter la duplication et faciliter les mises à jour.",
                "Génération de pages projet dynamiques via slug avec routes dédiées par projet clé.",
                "Design system léger basé sur Tailwind + variables de thème.",
                "Déploiement Vercel avec vérifications lint/type-check avant livraison.",
            ],
            architecture: [
                {
                    title: "Couche données",
                    detail:
                        "Toutes les entités éditoriales (projets, expériences, navigation, profil) sont regroupées dans `src/data` pour séparer clairement contenu et présentation.",
                },
                {
                    title: "Couche pages",
                    detail:
                        "App Router (`src/app`) avec routes statiques + route dynamique `/projets/[slug]` pour supporter des fiches projet riches et scalables.",
                },
                {
                    title: "Couche composants",
                    detail:
                        "Composants UI réutilisables (layout, sections, cards) afin de garder une cohérence visuelle et limiter la dette front-end.",
                },
                {
                    title: "Qualité de livraison",
                    detail:
                        "Validation systématique via ESLint et TypeScript (`tsc --noEmit`) pour sécuriser les itérations rapides.",
                },
            ],
            dataFlow: [
                "Écriture/mise à jour du contenu dans `src/data/*.ts`.",
                "Lecture des données par les pages et sections concernées.",
                "Résolution des pages projet via slug (`getProjectBySlug`).",
                "Rendu des sections techniques (architecture, pipeline, limites, résultats).",
                "Vérification qualité (lint + type-check) avant déploiement.",
                "Publication sur Vercel et validation fonctionnelle des routes critiques.",
            ],
            technicalChoices: [
                {
                    title: "Content-first architecture",
                    detail:
                        "La priorité est donnée à la robustesse éditoriale: les contenus sont traités comme des données versionnées, pas comme du texte inline dans les composants.",
                },
                {
                    title: "Route dynamique projet",
                    detail:
                        "L’usage de `/projets/[slug]` permet de faire évoluer le volume de projets sans complexifier la structure applicative.",
                },
                {
                    title: "Itération pilotée par feedback",
                    detail:
                        "Le site évolue par corrections successives (crédibilité, UX, précision technique) pour converger vers un niveau attendu en contexte recrutement.",
                },
                {
                    title: "Simplicité maîtrisée",
                    detail:
                        "Le projet reste volontairement sans backend complexe pour garder une maintenance faible et un time-to-update rapide.",
                },
            ],
            quality: [
                "Lint et type-check lancés à chaque itération significative.",
                "Structure de fichiers stable et lisible pour faciliter les contributions futures.",
                "Contrôle manuel régulier des routes projets et des liens critiques.",
            ],
            limitations: [
                "Le site reste statique: pas de CMS ni d’interface d’édition dédiée.",
                "La preuve visuelle des projets dépend encore de la qualité/volume des captures disponibles.",
                "Certaines améliorations SEO avancées (schema détaillé par projet) peuvent être renforcées.",
            ],
            nextSteps: [
                "Ajouter des captures écran plus spécifiques par projet pour renforcer la preuve visuelle.",
                "Compléter les métadonnées Open Graph par page projet avec images dédiées.",
                "Finaliser les derniers ajustements de copywriting orientés recruteurs finance/tech.",
            ],
            gallery: [
                {
                    src: "/images/profile/photo de profil.jpeg",
                    alt: "Projet de site portfolio professionnel en cours de construction",
                    caption: "Ce site est développé comme un projet produit à part entière, avec itérations techniques et éditoriales.",
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
