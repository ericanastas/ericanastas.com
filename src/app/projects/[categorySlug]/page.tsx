import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCategory, getCategories } from "@/lib/projectsApi";
import Header from "@/app/_components/header";
import Footer from "@/app/_components/footer";
import PageTitle from "@/app/_components/page-title";
import { getProjectsYearRange } from "@/lib/projectsApi";
import ProjectCollection from "@/app/_components/project-collection";

export default async function CategoryPage({ params }: Props) {
  const category = await getCategory(params.categorySlug, true);

  if (!category) notFound();

  const yearRange = await getProjectsYearRange();

  return (
    <>
      <Header />
      <main>
        <div className="mb-12">
          <PageTitle>{category.name} Projects</PageTitle>
        </div>

        <ProjectCollection
          projects={category.projects!}
          selectedTagSlugs={[]}
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
    categorySlug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = await getCategory(params.categorySlug);

  if (!category) notFound();
  else {
    const title = `${category.name} Projects`;
    return {
      title,
    };
  }
}

export async function generateStaticParams() {
  const allCategories = await getCategories();
  return allCategories.map((category) => ({
    categorySlug: category.slug,
  }));
}
