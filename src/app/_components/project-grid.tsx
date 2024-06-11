import { ProjectGridItem } from "./project-grid-item";
import type { Project } from "@/interfaces/project";

export type Props = {
  projects: Project[];
  selectedTagSlugs?: string[];
};

export function ProjectGrid({ projects, selectedTagSlugs }: Props) {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-x-5 gap-y-10">
      {projects.map((project) => (
        <ProjectGridItem
          project={project}
          selectedTagSlugs={selectedTagSlugs}
          key={project.category.slug + "-" + project.slug}
        />
      ))}
    </div>
  );
}
