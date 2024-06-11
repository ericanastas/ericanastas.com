import { ProjectCollection } from "@/app/_components/project-collection";
import { getAllProjects, getYearRange } from "@/lib/projectsApi";
import PageTitle from "../_components/page-title";
import Header from "../_components/header";
import Footer from "../_components/footer";
import { Metadata } from "next";

export default async function Projects() {
  const allProjects = await getAllProjects();

  const yearRange = await getYearRange();

  return (
    <>
      <Header />
      <main>
        <div className="mb-12">
          <PageTitle>Projects</PageTitle>
        </div>

        {allProjects.length > 0 && <ProjectCollection projects={allProjects} />}
      </main>
      <Footer />
    </>
  );
}

export const metadata: Metadata = {
  title: "Projects",
};
