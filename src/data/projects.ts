export const projects = [
    {
        slug: "application-suivi-patrimoine",

        title: "Application de suivi de patrimoine",

        category: "Finance / Développement",

        shortDescription:
            "Développement d’une application permettant de suivre, analyser et visualiser un patrimoine financier de manière claire et automatisée.",

        longDescription: `
Cette application permet de centraliser plusieurs types d’actifs 
(actions, ETF, immobilier, private equity, crypto, cash, etc.) afin de suivre l’évolution globale d’un patrimoine.

Le projet inclut notamment :
- une vue globale du portefeuille ;
- des graphiques et statistiques ;
- des outils de backtest ;
- une analyse des performances ;
- une optimisation de portefeuille.
    `,

        technologies: [
            "Python",
            "Qt",
            "Finance",
            "Backtest",
            "Portfolio Analysis",
        ],

        image: "/images/projects/patrimoine-cover.jpg",

        featured: true,
    },

    {
        slug: "backtest-portefeuille",

        title: "Backtest et optimisation de portefeuille",

        category: "Finance quantitative",

        shortDescription:
            "Création d’un outil permettant de tester différentes allocations et d’optimiser un portefeuille selon plusieurs critères.",

        longDescription: `
Projet centré sur la construction et l’analyse de portefeuilles financiers.

Le travail porte notamment sur :
- la performance historique ;
- la volatilité ;
- la diversification ;
- la frontière efficiente ;
- la comparaison entre plusieurs stratégies.
    `,

        technologies: [
            "Python",
            "Finance",
            "Optimisation",
            "Portfolio Theory",
            "Data Analysis",
        ],

        image: "/images/projects/backtest-cover.jpg",

        featured: true,
    },

    {
        slug: "occifloc",

        title: "Occifloc",

        category: "Entrepreneuriat",

        shortDescription:
            "Création et développement d’une entreprise spécialisée dans la personnalisation textile et les objets publicitaires.",

        longDescription: `
Occifloc est une entreprise développée en parallèle de mes études.

Je gère notamment :
- la relation client ;
- les devis ;
- la production ;
- le développement commercial ;
- le site internet et les outils internes.
    `,

        technologies: [
            "Entrepreneuriat",
            "Gestion de projet",
            "Business Development",
            "Webflow",
        ],

        image: "/images/projects/occifloc-cover.jpg",

        featured: true,
    },
];