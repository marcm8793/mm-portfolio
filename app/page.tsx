import { ArrowRight } from "@phosphor-icons/react/dist/ssr/ArrowRight";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import { FilePdf } from "@phosphor-icons/react/dist/ssr/FilePdf";

import { FinancialCaseFile } from "@/components/financial-case-file";
import { GitHubActivity } from "@/components/github-activity";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { featuredProject } from "@/lib/projects";

const directionContract = `<!--
THESIS: Public work is a continuous record, not a polished sales deck.
OWN-WORLD: An analyst's working paper built from ledger rules, paper grain, index tabs, proof marks, and inspectable code/finance evidence.
STORY: Introduce Marc's finance-software thesis, inspect Savyy as the sole featured project, read live public activity, then continue into about, resume, writing, and contact.
FIRST VIEWPORT: Asymmetric thesis left and layered app case right, crossed by a full-width recent-public-activity ledger.
FORM: Activity Ledger, the first-choice experience form; semantic Server Components, cached GitHub GraphQL contribution counts plus public REST detail, tactile raster paper, crisp SVG geometry, and seed key activity-ledger.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->`;

export default function Home() {
  return (
    <div className="portfolio-shell">
      <div
        hidden
        data-direction-contract="activity-ledger"
        dangerouslySetInnerHTML={{ __html: directionContract }}
      />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />

      <main id="main-content">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-grid">
            <div className="hero-copy">
              <h1 id="hero-title">Developer focused on financial tools.</h1>
              <p>
                I build and write about technology, development, and finance—making
                complex systems easier to inspect and use.
              </p>
              <div className="hero-actions">
                <a className="action action-primary" href="#projects">
                  Explore my work <ArrowRight aria-hidden="true" />
                </a>
                <a
                  className="action action-secondary"
                  href="https://www.marcmansour.dev/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read the journal <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
              <p className="hero-note">Finance × software · Paris</p>
            </div>
            <FinancialCaseFile projectName={featuredProject.name} />
          </div>
          <GitHubActivity />
          <svg
            className="proof-arrow"
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

        <section className="project-section ruled-section" id="projects">
          <header className="section-heading">
            <h2>One financial tool, built for the whole picture.</h2>
            <p>
              Savyy brings accounts, transactions, budgets, and market context into
              one privacy-first product for people across France and Europe.
            </p>
          </header>

          <article className="project-dossier" aria-labelledby="savyy-title">
            <div className="project-summary">
              <div className="project-badges">
                {featuredProject.badges.map((badge, index) => (
                  <Badge
                    className={`ledger-badge${index === 0 ? "" : " ledger-badge-outline"}`}
                    variant={index === 0 ? "default" : "outline"}
                    key={badge}
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
              <h3 id="savyy-title">{featuredProject.name}</h3>
              <p>{featuredProject.description}</p>
              <a
                href={featuredProject.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Savyy <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
            <dl className="project-premise">
              {featuredProject.details.map((detail) => (
                <div key={detail.label}>
                  <dt>{detail.label}</dt>
                  <dd>{detail.value}</dd>
                </div>
              ))}
            </dl>
          </article>
        </section>

        <section className="binder-index ruled-section" aria-label="About, resume, and blog">
          <article id="about">
            <h2>Finance gives me the questions. Software gives me a way to test them.</h2>
            <p>
              I’m Marc, a developer and finance enthusiast building tools and writing
              for readers on both sides of that intersection.
            </p>
          </article>
          <article id="resume">
            <h2>How the work gets done.</h2>
            <p>A concise record of my experience and tools.</p>
            <a
              href="https://www.marcmansour.dev/CVMM-dev-en.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FilePdf aria-hidden="true" /> Open résumé
            </a>
          </article>
          <article id="blog">
            <h2>Field notes for builders and finance-minded readers.</h2>
            <p>Technology, development, and finance—written for a broad public.</p>
            <a
              href="https://www.marcmansour.dev/blog"
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
