"use client";

import { ArrowRightIcon } from "@phosphor-icons/react/dist/csr/ArrowRight";
import { ListIcon } from "@phosphor-icons/react/dist/csr/List";
import type { Route } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navigation = [
  { label: "Home", homeHref: "#home", awayHref: "/#home", activeKey: "#home" },
  {
    label: "Projects",
    homeHref: "/projects",
    awayHref: "/projects",
    activeKey: "/projects",
  },
  { label: "About", homeHref: "/about", awayHref: "/about", activeKey: "/about" },
  {
    label: "Resume",
    homeHref: "/cv",
    awayHref: "/cv",
    activeKey: "/cv",
  },
  {
    label: "Contact",
    homeHref: "/contact",
    awayHref: "/contact",
    activeKey: "/contact",
  },
  { label: "Blog", homeHref: "/blog", awayHref: "/blog", activeKey: "/blog" },
] as const;

type SiteHeaderProps = {
  activePage?: "home" | "projects" | "about" | "resume" | "contact" | "blog";
};

export function SiteHeader({ activePage = "home" }: SiteHeaderProps) {
  const [activeDestination, setActiveDestination] = useState(
    activePage === "about"
      ? "/about"
      : activePage === "contact"
        ? "/contact"
        : activePage === "resume"
          ? "/cv"
          : activePage === "projects"
            ? "/projects"
            : activePage === "blog"
              ? "/blog"
              : "#home",
  );
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const syncHash = () => {
      if (activePage === "home") {
        setActiveDestination(window.location.hash || "#home");
      }
    };
    const desktopQuery = window.matchMedia("(min-width: 901px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false);
    };

    syncHash();
    window.addEventListener("hashchange", syncHash);
    desktopQuery.addEventListener("change", closeOnDesktop);

    return () => {
      window.removeEventListener("hashchange", syncHash);
      desktopQuery.removeEventListener("change", closeOnDesktop);
    };
  }, [activePage]);

  const chooseDestination = (activeKey: string) => {
    setActiveDestination(activeKey);
    setMenuOpen(false);
  };

  const homeHref = activePage === "home" ? "#home" : "/#home";
  const pageCode =
    activePage === "contact"
      ? "C"
      : activePage === "about"
        ? "B"
        : activePage === "resume"
          ? "R"
          : activePage === "projects"
            ? "P"
            : activePage === "blog"
              ? "W"
              : "A";

  return (
    <header className="sticky top-0 z-40 grid min-h-[4.6rem] grid-cols-[minmax(0,1fr)_auto] border-b border-[var(--cobalt)] bg-[var(--header-surface-strong)] min-[901px]:h-svh min-[901px]:min-h-0 min-[901px]:grid-cols-1 min-[901px]:grid-rows-[auto_1fr_auto] min-[901px]:border-b-0 min-[901px]:bg-[var(--header-surface)]">
      <Link
        className="flex min-h-[4.6rem] items-center pr-6 pl-[1.6rem] font-mono text-[clamp(1.0625rem,1.6vw,1.3125rem)] leading-none font-bold tracking-[0.065em] text-[var(--ink)] no-underline min-[641px]:pl-[var(--page-gutter)] min-[901px]:min-h-[5.5rem] min-[901px]:border-b min-[901px]:border-[var(--cobalt)] min-[901px]:px-5 min-[901px]:text-[0.9rem] min-[901px]:leading-[1.25]"
        href={homeHref}
        aria-label="Marc Mansour, home"
        onClick={() => chooseDestination("#home")}
      >
        MARC MANSOUR
      </Link>

      <NavigationMenu
        className="hidden w-full min-w-0 max-w-none min-[901px]:flex min-[901px]:items-start"
        aria-label="Primary navigation"
      >
        <NavigationMenuList className="m-0 grid h-auto w-full grid-cols-1 list-none p-0 [&>li]:min-w-0">
          {navigation.map((item, index) => {
            const href = activePage === "home" ? item.homeHref : item.awayHref;
            const isActive = activeDestination === item.activeKey;

            return (
              <NavigationMenuItem key={item.label}>
                <Link
                  className={cn(
                    "relative grid min-h-[4rem] grid-cols-[2.15rem_minmax(0,1fr)] items-center gap-2 border-b border-[var(--rule-soft)] bg-[var(--tab-surface)] px-4 font-mono [font-size:var(--type-label)] tracking-[0.04em] text-[var(--ink)] uppercase no-underline transition-colors duration-[180ms] hover:bg-[var(--paper-raised)] hover:text-[var(--cobalt)] aria-[current=page]:bg-[var(--selection-surface)] aria-[current=page]:font-bold aria-[current=page]:text-[var(--cobalt)] after:absolute after:bottom-0 after:left-4 after:h-0.5 after:w-0 after:bg-[var(--signal)] after:transition-[width] after:duration-[180ms] aria-[current=page]:after:w-5",
                  )}
                  href={href as Route}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => chooseDestination(item.activeKey)}
                >
                  <span className="text-[var(--cobalt)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item.label}</span>
                </Link>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>

      <div
        className="hidden grid-cols-[1fr_auto] content-center gap-x-3 gap-y-[0.15rem] border-t border-[var(--cobalt)] px-4 py-5 font-mono [font-size:var(--type-micro)] tracking-[0.055em] text-[var(--cobalt)] uppercase min-[901px]:grid [&>strong]:font-serif [&>strong]:text-base [&>strong]:font-normal [&>strong]:italic"
        aria-hidden="true"
      >
        <span>Book</span>
        <strong>01</strong>
        <span>Page</span>
        <strong>{pageCode}</strong>
      </div>

      <div className="flex min-[901px]:hidden">
        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger
            render={
              <Button
                className="h-full min-h-[4.6rem] min-w-[6.5rem] gap-[0.6rem] rounded-none border-0 border-l border-[var(--cobalt)] bg-[var(--tab-surface)] font-mono [font-size:var(--type-label)] font-bold tracking-[0.05em] text-[var(--ink)] uppercase hover:bg-[var(--paper-raised)] hover:text-[var(--cobalt)] aria-expanded:bg-[var(--paper-raised)] aria-expanded:text-[var(--cobalt)] [&_svg]:size-[1.15rem]"
                variant="ghost"
                aria-label="Open navigation"
              />
            }
          >
            <ListIcon aria-hidden="true" weight="bold" />
            <span>Menu</span>
          </SheetTrigger>

          <SheetContent
            className="max-w-none gap-0 overflow-y-auto border-l border-[var(--cobalt)] bg-[var(--paper-raised)] [background-blend-mode:normal,var(--paper-texture-blend)] [background-image:repeating-linear-gradient(to_bottom,transparent_0,transparent_31px,var(--rule-faint)_31px,var(--rule-faint)_32px),url('/paper-texture.webp')] [background-size:auto,720px_720px] text-[var(--ink)] shadow-[-18px_0_44px_var(--shadow-overlay)] before:pointer-events-none before:absolute before:inset-y-0 before:left-[1.55rem] before:w-px before:bg-[var(--margin-rule)] before:content-[''] data-[side=right]:w-[min(23rem,calc(100vw-0.75rem))] data-[side=right]:max-w-none [&>[data-slot=sheet-close]]:top-4 [&>[data-slot=sheet-close]]:right-4 [&>[data-slot=sheet-close]]:size-11 [&>[data-slot=sheet-close]]:rounded-[2px] [&>[data-slot=sheet-close]]:border [&>[data-slot=sheet-close]]:border-[var(--cobalt)] [&>[data-slot=sheet-close]]:bg-[var(--paper-raised)] [&>[data-slot=sheet-close]]:text-[var(--cobalt)] [&>[data-slot=sheet-close]]:hover:bg-[var(--paper-deep)]"
            side="right"
          >
            <SheetHeader className="gap-4 py-8 pr-[4.5rem] pl-12 pt-[5.75rem]">
              <SheetTitle className="font-serif text-[2.65rem] leading-none font-medium tracking-[-0.025em] text-[var(--ink)]">
                Site index
              </SheetTitle>
              <SheetDescription className="m-0 font-sans [font-size:var(--type-body)] leading-[1.65] text-[var(--ink-muted)]">
                Financial tools, software, and public notes by Marc Mansour.
              </SheetDescription>
            </SheetHeader>

            <Separator className="m-0 h-px bg-[var(--cobalt)]" />

            <nav aria-label="Mobile navigation">
              <ul className="m-0 list-none p-0">
                {navigation.map((item, index) => {
                  const href = activePage === "home" ? item.homeHref : item.awayHref;
                  const isActive = activeDestination === item.activeKey;

                  return (
                    <li key={item.label}>
                      <Link
                        className="grid min-h-[4.2rem] grid-cols-[1fr_auto] items-center gap-4 border-b border-[var(--rule-soft)] py-[0.9rem] pr-8 pl-12 font-mono [font-size:var(--type-control)] font-semibold tracking-[0.05em] text-[var(--ink)] uppercase no-underline transition-colors duration-[180ms] hover:bg-[var(--paper-deep)] hover:text-[var(--cobalt)] focus-visible:bg-[var(--paper-deep)] focus-visible:text-[var(--cobalt)] aria-[current=page]:bg-[var(--selection-surface)] aria-[current=page]:text-[var(--cobalt)] aria-[current=page]:underline aria-[current=page]:decoration-2 aria-[current=page]:decoration-[var(--signal)] aria-[current=page]:underline-offset-[0.55rem] [&_svg]:size-4"
                        href={href as Route}
                        aria-current={isActive ? "page" : undefined}
                        onClick={() => chooseDestination(item.activeKey)}
                      >
                        <span className="grid grid-cols-[2rem_1fr] gap-3">
                          <span className="text-[var(--cobalt)]">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span>{item.label}</span>
                        </span>
                        <ArrowRightIcon aria-hidden="true" weight="bold" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div
              className="mt-auto flex justify-between border-t border-[var(--cobalt)] py-[1.4rem] pr-8 pl-12 font-mono [font-size:var(--type-micro)] tracking-[0.055em] text-[var(--cobalt)] uppercase"
              aria-hidden="true"
            >
              <span>Book 01</span>
              <span>Page {pageCode}</span>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
