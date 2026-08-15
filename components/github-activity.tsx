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
    <section className="activity-ledger" aria-labelledby="activity-title">
      <header className="activity-heading">
        <div>
          <h2 id="activity-title">GitHub activity</h2>
          <a href={activity.profileUrl} target="_blank" rel="me noopener noreferrer">
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
        className="activity-evidence"
        role="region"
        aria-label="GitHub account statistics"
      >
        <a
          className="activity-profile-card"
          href={activity.profileUrl}
          target="_blank"
          rel="me noopener noreferrer"
          aria-label={`Open ${activity.displayName}'s GitHub profile`}
        >
          <span className="activity-profile-avatar" aria-hidden="true">
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
          <span className="activity-profile-copy">
            <strong>{activity.displayName}</strong>
            <small>@{activity.username}</small>
          </span>
          <span className="activity-followers">
            <UsersThree aria-hidden="true" />
            {followerLabel}
          </span>
        </a>

        <dl className="activity-stats-list">
          {metrics.map((metric) => (
            <div
              className="activity-stat"
              data-current={metric.current || undefined}
              key={metric.label}
            >
              <dt>{metric.label}</dt>
              <dd>
                <strong>{formatMetric(metric.value)}</strong>
                <span>{metric.unit}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
