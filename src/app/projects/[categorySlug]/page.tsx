import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProjectCategories, getProjectsByCategorySlug } from "@/lib/api";
import { ProjectList } from "@/app/_components/project-list";

import PageTitle from "@/app/_components/page-title";

export default async function Category({ params }: Props) {
  const category = getAllProjectCategories().find(
    (cat) => cat.slug === params.categorySlug
  );

  if (!category) notFound();

  let projects = getProjectsByCategorySlug(category.slug);

  return (
    <main>
      <div className="mb-12">
        <PageTitle>{category.name} Projects</PageTitle>
      </div>

      <ProjectList projects={projects} />
    </main>
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

  const title = `Category: ${category.name}`;

  return {
    title,
    openGraph: {
      title,
    },
  };
}

export async function generateStaticParams() {
  const allCategories = getAllProjectCategories();

  return allCategories.map((category) => ({
    categorySlug: category.slug,
  }));
}
