import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { personalInfo } from "@/data/personal-info";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${personalInfo.fullName} | Finance quantitative & outils financiers`,
    template: `%s | ${personalInfo.fullName}`,
  },
  description: personalInfo.shortBio,
  openGraph: {
    title: `${personalInfo.fullName} | Finance quantitative & outils financiers`,
    description: personalInfo.shortBio,
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${personalInfo.fullName} | Finance quantitative & outils financiers`,
    description: personalInfo.shortBio,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} min-h-screen bg-[#F8F9FB] text-gray-900 antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Navbar />

          <main className="flex-1">{children}</main>

          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
