import {
  getCategories,
  getProjects,
  getTagGroups,
  getProjectsYearRange,
} from "@/lib/projectsApi";
import PageTitle from "../_components/page-title";
import Header from "../_components/header";
import Footer from "../_components/footer";
import { Metadata } from "next";
import FilteredProjectCollection from "../_components/filtered-project-collection";

export default async function ProjectsPage() {
  const allProjects = await getProjects();
  const yearRange = await getProjectsYearRange();
  const tagGroups = await getTagGroups();
  const categories = await getCategories();

  return (
    <>
      <Header />
      <main>
        <div className="mb-12">
          <PageTitle>Projects</PageTitle>
        </div>

        <FilteredProjectCollection
          projects={allProjects}
          filter={{
            searchQuery: "",
            selectedCategorySlugs: [],
            selectedTagSlugs: [],
          }}
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
