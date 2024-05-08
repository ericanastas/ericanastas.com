import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProjects, getProject } from "@/lib/projectsApi";
import DraftAlert from "@/app/_components/draft-alert";
import { Content } from "@/app/_components/content";
import { ProjectHeader } from "@/app/_components/project-header";
import Header from "@/app/_components/header";
import Footer from "@/app/_components/footer";
import Image from "next/image";

export default async function Project({ params }: Params) {
  const project = await getProject(params.categorySlug, params.projectSlug);

  if (!project) {
    return notFound();
  }

  return (
    <>
      <Header />
      <main>
        <article className="mb-16 max-w-4xl mx-auto">
          {project.draft && <DraftAlert />}

          <ProjectHeader
            title={project.title}
            date={project.date}
            tags={project.tags}
            category={project.category}
            summary={project.summary}
          />

          {project.coverImage && (
            <div className="max-w-4xl mx-auto justify-center mb-8">
              <Image
                width={900}
                height={675}
                src={project.coverImage}
                alt="Cover Image"
                className="shadow-sm"
              />
            </div>
          )}

          <Content html={project.html} />
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
    projectSlug: project.slug,
    categorySlug: project.category.slug,
  }));
}
