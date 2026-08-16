import { Paperclip } from "@phosphor-icons/react/dist/ssr/Paperclip";

function CashFlowChart() {
  return (
    <svg
      className="mt-[0.45rem] block h-[calc(100%-2rem)] w-[calc(100%-1.4rem)] mx-[0.7rem]"
      viewBox="0 0 520 190"
      role="img"
      aria-label="Schematic cash-flow chart rising and falling across the model"
    >
      <g className="[&_line]:stroke-[var(--diagram-grid)] [&_line]:stroke-1" aria-hidden="true">
        {[35, 70, 105, 140].map((y) => (
          <line key={y} x1="0" x2="520" y1={y} y2={y} />
        ))}
        {[65, 130, 195, 260, 325, 390, 455].map((x) => (
          <line key={x} x1={x} x2={x} y1="0" y2="165" />
        ))}
      </g>
      <path
        className="fill-[var(--diagram-fill)]"
        d="M0 140 C45 120 52 95 90 112 C125 127 142 70 182 88 C220 104 246 42 281 66 C322 94 338 36 372 57 C414 82 438 25 520 43 L520 165 L0 165 Z"
      />
      <path
        className="fill-none stroke-[var(--cobalt)] stroke-[2.1]"
        d="M0 140 C45 120 52 95 90 112 C125 127 142 70 182 88 C220 104 246 42 281 66 C322 94 338 36 372 57 C414 82 438 25 520 43"
      />
      <path
        className="fill-none stroke-[var(--lime)] stroke-[1.5] [stroke-dasharray:6_5]"
        d="M0 146 C68 138 118 132 182 120 C265 105 332 96 405 80 C450 70 486 62 520 53"
      />
    </svg>
  );
}

export function FinancialCaseFile({ projectName }: { projectName: string }) {
  return (
    <figure
      className="relative m-0 h-[27rem] min-w-0 overflow-hidden animate-in duration-[720ms] ease-[cubic-bezier(0.16,1,0.3,1)] slide-in-from-top-[10px] motion-reduce:animate-none min-[641px]:h-[35rem] min-[901px]:h-[33.25rem]"
      aria-labelledby="case-file-title"
    >
      <div
        className="absolute inset-[3rem_0.7rem_1rem_1.1rem] rotate-[0.85deg] border border-[var(--case-stock-rule)] bg-[var(--case-stock)] bg-[url('/paper-texture.webp')] [background-blend-mode:var(--paper-texture-blend)] [background-size:580px] shadow-[8px_11px_24px_var(--shadow-medium)] before:absolute before:top-[-1.6rem] before:right-20 before:h-[1.65rem] before:w-[9.5rem] before:border before:border-b-0 before:border-[var(--case-stock-rule)] before:bg-[var(--case-stock)] before:content-[''] min-[641px]:inset-[3.6rem_1.2rem_1.1rem_2.7rem]"
        aria-hidden="true"
      />
      <Paperclip
        className="absolute top-[0.6rem] left-[24%] z-6 size-[2.8rem] -rotate-8 text-[var(--clip-ink)] drop-shadow-[2px_3px_2px_var(--shadow-strong)] min-[641px]:top-4 min-[641px]:size-[3.3rem]"
        weight="thin"
        aria-hidden="true"
      />
      <Paperclip
        className="absolute top-[0.6rem] right-[12%] z-6 size-[2.8rem] rotate-8 text-[var(--clip-ink)] drop-shadow-[2px_3px_2px_var(--shadow-strong)] min-[641px]:top-4 min-[641px]:size-[3.3rem]"
        weight="thin"
        aria-hidden="true"
      />

      <div className="absolute inset-[3.4rem_1rem_1.3rem_1.45rem] z-2 -rotate-[0.28deg] border border-[var(--cobalt)] bg-[var(--case-sheet-surface)] bg-[url('/paper-texture.webp')] [background-blend-mode:var(--paper-texture-blend)] [background-size:620px] shadow-[5px_8px_18px_var(--shadow-soft)] min-[641px]:inset-[4rem_2.25rem_1.5rem_3.4rem]">
        <figcaption
          className="flex h-[2.1rem] items-center border-b border-[var(--cobalt)] px-4 font-mono [font-size:var(--type-micro)] font-bold tracking-[0.06em] text-[var(--cobalt)] uppercase"
          id="case-file-title"
        >
          {projectName} / personal finance
        </figcaption>
        <div className="h-[calc(100%-2.1rem)] p-[0.8rem]">
          <div
            className="flex h-[1.55rem] items-center gap-[0.35rem] border border-b-0 border-[var(--rule-soft)] px-[0.55rem] [&>i]:ml-auto [&>i]:h-px [&>i]:w-[38%] [&>i]:bg-[var(--rule-soft)] [&>span]:size-[0.37rem] [&>span]:border [&>span]:border-[var(--cobalt)]"
            aria-hidden="true"
          >
            <span />
            <span />
            <span />
            <i />
          </div>
          <div className="grid h-[calc(100%-1.55rem)] grid-cols-1 grid-rows-[minmax(0,1.35fr)_minmax(6.5rem,0.65fr)] border-t border-l border-[var(--cobalt)] min-[641px]:grid-cols-[minmax(0,1.6fr)_minmax(10rem,0.72fr)] min-[641px]:grid-rows-[minmax(0,1.2fr)_minmax(7.8rem,0.72fr)] [&>section]:min-w-0 [&>section]:border-r [&>section]:border-b [&>section]:border-[var(--cobalt)]">
            <section className="pb-[0.4rem]" aria-label="Cash-flow model view">
              <div className="flex h-[1.8rem] items-center justify-between border-b border-[var(--rule-soft)] px-[0.65rem] font-mono [font-size:var(--type-diagram)] tracking-[0.05em] text-[var(--cobalt)] uppercase">
                <span>Cash flow</span>
                <span>Model view</span>
              </div>
              <CashFlowChart />
            </section>
            <section
              className="hidden flex-col min-[641px]:flex"
              aria-label="Allocation model view"
            >
              <div className="flex h-[1.8rem] items-center justify-between border-b border-[var(--rule-soft)] px-[0.65rem] font-mono [font-size:var(--type-diagram)] tracking-[0.05em] text-[var(--cobalt)] uppercase">
                <span>Allocation</span>
                <span>Scenario</span>
              </div>
              <div
                className="mx-auto mt-4 mb-[0.8rem] aspect-square w-[5.2rem] rounded-full border border-[var(--cobalt)] bg-[conic-gradient(var(--lime)_0_26%,var(--paper-deep)_26%_61%,var(--cobalt)_61%_76%,transparent_76%)] shadow-[inset_0_0_0_1.25rem_var(--paper-raised)]"
                aria-hidden="true"
              />
              <div
                className="mx-auto mt-auto mb-[1.1rem] grid w-[68%] gap-[0.45rem] [&>span]:h-0.5 [&>span]:bg-[var(--rule-soft)]"
                aria-hidden="true"
              >
                <span />
                <span />
                <span />
              </div>
            </section>
            <section className="pb-[0.45rem]" aria-label="Account model rows">
              <div className="flex h-[1.8rem] items-center justify-between border-b border-[var(--rule-soft)] px-[0.65rem] font-mono [font-size:var(--type-diagram)] tracking-[0.05em] text-[var(--cobalt)] uppercase">
                <span>Accounts</span>
                <span>Working set</span>
              </div>
              {[0, 1, 2, 3].map((row) => (
                <div
                  className="mx-[0.65rem] grid min-h-[1.3rem] grid-cols-[0.7rem_1fr_0.65fr_0.5rem] items-center gap-[0.7rem] border-b border-[var(--rule-faint)] [&>b]:size-[0.38rem] [&>b]:rounded-full [&>b]:border [&>b]:border-[var(--cobalt)] [&>i]:size-[0.38rem] [&>i]:rounded-full [&>i]:border [&>i]:border-[var(--cobalt)] [&>span]:h-0.5 [&>span]:bg-[var(--rule-soft)]"
                  key={row}
                  aria-hidden="true"
                >
                  <i />
                  <span />
                  <span />
                  <b />
                </div>
              ))}
            </section>
            <section className="hidden pb-3 min-[641px]:block" aria-label="Model notes">
              <div className="flex h-[1.8rem] items-center justify-between border-b border-[var(--rule-soft)] px-[0.65rem] font-mono [font-size:var(--type-diagram)] tracking-[0.05em] text-[var(--cobalt)] uppercase">
                <span>Notes</span>
              </div>
              <p className="mx-[0.8rem] mt-[0.65rem] mb-0 font-serif text-[0.9375rem] leading-[1.2] text-[var(--ink-muted)] italic">
                Make assumptions visible.
              </p>
              <p className="mx-[0.8rem] mt-[0.65rem] mb-0 font-serif text-[0.9375rem] leading-[1.2] text-[var(--ink-muted)] italic">
                Keep decisions legible.
              </p>
            </section>
          </div>
        </div>
      </div>

      <span
        className="absolute top-28 right-[0.2rem] z-5 hidden -rotate-6 font-serif text-base text-[var(--cobalt)] italic after:absolute after:top-[1.6rem] after:right-[1.4rem] after:h-px after:w-[4.5rem] after:origin-left after:rotate-[144deg] after:bg-[var(--cobalt)] after:content-[''] min-[1181px]:block"
        aria-hidden="true"
      >
        price view
      </span>
      <span
        className="absolute right-[0.4rem] bottom-[6.4rem] z-5 hidden max-w-24 -rotate-6 font-serif text-base text-[var(--cobalt)] italic after:absolute after:top-4 after:right-[4.8rem] after:h-px after:w-[4.5rem] after:origin-left after:rotate-[178deg] after:bg-[var(--cobalt)] after:content-[''] min-[1181px]:block"
        aria-hidden="true"
      >
        decision context
      </span>
      <span
        className="absolute bottom-[0.8rem] left-[44%] z-5 h-[2.3rem] w-16 -rotate-10 rounded-full border-[3px] border-[var(--signal)] min-[641px]:bottom-[1.1rem] min-[641px]:left-[36%] min-[641px]:h-[3.1rem] min-[641px]:w-[5.8rem]"
        aria-hidden="true"
      />
    </figure>
  );
}
