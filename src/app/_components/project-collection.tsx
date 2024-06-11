import { ProjectGrid } from "./project-grid";
import type { Project } from "@/interfaces/project";

export type Props = {
  projects: Project[];
  selectedTagSlugs?: string[];
};

export function ProjectCollection({ projects, selectedTagSlugs }: Props) {
  return (
    <section>
      <ProjectGrid projects={projects} selectedTagSlugs={selectedTagSlugs} />
    </section>
  );
}
