import Link from "next/link";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import TagChipList from "./tag-chip-list";
import type { Project } from "@/interfaces/project";

type Props = {
  project: Project;
  selectedTagSlugs?: string[];
};

export function ProjectGridItem({ project, selectedTagSlugs }: Props) {
  return (
    <div>
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
        <TagChipList tags={project.tags} />
      </div>

      <p className="text-sm leading-relaxed">{project.summary}</p>
    </div>
  );
}
