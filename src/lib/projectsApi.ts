import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import path from "path";
import { markdownToHtml, removeFileExtension, convertToSlug } from "./util";
import process from "process";

import type { Project } from "@/interfaces/project";
import type { Category } from "@/interfaces/category";
import type { Tag, TagDetailed } from "@/interfaces/tag";

import { TAG_GROUPS } from "./tagGroups";
import { TagGroup, TagGroupDetailed } from "@/interfaces/tagGroup";
import { TAG_GROUP_NAMES } from "./tagGroups";
import slugify from "slugify";

const projectsDirectory = join(process.cwd(), "_projects");

function getTagGroup(tagName: string): TagGroup {
  let groupName = TAG_GROUPS[tagName] ?? "Other";
  return { name: groupName, slug: slugify(groupName) };
}

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
    group: getTagGroup(t),
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

let allProjectCategories: Category[];

export function getAllProjectCategories(): Category[] {
  if (!allProjectCategories) {
    allProjectCategories = [];
    let categoryFolderNames: string[] = fs.readdirSync(projectsDirectory);
    for (let categoryName of categoryFolderNames) {
      let categorySlug = convertToSlug(categoryName);
      allProjectCategories.push({
        name: categoryName,
        slug: categorySlug,
        url: `/projects/${categorySlug}`,
      });
    }
  }

  return allProjectCategories;
}

export async function getYearRange(): Promise<{
  minYear: number;
  maxYear: number;
}> {
  let allProjects = await getAllProjects();

  let minProjectsYear: number = Math.min(
    ...allProjects.map((p) => new Date(p.date).getFullYear())
  );

  let maxProjectsYear: number = Math.max(
    ...allProjects.map((p) => new Date(p.date).getFullYear())
  );

  return { minYear: minProjectsYear, maxYear: maxProjectsYear };
}

export async function getAllTags(): Promise<TagDetailed[]> {
  let allProjects = await getAllProjects();

  let allTags: TagDetailed[] = [];

  for (let proj of allProjects) {
    for (let projTag of proj.tags) {
      let tag = allTags.find((t) => t.slug === projTag.slug);

      if (!tag) {
        tag = { ...projTag, projects: [] };
        allTags.push(tag);
      }

      tag.projects.push(proj);
    }
  }

  return allTags.sort((t1, t2) => (t1.name < t2.name ? -1 : 1));
}

export async function getAllTagGroups(): Promise<TagGroupDetailed[]> {
  let allTags = await getAllTags();

  //get all tag groups
  let returnTagGroups: TagGroupDetailed[] =
    TAG_GROUP_NAMES.map<TagGroupDetailed>((n) => ({
      name: n,
      slug: slugify(n),
      tags: [],
    }));

  //Add tags to groups
  for (let tag of allTags) {
    let tagGroup = returnTagGroups.find((g) => g.slug == tag.group.slug);

    if (!tagGroup) {
      throw Error(`Tag group not found in tagGroups.ts: ${tag.slug}`);
    }

    tagGroup.tags.push(tag);
  }

  //Sort tags alphabetically in group
  for (let tg of returnTagGroups) {
    tg.tags = tg.tags.sort((t1, t2) => (t1.name < t2.name ? -1 : 1));
  }

  return returnTagGroups;
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
