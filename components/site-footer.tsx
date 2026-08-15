import { EnvelopeSimple } from "@phosphor-icons/react/dist/ssr/EnvelopeSimple";
import { GithubLogo } from "@phosphor-icons/react/dist/ssr/GithubLogo";
import { LinkedinLogo } from "@phosphor-icons/react/dist/ssr/LinkedinLogo";
import { XLogo } from "@phosphor-icons/react/dist/ssr/XLogo";
import { cacheLife } from "next/cache";

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

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-invitation">
        <h2>Have a financial tool worth making clearer?</h2>
        <a href={publicProfile.email.url}>Start a conversation</a>
      </div>
      <div className="footer-index">
        <p>Marc Mansour · Finance × software</p>
        <ul aria-label="Contact links">
          {contactLinks.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
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
        <p>
          © <CurrentYear /> Marc Mansour
        </p>
      </div>
    </footer>
  );
}
