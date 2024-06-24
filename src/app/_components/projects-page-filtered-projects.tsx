"use client";

import { Category } from "@/interfaces/category";
import { Project } from "@/interfaces/project";
import { ProjectFilterOptions } from "@/interfaces/projectFilterOptions";
import { TagGroup } from "@/interfaces/tagGroup";
import FilteredProjectCollection from "../_components/filtered-project-collection";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  minYear: number;
  maxYear: number;
  projects: Project[];
  categories: Category[];
  tagGroups: TagGroup[];
};

function parseSearchParams(
  params: ReadonlyURLSearchParams
): ProjectFilterOptions {
  let newFilter: ProjectFilterOptions = {
    searchQuery: params.get("search") ?? "",
    selectedCategorySlugs: params.getAll("category"),
    selectedTagSlugs: params.getAll("tag"),
  };

  return newFilter;
}

export default function ProjectsPageFilteredProjects({
  minYear,
  maxYear,
  projects,
  categories,
  tagGroups,
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

  return (
    <FilteredProjectCollection
      projects={projects}
      filter={filter}
      tagGroups={tagGroups}
      categories={categories}
      minYear={minYear}
      maxYear={maxYear}
    />
  );
}
