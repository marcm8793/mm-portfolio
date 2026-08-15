import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.marcmansour.dev",
      lastModified: new Date("2026-08-14"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
