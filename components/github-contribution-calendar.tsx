"use client";

import { CaretDown } from "@phosphor-icons/react/dist/csr/CaretDown";
import { useMemo, useState, type KeyboardEvent } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { ActivityCalendar, ActivityCell } from "@/lib/github";
import { cn } from "@/lib/utils";

const activitySwatchClass =
  "rounded-none border border-[var(--activity-cell-border)] bg-[var(--activity-empty)] data-[level=1]:bg-[var(--activity-low)] data-[level=2]:bg-[var(--activity-medium)] data-[level=3]:bg-[var(--activity-high)] data-[level=4]:bg-[var(--lime)]";

const activityCellClass =
  "m-0 size-[0.72rem] appearance-none rounded-none border border-[var(--activity-cell-border)] bg-[var(--activity-empty)] p-0 data-[level=1]:bg-[var(--activity-low)] data-[level=2]:bg-[var(--activity-medium)] data-[level=3]:bg-[var(--activity-high)] data-[level=4]:bg-[var(--lime)] data-[future=true]:border-dotted data-[future=true]:bg-transparent data-[outside-year=true]:invisible enabled:cursor-crosshair enabled:hover:border-[var(--cobalt)] enabled:focus-visible:relative enabled:focus-visible:z-2 enabled:focus-visible:outline-2 enabled:focus-visible:outline-offset-2 enabled:focus-visible:outline-[var(--cobalt)]";

const monthFormatter = new Intl.DateTimeFormat("en", {
  month: "short",
  timeZone: "UTC",
});

const dateFormatter = new Intl.DateTimeFormat("en", {
  weekday: "short",
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

const metricDayFormatter = new Intl.DateTimeFormat("en", {
  month: "short",
  day: "numeric",
  timeZone: "UTC",
});

const metricMonthFormatter = new Intl.DateTimeFormat("en", {
  month: "short",
  timeZone: "UTC",
});

type GitHubContributionCalendarProps = {
  calendars: ActivityCalendar[];
  source: "authenticated-contributions" | "public-events";
  status: "ready" | "unavailable";
};

function firstRecordedDate(calendar: ActivityCalendar) {
  return calendar.cells.find((cell) => !cell.outsideYear)?.date ?? "";
}

function tooltipLabel(date: string, count: number, future: boolean) {
  const formattedDate = dateFormatter.format(new Date(`${date}T00:00:00Z`));

  if (future) return `Not yet recorded · ${formattedDate}`;
  if (count === 0) return `No contributions · ${formattedDate}`;

  return `${count.toLocaleString("en")} ${count === 1 ? "contribution" : "contributions"} · ${formattedDate}`;
}

function contributionLabel(count: number) {
  return `${count.toLocaleString("en")} ${count === 1 ? "contribution" : "contributions"}`;
}

function summarizeCalendar(calendar: ActivityCalendar, available: boolean) {
  if (!available) {
    return {
      activeDays: 0,
      facts: [
        { label: "Active days", value: "—", detail: "Unavailable" },
        { label: "Busiest day", value: "—", detail: "Unavailable" },
        { label: "Busiest month", value: "—", detail: "Unavailable" },
        { label: `${calendar.year} total`, value: "—", detail: "Unavailable" },
      ],
    };
  }

  const monthTotals = new Map<string, number>();
  let activeDays = 0;
  let busiestDay: ActivityCell | null = null;

  for (const cell of calendar.cells) {
    if (cell.outsideYear || cell.future) continue;

    if (cell.count > 0) activeDays += 1;
    if (!busiestDay || cell.count > busiestDay.count) busiestDay = cell;

    const month = cell.date.slice(0, 7);
    monthTotals.set(month, (monthTotals.get(month) ?? 0) + cell.count);
  }

  const busiestMonth = [...monthTotals.entries()].reduce<
    [month: string, total: number] | null
  >((busiest, month) => (!busiest || month[1] > busiest[1] ? month : busiest), null);
  const hasContributions = calendar.totalContributions > 0;

  return {
    activeDays,
    facts: [
      {
        label: "Active days",
        value: activeDays.toLocaleString("en"),
        detail: "with contributions",
      },
      {
        label: "Busiest day",
        value:
          hasContributions && busiestDay
            ? metricDayFormatter.format(new Date(`${busiestDay.date}T00:00:00Z`))
            : "—",
        detail:
          hasContributions && busiestDay
            ? contributionLabel(busiestDay.count)
            : "No activity",
      },
      {
        label: "Busiest month",
        value:
          hasContributions && busiestMonth
            ? metricMonthFormatter.format(
                new Date(`${busiestMonth[0]}-01T00:00:00Z`),
              )
            : "—",
        detail:
          hasContributions && busiestMonth
            ? contributionLabel(busiestMonth[1])
            : "No activity",
      },
      {
        label: `${calendar.year} total`,
        value: calendar.totalContributions.toLocaleString("en"),
        detail: calendar.totalContributions === 1 ? "contribution" : "contributions",
      },
    ],
  };
}

export function GitHubContributionCalendar({
  calendars,
  source,
  status,
}: GitHubContributionCalendarProps) {
  const [selectedYear, setSelectedYear] = useState(String(calendars[0].year));
  const [focusDate, setFocusDate] = useState(firstRecordedDate(calendars[0]));
  const selectedCalendar =
    calendars.find((calendar) => String(calendar.year) === selectedYear) ??
    calendars[0];
  const yearSummary = useMemo(
    () => summarizeCalendar(selectedCalendar, status === "ready"),
    [selectedCalendar, status],
  );
  const monthLabels = useMemo(
    () =>
      selectedCalendar.cells.reduce<{ label: string; column: number }[]>(
        (labels, cell, index) => {
          if (cell.outsideYear || !cell.date.endsWith("-01")) return labels;

          labels.push({
            label: monthFormatter.format(new Date(`${cell.date}T00:00:00Z`)),
            column: Math.floor(index / 7) + 1,
          });

          return labels;
        },
        [],
      ),
    [selectedCalendar],
  );
  const isCurrentYear = selectedCalendar.year === calendars[0].year;
  const gridSummary =
    status === "ready"
      ? source === "authenticated-contributions"
        ? `${selectedCalendar.totalContributions.toLocaleString("en")} GitHub contributions, including authenticated private activity, across ${yearSummary.activeDays} active days in ${selectedCalendar.year}.`
        : `${selectedCalendar.totalContributions.toLocaleString("en")} recent public GitHub events across ${yearSummary.activeDays} active days in ${selectedCalendar.year}.`
      : "GitHub activity is temporarily unavailable.";

  function selectYear(value: unknown) {
    const year = String(value);
    const nextCalendar = calendars.find((calendar) => String(calendar.year) === year);

    if (!nextCalendar) return;

    setSelectedYear(year);
    setFocusDate(firstRecordedDate(nextCalendar));
  }

  function moveCellFocus(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const offsets: Partial<Record<KeyboardEvent<HTMLButtonElement>["key"], number>> = {
      ArrowUp: -1,
      ArrowDown: 1,
      ArrowLeft: -7,
      ArrowRight: 7,
    };
    const offset = offsets[event.key];

    if (offset === undefined) return;

    const target = event.currentTarget.parentElement?.querySelector<HTMLButtonElement>(
      `[data-cell-index="${index + offset}"]`,
    );

    if (!target) return;

    event.preventDefault();
    target.focus();
  }

  return (
    <div className="flex min-w-0 flex-col justify-center overflow-hidden border-b border-[var(--cobalt)] px-5 py-6 min-[641px]:px-6 min-[641px]:py-[1.4rem]">
      <div className="mb-[0.85rem] flex min-w-0 items-center justify-between gap-4">
        <p
          className="m-0 font-mono [font-size:var(--type-micro)] tracking-[0.04em] text-[var(--ink-muted)] uppercase"
          aria-live="polite"
        >
          <span className="font-[650] text-[var(--ink)]">{selectedCalendar.year}</span>
          {isCurrentYear ? " · year to date" : " · full year"}
        </p>

        <DropdownMenu>
          <DropdownMenuTrigger
            className="inline-flex min-h-11 min-w-[8.5rem] shrink-0 items-center justify-between gap-[0.65rem] rounded-[2px] border border-[var(--cobalt)] bg-[var(--control-surface)] px-[0.7rem] font-mono [font-size:var(--type-micro)] tracking-[0.04em] text-[var(--cobalt)] uppercase transition-colors duration-[140ms] hover:bg-[var(--paper-raised)] hover:text-[var(--cobalt-dark)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--cobalt)] data-popup-open:bg-[var(--paper-raised)] data-popup-open:text-[var(--cobalt-dark)] [&_strong]:[font-size:var(--type-label)] [&_strong]:font-[650] [&_strong]:text-[var(--ink)] [&_svg]:size-[0.9rem]"
            aria-label={`Select contribution year. Current selection: ${selectedCalendar.year}`}
          >
            <span>Year</span>
            <strong>{selectedCalendar.year}</strong>
            <CaretDown aria-hidden="true" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            sideOffset={5}
            className="w-60 min-w-60 rounded-[2px] border border-[var(--cobalt)] bg-[var(--paper-raised)] bg-[url('/paper-texture.webp')] p-[0.3rem] [background-blend-mode:var(--paper-texture-blend)] [background-size:620px] font-mono text-[var(--ink)] shadow-[4px_7px_18px_var(--shadow-medium)] [&_[data-slot=dropdown-menu-label]]:border-b [&_[data-slot=dropdown-menu-label]]:border-[var(--rule-soft)] [&_[data-slot=dropdown-menu-label]]:px-[0.6rem] [&_[data-slot=dropdown-menu-label]]:py-[0.55rem] [&_[data-slot=dropdown-menu-label]]:[font-size:var(--type-micro)] [&_[data-slot=dropdown-menu-label]]:font-[650] [&_[data-slot=dropdown-menu-label]]:tracking-[0.05em] [&_[data-slot=dropdown-menu-label]]:text-[var(--cobalt)] [&_[data-slot=dropdown-menu-label]]:uppercase"
          >
            <DropdownMenuRadioGroup value={selectedYear} onValueChange={selectYear}>
              <DropdownMenuLabel>Contribution year</DropdownMenuLabel>
              {calendars.map((calendar) => (
                <DropdownMenuRadioItem
                  value={String(calendar.year)}
                  closeOnClick
                  className="grid min-h-11 grid-cols-[3rem_minmax(0,1fr)] gap-[0.7rem] rounded-[1px] py-[0.55rem] pr-[1.9rem] pl-[0.6rem] [font-size:var(--type-label)] focus:bg-[var(--lime-soft)] focus:text-[var(--ink)] data-checked:bg-[var(--lime-soft)] data-checked:text-[var(--ink)] [&_small]:overflow-hidden [&_small]:text-right [&_small]:text-ellipsis [&_small]:whitespace-nowrap [&_small]:[font-size:var(--type-micro)] [&_small]:text-[var(--ink-muted)] focus:[&_small]:text-[var(--ink)] data-checked:[&_small]:text-[var(--ink)]"
                  key={calendar.year}
                >
                  <span>{calendar.year}</span>
                  <small>
                    {calendar.totalContributions.toLocaleString("en")} contributions
                  </small>
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <p className="sr-only" id="activity-grid-summary">
        {gridSummary} Use arrow keys to inspect adjacent days.
      </p>

      <div className="w-full overflow-x-auto [overscroll-behavior-inline:contain] [scrollbar-color:var(--cobalt)_var(--paper-deep)] [scrollbar-width:thin]">
        <div className="grid w-max min-w-full grid-cols-[1.6rem_max-content] gap-2">
          <div
            className="grid grid-rows-[repeat(7,0.72rem)] gap-1 pt-[1.14rem] font-mono [font-size:var(--type-diagram)] leading-[0.72rem] text-[var(--ink-muted)] uppercase [&>span:nth-child(1)]:row-start-2 [&>span:nth-child(2)]:row-start-4 [&>span:nth-child(3)]:row-start-6"
            aria-hidden="true"
          >
            <span>Mon</span>
            <span>Wed</span>
            <span>Fri</span>
          </div>

          <div className="w-max">
            <div
              className="mb-[0.45rem] grid w-max grid-cols-[repeat(53,0.72rem)] gap-1 font-mono [font-size:var(--type-micro)] text-[var(--ink-muted)] uppercase [&_span]:whitespace-nowrap"
              aria-hidden="true"
            >
              {monthLabels.map((month) => (
                <span
                  style={{ gridColumn: month.column }}
                  key={`${selectedCalendar.year}-${month.label}`}
                >
                  {month.label}
                </span>
              ))}
            </div>

            <TooltipProvider delay={0}>
              <div
                className="grid w-max auto-cols-[0.72rem] grid-flow-col grid-rows-[repeat(7,0.72rem)] gap-1"
                role="group"
                aria-describedby="activity-grid-summary"
              >
                {selectedCalendar.cells.map((cell, index) =>
                  cell.outsideYear ? (
                    <span
                      className={activityCellClass}
                      data-outside-year="true"
                      key={cell.date}
                      aria-hidden="true"
                    />
                  ) : (
                    <Tooltip key={cell.date}>
                      <TooltipTrigger
                        type="button"
                        className={activityCellClass}
                        data-cell-index={index}
                        data-level={cell.level}
                        data-future={cell.future || undefined}
                        tabIndex={cell.date === focusDate ? 0 : -1}
                        aria-label={tooltipLabel(cell.date, cell.count, cell.future)}
                        onFocus={() => setFocusDate(cell.date)}
                        onKeyDown={(event) => moveCellFocus(event, index)}
                      />
                      <TooltipContent
                        className="min-h-8 whitespace-nowrap rounded-[2px] border border-[var(--cobalt)] bg-[var(--paper-raised)] px-[0.6rem] py-[0.45rem] font-mono [font-size:var(--type-micro)] leading-[1.35] text-[var(--ink)] shadow-[3px_5px_14px_var(--shadow-tooltip)] [&>svg]:fill-[var(--cobalt)] [&>svg]:bg-[var(--cobalt)]"
                        sideOffset={8}
                      >
                        {tooltipLabel(cell.date, cell.count, cell.future)}
                      </TooltipContent>
                    </Tooltip>
                  ),
                )}
              </div>
            </TooltipProvider>
          </div>
        </div>
      </div>

      <div
        className="mt-[0.6rem] flex w-max items-center gap-[0.28rem] self-end font-mono [font-size:var(--type-micro)] text-[var(--ink-muted)]"
        aria-hidden="true"
      >
        <span>Less</span>
        {[0, 1, 2, 3, 4].map((level) => (
          <i
            className={cn(activitySwatchClass, "size-[0.62rem]")}
            data-level={level}
            key={level}
          />
        ))}
        <span>More</span>
      </div>

      <dl
        className="mt-4 mb-0 grid min-w-0 grid-cols-2 border-y border-[var(--rule-soft)] min-[641px]:grid-cols-4"
        aria-label={`${selectedCalendar.year} contribution summary`}
      >
        {yearSummary.facts.map((fact, index) => (
          <div
            className={cn(
              "min-w-0 px-[clamp(0.7rem,1.3vw,1.15rem)] py-[0.8rem]",
              index === 0
                ? "border-l-0"
                : index === 2
                  ? "border-l-0 min-[641px]:border-l min-[641px]:border-[var(--rule-soft)]"
                  : "border-l border-[var(--rule-soft)]",
              index >= 2 && "border-t border-[var(--rule-soft)] min-[641px]:border-t-0",
            )}
            key={fact.label}
          >
            <dt className="font-mono [font-size:var(--type-micro)] tracking-[0.05em] text-[var(--ink-muted)] uppercase">
              {fact.label}
            </dt>
            <dd className="mt-[0.7rem] mb-0 flex min-w-0 flex-col gap-1">
              <strong className="overflow-hidden text-ellipsis whitespace-nowrap font-mono text-[clamp(1.05rem,1.7vw,1.35rem)] leading-none font-[650] tracking-[-0.02em] text-[var(--ink)]">
                {fact.value}
              </strong>
              <span className="overflow-hidden text-ellipsis whitespace-nowrap font-mono [font-size:var(--type-micro)] leading-[1.3] text-[var(--ink-muted)]">
                {fact.detail}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
