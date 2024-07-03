import { ProjectGridItem } from "./project-grid-item";
import type { Project } from "@/interfaces/project";
import type { Tag } from "@/interfaces/tag";

export type Props = {
  projects: Project[];
  selectedTagSlugs?: string[];
  onAddTag: (tag: Tag) => void;
  onRemoveTag: (tag: Tag) => void;
  onMouseEnter: (project: Project) => void;
  onMouseLeave: (project: Project) => void;
};

export function ProjectGrid({
  projects,
  selectedTagSlugs,
  onAddTag,
  onRemoveTag,
  onMouseEnter,
  onMouseLeave,
}: Props) {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-x-4 gap-y-4 my-6">
      {projects.map((project) => (
        <ProjectGridItem
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onAddTag={onAddTag}
          onRemoveTag={onRemoveTag}
          project={project}
          selectedTagSlugs={selectedTagSlugs}
          key={project.category.slug + "-" + project.slug}
        />
      ))}
    </div>
  );
}
