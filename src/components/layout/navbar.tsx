"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";

import Container from "./container";
import { personalInfo } from "@/data/personal-info";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { type Locale, routing } from "@/i18n/routing";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale() as Locale;
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.projects"), href: "/projects" },
    { label: t("nav.experiences"), href: "/experiences" },
    { label: t("nav.cv"), href: "/cv" },
    { label: t("nav.contact"), href: "/contact" }
  ] as const;

  const switchLocale = (nextLocale: Locale) => {
    router.replace(pathname, { locale: nextLocale });
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-base font-semibold tracking-tight text-[var(--foreground)] transition hover:opacity-70"
            onClick={() => setIsOpen(false)}
            aria-label={t("brandAriaLabel")}
          >
            {personalInfo.fullName}
          </Link>

          <button
            type="button"
            aria-label={isOpen ? t("closeMenu") : t("openMenu")}
            aria-expanded={isOpen}
            className="rounded-lg border border-[var(--border)] px-3 py-1.5 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--secondary)] md:hidden"
            onClick={() => setIsOpen((value) => !value)}
          >
            {t("menu")}
          </button>

          <div className="hidden items-center gap-3 md:flex">
            <nav className="flex items-center gap-1">
              {navItems.map((item) => {
                const active = pathname === item.href || pathname.startsWith(`${item.href}/`);

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

            <div className="flex items-center gap-1 rounded-lg border border-[var(--border)] bg-[var(--card)] p-1">
              {routing.locales.map((nextLocale) => {
                const active = nextLocale === locale;
                return (
                  <button
                    key={nextLocale}
                    type="button"
                    onClick={() => switchLocale(nextLocale)}
                    className={`rounded-md px-2.5 py-1 text-xs font-semibold transition ${
                      active
                        ? "bg-[var(--primary)] text-white"
                        : "text-[var(--muted)] hover:text-[var(--foreground)]"
                    }`}
                    aria-label={`${t("language")}: ${nextLocale.toUpperCase()}`}
                  >
                    {nextLocale === "fr" ? t("localeFr") : t("localeEn")}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {isOpen && (
          <nav className="flex flex-col gap-2 border-t border-[var(--border)] py-3 md:hidden">
            {navItems.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);

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

            <div className="mt-2 flex items-center gap-2 px-1">
              {routing.locales.map((nextLocale) => {
                const active = nextLocale === locale;

                return (
                  <button
                    key={nextLocale}
                    type="button"
                    onClick={() => switchLocale(nextLocale)}
                    className={`rounded-md border px-3 py-1.5 text-xs font-semibold transition ${
                      active
                        ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                        : "border-[var(--border)] text-[var(--muted)]"
                    }`}
                  >
                    {nextLocale === "fr" ? t("localeFr") : t("localeEn")}
                  </button>
                );
              })}
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}
