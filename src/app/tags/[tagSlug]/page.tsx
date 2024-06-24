import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTag, getTags } from "@/lib/projectsApi";
import PageTitle from "@/app/_components/page-title";
import Header from "@/app/_components/header";
import Footer from "@/app/_components/footer";
import { getProjectsYearRange } from "@/lib/projectsApi";
import ProjectCollection from "@/app/_components/project-collection";

export default async function TagPage({ params }: Props) {
  const tag = await getTag(params.tagSlug, true);

  if (!tag) notFound();

  const yearRange = await getProjectsYearRange();

  return (
    <>
      <Header />
      <main>
        <div className="mb-12">
          <PageTitle>{tag.name} Projects</PageTitle>
        </div>

        <ProjectCollection
          projects={tag.projects!}
          selectedTagSlugs={[tag.slug]}
          minYear={yearRange.minYear}
          maxYear={yearRange.maxYear}
        />
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
  const tag = await getTag(params.tagSlug);
  if (!tag) notFound();

  const title = `${tag.name} Projects`;

  return {
    title,
  };
}

export async function generateStaticParams() {
  const allTags = await getTags();

  return allTags.map((tag) => ({
    tagSlug: tag.slug,
  }));
}
