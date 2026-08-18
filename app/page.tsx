import { ArrowRight } from "@phosphor-icons/react/dist/ssr/ArrowRight";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import { FilePdf } from "@phosphor-icons/react/dist/ssr/FilePdf";
import Link from "next/link";

import { FinancialCaseFile } from "@/components/financial-case-file";
import { GitHubActivity } from "@/components/github-activity";
import { SiteShell } from "@/components/site-shell";
import { Badge } from "@/components/ui/badge";
import { featuredProject } from "@/lib/projects";
import { cn } from "@/lib/utils";

const directionContract = `<!--
THESIS: Public work is a compact, inspectable record rather than a presentation board.
OWN-WORLD: The Activity Ledger becomes a narrow editorial index with a numbered site rail, quiet type, paper grain, cobalt rules, and source-backed evidence.
STORY: Introduce Marc's finance-software focus, inspect Savyy, read public activity, then continue into about, resume, writing, and contact.
FIRST VIEWPORT: A concise introduction with one primary action; Savyy begins immediately below as the principal proof.
FORM: Compact Index with a vertical numbered navigation rail, a 68rem content field, restrained headings, and locally constrained data.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->`;

const directionContractMarkup = { __html: directionContract } as const;

const actionClass =
  "inline-flex min-h-12 w-full items-center justify-between gap-7 rounded-[2px] border border-[var(--cobalt)] px-5 py-3 font-mono [font-size:var(--type-control)] font-semibold tracking-[0.02em] no-underline transition-[background-color,color,transform] duration-[180ms] hover:-translate-y-0.5 min-[641px]:w-auto [&_svg]:size-[1.05rem]";

const indexRowClass =
  "grid min-w-0 grid-cols-1 gap-4 border-b border-[var(--cobalt)] px-[1.7rem] py-8 min-[641px]:px-[var(--page-gutter)] min-[901px]:grid-cols-[8rem_minmax(0,1fr)_auto] min-[901px]:items-center min-[901px]:gap-8";

const indexTitleClass =
  "m-0 font-serif text-[clamp(1.6rem,3vw,2rem)] leading-[1.15] font-medium tracking-[-0.02em]";

const indexCopyClass =
  "mt-2 mb-0 max-w-[58ch] text-[0.95rem] leading-[1.65] text-[var(--ink-muted)]";

const indexLinkClass =
  "inline-flex min-h-11 items-center gap-2 justify-self-start font-mono [font-size:var(--type-label)] font-semibold text-[var(--cobalt)] no-underline hover:text-[var(--cobalt-dark)] hover:underline min-[901px]:justify-self-end";

export default function Home() {
  return (
    <SiteShell>
      <div
        hidden
        data-direction-contract="compact-activity-index"
        dangerouslySetInnerHTML={directionContractMarkup}
      />

      <main id="main-content">
        <section
          className="scroll-mt-[5.9rem] border-b border-[var(--cobalt)] px-[1.7rem] py-[clamp(3.75rem,7vw,5.75rem)] min-[641px]:px-[var(--page-gutter)] min-[901px]:scroll-mt-6"
          id="home"
          aria-labelledby="hero-title"
        >
          <div className="grid items-end gap-8 min-[901px]:grid-cols-[minmax(0,1fr)_auto] min-[901px]:gap-12">
            <div className="max-w-[var(--reading-width)]">
              <h1
                className="m-0 max-w-[18ch] text-balance font-serif text-[clamp(2.5rem,9vw,3rem)] leading-[1.02] font-medium tracking-[-0.025em] min-[641px]:text-[var(--type-display)]"
                id="hero-title"
              >
                Developer focused on financial tools.
              </h1>
              <p className="mt-5 mb-0 max-w-[58ch] text-base leading-[1.65] text-[var(--ink-muted)]">
                I build and write about technology, development, and finance—making
                complex systems easier to inspect and use.
              </p>
              <p className="mt-6 mb-0 font-mono [font-size:var(--type-micro)] tracking-[0.065em] text-[var(--cobalt)] uppercase">
                Finance × software · Paris
              </p>
            </div>

            <div className="flex flex-col gap-3 min-[641px]:flex-row min-[641px]:flex-wrap min-[901px]:justify-end">
              <a
                className={cn(
                  actionClass,
                  "bg-[var(--cobalt)] text-[var(--on-cobalt)] hover:bg-[var(--cobalt-dark)]",
                )}
                href="/projects"
              >
                Explore my work <ArrowRight aria-hidden="true" />
              </a>
              <Link
                className="inline-flex min-h-11 items-center gap-2 px-1 font-mono [font-size:var(--type-label)] font-semibold text-[var(--cobalt)] no-underline hover:text-[var(--cobalt-dark)] hover:underline min-[901px]:justify-end"
                href="/blog"
              >
                Read the journal <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section
          className="scroll-mt-[5.9rem] border-b border-[var(--cobalt)] min-[901px]:scroll-mt-6"
          id="projects"
          aria-labelledby="savyy-title"
        >
          <div className="mx-auto w-full max-w-[var(--data-width)] px-[1.25rem] py-[clamp(3rem,6vw,4.5rem)] min-[641px]:px-6">
            <div className="grid min-w-0 gap-8 min-[901px]:grid-cols-[minmax(18rem,0.82fr)_minmax(24rem,1.18fr)] min-[901px]:items-center min-[901px]:gap-10">
              <div className="min-w-0">
                <div className="flex flex-wrap gap-2">
                  {featuredProject.badges.map((badge, index) => (
                    <Badge
                      className={cn(
                        "h-[1.7rem] rounded-[2px] border border-[var(--cobalt)] bg-[var(--cobalt)] font-mono [font-size:var(--type-micro)] font-semibold tracking-[0.05em] text-[var(--on-cobalt)] uppercase",
                        index !== 0 && "bg-transparent text-[var(--cobalt)]",
                      )}
                      variant={index === 0 ? "default" : "outline"}
                      key={badge}
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
                <h2
                  className="mt-7 mb-0 font-serif text-[var(--type-project)] leading-none font-medium tracking-[-0.025em]"
                  id="savyy-title"
                >
                  {featuredProject.name}
                </h2>
                <p className="mt-5 mb-0 max-w-[52ch] text-[0.95rem] leading-[1.7] text-[var(--ink-muted)]">
                  {featuredProject.description}
                </p>
                <a
                  className="mt-6 inline-flex min-h-11 items-center gap-2 font-mono [font-size:var(--type-label)] font-semibold text-[var(--cobalt)] no-underline hover:text-[var(--cobalt-dark)] hover:underline"
                  href={featuredProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Savyy <ArrowUpRight aria-hidden="true" />
                </a>
              </div>

              <FinancialCaseFile projectName={featuredProject.name} />
            </div>

            <dl className="mt-8 grid border-t border-[var(--cobalt)] min-[641px]:grid-cols-3">
              {featuredProject.details.map((detail) => (
                <div
                  className="border-b border-[var(--rule-soft)] py-5 min-[641px]:border-r min-[641px]:border-b-0 min-[641px]:px-5 min-[641px]:first:pl-0 min-[641px]:last:border-r-0 min-[641px]:last:pr-0"
                  key={detail.label}
                >
                  <dt className="font-mono [font-size:var(--type-micro)] tracking-[0.06em] text-[var(--cobalt)] uppercase">
                    {detail.label}
                  </dt>
                  <dd className="mt-3 mb-0 font-serif text-[1rem] leading-[1.45] italic">
                    {detail.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <GitHubActivity />

        <section aria-label="About, résumé, and writing">
          <article className={indexRowClass} id="about">
            <p className="m-0 font-mono [font-size:var(--type-label)] tracking-[0.06em] text-[var(--cobalt)] uppercase">
              About
            </p>
            <div>
              <h2 className={indexTitleClass}>Finance meets software.</h2>
              <p className={indexCopyClass}>
                I work in investment banking. The questions I meet there pushed me
                toward software development.
              </p>
            </div>
            <Link className={indexLinkClass} href="/about">
              Read my story <ArrowRight aria-hidden="true" />
            </Link>
          </article>

          <article className={indexRowClass} id="resume">
            <p className="m-0 font-mono [font-size:var(--type-label)] tracking-[0.06em] text-[var(--cobalt)] uppercase">
              Résumé
            </p>
            <div>
              <h2 className={indexTitleClass}>Experience &amp; tools.</h2>
              <p className={indexCopyClass}>A concise record of how the work gets done.</p>
            </div>
            <Link
              className={indexLinkClass}
              href="/cv"
            >
              <FilePdf aria-hidden="true" /> View résumé
            </Link>
          </article>

          <article className={cn(indexRowClass, "border-b-0")} id="blog">
            <p className="m-0 font-mono [font-size:var(--type-label)] tracking-[0.06em] text-[var(--cobalt)] uppercase">
              Writing
            </p>
            <div>
              <h2 className={indexTitleClass}>Technology and finance notes.</h2>
              <p className={indexCopyClass}>
                Public writing for builders and finance-minded readers.
              </p>
            </div>
            <Link
              className={indexLinkClass}
              href="/blog"
            >
              Read the journal <ArrowRight aria-hidden="true" />
            </Link>
          </article>
        </section>
      </main>
    </SiteShell>
  );
}
