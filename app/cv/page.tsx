import { ArrowRight } from "@phosphor-icons/react/dist/ssr/ArrowRight";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import { DownloadSimple } from "@phosphor-icons/react/dist/ssr/DownloadSimple";
import { EnvelopeSimple } from "@phosphor-icons/react/dist/ssr/EnvelopeSimple";
import { FilePdf } from "@phosphor-icons/react/dist/ssr/FilePdf";
import { MapPinLine } from "@phosphor-icons/react/dist/ssr/MapPinLine";
import { Paperclip } from "@phosphor-icons/react/dist/ssr/Paperclip";
import type { Metadata } from "next";
import Image from "next/image";

import { SiteShell } from "@/components/site-shell";
import { resumeData, type ResumePdf } from "@/lib/resume";

const directionContract = `<!--
THESIS: A career is easier to understand as one continuous working record than as a stack of résumé cards.
OWN-WORLD: The site ledger becomes a clipped career folio: ruled paper, cobalt structure, compact mono metadata, slab-serif decisions, sparse lime proof marks, and one red review circle.
STORY: Establish Marc's finance-to-software position, scan the professional timeline, inspect learning evidence and education, then open the selected product or PDF record.
FIRST VIEWPORT: A two-column identity statement and pinned profile sheet fill the opening view; three factual register cells sit directly beneath the primary PDF action.
FORM: Career Ledger, structure-led extension of the established portfolio world.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->`;

const directionContractMarkup = { __html: directionContract } as const;

const actionClass =
  "inline-flex min-h-[3.55rem] w-full items-center justify-between gap-7 rounded-[2px] border border-[var(--cobalt)] px-5 py-3 font-mono [font-size:var(--type-control)] font-semibold tracking-[0.02em] no-underline transition-[background-color,color,transform] duration-[180ms] hover:-translate-y-0.5 min-[641px]:w-auto";

const documentLinkClass =
  "inline-flex min-h-11 items-center gap-2 font-mono [font-size:var(--type-label)] font-semibold tracking-[0.02em] text-[var(--cobalt)] no-underline hover:text-[var(--cobalt-dark)] hover:underline [&_svg]:size-4";

const tagClass =
  "inline-flex min-h-7 items-center border border-[var(--cobalt)] px-2.5 py-1 font-mono [font-size:var(--type-micro)] font-semibold tracking-[0.045em] text-[var(--cobalt)] uppercase";

export const metadata: Metadata = {
  title: "Résumé",
  description: resumeData.summary,
  alternates: { canonical: "/cv" },
  openGraph: {
    type: "profile",
    url: "/cv",
    title: "Marc Mansour · Résumé",
    description: resumeData.summary,
  },
};

function PdfLink({ pdf }: { pdf: ResumePdf }) {
  return (
    <a
      className={documentLinkClass}
      href={pdf.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FilePdf aria-hidden="true" />
      {pdf.label}
    </a>
  );
}

export default function ResumePage() {
  return (
    <SiteShell>
      <div
        hidden
        data-direction-contract="career-ledger"
        dangerouslySetInnerHTML={directionContractMarkup}
      />

      <main className="overflow-clip" id="main-content">
        <header className="grid border-b border-[var(--cobalt)] min-[901px]:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.9fr)]">
          <div className="flex min-w-0 flex-col justify-center border-b border-[var(--cobalt)] px-[1.7rem] py-[clamp(3.5rem,7vw,5.75rem)] min-[641px]:px-[var(--page-gutter)] min-[901px]:border-r min-[901px]:border-b-0">
            <h1 className="m-0 max-w-[13ch] font-serif text-[clamp(2.75rem,9vw,4.4rem)] leading-[0.96] font-medium tracking-[-0.035em]">
              {resumeData.name}
            </h1>
            <p className="mt-6 mb-0 max-w-[31ch] font-serif text-[clamp(1.35rem,2.6vw,1.8rem)] leading-[1.18] text-[var(--ink)] italic">
              {resumeData.title}
            </p>
            <p className="mt-5 mb-0 max-w-[61ch] text-base leading-[1.7] text-[var(--ink-muted)]">
              {resumeData.summary}
            </p>

            <div className="mt-8 flex flex-col gap-3 min-[641px]:flex-row min-[641px]:flex-wrap">
              <a
                className={`${actionClass} bg-[var(--cobalt)] text-[var(--on-cobalt)] hover:bg-[var(--cobalt-dark)]`}
                href={resumeData.resumePdf.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {resumeData.resumePdf.label}
                <DownloadSimple className="size-[1.05rem]" aria-hidden="true" />
              </a>
              <a
                className={`${actionClass} bg-[var(--action-surface)] text-[var(--cobalt)] hover:bg-[var(--paper-raised)] hover:text-[var(--cobalt-dark)]`}
                href={`mailto:${resumeData.contact.email}`}
              >
                Email Marc
                <EnvelopeSimple className="size-[1.05rem]" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="grid place-items-center px-[1.7rem] py-12 min-[641px]:px-[var(--page-gutter)] min-[901px]:px-9">
            <article className="relative isolate w-full max-w-[28rem] border border-[var(--cobalt)] bg-[var(--case-sheet-surface)] p-6 shadow-[0_18px_34px_-28px_var(--shadow-strong)] before:absolute before:-z-10 before:border before:border-[var(--case-stock-rule)] before:bg-[var(--case-stock)] before:content-[''] before:[inset:0.7rem_-0.7rem_-0.7rem_0.7rem] min-[641px]:p-8">
              <Paperclip
                className="absolute -top-7 left-6 size-14 -rotate-6 text-[var(--clip-ink)] drop-shadow-[0_2px_1px_var(--shadow-soft)]"
                aria-hidden="true"
              />
              <div className="grid grid-cols-[5.25rem_minmax(0,1fr)] items-center gap-5 border-b border-[var(--cobalt)] pb-6">
                <Image
                  className="aspect-square border border-[var(--cobalt)] object-cover grayscale-[25%]"
                  src={resumeData.avatarUrl}
                  width={168}
                  height={168}
                  sizes="84px"
                  alt={`Portrait of ${resumeData.name}`}
                />
                <div className="min-w-0">
                  <p className="m-0 font-mono [font-size:var(--type-micro)] tracking-[0.065em] text-[var(--cobalt)] uppercase">
                    Curriculum vitae
                  </p>
                  <p className="mt-2 mb-0 font-serif text-[1.1875rem] leading-tight font-medium">
                    {resumeData.initials} · {resumeData.lastUpdated}
                  </p>
                </div>
              </div>

              <address className="mt-6 grid gap-1.5 font-mono [font-size:var(--type-label)] leading-[1.55] not-italic">
                <a
                  className="inline-flex min-h-9 items-center gap-2 text-[var(--ink)] no-underline hover:text-[var(--cobalt)] hover:underline"
                  href={resumeData.location.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPinLine className="size-4 text-[var(--cobalt)]" aria-hidden="true" />
                  {resumeData.location.label}
                </a>
                <a
                  className="inline-flex min-h-9 items-center gap-2 text-[var(--ink)] no-underline hover:text-[var(--cobalt)] hover:underline"
                  href={`mailto:${resumeData.contact.email}`}
                >
                  <EnvelopeSimple className="size-4 text-[var(--cobalt)]" aria-hidden="true" />
                  {resumeData.contact.email}
                </a>
                <a
                  className="inline-flex min-h-9 items-center gap-2 pl-6 text-[var(--ink)] no-underline hover:text-[var(--cobalt)] hover:underline"
                  href={`tel:${resumeData.contact.phone.replaceAll(" ", "")}`}
                >
                  {resumeData.contact.phone}
                </a>
              </address>

              <ul className="mt-6 flex list-none flex-wrap gap-x-5 gap-y-2 border-t border-[var(--rule-soft)] pt-5 pl-0">
                {resumeData.contact.links.map((link) => (
                  <li key={link.label}>
                    <a
                      className="inline-flex min-h-9 items-center font-mono [font-size:var(--type-label)] font-semibold text-[var(--cobalt)] no-underline hover:text-[var(--cobalt-dark)] hover:underline"
                      href={link.href}
                      target="_blank"
                      rel="me noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <span
                className="absolute right-5 -bottom-5 rotate-[-5deg] rounded-[50%] border-2 border-[var(--signal)] px-4 py-2 font-serif text-sm leading-none italic"
                aria-hidden="true"
              >
                finance → software
              </span>
            </article>
          </div>
        </header>

        <dl className="m-0 grid border-b border-[var(--cobalt)] min-[641px]:grid-cols-3">
          {resumeData.profileFacts.map((fact) => (
            <div
              className="grid min-h-[6.25rem] content-center border-b border-[var(--rule-soft)] px-[1.7rem] py-5 last:border-b-0 min-[641px]:border-r min-[641px]:border-b-0 min-[641px]:px-6 min-[641px]:last:border-r-0"
              key={fact.label}
            >
              <dt className="font-mono [font-size:var(--type-micro)] tracking-[0.06em] text-[var(--cobalt)] uppercase">
                {fact.label}
              </dt>
              <dd className="mt-2 mb-0 font-serif text-[1.1rem] leading-snug italic">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>

        <section
          className="border-b border-[var(--cobalt)] px-[1.7rem] py-[clamp(3.5rem,6vw,5rem)] min-[641px]:px-[var(--page-gutter)]"
          aria-labelledby="experience-title"
        >
          <div className="grid gap-5 border-b border-[var(--cobalt)] pb-7 min-[901px]:grid-cols-[10rem_minmax(0,1fr)] min-[901px]:gap-8">
            <p className="m-0 hidden font-mono [font-size:var(--type-label)] tracking-[0.06em] text-[var(--cobalt)] uppercase min-[901px]:block">
              Career record
            </p>
            <div>
              <h2
                className="m-0 max-w-[20ch] font-serif text-[var(--type-section)] leading-[1.06] font-medium tracking-[-0.025em]"
                id="experience-title"
              >
                Professional experience
              </h2>
              <p className="mt-4 mb-0 max-w-[62ch] leading-[1.7] text-[var(--ink-muted)]">
                Operational finance, project leadership, and the systems work that
                connects them.
              </p>
            </div>
          </div>

          <div>
            {resumeData.experience.map((role, index) => (
              <article
                className="grid gap-4 border-b border-[var(--rule-soft)] py-8 last:border-b-0 min-[901px]:grid-cols-[10rem_minmax(15rem,0.78fr)_minmax(18rem,1.22fr)] min-[901px]:gap-8"
                key={`${role.company}-${role.period}`}
              >
                <p className="m-0 font-mono [font-size:var(--type-label)] leading-[1.5] font-semibold tracking-[0.035em] text-[var(--cobalt)] tabular-nums uppercase">
                  {role.period}
                </p>
                <div>
                  <p className="m-0 font-mono [font-size:var(--type-micro)] tracking-[0.06em] text-[var(--cobalt)] uppercase">
                    {role.sector}
                  </p>
                  <h3 className="mt-2 mb-0 font-serif text-[clamp(1.25rem,2vw,1.55rem)] leading-[1.15] font-medium">
                    {role.title}
                  </h3>
                  <a
                    className="mt-3 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-[var(--ink)] no-underline hover:text-[var(--cobalt)] hover:underline"
                    href={role.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {role.company}
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                </div>
                <div className="relative min-[901px]:pl-8">
                  <span
                    className="absolute top-2 left-0 hidden size-2 bg-[var(--lime)] min-[901px]:block"
                    aria-hidden="true"
                  />
                  <p className="m-0 max-w-[57ch] leading-[1.72] text-[var(--ink-muted)]">
                    {role.summary}
                  </p>
                  <p className="mt-5 mb-0 font-mono [font-size:var(--type-micro)] tracking-[0.06em] text-[var(--cobalt)] uppercase">
                    Record {String(index + 1).padStart(2, "0")}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid border-b border-[var(--cobalt)] min-[901px]:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)]">
          <div className="border-b border-[var(--cobalt)] min-[901px]:border-r min-[901px]:border-b-0">
            <div className="border-b border-[var(--cobalt)] px-[1.7rem] py-8 min-[641px]:px-[var(--page-gutter)]">
              <h2 className="m-0 font-serif text-[var(--type-section)] leading-[1.06] font-medium tracking-[-0.025em]">
                Certifications
              </h2>
              <p className="mt-4 mb-0 max-w-[52ch] leading-[1.65] text-[var(--ink-muted)]">
                Structured study supporting the software practice.
              </p>
            </div>

            {resumeData.certifications.map((certification) => (
              <article
                className="grid gap-4 border-b border-[var(--rule-soft)] px-[1.7rem] py-7 last:border-b-0 min-[641px]:grid-cols-[minmax(0,1fr)_auto] min-[641px]:px-[var(--page-gutter)]"
                key={certification.title}
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={tagClass}>{certification.field}</span>
                    <span className="font-mono [font-size:var(--type-micro)] tracking-[0.04em] text-[var(--ink-muted)] tabular-nums uppercase">
                      {certification.date}
                    </span>
                  </div>
                  <h3 className="mt-4 mb-0 font-serif text-[1.1875rem] leading-[1.2] font-medium">
                    {certification.title}
                  </h3>
                  <p className="mt-2 mb-0 font-mono [font-size:var(--type-label)] font-semibold text-[var(--cobalt)] uppercase">
                    {certification.issuer}
                  </p>
                  <p className="mt-4 mb-0 max-w-[54ch] text-sm leading-[1.65] text-[var(--ink-muted)]">
                    {certification.summary}
                  </p>
                </div>
                {certification.certificate ? (
                  <div className="self-start min-[641px]:justify-self-end">
                    <PdfLink pdf={certification.certificate} />
                  </div>
                ) : null}
              </article>
            ))}
          </div>

          <div>
            <div className="border-b border-[var(--cobalt)] px-[1.7rem] py-8 min-[641px]:px-[var(--page-gutter)] min-[901px]:px-8">
              <h2 className="m-0 font-serif text-[var(--type-section)] leading-[1.06] font-medium tracking-[-0.025em]">
                Education
              </h2>
              <p className="mt-4 mb-0 max-w-[45ch] leading-[1.65] text-[var(--ink-muted)]">
                The finance foundation behind the work.
              </p>
            </div>

            {resumeData.education.map((education) => (
              <article
                className="border-b border-[var(--rule-soft)] px-[1.7rem] py-8 last:border-b-0 min-[641px]:px-[var(--page-gutter)] min-[901px]:px-8"
                key={education.school}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className={tagClass}>{education.field}</span>
                  <span className="font-mono [font-size:var(--type-micro)] tracking-[0.04em] text-[var(--ink-muted)] tabular-nums uppercase">
                    {education.period}
                  </span>
                </div>
                <h3 className="mt-5 mb-0 font-serif text-[1.3125rem] leading-[1.2] font-medium">
                  {education.school}
                </h3>
                <p className="mt-3 mb-0 max-w-[43ch] text-[0.95rem] leading-[1.65] text-[var(--ink-muted)]">
                  {education.degree}
                </p>
                {education.diploma ? (
                  <div className="mt-5">
                    <PdfLink pdf={education.diploma} />
                  </div>
                ) : null}
              </article>
            ))}

            <div className="border-t border-[var(--cobalt)] px-[1.7rem] py-8 min-[641px]:px-[var(--page-gutter)] min-[901px]:px-8">
              <h2 className="m-0 font-serif text-[1.3125rem] leading-[1.1] font-medium">
                Skills &amp; languages
              </h2>
              <div className="mt-6 flex flex-wrap gap-2">
                {resumeData.skills.map((skill) => (
                  <span className={tagClass} key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
              <p className="mt-7 mb-0 font-mono [font-size:var(--type-label)] tracking-[0.05em] text-[var(--ink-muted)] uppercase">
                {resumeData.languages.join(" · ")}
              </p>
            </div>
          </div>
        </section>

        <section
          className="px-[1.7rem] py-[clamp(3.5rem,6vw,5rem)] min-[641px]:px-[var(--page-gutter)]"
          aria-labelledby="selected-work-title"
        >
          <div className="grid gap-7 min-[901px]:grid-cols-[10rem_minmax(0,1fr)] min-[901px]:gap-8">
            <p className="m-0 hidden font-mono [font-size:var(--type-label)] tracking-[0.06em] text-[var(--cobalt)] uppercase min-[901px]:block">
              Selected work
            </p>
            <div>
              <h2
                className="m-0 font-serif text-[var(--type-section)] leading-[1.06] font-medium tracking-[-0.025em]"
                id="selected-work-title"
              >
                Built beyond the résumé.
              </h2>
              {resumeData.projects.map((project) => (
                <article
                  className="mt-8 grid gap-6 border-y border-[var(--cobalt)] py-8 min-[901px]:grid-cols-[minmax(0,0.65fr)_minmax(20rem,1.35fr)] min-[901px]:items-start min-[901px]:gap-10"
                  key={project.name}
                >
                  <div>
                    <h3 className="m-0 font-serif text-[clamp(2.25rem,5vw,3rem)] leading-none font-medium tracking-[-0.025em]">
                      {project.name}
                    </h3>
                    <a
                      className="mt-6 inline-flex min-h-11 items-center gap-2 font-mono [font-size:var(--type-label)] font-semibold text-[var(--cobalt)] no-underline hover:text-[var(--cobalt-dark)] hover:underline"
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit product
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </a>
                  </div>
                  <div>
                    <p className="m-0 max-w-[55ch] leading-[1.72] text-[var(--ink-muted)]">
                      {project.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((technology) => (
                        <span className={tagClass} key={technology}>
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-9 grid items-center gap-5 border-t border-[var(--rule-soft)] pt-7 min-[641px]:grid-cols-[minmax(0,1fr)_auto]">
            <p className="m-0 max-w-[50ch] font-serif text-[1.1rem] leading-[1.5] text-[var(--ink-muted)] italic">
              Prefer the compact version? The complete record is available as a PDF.
            </p>
            <a
              className={documentLinkClass}
              href={resumeData.resumePdf.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {resumeData.resumePdf.label}
              <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
