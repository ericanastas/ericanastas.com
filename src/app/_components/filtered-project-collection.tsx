"use client";

import ProjectCollection from "./project-collection";
import { Project } from "../../interfaces/project";
import { Category } from "../../interfaces/category";
import { TagGroup } from "../../interfaces/tagGroup";
import type { ProjectFilterOptions } from "@/interfaces/projectFilterOptions";
import ProjectFilter from "./project-filter";
import { useState } from "react";

export type Props = {
  projects: Project[];
  categories: Category[];
  tagGroups: TagGroup[];
  filter?: ProjectFilterOptions;
  minYear?: number;
  maxYear?: number;
};

export default function FilteredProjectCollection({
  projects,
  categories,
  tagGroups,
  filter,
  minYear,
  maxYear,
}: Props) {
  let [filteredProjects, setFilteredProjects] = useState(projects);
  let [selectedTagSlugs, setSelectedTagSlugs] = useState(
    filter?.selectedTagSlugs ?? []
  );

  function handleFilterOptionsChanged(filter: ProjectFilterOptions) {
    console.log(
      `handleFilterOptionsChanged(), filter: ${JSON.stringify(filter, null, 4)}`
    );

    setSelectedTagSlugs(() => filter.selectedTagSlugs);

    setFilteredProjects(() =>
      projects.filter((proj) => projectFilterPredicate(proj, filter))
    );
  }

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
  return (
    <div>
      <ProjectFilter
        categories={categories}
        tagGroups={tagGroups}
        filter={filter}
        onFilterOptionsChanged={handleFilterOptionsChanged}
      />
      <ProjectCollection
        projects={filteredProjects}
        minYear={minYear}
        maxYear={maxYear}
        selectedTagSlugs={selectedTagSlugs}
      />
    </div>
  );
}
