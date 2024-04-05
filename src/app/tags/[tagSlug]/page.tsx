import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectsByTagSlug, getAllTags } from "@/lib/api";
import { ProjectList } from "@/app/_components/project-list";

export default async function Project({ params }: Props) {
  const tag = getAllTags().find((tag) => tag.slug === params.tagSlug);

  if (!tag) notFound();

  let projects = getProjectsByTagSlug(tag.slug);

  return (
    <main>
      <h1 className="text-4xl md:text-6xl font-bold mb-10 text-center">
        Tag: {tag.name}
      </h1>
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
