import { ArrowRight } from "@phosphor-icons/react/dist/ssr/ArrowRight";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import { FilePdf } from "@phosphor-icons/react/dist/ssr/FilePdf";
import { Paperclip } from "@phosphor-icons/react/dist/ssr/Paperclip";
import type { Metadata } from "next";
import Link from "next/link";

import { SiteShell } from "@/components/site-shell";
import { aboutDossier } from "@/lib/about";
import { featuredProject } from "@/lib/projects";
import { publicProfile } from "@/lib/public-profile";
import { cn } from "@/lib/utils";

const directionContract = `<!--
THESIS: Investment-banking work keeps producing technical questions; software is how Marc investigates and builds through them.
OWN-WORLD: The Activity Ledger becomes a clipped personal dossier built from ruled paper, cobalt rules, index tabs, proof marks, and inspectable first-person evidence.
STORY: Present role, technical pressure, software method, public work, current practice, then contact.
FIRST VIEWPORT: A dominant statement and clipped position slip lead immediately into four dossier leaves, an action strip, and a compact index bar.
FORM: Working Dossier, proposition 1, seed key working-dossier. Static semantic Next.js App Router Server Component, route-aware shared navigation, and no page-specific client data.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md.
-->`;

const directionContractMarkup = { __html: directionContract } as const;

const ruledSheet =
  "[background:repeating-linear-gradient(to_bottom,transparent_0,transparent_31px,var(--rule-faint)_31px,var(--rule-faint)_32px),var(--case-sheet-surface)]";

const ruledLeaf =
  "[background:repeating-linear-gradient(to_bottom,transparent_0,transparent_31px,var(--rule-faint)_31px,var(--rule-faint)_32px),var(--dossier-surface)]";

const actionBase =
  "inline-flex min-h-[3.25rem] w-full min-w-0 items-center justify-between gap-[1.7rem] rounded-[2px] border border-[var(--cobalt)] px-4 py-[0.85rem] pl-5 font-mono [font-size:var(--type-control)] font-semibold tracking-[0.02em] no-underline transition-[background-color,color,transform] duration-180 hover:-translate-y-0.5 min-[641px]:w-auto min-[641px]:min-w-[13.5rem]";

export const metadata: Metadata = {
  title: "About",
  description:
    "How Marc Mansour’s work in investment banking led to software development, financial tools, and public writing.",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "profile",
    url: "/about",
    title: "About Marc Mansour",
    description:
      "Investment banking, software development, and the technical questions connecting the two.",
  },
};

export default function AboutPage() {
  return (
    <SiteShell>
      <div
        hidden
        data-direction-contract="working-dossier"
        dangerouslySetInnerHTML={directionContractMarkup}
      />
      <main className="overflow-clip" id="main-content">
        <header className="relative grid grid-cols-1 border-b border-[var(--cobalt)] min-[901px]:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)]">
          <div className="flex min-w-0 flex-col justify-center border-b border-[var(--cobalt)] px-[1.7rem] py-[clamp(3.5rem,6vw,5rem)] min-[641px]:px-[var(--page-gutter)] min-[901px]:border-r min-[901px]:border-b-0">
            <h1 className="m-0 max-w-[18ch] text-balance font-serif text-[clamp(2.25rem,8vw,2.75rem)] leading-[1.02] font-medium tracking-[-0.025em] min-[641px]:text-[var(--type-display)]">
              {aboutDossier.title}
            </h1>
            <p className="mt-[1.45rem] mb-0 max-w-[72ch] text-base leading-[1.6] text-[var(--ink-muted)] min-[641px]:[font-size:var(--type-body-lg)]">
              {aboutDossier.lead}
            </p>
          </div>

          <aside
            className={cn(
              "relative isolate z-0 grid min-h-64 w-auto content-center self-center justify-self-auto border border-[var(--cobalt)] p-8 [margin:3rem_1.7rem] shadow-[0_20px_38px_-28px_var(--shadow-strong)] before:absolute before:-z-10 before:border before:border-[var(--case-stock-rule)] before:bg-[var(--case-stock)] before:shadow-[0_14px_28px_-24px_var(--shadow-medium)] before:content-[''] before:[inset:0.75rem_-0.75rem_-0.75rem_0.75rem] after:absolute after:top-[-1.1rem] after:right-[1.65rem] after:z-2 after:size-9 after:rotate-2 after:border after:bg-[var(--lime)] after:shadow-[0_3px_7px_var(--shadow-soft)] after:content-[''] after:[border-color:color-mix(in_srgb,var(--lime)_78%,var(--ink))] min-[641px]:mx-[var(--page-gutter)] min-[641px]:my-12 min-[641px]:min-h-0 min-[641px]:w-[min(30rem,calc(100%_-_2_*_var(--page-gutter)))] min-[641px]:justify-self-center min-[641px]:[padding:2rem_1.8rem_1.75rem] min-[901px]:mx-8 min-[901px]:my-10 min-[901px]:w-auto min-[901px]:justify-self-auto",
              ruledSheet,
            )}
            aria-label="Current position"
          >
            <Paperclip
              className="absolute top-[-2.2rem] left-[1.65rem] z-3 size-[3.6rem] -rotate-5 text-[var(--clip-ink)] drop-shadow-[0_2px_1px_var(--shadow-soft)]"
              aria-hidden="true"
            />
            <span className="border-b border-[var(--cobalt)] pb-[1.1rem] font-mono [font-size:var(--type-label)] tracking-[0.06em] text-[var(--cobalt)] uppercase">
              {aboutDossier.position.label}
            </span>
            <strong className="mt-6 font-serif text-[clamp(1.75rem,2.5vw,2.25rem)] leading-[1.08] font-medium">
              {aboutDossier.position.value}
            </strong>
            <small className="mt-5 font-mono [font-size:var(--type-label)] tracking-[0.06em] text-[var(--ink-muted)] uppercase">
              {aboutDossier.position.context}
            </small>
          </aside>
        </header>

        <section
          className="border-b border-[var(--cobalt)] px-[1.7rem] pt-[3.25rem] min-[641px]:px-[var(--page-gutter)]"
          aria-labelledby="about-story-title"
        >
          <h2 className="sr-only" id="about-story-title">
            From investment banking to public software work
          </h2>
          <div className="grid grid-cols-1 items-start gap-[4rem] min-[641px]:grid-cols-2 min-[641px]:gap-x-4 min-[641px]:gap-y-[4rem]">
            {aboutDossier.leaves.map((leaf) => (
              <article
                className={cn(
                  "relative flex min-h-[17rem] min-w-0 flex-col border border-[var(--cobalt)] px-6 pt-9 pb-5 min-[641px]:min-h-[15rem] min-[641px]:px-[1.35rem]",
                  ruledLeaf,
                )}
                key={leaf.index}
              >
                <span
                  className="absolute top-[-2.15rem] left-[-1px] grid h-[2.2rem] w-[6.25rem] place-items-center border border-[var(--cobalt)] border-b-[var(--dossier-surface)] bg-[var(--case-sheet-surface)] font-mono [font-size:var(--type-control)] font-bold tracking-[0.05em] text-[var(--cobalt)]"
                  aria-hidden="true"
                >
                  {leaf.index}
                </span>
                <h3 className="m-0 min-h-0 border-b border-[var(--cobalt)] pb-[0.9rem] font-serif text-[clamp(1.15rem,1.35vw,1.45rem)] leading-[1.08] font-medium min-[641px]:min-h-[3.35rem]">
                  {leaf.title}
                </h3>
                <p className="mt-4 mb-0 text-[0.9rem] leading-[1.55] text-[var(--ink-muted)]">
                  {leaf.body}
                </p>
                <p
                  className={cn(
                    "mt-auto mb-0 max-w-56 self-end pt-[0.85rem] text-right font-serif text-[0.925rem] leading-[1.3] italic",
                    leaf.index === "03" &&
                      "rotate-[-3deg] rounded-[50%] border-2 border-[var(--signal)] px-[1.15rem] py-[0.7rem]",
                  )}
                >
                  {leaf.note}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-[0.7rem] grid min-h-[5.25rem] grid-cols-1 items-center gap-4 border-t border-[var(--cobalt)] py-5 min-[901px]:grid-cols-[minmax(16rem,1fr)_auto] min-[901px]:gap-8 min-[901px]:py-0">
            <p className="m-0 font-serif text-[1.05rem] text-[var(--ink-muted)] italic">
              Questions in. Working answers out.
            </p>
            <div className="flex flex-wrap gap-[0.65rem] min-[901px]:flex-nowrap">
              <Link
                className={cn(
                  actionBase,
                  "bg-[var(--cobalt)] text-[var(--on-cobalt)] hover:bg-[var(--cobalt-dark)]",
                )}
                href="/contact"
              >
                Start a conversation <ArrowRight aria-hidden="true" />
              </Link>
              <a
                className={cn(
                  actionBase,
                  "bg-[var(--action-surface)] text-[var(--cobalt)] hover:bg-[var(--paper-raised)] hover:text-[var(--cobalt-dark)]",
                )}
                href={publicProfile.resume.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FilePdf aria-hidden="true" /> Open résumé
              </a>
            </div>
          </div>

          <div
            className="mx-[-1.7rem] grid min-h-12 grid-cols-[1fr_auto] items-center gap-8 border-t border-[var(--cobalt)] bg-[var(--footer-bg)] px-[1.7rem] py-[0.85rem] font-mono [font-size:var(--type-micro)] tracking-[0.055em] text-[var(--footer-ink)] uppercase min-[641px]:mx-[calc(-1_*_var(--page-gutter))] min-[641px]:grid-cols-[1fr_auto_auto] min-[641px]:px-[var(--page-gutter)] min-[641px]:py-0"
            aria-hidden="true"
          >
            <span>Marc Mansour</span>
            <span className="hidden min-[641px]:block">About / Working dossier</span>
            <span>Finance × software</span>
          </div>
        </section>

        <section
          className="grid grid-cols-1 gap-8 border-b border-[var(--cobalt)] px-[1.7rem] py-[clamp(3.75rem,6vw,5rem)] min-[641px]:px-[var(--page-gutter)] min-[901px]:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] min-[901px]:gap-12"
          aria-labelledby="about-practice-title"
        >
          <h2
            className="m-0 max-w-[16ch] text-balance font-serif text-[var(--type-section)] leading-[1.08] font-medium tracking-[-0.025em]"
            id="about-practice-title"
          >
            What I’m building now.
          </h2>
          <div className="max-w-[70ch]">
            {aboutDossier.practice.map((paragraph, index) => (
              <p
                className={cn(
                  "m-0 [font-size:var(--type-body-lg)] leading-[1.8] text-[var(--ink-muted)]",
                  index > 0 && "mt-[1.6rem]",
                )}
                key={paragraph}
              >
                {paragraph}
              </p>
            ))}
            <a
              className="mt-[2.4rem] inline-flex items-center gap-[0.55rem] font-mono [font-size:var(--type-label)] font-semibold text-[var(--cobalt)] hover:text-[var(--cobalt-dark)]"
              href={featuredProject.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore Savyy <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </section>

        <section
          className="grid grid-cols-1 items-start gap-8 bg-[var(--ledger-surface)] px-[1.7rem] py-[clamp(3.5rem,6vw,4.75rem)] min-[641px]:px-[var(--page-gutter)]"
          aria-labelledby="about-closing-title"
        >
          <div>
            <h2
              className="m-0 max-w-[20ch] text-balance font-serif text-[var(--type-section)] leading-[1.08] font-medium tracking-[-0.025em]"
              id="about-closing-title"
            >
              Bring me a question worth testing.
            </h2>
            <p className="mt-8 mb-0 max-w-[65ch] leading-[1.75] text-[var(--ink-muted)]">
              {aboutDossier.closing}
            </p>
          </div>
        </section>
      </main>

    </SiteShell>
  );
}
