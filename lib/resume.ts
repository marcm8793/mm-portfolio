export type ResumePdf = {
  href: string;
  label: string;
};

type ResumeData = {
  name: string;
  initials: string;
  title: string;
  summary: string;
  location: {
    label: string;
    href: string;
  };
  avatarUrl: string;
  lastUpdated: string;
  resumePdf: ResumePdf;
  contact: {
    email: string;
    phone: string;
    links: Array<{
      label: string;
      href: string;
    }>;
  };
  profileFacts: Array<{
    label: string;
    value: string;
  }>;
  skills: string[];
  languages: string[];
  experience: Array<{
    company: string;
    companyUrl: string;
    sector: string;
    title: string;
    period: string;
    summary: string;
  }>;
  certifications: Array<{
    title: string;
    issuer: string;
    date: string;
    field: string;
    summary: string;
    certificate: ResumePdf | null;
  }>;
  education: Array<{
    school: string;
    degree: string;
    field: string;
    period: string;
    diploma: ResumePdf | null;
  }>;
  projects: Array<{
    name: string;
    href: string;
    description: string;
    stack: string[];
  }>;
};

/**
 * Edit this object to update the résumé page.
 *
 * To attach a diploma:
 * 1. Put the PDF in `public/diplomas/`.
 * 2. Replace `diploma: null` with:
 *    `diploma: { label: "Open diploma", href: "/diplomas/my-diploma.pdf" }`.
 *
 * The same pattern works for certification PDFs in `public/certifications/`.
 */
export const resumeData: ResumeData = {
  name: "Marc Mansour",
  initials: "MM",
  title: "Developer focused on financial tools",
  summary:
    "I bring investment-banking experience into software development, turning complex financial processes into clear, inspectable tools.",
  location: {
    label: "Paris, France · CET",
    href: "https://www.google.com/maps/place/Paris",
  },
  avatarUrl:
    "https://avatars.githubusercontent.com/u/139041349?s=400&u=78fc2e2aa1d2b96e28b59310a647fa987b768f54&v=4",
  lastUpdated: "August 2026",
  resumePdf: {
    label: "Open PDF résumé",
    href: "/CVMM-dev-en.pdf",
  },
  contact: {
    email: "marcmansour@outlook.fr",
    phone: "+33 6 88 14 16 76",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/marcm8793",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/marc-mansour2142/",
      },
      {
        label: "X",
        href: "https://x.com/Marc87240",
      },
    ],
  },
  profileFacts: [
    { label: "Finance practice", value: "2016 — present" },
    { label: "Software focus", value: "Financial tools" },
    { label: "Languages", value: "French · English" },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React / Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Tailwind CSS",
  ],
  languages: ["French", "English"],
  experience: [
    {
      company: "Société Générale CIB",
      companyUrl: "https://wholesale.banking.societegenerale.com/en/",
      sector: "Finance",
      title: "Expert / Project Manager",
      period: "2023 — present",
      summary:
        "Business improvements between trading and middle-office teams, with a focus on process convergence.",
    },
    {
      company: "Crédit Agricole CIB",
      companyUrl: "https://www.ca-cib.fr/",
      sector: "Finance",
      title: "Head of Equity Collateral & Settlement",
      period: "2016 — 2023",
      summary:
        "Managed stock-lending and collateral operations on SFCM, cash-equity settlement, and a team of ten people.",
    },
    {
      company: "BNP Paribas Securities Services",
      companyUrl: "https://securities.cib.bnpparibas/",
      sector: "Finance",
      title: "Securities Account Manager",
      period: "2016",
      summary:
        "Managed securities accounts for institutional clients and created reports for clients and internal teams.",
    },
  ],
  certifications: [
    {
      title: "Full-Stack Engineer",
      issuer: "Codecademy",
      date: "2025",
      field: "Full-stack engineering",
      summary:
        "HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, PostgreSQL, data structures, and algorithms.",
      certificate: {
        label: "Open certificate",
        href: "/certifications/swecodecademy.pdf",
      },
    },
    {
      title: "Next.js App Router Fundamentals",
      issuer: "Vercel",
      date: "2025",
      field: "Next.js",
      summary: "Core patterns and fundamentals of the Next.js App Router.",
      certificate: {
        label: "Open certificate",
        href: "/certifications/nextjs-fundamentals.pdf",
      },
    },
    {
      title: "IBM Full-Stack JavaScript Developer",
      issuer: "IBM",
      date: "2025",
      field: "JavaScript",
      summary: "Full-stack web development focused on JavaScript.",
      certificate: {
        label: "Open certificate",
        href: "/certifications/Coursera_IBM_FS_JS.pdf",
      },
    },
    {
      title: "Full-Stack Web Development",
      issuer: "Le Wagon",
      date: "2024",
      field: "Web development",
      summary:
        "HTML, CSS, JavaScript, Ruby on Rails, SQL, Git, and deployment fundamentals.",
      certificate: {
        label: "Open certificate",
        href: "/certifications/certification-rncp-marc-mansour.pdf",
      },
    },
  ],
  education: [
    {
      school: "Université de Limoges",
      degree: "Master 2 (M2) Banques, Risques et Marchés",
      field: "Finance",
      period: "2015 — 2016",
      diploma: null,
    },
    {
      school: "University of Birmingham",
      degree: "MSc Money, Banking and Finance",
      field: "Finance",
      period: "2014 — 2015",
      diploma: null,
    },
  ],
  projects: [
    {
      name: "Savyy",
      href: "https://savyy.net/",
      description:
        "A personal-finance product bringing accounts, budgets, markets, assets, and everyday spending into one view.",
      stack: [
        "Turborepo",
        "TypeScript",
        "Next.js",
        "Cloudflare",
        "Fastify",
        "Zod",
      ],
    },
  ],
};
