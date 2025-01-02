"use client";

import { Group } from "@/interfaces/group";
import { Project } from "@/interfaces/project";
import { ProjectFilterOptions } from "@/interfaces/projectFilterOptions";
import { SkillGroup } from "@/interfaces/skillGroup";
import FilteredProjectCollection from "../_components/filtered-project-collection";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  minYear: number;
  maxYear: number;
  projects: Project[];
  groups: Group[];
  skillGroups: SkillGroup[];
};

function parseSearchParams(
  params: ReadonlyURLSearchParams
): ProjectFilterOptions {
  let newFilter: ProjectFilterOptions = {
    searchQuery: params.get("search") ?? "",
    selectedGroupSlugs: params.getAll("group"),
    selectedSkillSlugs: params.getAll("skill"),
  };

  return newFilter;
}

export default function ProjectsPageFilteredProjects({
  minYear,
  maxYear,
  projects,
  groups,
  skillGroups,
}: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [filter, setFilter] = useState<ProjectFilterOptions>(
    parseSearchParams(searchParams)
  );

  useEffect(() => {
    setFilter((prevValue) => parseSearchParams(searchParams));

    router.refresh();
  }, [searchParams]);

  function handlePageChanged(newPage: number) {
    console.log(
      `ProjectsPageFilteredProjects.handlePageChanged(newPage = ${newPage})`
    );
  }

  function handleFilterChanged(newFilter: ProjectFilterOptions) {
    console.log(`ProjectsPageFilteredProjects.handleFilterChanged()`);

    updateUrl(newFilter);
  }

  function updateUrl(f: ProjectFilterOptions) {
    const params = new URLSearchParams();

    if (f.searchQuery && f.searchQuery.length > 0) {
      params.append("search", f.searchQuery);
    }

    for (let catSlug of f.selectedGroupSlugs) {
      params.append("group", catSlug);
    }

    for (let skillSlug of f.selectedSkillSlugs) {
      params.append("skill", skillSlug);
    }

    window.history.replaceState(null, "", `?${params.toString()}`);
  }

  return (
    <FilteredProjectCollection
      page={1}
      projects={projects}
      filter={filter}
      skillGroups={skillGroups}
      groups={groups}
      minYear={minYear}
      maxYear={maxYear}
      onPageChanged={handlePageChanged}
      onFilterChanged={handleFilterChanged}
    />
  );
}
