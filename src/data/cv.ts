import type { Locale } from "@/i18n/routing";

const cvHighlightsFr = [
  "Étudiant en ingénierie financière à l’ESILV",
  "Recherche de stage en finance de marché, asset management ou analyse",
  "Construction d’outils quantitatifs en Python sur environnement Linux",
  "Compétences en SQL, Streamlit, backtesting et dashboards financiers"
];

const cvHighlightsEn = [
  "Financial engineering student at ESILV",
  "Looking for an internship in capital markets, asset management, or analysis",
  "Building quantitative tools with Python in Linux environments",
  "Skills in SQL, Streamlit, backtesting, and financial dashboards"
];

export const cvHighlights = cvHighlightsFr;

export function getCvHighlights(locale: Locale): string[] {
  return locale === "en" ? cvHighlightsEn : cvHighlightsFr;
}
