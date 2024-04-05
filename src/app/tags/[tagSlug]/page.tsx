import { Metadata } from "next";
import { notFound } from "next/navigation";

import { getProjectsByTag, getAllTags } from "@/lib/api";
import { ProjectList } from "@/app/_components/project-list";

import slugify from "slugify";

export default async function Project({ params }: Props) {
  const tag = getAllTags().find(
    (tag) => slugify(tag, { lower: true }) === params.tagSlug
  );

  if (!tag) notFound();

  let projects = getProjectsByTag(tag);

  return (
    <main>
      <h1 className="text-4xl md:text-6xl font-bold mb-10 text-center">
        {tag}
      </h1>
      <ProjectList projects={projects} />
    </main>
  );
}

type Props = {
  params: {
    tagSlug: string;
  };
};

export function generateMetadata({ params }: Props): Metadata {
  const tag = getAllTags().find(
    (tag) => slugify(tag, { lower: true }) === params.tagSlug
  );

  if (!tag) notFound();

  const title = `Tag ${tag}`;

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
    tagSlug: slugify(tag),
  }));
}
