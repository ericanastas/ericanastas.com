import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { ProjectList } from "@/app/_components/project-list";
import { getAllProjects as getAllProjects } from "@/lib/api";

export default function Index() {
  const allProjects = getAllProjects();

  return (
    <main>
      <Container>
        <Intro />
        {allProjects.length > 0 && <ProjectList projects={allProjects} />}
      </Container>
    </main>
  );
}
