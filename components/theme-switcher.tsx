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
      className="theme-switcher"
      role="radiogroup"
      aria-label="Appearance"
    >
      <div className="theme-switcher-options">
        {themeOptions.map(({ value, label, description, icon: Icon }) => (
          <Button
            type="button"
            variant="ghost"
            className="theme-switcher-option"
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
