import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { ProjectList } from "@/app/_components/project-list";
import { getAllProjects as getAllProjects } from "@/lib/api";

export default function Index() {
  const allProjects = getAllProjects();

  return (
    <main>
      {allProjects.length > 0 && <ProjectList projects={allProjects} />}
    </main>
  );
}
