import Container from "@/components/layout/container";
import Hero from "@/components/home/hero";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="pb-24">
        <Container className="max-w-4xl">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h2 className="mb-3 text-lg font-semibold text-gray-900">
                Finance
              </h2>

              <p className="text-sm leading-7 text-gray-600">
                Gestion d’actifs, analyse de portefeuille, private equity et
                investissement.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h2 className="mb-3 text-lg font-semibold text-gray-900">
                Entrepreneuriat
              </h2>

              <p className="text-sm leading-7 text-gray-600">
                Développement d’Occifloc et création de projets concrets en
                parallèle de mes études.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h2 className="mb-3 text-lg font-semibold text-gray-900">
                Technologie
              </h2>

              <p className="text-sm leading-7 text-gray-600">
                Développement d’outils et d’applications autour de la finance et
                de la donnée.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}