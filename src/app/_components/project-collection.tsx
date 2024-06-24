import { ProjectGrid } from "./project-grid";
import type { Project } from "@/interfaces/project";
import { ProjectTimeLine } from "./project-timeline";

export type Props = {
  projects: Project[];
  selectedTagSlugs?: string[];
  minYear?: number;
  maxYear?: number;
};

export default function ProjectCollection({
  projects,
  selectedTagSlugs,
  minYear,
  maxYear,
}: Props) {
  return (
    <>
      <ProjectTimeLine
        projects={projects}
        minYear={minYear}
        maxYear={maxYear}
      />
      <ProjectGrid projects={projects} selectedTagSlugs={selectedTagSlugs} />
    </>
  );
}
