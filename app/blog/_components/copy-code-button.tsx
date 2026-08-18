"use client";

import { CheckIcon } from "@phosphor-icons/react/dist/csr/Check";
import { CopyIcon } from "@phosphor-icons/react/dist/csr/Copy";
import { WarningIcon } from "@phosphor-icons/react/dist/csr/Warning";
import type { MouseEvent } from "react";
import { useEffect, useRef, useState } from "react";

type CopyState = "idle" | "copied" | "error";

export function CopyCodeButton() {
  const [state, setState] = useState<CopyState>("idle");
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    },
    [],
  );

  async function copyCode(event: MouseEvent<HTMLButtonElement>) {
    const code = event.currentTarget.parentElement?.querySelector("code")?.textContent;

    if (!code) {
      setState("error");
      return;
    }

    try {
      await navigator.clipboard.writeText(code);
      setState("copied");
    } catch {
      setState("error");
    }

    if (resetTimer.current) clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setState("idle"), 1800);
  }

  const label = state === "copied" ? "Copied" : state === "error" ? "Copy failed" : "Copy";
  const Icon = state === "copied" ? CheckIcon : state === "error" ? WarningIcon : CopyIcon;

  return (
    <button
      className="not-typeset absolute top-2 right-2 z-10 inline-flex min-h-11 items-center gap-2 rounded-[2px] border border-white/25 bg-[#111c2a]/95 px-3 font-mono text-[0.6875rem] font-semibold tracking-[0.05em] text-[#edf3f0] uppercase transition-colors hover:border-[#78a8ff] hover:text-[#78a8ff]"
      type="button"
      onClick={copyCode}
      aria-live="polite"
    >
      <Icon aria-hidden="true" weight="bold" />
      {label}
    </button>
  );
}
