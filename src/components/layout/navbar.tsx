"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Container from "./container";
import { navigation } from "@/data/navigation";
import { personalInfo } from "@/data/personal-info";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-base font-semibold tracking-tight text-[var(--foreground)] transition hover:opacity-70"
          >
            {personalInfo.fullName}
          </Link>

          <nav className="flex items-center gap-1">
            {navigation.filter((item) => item.href !== "/").map((item) => {
              const active = pathname === item.href;
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
      </Container>
    </header>
  );
}
