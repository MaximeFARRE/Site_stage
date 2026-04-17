export type AboutPillar = {
  title: string;
  description: string;
};

export type AboutHighlight = {
  label: string;
  value: string;
  detail: string;
};

export type KeyNumber = {
  value: string;
  label: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const aboutPillars: AboutPillar[] = [
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

export const aboutKeyNumbers: KeyNumber[] = [
  {
    value: "2023",
    label: "Début de l’aventure Occifloc",
  },
  {
    value: "35k€",
    label: "Chiffre d’affaires atteint en 2025",
  },
  {
    value: "3",
    label: "Projets financiers détaillés",
  },
  {
    value: "2",
    label: "Axes d’exécution : analyse et pilotage",
  },
];

export const aboutHighlights: AboutHighlight[] = [
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

export const aboutFaqItems: FaqItem[] = [
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
    question: "Que recherchez-vous aujourd’hui ?",
    answer:
      "Je recherche un stage ou une opportunité en finance de marché, asset management, private equity, analyse financière ou recherche quantitative, avec des sujets concrets et une vraie exigence sur la qualité du travail.",
  },
];
import { personalInfo } from "./personal-info";
