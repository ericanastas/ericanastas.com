import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjects, getProject } from "@/lib/projectsApi";
import DraftAlert from "@/app/_components/draft-alert";
import { Content } from "@/app/_components/content";
import { ProjectHeader } from "@/app/_components/project-header";
import Header from "@/app/_components/header";
import Footer from "@/app/_components/footer";
import markdownStyles from "../../../_components/markdown-styles.module.css";
import Script from "next/script";

export default async function ProjectPage({ params }: Params) {
  const project = await getProject(params.categorySlug, params.projectSlug);

  if (!project) {
    return notFound();
  }

  return (
    <>
      <Header />
      <main>
        <article className="mb-16 max-w-4xl mx-auto project-page">
          {project.draft && <DraftAlert />}

          <ProjectHeader
            title={project.title}
            date={project.date}
            skills={project.skills}
            category={project.category}
            summary={project.summary}
          />

          {project.coverImage && (
            <div className={markdownStyles["markdown"]}>
              <img src={project.coverImage} alt="Cover Image" />
            </div>
          )}

          <Content html={project.html} />
        </article>
      </main>
      <Footer />
      <Script
        crossOrigin="anonymous"
        type="module"
        src="/scripts/init-medium-zoom.js"
        strategy="lazyOnload"
      />
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
  const projects = await getProjects();

  return projects.map((project) => ({
    projectSlug: project.slug,
    categorySlug: project.category.slug,
  }));
}
