import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectsByTagSlug, getAllTags } from "@/lib/projectsApi";
import { ProjectGrid } from "@/app/_components/project-grid";
import PageTitle from "@/app/_components/page-title";
import Header from "@/app/_components/header";
import Footer from "@/app/_components/footer";
import { ProjectTimeLine } from "@/app/_components/project-timeline";
import { getYearRange } from "@/lib/projectsApi";

export default async function Project({ params }: Props) {
  const tag = (await getAllTags()).find((tag) => tag.slug === params.tagSlug);

  if (!tag) notFound();

  let projects = await getProjectsByTagSlug(tag.slug);
  const yearRange = await getYearRange();

  return (
    <>
      <Header />
      <main>
        <div className="mb-12">
          <PageTitle>{tag.name} Projects</PageTitle>
        </div>

        <div className="mb-6">
          <ProjectTimeLine
            projects={projects}
            minYear={yearRange.minYear}
            maxYear={yearRange.maxYear}
          />
        </div>

        <ProjectGrid projects={projects} selectedTagSlugs={[tag.slug]} />
      </main>
      <Footer />
    </>
  );
}

type Props = {
  params: {
    tagSlug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tag = (await getAllTags()).find((ts) => ts.slug === params.tagSlug);
  if (!tag) notFound();

  const title = `${tag.name} Projects`;

  return {
    title,
  };
}

export async function generateStaticParams() {
  const allTags = await getAllTags();

  return allTags.map((tag) => ({
    tagSlug: tag.slug,
  }));
}
