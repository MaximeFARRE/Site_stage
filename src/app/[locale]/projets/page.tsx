import { redirect } from "next/navigation";

type LegacyProjectsProps = {
  params: Promise<{ locale: string }>;
};

export default async function LegacyProjectsPage({ params }: LegacyProjectsProps) {
  const { locale } = await params;
  redirect(`/${locale}/projects`);
}
