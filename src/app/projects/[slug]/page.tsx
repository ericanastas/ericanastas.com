import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import DraftAlert from "@/app/_components/draft-alert";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { ProjectBody } from "@/app/_components/project-body";
import { ProjectHeader } from "@/app/_components/project-header";
import CoverImage from "@/app/_components/cover-image";
import Image from "next/image";

export default async function Project({ params }: Params) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return notFound();
  }

  const content = await markdownToHtml(project.content || "");

  return (
    <main>
      {project.draft && <DraftAlert />}
      <article className="mb-16 max-w-4xl mx-auto">
        <ProjectHeader
          title={project.title}
          coverImage={project.coverImage}
          date={project.date}
          tags={project.tags}
        />

        <div className="max-w-4xl mx-auto mb-8">
          <img src={project.coverImage} alt="Cover Image" />
        </div>
        <ProjectBody content={content} />
      </article>
    </main>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return notFound();
  }

  const title = `${project.title} | Next.js Blog Example with ${CMS_NAME}`;

  return {
    title,
    openGraph: {
      title,
    },
  };
}

export async function generateStaticParams() {
  const projects = getAllProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}
