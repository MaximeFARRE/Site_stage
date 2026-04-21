import { redirect } from "next/navigation";

type LegacyAboutProps = {
  params: Promise<{ locale: string }>;
};

export default async function LegacyAboutPage({ params }: LegacyAboutProps) {
  const { locale } = await params;
  redirect(`/${locale}/about`);
}
