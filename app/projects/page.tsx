import { ArrowRight } from "@phosphor-icons/react/dist/ssr/ArrowRight";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import type { Metadata } from "next";
import Image from "next/image";

import { SavyyProductSpecimen } from "./_components/savyy-product-specimen";
import { SavyyCaseStudy } from "./_components/savyy-case-study";
import { SiteShell } from "@/components/site-shell";
import { savyyProject } from "@/lib/projects";

const directionContract = `<!--
THESIS: One complete production product reveals more about Marc's work than a shelf of tutorial builds.
OWN-WORLD: The Activity Ledger becomes a midnight founder dossier with continuous cobalt rules, monumental slab-serif testimony, real Savyy evidence, sparse lime data marks, and one red proof gesture.
STORY: Establish solo ownership, show the working product, then inspect its product decisions, systems, platform delivery, privacy boundaries, and release practice before opening Savyy.
FIRST VIEWPORT: A 37/63 founder-thesis and product-evidence split fills the fold; a desktop specimen sits behind overlapping mobile screens, followed by one three-field proof register and the first line of the deeper case.
FORM: One Product, All the Way Through, ranked sixth and dealt first, seed key 5626e9fb.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->`;

const directionContractMarkup = { __html: directionContract } as const;

export const metadata: Metadata = {
  title: "Projects · Savyy",
  description:
    "How Marc Mansour designed, engineered, and shipped Savyy alone across product, web, mobile, banking, AI, infrastructure, and security.",
  alternates: { canonical: "/projects" },
  openGraph: {
    type: "article",
    url: "/projects",
    title: "Savyy · A solo full-stack build by Marc Mansour",
    description:
      "A detailed founder and builder case study covering Savyy from product idea to web, iOS, Android, open banking, privacy, and production delivery.",
  },
};

const storeLinks = [
  {
    label: "Download Savyy on the App Store",
    href: savyyProject.appStoreUrl,
    image: "/savyy/app-store-badge.svg",
    width: 126,
    height: 42,
  },
  {
    label: "Get Savyy on Google Play",
    href: savyyProject.playStoreUrl,
    image: "/savyy/google-play-badge.png",
    width: 140,
    height: 54,
  },
] as const;

const openingIndex = [
  {
    label: "Product",
    body: "One view for accounts, budgets, markets, assets, and everyday spending.",
  },
  {
    label: "Systems",
    body: "Bank connectivity, transaction processing, private categorization, alerts, billing, and infrastructure.",
  },
  {
    label: "Releases",
    body: "One shared product across the web, App Store, and Google Play.",
  },
] as const;

export default function ProjectsPage() {
  return (
    <SiteShell activePage="projects">
      <div
        hidden
        data-direction-contract="one-product-manifesto"
        dangerouslySetInnerHTML={directionContractMarkup}
      />
      <main className="overflow-clip" id="main-content">
        <header className="grid border-b border-[var(--cobalt)] min-[901px]:grid-cols-[minmax(20rem,0.82fr)_minmax(0,1.18fr)]">
          <div className="flex min-w-0 flex-col justify-center border-b border-[var(--cobalt)] px-[1.7rem] py-[clamp(3.5rem,6vw,5rem)] min-[641px]:px-[var(--page-gutter)] min-[901px]:border-r min-[901px]:border-b-0">
            <div className="relative w-full">
              <div>
                <h1 className="m-0 max-w-[16ch] text-balance font-serif text-[clamp(2.25rem,8vw,2.75rem)] leading-[1.02] font-medium tracking-[-0.025em] min-[641px]:text-[var(--type-display)]">
                  One serious product. All the way through.
                </h1>
                <p className="mt-5 mb-0 max-w-[42ch] text-[1rem] leading-[1.65] text-[var(--ink-muted)]">
                  I built Savyy alone, from product and interface to banking,
                  AI, mobile, infrastructure, and security.
                </p>

                <div className="mt-7 flex flex-col items-stretch gap-3 min-[641px]:flex-row min-[641px]:items-center min-[641px]:flex-wrap min-[901px]:flex-nowrap">
                  <a
                    className="inline-flex min-h-14 w-full items-center justify-between gap-8 border border-[var(--cobalt)] bg-[var(--cobalt)] px-5 py-3 font-mono [font-size:var(--type-control)] font-semibold tracking-[0.035em] text-[var(--on-cobalt)] uppercase no-underline transition-[background-color,transform] duration-[180ms] hover:-translate-y-0.5 hover:bg-[var(--cobalt-dark)] min-[641px]:w-[12rem]"
                    href={savyyProject.appUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>
                      Open
                      <br />
                      Savyy.app
                    </span>
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </a>

                  <div
                    className="flex flex-wrap items-center gap-2"
                    aria-label="Savyy mobile downloads"
                  >
                    {storeLinks.map((store) => (
                      <a
                        className="grid min-h-12 w-[7.75rem] shrink-0 place-items-center border border-[var(--rule-soft)] bg-[#05070b] px-2 no-underline transition-[border-color,transform] duration-[180ms] hover:-translate-y-0.5 hover:border-[var(--cobalt)]"
                        href={store.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={store.label}
                        key={store.label}
                      >
                        <Image
                          className="h-9 w-auto object-contain"
                          src={store.image}
                          width={store.width}
                          height={store.height}
                          sizes={`${store.width}px`}
                          alt=""
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <SavyyProductSpecimen />
        </header>

        <ul className="m-0 grid list-none grid-cols-1 border-b border-[var(--cobalt)] p-0 min-[641px]:grid-cols-3">
          {savyyProject.proof.map((fact) => (
            <li
              className="flex min-h-[5.5rem] items-center gap-4 border-b border-[var(--rule-soft)] px-[1.7rem] py-5 font-mono [font-size:var(--type-control)] tracking-[0.09em] text-[var(--ink)] uppercase last:border-b-0 min-[641px]:justify-center min-[641px]:border-r min-[641px]:border-b-0 min-[641px]:px-5 min-[641px]:last:border-r-0"
              key={fact}
            >
              <span
                className="size-2.5 shrink-0 bg-[var(--lime)]"
                aria-hidden="true"
              />
              {fact}
            </li>
          ))}
        </ul>

        <section
          className="grid min-[641px]:grid-cols-3"
          aria-labelledby="case-index-title"
        >
          <h2 className="sr-only" id="case-index-title">
            Savyy case study index
          </h2>
          {openingIndex.map((item, index) => (
            <article
              className="relative border-b border-[var(--cobalt)] px-[1.7rem] py-7 min-[641px]:border-r min-[641px]:px-[clamp(1.5rem,3vw,2.5rem)] min-[641px]:last:border-r-0"
              key={item.label}
            >
              <h3 className="m-0 font-mono [font-size:var(--type-control)] tracking-[0.08em] text-[var(--cobalt)] uppercase">
                {item.label}
              </h3>
              <p className="mt-3 mb-0 max-w-[34rem] text-[0.9rem] leading-[1.6] text-[var(--ink-muted)]">
                {item.body}
              </p>
              <a
                className="absolute inset-0 no-underline outline-offset-[-6px]"
                href={
                  index === 0
                    ? "#product"
                    : index === 1
                      ? "#systems"
                      : "#releases"
                }
                aria-label={`Jump to ${item.label}`}
              />
              <ArrowUpRight
                className="mt-4 size-4 text-[var(--cobalt)]"
                aria-hidden="true"
              />
            </article>
          ))}
        </section>

        <SavyyCaseStudy />
      </main>

    </SiteShell>
  );
}
