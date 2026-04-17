import Container from "@/components/layout/container";
import { personalInfo } from "@/data/personal-info";
import { socialLinks } from "@/data/social-links";

export default function ContactPage() {
  return (
    <section className="py-24">
      <Container className="max-w-3xl">
        <div className="space-y-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-700">
            Contact
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Échangeons
          </h1>

          <p className="text-lg leading-8 text-gray-600">
            {personalInfo.availability}
          </p>

          <div className="rounded-3xl border border-gray-200 bg-white p-8">
            <div className="space-y-6">
              <div>
                <p className="mb-2 text-sm font-medium text-gray-500">Email</p>
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="text-lg font-medium text-blue-700 hover:underline"
                >
                  {socialLinks.email}
                </a>
              </div>

              <div>
                <p className="mb-2 text-sm font-medium text-gray-500">
                  LinkedIn
                </p>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg font-medium text-blue-700 hover:underline"
                >
                  Voir mon profil LinkedIn
                </a>
              </div>

              <div>
                <p className="mb-2 text-sm font-medium text-gray-500">
                  GitHub
                </p>
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg font-medium text-blue-700 hover:underline"
                >
                  Voir mon GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}