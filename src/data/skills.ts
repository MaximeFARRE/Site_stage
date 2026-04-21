import type { Locale } from "@/i18n/routing";

export type SkillGroup = {
  title: string;
  items: string[];
};

export const aboutToolsGroups: SkillGroup[] = [
  {
    title: "Finance & analyse",
    items: ["Bloomberg Terminal", "VBA", "SQL", "Python", "Yfinance"]
  },
  {
    title: "Développement",
    items: ["VS Code", "Git", "Linux", "Streamlit", "SQLite"]
  },
  {
    title: "Automatisation & productivité",
    items: ["Python", "SQL", "n8n", "OPENCLAW", "Claude CoWork"]
  },
  {
    title: "Exécution & workflows",
    items: ["n8n", "RAG", "Agentic", "outils no-code / low-code"]
  }
];

const workflowToolsFr = [
  "Bloomberg Terminal",
  "Python",
  "SQL",
  "Git",
  "Linux",
  "Excel avancé",
  "automatisation",
  "n8n",
  "documentation"
];

const workflowToolsEn = [
  "Bloomberg Terminal",
  "Python",
  "SQL",
  "Git",
  "Linux",
  "Advanced Excel",
  "Automation",
  "n8n",
  "Documentation"
];

const cvSkillsFr: SkillGroup[] = [
  {
    title: "Finance",
    items: [
      "Black-Scholes",
      "Monte Carlo",
      "VaR",
      "Stress testing",
      "Portfolio optimisation",
      "Backtesting",
      "Analyse d’entreprise",
      "Bloomberg Terminal"
    ]
  },
  {
    title: "Data & développement",
    items: [
      "Python",
      "Pandas / NumPy",
      "SQL",
      "Git",
      "Linux",
      "C++",
      "VBA",
      "SQLite",
      "Streamlit"
    ]
  },
  {
    title: "Outils & exécution",
    items: [
      "Excel avancé",
      "Automatisation de workflows",
      "n8n",
      "Documentation technique",
      "Rigueur",
      "Autonomie",
      "Communication"
    ]
  }
];

const cvSkillsEn: SkillGroup[] = [
  {
    title: "Finance",
    items: [
      "Black-Scholes",
      "Monte Carlo",
      "VaR",
      "Stress testing",
      "Portfolio optimization",
      "Backtesting",
      "Company analysis",
      "Bloomberg Terminal"
    ]
  },
  {
    title: "Data & development",
    items: [
      "Python",
      "Pandas / NumPy",
      "SQL",
      "Git",
      "Linux",
      "C++",
      "VBA",
      "SQLite",
      "Streamlit"
    ]
  },
  {
    title: "Tools & execution",
    items: [
      "Advanced Excel",
      "Workflow automation",
      "n8n",
      "Technical documentation",
      "Rigor",
      "Autonomy",
      "Communication"
    ]
  }
];

export const workflowTools = workflowToolsFr;
export const cvSkills = cvSkillsFr;

export function getWorkflowTools(locale: Locale): string[] {
  return locale === "en" ? workflowToolsEn : workflowToolsFr;
}

export function getCvSkills(locale: Locale): SkillGroup[] {
  return locale === "en" ? cvSkillsEn : cvSkillsFr;
}
