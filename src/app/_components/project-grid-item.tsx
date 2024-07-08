import Link from "next/link";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import type { Project } from "@/interfaces/project";
import type { Tag } from "@/interfaces/tag";
import SkillChip from "./skill-chip";

type Props = {
  project: Project;
  selectedTagSlugs?: string[];
  onAddTag: (tag: Tag) => void;
  onRemoveTag: (tag: Tag) => void;
  onMouseEnter: (project: Project) => void;
  onMouseLeave: (project: Project) => void;
};

export function ProjectGridItem({
  project,
  selectedTagSlugs,
  onAddTag,
  onRemoveTag,
  onMouseEnter,
  onMouseLeave,
}: Props) {
  let projectTags = project.tags.map<Tag>((tag) => ({
    ...tag,
    selected: selectedTagSlugs?.some((slug) => tag.slug === slug),
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
      className="hover:ring-2 ring-blue-400 p-2 rounded-md"
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
        <Link className="hover:underline" href={project.category.url}>
          {project.category.name} Projects
        </Link>
        <div>
          <DateFormatter dateString={project.date} />
        </div>
      </div>

      <div className="mb-2">
        <div className="flex flex-wrap gap-1.5">
          {projectTags.map((t) => {
            let selected = selectedTagSlugs?.some((slug) => slug === t.slug);
            return (
              <div
                className="cursor-pointer"
                onClick={selected ? () => onRemoveTag(t) : () => onAddTag(t)}
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
