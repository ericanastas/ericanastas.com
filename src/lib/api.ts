import { Project } from "@/interfaces/project";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import slugify from "slugify";
import { Tag } from "@/interfaces/tag";
import path from "path";
import { Category } from "@/interfaces/category";

const projectsDirectory = join(process.cwd(), "_projects");
const slugifyOpt = { lower: true };

function readProjectFile(category: Category, projectMdPath: string): Project {
  let projectMdFileName = path.basename(projectMdPath);

  const projectSlug = removeFileExtension(projectMdFileName);

  if (projectSlug != slugify(projectSlug, slugifyOpt)) {
    throw Error(
      `Project file name "${projectMdFileName}" does not match slugified version "${slugify(
        projectSlug,
        slugifyOpt
      )}"`
    );
  }

  const fileContents = fs.readFileSync(projectMdPath, "utf8");
  const { data, content } = matter(fileContents);

  let { title, date, coverImage, summary, draft, tags, featured } = data;

  let tagObjArr: Tag[] = tags.map((t: string) => ({
    name: t,
    slug: slugify(t, slugifyOpt),
    url: `/tags/${slugify(t, slugifyOpt)}`,
  }));

  let url = `/projects/${category.slug}/${projectSlug}`;

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
    url,
    category,
  } as Project;
}

export function getProject(
  categorySlug: string,
  projectSlug: string
): Project | null {
  let categoryFolderNames: string[] = fs.readdirSync(projectsDirectory);

  let categoryFolderName = categoryFolderNames.find(
    (c) => slugify(c, slugifyOpt) === categorySlug
  );
  if (!categoryFolderName) return null;

  let category: Category = {
    name: categoryFolderName,
    slug: categorySlug,
    url: `/projects/${categorySlug}`,
  };
  const projectMdFileName = projectSlug + ".md";
  const projectMdFilePath = path.join(
    projectsDirectory,
    categoryFolderName,
    projectMdFileName
  );

  let project = readProjectFile(category, projectMdFilePath);

  return project;
}

function removeFileExtension(fileName: string): string {
  return fileName.substring(0, fileName.length - path.extname(fileName).length);
}

export function getAllProjectCategories(): Category[] {
  let categories: Category[] = [];
  let categoryFolderNames: string[] = fs.readdirSync(projectsDirectory);
  for (let categoryName of categoryFolderNames) {
    let categorySlug = slugify(categoryName, slugifyOpt);
    categories.push({
      name: categoryName,
      slug: categorySlug,
      url: `/projects/${categorySlug}`,
    });
  }

  return categories;
}

export function getAllProjects(): Project[] {
  const projects: Project[] = [];

  let categories = getAllProjectCategories();

  for (let category of categories) {
    let categoryFolder = path.join(projectsDirectory, category.name);

    let projectMdFileNames: string[] = fs.readdirSync(categoryFolder);

    for (let projectMdFileName of projectMdFileNames) {
      let projectMdFilePath = path.join(categoryFolder, projectMdFileName);
      let project = readProjectFile(category, projectMdFilePath);
      projects.push(project);
    }
  }

  const sortedFeaturedProjects = projects
    .filter((p) => p.featured)
    .sort(sortProjectDesc);
  const sortedNonFeaturedProjects = projects
    .filter((p) => !p.featured)
    .sort(sortProjectDesc);

  const sortedProjects = [
    ...sortedFeaturedProjects,
    ...sortedNonFeaturedProjects,
  ];
  return sortedProjects;
}

export function getAllTags(): Tag[] {
  let allProjects = getAllProjects();
  return getProjectTags(allProjects);
}

export function getProjectTags(projects: Project[]): Tag[] {
  let tags: Tag[] = [];

  for (let proj of projects) {
    for (let projTag of proj.tags) {
      if (!tags.some((t) => t.slug === projTag.slug)) {
        tags.push(projTag);
      }
    }
  }

  return tags.sort((t1, t2) => (t1.name < t2.name ? -1 : 1));
}

function sortProjectDesc(project1: Project, project2: Project): number {
  return project1.date > project2.date ? -1 : 1;
}

export function getProjectsByCategorySlug(categorySlug: string): Project[] {
  return getAllProjects().filter((p) => p.category.slug === categorySlug);
}

export function getProjectsByTagSlug(tagSlug: string): Project[] {
  return getAllProjects().filter((p) =>
    p.tags.map((t) => t.slug).includes(tagSlug)
  );
}

export function getAllProjectSlugs() {
  return fs.readdirSync(projectsDirectory);
}
