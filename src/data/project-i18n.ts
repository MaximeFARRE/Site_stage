import type { Locale } from "@/i18n/routing";

import type { Project } from "./projects";

type ProjectTranslation = Partial<
  Pick<
    Project,
    | "title"
    | "category"
    | "shortDescription"
    | "longDescription"
    | "whatItShows"
    | "context"
    | "objective"
    | "role"
    | "challenges"
    | "outcomes"
    | "deepDive"
  >
>;

const projectTranslationsEn: Record<string, ProjectTranslation> = {
  "suivi-patrimoine": {
    title: "Wealth Tracking Application",
    category: "Personal Finance · Python · PyQt6",
    shortDescription:
      "PyQt6 + SQLite desktop application to centralize multi-asset accounts, rebuild weekly history, and analyze portfolio performance.",
    longDescription:
      "This project extends the portfolio backtesting and optimization stack into a full wealth-tracking application. It centralizes transactions across accounts, normalizes data, rebuilds historical snapshots, and produces decision-ready analytics.",
    whatItShows:
      "Ability to design an end-to-end financial product: data model, ingestion pipeline, analytics engine, and desktop interface.",
    context:
      "The initial need was to replace fragmented spreadsheets and manual exports with a reliable and auditable system for multi-account wealth monitoring.",
    objective:
      "Build a dependable base for allocation tracking, performance reading, and portfolio-level decision support over time.",
    role:
      "I designed the architecture, implemented core services, built the SQLite model, and developed the analytics and UI workflows.",
    challenges: [
      "Model heterogeneous transactions while preserving accounting consistency.",
      "Compute performance with proper cash-flow adjustment instead of raw valuation changes.",
      "Handle real import edge cases and maintain data quality over long histories."
    ],
    outcomes: [
      "Weekly snapshot engine for person and household views.",
      "Advanced risk and return metrics integrated into operational dashboards.",
      "Robust import flow with alias mapping and validation checks.",
      "Test coverage on critical analytics and ingestion components."
    ],
    deepDive: undefined
  },
  "backtest-optimisation-portefeuille": {
    title: "Portfolio Backtesting and Optimization",
    category: "Quantitative Finance · Analysis · Python",
    shortDescription:
      "Python environment to backtest allocation strategies and compare risk/return behavior across market scenarios.",
    longDescription:
      "This project is the quantitative engine behind portfolio decision support. It compares strategies, computes normalized metrics, and adds Monte Carlo scenario analysis for robustness checks.",
    whatItShows:
      "Ability to structure a reusable backtesting framework, compare strategies fairly, and interpret results with financial rigor.",
    context:
      "I built this project to move from theory to applied finance, with explicit assumptions and reproducible analyses.",
    objective:
      "Evaluate allocation choices through consistent metrics, scenario simulation, and clear reporting for decision-making.",
    role:
      "I framed assumptions, prepared market data, implemented models and simulations, and produced analysis outputs.",
    challenges: [
      "Compare heterogeneous strategies under a single and fair framework.",
      "Use Monte Carlo outputs as robustness analysis without overclaiming predictability.",
      "Keep architecture modular between data, computations, and reporting."
    ],
    outcomes: [
      "Reproducible 5-year backtests for strategy comparison.",
      "Standardized risk/return metrics across all tested approaches.",
      "Monte Carlo integration to quantify uncertainty around outcomes."
    ],
    deepDive: undefined
  },
  "projet-finance-cpp": {
    title: "C++ Finance Project",
    category: "Quantitative Finance · C++",
    shortDescription:
      "C++ implementation of core quantitative finance building blocks for pricing and numerical analysis.",
    longDescription:
      "A technical project focused on performance-oriented implementation of financial models and numerical methods in C++.",
    whatItShows:
      "Capacity to bridge finance concepts and low-level implementation quality.",
    context:
      "Built to strengthen quantitative engineering fundamentals with stricter performance and code design constraints.",
    objective:
      "Deliver robust and understandable quantitative components in C++ for financial computation.",
    role:
      "I implemented key modules and validated outputs through controlled tests and numerical checks.",
    challenges: [
      "Maintain numerical stability while keeping code readable.",
      "Balance performance optimization and maintainability.",
      "Ensure model assumptions remain explicit in implementation."
    ],
    outcomes: [
      "Reusable C++ finance components.",
      "Improved understanding of model implementation tradeoffs.",
      "Clearer engineering discipline for quantitative tooling."
    ],
    deepDive: undefined
  },
  "projet-python-git-a4": {
    title: "Python/Git Engineering Project",
    category: "Data Engineering · Python · Git",
    shortDescription:
      "Python project emphasizing clean workflow, reproducible scripts, and version-controlled delivery.",
    longDescription:
      "A project centered on execution discipline: modular scripts, clear structure, and collaborative development practices.",
    whatItShows:
      "Ability to deliver reliable code through reproducibility and strong versioning practices.",
    context:
      "Developed as an applied engineering exercise to strengthen project structuring and delivery quality.",
    objective:
      "Build a maintainable Python workflow with traceable iterations and clear outputs.",
    role:
      "I structured the repository, implemented core scripts, and ensured workflow consistency through Git.",
    challenges: [
      "Keep scripts modular while preserving end-to-end usability.",
      "Maintain clarity and traceability across iterations.",
      "Guarantee reproducibility of analysis outputs."
    ],
    outcomes: [
      "Cleaner project structure and reproducible execution flow.",
      "Better delivery discipline across code changes.",
      "Stronger collaboration readiness through Git practices."
    ],
    deepDive: undefined
  },
  "site-stage": {
    title: "Career Portfolio Website",
    category: "Web Development · Next.js · Product",
    shortDescription:
      "Career-focused website built with Next.js App Router to present projects, experience, and quantitative profile.",
    longDescription:
      "This project is a structured portfolio product: centralized data, reusable components, responsive pages, and clean content hierarchy for recruiter readability.",
    whatItShows:
      "Ability to turn profile content into a credible product with clear information architecture and consistent UX.",
    context:
      "Created to present finance and technical work in a concise, recruiter-ready format.",
    objective:
      "Deliver a simple and reliable website that communicates positioning, projects, and execution quality.",
    role:
      "I built the app architecture, data structure, page composition, and styling consistency.",
    challenges: [
      "Keep a minimal design while handling dense content.",
      "Maintain consistency across pages and reusable components.",
      "Balance technical detail and recruiter readability."
    ],
    outcomes: [
      "Structured portfolio with reusable design system.",
      "Clear navigation and scalable project page model.",
      "Strong base for bilingual extension and SEO improvements."
    ],
    deepDive: undefined
  },
  "smallcaps-screener-fr": {
    title: "French Small Caps Screener",
    category: "Fundamental Analysis · Buy-Side Tool · Python Desktop",
    shortDescription:
      "Desktop screening tool for French small caps built to prioritize an investable watchlist with interpretable fundamental ratios.",
    longDescription:
      "This project is a desktop tool for fundamental screening on French small caps. The goal is to build a buy-side analysis chain: define an investable universe, store financial data locally, compute interpretable ratios, rank companies with transparent multi-factor scoring, and surface the most relevant names for further analyst work.",
    whatItShows:
      "Ability to turn an investment problem into a concrete tool: universe construction, financial data structuring, fundamental ratio calculation, interpretable multi-factor scoring, and usable outputs for analyst prioritization.",
    context:
      "The project is designed to support a buy-side first pass: reduce a broad universe to a credible watchlist with a consistent reading of valuation, quality, growth, and balance-sheet risk.",
    objective:
      "Build a pre-selection tool that helps filter, compare, and prioritize French small caps before deeper fundamental work.",
    role:
      "I frame the investment universe, design the architecture, model the data, implement repositories, build ratio and scoring services, write tests, and document the methodology.",
    outcomes: [
      "Strict UI → Services → Repositories architecture applied across the project.",
      "Local data model covering Company, FinancialStatement, PriceHistory, and ScreeningSnapshot.",
      "Services already implemented for ratios, multi-factor scoring, and screening logic."
    ],
    challenges: [
      "Handle inconsistent fundamental datasets and accounting edge cases.",
      "Keep scoring interpretable for analyst-level discussion.",
      "Avoid fragile conclusions from noisy data."
    ],
    deepDive: undefined
  },
  occifloc: {
    title: "Occifloc",
    category: "Operations · Management · Automation",
    shortDescription:
      "Operational management of a textile customization activity with margin tracking, cash monitoring, and process improvement.",
    longDescription:
      "Occifloc is a real operating business. I include it to demonstrate execution quality: pricing, margin control, production cadence, delivery constraints, and client reliability.",
    whatItShows:
      "Ability to run a real activity with indicators, constraints, and accountable decisions.",
    context:
      "Occifloc provided a practical environment where numbers, operations, and delivery quality are tightly connected.",
    objective:
      "Maintain profitability, improve process reliability, and support decisions through clear metrics.",
    role:
      "I handled business development, operations tracking, pricing logic, and process improvements.",
    challenges: [
      "Balance growth, production quality, and delivery deadlines.",
      "Arbitrate under margin and cash constraints.",
      "Scale structure without losing operational reactivity."
    ],
    outcomes: [
      "Regular monitoring of margins, costs, and cash indicators.",
      "Clearer process flow between sales, production, and delivery.",
      "Stronger indicator-driven decision framework."
    ],
    deepDive: undefined
  },
  "projet-machine-learning": {
    title: "Machine Learning Allocation Project",
    category: "Quantitative Finance · Data Science · Machine Learning",
    shortDescription:
      "Python pipeline for modeling and backtesting allocation strategies with supervised learning and baseline comparisons.",
    longDescription:
      "This project extends the backtesting and portfolio stack with machine learning models, from feature engineering to strategy-level evaluation against financial baselines.",
    whatItShows:
      "Ability to transform an ML finance topic into a modular and reproducible pipeline.",
    context:
      "The goal was to move beyond exploratory notebooks toward production-like project structure and comparable outputs.",
    objective:
      "Assess the incremental value of supervised models in allocation decisions while preserving robust financial benchmarks.",
    role:
      "I contributed to project structure, strategy comparison modules, and end-to-end evaluation flow.",
    challenges: [
      "Protect time-series integrity in train/test splits.",
      "Compare ML models with classical allocation baselines fairly.",
      "Keep architecture clear despite multiple model and reporting layers."
    ],
    outcomes: [
      "Reproducible script-based pipeline from data prep to reporting.",
      "Systematic generation of test metrics and comparative figures.",
      "Integration of Random Forest and Logistic Regression against portfolio baselines."
    ],
    deepDive: undefined
  }
};

export function localizeProject(project: Project, locale: Locale): Project {
  if (locale !== "en") {
    return project;
  }

  const translation = projectTranslationsEn[project.slug];

  if (!translation) {
    return project;
  }

  return {
    ...project,
    ...translation
  };
}
