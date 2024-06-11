import { ProjectGrid } from "./project-grid";
import type { Project } from "@/interfaces/project";
import { ProjectTimeLine } from "./project-timeline";

export type Props = {
  projects: Project[];
  selectedTagSlugs?: string[];
  minYear?: number;
  maxYear?: number;
};

export function ProjectCollection({
  projects,
  selectedTagSlugs,
  minYear,
  maxYear,
}: Props) {
  return (
    <section>
      <div className="mb-8">
        <ProjectTimeLine
          projects={projects}
          minYear={minYear}
          maxYear={maxYear}
        />
      </div>
      <ProjectGrid projects={projects} selectedTagSlugs={selectedTagSlugs} />
    </section>
  );
}
