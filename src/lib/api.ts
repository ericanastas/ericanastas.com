import { Project } from "@/interfaces/project";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import slugify from "slugify";
import { Tag } from "@/interfaces/tag";

const projectsDirectory = join(process.cwd(), "_projects");

const slugifyOpt = { lower: true };

export function getAllProjectSlugs() {
  return fs.readdirSync(projectsDirectory);
}

export function getProjectBySlug(slug: string) {
  const projectSlug = slug.replace(/\.md$/, "");
  const fullPath = join(projectsDirectory, `${projectSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  let { title, date, coverImage, summary, draft, tags, featured } = data;

  let tagObjArr: Tag[] = tags.map((t: string) => ({
    name: t,
    slug: slugify(t, slugifyOpt),
  }));

  return {
    slug: projectSlug,
    title,
    date,
    coverImage,
    summary,
    draft,
    content,
    featured,
    tags: tagObjArr,
  } as Project;
}

export function getAllTags(): Tag[] {
  let allProjects = getAllProjects();
  return getProjectTags(allProjects);
}

export function getProjectTags(projects: Project[]): Tag[] {
  let tagSlugs: Tag[] = [];

  for (let proj of projects) {
    for (let projTag of proj.tags) {
      if (!tagSlugs.some((t) => t.slug === projTag.slug)) {
        tagSlugs.push(projTag);
      }
    }
  }

  return tagSlugs.sort((t1, t2) => (t1 < t2 ? -1 : 1));
}

export function getProjectsByTagSlug(tagSlug: string): Project[] {
  return getAllProjects().filter((p) =>
    p.tags.map((t) => t.slug).includes(tagSlug)
  );
}

export function getAllProjects(): Project[] {
  const slugs = getAllProjectSlugs();

  const allProjects = slugs.map((s) => getProjectBySlug(s));

  const sortedFeaturedProjects = allProjects
    .filter((p) => p.featured)
    .sort(sortProjectDesc);
  const sortedNonFeaturedProjects = allProjects
    .filter((p) => !p.featured)
    .sort(sortProjectDesc);
  const projects = [...sortedFeaturedProjects, ...sortedNonFeaturedProjects];
  return projects;
}

function sortProjectDesc(project1: Project, project2: Project): number {
  return project1.date > project2.date ? -1 : 1;
}
