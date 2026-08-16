export const aboutDossier = {
  title:
    "I work in investment banking, where technical questions are part of the job.",
  lead:
    "Software became how I investigate those questions, test the assumptions behind them, and build better answers.",
  position: {
    label: "Current position",
    value: "Investment banking",
    context: "Finance × software",
  },
  leaves: [
    {
      index: "01",
      title: "Investment banking",
      body:
        "This is where the questions begin: decisions under constraints, dense information, and assumptions that must stay clear.",
      note: "Start with the decision.",
    },
    {
      index: "02",
      title: "Technical pressure",
      body:
        "Recurring friction showed me that a process is hard to improve when it is hard to inspect.",
      note: "Make the problem legible.",
    },
    {
      index: "03",
      title: "Software development",
      body:
        "Software became the method: make assumptions visible, test ideas, and build a better answer.",
      note: "Build a working answer.",
    },
    {
      index: "04",
      title: "Public work",
      body:
        "I share the methods, trade-offs, and questions behind the work for technical and financial readers.",
      note: "Share what stays useful.",
    },
  ],
  practice: [
    "Finance gives me the context: decisions under constraints, dense information, and the need to make assumptions clear. Recurring technical challenges kept exposing the same problem—when a process is hard to inspect, it is hard to improve.",
    "What began as a way to examine a problem became a way to build a better answer. Code lets me test ideas and turn complex financial information into tools people can use.",
    "Outside work, I follow fintech products and market changes, read about how people interact with money, and keep building projects of my own.",
    "Savyy is the clearest example: a personal-finance product that brings scattered financial information into one inspectable view. It reflects the standard I care about most—complex systems should explain themselves.",
  ],
  closing:
    "This site is where I share that work and write about the questions behind it. If you are working on a financial product, a technical problem, or something between the two, get in touch.",
} as const;
