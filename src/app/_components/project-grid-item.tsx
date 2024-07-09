import Link from "next/link";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import type { Project } from "@/interfaces/project";
import type { Skill } from "@/interfaces/skill";
import SkillChip from "./skill-chip";

type Props = {
  project: Project;
  selectedSkillSlugs?: string[];
  onAddSkill: (skill: Skill) => void;
  onRemoveSkill: (skill: Skill) => void;
  onMouseEnter: (project: Project) => void;
  onMouseLeave: (project: Project) => void;
};

export function ProjectGridItem({
  project,
  selectedSkillSlugs,
  onAddSkill,
  onRemoveSkill,
  onMouseEnter,
  onMouseLeave,
}: Props) {
  let projectSkills = project.skills.map<Skill>((skill) => ({
    ...skill,
    selected: selectedSkillSlugs?.some((slug) => skill.slug === slug),
  }));

  function handleMouseEnter(event: any) {
    onMouseEnter(project);
  }

  function handleMouseLeave(event: any) {
    onMouseLeave(project);
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="hover:ring-2 ring-blue-400 p-2 rounded-md text-gray-600"
    >
      <CoverImage
        url={project.url}
        title={project.title}
        src={project.coverImage}
      />

      <h3 className="text-xl mt-4 leading-snug">
        <Link href={project.url} className="hover:underline">
          {project.title}
        </Link>
      </h3>

      <div className="flex justify-between mb-2">
        <Link className="hover:underline" href={project.group.url}>
          {project.group.name} Projects
        </Link>
        <div>
          <DateFormatter dateString={project.date} />
        </div>
      </div>

      <div className="mb-2">
        <div className="flex flex-wrap gap-1.5">
          {projectSkills.map((t) => {
            let selected = selectedSkillSlugs?.some((slug) => slug === t.slug);
            return (
              <div
                className="cursor-pointer"
                onClick={
                  selected ? () => onRemoveSkill(t) : () => onAddSkill(t)
                }
                key={t.slug}
              >
                <SkillChip
                  icon={selected ? "Remove" : "Add"}
                  key={t.slug}
                  skill={t}
                  selected={selected}
                />
              </div>
            );
          })}
        </div>
      </div>

      <p className="text-sm leading-relaxed">{project.summary}</p>
    </div>
  );
}
