import {
  getGroups,
  getProjects,
  getSkillGroups,
  getProjectsYearRange,
} from "@/lib/projectsApi";
import PageTitle from "../_components/page-title";
import Header from "../_components/header";
import Footer from "../_components/footer";
import { Metadata } from "next";
import ProjectCollectionFiltered from "../_components/project-collection-filtered";
import { Suspense } from "react";

export default async function ProjectsPage() {
  const allProjects = await getProjects();
  const yearRange = await getProjectsYearRange();
  const skillGroups = await getSkillGroups();
  const groups = await getGroups();

  return (
    <>
      <Header />
      <main>
        <PageTitle>Projects</PageTitle>

        <Suspense>
          <ProjectCollectionFiltered
            groups={groups}
            maxYear={yearRange.maxYear}
            minYear={yearRange.minYear}
            projects={allProjects}
            skillGroups={skillGroups}
          />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export const metadata: Metadata = {
  title: "Projects",
};

export const fetchCache = "force-no-store";
