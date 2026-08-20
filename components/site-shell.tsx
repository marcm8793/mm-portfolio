import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

type SiteShellProps = {
  children: ReactNode;
  showFooterCta?: boolean;
};

export function SiteShell({
  children,
  showFooterCta = true,
}: SiteShellProps) {
  return (
    <div className="relative isolate mx-auto min-h-screen w-[min(100%,var(--content-width))] border-x-0 border-[var(--rule-soft)] bg-[var(--shell-surface)] before:pointer-events-none before:fixed before:top-0 before:bottom-0 before:left-[0.8rem] before:-z-10 before:w-px before:bg-[var(--margin-rule)] before:content-[''] min-[641px]:before:left-[1.1rem] min-[901px]:grid min-[901px]:grid-cols-[var(--index-width)_minmax(0,1fr)] min-[901px]:border-x min-[901px]:before:hidden">
      <a
        className="fixed top-3 left-3 z-100 -translate-y-[160%] border border-[var(--cobalt)] bg-[var(--paper-raised)] px-4 py-[0.7rem] font-mono [font-size:var(--type-label)] text-[var(--ink)] uppercase focus:translate-y-0"
        href="#main-content"
      >
        Skip to content
      </a>
      <SiteHeader />
      <div className="flex min-h-[calc(100svh-4.6rem)] min-w-0 flex-col min-[901px]:min-h-screen min-[901px]:border-l min-[901px]:border-[var(--cobalt)]">
        {children}
        <SiteFooter showCta={showFooterCta} />
      </div>
    </div>
  );
}
