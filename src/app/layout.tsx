import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { personalInfo } from "@/data/personal-info";

export const metadata: Metadata = {
  title: `${personalInfo.fullName} | Site carrière`,
  description: personalInfo.shortBio,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-[#F8F9FB] text-gray-900 antialiased">
        <div className="flex min-h-screen flex-col">
          <Navbar />

          <main className="flex-1">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}