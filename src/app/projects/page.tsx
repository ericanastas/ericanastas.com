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
import ProjectsPageFilteredProjects from "../_components/projects-page-filtered-projects";

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

        <ProjectsPageFilteredProjects
          categories={categories}
          maxYear={yearRange.maxYear}
          minYear={yearRange.minYear}
          projects={allProjects}
          tagGroups={tagGroups}
        />
      </main>
      <Footer />
    </>
  );
}

export const metadata: Metadata = {
  title: "Projects",
};

export const fetchCache = "force-no-store";
