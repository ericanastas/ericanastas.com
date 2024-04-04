import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProjects, getAllTags, getProjectBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";

import { ProjectBody } from "@/app/_components/project-body";
import { ProjectHeader } from "@/app/_components/project-header";

import { getProjectsByTag } from "@/lib/api";
import { ProjectList } from "@/app/_components/project-list";

export default async function Project({ params }: Params) {
  const tag = params.tag;

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

type Params = {
  params: {
    tag: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const tag = params.tag;

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
    tag: tag,
  }));
}
