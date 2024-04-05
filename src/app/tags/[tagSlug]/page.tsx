import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectsByTagSlug, getAllTags } from "@/lib/api";
import { ProjectList } from "@/app/_components/project-list";

import PageTitle from "@/app/_components/page-title";

export default async function Project({ params }: Props) {
  const tag = getAllTags().find((tag) => tag.slug === params.tagSlug);

  if (!tag) notFound();

  let projects = getProjectsByTagSlug(tag.slug);

  return (
    <main>
      <PageTitle>{tag.name}</PageTitle>

      <ProjectList projects={projects} selectedTagSlug={tag.slug} />
    </main>
  );
}

type Props = {
  params: {
    tagSlug: string;
  };
};

export function generateMetadata({ params }: Props): Metadata {
  const tag = getAllTags().find((ts) => ts.slug === params.tagSlug);

  if (!tag) notFound();

  const title = `Tag ${tag.name}`;

  return {
    title,
    openGraph: {
      title,
    },
  };
}

export async function generateStaticParams() {
  const allTags = getAllTags();

  return allTags.map((tag) => ({
    tagSlug: tag.slug,
  }));
}
