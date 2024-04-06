import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProjects, getProject } from "@/lib/api";
import DraftAlert from "@/app/_components/draft-alert";
import { ProjectBody } from "@/app/_components/project-body";
import { ProjectHeader } from "@/app/_components/project-header";
import Header from "@/app/_components/header";
import Footer from "@/app/_components/footer";

export default async function Project({ params }: Params) {
  const project = await getProject(params.categorySlug, params.projectSlug);

  if (!project) {
    return notFound();
  }

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
            category={project.category}
          />

          {project.coverImage && (
            <div className="max-w-4xl mx-auto mb-8">
              <img src={project.coverImage} alt="Cover Image" />
            </div>
          )}

          <ProjectBody content={project.html} />
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

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const project = await getProject(params.categorySlug, params.projectSlug);

  if (!project) {
    return notFound();
  }

  const title = `${project.title}`;

  return {
    title,
    openGraph: {
      title,
    },
  };
}

export async function generateStaticParams() {
  const projects = await getAllProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}
