import { Project } from "@/interfaces/project";
import { ProjectPreview } from "./project-preview";

type Props = {
  projects: Project[];
  selectedTag?: string;
};

export function ProjectList({ projects, selectedTag }: Props) {
  return (
    <section>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-8">
        {projects.map((project) => (
          <ProjectPreview
            key={project.slug}
            title={project.title}
            coverImage={project.coverImage}
            date={project.date}
            slug={project.slug}
            excerpt={project.excerpt}
            tags={project.tags.map((t) => ({
              tag: t,
              selected: selectedTag ? selectedTag == t : false,
            }))}
          />
        ))}
      </div>
    </section>
  );
}
