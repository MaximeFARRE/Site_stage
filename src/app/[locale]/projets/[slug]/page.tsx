import { redirect } from "next/navigation";

type LegacyProjectDetailProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export default async function LegacyProjectDetailAliasPage({ params }: LegacyProjectDetailProps) {
  const { locale, slug } = await params;
  redirect(`/${locale}/projects/${slug}`);
}
