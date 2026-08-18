import { EnvelopeSimple } from "@phosphor-icons/react/dist/ssr/EnvelopeSimple";
import { GithubLogo } from "@phosphor-icons/react/dist/ssr/GithubLogo";
import { LinkedinLogo } from "@phosphor-icons/react/dist/ssr/LinkedinLogo";
import { XLogo } from "@phosphor-icons/react/dist/ssr/XLogo";
import { cacheLife } from "next/cache";
import Link from "next/link";

import { ThemeSwitcher } from "@/components/theme-switcher";
import { publicProfile } from "@/lib/public-profile";

const contactLinks = [
  {
    label: "LinkedIn",
    href: publicProfile.linkedin.url,
    icon: LinkedinLogo,
  },
  { label: "X", href: publicProfile.x.url, icon: XLogo },
  { label: "GitHub", href: publicProfile.github.url, icon: GithubLogo },
  {
    label: "Email",
    href: publicProfile.email.url,
    icon: EnvelopeSimple,
  },
] as const;

async function CurrentYear() {
  "use cache";

  cacheLife({ stale: 3600, revalidate: 3600, expire: 86400 });

  const currentYear = new Date().getFullYear();

  return <time dateTime={String(currentYear)}>{currentYear}</time>;
}

type SiteFooterProps = {
  showCta?: boolean;
};

export function SiteFooter({ showCta = true }: SiteFooterProps) {
  return (
    <footer id="contact" className="mt-auto scroll-mt-[5.9rem] min-[901px]:scroll-mt-6">
      {showCta ? (
        <div className="grid grid-cols-1 items-start gap-7 border-y border-[var(--cobalt)] px-[1.7rem] py-10 min-[641px]:px-[var(--page-gutter)] min-[641px]:py-[clamp(3rem,5vw,4.5rem)] min-[901px]:grid-cols-[minmax(0,1fr)_auto] min-[901px]:items-center">
          <h2 className="m-0 max-w-[22ch] text-balance font-serif text-[clamp(2rem,6vw,2.5rem)] leading-[1.08] font-medium tracking-[-0.025em] min-[641px]:text-[var(--type-section)]">
            Have a financial tool to discuss?
          </h2>
          <Link
            className="inline-flex min-h-[3.55rem] items-center justify-self-start border border-[var(--cobalt)] bg-[var(--cobalt)] px-[1.3rem] py-[0.85rem] font-mono [font-size:var(--type-label)] text-[var(--on-cobalt)] no-underline hover:bg-[var(--cobalt-dark)]"
            href="/contact"
          >
            Start a conversation
          </Link>
        </div>
      ) : null}
      <div className="grid min-h-20 grid-cols-[1fr_auto] items-center gap-6 bg-[var(--footer-bg)] px-[1.7rem] py-5 font-mono [font-size:var(--type-micro)] tracking-[0.04em] text-[var(--footer-ink)] uppercase min-[641px]:grid-cols-[1fr_auto_auto] min-[641px]:px-[var(--page-gutter)] min-[641px]:py-4 min-[901px]:grid-cols-[1fr_auto_auto_auto]">
        <p className="col-start-1 row-start-1 m-0">Marc Mansour · Finance × software</p>
        <ul
          className="col-span-full row-start-2 m-0 grid w-full list-none grid-cols-2 gap-[0.45rem] p-0 min-[641px]:flex min-[641px]:justify-start min-[901px]:col-auto min-[901px]:row-auto"
          aria-label="Contact links"
        >
          {contactLinks.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                className="inline-flex min-h-[2.7rem] min-w-[2.7rem] items-center justify-start gap-[0.45rem] border border-[var(--footer-rule)] px-[0.65rem] py-[0.55rem] text-[var(--footer-ink)] no-underline transition-[border-color,background-color] duration-[180ms] hover:border-[var(--lime)] hover:bg-[var(--footer-hover)] min-[641px]:justify-center [&_svg]:size-[1.1rem]"
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "me noopener noreferrer"}
              >
                <Icon aria-hidden="true" />
                <span>{label}</span>
              </a>
            </li>
          ))}
        </ul>
        <ThemeSwitcher />
        <p className="col-start-2 row-start-1 m-0 min-[641px]:col-start-3 min-[901px]:col-auto min-[901px]:row-auto">
          © <CurrentYear /> Marc Mansour
        </p>
      </div>
    </footer>
  );
}
