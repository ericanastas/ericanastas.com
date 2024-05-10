import { Project } from "@/interfaces/project";
import { ProjectPreview } from "./project-preview";

type Props = {
  projects: Project[];
  selectedTagSlug?: string;
};

export function ProjectList({ projects, selectedTagSlug }: Props) {
  return (
    <section>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-x-5 gap-y-10">
        {projects.map((project) => (
          <ProjectPreview
            key={project.category.slug + "-" + project.slug}
            title={project.title}
            category={project.category}
            coverImage={project.coverImage}
            date={project.date}
            slug={project.slug}
            summary={project.summary}
            url={project.url}
            tags={project.tags.map((t) => ({
              ...t,
              selected: selectedTagSlug ? selectedTagSlug == t.slug : false,
            }))}
          />
        ))}
      </div>
    </section>
  );
}
