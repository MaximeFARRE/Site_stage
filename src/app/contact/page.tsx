import Link from "next/link";

const contactMethods = [
  {
    title: "Email",
    value: "maxime.farre8@gmail.com",
    href: "mailto:maxime.farre8@gmail.com",
    description:
      "Le moyen le plus direct pour échanger autour d’un stage, d’une opportunité ou d’un projet.",
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/maxime-farre",
    href: "https://www.linkedin.com/in/maxime-farre",
    description:
      "Pour découvrir mon parcours, mes expériences et prendre contact dans un cadre professionnel.",
  },
  {
    title: "GitHub",
    value: "https://github.com/MaximeFARRE",
    href: "https://github.com/MaximeFARRE",
    description:
      "Pour consulter mes projets, ma manière de construire et mon approche technique.",
  },
];

const reasons = [
  "Stage en finance, asset management, fonds d’investissement ou environnement analytique exigeant",
  "Projet entrepreneurial, produit, automatisation ou développement d’outil",
  "Échange autour de mon parcours, de mes projets ou d’une collaboration future",
];

export default function ContactPage() {
  return (
    <main className="section">
      <div className="container-custom space-y-16">
        <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="space-y-6">
            <div className="inline-flex w-fit items-center rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm text-[var(--muted)]">
              Contact · Opportunités · Échanges
            </div>

            <div className="space-y-4">
              <h1 className="section-title max-w-3xl">
                Entrons en contact pour parler d’un stage, d’un projet ou d’une
                opportunité.
              </h1>

              <p className="max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">
                Je suis ouvert aux échanges avec des recruteurs, entrepreneurs,
                investisseurs ou équipes à la recherche d’un profil capable
                d’analyser, de construire et d’exécuter. Que ce soit pour un
                stage, une mission, un projet ou simplement une prise de contact
                professionnelle, vous pouvez m’écrire directement.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:maxime.farre8@gmail.com"
                className="button-primary"
              >
                M’écrire par email
              </a>

              <Link href="/cv" className="button-secondary">
                Voir mon CV
              </Link>
            </div>
          </div>

          <aside className="card space-y-5">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
              Disponibilité
            </p>

            <div className="space-y-3">
              <h2 className="text-2xl font-semibold">Disponible pour échanger</h2>
              <p className="text-sm leading-7 text-[var(--muted)]">
                Je suis actuellement ouvert aux opportunités de stage, aux
                échanges professionnels et aux discussions autour de projets
                ambitieux en finance, entrepreneuriat ou technologie.
              </p>
            </div>

            <div className="h-px w-full bg-[var(--border)]" />

            <div className="space-y-3 text-sm text-[var(--muted)]">
              <p>
                <span className="font-medium text-[var(--foreground)]">
                  Localisation :
                </span>{" "}
                Paris, France
              </p>
              <p>
                <span className="font-medium text-[var(--foreground)]">
                  Format :
                </span>{" "}
                stage, projet, échange professionnel
              </p>
              <p>
                <span className="font-medium text-[var(--foreground)]">
                  Domaines :
                </span>{" "}
                finance, entrepreneuriat, tech
              </p>
            </div>
          </aside>
        </section>

        <section className="space-y-6">
          <div className="space-y-3">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
              Me contacter
            </p>
            <h2 className="section-title">Canaux de contact</h2>
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
                    <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
                      {method.title}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold break-all">
                      {method.value}
                    </h3>
                  </div>

                  <p className="text-sm leading-7 text-[var(--muted)]">
                    {method.description}
                  </p>

                  <span className="inline-flex text-sm font-medium text-[var(--primary)]">
                    Ouvrir
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="card">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
              Pourquoi me contacter
            </p>
            <h2 className="mb-4 text-2xl font-semibold">
              Les sujets sur lesquels je peux échanger
            </h2>
            <p className="text-sm leading-7 text-[var(--muted)]">
              Mon profil se situe au croisement de l’analyse financière, de
              l’exécution entrepreneuriale et de la construction d’outils. Je
              suis particulièrement à l’aise dans les environnements où il faut
              comprendre vite, structurer proprement et faire avancer les choses.
            </p>
          </div>

          <div className="card">
            <div className="space-y-4">
              {reasons.map((reason) => (
                <div
                  key={reason}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 py-4 text-sm leading-7 text-[var(--foreground)]"
                >
                  {reason}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="card">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="space-y-3">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
                Message direct
              </p>
              <h2 className="text-2xl font-semibold md:text-3xl">
                Le plus simple reste de m’envoyer un email
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-[var(--muted)] md:text-base">
                Si votre sujet est clair, quelques lignes suffisent. Je pourrai
                ensuite répondre rapidement ou poursuivre l’échange sur
                LinkedIn si cela s’y prête mieux.
              </p>
            </div>

            <a
              href="mailto:maxime.farre8@gmail.com"
              className="button-primary"
            >
              Envoyer un email
            </a>
          </div>
        </section>

        <section className="card bg-[var(--foreground)] text-[var(--background)]">
          <div className="space-y-5">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--background)]/70">
              Suite
            </p>
            <h2 className="max-w-3xl text-3xl font-semibold md:text-4xl">
              Vous pouvez aussi consulter mon CV ou explorer mes projets.
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-[var(--background)]/75 md:text-base">
              Le site a été pensé pour donner une vue claire de mon parcours, de
              mes expériences et de ma manière de travailler.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/cv"
                className="rounded-full bg-[var(--background)] px-5 py-3 text-sm font-medium text-[var(--foreground)] transition hover:opacity-90"
              >
                Voir mon CV
              </Link>

              <Link
                href="/projets"
                className="rounded-full border border-[var(--background)]/20 px-5 py-3 text-sm font-medium text-[var(--background)] transition hover:bg-[var(--background)]/10"
              >
                Voir mes projets
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}