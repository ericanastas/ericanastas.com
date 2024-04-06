import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import slugify from "slugify";
import path from "path";
import markdownToHtml from "./markdownToHtml";

import type { Project } from "@/interfaces/project";
import type { Page } from "@/interfaces/page";
import type { Category } from "@/interfaces/category";
import type { Tag } from "@/interfaces/tag";

const projectsDirectory = join(process.cwd(), "_projects");
const pagesDirectory = join(process.cwd(), "_pages");
const slugifyOpt = { lower: true };

async function readProjectFile(
  category: Category,
  projectMdPath: string
): Promise<Project> {
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

  const html = await markdownToHtml(content || "");

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
    html,
  } as Project;
}

export async function getProject(
  categorySlug: string,
  projectSlug: string
): Promise<Project | null> {
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

  let project = await readProjectFile(category, projectMdFilePath);

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

export async function getAllProjects(): Promise<Project[]> {
  const projects: Project[] = [];

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

async function readPageFile(pageMdPath: string): Promise<Page> {
  let pageMdFileName = path.basename(pageMdPath);

  const pageSlug = removeFileExtension(pageMdFileName);

  if (pageSlug != slugify(pageSlug, slugifyOpt)) {
    throw Error(
      `Page file name "${pageMdFileName}" does not match slugified version "${slugify(
        pageSlug,
        slugifyOpt
      )}"`
    );
  }

  const fileContents = fs.readFileSync(pageMdPath, "utf8");
  const { data, content } = matter(fileContents);
  const html = await markdownToHtml(content || "");

  let { title, draft } = data;

  let url = `/${pageSlug}`;

  let page: Page = { content, html, slug: pageSlug, title, url, draft };

  return page;
}

export async function getPage(pageSlug: string): Promise<Page | null> {
  const pageMdFileName = pageSlug + ".md";
  const projectMdFilePath = path.join(pagesDirectory, pageMdFileName);

  let project = await readPageFile(projectMdFilePath);

  return project;
}

export async function getAllPages(): Promise<Page[]> {
  const pages: Page[] = [];

  let pageMdFileNames: string[] = fs.readdirSync(pagesDirectory);

  for (let pageMdFileName of pageMdFileNames) {
    let pageMdFilePath = path.join(pagesDirectory, pageMdFileName);
    let page = await readPageFile(pageMdFilePath);
    pages.push(page);
  }

  return pages;
}
