import { useTranslations } from "next-intl";

import Container from "./container";
import { personalInfo } from "@/data/personal-info";
import { socialLinks } from "@/data/social-links";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="border-t border-gray-200 bg-white">
      <Container className="flex flex-col gap-4 py-8 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
        <div>
          © {new Date().getFullYear()} {personalInfo.fullName}
        </div>

        <div className="flex items-center gap-4">
          <a href={`mailto:${socialLinks.email}`} className="transition hover:text-blue-700">
            {t("email")}
          </a>

          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-blue-700"
          >
            {t("linkedin")}
          </a>

          <a
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-blue-700"
          >
            {t("github")}
          </a>
        </div>
      </Container>
    </footer>
  );
}
