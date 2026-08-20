import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowRight";
import type { Metadata, Route } from "next";
import Link from "next/link";

import { SiteShell } from "@/components/site-shell";
import { getBlogDateParts, getBlogPosts } from "@/lib/blog";

const directionContract = `<!--
THESIS: Writing is a dated, inspectable body of work rather than a grid of interchangeable cards.
OWN-WORLD: The Activity Ledger becomes a chronological journal with recycled paper, cobalt rules, serif titles, mono dates, and one sparse lime current marker.
STORY: Readers identify the journal, see newest-first ordering immediately, scan each premise, and open the article that earns their attention.
FIRST VIEWPORT: A compact Writing masthead sits above a vertical date ledger; the newest entries occupy full-width ruled rows with date, subject, reading time, premise, and action.
FORM: Annotated Chronology, grounded surface structure 3, seed 6e0a22f7.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->`;

const directionContractMarkup = { __html: directionContract } as const;

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Notes by Marc Mansour on software, financial tools, and the systems between them.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: "/blog",
    title: "Writing · Marc Mansour",
    description:
      "Notes on software, financial tools, and the systems between them.",
  },
};

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const articleCount = new Intl.NumberFormat("en-GB", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  }).format(posts.length);

  return (
    <SiteShell showFooterCta={false}>
      <div
        hidden
        data-direction-contract="blog-annotated-chronology-6e0a22f7"
        dangerouslySetInnerHTML={directionContractMarkup}
      />

      <main id="main-content">
        <section
          className="grid gap-8 border-b border-[var(--cobalt)] px-[1.7rem] py-[clamp(2.75rem,6vw,4.5rem)] min-[641px]:px-[var(--page-gutter)] min-[901px]:grid-cols-[minmax(0,1fr)_auto] min-[901px]:items-end"
          aria-labelledby="blog-title"
        >
          <div>
            <h1
              className="m-0 max-w-[12ch] font-serif text-[clamp(3rem,8vw,4.6rem)] leading-[0.96] font-medium tracking-[-0.03em]"
              id="blog-title"
            >
              Writing
            </h1>
            <p className="mt-5 mb-0 max-w-[56ch] text-[clamp(1rem,2vw,1.08rem)] leading-[1.7] text-[var(--ink-muted)]">
              Practical notes on software, financial tools, and the systems connecting
              them.
            </p>
          </div>

          <dl className="m-0 grid min-w-[9rem] gap-3 justify-self-start border-t border-[var(--cobalt)] pt-4 font-mono [font-size:var(--type-label)] tracking-[0.055em] uppercase min-[901px]:justify-self-end">
            <div>
              <dt className="font-semibold text-[var(--cobalt)]">Newest first</dt>
              <dd className="mt-2 mb-0 text-[var(--ink-muted)]">
                {articleCount} {posts.length === 1 ? "article" : "articles"}
              </dd>
            </div>
          </dl>
        </section>

        {posts.length > 0 ? (
          <section aria-label="Articles ordered from newest to oldest">
            {posts.map((post, index) => {
              const date = getBlogDateParts(post.date);
              const href = `/blog/${post.slug}` as Route;

              return (
                <article className="border-b border-[var(--cobalt)]" key={post.slug}>
                  <Link
                    className="group grid min-w-0 grid-cols-1 text-[var(--ink)] no-underline transition-colors duration-[180ms] hover:bg-[var(--selection-surface)] min-[701px]:grid-cols-[10rem_minmax(0,1fr)] min-[1100px]:grid-cols-[10rem_minmax(0,1fr)_9rem]"
                    href={href}
                    aria-label={`Read ${post.title}`}
                  >
                    <div className="relative flex items-end gap-3 border-b border-[var(--rule-soft)] px-[1.7rem] py-5 min-[641px]:px-[var(--page-gutter)] min-[701px]:block min-[701px]:border-r min-[701px]:border-b-0 min-[701px]:px-6 min-[701px]:py-8">
                      {index === 0 ? (
                        <span
                          className="absolute top-5 left-[1.7rem] size-2.5 bg-[var(--lime)] min-[641px]:left-[var(--page-gutter)] min-[701px]:left-6"
                          aria-label="Newest article"
                        />
                      ) : null}
                      <time
                        className="grid grid-cols-[auto_auto] items-baseline gap-x-2 font-mono tabular-nums min-[701px]:mt-9 min-[701px]:grid-cols-1 min-[701px]:gap-y-1"
                        dateTime={post.date}
                      >
                        <span className="[font-size:var(--type-label)] tracking-[0.06em] text-[var(--ink-muted)]">
                          {date.year}
                        </span>
                        <span className="font-serif text-[1.875rem] leading-none font-medium tracking-[-0.02em]">
                          {date.day} {date.month}
                        </span>
                      </time>
                    </div>

                    <div className="min-w-0 px-[1.7rem] py-7 min-[641px]:px-[var(--page-gutter)] min-[701px]:px-8 min-[701px]:py-8">
                      <div className="min-w-0">
                        <p className="m-0 font-mono [font-size:var(--type-label)] font-semibold tracking-[0.055em] text-[var(--cobalt)] uppercase">
                          {post.tags.length > 0 ? post.tags.join(" / ") : "Field note"}
                          <span className="px-2 text-[var(--ink-muted)]" aria-hidden="true">
                            ·
                          </span>
                          {post.readingTime} min read
                        </p>
                        <h2 className="mt-4 mb-0 max-w-[28ch] font-serif text-[clamp(1.65rem,3.4vw,2.35rem)] leading-[1.05] font-medium tracking-[-0.025em] transition-colors group-hover:text-[var(--cobalt)]">
                          {post.title}
                        </h2>
                        <p className="mt-4 mb-0 max-w-[66ch] leading-[1.65] text-[var(--ink-muted)]">
                          {post.description}
                        </p>
                      </div>
                    </div>

                    <span className="flex min-h-12 items-center justify-between gap-4 border-t border-[var(--rule-soft)] px-[1.7rem] py-4 font-mono [font-size:var(--type-label)] font-semibold tracking-[0.055em] text-[var(--cobalt)] uppercase min-[641px]:px-[var(--page-gutter)] min-[701px]:col-span-2 min-[1100px]:col-span-1 min-[1100px]:border-t-0 min-[1100px]:border-l min-[1100px]:px-5">
                      Read article
                      <ArrowRightIcon
                        className="size-4 transition-transform duration-[180ms] group-hover:translate-x-1"
                        aria-hidden="true"
                        weight="bold"
                      />
                    </span>
                  </Link>
                </article>
              );
            })}
          </section>
        ) : (
          <section className="px-[1.7rem] py-16 min-[641px]:px-[var(--page-gutter)]">
            <p className="m-0 font-serif text-[clamp(1.75rem,4vw,2.4rem)] leading-tight">
              The first field note is being prepared.
            </p>
            <p className="mt-4 mb-0 max-w-[52ch] text-[var(--ink-muted)]">
              New writing will appear here in publication order.
            </p>
          </section>
        )}
      </main>
    </SiteShell>
  );
}
