import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import FeaturedProjects from "@/components/home/featured-projects";
import Hero from "@/components/home/hero";
import Container from "@/components/layout/container";
import { Link } from "@/i18n/navigation";
import { type Locale } from "@/i18n/routing";
import { resolveLocale } from "@/lib/locale";
import { getPageAlternates } from "@/lib/seo";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale: localeCandidate } = await params;
  const locale = resolveLocale(localeCandidate);
  const t = await getTranslations({ locale, namespace: "HomePage" });

  return {
    title: t("metadataTitle"),
    description: t("metadataDescription"),
    alternates: getPageAlternates(locale, "/")
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale: localeCandidate } = await params;
  const locale = resolveLocale(localeCandidate);
  const t = await getTranslations({ locale, namespace: "HomePage" });

  const pillars: Array<{
    key: "finance" | "execution" | "technology";
    href: "/experiences" | "/projects";
  }> = [
    {
      key: "finance",
      href: "/experiences"
    },
    {
      key: "execution",
      href: "/experiences"
    },
    {
      key: "technology",
      href: "/projects"
    }
  ];

  return (
    <>
      <Hero />

      <section className="section border-t border-[var(--border)]">
        <Container>
          <div className="mb-12 max-w-xl">
            <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-[var(--primary)]">
              {t("profileLabel")}
            </span>
            <h2 className="mb-3">{t("profileTitle")}</h2>
            <p className="text-base text-[var(--muted)]">{t("profileDescription")}</p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {pillars.map((pillar) => (
              <Link
                key={pillar.key}
                href={pillar.href}
                locale={locale as Locale}
                className="card group flex flex-col gap-4 no-underline"
              >
                <span className="w-fit rounded-full border border-[var(--border)] px-3 py-1 text-xs font-semibold text-[var(--primary)]">
                  {t(`pillars.${pillar.key}.label`)}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-semibold text-[var(--foreground)] transition group-hover:text-[var(--primary)]">
                    {t(`pillars.${pillar.key}.headline`)}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--muted)]">
                    {t(`pillars.${pillar.key}.body`)}
                  </p>
                </div>
                <span className="mt-auto text-xs font-medium text-[var(--primary)] opacity-0 transition group-hover:opacity-100">
                  {t("learnMore")} →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <FeaturedProjects />

      <section className="section border-t border-[var(--border)]">
        <Container>
          <div className="rounded-2xl bg-[var(--foreground)] px-8 py-12 text-center sm:px-16">
            <h2 className="mb-4 text-white">{t("ctaTitle")}</h2>
            <p className="mx-auto mb-8 max-w-lg text-sm leading-relaxed text-white/60">
              {t("ctaDescription")}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                locale={locale as Locale}
                className="button-primary bg-white !text-[var(--foreground)] hover:bg-white/90"
              >
                {t("ctaContact")}
              </Link>
              <Link
                href="/about"
                locale={locale as Locale}
                className="button-secondary !border-white/20 !text-white hover:!bg-white/10"
              >
                {t("ctaAbout")}
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
