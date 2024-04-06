import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProjects, getProject } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import DraftAlert from "@/app/_components/draft-alert";
import { ProjectBody } from "@/app/_components/project-body";
import { ProjectHeader } from "@/app/_components/project-header";
import Header from "@/app/_components/header";
import Footer from "@/app/_components/footer";

export default async function Project({ params }: Params) {
  const project = getProject(params.categorySlug, params.projectSlug);

  if (!project) {
    return notFound();
  }

  const content = await markdownToHtml(project.content || "");

  return (
    <>
      <Header />
      <main>
        {project.draft && <DraftAlert />}
        <article className="mb-16 max-w-4xl mx-auto">
          <ProjectHeader
            title={project.title}
            date={project.date}
            tags={project.tags}
          />

          {project.coverImage && (
            <div className="max-w-4xl mx-auto mb-8">
              <img src={project.coverImage} alt="Cover Image" />
            </div>
          )}

          <ProjectBody content={content} />
        </article>
      </main>
      <Footer />
    </>
  );
}

type Params = {
  params: {
    projectSlug: string;
    categorySlug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const project = getProject(params.categorySlug, params.projectSlug);

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
