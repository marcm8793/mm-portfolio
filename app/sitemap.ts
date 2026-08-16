import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.marcmansour.dev",
      lastModified: new Date("2026-08-14"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://www.marcmansour.dev/about",
      lastModified: new Date("2026-08-15"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.marcmansour.dev/projects",
      lastModified: new Date("2026-08-16"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.marcmansour.dev/contact",
      lastModified: new Date("2026-08-16"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];
}
