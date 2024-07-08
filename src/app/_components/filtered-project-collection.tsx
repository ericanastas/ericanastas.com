"use client";

import ProjectCollection from "./project-collection";
import { Project } from "../../interfaces/project";
import { Category } from "../../interfaces/category";
import { SkillGroup } from "../../interfaces/skillGroup";
import type { ProjectFilterOptions } from "@/interfaces/projectFilterOptions";
import ProjectFilter from "./project-filter";
import { useEffect, useState } from "react";
import type { Tag } from "@/interfaces/tag";

export type Props = {
  projects: Project[];
  categories: Category[];
  tagGroups: SkillGroup[];
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
      project.tags.map((t) => t.name).join(" ") +
      " " +
      project.content
    ).toLocaleLowerCase();

    if (!searchContent.includes(filter.searchQuery.toLocaleLowerCase())) {
      return false;
    }
  }

  return true;
}

function updateUrl(f: ProjectFilterOptions) {
  const params = new URLSearchParams();

  if (f.searchQuery && f.searchQuery.length > 0) {
    params.append("search", f.searchQuery);
  }

  for (let catSlug of f.selectedCategorySlugs) {
    params.append("category", catSlug);
  }

  for (let tagSlug of f.selectedTagSlugs) {
    params.append("tag", tagSlug);
  }

  window.history.replaceState(null, "", `?${params.toString()}`);
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
    updateUrl(projectFilter);
  }, [projectFilter]);

  function handleFilterOptionsChanged(f: ProjectFilterOptions) {
    setProjectFilter(f);
  }

  function handleAddTag(tag: Tag) {
    setProjectFilter((f) => ({
      ...f,
      selectedTagSlugs: [...f.selectedTagSlugs, tag.slug],
    }));
  }
  function handleRemoveTag(tag: Tag) {
    setProjectFilter((f) => ({
      ...f,
      selectedTagSlugs: f.selectedTagSlugs.filter((ts) => ts !== tag.slug),
    }));
  }

  return (
    <div>
      <ProjectFilter
        categories={categories}
        tagGroups={tagGroups}
        filter={projectFilter}
        onFilterOptionsChanged={handleFilterOptionsChanged}
      />

      {filteredProjects.length > 0 ? (
        <ProjectCollection
          onAddTag={handleAddTag}
          onRemoveTag={handleRemoveTag}
          projects={filteredProjects}
          minYear={minYear}
          maxYear={maxYear}
          selectedTagSlugs={projectFilter.selectedTagSlugs}
        />
      ) : (
        <div className="flex justify-center items-center py-20">
          <p className="text-gray-500 text-lg">
            No projects match the selected filters 😕
          </p>
        </div>
      )}
    </div>
  );
}
