import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

import { personalInfo } from "@/data/personal-info";
import { Analytics } from "@vercel/analytics/next";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${personalInfo.fullName} | Finance quantitative & Financial tools`,
    template: `%s | ${personalInfo.fullName}`,
  },
  description: personalInfo.shortBio,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localeCandidate = (await headers()).get("x-next-intl-locale");
  const locale = hasLocale(routing.locales, localeCandidate)
    ? localeCandidate
    : routing.defaultLocale;

  return (
    <html lang={locale}>
      <body className={`${inter.className} min-h-screen bg-[#F8F9FB] text-gray-900 antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
