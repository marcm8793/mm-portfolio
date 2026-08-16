import { GithubLogo } from "@phosphor-icons/react/dist/ssr/GithubLogo";
import { UsersThree } from "@phosphor-icons/react/dist/ssr/UsersThree";
import Image from "next/image";

import { GitHubContributionCalendar } from "@/components/github-contribution-calendar";
import { getGitHubActivity } from "@/lib/github";

function formatMetric(value: number | null) {
  return value === null ? "—" : value.toLocaleString("en");
}

export async function GitHubActivity() {
  const activity = await getGitHubActivity();
  const metrics = [
    {
      label: "Repositories",
      value: activity.stats.repositories,
      unit: "public",
      current: false,
    },
    {
      label: "Longest streak",
      value: activity.stats.longestStreak,
      unit: "days",
      current: false,
    },
    {
      label: "Current streak",
      value: activity.stats.currentStreak,
      unit: "days",
      current: true,
    },
  ] as const;
  const followerLabel =
    activity.stats.followers === null
      ? "Followers unavailable"
      : `${activity.stats.followers.toLocaleString("en")} ${activity.stats.followers === 1 ? "follower" : "followers"}`;

  return (
    <section
      className="grid min-h-60 grid-cols-1 border-b border-[var(--cobalt)] bg-[var(--ledger-surface)] tabular-nums min-[641px]:grid-cols-[13rem_minmax(0,1fr)]"
      aria-labelledby="activity-title"
    >
      <header className="flex min-h-[6.5rem] min-w-0 flex-col justify-start border-b border-[var(--cobalt)] px-[var(--page-gutter)] py-[1.4rem] min-[641px]:min-h-0 min-[641px]:border-r min-[641px]:border-b-0">
        <div>
          <h2
            className="m-0 max-w-[12ch] font-mono [font-size:var(--type-control)] leading-[1.25] font-semibold tracking-[0.02em] text-[var(--cobalt)] uppercase"
            id="activity-title"
          >
            GitHub activity
          </h2>
          <a
            className="mt-[0.8rem] inline-flex items-center gap-2 font-mono [font-size:var(--type-label)] text-[var(--ink)] no-underline hover:text-[var(--cobalt)] hover:underline [&_svg]:size-[1.15rem]"
            href={activity.profileUrl}
            target="_blank"
            rel="me noopener noreferrer"
          >
            <GithubLogo weight="fill" aria-hidden="true" />
            {activity.username}
          </a>
        </div>
      </header>

      <GitHubContributionCalendar
        calendars={activity.calendars}
        source={activity.calendarSource}
        status={activity.status}
      />

      <div
        className="col-span-full grid min-w-0 grid-cols-1 min-[641px]:grid-cols-[minmax(15rem,0.9fr)_minmax(0,4.1fr)] min-[641px]:border-t min-[641px]:border-[var(--cobalt)]"
        role="region"
        aria-label="GitHub account statistics"
      >
        <a
          className="grid min-h-[6.5rem] grid-cols-[3rem_minmax(0,1fr)] grid-rows-[auto_auto] items-center gap-x-[0.8rem] gap-y-1 border-b border-[var(--cobalt)] px-[var(--page-gutter)] py-4 text-[var(--ink)] no-underline transition-colors duration-[180ms] hover:bg-[var(--paper-raised)] focus-visible:-outline-offset-4 min-[641px]:min-h-[7.5rem] min-[641px]:border-b-0"
          href={activity.profileUrl}
          target="_blank"
          rel="me noopener noreferrer"
          aria-label={`Open ${activity.displayName}'s GitHub profile`}
        >
          <span
            className="row-span-2 grid size-12 place-items-center overflow-hidden rounded-full border border-[var(--rule-soft)] bg-[var(--paper-deep)] [&_img]:size-full [&_img]:object-cover [&_svg]:size-6 [&_svg]:text-[var(--cobalt)]"
            aria-hidden="true"
          >
            {activity.avatarUrl ? (
              <Image
                src={activity.avatarUrl}
                alt=""
                width={56}
                height={56}
                sizes="48px"
              />
            ) : (
              <GithubLogo weight="fill" />
            )}
          </span>
          <span className="flex min-w-0 flex-wrap items-baseline gap-x-2 gap-y-[0.2rem] self-end">
            <strong className="overflow-hidden text-ellipsis whitespace-nowrap font-serif text-base leading-[1.1] font-semibold">
              {activity.displayName}
            </strong>
            <small className="font-mono [font-size:var(--type-micro)] text-[var(--ink-muted)]">
              @{activity.username}
            </small>
          </span>
          <span className="inline-flex items-center gap-[0.4rem] self-start font-mono [font-size:var(--type-micro)] tracking-[0.02em] text-[var(--ink-muted)] [&_svg]:size-[0.9rem]">
            <UsersThree aria-hidden="true" />
            {followerLabel}
          </span>
        </a>

        <dl className="m-0 grid min-w-0 grid-cols-3 border-l-0 border-[var(--cobalt)] min-[641px]:border-l">
          {metrics.map((metric) => (
            <div
              className="relative flex min-h-[6.5rem] min-w-0 flex-col justify-between border-l border-[var(--rule-soft)] px-[0.8rem] py-4 first:border-l-0 after:absolute after:top-4 after:right-4 after:hidden after:size-[0.45rem] after:bg-[var(--lime)] after:content-[''] data-[current=true]:after:block min-[641px]:min-h-[7.5rem] min-[641px]:px-[clamp(1rem,2vw,1.75rem)]"
              data-current={metric.current || undefined}
              key={metric.label}
            >
              <dt className="max-w-[13ch] font-mono [font-size:var(--type-micro)] tracking-[0.05em] text-[var(--ink-muted)] uppercase">
                {metric.label}
              </dt>
              <dd className="m-0 flex min-w-0 flex-col items-start gap-1 min-[641px]:flex-row min-[641px]:items-baseline min-[641px]:gap-[0.45rem]">
                <strong className="overflow-hidden text-ellipsis font-mono text-[clamp(1.55rem,8vw,2.25rem)] leading-[0.9] font-semibold tracking-[-0.03em] text-[var(--ink)] min-[641px]:text-[clamp(1.85rem,3vw,2.75rem)]">
                  {formatMetric(metric.value)}
                </strong>
                <span className="font-mono [font-size:var(--type-micro)] tracking-[0.04em] text-[var(--ink-muted)] uppercase">
                  {metric.unit}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
