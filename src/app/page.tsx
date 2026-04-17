import Hero from "@/components/home/hero";
import FeaturedProjects from "@/components/home/featured-projects";
import Container from "@/components/layout/container";
import Link from "next/link";

const pillars = [
  {
    label: "Finance",
    headline: "Marchés & portefeuilles",
    body: "Analyse de portefeuille, gestion d’actifs, private equity et lecture du risque. Une approche structurée des données financières et des décisions d’investissement.",
    href: "/experiences",
  },
  {
    label: "Exécution",
    headline: "Indicateurs & opérations",
    body: "Avec Occifloc, j’ai travaillé sur le suivi des marges, la trésorerie, la relation client et l’organisation opérationnelle. Un cadre concret pour décider sous contrainte.",
    href: "/experiences",
  },
  {
    label: "Technologie",
    headline: "Python, SQL & dashboards",
    body: "Développement d’outils en Python, SQL et Streamlit pour structurer des données, backtester des stratégies et visualiser des indicateurs financiers.",
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
            <h2 className="mb-3">Finance, données et exécution</h2>
            <p className="text-base text-[var(--muted)]">
              Une formation en ingénierie financière, une pratique régulière des
              outils data et une capacité à produire des analyses exploitables.
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
              Je suis disponible pour échanger sur des opportunités en finance
              de marché, asset management, private equity, analyse ou outils
              quantitatifs.
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
