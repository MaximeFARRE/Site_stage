import Hero from "@/components/home/hero";
import FeaturedProjects from "@/components/home/featured-projects";
import Container from "@/components/layout/container";
import Link from "next/link";

const pillars = [
  {
    label: "Finance",
    headline: "Gestion d'actifs & marchés",
    body: "Analyse de portefeuille, private equity, family office et investissement long terme. Une vision structurée de la création de valeur.",
    href: "/experiences",
  },
  {
    label: "Entrepreneuriat",
    headline: "Créer, tester, opérer",
    body: "Fondateur d'Occifloc en parallèle de mes études. De la relation client à la production, je gère l'ensemble de la chaîne de valeur.",
    href: "/experiences",
  },
  {
    label: "Technologie",
    headline: "Outils & données",
    body: "Développement d'applications en Python et Next.js autour de la finance quantitative, du backtest et de la visualisation de données.",
    href: "/projets",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Pillars */}
      <section className="section border-t border-[var(--border)]">
        <Container>
          <div className="mb-12 max-w-xl">
            <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-[var(--primary)]">
              Profil
            </span>
            <h2 className="mb-3">Un profil à l'intersection de trois mondes</h2>
            <p className="text-base text-[var(--muted)]">
              Finance, entrepreneuriat et technologie — trois compétences que je
              cultive ensemble pour créer une valeur distinctive.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {pillars.map((pillar) => (
              <Link
                key={pillar.label}
                href={pillar.href}
                className="card group flex flex-col gap-4 no-underline"
              >
                <span className="w-fit rounded-full border border-[var(--border)] px-3 py-1 text-xs font-semibold text-[var(--primary)]">
                  {pillar.label}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-semibold text-[var(--foreground)] transition group-hover:text-[var(--primary)]">
                    {pillar.headline}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--muted)]">
                    {pillar.body}
                  </p>
                </div>
                <span className="mt-auto text-xs font-medium text-[var(--primary)] opacity-0 transition group-hover:opacity-100">
                  En savoir plus →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <FeaturedProjects />

      {/* CTA final */}
      <section className="section border-t border-[var(--border)]">
        <Container>
          <div className="rounded-2xl bg-[var(--foreground)] px-8 py-12 text-center sm:px-16">
            <h2 className="mb-4 text-white">Vous souhaitez en savoir plus ?</h2>
            <p className="mx-auto mb-8 max-w-lg text-sm leading-relaxed text-white/60">
              Je suis disponible pour échanger sur des opportunités en finance,
              gestion d'actifs ou entrepreneuriat.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="button-primary bg-white !text-[var(--foreground)] hover:bg-white/90"
              >
                Me contacter
              </Link>
              <Link
                href="/a-propos"
                className="button-secondary !border-white/20 !text-white hover:!bg-white/10"
              >
                En savoir plus
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
