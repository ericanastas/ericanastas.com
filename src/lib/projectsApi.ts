import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import path from "path";
import { markdownToHtml, removeFileExtension, convertToSlug } from "./util";
import process from "process";

import type { Project } from "@/interfaces/project";
import type { Category } from "@/interfaces/category";
import type { Tag } from "@/interfaces/tag";

const projectsDirectory = join(process.cwd(), "_projects");

async function readProjectFile(
  category: Category,
  projectMdPath: string
): Promise<Project> {
  let projectMdFileName = path.basename(projectMdPath);

  const projectSlug = removeFileExtension(projectMdFileName);

  if (projectSlug != convertToSlug(projectSlug)) {
    throw Error(
      `Project file name "${projectMdFileName}" does not match slugified version "${convertToSlug(
        projectSlug
      )}"`
    );
  }

  const fileContents = fs.readFileSync(projectMdPath, "utf8");
  const { data, content } = matter(fileContents);

  const html = await markdownToHtml(content || "");

  let { title, date, coverImage, summary, draft, tags, featured, hide, repo } =
    data;

  let tagObjArr: Tag[] = tags.map((t: string) => ({
    name: t,
    slug: convertToSlug(t),
    url: `/tags/${convertToSlug(t)}`,
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
    html,
    hide,
    repo,
  } as Project;
}

export async function getProject(
  categorySlug: string,
  projectSlug: string
): Promise<Project | null> {
  let categoryFolderNames: string[] = fs.readdirSync(projectsDirectory);

  let categoryFolderName = categoryFolderNames.find(
    (c) => convertToSlug(c) === categorySlug
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

  let project = await readProjectFile(category, projectMdFilePath);

  return project;
}

export function getAllProjectCategories(): Category[] {
  let categories: Category[] = [];
  let categoryFolderNames: string[] = fs.readdirSync(projectsDirectory);
  for (let categoryName of categoryFolderNames) {
    let categorySlug = convertToSlug(categoryName);
    categories.push({
      name: categoryName,
      slug: categorySlug,
      url: `/projects/${categorySlug}`,
    });
  }

  return categories;
}

export async function getAllProjects(): Promise<Project[]> {
  let projects: Project[] = [];

  let categories = getAllProjectCategories();

  for (let category of categories) {
    let categoryFolder = path.join(projectsDirectory, category.name);

    let projectMdFileNames: string[] = fs.readdirSync(categoryFolder);

    for (let projectMdFileName of projectMdFileNames) {
      let projectMdFilePath = path.join(categoryFolder, projectMdFileName);
      let project = await readProjectFile(category, projectMdFilePath);
      projects.push(project);
    }
  }

  projects = projects.filter((p) => !p.hide);

  if (process.env.NODE_ENV === "production") {
    projects = projects.filter((p) => !p.draft);
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

export async function getAllTags(): Promise<Tag[]> {
  let allProjects = await getAllProjects();
  return getProjectTags(allProjects);
}

function getProjectTags(projects: Project[]): Tag[] {
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

export async function getProjectsByCategorySlug(
  categorySlug: string
): Promise<Project[]> {
  return (await getAllProjects()).filter(
    (p) => p.category.slug === categorySlug
  );
}

export async function getProjectsByTagSlug(
  tagSlug: string
): Promise<Project[]> {
  return (await getAllProjects()).filter((p) =>
    p.tags.map((t) => t.slug).includes(tagSlug)
  );
}

export function getAllProjectSlugs() {
  return fs.readdirSync(projectsDirectory);
}
