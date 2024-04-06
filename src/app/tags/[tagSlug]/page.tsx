import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectsByTagSlug, getAllTags } from "@/lib/api";
import { ProjectList } from "@/app/_components/project-list";
import PageTitle from "@/app/_components/page-title";
import Header from "@/app/_components/header";
import Footer from "@/app/_components/footer";

export default async function Project({ params }: Props) {
  const tag = (await getAllTags()).find((tag) => tag.slug === params.tagSlug);

  if (!tag) notFound();

  let projects = await getProjectsByTagSlug(tag.slug);

  return (
    <>
      <Header />
      <main>
        <div className="mb-12">
          <PageTitle>{tag.name} Projects</PageTitle>
        </div>

        <ProjectList projects={projects} selectedTagSlug={tag.slug} />
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
