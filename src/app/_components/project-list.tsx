import { Project } from "@/interfaces/project";
import { ProjectPreview } from "./project-preview";

type Props = {
  projects: Project[];
  selectedTagSlug?: string;
};

export function ProjectList({ projects, selectedTagSlug }: Props) {
  return (
    <section>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-8">
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
              name: t.name,
              slug: t.slug,
              selected: selectedTagSlug ? selectedTagSlug == t.slug : false,
            }))}
          />
        ))}
      </div>
    </section>
  );
}
