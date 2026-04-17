export type SkillGroup = {
  title: string;
  items: string[];
};

export const aboutToolsGroups: SkillGroup[] = [
  {
    title: "Finance & analyse",
    items: ["Bloomberg Terminal", "Excel avancé", "SQL", "Python", "Backtesting"],
  },
  {
    title: "Développement",
    items: ["VS Code", "Git", "Linux", "Streamlit", "SQLite"],
  },
  {
    title: "Automatisation & productivité",
    items: ["Python scripting", "SQL", "automatisation de tâches", "documentation", "contrôle qualité"],
  },
  {
    title: "Exécution & workflows",
    items: ["n8n", "structuration de process", "reporting", "outils no-code / low-code"],
  },
];

export const workflowTools = [
  "Bloomberg Terminal",
  "Python",
  "SQL",
  "Git",
  "Linux",
  "Excel avancé",
  "automatisation",
  "n8n",
  "documentation",
];

export const cvSkills: SkillGroup[] = [
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
      "Bloomberg Terminal",
    ],
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
      "Streamlit",
    ],
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
      "Communication",
    ],
  },
];
