import { ProjectList } from "@/app/_components/project-list";
import { getAllProjects as getAllProjects } from "@/lib/api";
import PageTitle from "../_components/page-title";

export default function Projects() {
  const allProjects = getAllProjects();

  return (
    <main>
      <div className="mb-12">
        <PageTitle>Projects</PageTitle>
      </div>
      {allProjects.length > 0 && <ProjectList projects={allProjects} />}
    </main>
  );
}
