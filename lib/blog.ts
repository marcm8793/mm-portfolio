import "server-only";

import { promises as fs } from "node:fs";
import path from "node:path";

import matter from "gray-matter";
import { cacheLife } from "next/cache";
import { z } from "zod";

const blogDirectory = path.join(process.cwd(), "content", "blog");
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const dateSchema = z.preprocess(
  (value) =>
    value instanceof Date && !Number.isNaN(value.getTime())
      ? value.toISOString().slice(0, 10)
      : value,
  z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Use an ISO date in YYYY-MM-DD format.")
    .refine((value) => {
      const date = new Date(`${value}T00:00:00.000Z`);
      return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
    }, "Use a real calendar date."),
);

const blogFrontmatterSchema = z.object({
  title: z.string().trim().min(1).max(110),
  author: z.string().trim().min(1).max(80).default("Marc Mansour"),
  description: z.string().trim().min(1).max(220),
  date: dateSchema,
  updated: dateSchema.optional(),
  tags: z.array(z.string().trim().min(1).max(32)).max(8).default([]),
  draft: z.boolean().default(false),
});

type BlogPostRecord = z.infer<typeof blogFrontmatterSchema> & {
  slug: string;
  content: string;
  readingTime: number;
};

export type BlogPost = BlogPostRecord;
export type BlogPostSummary = Omit<BlogPostRecord, "content">;

function frontmatterError(fileName: string, error: z.ZodError) {
  const issues = error.issues
    .map((issue) => `${issue.path.join(".") || "frontmatter"}: ${issue.message}`)
    .join("; ");

  return new Error(`[blog] Invalid frontmatter in ${fileName}: ${issues}`);
}

function countWords(markdown: string) {
  return markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/!?(\[[^\]]*\])\([^)]*\)/g, "$1")
    .replace(/[#>*_~\-|]/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

function parseBlogPost(fileName: string, source: string): BlogPostRecord {
  const slug = fileName.replace(/\.md$/, "");

  if (!slugPattern.test(slug)) {
    throw new Error(
      `[blog] Invalid filename ${fileName}. Use lowercase words separated by hyphens.`,
    );
  }

  const parsedMatter = matter(source);
  const parsedFrontmatter = blogFrontmatterSchema.safeParse(parsedMatter.data);

  if (!parsedFrontmatter.success) {
    throw frontmatterError(fileName, parsedFrontmatter.error);
  }

  return {
    ...parsedFrontmatter.data,
    slug,
    content: parsedMatter.content.trim(),
    readingTime: Math.max(1, Math.ceil(countWords(parsedMatter.content) / 220)),
  };
}

async function getBlogPostRecords(): Promise<BlogPostRecord[]> {
  "use cache";
  cacheLife("max");

  let fileNames: string[];

  try {
    fileNames = (await fs.readdir(blogDirectory)).filter((fileName) =>
      fileName.endsWith(".md"),
    );
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw error;
  }

  const posts = await Promise.all(
    fileNames.map(async (fileName) => {
      const source = await fs.readFile(path.join(blogDirectory, fileName), "utf8");
      return parseBlogPost(fileName, source);
    }),
  );

  return posts
    .filter((post) => !post.draft)
    .sort(
      (left, right) =>
        Date.parse(`${right.date}T00:00:00.000Z`) -
          Date.parse(`${left.date}T00:00:00.000Z`) ||
        left.slug.localeCompare(right.slug),
    );
}

export async function getBlogPosts(): Promise<BlogPostSummary[]> {
  return (await getBlogPostRecords()).map(({ content, ...post }) => {
    void content;
    return post;
  });
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  if (!slugPattern.test(slug)) return null;
  return (await getBlogPostRecords()).find((post) => post.slug === slug) ?? null;
}

export function formatBlogDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00.000Z`));
}

export function getBlogDateParts(date: string) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).formatToParts(new Date(`${date}T00:00:00.000Z`));

  return {
    day: parts.find((part) => part.type === "day")?.value ?? "",
    month: (parts.find((part) => part.type === "month")?.value ?? "").toUpperCase(),
    year: parts.find((part) => part.type === "year")?.value ?? "",
  };
}
