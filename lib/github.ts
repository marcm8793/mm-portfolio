import "server-only";

import { cacheLife, cacheTag } from "next/cache";

import { publicProfile } from "@/lib/public-profile";

const GITHUB_USERNAME = publicProfile.github.username;
const GITHUB_API_VERSION = "2026-03-10";
const GITHUB_GRAPHQL_URL = "https://api.github.com/graphql";

type GitHubProfileResponse = {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  created_at: string;
  public_repos: number;
  followers: number;
};

type GitHubEventResponse = {
  type: string;
  created_at: string;
  payload?: {
    commits?: unknown[];
  };
};

type GitHubContributionLevel =
  | "NONE"
  | "FIRST_QUARTILE"
  | "SECOND_QUARTILE"
  | "THIRD_QUARTILE"
  | "FOURTH_QUARTILE";

type GitHubContributionsResponse = {
  data?: {
    user: {
      contributionsCollection: {
        totalCommitContributions: number;
        contributionCalendar: {
          totalContributions: number;
          weeks: {
            contributionDays: {
              date: string;
              contributionCount: number;
              contributionLevel: GitHubContributionLevel;
            }[];
          }[];
        };
      };
    } | null;
  };
  errors?: { message: string }[];
};

export type ActivityCell = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
  future: boolean;
  outsideYear: boolean;
};

export type ActivityCalendar = {
  year: number;
  totalContributions: number;
  totalCommitContributions: number | null;
  cells: ActivityCell[];
};

export type GitHubActivity = {
  username: string;
  displayName: string;
  avatarUrl: string | null;
  profileUrl: string;
  stats: {
    repositories: number | null;
    longestStreak: number | null;
    currentStreak: number | null;
    followers: number | null;
  };
  calendarSource: "authenticated-contributions" | "public-events";
  calendars: ActivityCalendar[];
  status: "ready" | "unavailable";
};

const publicApiHeaders = {
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": GITHUB_API_VERSION,
};

async function fetchGitHubJson<T>(url: string): Promise<T> {
  const response = await fetch(url, { headers: publicApiHeaders });

  if (!response.ok) {
    throw new Error(`GitHub request failed with ${response.status}`);
  }

  return response.json() as Promise<T>;
}

function toUtcDateKey(date: Date) {
  return date.toISOString().slice(0, 10);
}

function getCurrentDay(today: Date) {
  return new Date(
    Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()),
  );
}

function getContributionWindow(year: number, today: Date) {
  const currentDay = getCurrentDay(today);
  const start = new Date(Date.UTC(year, 0, 1));
  const end = new Date(
    year === currentDay.getUTCFullYear()
      ? currentDay
      : Date.UTC(year, 11, 31),
  );

  end.setUTCHours(23, 59, 59, 999);

  return { start, end };
}

function getActivityYears(createdAt: string, today: Date) {
  const firstYear = new Date(createdAt).getUTCFullYear();
  const currentYear = today.getUTCFullYear();

  return Array.from(
    { length: currentYear - firstYear + 1 },
    (_, index) => currentYear - index,
  );
}

function getCalendarGrid(year: number) {
  const firstDay = new Date(Date.UTC(year, 0, 1));
  const start = new Date(firstDay);
  start.setUTCDate(firstDay.getUTCDate() - firstDay.getUTCDay());

  return { start, days: 53 * 7 };
}

function eventWeight(event: GitHubEventResponse) {
  if (event.type === "PushEvent") {
    return Math.max(1, event.payload?.commits?.length ?? 1);
  }

  return 1;
}

function buildCells(
  year: number,
  today: Date,
  counts: Map<string, number>,
  levels?: Map<string, ActivityCell["level"]>,
) {
  const currentDay = getCurrentDay(today);
  const { start, days } = getCalendarGrid(year);
  const rawCells = Array.from({ length: days }, (_, index) => {
    const date = new Date(start);
    date.setUTCDate(start.getUTCDate() + index);
    const key = toUtcDateKey(date);
    const outsideYear = date.getUTCFullYear() !== year;

    return {
      date: key,
      count: outsideYear ? 0 : counts.get(key) ?? 0,
      future: !outsideYear && date > currentDay,
      outsideYear,
    };
  });
  const max = Math.max(
    1,
    ...rawCells
      .filter((cell) => !cell.future && !cell.outsideYear)
      .map((cell) => cell.count),
  );

  return rawCells.map<ActivityCell>((cell) => ({
    ...cell,
    level: cell.future || cell.outsideYear
      ? 0
      : levels?.get(cell.date) ??
        (cell.count === 0
          ? 0
          : (Math.min(4, Math.ceil((cell.count / max) * 4)) as 1 | 2 | 3 | 4)),
  }));
}

function buildPublicEventCalendar(events: GitHubEventResponse[], today: Date) {
  const year = today.getUTCFullYear();
  const counts = new Map<string, number>();

  for (const event of events) {
    const date = event.created_at.slice(0, 10);
    counts.set(date, (counts.get(date) ?? 0) + eventWeight(event));
  }

  const cells = buildCells(year, today, counts);

  return {
    year,
    totalContributions: cells.reduce((total, cell) => total + cell.count, 0),
    totalCommitContributions: null,
    cells,
  } satisfies ActivityCalendar;
}

function contributionLevel(level: GitHubContributionLevel): ActivityCell["level"] {
  switch (level) {
    case "FIRST_QUARTILE":
      return 1;
    case "SECOND_QUARTILE":
      return 2;
    case "THIRD_QUARTILE":
      return 3;
    case "FOURTH_QUARTILE":
      return 4;
    default:
      return 0;
  }
}

function calculateStreaks(calendars: ActivityCalendar[], today: Date) {
  const counts = new Map<string, number>();

  for (const calendar of calendars) {
    for (const cell of calendar.cells) {
      if (!cell.outsideYear && !cell.future) counts.set(cell.date, cell.count);
    }
  }

  const days = [...counts.entries()].sort(([left], [right]) =>
    left.localeCompare(right),
  );
  let longestStreak = 0;
  let runningStreak = 0;

  for (const [, count] of days) {
    runningStreak = count > 0 ? runningStreak + 1 : 0;
    longestStreak = Math.max(longestStreak, runningStreak);
  }

  const cursor = getCurrentDay(today);
  if ((counts.get(toUtcDateKey(cursor)) ?? 0) === 0) {
    cursor.setUTCDate(cursor.getUTCDate() - 1);
  }

  let currentStreak = 0;
  while ((counts.get(toUtcDateKey(cursor)) ?? 0) > 0) {
    currentStreak += 1;
    cursor.setUTCDate(cursor.getUTCDate() - 1);
  }

  return { longestStreak, currentStreak };
}

async function fetchContributionCalendar(
  token: string,
  year: number,
  today: Date,
): Promise<ActivityCalendar> {
  const { start, end } = getContributionWindow(year, today);
  const response = await fetch(GITHUB_GRAPHQL_URL, {
    method: "POST",
    headers: {
      ...publicApiHeaders,
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query PortfolioContributions($login: String!, $from: DateTime!, $to: DateTime!) {
          user(login: $login) {
            contributionsCollection(from: $from, to: $to) {
              totalCommitContributions
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    date
                    contributionCount
                    contributionLevel
                  }
                }
              }
            }
          }
        }
      `,
      variables: {
        login: GITHUB_USERNAME,
        from: start.toISOString(),
        to: end.toISOString(),
      },
    }),
  });

  if (!response.ok) {
    throw new Error(`GitHub GraphQL request failed with ${response.status}`);
  }

  const result = (await response.json()) as GitHubContributionsResponse;
  const collection = result.data?.user?.contributionsCollection;

  if (!collection || result.errors?.length) {
    throw new Error(result.errors?.[0]?.message ?? "GitHub contribution calendar unavailable");
  }

  const days = collection.contributionCalendar.weeks.flatMap(
    (week) => week.contributionDays,
  );
  const counts = new Map(days.map((day) => [day.date, day.contributionCount]));
  const levels = new Map(
    days.map((day) => [day.date, contributionLevel(day.contributionLevel)]),
  );

  return {
    year,
    totalContributions: collection.contributionCalendar.totalContributions,
    totalCommitContributions: collection.totalCommitContributions,
    cells: buildCells(year, today, counts, levels),
  };
}

export async function getGitHubActivity(): Promise<GitHubActivity> {
  "use cache";

  cacheLife({ stale: 3600, revalidate: 3600, expire: 86400 });
  cacheTag(`github-activity:${GITHUB_USERNAME}`);

  const today = new Date();

  try {
    const token = process.env.GITHUB_TOKEN?.trim();
    const profile = await fetchGitHubJson<GitHubProfileResponse>(
      `https://api.github.com/users/${GITHUB_USERNAME}`,
    );
    const years = getActivityYears(profile.created_at, today);
    const contributionCalendars = token
      ? await Promise.all(
          years.map((year) => fetchContributionCalendar(token, year, today)),
        ).catch(() => null)
      : null;
    const events = contributionCalendars
      ? []
      : await fetchGitHubJson<GitHubEventResponse[]>(
          `https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=100`,
        );
    const calendars = contributionCalendars ?? [buildPublicEventCalendar(events, today)];
    const { longestStreak, currentStreak } = calculateStreaks(calendars, today);

    return {
      username: profile.login,
      displayName: profile.name ?? profile.login,
      avatarUrl: profile.avatar_url,
      profileUrl: profile.html_url,
      stats: {
        repositories: profile.public_repos,
        longestStreak,
        currentStreak,
        followers: profile.followers,
      },
      calendarSource: contributionCalendars
        ? "authenticated-contributions"
        : "public-events",
      calendars,
      status: "ready",
    };
  } catch {
    const calendar = buildPublicEventCalendar([], today);

    return {
      username: GITHUB_USERNAME,
      displayName: GITHUB_USERNAME,
      avatarUrl: null,
      profileUrl: publicProfile.github.url,
      stats: {
        repositories: null,
        longestStreak: null,
        currentStreak: null,
        followers: null,
      },
      calendarSource: "public-events",
      calendars: [calendar],
      status: "unavailable",
    };
  }
}
