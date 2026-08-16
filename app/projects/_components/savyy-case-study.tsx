import { ArrowRight } from "@phosphor-icons/react/dist/ssr/ArrowRight";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import Image from "next/image";

import { savyyProject } from "@/lib/projects";

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

const references = [
  ["Banking connection", savyyProject.documentation.banking],
  ["AI and categorization", savyyProject.documentation.ai],
  ["Security model", savyyProject.documentation.security],
  ["Analytics", savyyProject.documentation.analytics],
] as const;

function SectionIndex({ children }: { children: string }) {
  return (
    <p className="m-0 font-mono [font-size:var(--type-label)] tracking-[0.075em] text-[var(--cobalt)] uppercase">
      {children}
    </p>
  );
}

function SectionRail({ children }: { children: string }) {
  return (
    <div className="flex self-start justify-center pt-1 [writing-mode:vertical-rl] rotate-180">
      <SectionIndex>{children}</SectionIndex>
    </div>
  );
}

function StoreBadges() {
  return (
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
  );
}

export function SavyyCaseStudy() {
  return (
    <>
      <section
        className="scroll-mt-[5.9rem] border-t border-b border-[var(--cobalt)] min-[901px]:scroll-mt-6"
        id="product"
        aria-labelledby="product-title"
      >
        <div className="grid min-[901px]:grid-cols-[minmax(20rem,0.82fr)_minmax(0,1.18fr)]">
          <header className="border-b border-[var(--cobalt)] px-[1.7rem] py-16 min-[641px]:px-[var(--page-gutter)] min-[641px]:py-24 min-[901px]:border-r min-[901px]:border-b-0">
            <div className="grid grid-cols-[2rem_minmax(0,1fr)] gap-5 min-[641px]:grid-cols-[2.5rem_minmax(0,1fr)] min-[641px]:gap-7">
              <SectionRail>01 / Product</SectionRail>
              <div>
                <h2
                  className="m-0 max-w-[10ch] font-serif text-[clamp(3.5rem,13vw,5.2rem)] leading-[0.96] font-semibold tracking-[-0.03em]"
                  id="product-title"
                >
                  Built around a complete financial life.
                </h2>
                <p className="mt-8 mb-0 max-w-[38rem] [font-size:var(--type-body-lg)] leading-[1.7] text-[var(--ink-muted)]">
                  Savyy is the product I wanted to use: one place for the daily
                  details and the longer view, without flattening personal
                  finance into a single score.
                </p>
              </div>
            </div>
          </header>

          <ol className="m-0 list-none p-0">
            {savyyProject.productAreas.map((area) => (
              <li
                className="grid min-h-[13rem] grid-cols-[3.2rem_minmax(0,1fr)] gap-5 border-b border-[var(--rule-soft)] px-[1.7rem] py-10 last:border-b-0 min-[641px]:grid-cols-[4.5rem_minmax(0,1fr)] min-[641px]:px-[var(--page-gutter)] min-[641px]:py-12"
                key={area.index}
              >
                <span className="pt-1 font-mono [font-size:var(--type-label)] text-[var(--signal)]">
                  {area.index}
                </span>
                <div>
                  <h3 className="m-0 font-serif text-[clamp(2rem,7vw,3.15rem)] leading-none font-semibold tracking-[-0.025em]">
                    {area.title}
                  </h3>
                  <p className="mt-5 mb-0 max-w-[43rem] leading-[1.7] text-[var(--ink-muted)]">
                    {area.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="grid border-t border-[var(--cobalt)] min-[901px]:grid-cols-[minmax(0,1.08fr)_minmax(22rem,0.92fr)]">
          <figure className="relative m-0 min-h-[34rem] overflow-hidden bg-[#182947] min-[641px]:min-h-[48rem] min-[901px]:border-r">
            <Image
              className="object-cover object-[50%_63%]"
              src="/savyy/ios-overview.jpg"
              fill
              sizes="(min-width: 901px) 54vw, 100vw"
              alt="Savyy mobile overview showing balances, cash flow, and wealth distribution"
            />
          </figure>
          <div className="flex flex-col justify-between gap-12 px-[1.7rem] py-14 min-[641px]:px-[var(--page-gutter)] min-[641px]:py-20">
            <div>
              <p className="m-0 font-mono [font-size:var(--type-label)] tracking-[0.07em] text-[var(--cobalt)] uppercase">
                Product judgment
              </p>
              <blockquote className="mt-7 mb-0 max-w-[16ch] font-serif text-[clamp(2.7rem,8vw,4.8rem)] leading-[1.02] font-medium tracking-[-0.025em]">
                “Useful finance software should leave the person in charge.”
              </blockquote>
              <p className="mt-8 mb-0 max-w-[38rem] leading-[1.75] text-[var(--ink-muted)]">
                Automation can organize the work, but it should stay
                inspectable. A category can be corrected. An AI feature can be
                declined. A bank can be disconnected. The interface keeps those
                choices visible.
              </p>
            </div>
            <a
              className="inline-flex items-center gap-2 self-start font-mono [font-size:var(--type-label)] font-semibold tracking-[0.04em] text-[var(--cobalt)] uppercase no-underline hover:text-[var(--cobalt-dark)]"
              href={savyyProject.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the product site{" "}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section
        className="scroll-mt-[5.9rem] border-b border-[var(--cobalt)] min-[901px]:scroll-mt-6"
        id="systems"
        aria-labelledby="ownership-title"
      >
        <header className="grid border-b border-[var(--cobalt)] min-[901px]:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
          <div className="border-b border-[var(--cobalt)] px-[1.7rem] py-14 min-[641px]:px-[var(--page-gutter)] min-[901px]:border-r min-[901px]:border-b-0">
            <SectionIndex>02 / Ownership</SectionIndex>
          </div>
          <div className="px-[1.7rem] py-14 min-[641px]:px-[var(--page-gutter)] min-[641px]:py-20">
            <h2
              className="m-0 max-w-[14ch] font-serif text-[clamp(3.4rem,12vw,6rem)] leading-[0.94] font-semibold tracking-[-0.03em]"
              id="ownership-title"
            >
              Solo means the whole system.
            </h2>
            <p className="mt-7 mb-0 max-w-[48rem] [font-size:var(--type-body-lg)] leading-[1.7] text-[var(--ink-muted)]">
              I built Savyy by myself. That includes the product decisions
              people see and the operational work they should never have to
              think about.
            </p>
          </div>
        </header>

        <ol className="m-0 grid list-none p-0 min-[641px]:grid-cols-2">
          {savyyProject.ownership.map((area, index) => (
            <li
              className="grid min-h-[8.75rem] grid-cols-[3rem_minmax(0,1fr)] items-start gap-5 border-b border-[var(--rule-soft)] px-[1.7rem] py-8 odd:min-[641px]:border-r min-[641px]:grid-cols-[4rem_minmax(0,1fr)] min-[641px]:px-[var(--page-gutter)] min-[641px]:py-10"
              key={area}
            >
              <span className="font-mono [font-size:var(--type-label)] text-[var(--signal)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="m-0 max-w-[34rem] font-serif text-[clamp(1.55rem,4vw,2.25rem)] leading-[1.15] font-medium">
                {area}
              </p>
            </li>
          ))}
        </ol>

        <div className="border-t border-[var(--cobalt)] px-[1.7rem] py-16 min-[641px]:px-[var(--page-gutter)] min-[641px]:py-24">
          <div className="grid gap-10 min-[901px]:grid-cols-[minmax(18rem,0.66fr)_minmax(0,1.34fr)] min-[901px]:gap-[clamp(4rem,8vw,9rem)]">
            <div className="grid grid-cols-[2rem_minmax(0,1fr)] gap-5 min-[641px]:grid-cols-[2.5rem_minmax(0,1fr)] min-[641px]:gap-7">
              <SectionRail>A connected path</SectionRail>
              <h3 className="m-0 max-w-[9ch] font-serif text-[clamp(3.1rem,10vw,5.25rem)] leading-[0.96] font-semibold tracking-[-0.03em]">
                From consent to a useful screen.
              </h3>
            </div>
            <ol className="m-0 grid list-none border-t border-[var(--cobalt)] p-0 min-[641px]:grid-cols-2">
              {savyyProject.systemFlow.map((step) => (
                <li
                  className="min-h-[16rem] border-r border-b border-[var(--cobalt)] px-6 py-8 even:border-r-0 min-[641px]:px-8"
                  key={step.index}
                >
                  <span className="font-mono [font-size:var(--type-label)] text-[var(--signal)]">
                    {step.index}
                  </span>
                  <h4 className="mt-8 mb-0 font-serif text-[2.65rem] leading-none font-semibold">
                    {step.title}
                  </h4>
                  <p className="mt-5 mb-0 leading-[1.7] text-[var(--ink-muted)]">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section
        className="scroll-mt-[5.9rem] border-b border-[var(--cobalt)] min-[901px]:scroll-mt-6"
        id="releases"
        aria-labelledby="release-title"
      >
        <div className="grid min-[901px]:grid-cols-[minmax(0,1.08fr)_minmax(22rem,0.92fr)]">
          <figure className="relative m-0 min-h-[37rem] overflow-hidden bg-[#182947] min-[641px]:min-h-[54rem] min-[901px]:border-r">
            <Image
              className="object-cover object-[50%_43%]"
              src="/savyy/ios-full-scope.jpg"
              fill
              sizes="(min-width: 901px) 54vw, 100vw"
              alt="Savyy mobile menu showing simulators, reports, exports, alerts, and support"
            />
          </figure>
          <div className="flex flex-col justify-center px-[1.7rem] py-16 min-[641px]:px-[var(--page-gutter)] min-[641px]:py-24">
            <div className="grid grid-cols-[2rem_minmax(0,1fr)] gap-5 min-[641px]:grid-cols-[2.5rem_minmax(0,1fr)] min-[641px]:gap-7">
              <SectionRail>03 / Releases</SectionRail>
              <div>
                <h2
                  className="m-0 max-w-[10ch] font-serif text-[clamp(3.6rem,12vw,5.75rem)] leading-[0.95] font-semibold tracking-[-0.03em]"
                  id="release-title"
                >
                  One product, three real clients.
                </h2>
                <p className="mt-8 mb-0 max-w-[38rem] [font-size:var(--type-body-lg)] leading-[1.7] text-[var(--ink-muted)]">
                  The web app, iOS app, and Android app share the same account
                  and financial model. Each client still has to feel at home on
                  its platform.
                </p>
                <ul className="mt-10 mb-0 list-none border-t border-[var(--cobalt)] p-0">
                  {savyyProject.nativeCapabilities.map((capability) => (
                    <li
                      className="grid grid-cols-[0.75rem_minmax(0,1fr)] gap-4 border-b border-[var(--rule-soft)] py-5 leading-[1.65] text-[var(--ink-muted)]"
                      key={capability}
                    >
                      <span
                        className="mt-[0.55rem] size-2 bg-[var(--lime)]"
                        aria-hidden="true"
                      />
                      {capability}
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <StoreBadges />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-b border-[var(--cobalt)]"
        aria-labelledby="privacy-title"
      >
        <div className="grid min-[901px]:grid-cols-[minmax(0,0.83fr)_minmax(0,1.17fr)]">
          <header className="border-b border-[var(--cobalt)] px-[1.7rem] py-16 min-[641px]:px-[var(--page-gutter)] min-[641px]:py-24 min-[901px]:border-r min-[901px]:border-b-0">
            <div className="grid grid-cols-[2rem_minmax(0,1fr)] gap-5 min-[641px]:grid-cols-[2.5rem_minmax(0,1fr)] min-[641px]:gap-7">
              <SectionRail>04 / Boundaries</SectionRail>
              <div>
                <h2
                  className="m-0 max-w-[10ch] font-serif text-[clamp(3.5rem,12vw,5.5rem)] leading-[0.96] font-semibold tracking-[-0.03em]"
                  id="privacy-title"
                >
                  Privacy is a product decision.
                </h2>
                <p className="mt-8 mb-0 max-w-[35rem] leading-[1.75] text-[var(--ink-muted)]">
                  Financial software earns trust through limits that are clear
                  before they are needed. These are the boundaries I designed
                  into Savyy.
                </p>
              </div>
            </div>
          </header>
          <ol className="m-0 list-none p-0">
            {savyyProject.privacyBoundaries.map((boundary, index) => (
              <li
                className="grid min-h-[9rem] grid-cols-[3.2rem_minmax(0,1fr)] gap-5 border-b border-[var(--rule-soft)] px-[1.7rem] py-8 last:border-b-0 min-[641px]:grid-cols-[4.5rem_minmax(0,1fr)] min-[641px]:px-[var(--page-gutter)] min-[641px]:py-10"
                key={boundary}
              >
                <span className="font-mono [font-size:var(--type-label)] text-[var(--signal)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="m-0 max-w-[48rem] [font-size:var(--type-body-lg)] leading-[1.7] text-[var(--ink)]">
                  {boundary}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="border-b border-[var(--cobalt)]"
        aria-label="Savyy project links"
      >
        <div className="grid min-[901px]:grid-cols-[minmax(0,1fr)_auto] min-[901px]:items-end">
          <div className="border-b border-[var(--cobalt)] px-[1.7rem] py-14 min-[641px]:px-[var(--page-gutter)] min-[901px]:border-r min-[901px]:border-b-0">
            <p className="m-0 max-w-[18ch] font-serif text-[clamp(2.5rem,8vw,4.5rem)] leading-[1.02] font-medium tracking-[-0.025em]">
              The evidence is live. Open the product.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-4">
              {references.map(([label, href]) => (
                <a
                  className="inline-flex items-center gap-2 font-mono [font-size:var(--type-label)] text-[var(--cobalt)] uppercase no-underline hover:text-[var(--cobalt-dark)]"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={label}
                >
                  {label} <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <a
            className="inline-flex min-h-[8.5rem] min-w-[17rem] items-center justify-between gap-8 bg-[var(--cobalt)] px-7 py-6 font-mono [font-size:var(--type-control)] font-semibold tracking-[0.045em] text-[var(--on-cobalt)] uppercase no-underline hover:bg-[var(--cobalt-dark)] min-[901px]:self-stretch"
            href={savyyProject.appUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Savyy.app <ArrowRight className="size-5" aria-hidden="true" />
          </a>
        </div>
      </section>
    </>
  );
}
