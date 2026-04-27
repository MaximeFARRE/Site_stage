import type { Locale } from "@/i18n/routing";

import type { Project } from "./projects";

type ProjectTranslation = Partial<
  Pick<
    Project,
    | "title"
    | "category"
    | "shortDescription"
    | "longDescription"
    | "technologies"
    | "whatItShows"
    | "context"
    | "objective"
    | "role"
    | "challenges"
    | "outcomes"
    | "links"
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
      "This project is directly linked to the portfolio backtesting and optimization module: simulation outputs are reused here to support broader wealth analysis. It is a Python desktop application for personal wealth monitoring built around a modular architecture with service layers, a Qt interface, and an SQLite database. The application aggregates transactions across several account types (bank, savings, PEA/CTO, private equity), normalizes the data, and produces weekly snapshots to track wealth over time. The analytics layer computes risk and return metrics with proper cash-flow neutralization and FX handling. The application also includes a Trade Republic import flow with alias mapping (symbols/ISIN), data-quality checks, and full household-history rebuilds from the first transaction onward.",
    whatItShows:
      "Ability to build a complete financial tool: data modeling, transaction ingestion and normalization, advanced portfolio analytics, desktop UI, and testing discipline.",
    context:
      "The initial need was to replace fragmented tracking based on spreadsheets and manual exports with a single robust system capable of handling multiple asset classes, several accounts, and a long history with retroactive corrections.",
    objective:
      "Build a reliable base for wealth tracking and portfolio analysis: allocation, performance, net cash flows, passive income, historical rebuilds, and simulation or optimization modules that support decision-making.",
    role:
      "I designed the architecture, implemented the business services and SQLite layer, built the Qt screens for dashboards, imports, and controls, and expanded the portfolio metrics with a strong focus on data quality.",
    challenges: [
      "Model heterogeneous transactions such as buys, sells, dividends, interest, deposits, and withdrawals while preserving multi-account accounting consistency.",
      "Compute truly usable returns by neutralizing weekly cash flows instead of relying only on raw valuation changes.",
      "Handle real Trade Republic imports with ISIN or symbol mapping, alias management, edge cases, and WAF-token constraints without breaking existing history.",
      "Support a full household snapshot rebuild from the first transaction onward, with progress tracking, cancellation, and quality checks."
    ],
    outcomes: [
      "Weekly snapshot engine for both individual and household views, with full historical rebuild capability.",
      "Advanced portfolio metrics including annualized performance, volatility, Sharpe, beta versus URTH, and max drawdown, all based on cash-flow-adjusted calculations.",
      "Robust import flow for Trade Republic with asset aliases, live ticker preview, and validation before insertion.",
      "Test coverage on critical building blocks such as analytics, alias mappings, passive-income logic, transactions, and new account types."
    ],
    links: [
      {
        label: "GitHub repository",
        href: "https://github.com/MaximeFARRE/Suivie-patrimoine"
      },
      {
        label: "Portfolio analytics commit",
        href: "https://github.com/MaximeFARRE/Suivie-patrimoine/commit/728d62a37934cf1e576418854d9357add62b29e0"
      },
      {
        label: "Import and asset-mapping commit",
        href: "https://github.com/MaximeFARRE/Suivie-patrimoine/commit/91d35ca87e5a29c2db1076602204f9890abdfddf"
      }
    ],
    deepDive: {
      summary:
        "The project works as a wealth-tracking engine: transaction ingestion, accounting normalization, weekly snapshots, and portfolio analytics built for decision support.",
      scope: [
        "Multi-account coverage: bank accounts, savings, PEA/CTO, and private equity.",
        "Weekly historical view rebuilt from the very first transaction.",
        "Portfolio performance calculation with cash-flow neutralization.",
        "Trade Republic import flow with alias mapping for symbols and ISINs.",
        "PyQt6 desktop interface for control, monitoring, and visualization."
      ],
      architecture: [
        {
          title: "Persistence layer",
          detail:
            "Versioned SQLite database with SQL migrations, transaction/account/asset/price/snapshot tables, plus import-alias tables to make reconciliations more reliable."
        },
        {
          title: "Business services layer",
          detail:
            "Dedicated modules for CRUD repositories, individual and household snapshots, consolidated income, advanced equity analytics, and weekly FX conversions."
        },
        {
          title: "Import layer",
          detail:
            "Trade Republic CSV import pipeline with preview, ISIN and symbol resolution, canonical mapping, validation, and insertion."
        },
        {
          title: "Interface layer",
          detail:
            "Qt panels organized by business use case such as global wealth, listed assets, income, and data health, with Plotly rendering and rebuild actions."
        }
      ],
      dataFlow: [
        "Broker transaction export loaded into the import module.",
        "Parsing and normalization of operations such as buys, sells, dividends, interest, and cash movements.",
        "Canonical asset resolution through ISIN, symbol, and alias tables.",
        "Write to the database, then rebuild weekly snapshots.",
        "Compute risk and return metrics and produce charts.",
        "Run consistency checks and manual adjustments through the interface."
      ],
      technicalChoices: [
        {
          title: "Cash-flow-adjusted returns",
          detail:
            "Returns are computed after neutralizing weekly purchases and sales so that capital injections are not confused with actual investment performance."
        },
        {
          title: "Robust annualized metrics",
          detail:
            "Annualized volatility, Sharpe ratio, beta versus URTH, and max drawdown are all computed from a coherent weekly time series."
        },
        {
          title: "Backdated-aware full rebuild",
          detail:
            "The snapshot engine supports complete historical reconstruction, which is essential when older transactions are corrected or inserted later."
        },
        {
          title: "Ticker preview before import",
          detail:
            "A preview of ticker, price, and currency reduces mapping risk before anything is inserted into the database."
        }
      ],
      quality: [
        "Targeted tests on portfolio analytics, import aliases, and consolidated income rules.",
        "Strong validation of person, account, and transaction relationships before update or delete operations.",
        "Clear separation between UI, services, and persistence to reduce regressions."
      ],
      limitations: [
        "Still dependent on external broker exports and changing authentication mechanisms.",
        "Single-user desktop architecture, not yet designed for collaborative online use.",
        "Benchmark coverage is still focused on a relatively limited market universe."
      ],
      nextSteps: [
        "Extend the portfolio simulation module with scenarios, constraints, and stress tests.",
        "Add richer and more resilient market-data connectors.",
        "Produce automated monthly and quarterly decision-oriented reports."
      ],
      gallery: [
        {
          src: "/images/projects/patrimoine_kpi.png",
          alt: "KPI dashboard for the wealth-tracking application",
          caption: "Consolidated KPI view of wealth and core portfolio metrics."
        },
        {
          src: "/images/projects/projection_montecarlo.png",
          alt: "Monte Carlo portfolio projection",
          caption: "Scenario projection used to simulate portfolio paths over time."
        }
      ]
    }
  },
  "backtest-optimisation-portefeuille": {
    title: "Portfolio Backtesting and Optimization",
    category: "Quantitative Finance · Analysis · Python",
    shortDescription:
      "Python environment to backtest strategies, compare risk and return metrics, and analyze portfolio behavior.",
    longDescription:
      "This project is directly linked to the wealth-tracking application: backtest and simulation outputs help guide allocation decisions inside the main portfolio workflow. It aims to build an analysis environment that can test several investment approaches across multiple assets, compare their performance, and study the risk or return profile of a portfolio. The project follows a practical quantitative-finance logic: clean data, explicit assumptions, comparable metrics, and readable visual outputs.",
    whatItShows:
      "Ability to structure a backtesting engine, compare several allocations under a common framework, and add Monte Carlo analysis to assess the distribution of possible portfolio paths.",
    context:
      "I wanted to complement academic market-finance training with a tool built end to end. The goal was to test investment hypotheses, compare outputs, and interpret performance, volatility, drawdown, diversification, and robustness more concretely.",
    objective:
      "Build an analysis framework that can compare several strategies, visualize their outputs, run scenario simulations through Monte Carlo, and assess portfolio robustness across several metrics.",
    role:
      "I defined the assumptions, collected and cleaned market data, implemented the backtests, built the Monte Carlo simulation layer, computed the metrics, and interpreted the results from a financial perspective.",
    challenges: [
      "Design a unified framework that can compare very different strategies such as buy and hold, weighted allocations, and periodic rebalancing under the same assumptions.",
      "Integrate Monte Carlo outputs in a readable way without overstating their predictive power.",
      "Preserve a clear separation between raw data, calculation logic, visual reporting, and interpretation so the pipeline remains maintainable."
    ],
    outcomes: [
      "Reproducible five-year backtests to compare strategies and allocations.",
      "Standardized reading of risk and return metrics, including annualized performance, volatility, drawdown, Sharpe, and relative stability.",
      "Monte Carlo module added to visualize likely portfolio paths and quantify uncertainty around historical results.",
      "Analysis base reused by the wealth-tracking project to connect operational monitoring with allocation decisions."
    ],
    links: [
      {
        label: "GitHub repository",
        href: "https://github.com/MaximeFARRE/Suivie-patrimoine"
      },
      {
        label: "Related project: wealth tracking",
        href: "/projects/suivi-patrimoine"
      },
      {
        label: "Backtest screenshot",
        href: "/images/projects/backtest_5ans.png"
      },
      {
        label: "Monte Carlo screenshot",
        href: "/images/projects/projection_montecarlo.png"
      }
    ],
    deepDive: {
      summary:
        "This module is the quantitative engine behind the wealth-tracking stack: it backtests allocations, measures their risk and return profile, and adds Monte Carlo simulations to test path robustness.",
      scope: [
        "Multi-strategy backtests on a harmonized asset universe.",
        "Comparison of allocation scenarios and rebalancing frequencies.",
        "Annualized risk and return metrics plus drawdown analysis.",
        "Monte Carlo simulation for portfolio-path distributions.",
        "Decision-oriented reporting through comparative charts."
      ],
      architecture: [
        {
          title: "Data layer",
          detail:
            "Preparation of price and return series, cleaning of missing quotes, and time alignment to ensure consistent comparisons."
        },
        {
          title: "Backtest engine",
          detail:
            "Execution of parameterized strategies with allocation rules, rebalancing logic, horizon, and constraints, while keeping a full portfolio-value history."
        },
        {
          title: "Simulation engine",
          detail:
            "Monte Carlo path generation based on historical returns to assess the range of possible outcomes."
        },
        {
          title: "Reporting layer",
          detail:
            "Generation of KPIs and comparative visuals such as cumulative performance, drawdown, and trajectory dispersion to support allocation decisions."
        }
      ],
      dataFlow: [
        "Load market series and normalize timestamps.",
        "Apply strategy rules and run the backtests.",
        "Compute portfolio metrics such as return, risk, and drawdown.",
        "Launch Monte Carlo simulations over the selected horizon.",
        "Consolidate outputs into comparable charts.",
        "Use the conclusions to inform allocation choices in the wealth-tracking application."
      ],
      technicalChoices: [
        {
          title: "Unified comparison framework",
          detail:
            "Strategies are evaluated with the same dataset, the same periods, and the same calculation conventions to limit comparison bias."
        },
        {
          title: "Multi-metric risk and return reading",
          detail:
            "The evaluation combines performance and risk through volatility, drawdown, and Sharpe so conclusions are not driven by raw return alone."
        },
        {
          title: "Monte Carlo as a robustness test",
          detail:
            "The simulations are meant to measure uncertainty and dispersion, not to predict the future with precision."
        },
        {
          title: "Integration with wealth tracking",
          detail:
            "The most robust scenarios are fed back into the broader allocation logic used in the wealth-tracking project."
        }
      ],
      quality: [
        "Test parameters are made explicit, including horizon, rules, and base assumptions.",
        "The pipeline remains separable between data preparation, calculations, and reporting.",
        "Consistency checks are applied to the temporal alignment of the series used."
      ],
      limitations: [
        "Results remain sensitive to the selected historical window and market regime.",
        "Monte Carlo outcomes still depend on volatility and distribution assumptions.",
        "Real-world frictions are not modeled exhaustively, especially detailed fees, advanced slippage, and full tax treatment."
      ],
      nextSteps: [
        "Add more refined optimization constraints such as bounds by asset class and risk budgets.",
        "Extend stress testing with correlation shocks, severe drawdowns, and macro scenarios.",
        "Automate the exchange of results between the backtest module and the wealth-tracking application."
      ],
      gallery: [
        {
          src: "/images/projects/backtest_5ans.png",
          alt: "Five-year strategy backtest comparison",
          caption: "Comparison of several strategy performance paths over a five-year period."
        },
        {
          src: "/images/projects/projection_montecarlo.png",
          alt: "Monte Carlo simulation for a portfolio",
          caption: "Monte Carlo projection used to visualize the dispersion of portfolio scenarios."
        }
      ]
    }
  },
  "projet-finance-cpp": {
    title: "C++ Option Pricing (CRR, Black-Scholes, Monte Carlo)",
    category: "Quantitative Finance · C++ · Pricing",
    shortDescription:
      "Group project in C++ to price several option types, including European, American, and Asian contracts, with CRR, Black-Scholes, and Monte Carlo.",
    longDescription:
      "Academic group project in financial engineering using C++. The goal was to build an option-pricing base that combines several complementary approaches: the CRR binomial model, the closed-form Black-Scholes formula for European options, and Monte Carlo simulation. My main focus was the Monte Carlo block: improving numerical precision, handling large simulation volumes under time constraints, and making the calculations more reliable through payoff controls, bounds, and confidence intervals.",
    whatItShows:
      "Ability to implement quantitative pricers in C++ with an object-oriented design, and to optimize a Monte Carlo engine for both robustness and performance.",
    context:
      "The project sits in a market-finance context focused on option pricing. Team work was organized around a shared foundation for options and pricers, then deeper ownership of specific modules.",
    objective:
      "Compare several valuation methods in a single codebase, validate their consistency on standard cases, and deliver a usable Monte Carlo implementation for a high number of simulations.",
    role:
      "Group project. My main contribution was the development and improvement of the Monte Carlo pricer, including path generation, numerical stability, 95% confidence intervals, high-path-count handling under runtime constraints, and integration of the Mersenne Twister random generator.",
    challenges: [
      "Design a reusable option and pricer architecture for different payoff families such as vanilla, digital, Asian, and American options.",
      "Run a large number of Monte Carlo simulations while keeping the code readable and latency acceptable.",
      "Limit numerical drift such as non-finite values, negative variances caused by rounding, and confidence-interval edge cases.",
      "Preserve financial consistency between the different pricing approaches: CRR, Black-Scholes, and Monte Carlo."
    ],
    outcomes: [
      "C++ pricing framework covering European, American, and Asian options.",
      "Monte Carlo pricer with statistical accumulation logic for mean, variance, and 95% confidence intervals.",
      "Targeted performance improvements for Monte Carlo, including memory reuse and high-path execution under time constraints.",
      "Mersenne Twister singleton integrated to standardize random-number generation across the project."
    ],
    links: [
      {
        label: "GitHub repository",
        href: "https://github.com/MaximeFARRE/Projet-Finance-Cpp"
      },
      {
        label: "Final commit (CRR / BS / MC)",
        href: "https://github.com/MaximeFARRE/Projet-Finance-Cpp/commit/67d4baaefe57f4d162815cadd5b3677651f55ee8"
      },
      {
        label: "Monte Carlo pricer commit",
        href: "https://github.com/MaximeFARRE/Projet-Finance-Cpp/commit/e9dfebc0ec42d7febe356593b128b795e385b019"
      },
      {
        label: "Mersenne Twister commit",
        href: "https://github.com/MaximeFARRE/Projet-Finance-Cpp/commit/8894da12e0661f913967c7025709fe37b71233fd"
      }
    ],
    deepDive: {
      summary:
        "The project combines three pricing approaches, CRR, Black-Scholes, and Monte Carlo, inside an object-oriented C++ architecture. My main contribution focuses on the Monte Carlo engine and its robustness under load.",
      scope: [
        "Support for several option families: vanilla, digital, Asian, and American.",
        "Implementation of several pricers for comparison: CRR, closed-form Black-Scholes, and Monte Carlo simulation.",
        "Path generation under Black-Scholes assumptions with dedicated time steps.",
        "Price estimation, aggregated statistics, and 95% confidence intervals.",
        "Safeguards for numerical edge cases to avoid incoherent outputs."
      ],
      architecture: [
        {
          title: "Option hierarchy",
          detail:
            "Abstract Option class and specialized European, American, and Asian option types, each with polymorphic payoff logic."
        },
        {
          title: "Pricer layer",
          detail:
            "Separate pricers by method, such as CRRPricer, BlackScholesPricer, and BlackScholesMCPricer, to keep valuation assumptions clearly isolated."
        },
        {
          title: "Random engine",
          detail:
            "Singleton MT generator based on Mersenne Twister, used as a shared source for uniform and Gaussian draws."
        },
        {
          title: "Pricing test runner",
          detail:
            "Main executable used to compare pricer outputs under common parameters such as spot, strike, volatility, maturity, and rate."
        }
      ],
      dataFlow: [
        "Set option parameters such as type, strike, and maturity, along with model inputs S0, r, and sigma.",
        "Instantiate the appropriate pricer, whether CRR, closed-form Black-Scholes, or Monte Carlo.",
        "For Monte Carlo, generate paths with Gaussian shocks drawn through Mersenne Twister.",
        "Evaluate payoffs across paths and aggregate the outputs statistically.",
        "Discount average payoffs to obtain the estimated price.",
        "Compute confidence intervals to qualify the statistical uncertainty of the estimate."
      ],
      technicalChoices: [
        {
          title: "Memory reuse in simulation",
          detail:
            "The Monte Carlo engine reuses path buffers to limit repeated allocations and remain efficient at high simulation counts."
        },
        {
          title: "Numerical robustness controls",
          detail:
            "Safeguards were added for non-finite and negative values, as well as variance stability, to avoid unstable outputs under heavy computation."
        },
        {
          title: "95% confidence interval",
          detail:
            "The pricer does not stop at a point estimate: it also returns a statistical range to judge simulation precision."
        },
        {
          title: "Clear separation by pricing method",
          detail:
            "The CRR, Black-Scholes, and Monte Carlo split makes comparisons easier and lets each engine evolve independently."
        }
      ],
      quality: [
        "Validation of critical inputs such as null options, maturities, and path counts.",
        "Explicit handling of Monte Carlo edge cases, including too few paths and unstable bounds.",
        "Modular approach that makes unit testing easier at the option, pricer, and random-engine levels."
      ],
      limitations: [
        "The model remains based on Black-Scholes assumptions such as constant volatility and log-normal dynamics.",
        "Speed and performance comparisons are not yet supported by a full automated benchmark suite.",
        "The engine does not yet cover more advanced models such as stochastic volatility, jumps, or market calibration."
      ],
      nextSteps: [
        "Add a reproducible benchmark protocol covering CPU time and statistical error as a function of path count.",
        "Extend the engine with variance-reduction techniques such as antithetic paths and control variates.",
        "Connect pricing outputs to a broader portfolio-analysis module including sensitivities and scenarios."
      ],
      gallery: [
        {
          src: "/images/projects/projection_montecarlo.png",
          alt: "Monte Carlo option-pricing logic implemented in C++",
          caption: "Overview of the Monte Carlo logic used to estimate option prices."
        }
      ]
    }
  },
  "projet-python-git-a4": {
    title: "Python/Git Quant Dashboard (Quant A & Quant B)",
    category: "Quantitative Finance · Python · Streamlit",
    shortDescription:
      "Group project in Python to build an interactive financial dashboard with a single-asset module (Quant A) and a multi-asset portfolio module (Quant B).",
    longDescription:
      "Project completed as part of the course Python, Git, Linux for Finance. The deliverable is a single Streamlit application designed to simulate a quantitative asset-management team: market-data retrieval through APIs, strategy backtests, multi-asset portfolio analysis, visual reporting, and risk or return metrics. The project was developed in pairs with a clear split of responsibilities.",
    whatItShows:
      "Ability to deliver an end-to-end quantitative tool: financial-data ingestion, strategy logic, metric calculation, interactive interface, and collaborative integration through Git branches.",
    context:
      "The academic framework intentionally mirrored a professional workflow, with Quant A and Quant B ownership, merge requests, and final integration. The goal was to ship a usable dashboard, not just a demonstration notebook.",
    objective:
      "Build an interactive financial application that can analyze one asset, backtest strategies, and then extend the logic to a multi-asset portfolio with diversification and risk measures.",
    role:
      "Two-person group project. My main contribution was Quant A: loading CAC40 data through APIs, implementing Buy and Hold and Moving Average Crossover strategies, computing return, volatility, Sharpe, and drawdown metrics, and integrating the outputs into the Streamlit interface.",
    challenges: [
      "Structure a modular codebase with a clear boundary between Quant A, focused on a single asset, and Quant B, focused on portfolio logic.",
      "Handle real market data with multiple frequencies, changing column structures, and missing observations without breaking the UI flow.",
      "Keep metrics coherent across strategies and periods while preserving readable outputs for the final user.",
      "Merge branch contributions while keeping a single stable application after integration."
    ],
    outcomes: [
      "Complete Quant A module with CAC40 data loader, single-asset strategies, and Streamlit performance outputs.",
      "Integrated Quant B multi-asset module with allocation, rebalancing, portfolio backtesting, and diversification indicators.",
      "Unified application with clear navigation, comparative visualizations, and summary tables to support decision-making.",
      "Collaborative Git and GitHub workflow materialized through dedicated branches and structured merges."
    ],
    links: [
      {
        label: "GitHub repository",
        href: "https://github.com/MaximeFARRE/Projet-Python-Git-A4"
      },
      {
        label: "Quant A data-loader commit",
        href: "https://github.com/MaximeFARRE/Projet-Python-Git-A4/commit/7e40ab6ee77b99a1c10483cfbd55821e57c36c69"
      },
      {
        label: "Quant A strategies and metrics commit",
        href: "https://github.com/MaximeFARRE/Projet-Python-Git-A4/commit/25c0fd3a62683b9f17720f11bde514ae9151894f"
      },
      {
        label: "Quant A branch merge",
        href: "https://github.com/MaximeFARRE/Projet-Python-Git-A4/commit/6251c229c05e989b1731b3e74bd067f9c1fb41aa"
      },
      {
        label: "Quant B branch merge",
        href: "https://github.com/MaximeFARRE/Projet-Python-Git-A4/commit/e50c88d936152204ed9027a123803a92768716ba"
      }
    ],
    deepDive: {
      summary:
        "The project is organized as a modular quantitative dashboard: a single-asset Quant A module and a multi-asset Quant B module combined inside one Streamlit interface.",
      scope: [
        "Market-data loading through public APIs with OHLCV support and daily or intraday frequencies.",
        "Single-asset backtests on CAC40 names with configurable quantitative strategies.",
        "Multi-asset portfolio analysis with allocation and rebalancing rules.",
        "Risk and return KPIs plus diversification indicators.",
        "Interactive visual outputs such as curves, correlation matrices, covariance views, and risk contributions."
      ],
      architecture: [
        {
          title: "Quant A module",
          detail:
            "Subfolder app/quant_a with data_loader.py, strategies.py, metrics.py, and ui_quant_a.py to isolate data collection, strategy logic, and user-interface rendering."
        },
        {
          title: "Quant B module",
          detail:
            "Subfolder app/quant_b with portfolio.py, backtest.py, metrics.py, and a dedicated Streamlit page for multi-asset configuration."
        },
        {
          title: "Integration layer",
          detail:
            "Main entry point in main.py that orchestrates navigation between modules and keeps the user experience coherent."
        },
        {
          title: "Collaborative workflow",
          detail:
            "Development through dedicated quant_a and quant_b branches before merges to main, with explicit ownership of each workstream."
        }
      ],
      dataFlow: [
        "User selects assets, period, frequency, and strategy parameters.",
        "Prices are loaded through APIs and then cleaned and aligned.",
        "Strategies are executed and returns or equity curves are computed.",
        "Portfolio logic aggregates weights, rebalancing, and risk measures.",
        "Indicators such as Sharpe, drawdown, correlations, and risk contributions are calculated.",
        "Results are rendered in charts and tables inside Streamlit."
      ],
      technicalChoices: [
        {
          title: "Quant A / Quant B separation",
          detail:
            "The modular split reduces development collisions and makes single-asset and portfolio logic easier to maintain independently."
        },
        {
          title: "Series normalization",
          detail:
            "The strategy layer forces homogeneous data structures so silent alignment errors are less likely."
        },
        {
          title: "Decision-oriented KPIs",
          detail:
            "Outputs prioritize directly interpretable financial metrics such as annualized return, Sharpe, max drawdown, and diversification ratio."
        },
        {
          title: "Configurable Streamlit UI",
          detail:
            "Strategy and allocation parameters are exposed through interactive controls so several assumptions can be tested quickly."
        }
      ],
      quality: [
        "Explicit team responsibilities and branch-based integration.",
        "Business modules kept separate between data, strategy, metrics, and UI to reduce regressions.",
        "Handling of invalid interface cases such as inconsistent dates, missing data, and incompatible parameters."
      ],
      limitations: [
        "Still dependent on the quality and availability of public data APIs.",
        "Backtest assumptions remain simplified, especially around real transaction costs, advanced slippage, and full liquidity constraints.",
        "Linux deployment exists in the project context but is not yet industrialized as a full CI/CD chain."
      ],
      nextSteps: [
        "Add stress-test scenarios and more realistic transaction-cost assumptions.",
        "Extend the strategy library with momentum, carry, and volatility-targeting approaches under the same comparison framework.",
        "Strengthen observability and deployment automation through tests and CI."
      ],
      gallery: [
        {
          src: "/images/projects/projet_python_git_a4.png",
          alt: "Python/Git quantitative dashboard project",
          caption: "View of the quantitative dashboard combining single-asset and portfolio analysis."
        }
      ]
    }
  },
  "site-stage": {
    title: "Career Portfolio Website",
    category: "Web · Next.js · Product Design",
    shortDescription:
      "Design and development of a finance and technology portfolio website with centralized content architecture and detailed project pages.",
    longDescription:
      "This project is the website you are currently browsing. The objective is to build a credible portfolio for finance and technology recruiters, with a professional level of finish both in substance, through content quality, project structure, and narrative consistency, and in form, through UX, responsiveness, basic SEO, and maintainability. The site follows an App Router architecture with a strict split between content data and components so iterations remain fast without breaking the interface.",
    whatItShows:
      "Ability to turn a simple showcase website into a structured editorial product: data-driven content, detailed technical project pages, UX consistency, and an iterative improvement workflow.",
    context:
      "The need was to replace an overly generic portfolio with a more demanding, credible, and results-oriented version for recruiters in quantitative finance, asset management, and technical environments.",
    objective:
      "Create a readable and convincing site that can present technical projects in depth while keeping navigation clear and the experience smooth on both mobile and desktop.",
    role:
      "I designed the site architecture, structured the data layer in src/data, created the detailed project pages, improved the technical copywriting, fixed UX and SEO issues, and iterated continuously on overall credibility.",
    challenges: [
      "Maintain a consistent tone and technical level across every page, including home, about, projects, and project details.",
      "Avoid the template effect while increasing the density of project content without making the site heavy to read.",
      "Preserve maintainability by keeping all content centralized in src/data rather than scattered across components.",
      "Keep the layout responsive despite long text blocks and information-rich cards."
    ],
    outcomes: [
      "Clear front-end content base used to drive projects, experience, navigation, and profile information.",
      "Addition of in-depth project pages covering architecture, technical choices, limits, and next steps.",
      "Improved overall credibility through more concrete language and technical proof points such as repository and commit links.",
      "Iterative correction workflow on UX, content, and structure to move toward an application-ready portfolio."
    ],
    links: [
      {
        label: "GitHub repository",
        href: "https://github.com/MaximeFARRE/Site_stage"
      },
      {
        label: "Detailed-project-pages commit",
        href: "https://github.com/MaximeFARRE/Site_stage/commit/5a33191"
      },
      {
        label: "Wealth-tracking page commit",
        href: "https://github.com/MaximeFARRE/Site_stage/commit/d5f5b5b"
      },
      {
        label: "Bug-fix commit",
        href: "https://github.com/MaximeFARRE/Site_stage/commit/51cf4d3"
      }
    ],
    deepDive: {
      summary:
        "The site is structured as a maintainable editorial product: centralized data, reusable components, detailed pages, and a logic of incremental improvement.",
      scope: [
        "Core pages: home, about, experience, projects, project details, resume, and contact.",
        "Content centralized in src/data to avoid duplication and simplify updates.",
        "Dynamic project pages generated through slugs for key projects.",
        "Light design system based on Tailwind CSS and theme variables.",
        "Vercel deployment with lint and type-check verification before shipping."
      ],
      architecture: [
        {
          title: "Data layer",
          detail:
            "All editorial entities such as projects, experience, navigation, and profile content are grouped in src/data to keep content and presentation clearly separated."
        },
        {
          title: "Page layer",
          detail:
            "App Router in src/app with static routes plus the dynamic /projects/[slug] route to support rich and scalable project pages."
        },
        {
          title: "Component layer",
          detail:
            "Reusable UI components for layout, sections, and cards help preserve visual consistency and limit front-end debt."
        },
        {
          title: "Delivery quality",
          detail:
            "Systematic validation through ESLint and TypeScript to secure fast iterations."
        }
      ],
      dataFlow: [
        "Write or update content inside src/data/*.ts.",
        "Pages and sections read the data they need.",
        "Project pages are resolved via slug through getProjectBySlug.",
        "Technical sections such as architecture, pipeline, limitations, and outcomes are rendered from structured data.",
        "Quality checks run through lint and type-check before deployment.",
        "Deployment to Vercel followed by functional validation of critical routes."
      ],
      technicalChoices: [
        {
          title: "Content-first architecture",
          detail:
            "Editorial robustness comes first: content is treated as versioned data rather than inline copy scattered inside components."
        },
        {
          title: "Dynamic project route",
          detail:
            "Using /projects/[slug] lets the portfolio scale to more projects without complicating the application structure."
        },
        {
          title: "Feedback-driven iteration",
          detail:
            "The site improves through successive corrections on credibility, UX, and technical precision rather than through one large rewrite."
        },
        {
          title: "Controlled simplicity",
          detail:
            "The project remains intentionally free of a complex backend so maintenance stays low and content updates remain fast."
        }
      ],
      quality: [
        "Lint and type-check run on every significant iteration.",
        "Stable and readable file structure that supports future additions.",
        "Regular manual checks on project routes and critical links."
      ],
      limitations: [
        "The site remains static, with no CMS and no dedicated editing interface.",
        "Project proof still depends partly on the quality and quantity of available screenshots.",
        "Some advanced SEO enhancements, such as richer project-level structured data, can still be improved."
      ],
      nextSteps: [
        "Add more project-specific screenshots to strengthen visual proof.",
        "Complete Open Graph metadata per project page with dedicated images.",
        "Finalize the remaining copywriting adjustments for finance and tech recruiters."
      ],
      gallery: [
        {
          src: "/images/profile/photo de profil.jpeg",
          alt: "Professional portfolio website project under active development",
          caption: "This website is treated as a product project in its own right, with both technical and editorial iterations."
        }
      ]
    }
  },
  "smallcaps-screener-fr": {
    title: "French Small Caps Screener",
    category: "Fundamental Analysis · Buy-Side Tool · Python Desktop",
    shortDescription:
      "Desktop screening tool for French small caps built to prioritize an investable watchlist with interpretable fundamental ratios.",
    longDescription:
      "This project is a desktop tool for fundamental screening on French small caps. The goal is to build a full buy-side analysis chain: define an investable universe, collect and store financial data, compute fundamental ratios, build transparent multi-factor scoring, and surface the best ideas as a usable watchlist. The point is less to predict the market mechanically than to reproduce a first layer of analyst work: filter, compare, prioritize, and document the companies worth studying.",
    technologies: ["Python", "Fundamental analysis", "PySide6", "SQLAlchemy", "SQLite", "pandas", "numpy", "pytest", "ruff / black", "pre-commit"],
    whatItShows:
      "Ability to turn an investment problem into a concrete tool: build a French small-cap universe, structure financial data, compute fundamental ratios, design interpretable multi-factor scoring, persist data locally, and deliver usable outputs for analyst prioritization.",
    context:
      "The project starts from a straightforward buy-side need: reduce a broad universe to a list of companies that are genuinely worth reviewing, with a consistent reading of ratios, attention points, and first comparison elements.",
    objective:
      "Build a buy-side pre-selection tool able to filter, compare, and prioritize French small caps while keeping ratios interpretable, the local data base usable, and the resulting watchlist useful for shaping an initial investment hypothesis.",
    role:
      "I frame the investment universe, design the architecture, model the data, implement repositories, build ratio services, define the scoring logic, write tests, and document the screening methodology.",
    challenges: [
      "Define a coherent investment universe with market, size, liquidity, and exclusion filters without introducing obvious bias.",
      "Handle imperfect financial data with missing values, heterogeneous formats, shifted fiscal years, and inconsistent accounting definitions.",
      "Design robust ratios that can survive edge cases such as negative earnings, unusual EV values, inconsistent net debt, and extreme outliers.",
      "Build a multi-factor score that stays economically meaningful and interpretable from an investment-style perspective."
    ],
    outcomes: [
      "Strict UI → Services → Repositories architecture already applied to separate display, business logic, and data access.",
      "Local data model covering Company, FinancialStatement, PriceHistory, and ScreeningSnapshot.",
      "Services already implemented for financial ratios, multi-factor scoring, and screening or filtering.",
      "Credible working base to produce watchlists and document the first names worth investigating further through fundamental analysis."
    ],
    links: [
      {
        label: "GitHub repository",
        href: "https://github.com/MaximeFARRE/small-cap-screener"
      },
      {
        label: "Discuss this project",
        href: "/contact"
      }
    ],
    deepDive: {
      summary:
        "The project is already well advanced on the data layer and business logic. The challenge is not only to compute ratios, but to produce a pre-selection tool that a buy-side analyst can actually use to move faster from a broad universe to an argued watchlist.",
      scope: [
        "Build an investable French small-cap universe with explicit filtering rules.",
        "Store company data, financial statements, price history, and screening snapshots locally.",
        "Compute fundamental ratios to compare valuation, quality, growth, and balance-sheet strength.",
        "Use interpretable multi-factor scoring to prioritize the names worth reviewing.",
        "Deliver watchlists and outputs that can support deeper fundamental research."
      ],
      architecture: [
        {
          title: "UI / PySide6",
          detail:
            "The interface layer handles display, filters, and user interaction. It remains intentionally thin and does not carry business logic."
        },
        {
          title: "Services",
          detail:
            "The services concentrate ratio calculations, scoring, screening, and business rules. This is the layer that transforms raw data into usable pre-selection outputs."
        },
        {
          title: "Repositories",
          detail:
            "Repositories encapsulate database, file, and external-provider access. They isolate persistence and ingestion so the rest of the code stays testable and maintainable."
        },
        {
          title: "Database",
          detail:
            "SQLite acts as the local database and SQLAlchemy as the structured access layer. The objective is simple, traceable persistence suited to a local-first desktop workflow."
        }
      ],
      dataFlow: [
        "Define the investable universe for France, including size bounds and exclusion rules.",
        "Collect financial and market data from external sources, then check them for consistency.",
        "Run a fetch → parse → store pipeline to make ingestion and database writes more reliable.",
        "Compute fundamental ratios and sub-scores across the main analysis axes.",
        "Aggregate the sub-scores into an interpretable composite score.",
        "Return the best candidates through watchlists, snapshots, and exportable outputs."
      ],
      technicalChoices: [
        {
          title: "Universe first, scoring second",
          detail:
            "The project prioritizes a genuinely investable universe before any ranking logic. A good ranking has little value if the starting universe is poorly defined."
        },
        {
          title: "Interpretable scoring",
          detail:
            "Ratios and weightings remain explicit so each score can be reviewed, debated, and challenged the way a buy-side analyst would do it."
        },
        {
          title: "Testable local-first architecture",
          detail:
            "The UI → Services → Repositories split makes unit testing easier, limits side effects, and lets the tool evolve without depending on heavy infrastructure."
        },
        {
          title: "Pre-selection, not recommendation",
          detail:
            "The tool is designed to help filter and prioritize. It does not replace account reading or a full investment thesis."
        }
      ],
      quality: [
        "Unit tests already present on repositories and services.",
        "Strict separation between display, business logic, and data access.",
        "Quality tooling integrated with pytest, ruff / black, and pre-commit."
      ],
      limitations: [
        "Data coverage still depends on free data sources.",
        "External ingestion is still being consolidated.",
        "Factor backtesting is not finalized yet.",
        "Survivorship bias still has to be handled properly.",
        "Some fundamental data still requires manual checks.",
        "The tool does not replace full fundamental analysis; it is primarily meant to prioritize names."
      ],
      nextSteps: [
        "Current phase: the data layer and business logic are already well advanced.",
        "Next step 1: external ingestion through a financial-data provider.",
        "Next step 2: a full fetch → parse → store pipeline.",
        "Next step 3: complete PySide6 desktop interface.",
        "Next step 4: CSV / Excel export.",
        "Next step 5: backtesting and bias controls covering survivorship bias, point-in-time data, and source quality."
      ],
      customSections: [
        {
          title: "Integrated fundamental analysis",
          summary:
            "The project does not stop at ranking companies through ratios. It aims to reproduce a first stage of fundamental analyst work: understanding business quality, valuation, balance-sheet strength, growth, financial risk, and the overall consistency of the investment profile.",
          points: [
            "Valuation: P/E, P/B, EV/EBITDA.",
            "Quality: margins, profitability, and cash generation.",
            "Growth: revenue, earnings, and historical momentum.",
            "Balance sheet: net debt, cash, and leverage.",
            "Company profile: sector, industry, website, and business summary.",
            "Analyst data: recommendations, target price, and potential upside."
          ]
        },
        {
          title: "Work already completed",
          summary:
            "The project is not just a conceptual idea. The data layer and business logic are already substantially built.",
          points: [
            "Data models: Company, FinancialStatement, PriceHistory, ScreeningSnapshot.",
            "CRUD repositories with tests.",
            "Financial-ratio services.",
            "Multi-factor scoring service.",
            "Screening and filtering service.",
            "Strict UI → Services → Repositories architecture.",
            "Unit tests on repositories and services."
          ]
        },
        {
          title: "Why it is buy-side",
          summary:
            "The goal is not to predict stock performance mechanically. It is to help an analyst reduce a broad universe to a usable watchlist and then identify the names that deserve deeper fundamental work."
        }
      ],
      gallery: [
        {
          src: "/images/projects/smallcaps_screener_fr.png",
          alt: "Buy-side small-cap screening engine for French equities under development",
          caption: "Preview of the desktop screener with ratio outputs, company prioritization, and analyst-oriented watchlist logic."
        }
      ]
    }
  },
  occifloc: {
    title: "Occifloc",
    category: "Operations · Management · Automation",
    shortDescription:
      "Operational management of a textile customization activity with margin tracking, cash monitoring, production follow-up, and process improvement.",
    longDescription:
      "Occifloc is a real textile and promotional-product customization business. I include it to show what it demonstrates concretely: client management, pricing, margin tracking, cash monitoring, quality, delivery constraints, production organization, and progressive process improvement.",
    technologies: ["Management", "KPIs", "Process", "Automation", "Sales"],
    whatItShows:
      "Ability to run a real activity with indicators, operational constraints, and accountable decisions.",
    context:
      "Occifloc gave me a practical environment for working on topics that are rarely theoretical: sell, produce, deliver, manage deadlines, track costs, and maintain client relationships. That experience still matters because it connects numbers, organization, and responsibility.",
    objective:
      "Structure a profitable activity, monitor margins and cash, improve processes, and maintain a reliable service level.",
    role:
      "Business development, activity monitoring, pricing, margin management, production organization, and continuous process improvement.",
    challenges: [
      "Balance business development, production, quality, and deadlines.",
      "Make decisions under margin, cash, and capacity constraints.",
      "Gradually structure the activity without losing operational responsiveness."
    ],
    outcomes: [
      "Regular tracking of margins, costs, and cash to guide trade-offs.",
      "Stronger process structure between sales, production, and delivery with better visibility on deadlines.",
      "Reinforced indicator-driven decision making in a real operating context."
    ],
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/maxime-farre"
      },
      {
        label: "Discuss this project",
        href: "/contact"
      }
    ]
  },
  "projet-machine-learning": {
    title: "Machine Learning Allocation Project",
    category: "Quantitative Finance · Data Science · Machine Learning",
    shortDescription:
      "Python modeling and backtesting pipeline to compare allocation strategies such as Equal Weight, Markowitz, Random Forest, and Logistic Regression on financial assets.",
    longDescription:
      "This project is linked to the portfolio backtesting and wealth-tracking stack: it is the machine-learning layer used to test signals and compare their impact on portfolio performance. The repository structures a full pipeline, from market-data preparation to test-metric production, with a reproducible logic built around dedicated scripts and run_all orchestration. The approach combines classic baselines such as Equal Weight and Markowitz Minimum Variance with supervised models like Random Forest and Logistic Regression in order to predict the direction of daily returns and convert those probabilities into portfolio weights.",
    whatItShows:
      "Ability to turn a quantitative topic into a usable ML pipeline: feature engineering, variable selection, multi-model training, comparison against financial baselines, and clear reporting of results.",
    context:
      "The objective was to go beyond an exploratory notebook and produce a rigorous, collaborative working base with modular code, dedicated scripts, exported metrics, and directly usable comparison charts.",
    objective:
      "Assess the contribution of supervised models to portfolio allocation in a structured way while preserving a robust financial reference through Equal Weight and Markowitz baselines.",
    role:
      "I contributed to project structuring, to the integration of strategy-comparison modules, and to the design of an end-to-end flow covering data preparation, training, backtesting, and reporting.",
    challenges: [
      "Build a clean temporal train or test pipeline to limit information leakage in a time-series setting.",
      "Compare fundamentally different approaches, from static allocations to supervised models, under homogeneous metrics.",
      "Maintain a readable architecture despite the multiplication of components such as features, models, baselines, and orchestration scripts."
    ],
    outcomes: [
      "Reproducible execution chain through run_prepare.py, run_baselines.py, run_random_forest.py, run_logistic_regression.py, and run_all.py.",
      "Systematic production of test reports such as metrics_test_* and comparative figures such as equity_*_vs_baselines_test.png.",
      "Integration of Random Forest with ANOVA feature selection and hyperparameter search through GridSearchCV.",
      "Addition of a Logistic Regression supervised benchmark compared with classical financial strategies."
    ],
    links: [
      {
        label: "GitHub repository",
        href: "https://github.com/MaximeFARRE/Projet_final_ML"
      },
      {
        label: "Related project: portfolio backtest",
        href: "/projects/backtest-optimisation-portefeuille"
      },
      {
        label: "Related project: wealth tracking",
        href: "/projects/suivi-patrimoine"
      },
      {
        label: "Random Forest commit",
        href: "https://github.com/MaximeFARRE/Projet_final_ML/commit/eba827df76afca95144b9db81a238e4d71ac0c1d"
      },
      {
        label: "Logistic Regression commit",
        href: "https://github.com/MaximeFARRE/Projet_final_ML/commit/5c76815da29c2485d593eb278b7f08ccac8a9acf"
      }
    ],
    deepDive: {
      summary:
        "The project follows a full quant and machine-learning workflow: price ingestion, technical-feature construction, directional model training by asset, portfolio backtest, and systematic comparison against financial baselines.",
      scope: [
        "Data preparation and exploratory analysis through normalized prices, return distributions, correlations, and rolling volatility.",
        "Financial baselines: Equal Weight Buy and Hold and Markowitz Minimum Variance.",
        "Supervised modeling by asset through Random Forest and Logistic Regression.",
        "ML strategy backtests on the test period with portfolio weights derived from probabilities.",
        "Export of metrics and figures for comparative reading."
      ],
      architecture: [
        {
          title: "Data layer",
          detail:
            "Modules such as src/data/load_data.py and src/data/preprocess.py load prices, compute returns, and create a proper temporal train or test split."
        },
        {
          title: "Feature engineering",
          detail:
            "Technical indicators are built in src/features/technical_indicators.py and ANOVA selection is applied through src/features/feature_selection.py to keep the most relevant variables."
        },
        {
          title: "Models and strategies",
          detail:
            "Financial baselines live in src/baselines while ML models such as Random Forest and Logistic Regression are implemented with the backtest logic in the model layer."
        },
        {
          title: "Orchestration and reporting",
          detail:
            "Scripts such as scripts/run_*.py and run_all.py execute the full pipeline, produce metric tables, and generate equity-curve comparisons."
        }
      ],
      dataFlow: [
        "Load price series and compute daily returns.",
        "Create technical features and save the consolidated dataset.",
        "Split train and test chronologically and train the models asset by asset.",
        "Project signals or probabilities into portfolio weights over the test period.",
        "Compute equity curves and cross-strategy comparison metrics.",
        "Export results to reports/tables and reports/figures for decision-oriented analysis."
      ],
      technicalChoices: [
        {
          title: "Systematic comparison with baselines",
          detail:
            "Every ML strategy is evaluated against Equal Weight and Markowitz to keep a stable financial benchmark rather than relying only on a classification score."
        },
        {
          title: "Explicit temporal split",
          detail:
            "The train or test split follows market chronology in order to limit information leakage in time-series data."
        },
        {
          title: "ANOVA selection plus GridSearchCV",
          detail:
            "Random Forest combines feature reduction and hyperparameter tuning to avoid a purely arbitrary modeling approach."
        },
        {
          title: "Asset-level modeling, then portfolio aggregation",
          detail:
            "Predictions are generated at the ticker level and then aggregated through a weighting logic, which makes the model closer to a real allocation use case."
        }
      ],
      quality: [
        "Dedicated scripts for each stage improve reproducibility and make debugging more targeted.",
        "Metrics and test visualizations are exported in versionable files.",
        "The modular structure across data, features, models, baselines, and scripts is compatible with collaborative work."
      ],
      limitations: [
        "Performance remains dependent on the historical window and the market regime observed.",
        "Real market frictions are simplified, especially transaction costs, liquidity, and advanced slippage.",
        "Validation can still be strengthened through more robust walk-forward protocols and stress testing."
      ],
      nextSteps: [
        "Add walk-forward validation and stricter out-of-sample robustness protocols.",
        "Extend the model library with approaches such as gradient boosting under the same comparison framework.",
        "Connect ML pipeline outputs automatically to the wealth-tracking modules."
      ],
      gallery: [
        {
          src: "/images/projects/projection_montecarlo.png",
          alt: "Machine-learning pipeline used to compare portfolio strategies",
          caption: "Synthetic view of the ML pipeline and the compared strategy curves."
        },
        {
          src: "/images/projects/backtest_5ans.png",
          alt: "Random Forest compared with baselines on the test period",
          caption: "Visual comparison of the Random Forest model against the financial baselines."
        }
      ]
    }
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
    ...translation,
    deepDive: translation.deepDive ?? project.deepDive
  };
}
