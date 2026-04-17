import { socialLinks } from "./social-links";

export type ContactMethod = {
  title: string;
  value: string;
  href: string;
  description: string;
};

export const contactMethods: ContactMethod[] = [
  {
    title: "Email",
    value: socialLinks.email,
    href: `mailto:${socialLinks.email}`,
    description:
      "Le moyen le plus direct pour échanger autour d’un stage, d’une opportunité ou d’un sujet d’analyse.",
  },
  {
    title: "LinkedIn",
    value: socialLinks.linkedin.replace("https://", ""),
    href: socialLinks.linkedin.replace("https://linkedin.com", "https://www.linkedin.com"),
    description:
      "Pour découvrir mon parcours, mes expériences et prendre contact dans un cadre professionnel.",
  },
  {
    title: "GitHub",
    value: socialLinks.github,
    href: socialLinks.github,
    description:
      "Pour consulter mes projets, mes outils et ma manière de structurer du code orienté analyse.",
  },
];
