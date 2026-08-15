"use client";

import { ArrowRightIcon } from "@phosphor-icons/react/dist/csr/ArrowRight";
import { ListIcon } from "@phosphor-icons/react/dist/csr/List";
import { useEffect, useState } from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
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

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
  { label: "Blog", href: "#blog" },
] as const;

export function SiteHeader() {
  const [activeHash, setActiveHash] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const syncHash = () => setActiveHash(window.location.hash || "#home");
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
  }, []);

  const chooseDestination = (href: string) => {
    setActiveHash(href);
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <a
        className="site-brand"
        href="#home"
        aria-label="Marc Mansour, home"
        onClick={() => chooseDestination("#home")}
      >
        MARC MANSOUR
      </a>

      <NavigationMenu className="site-nav" aria-label="Primary navigation">
        <NavigationMenuList className="site-tabs">
          {navigation.map((item) => (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink
                className="site-tab"
                href={item.href}
                active={activeHash === item.href}
                onClick={() => chooseDestination(item.href)}
              >
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="register-stamp" aria-hidden="true">
        <span>Book</span>
        <strong>01</strong>
        <span>Page</span>
        <strong>A</strong>
      </div>

      <div className="site-mobile-nav">
        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger
            render={
              <Button
                className="site-menu-trigger"
                variant="ghost"
                aria-label="Open navigation"
              />
            }
          >
            <ListIcon aria-hidden="true" weight="bold" />
            <span>Menu</span>
          </SheetTrigger>

          <SheetContent className="mobile-nav-sheet" side="right">
            <SheetHeader className="mobile-nav-header">
              <SheetTitle>Site index</SheetTitle>
              <SheetDescription>
                Financial tools, software, and public notes by Marc Mansour.
              </SheetDescription>
            </SheetHeader>

            <Separator className="mobile-nav-rule" />

            <nav className="mobile-nav-links" aria-label="Mobile navigation">
              <ul>
                {navigation.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      aria-current={activeHash === item.href ? "page" : undefined}
                      onClick={() => chooseDestination(item.href)}
                    >
                      <span>{item.label}</span>
                      <ArrowRightIcon aria-hidden="true" weight="bold" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mobile-nav-register" aria-hidden="true">
              <span>Book 01</span>
              <span>Page A</span>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
