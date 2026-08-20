import { ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr/ArrowLeft";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import { ArticleMarkdown } from "@/app/blog/_components/article-markdown";
import { SiteShell } from "@/components/site-shell";
import { formatBlogDate, getBlogPost, getBlogPosts } from "@/lib/blog";

type BlogArticlePageProps = PageProps<"/blog/[slug]">;

export async function generateStaticParams() {
  return (await getBlogPosts()).map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) return {};

  const canonical = `/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author }],
    keywords: post.tags,
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: canonical,
      title: post.title,
      description: post.description,
      publishedTime: `${post.date}T00:00:00.000Z`,
      modifiedTime: post.updated ? `${post.updated}T00:00:00.000Z` : undefined,
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default function BlogArticlePage({ params }: BlogArticlePageProps) {
  return (
    <Suspense fallback={<BlogArticleFallback />}>
      <BlogArticleContent params={params} />
    </Suspense>
  );
}

function BlogArticleFallback() {
  return (
    <SiteShell activePage="blog" showFooterCta={false}>
      <main id="main-content">
        <div
          className="min-h-[32rem] px-[1.7rem] py-[clamp(3rem,7vw,5.5rem)] min-[641px]:px-[var(--page-gutter)]"
          role="status"
        >
          <p className="m-0 font-mono [font-size:var(--type-label)] font-semibold tracking-[0.055em] text-[var(--cobalt)] uppercase">
            Opening field note…
          </p>
        </div>
      </main>
    </SiteShell>
  );
}

async function BlogArticleContent({
  params,
}: Pick<BlogArticlePageProps, "params">) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) notFound();

  const articleUrl = `https://www.marcmansour.dev/blog/${post.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    mainEntityOfPage: articleUrl,
    url: articleUrl,
    author: {
      "@type": "Person",
      name: post.author,
      url: "https://www.marcmansour.dev",
    },
  };

  return (
    <SiteShell activePage="blog" showFooterCta={false}>
      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />

        <header className="border-b border-[var(--cobalt)] px-[1.7rem] py-[clamp(2.5rem,6vw,4.75rem)] min-[641px]:px-[var(--page-gutter)]">
          <Link
            className="inline-flex min-h-11 items-center gap-2 font-mono [font-size:var(--type-label)] font-semibold tracking-[0.05em] text-[var(--cobalt)] uppercase no-underline hover:text-[var(--cobalt-dark)] hover:underline"
            href="/blog"
          >
            <ArrowLeftIcon aria-hidden="true" weight="bold" />
            All writing
          </Link>

          <div className="mt-8 grid gap-8 min-[901px]:grid-cols-[minmax(0,1fr)_12rem] min-[901px]:items-end">
            <div>
              <h1 className="m-0 max-w-[22ch] font-serif text-[clamp(2.5rem,7vw,4.5rem)] leading-[0.98] font-medium tracking-[-0.03em]">
                {post.title}
              </h1>
              <p className="mt-6 mb-0 max-w-[62ch] text-[clamp(1.05rem,2vw,1.2rem)] leading-[1.68] text-[var(--ink-muted)]">
                {post.description}
              </p>
            </div>

            <dl className="m-0 grid gap-4 border-t border-[var(--cobalt)] pt-4 font-mono [font-size:var(--type-label)] tracking-[0.045em] text-[var(--ink-muted)] uppercase min-[901px]:justify-self-end">
              <div>
                <dt className="text-[var(--cobalt)]">Author</dt>
                <dd className="mt-1 mb-0">{post.author}</dd>
              </div>
              <div>
                <dt className="text-[var(--cobalt)]">Published</dt>
                <dd className="mt-1 mb-0">
                  <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
                </dd>
              </div>
              <div>
                <dt className="text-[var(--cobalt)]">Reading time</dt>
                <dd className="mt-1 mb-0">{post.readingTime} min</dd>
              </div>
            </dl>
          </div>

          {post.tags.length > 0 ? (
            <ul className="mt-7 mb-0 flex list-none flex-wrap gap-2 p-0" aria-label="Topics">
              {post.tags.map((tag) => (
                <li
                  className="border border-[var(--cobalt)] px-2.5 py-1 font-mono [font-size:var(--type-micro)] font-semibold tracking-[0.055em] text-[var(--cobalt)] uppercase"
                  key={tag}
                >
                  {tag}
                </li>
              ))}
            </ul>
          ) : null}
        </header>

        <article className="px-[1.7rem] py-[clamp(3rem,7vw,5.5rem)] min-[641px]:px-[var(--page-gutter)]">
          <ArticleMarkdown content={post.content} />
        </article>

        <nav
          className="border-t border-[var(--cobalt)] px-[1.7rem] py-7 min-[641px]:px-[var(--page-gutter)]"
          aria-label="Article navigation"
        >
          <Link
            className="inline-flex min-h-11 items-center gap-2 font-mono [font-size:var(--type-label)] font-semibold tracking-[0.05em] text-[var(--cobalt)] uppercase no-underline hover:text-[var(--cobalt-dark)] hover:underline"
            href="/blog"
          >
            <ArrowLeftIcon aria-hidden="true" weight="bold" />
            Return to the journal
          </Link>
        </nav>
      </main>
    </SiteShell>
  );
}
