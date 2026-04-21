import type { Messages } from "./fr";

const en: Messages = {
  Navbar: {
    brandAriaLabel: "Back to home",
    menu: "Menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
    localeFr: "FR",
    localeEn: "EN",
    nav: {
      about: "About",
      projects: "Projects",
      experiences: "Experience",
      cv: "Resume",
      contact: "Contact"
    }
  },
  Footer: {
    email: "Email",
    linkedin: "LinkedIn",
    github: "GitHub"
  },
  Hero: {
    headline: "Quantitative finance, portfolio analysis, and financial tooling development.",
    shortBio:
      "Financial engineering student at ESILV, focused on capital markets, asset management, and financial tooling. I use Python, SQL, Linux, and Streamlit to analyze data, backtest strategies, and build decision-ready dashboards.",
    viewProjects: "View my projects",
    downloadCv: "Download my resume",
    education: "Education",
    location: "Location",
    availability: "Availability",
    availabilityValue: "Open to opportunities",
    currently: "Currently",
    currentGoal:
      "I am looking for an internship or opportunity in capital markets, asset management, private equity, financial analysis, or quantitative research.",
    objective: "Objective"
  },
  HomePage: {
    metadataTitle: "Home",
    metadataDescription:
      "Portfolio focused on quantitative finance and technology: projects, experience, and financial analysis tools.",
    profileLabel: "Profile",
    profileTitle: "Finance, data, and execution",
    profileDescription:
      "A financial engineering background, regular hands-on data practice, and a strong focus on producing actionable analysis.",
    learnMore: "Learn more",
    pillars: {
      finance: {
        label: "Finance",
        headline: "Markets and portfolios",
        body:
          "Portfolio analysis, asset management, private equity, and risk reading. A structured approach to financial data and investment decisions."
      },
      execution: {
        label: "Execution",
        headline: "KPIs and operations",
        body:
          "At Occifloc, I worked on margin tracking, cash management, client relationships, and operations. A practical environment for decision-making under constraints."
      },
      technology: {
        label: "Technology",
        headline: "Python, SQL, and dashboards",
        body:
          "Building tools with Python, SQL, and Streamlit to structure data, backtest strategies, and visualize financial indicators."
      }
    },
    ctaTitle: "Want to learn more?",
    ctaDescription:
      "I am available to discuss opportunities in capital markets, asset management, private equity, analysis, or quantitative tooling.",
    ctaContact: "Contact me",
    ctaAbout: "Learn more"
  },
  FeaturedProjects: {
    badge: "Selected projects",
    title: "Built tools and analyses",
    description:
      "Projects focused on quantitative finance, data structuring, backtesting, and KPI tracking.",
    allProjects: "All projects",
    selected: "Featured",
    viewAllMobile: "View all projects"
  },
  ProjectsPage: {
    metadataTitle: "Projects",
    metadataDescription:
      "Projects in quantitative finance, data analysis, and automation: tools, dashboards, and decision-oriented studies.",
    badge: "Projects",
    title: "Projects focused on finance, data, and analytical tools.",
    description:
      "This page gathers projects around quantitative finance, data structuring, backtesting, dashboards, and automation. Each project shows a working method: frame a need, clean data, build a readable tool, and interpret outcomes.",
    categories: {
      all: "All",
      finance: "Finance",
      data: "Data",
      automation: "Automation",
      operations: "Operations"
    },
    featuredBadge: "Featured projects",
    featuredTitle: "Most representative projects of my profile",
    selected: "Featured",
    whatProjectShows: "What this project demonstrates",
    keyResultLabel: "Key result",
    keyResultFallback: "full details available on the project page.",
    viewProject: "View project",
    noFeaturedForCategory: "No featured projects for category \u00ab {category} \u00bb.",
    allProjectsBadge: "All projects",
    allProjectsTitle: "A selection of projects built with an analytical mindset",
    allProjectsDescription:
      "Each project starts from a concrete need: track a portfolio, test a strategy, structure data, or run operations. The goal is to deliver an actionable result, not only a technical demo.",
    whatThisShows: "What this shows",
    viewDetail: "View details",
    noProjectForCategory: "No project found for category \u00ab {category} \u00bb.",
    ctaBadge: "Go further",
    ctaTitle: "Each project can be explored in more depth during an interview.",
    ctaDescription:
      "This selection gives a concise view of my working method. In an interview, I can detail assumptions, data choices, limitations, technical tradeoffs, and outcomes.",
    ctaContact: "Contact me",
    ctaCv: "View my resume"
  },
  AboutPage: {
    metadataTitle: "About",
    metadataDescription:
      "Profile of Maxime Farre: financial engineering, portfolio analysis, Python, SQL, and financial tooling.",
    badge: "About",
    subtitle: "Financial Engineering · Python · Portfolio Analysis",
    title: "A profile focused on quantitative finance, data, and financial tooling.",
    intro:
      "My name is Maxime Farre. I am building a profile centered on capital markets, portfolio analysis, and data tools. I like framing a problem, structuring data, producing clear analysis, and building support that helps decision-making.",
    chips: {
      marketFinance: "Capital Markets",
      operations: "Operational Management",
      dataTools: "Data, Automation, and Tools"
    },
    professionalProfile: "Professional profile",
    qualityParagraph:
      "Beyond academics, I focus on concrete and verifiable outputs: a durable data base, a dashboard that is truly usable, and an analysis that can be reviewed and improved. Delivery quality matters as much as the reasoning.",
    professionalIdentity: "Professional identity",
    traitsTitle: "What defines me",
    traits: [
      "Analytical rigor and interest in demanding topics",
      "Python, SQL, Linux, and Git used across my projects",
      "Ability to build readable and usable tools",
      "Autonomy, organization, and attention to detail"
    ],
    todayTitle: "Today",
    todayDescription:
      "I want to work on demanding topics in finance, analysis, and quantitative tooling, with high standards on rigor, precision, and execution quality.",
    toolsBadge: "Core tools",
    toolsTitle: "Tools I use to analyze and deliver",
    toolsDescription:
      "I use tools to improve reliability: collect data better, reduce repetitive work, track indicators, and make analysis clearer. The goal is to improve reasoning quality, not to stack tools.",
    pillarsBadge: "Three focus areas",
    pillarsTitle: "Finance, data, and execution",
    pillarsDescription:
      "My path is built on financial engineering fundamentals, regular technical practice, and real operational management experience. These three areas help me analyze, build, and deliver.",
    motivationBadge: "What motivates me",
    motivationTitle: "Finance, data, rigor",
    motivationParagraph1:
      "What motivates me is working on topics where analysis quality changes outcomes: pricing, portfolio management, risk, and financial data. Environments where precision is expected, not only intent.",
    motivationParagraph2:
      "Long term, I want to build strong expertise in asset management and quantitative analysis. I look for contexts with steep learning curves and responsibilities aligned with delivered work.",
    sportsBadge: "Sports and mindset",
    sportsTitle: "Endurance, discipline, and clarity",
    sportsParagraph1:
      "Sport plays an important role in my balance. Triathlon, running, cycling, and autonomous projects taught me how to prepare effort, hold a plan, and stay clear-minded under fatigue.",
    sportsParagraph2:
      "I apply the same qualities at work: consistency, patience, resilience, uncertainty management, and steady progress without skipping steps.",
    keyNumbersBadge: "Key markers",
    keyNumbersTitle: "A few concrete facts",
    summaryBadge: "In short",
    summaryTitle: "My profile today",
    faqBadge: "Recruiter FAQ",
    faqTitle: "A few answers to better position my profile",
    faqDescription:
      "This section clarifies my path logic, the role of technical skills, and the type of opportunities I am currently looking for."
  },
  ContactPage: {
    metadataTitle: "Contact",
    metadataDescription:
      "Contact Maxime Farre for an opportunity in capital markets, financial analysis, private equity, or quantitative tooling.",
    badge: "Contact · Opportunities · Discussion",
    title: "Let's connect to discuss an internship or finance opportunity.",
    description:
      "I am open to discussions with recruiters, investors, portfolio managers, analysts, or technical teams looking for a profile able to analyze financial data, structure reasoning, and build useful tools. You can contact me directly for an internship, a mission, or a professional exchange.",
    writeEmail: "Email me",
    viewCv: "View my resume",
    availabilityTitle: "Availability",
    availabilityHeading: "Available to connect",
    availabilityDescription:
      "I am currently open to internship opportunities and professional discussions in capital markets, asset management, private equity, financial analysis, quantitative research, or financial tool development.",
    info: {
      locationLabel: "Location",
      locationValue: "Paris, France",
      formatLabel: "Format",
      formatValue: "internship, mission, professional exchange",
      domainsLabel: "Domains",
      domainsValue: "finance, analysis, data, financial tools"
    },
    contactLabel: "Contact",
    contactTitle: "Contact channels",
    methods: {
      emailDescription:
        "The most direct way to discuss an internship, an opportunity, or an analytical topic.",
      linkedinDescription:
        "To explore my background and experience, and connect in a professional context.",
      githubDescription:
        "To review my projects, tools, and the way I structure analysis-focused code."
    },
    open: "Open",
    directMessageLabel: "Direct message",
    directMessageTitle: "The easiest way is still email",
    directMessageDescription:
      "If your topic is clear, a few lines are enough. I can reply quickly, or continue on LinkedIn when relevant.",
    sendEmail: "Send an email",
    nextLabel: "Next",
    nextTitle: "You can also review my resume or explore my projects.",
    nextDescription:
      "The site presents my background, experience, and projects that illustrate how I analyze, structure, and build.",
    viewProjects: "View my projects"
  }
};

export default en;
