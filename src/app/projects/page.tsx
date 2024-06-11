import {
  getAllProjectCategories,
  getAllProjects,
  getAllTagGroups,
  getAllTags,
  getYearRange,
} from "@/lib/projectsApi";
import PageTitle from "../_components/page-title";
import Header from "../_components/header";
import Footer from "../_components/footer";
import { Metadata } from "next";
import FilteredProjectCollection from "../_components/filtered-project-collection";

export default async function Projects() {
  const allProjects = await getAllProjects();

  const yearRange = await getYearRange();

  const tagGroups = await getAllTagGroups();
  const categories = await getAllProjectCategories();

  return (
    <>
      <Header />
      <main>
        <div className="mb-12">
          <PageTitle>Projects</PageTitle>
        </div>

        <FilteredProjectCollection
          projects={allProjects}
          filter={{}}
          tagGroups={tagGroups}
          categories={categories}
          minYear={yearRange.minYear}
          maxYear={yearRange.maxYear}
        />
      </main>
      <Footer />
    </>
  );
}

export const metadata: Metadata = {
  title: "Projects",
};
