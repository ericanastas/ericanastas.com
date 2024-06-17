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

  function handleFilterOptionsChanged(filter: ProjectFilterOptions) {}

  return (
    <div>
      <ProjectFilter
        categories={categories}
        tagGroups={tagGroups}
        filter={filter}
        onFilterOptionsChanged={handleFilterOptionsChanged}
      />
      <ProjectCollection
        projects={projects}
        minYear={minYear}
        maxYear={maxYear}
      />
    </div>
  );
}
