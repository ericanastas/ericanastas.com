import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { ProjectList } from "@/app/_components/project-list";
import { getAllProjects as getAllProjects } from "@/lib/api";

export default function Index() {
  const allProjects = getAllProjects();

  return (
    <main>
      <Container>
        <Header />
        {allProjects.length > 0 && <ProjectList projects={allProjects} />}
      </Container>
    </main>
  );
}
