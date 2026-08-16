"use client";

import { Monitor } from "@phosphor-icons/react/dist/csr/Monitor";
import { MoonStars } from "@phosphor-icons/react/dist/csr/MoonStars";
import { SunDim } from "@phosphor-icons/react/dist/csr/SunDim";
import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

const themeOptions = [
  {
    value: "light",
    label: "Light",
    description: "Paper ledger",
    icon: SunDim,
  },
  {
    value: "system",
    label: "System",
    description: "Follow device",
    icon: Monitor,
  },
  {
    value: "dark",
    label: "Dark",
    description: "Night ledger",
    icon: MoonStars,
  },
] as const;

type ThemeValue = (typeof themeOptions)[number]["value"];

const subscribeToHydration = () => () => {};

function isThemeValue(value: unknown): value is ThemeValue {
  return themeOptions.some((option) => option.value === value);
}

export function ThemeSwitcher() {
  const mounted = useSyncExternalStore(
    subscribeToHydration,
    () => true,
    () => false,
  );
  const { setTheme, theme } = useTheme();

  const selectedTheme = mounted && isThemeValue(theme) ? theme : "system";
  return (
    <div
      className="col-span-full row-start-3 min-h-[2.7rem] w-full min-w-[14.5rem] justify-self-stretch rounded-[2px] border border-[var(--footer-rule)] bg-transparent p-1 font-[inherit] tracking-[inherit] text-[var(--footer-ink)] uppercase min-[641px]:col-span-1 min-[641px]:col-start-2 min-[641px]:row-start-1 min-[641px]:w-auto min-[641px]:justify-self-auto min-[901px]:col-auto min-[901px]:row-auto"
      role="radiogroup"
      aria-label="Appearance"
    >
      <div className="flex min-w-0 items-stretch gap-px">
        {themeOptions.map(({ value, label, description, icon: Icon }) => (
          <Button
            type="button"
            variant="ghost"
            className="min-h-[2.2rem] min-w-[3.25rem] flex-1 gap-[0.3rem] rounded-[1px] border-0 bg-transparent px-[0.45rem] py-[0.35rem] font-[inherit] text-[0.62rem] tracking-[0.035em] text-[var(--footer-ink)] uppercase shadow-none transition-colors duration-[160ms] hover:bg-[var(--footer-hover)] hover:text-[var(--footer-ink)] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[var(--lime)] focus-visible:shadow-none data-[active=true]:bg-[var(--lime)] data-[active=true]:text-[#101828] [&_svg]:size-[0.95rem]"
            role="radio"
            aria-checked={selectedTheme === value}
            aria-label={`${label}: ${description}`}
            data-active={selectedTheme === value ? "true" : undefined}
            onClick={() => setTheme(value)}
            key={value}
          >
            <Icon weight="duotone" aria-hidden="true" />
            <span>{label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
