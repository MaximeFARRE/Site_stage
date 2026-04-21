import type { Locale } from "@/i18n/routing";

export type PersonalInfo = {
  firstName: string;
  lastName: string;
  fullName: string;
  title: string;
  headline: string;
  shortBio: string;
  longBio: string;
  location: string;
  school: string;
  degree: string;
  currentGoal: string;
  longTermGoal: string;
  email: string;
  availability: string;
};

const personalInfoFr: PersonalInfo = {
  firstName: "Maxime",
  lastName: "Farré",

  fullName: "Maxime Farré",

  title: "Étudiant en ingénierie financière à l’ESILV",

  headline:
    "Finance quantitative, analyse de portefeuille et développement d’outils financiers.",

  shortBio:
    "Étudiant en ingénierie financière à l’ESILV, orienté finance de marché, asset management et outils financiers. J’utilise Python, SQL, Linux et Streamlit pour analyser des données, backtester des stratégies et structurer des tableaux de bord.",

  longBio: `
Je suis étudiant en ingénierie financière à l’ESILV, avec un intérêt marqué pour la finance de marché, l’asset management, le private equity et la recherche quantitative.
Je travaille sur des projets qui combinent analyse financière, structuration de données et développement d’outils : backtests, suivi de portefeuille, dashboards, automatisation de workflows et exploitation de données financières.

J’utilise principalement Python, SQL, Linux, Git, Streamlit, Excel avancé et Bloomberg Terminal pour construire des analyses lisibles, reproductibles et utiles à la décision.

Mon expérience avec Occifloc reste un marqueur d’exécution : suivi de marges, relation client, trésorerie, priorisation et organisation. Elle complète mon profil sans en être le centre.
  `,

  location: "Paris, France",

  school: "ESILV – École Supérieure d’Ingénieurs Léonard de Vinci",

  degree: "Ingénierie financière",

  currentGoal:
    "Je recherche un stage ou une opportunité en finance de marché, asset management, private equity, analyse financière ou recherche quantitative.",

  longTermGoal:
    "Construire une expertise solide en gestion d’actifs, analyse quantitative et développement d’outils financiers.",

  email: "maxime.farre8@gmail.com",

  availability: "Disponible pour échanger sur des opportunités en finance, analyse ou développement d’outils financiers.",
};

const personalInfoEn: PersonalInfo = {
  firstName: "Maxime",
  lastName: "Farre",

  fullName: "Maxime Farre",

  title: "Financial Engineering student at ESILV",

  headline:
    "Quantitative finance, portfolio analysis, and development of financial tools.",

  shortBio:
    "Financial engineering student at ESILV, focused on capital markets, asset management, and financial tools. I use Python, SQL, Linux, and Streamlit to analyze data, backtest strategies, and structure decision-ready dashboards.",

  longBio: `
I am a financial engineering student at ESILV, with strong interest in capital markets, asset management, private equity, and quantitative research.
I work on projects combining financial analysis, data structuring, and tool development: backtests, portfolio monitoring, dashboards, workflow automation, and financial data processing.

I mainly use Python, SQL, Linux, Git, Streamlit, advanced Excel, and Bloomberg Terminal to build analyses that are readable, reproducible, and useful for decision-making.

My experience with Occifloc remains a strong execution marker: margin tracking, client relationship, cash management, prioritization, and organization. It complements my profile without being its center.
  `,

  location: "Paris, France",

  school: "ESILV - Leonard de Vinci Graduate School of Engineering",

  degree: "Financial Engineering",

  currentGoal:
    "I am looking for an internship or opportunity in capital markets, asset management, private equity, financial analysis, or quantitative research.",

  longTermGoal:
    "Build strong expertise in asset management, quantitative analysis, and financial tool development.",

  email: "maxime.farre8@gmail.com",

  availability: "Available to discuss opportunities in finance, analysis, or financial tooling.",
};

export const personalInfo = personalInfoFr;

export function getPersonalInfo(locale: Locale): PersonalInfo {
  return locale === "en" ? personalInfoEn : personalInfoFr;
}
