export const savyyProject = {
  name: "Savyy",
  url: "https://savyy.net/",
  appUrl: "https://savyy.app/",
  appStoreUrl: "https://apps.apple.com/app/id6756239120",
  playStoreUrl: "https://play.google.com/store/apps/details?id=net.savyy.app",
  documentation: {
    ai: "https://savyy.net/features/ai",
    banking: "https://savyy.net/features/bridge",
    security: "https://savyy.net/security",
    analytics: "https://savyy.net/features/analytics",
    changelog: "https://savyy.net/changelog",
  },
  badges: ["Personal finance", "Web · iOS · Android"],
  description:
    "Savyy connects accounts across 4,000+ European banks, categorizes transactions with privacy-first AI, and turns balances, spending, budgets, alerts, and subscriptions into one clear view.",
  details: [
    {
      label: "Banking coverage",
      value: "4,000+ European banks through PSD2 open banking with Bridge.",
    },
    {
      label: "Privacy model",
      value:
        "Banking credentials are never stored, and transaction data is never used for model training.",
    },
    {
      label: "Product surface",
      value: "Web, iOS, and Android with analytics, budgets, alerts, export, and markets.",
    },
  ],
  proof: ["Solo full stack", "4,000+ banks", "Web · iOS · Android"],
  productAreas: [
    {
      index: "01",
      title: "See the whole picture",
      body: "Accounts, balances, transactions, budgets, savings, investments, property, and other assets live in one financial view.",
    },
    {
      index: "02",
      title: "Turn activity into context",
      body: "Savyy organizes spending by category and period, keeps cash flow readable, and lets people correct the system when their own judgment is better.",
    },
    {
      index: "03",
      title: "Move between screen sizes",
      body: "The web and mobile clients share the same account. Budgets, categories, portfolios, and connected banks stay in sync.",
    },
  ],
  ownership: [
    "Product direction and interface design",
    "Web application",
    "Native iOS and Android applications",
    "Backend, APIs, and data model",
    "Bridge open-banking integration",
    "AI features and categorization controls",
    "Infrastructure, privacy, and security",
    "Billing, releases, documentation, and support",
  ],
  systemFlow: [
    {
      index: "01",
      title: "Consent",
      body: "The user connects a bank through Bridge. Authentication happens with the bank, and Savyy receives read-only access.",
    },
    {
      index: "02",
      title: "Normalize",
      body: "Balances and transactions arrive in a consistent shape so the same financial model can serve different banks and markets.",
    },
    {
      index: "03",
      title: "Interpret",
      body: "Transactions can be categorized after identifiers are removed. People can review and change every result.",
    },
    {
      index: "04",
      title: "Deliver",
      body: "Web, iOS, and Android read and write through the same product system, so a change on one client appears on the others.",
    },
  ],
  nativeCapabilities: [
    "Biometric app lock with PIN fallback",
    "Home-screen widgets for wealth, budgets, cash flow, and followed instruments",
    "Push alerts that open the relevant screen",
    "English, French, and Spanish",
  ],
  privacyBoundaries: [
    "Bank access is read-only. Savyy cannot initiate a payment or transfer.",
    "Bank credentials are handled by the regulated connection flow and never pass through Savyy.",
    "AI features require consent, and financial data is never used to train a model.",
    "Sensitive data is encrypted, and Savyy documents EU data residency for its infrastructure.",
  ],
} as const;

export const featuredProject = savyyProject;
