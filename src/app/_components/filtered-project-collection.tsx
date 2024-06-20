"use client";

import ProjectCollection from "./project-collection";
import { Project } from "../../interfaces/project";
import { Category } from "../../interfaces/category";
import { TagGroup } from "../../interfaces/tagGroup";
import type { ProjectFilterOptions } from "@/interfaces/projectFilterOptions";
import ProjectFilter from "./project-filter";
import { useEffect, useState } from "react";

export type Props = {
  projects: Project[];
  categories: Category[];
  tagGroups: TagGroup[];
  filter: ProjectFilterOptions;
  minYear: number;
  maxYear: number;
};

function projectFilterPredicate(
  project: Project,
  filter: ProjectFilterOptions
): boolean {
  //If categories are selected project category
  if (
    filter.selectedCategorySlugs.length > 0 &&
    !filter.selectedCategorySlugs.some((s) => s === project.category.slug)
  ) {
    return false;
  }

  if (
    filter.selectedTagSlugs.length > 0 &&
    !project.tags
      .map((t) => t.slug)
      .some((ts) => filter.selectedTagSlugs.includes(ts))
  ) {
    return false;
  }

  //If searchQuery is set
  if (filter.searchQuery) {
    let searchContent = (
      project.title +
      " " +
      project.content
    ).toLocaleLowerCase();

    if (!searchContent.includes(filter.searchQuery.toLocaleLowerCase())) {
      return false;
    }
  }

  return true;
}

export default function FilteredProjectCollection({
  projects,
  categories,
  tagGroups,
  filter,
  minYear,
  maxYear,
}: Props) {
  let [filteredProjects, setFilteredProjects] = useState(
    projects.filter((p) => projectFilterPredicate(p, filter))
  );

  let [projectFilter, setProjectFilter] =
    useState<ProjectFilterOptions>(filter);

  useEffect(() => {
    setProjectFilter(filter);
  }, [filter]);

  useEffect(() => {
    setFilteredProjects(() =>
      projects.filter((proj) => projectFilterPredicate(proj, projectFilter))
    );
  }, [projectFilter]);

  function handleFilterOptionsChanged(f: ProjectFilterOptions) {
    setProjectFilter(f);
  }

  return (
    <div>
      <ProjectFilter
        categories={categories}
        tagGroups={tagGroups}
        filter={projectFilter}
        onFilterOptionsChanged={handleFilterOptionsChanged}
      />
      <ProjectCollection
        projects={filteredProjects}
        minYear={minYear}
        maxYear={maxYear}
        selectedTagSlugs={projectFilter.selectedTagSlugs}
      />
    </div>
  );
}
