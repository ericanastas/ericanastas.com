import { Project } from "@/interfaces/project";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const projectsDirectory = join(process.cwd(), "_projects");

export function getAllProjectSlugs() {
  return fs.readdirSync(projectsDirectory);
}

export function getProjectBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(projectsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Project;
}

export function getAllTags(): string[] {
  let allProjects = getAllProjects();

  return getProjectsTags(allProjects);
}

export function getProjectsTags(projects: Project[]): string[] {
  let tags: string[] = [];

  for (let proj of projects) {
    for (let tag of proj.tags) {
      if (tags.indexOf(tag) === -1) {
        tags.push(tag);
      }
    }
  }

  return tags.sort((t1, t2) => (t1 < t2 ? -1 : 1));
}

export function getProjectsByTag(tag: string): Project[] {
  return getAllProjects().filter((p) => p.tags.includes(tag));
}

export function getAllProjects(): Project[] {
  const slugs = getAllProjectSlugs();
  const projects = slugs
    .map((slug) => getProjectBySlug(slug))
    // sort projects by date in descending order
    .sort((project1, project2) => (project1.date > project2.date ? -1 : 1));
  return projects;
}
