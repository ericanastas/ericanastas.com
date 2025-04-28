import { ProjectGridItem } from "./project-grid-item";
import type { Project } from "@/interfaces/project";
import type { Skill } from "@/interfaces/skill";

export type Props = {
  projects: Project[];
  selectedSkillSlugs?: string[];
  onAddSkill: (skill: Skill) => void;
  onRemoveSkill: (skill: Skill) => void;
  onProjectHover: (project: Project | null) => void;
};

export function ProjectGrid({
  projects,
  selectedSkillSlugs,
  onAddSkill,
  onRemoveSkill,
  onProjectHover,
}: Props) {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-x-4 gap-y-4 my-6">
      {projects.map((project) => (
        <ProjectGridItem
          onMouseEnter={onProjectHover}
          onMouseLeave={() => {
            onProjectHover(null);
          }}
          onAddSkill={onAddSkill}
          onRemoveSkill={onRemoveSkill}
          project={project}
          selectedSkillSlugs={selectedSkillSlugs}
          key={project.group.slug + "-" + project.slug}
        />
      ))}
    </div>
  );
}
