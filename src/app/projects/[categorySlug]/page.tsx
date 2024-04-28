import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllProjectCategories,
  getProjectsByCategorySlug,
} from "@/lib/projectsApi";
import { ProjectList } from "@/app/_components/project-list";
import Header from "@/app/_components/header";
import Footer from "@/app/_components/footer";
import PageTitle from "@/app/_components/page-title";
import { ProjectTimeLine } from "@/app/_components/project-timeline";
import { getYearRange } from "@/lib/projectsApi";

export default async function Category({ params }: Props) {
  const category = getAllProjectCategories().find(
    (cat) => cat.slug === params.categorySlug
  );

  if (!category) notFound();

  let projects = await getProjectsByCategorySlug(category.slug);
  const yearRange = await getYearRange();

  return (
    <>
      <Header />
      <main>
        <div className="mb-12">
          <PageTitle>{category.name} Projects</PageTitle>
        </div>

        <div className="mb-6">
          <ProjectTimeLine
            projects={projects}
            minYear={yearRange.minYear}
            maxYear={yearRange.maxYear}
          />
        </div>

        <ProjectList projects={projects} />
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

export function generateMetadata({ params }: Props): Metadata {
  const category = getAllProjectCategories().find(
    (cat) => cat.slug === params.categorySlug
  );

  if (!category) notFound();

  const title = `${category.name} Projects`;

  return {
    title,
  };
}

export async function generateStaticParams() {
  const allCategories = getAllProjectCategories();

  return allCategories.map((category) => ({
    categorySlug: category.slug,
  }));
}
