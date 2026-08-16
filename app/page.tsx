import { ArrowRight } from "@phosphor-icons/react/dist/ssr/ArrowRight";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import { FilePdf } from "@phosphor-icons/react/dist/ssr/FilePdf";
import Link from "next/link";

import { FinancialCaseFile } from "@/components/financial-case-file";
import { GitHubActivity } from "@/components/github-activity";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { featuredProject } from "@/lib/projects";
import { publicProfile } from "@/lib/public-profile";
import { cn } from "@/lib/utils";

const directionContract = `<!--
THESIS: Public work is a continuous record, not a polished sales deck.
OWN-WORLD: An analyst's working paper built from ledger rules, paper grain, index tabs, proof marks, and inspectable code/finance evidence.
STORY: Introduce Marc's finance-software thesis, inspect Savyy as the sole featured project, read live public activity, then continue into about, resume, writing, and contact.
FIRST VIEWPORT: Asymmetric thesis left and layered app case right, crossed by a full-width recent-public-activity ledger.
FORM: Activity Ledger, the first-choice experience form; semantic Server Components, cached GitHub GraphQL contribution counts plus public REST detail, tactile raster paper, crisp SVG geometry, and seed key activity-ledger.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->`;

const directionContractMarkup = { __html: directionContract } as const;

const shellClass =
  "relative isolate mx-auto min-h-screen w-[min(100%,var(--content-width))] border-x-0 border-[var(--rule-soft)] bg-[var(--shell-surface)] before:pointer-events-none before:fixed before:top-0 before:bottom-0 before:left-[0.8rem] before:-z-10 before:w-px before:bg-[var(--margin-rule)] before:content-[''] min-[641px]:before:left-[1.1rem] min-[901px]:border-x min-[901px]:before:left-[max(1.15rem,calc((100vw-var(--content-width))/2+4rem))]";

const actionClass =
  "inline-flex min-h-[3.55rem] w-full min-w-[13.5rem] items-center justify-between gap-[1.7rem] rounded-[2px] border border-[var(--cobalt)] py-[0.85rem] pr-4 pl-5 font-mono [font-size:var(--type-control)] font-semibold tracking-[0.02em] no-underline transition-[background-color,color,transform] duration-[180ms] hover:-translate-y-0.5 min-[641px]:w-auto [&_svg]:size-[1.1rem]";

const binderArticleClass =
  "flex min-h-[25rem] min-w-0 flex-col justify-end border-b border-[var(--cobalt)] px-[1.7rem] py-16 min-[641px]:min-h-[30rem] min-[641px]:border-r min-[641px]:border-b-0 min-[641px]:px-[var(--page-gutter)] min-[641px]:py-[clamp(3rem,5vw,5rem)] min-[641px]:supports-[grid-template-rows:subgrid]:grid min-[641px]:supports-[grid-template-rows:subgrid]:min-h-0 min-[641px]:supports-[grid-template-rows:subgrid]:grid-rows-subgrid min-[641px]:supports-[grid-template-rows:subgrid]:justify-normal min-[641px]:supports-[grid-template-rows:subgrid]:py-0";

const binderHeadingClass =
  "m-0 max-w-[14ch] [overflow-wrap:anywhere] text-wrap font-serif text-[clamp(2.65rem,4.2vw,4.25rem)] leading-[1.02] font-medium tracking-[-0.02em] min-[641px]:supports-[grid-template-rows:subgrid]:row-start-2 min-[641px]:supports-[grid-template-rows:subgrid]:self-start";

const binderCopyClass =
  "mt-[1.8rem] mb-0 max-w-[42rem] [overflow-wrap:anywhere] [font-size:var(--type-body)] leading-[1.7] text-[var(--ink-muted)] min-[641px]:supports-[grid-template-rows:subgrid]:row-start-3 min-[641px]:supports-[grid-template-rows:subgrid]:self-start";

const binderLinkClass =
  "mt-[2.3rem] inline-flex items-center gap-[0.55rem] font-mono [font-size:var(--type-label)] font-semibold text-[var(--cobalt)] hover:text-[var(--cobalt-dark)] min-[641px]:supports-[grid-template-rows:subgrid]:row-start-4 min-[641px]:supports-[grid-template-rows:subgrid]:self-start min-[641px]:supports-[grid-template-rows:subgrid]:justify-self-start";

export default function Home() {
  return (
    <div className={shellClass}>
      <div
        hidden
        data-direction-contract="activity-ledger"
        dangerouslySetInnerHTML={directionContractMarkup}
      />
      <a
        className="fixed top-3 left-3 z-100 -translate-y-[160%] border border-[var(--cobalt)] bg-[var(--paper-raised)] px-4 py-[0.7rem] font-mono [font-size:var(--type-label)] text-[var(--ink)] uppercase focus:translate-y-0"
        href="#main-content"
      >
        Skip to content
      </a>
      <SiteHeader />

      <main id="main-content">
        <section
          className="relative scroll-mt-[5.9rem] min-[901px]:scroll-mt-6"
          id="home"
          aria-labelledby="hero-title"
        >
          <div className="grid min-h-[33.25rem] grid-cols-1 border-b border-[var(--cobalt)] min-[901px]:grid-cols-[minmax(20rem,0.8fr)_minmax(32rem,1.2fr)] min-[1181px]:grid-cols-[minmax(26rem,1fr)_minmax(38rem,1.3fr)]">
            <div className="flex min-h-0 flex-col justify-center border-b border-[var(--cobalt)] [padding:5rem_1.25rem_3rem_1.7rem] min-[641px]:min-h-[34rem] min-[641px]:[padding:6rem_clamp(2rem,3vw,3.5rem)_2.5rem_var(--page-gutter)] min-[901px]:min-h-0 min-[901px]:border-r min-[901px]:border-b-0 min-[901px]:[padding:4.5rem_clamp(2rem,3vw,3.5rem)_2.5rem_var(--page-gutter)]">
              <h1
                className="m-0 max-w-[10ch] font-serif text-[clamp(3.4rem,16vw,4.5rem)] leading-[0.96] font-semibold tracking-[-0.025em] min-[641px]:text-[clamp(3.75rem,5.4vw,5.25rem)] min-[901px]:max-w-[11ch]"
                id="hero-title"
              >
                Developer focused on financial tools.
              </h1>
              <p className="mt-6 mb-0 max-w-[34rem] text-base leading-[1.65] text-[var(--ink-muted)] min-[641px]:text-[clamp(1rem,1.15vw,1.125rem)]">
                I build and write about technology, development, and finance—making
                complex systems easier to inspect and use.
              </p>
              <div className="mt-7 flex flex-col gap-3 min-[641px]:flex-row min-[641px]:flex-wrap">
                <a
                  className={cn(
                    actionClass,
                    "bg-[var(--cobalt)] text-[var(--on-cobalt)] hover:bg-[var(--cobalt-dark)]",
                  )}
                  href="/projects"
                >
                  Explore my work <ArrowRight aria-hidden="true" />
                </a>
                <a
                  className={cn(
                    actionClass,
                    "bg-[var(--action-surface)] text-[var(--cobalt)] hover:bg-[var(--paper-raised)] hover:text-[var(--cobalt-dark)]",
                  )}
                  href={publicProfile.blog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read the journal <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
              <p className="mt-[1.8rem] mb-0 pt-5 font-mono [font-size:var(--type-micro)] tracking-[0.065em] text-[var(--cobalt)] uppercase min-[641px]:mt-auto">
                Finance × software · Paris
              </p>
            </div>
            <FinancialCaseFile projectName={featuredProject.name} />
          </div>
          <GitHubActivity />
          <svg
            className="pointer-events-none absolute top-[29.2rem] left-[48.5%] z-9 hidden h-[7.6rem] w-76 overflow-visible text-[var(--cobalt)] min-[1181px]:block [&>path]:fill-none [&>path]:stroke-current [&>path]:stroke-[2.2] [&>path]:[stroke-linecap:round] [&_marker_path]:fill-none [&_marker_path]:stroke-current [&_marker_path]:stroke-[1.7] [&_marker_path]:[stroke-linecap:round] [&_marker_path]:[stroke-linejoin:round]"
            viewBox="0 0 300 120"
            aria-hidden="true"
          >
            <defs>
              <marker
                id="ledger-arrowhead"
                markerWidth="10"
                markerHeight="10"
                refX="8"
                refY="5"
                orient="auto"
              >
                <path d="M1 1L9 5L1 9" />
              </marker>
            </defs>
            <path d="M292 8C214 18 92 40 16 108" markerEnd="url(#ledger-arrowhead)" />
          </svg>
        </section>

        <section
          className="scroll-mt-[5.9rem] border-b border-[var(--cobalt)] px-[var(--page-gutter)] py-20 min-[641px]:py-[clamp(5rem,8vw,8.5rem)] min-[901px]:scroll-mt-6"
          id="projects"
        >
          <header className="mb-14 grid grid-cols-1 items-start gap-10 min-[641px]:mb-[4.5rem] min-[901px]:grid-cols-[minmax(0,1.3fr)_minmax(20rem,0.7fr)] min-[901px]:items-end min-[901px]:gap-[clamp(3rem,8vw,9rem)]">
            <h2 className="m-0 max-w-[14ch] font-serif text-[clamp(3rem,14vw,4rem)] leading-[0.98] font-semibold tracking-[-0.025em] min-[641px]:text-[clamp(3rem,5vw,5rem)]">
              One financial tool, built for the whole picture.
            </h2>
            <p className="m-0 max-w-[68ch] [font-size:var(--type-body-lg)] leading-[1.7] text-[var(--ink-muted)] min-[901px]:max-w-[38rem]">
              Savyy brings accounts, transactions, budgets, and market context into
              one privacy-first product for people across France and Europe.
            </p>
          </header>

          <article
            className="relative grid grid-cols-1 border-y border-[var(--cobalt)] bg-[var(--dossier-surface)] [background-blend-mode:normal,var(--paper-texture-blend)] [background-image:linear-gradient(var(--dossier-texture-wash),var(--dossier-texture-wash)),url('/paper-texture.webp')] [background-size:720px] after:absolute after:top-[-1.7rem] after:right-4 after:h-[1.7rem] after:w-32 after:border after:border-b-0 after:border-[var(--cobalt)] after:bg-[var(--paper-deep)] after:text-center after:font-mono after:[font-size:var(--type-micro)] after:leading-[1.7rem] after:text-[var(--cobalt)] after:content-['CASE_/_01'] min-[641px]:after:right-8 min-[901px]:grid-cols-[minmax(0,1.08fr)_minmax(24rem,0.92fr)]"
            aria-labelledby="savyy-title"
          >
            <div className="border-b border-[var(--cobalt)] px-6 py-12 min-[641px]:p-[clamp(2.5rem,5vw,5.5rem)] min-[901px]:border-r min-[901px]:border-b-0">
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
              <h3
                className="mt-10 mb-0 font-serif text-[4.5rem] leading-[0.92] font-medium tracking-[-0.025em] min-[641px]:text-[clamp(4rem,6.5vw,6rem)]"
                id="savyy-title"
              >
                {featuredProject.name}
              </h3>
              <p className="mt-8 mb-0 max-w-[39rem] [font-size:var(--type-body-lg)] leading-[1.7] text-[var(--ink-muted)]">
                {featuredProject.description}
              </p>
              <a
                className="mt-[2.3rem] inline-flex items-center gap-[0.55rem] font-mono [font-size:var(--type-label)] font-semibold text-[var(--cobalt)] hover:text-[var(--cobalt-dark)]"
                href={featuredProject.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Savyy <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
            <dl className="m-0 grid content-center px-6 py-12 min-[641px]:p-[clamp(2.5rem,5vw,5.5rem)]">
              {featuredProject.details.map((detail) => (
                <div
                  className="grid grid-cols-1 gap-[0.8rem] border-b border-[var(--rule-soft)] py-6 last:border-b-0 min-[641px]:grid-cols-[minmax(7rem,0.65fr)_minmax(0,1.35fr)] min-[641px]:gap-6"
                  key={detail.label}
                >
                  <dt className="font-mono [font-size:var(--type-micro)] tracking-[0.06em] text-[var(--cobalt)] uppercase">
                    {detail.label}
                  </dt>
                  <dd className="m-0 font-serif text-[1.1875rem] leading-[1.4] italic">
                    {detail.value}
                  </dd>
                </div>
              ))}
            </dl>
          </article>
        </section>

        <section
          className="grid grid-cols-1 border-b border-[var(--cobalt)] p-0 min-[641px]:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] min-[641px]:max-[1180px]:supports-[grid-template-rows:subgrid]:grid-rows-[clamp(3rem,5vw,5rem)_auto_auto_auto_clamp(3rem,5vw,5rem)_clamp(3rem,5vw,5rem)_auto_auto_auto_clamp(3rem,5vw,5rem)] min-[1181px]:min-h-[30rem] min-[1181px]:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)_minmax(0,1fr)] min-[1181px]:supports-[grid-template-rows:subgrid]:grid-rows-[clamp(3rem,5vw,5rem)_auto_auto_auto_clamp(3rem,5vw,5rem)]"
          aria-label="About, resume, and blog"
        >
          <article
            className={cn(
              binderArticleClass,
              "min-[641px]:max-[1180px]:supports-[grid-template-rows:subgrid]:col-start-1 min-[641px]:max-[1180px]:supports-[grid-template-rows:subgrid]:[grid-row:1/6] min-[1181px]:supports-[grid-template-rows:subgrid]:col-start-1 min-[1181px]:supports-[grid-template-rows:subgrid]:[grid-row:1/-1]",
            )}
            id="about"
          >
            <h2 className={binderHeadingClass}>
              Finance gives me the questions. Software gives me a way to test them.
            </h2>
            <p className={binderCopyClass}>
              I work in investment banking. The technical challenges I meet there
              pushed me toward software development.
            </p>
            <Link className={binderLinkClass} href="/about">
              Read my story <ArrowRight aria-hidden="true" />
            </Link>
          </article>
          <article
            className={cn(
              binderArticleClass,
              "min-[641px]:max-[1180px]:border-r-0 min-[641px]:max-[1180px]:supports-[grid-template-rows:subgrid]:col-start-2 min-[641px]:max-[1180px]:supports-[grid-template-rows:subgrid]:[grid-row:1/6] min-[1181px]:supports-[grid-template-rows:subgrid]:col-start-2 min-[1181px]:supports-[grid-template-rows:subgrid]:[grid-row:1/-1]",
            )}
            id="resume"
          >
            <h2 className={binderHeadingClass}>How the work gets done.</h2>
            <p className={binderCopyClass}>A concise record of my experience and tools.</p>
            <a
              className={binderLinkClass}
              href={publicProfile.resume.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FilePdf aria-hidden="true" /> Open résumé
            </a>
          </article>
          <article
            className={cn(
              binderArticleClass,
              "border-b-0 min-[641px]:col-span-full min-[641px]:min-h-[23rem] min-[641px]:border-t min-[641px]:border-r-0 min-[1181px]:col-span-1 min-[1181px]:min-h-[30rem] min-[1181px]:border-t-0 min-[641px]:max-[1180px]:supports-[grid-template-rows:subgrid]:min-h-0 min-[641px]:max-[1180px]:supports-[grid-template-rows:subgrid]:[grid-row:6/11] min-[1181px]:supports-[grid-template-rows:subgrid]:col-start-3 min-[1181px]:supports-[grid-template-rows:subgrid]:[grid-row:1/-1]",
            )}
            id="blog"
          >
            <h2 className={binderHeadingClass}>
              Field notes for builders and finance-minded readers.
            </h2>
            <p className={binderCopyClass}>
              Technology, development, and finance—written for a broad public.
            </p>
            <a
              className={binderLinkClass}
              href={publicProfile.blog.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit the blog <ArrowUpRight aria-hidden="true" />
            </a>
          </article>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
