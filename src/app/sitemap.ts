import type { MetadataRoute } from "next";

import { projects } from "@/data/projects";
import { routing } from "@/i18n/routing";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://maxime-farre.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutePaths = ["", "/about", "/projects", "/experiences", "/cv", "/contact"];

  const staticRoutes = routing.locales.flatMap((locale) =>
    staticRoutePaths.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
  );

  const projectRoutes = routing.locales.flatMap((locale) =>
    projects.map((project) => ({
      url: `${baseUrl}/${locale}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  );

  return [...staticRoutes, ...projectRoutes];
}
