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
    <div className="activity-plot">
      <div className="activity-plot-toolbar">
        <p aria-live="polite">
          <span>{selectedCalendar.year}</span>
          {isCurrentYear ? " · year to date" : " · full year"}
        </p>

        <DropdownMenu>
          <DropdownMenuTrigger
            className="activity-year-trigger"
            aria-label={`Select contribution year. Current selection: ${selectedCalendar.year}`}
          >
            <span>Year</span>
            <strong>{selectedCalendar.year}</strong>
            <CaretDown aria-hidden="true" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            sideOffset={5}
            className="activity-year-menu"
          >
            <DropdownMenuRadioGroup value={selectedYear} onValueChange={selectYear}>
              <DropdownMenuLabel>Contribution year</DropdownMenuLabel>
              {calendars.map((calendar) => (
                <DropdownMenuRadioItem
                  value={String(calendar.year)}
                  closeOnClick
                  className="activity-year-option"
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

      <div className="activity-calendar-scroll">
        <div className="activity-calendar-frame">
          <div className="activity-day-labels" aria-hidden="true">
            <span>Mon</span>
            <span>Wed</span>
            <span>Fri</span>
          </div>

          <div className="activity-calendar-axis">
            <div className="activity-months" aria-hidden="true">
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
                className="activity-grid"
                role="group"
                aria-describedby="activity-grid-summary"
              >
                {selectedCalendar.cells.map((cell, index) =>
                  cell.outsideYear ? (
                    <span
                      className="activity-cell"
                      data-outside-year="true"
                      key={cell.date}
                      aria-hidden="true"
                    />
                  ) : (
                    <Tooltip key={cell.date}>
                      <TooltipTrigger
                        type="button"
                        className="activity-cell"
                        data-cell-index={index}
                        data-level={cell.level}
                        data-future={cell.future || undefined}
                        tabIndex={cell.date === focusDate ? 0 : -1}
                        aria-label={tooltipLabel(cell.date, cell.count, cell.future)}
                        onFocus={() => setFocusDate(cell.date)}
                        onKeyDown={(event) => moveCellFocus(event, index)}
                      />
                      <TooltipContent className="activity-tooltip" sideOffset={8}>
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

      <div className="activity-legend" aria-hidden="true">
        <span>Less</span>
        {[0, 1, 2, 3, 4].map((level) => (
          <i data-level={level} key={level} />
        ))}
        <span>More</span>
      </div>

      <dl
        className="activity-year-facts"
        aria-label={`${selectedCalendar.year} contribution summary`}
      >
        {yearSummary.facts.map((fact) => (
          <div className="activity-year-fact" key={fact.label}>
            <dt>{fact.label}</dt>
            <dd>
              <strong>{fact.value}</strong>
              <span>{fact.detail}</span>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
