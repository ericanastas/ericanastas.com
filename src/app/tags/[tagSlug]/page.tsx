import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectsByTagSlug, getAllTags } from "@/lib/projectsApi";
import { ProjectList } from "@/app/_components/project-list";
import PageTitle from "@/app/_components/page-title";
import Header from "@/app/_components/header";
import Footer from "@/app/_components/footer";
import { ProjectTimeLine } from "@/app/_components/project-timeline";
import { getYearRange } from "@/lib/projectsApi";

export default async function Project({ params }: Props) {
  const tag = (await getAllTags()).find(
    (tag) => tag.tag.slug === params.tagSlug
  );

  if (!tag) notFound();

  let projects = await getProjectsByTagSlug(tag.tag.slug);
  const yearRange = await getYearRange();

  return (
    <>
      <Header />
      <main>
        <div className="mb-12">
          <PageTitle>{tag.tag.name} Projects</PageTitle>
        </div>

        <div className="mb-6">
          <ProjectTimeLine
            projects={projects}
            minYear={yearRange.minYear}
            maxYear={yearRange.maxYear}
          />
        </div>

        <ProjectList projects={projects} selectedTagSlug={tag.tag.slug} />
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
  const tag = (await getAllTags()).find((ts) => ts.tag.slug === params.tagSlug);
  if (!tag) notFound();

  const title = `${tag.tag.name} Projects`;

  return {
    title,
  };
}

export async function generateStaticParams() {
  const allTags = await getAllTags();

  return allTags.map((tag) => ({
    tagSlug: tag.tag.slug,
  }));
}
