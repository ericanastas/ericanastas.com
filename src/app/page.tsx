import Container from "@/app/_components/container";
import { HeroProject } from "@/app/_components/hero-project";
import { Intro } from "@/app/_components/intro";
import { ProjectList } from "@/app/_components/project-list";
import { getAllProjects as getAllProjects } from "@/lib/api";

export default function Index() {
  const allProjects = getAllProjects();

  const heroProject = allProjects[0];

  const moreProjects = allProjects.slice(1);

  return (
    <main>
      <Container>
        <Intro />
        <HeroProject
          title={heroProject.title}
          coverImage={heroProject.coverImage}
          date={heroProject.date}
          slug={heroProject.slug}
          excerpt={heroProject.excerpt}
        />
        {moreProjects.length > 0 && <ProjectList projects={moreProjects} />}
      </Container>
    </main>
  );
}
