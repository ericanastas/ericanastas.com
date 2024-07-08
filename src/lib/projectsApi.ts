import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import path from "path";
import { markdownToHtml, removeFileExtension, convertToSlug } from "./util";
import process from "process";
import type { Project } from "@/interfaces/project";
import type { Category } from "@/interfaces/category";
import type { Skill } from "@/interfaces/skill";
import { SkillGroup } from "@/interfaces/skillGroup";
import { SKILL_GROUPS, SKILL_GROUP_NAMES } from "./skillGroups";

const projectsDirectory = join(process.cwd(), "_projects");

function getSkillGroupName(skillName: string): string {
  if (!SKILL_GROUPS.hasOwnProperty(skillName)) {
    throw new Error(`Skill "${skillName}" is not assigned to a group`);
  } else {
    let groupName = SKILL_GROUPS[skillName];
    return groupName;
  }
}

function createCategory(name: string): Category {
  let slug = convertToSlug(name);

  return {
    name: name,
    slug: slug,
    url: `/projects?category=${slug}`,
  };
}

function createSkill(name: string): Skill {
  let slug = convertToSlug(name);
  let groupName = getSkillGroupName(name);

  return {
    name: name,
    slug: slug,
    url: `/projects?skill=${slug}`,
    groupName: groupName,
  };
}

function getCategoryFolderNames(): string[] {
  return fs.readdirSync(projectsDirectory);
}

function projectIsVisible(project: Project): boolean {
  //Don't return hidden projects
  if (project.hide) return false;
  //Hide draft projects in production
  else if (process.env.NODE_ENV === "production" && project.draft) return false;
  else return true;
}

async function readProjectFile(
  categoryFolderName: string,
  mdFileName: string
): Promise<Project> {
  const projectMdPath = path.join(
    projectsDirectory,
    categoryFolderName,
    mdFileName
  );

  //Check if file exists
  if (!fs.existsSync(projectMdPath)) {
    throw Error(`File not found: ${projectMdPath}`);
  }

  const fileContents = fs.readFileSync(projectMdPath, "utf8");
  const { data, content } = matter(fileContents);

  const html = await markdownToHtml(content || "");

  let { title, date, coverImage, summary, draft, skills, hide, repo } = data;

  let skillObjArr: Skill[] = skills.map((t: string) => createSkill(t));

  //Check for duplicate skill assigned to project
  const skillSlugs = skillObjArr.map((s) => s.slug);

  let duplicateSkillSlugs = skillSlugs.filter((slug, index) =>
    skillSlugs.some(
      (otherSlug, otherIndex) => slug === otherSlug && index !== otherIndex
    )
  );

  if (duplicateSkillSlugs.length > 0) {
    throw Error(
      `Duplicate skill found in "${mdFileName}": ${duplicateSkillSlugs.join(
        ", "
      )}`
    );
  }

  //Create category
  const category = createCategory(categoryFolderName);

  //Sort skills alphabetically on project
  skillObjArr = skillObjArr.sort((t1, t2) => (t1.name > t2.name ? 1 : -1));

  const projectSlug = removeFileExtension(mdFileName);

  let url = `/projects/${category.slug}/${projectSlug}`;

  return {
    slug: projectSlug,
    title,
    date,
    coverImage,
    summary,
    draft,
    content,
    skills: skillObjArr,
    url,
    category,
    html,
    hide,
    repo,
  } as Project;
}

function sortProjectDesc(project1: Project, project2: Project): number {
  return project1.date > project2.date ? -1 : 1;
}

export async function getProject(
  categorySlug: string,
  projectSlug: string
): Promise<Project | null> {
  let categoryFolderNames = getCategoryFolderNames();

  let categoryFolderName = categoryFolderNames.find(
    (c) => convertToSlug(c) === categorySlug
  );

  if (!categoryFolderName) return null;

  const projectMdFileName = projectSlug + ".md";

  let project = await readProjectFile(categoryFolderName, projectMdFileName);

  if (!projectIsVisible(project)) return null;
  else return project;
}

export async function getProjects(): Promise<Project[]> {
  let projects: Project[] = [];

  let categoryFolderNames = await getCategoryFolderNames();

  for (let categoryFolderName of categoryFolderNames) {
    let categoryFolderPath = path.join(projectsDirectory, categoryFolderName);
    let projectMdFileNames: string[] = fs.readdirSync(categoryFolderPath);

    for (let projectMdFileName of projectMdFileNames) {
      let project = await readProjectFile(
        categoryFolderName,
        projectMdFileName
      );

      projects.push(project);
    }
  }

  //Remove hidden projects
  projects = projects.filter((p) => projectIsVisible(p));

  //Sort projects
  let sortedProjects = projects.sort(sortProjectDesc);

  return sortedProjects;
}

export async function getProjectsYearRange(): Promise<{
  minYear: number;
  maxYear: number;
}> {
  let projects = await getProjects();

  let minYear: number = Math.min(
    ...projects.map((p) => new Date(p.date).getFullYear())
  );

  let maxYear: number = Math.max(
    ...projects.map((p) => new Date(p.date).getFullYear())
  );

  return { minYear, maxYear };
}

export async function getCategory(
  categorySlug: string,
  incProjects?: boolean
): Promise<Category | null> {
  let categoryProjects = (await getProjects()).filter(
    (p) => p.category.slug === categorySlug
  );

  if (categoryProjects.length > 0) {
    let category: Category = {
      ...categoryProjects[0].category,
      projects: incProjects ? categoryProjects : undefined,
    };

    return category;
  } else return null;
}

export async function getCategories(
  incProjects?: boolean
): Promise<Category[]> {
  let categories: Category[] = [];

  //get projects
  let projects = await getProjects();

  for (let project of projects) {
    let category: Category | undefined = categories.find(
      (c) => c.slug === project.category.slug
    );

    if (!category) {
      category = {
        ...project.category,
        projects: incProjects
          ? projects.filter((p) => p.category.slug === project.category.slug)
          : undefined,
      };
      categories.push(category);
    }
  }

  return categories.sort((c1, c2) => (c1.name < c2.name ? -1 : 1));
}

export async function getSkill(
  skillSlug: string,
  incProjects?: Boolean
): Promise<Skill | null> {
  let skillProjects = (await getProjects()).filter((p) =>
    p.skills.some((t) => t.slug === skillSlug)
  );

  if (skillProjects.length > 0) {
    let skill: Skill = {
      ...skillProjects[0].skills.find((s) => s.slug === skillSlug)!,
      projects: incProjects ? skillProjects : undefined,
    };

    return skill;
  } else return null;
}

export async function getSkills(incProjects?: boolean): Promise<Skill[]> {
  let projects = await getProjects();

  let skills: Skill[] = [];

  for (let project of projects) {
    for (let projSkill of project.skills) {
      let skill = skills.find((t) => t.slug === projSkill.slug);

      if (!skill) {
        skill = {
          ...projSkill,
          projects: incProjects
            ? projects.filter((p) =>
                p.skills.some((t) => t.slug == projSkill.slug)
              )
            : undefined,
        };
        skills.push(skill);
      }
    }
  }

  return skills.sort((t1, t2) => (t1.name < t2.name ? -1 : 1));
}

export async function getSkillGroups(
  incProjects?: boolean
): Promise<SkillGroup[]> {
  let skillGroups: SkillGroup[] = SKILL_GROUP_NAMES.map((n) => ({
    name: n,
    skills: [],
  }));

  let skills = await getSkills(incProjects);

  for (let skill of skills) {
    let matchingGroup = skillGroups.find((sg) => sg.name == skill.groupName);

    matchingGroup!.skills.push(skill);
  }

  return skillGroups;
}
