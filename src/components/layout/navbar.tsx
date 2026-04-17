"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import Container from "./container";
import { navigation } from "@/data/navigation";
import { personalInfo } from "@/data/personal-info";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-base font-semibold tracking-tight text-[var(--foreground)] transition hover:opacity-70"
            onClick={() => setIsOpen(false)}
          >
            {personalInfo.fullName}
          </Link>

          <button
            type="button"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
            className="rounded-lg border border-[var(--border)] px-3 py-1.5 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--secondary)] md:hidden"
            onClick={() => setIsOpen((value) => !value)}
          >
            Menu
          </button>

          <nav className="hidden items-center gap-1 md:flex">
            {navigation.filter((item) => item.href !== "/").map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${
                    active
                      ? "bg-[var(--secondary)] text-[var(--foreground)]"
                      : "text-[var(--muted)] hover:bg-[var(--secondary)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {isOpen && (
          <nav className="flex flex-col gap-2 border-t border-[var(--border)] py-3 md:hidden">
            {navigation.filter((item) => item.href !== "/").map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                    active
                      ? "bg-[var(--secondary)] text-[var(--foreground)]"
                      : "text-[var(--muted)] hover:bg-[var(--secondary)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        )}
      </Container>
    </header>
  );
}
