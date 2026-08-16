const githubUsername = "marcm8793";
const emailAddress = "marcmansour@outlook.fr";

export const publicProfile = {
  site: {
    url: "https://www.marcmansour.dev",
  },
  blog: {
    url: "https://www.marcmansour.dev/blog",
  },
  resume: {
    url: "https://www.marcmansour.dev/CVMM-dev-en.pdf",
  },
  linkedin: {
    url: "https://www.linkedin.com/in/marc-mansour2142/",
  },
  x: {
    handle: "@Marc87240",
    url: "https://x.com/Marc87240",
  },
  github: {
    username: githubUsername,
    url: `https://github.com/${githubUsername}`,
    displayUrl: `github.com/${githubUsername}`,
  },
  email: {
    address: emailAddress,
    url: `mailto:${emailAddress}`,
  },
} as const;

export function githubRepositoryUrl(repository: string) {
  return `${publicProfile.github.url}/${repository}`;
}

export function emailUrl(subject?: string) {
  return subject
    ? `${publicProfile.email.url}?subject=${encodeURIComponent(subject)}`
    : publicProfile.email.url;
}
