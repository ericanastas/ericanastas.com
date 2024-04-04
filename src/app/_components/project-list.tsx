import { Project } from "@/interfaces/project";
import { ProjectPreview } from "./project-preview";

type Props = {
  projects: Project[];
};

export function ProjectList({ projects }: Props) {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {projects.map((project) => (
          <ProjectPreview
            key={project.slug}
            title={project.title}
            coverImage={project.coverImage}
            date={project.date}
            slug={project.slug}
            excerpt={project.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
