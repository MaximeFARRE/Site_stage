import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { contactMethods } from "@/data/contact";
import { Link } from "@/i18n/navigation";
import { type Locale } from "@/i18n/routing";
import { resolveLocale } from "@/lib/locale";
import { getPageAlternates } from "@/lib/seo";

type ContactPageProps = {
  params: Promise<{ locale: string }>;
};

const methodTranslationKeys: Record<string, "emailDescription" | "linkedinDescription" | "githubDescription"> = {
  Email: "emailDescription",
  LinkedIn: "linkedinDescription",
  GitHub: "githubDescription"
};

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const { locale: localeCandidate } = await params;
  const locale = resolveLocale(localeCandidate);
  const t = await getTranslations({ locale, namespace: "ContactPage" });

  return {
    title: t("metadataTitle"),
    description: t("metadataDescription"),
    alternates: getPageAlternates(locale, "/contact")
  };
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale: localeCandidate } = await params;
  const locale = resolveLocale(localeCandidate);
  const t = await getTranslations({ locale, namespace: "ContactPage" });

  return (
    <main className="section">
      <div className="container-custom space-y-16">
        <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="space-y-6">
            <div className="inline-flex w-fit items-center rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm text-[var(--muted)]">
              {t("badge")}
            </div>

            <div className="space-y-4">
              <h1 className="section-title max-w-3xl">{t("title")}</h1>

              <p className="max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">
                {t("description")}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="mailto:maxime.farre8@gmail.com" className="button-primary">
                {t("writeEmail")}
              </a>

              <Link href="/cv" locale={locale as Locale} className="button-secondary">
                {t("viewCv")}
              </Link>
            </div>
          </div>

          <aside className="card space-y-5">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
              {t("availabilityTitle")}
            </p>

            <div className="space-y-3">
              <h2 className="text-2xl font-semibold">{t("availabilityHeading")}</h2>
              <p className="text-sm leading-7 text-[var(--muted)]">{t("availabilityDescription")}</p>
            </div>

            <div className="h-px w-full bg-[var(--border)]" />

            <div className="space-y-3 text-sm text-[var(--muted)]">
              <p>
                <span className="font-medium text-[var(--foreground)]">{t("info.locationLabel")}:</span>{" "}
                {t("info.locationValue")}
              </p>
              <p>
                <span className="font-medium text-[var(--foreground)]">{t("info.formatLabel")}:</span>{" "}
                {t("info.formatValue")}
              </p>
              <p>
                <span className="font-medium text-[var(--foreground)]">{t("info.domainsLabel")}:</span>{" "}
                {t("info.domainsValue")}
              </p>
            </div>
          </aside>
        </section>

        <section className="space-y-6">
          <div className="space-y-3">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--muted)]">{t("contactLabel")}</p>
            <h2 className="section-title">{t("contactTitle")}</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {contactMethods.map((method) => (
              <a
                key={method.title}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noreferrer" : undefined}
                className="card block transition duration-200 hover:-translate-y-1 hover:border-[var(--primary)]"
              >
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--muted)]">{method.title}</p>
                    <h3 className="mt-2 break-all text-xl font-semibold">{method.value}</h3>
                  </div>

                  <p className="text-sm leading-7 text-[var(--muted)]">
                    {t(`methods.${methodTranslationKeys[method.title]}`)}
                  </p>

                  <span className="inline-flex text-sm font-medium text-[var(--primary)]">{t("open")}</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="card">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="space-y-3">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--muted)]">{t("directMessageLabel")}</p>
              <h2 className="text-2xl font-semibold md:text-3xl">{t("directMessageTitle")}</h2>
              <p className="max-w-2xl text-sm leading-7 text-[var(--muted)] md:text-base">{t("directMessageDescription")}</p>
            </div>

            <a href="mailto:maxime.farre8@gmail.com" className="button-primary">
              {t("sendEmail")}
            </a>
          </div>
        </section>

        <section className="card bg-[var(--foreground)] text-[var(--background)]">
          <div className="space-y-5">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--background)]/70">{t("nextLabel")}</p>
            <h2 className="max-w-3xl text-3xl font-semibold md:text-4xl">{t("nextTitle")}</h2>
            <p className="max-w-2xl text-sm leading-7 text-[var(--background)]/75 md:text-base">{t("nextDescription")}</p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/cv"
                locale={locale as Locale}
                className="rounded-full bg-[var(--background)] px-5 py-3 text-sm font-medium text-[var(--foreground)] transition hover:opacity-90"
              >
                {t("viewCv")}
              </Link>

              <Link
                href="/projects"
                locale={locale as Locale}
                className="rounded-full border border-[var(--background)]/20 px-5 py-3 text-sm font-medium text-[var(--background)] transition hover:bg-[var(--background)]/10"
              >
                {t("viewProjects")}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
