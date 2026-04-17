import Image from "next/image";
import Link from "next/link";

import Container from "@/components/layout/container";
import { personalInfo } from "@/data/personal-info";
import { socialLinks } from "@/data/social-links";

export default function Hero() {
  return (
    <section className="section">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr_320px] lg:gap-24">
          {/* Left column */}
          <div className="flex flex-col gap-8">
            {/* Badge */}
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-1.5 text-xs font-medium text-[var(--muted)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
              {personalInfo.location} · {personalInfo.school}
            </span>

            {/* Heading */}
            <div className="flex flex-col gap-4">
              <h1 className="max-w-2xl">
                {personalInfo.headline}
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-[var(--muted)]">
                {personalInfo.shortBio}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Link href="/projets" className="button-primary">
                Voir mes projets
              </Link>
              <Link
                href={socialLinks.cv}
                target="_blank"
                className="button-secondary"
              >
                Télécharger mon CV
              </Link>
            </div>

            {/* Meta */}
            <div className="flex flex-wrap gap-6 border-t border-[var(--border)] pt-6 text-sm text-[var(--muted)]">
              <div>
                <span className="block text-xs font-medium uppercase tracking-widest text-[var(--muted)] opacity-60">
                  Formation
                </span>
                <span className="mt-1 block font-medium text-[var(--foreground)]">
                  {personalInfo.degree}
                </span>
              </div>
              <div>
                <span className="block text-xs font-medium uppercase tracking-widest text-[var(--muted)] opacity-60">
                  Localisation
                </span>
                <span className="mt-1 block font-medium text-[var(--foreground)]">
                  {personalInfo.location}
                </span>
              </div>
              <div>
                <span className="block text-xs font-medium uppercase tracking-widest text-[var(--muted)] opacity-60">
                  Disponibilité
                </span>
                <span className="mt-1 block font-medium text-[var(--foreground)]">
                  Ouvert aux opportunités
                </span>
              </div>
            </div>
          </div>

          {/* Right column — currently block + placeholder photo */}
          <div className="flex flex-col gap-4">
            {/* Photo de profil */}
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--secondary)]">
              <Image
                src="/images/profile/photo de profil.jpeg"
                alt={personalInfo.fullName}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Currently */}
            <div className="card flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--primary)]">
                Currently
              </span>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                {personalInfo.currentGoal}
              </p>
              <p className="text-xs text-[var(--muted)] opacity-60">
                Vision · {personalInfo.longTermGoal}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
