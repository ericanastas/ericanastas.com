import { ProjectList } from "@/app/_components/project-list";
import { getAllProjects } from "@/lib/projectsApi";
import PageTitle from "../_components/page-title";
import Header from "../_components/header";
import Footer from "../_components/footer";
import { Metadata } from "next";

export default async function Projects() {
  const allProjects = await getAllProjects();

  return (
    <>
      <Header />
      <main>
        <div className="mb-12">
          <PageTitle>Projects</PageTitle>
        </div>
        {allProjects.length > 0 && <ProjectList projects={allProjects} />}
      </main>
      <Footer />
    </>
  );
}

export const metadata: Metadata = {
  title: "Projects",
};
