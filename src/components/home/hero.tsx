import Image from "next/image";
import { useTranslations } from "next-intl";

import Container from "@/components/layout/container";
import { personalInfo } from "@/data/personal-info";
import { socialLinks } from "@/data/social-links";
import { Link } from "@/i18n/navigation";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="section">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr_320px] lg:gap-24">
          <div className="flex flex-col gap-8">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-1.5 text-xs font-medium text-[var(--muted)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
              {personalInfo.location} · {personalInfo.school}
            </span>

            <div className="flex flex-col gap-4">
              <h1 className="max-w-2xl">{t("headline")}</h1>
              <p className="max-w-xl text-lg leading-relaxed text-[var(--muted)]">{t("shortBio")}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/projects" className="button-primary">
                {t("viewProjects")}
              </Link>
              <a href={socialLinks.cv} target="_blank" rel="noopener noreferrer" className="button-secondary">
                {t("downloadCv")}
              </a>
            </div>

            <div className="flex flex-wrap gap-6 border-t border-[var(--border)] pt-6 text-sm text-[var(--muted)]">
              <div>
                <span className="block text-xs font-medium uppercase tracking-widest text-[var(--muted)] opacity-60">
                  {t("education")}
                </span>
                <span className="mt-1 block font-medium text-[var(--foreground)]">{personalInfo.degree}</span>
              </div>
              <div>
                <span className="block text-xs font-medium uppercase tracking-widest text-[var(--muted)] opacity-60">
                  {t("location")}
                </span>
                <span className="mt-1 block font-medium text-[var(--foreground)]">{personalInfo.location}</span>
              </div>
              <div>
                <span className="block text-xs font-medium uppercase tracking-widest text-[var(--muted)] opacity-60">
                  {t("availability")}
                </span>
                <span className="mt-1 block font-medium text-[var(--foreground)]">{t("availabilityValue")}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--secondary)]">
              <Image
                src="/images/profile/photo de profil.jpeg"
                alt={`Portrait de ${personalInfo.fullName}`}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="card flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--primary)]">{t("currently")}</span>
              <p className="text-sm leading-relaxed text-[var(--muted)]">{t("currentGoal")}</p>
              <p className="text-xs text-[var(--muted)] opacity-60">
                {t("objective")} · {personalInfo.longTermGoal}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
