import type { MetadataRoute } from "next";

import { getBlogPosts } from "@/lib/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getBlogPosts();

  const staticRoutes: MetadataRoute.Sitemap = [
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
      url: "https://www.marcmansour.dev/cv",
      lastModified: new Date("2026-08-17"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.marcmansour.dev/contact",
      lastModified: new Date("2026-08-16"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: "https://www.marcmansour.dev/blog",
      lastModified: posts[0]?.updated ?? posts[0]?.date ?? new Date("2026-08-17"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const articleRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://www.marcmansour.dev/blog/${post.slug}`,
    lastModified: post.updated ?? post.date,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...articleRoutes];
}
