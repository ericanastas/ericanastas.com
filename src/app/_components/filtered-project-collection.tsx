"use client";

import ProjectCollection from "./project-collection";
import { Project } from "../../interfaces/project";
import { Group } from "../../interfaces/group";
import { SkillGroup } from "../../interfaces/skillGroup";
import type { ProjectFilterOptions } from "@/interfaces/projectFilterOptions";
import ProjectFilter from "./project-filter";
import { useEffect, useState } from "react";
import type { Skill } from "@/interfaces/skill";

export type Props = {
  projects: Project[];
  groups: Group[];
  skillGroups: SkillGroup[];
  filter: ProjectFilterOptions;
  minYear: number;
  maxYear: number;
  page: number;
  onPageChanged: (page: number) => void;
  onFilterChanged: (filter: ProjectFilterOptions) => void;
};

function projectFilterPredicate(
  project: Project,
  filter: ProjectFilterOptions
): boolean {
  //If groups are selected project group
  if (
    filter.selectedGroupSlugs.length > 0 &&
    !filter.selectedGroupSlugs.some((s) => s === project.group.slug)
  ) {
    return false;
  }

  if (
    filter.selectedSkillSlugs.length > 0 &&
    !project.skills
      .map((s) => s.slug)
      .some((slug) => filter.selectedSkillSlugs.includes(slug))
  ) {
    return false;
  }

  //If searchQuery is set
  if (filter.searchQuery) {
    let searchContent = (
      project.title +
      " " +
      project.skills.map((s) => s.name).join(" ") +
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
  groups,
  skillGroups,
  filter,
  minYear,
  maxYear,
  page,
  onPageChanged,
  onFilterChanged,
}: Props) {
  let [filteredProjects, setFilteredProjects] = useState(
    projects.filter((p) => projectFilterPredicate(p, filter))
  );

  let [projectFilter, setProjectFilter] =
    useState<ProjectFilterOptions>(filter);

  useEffect(() => {
    setFilteredProjects(() =>
      projects.filter((proj) => projectFilterPredicate(proj, projectFilter))
    );
    console.log("FilteredProjectCollection projectFilter effect");

    onFilterChanged(projectFilter);
  }, [projectFilter]);

  function handleFilterOptionsChanged(f: ProjectFilterOptions) {
    console.log("FilteredProjectCollection.handleFilterOptionsChanged(");
    setProjectFilter(f);
  }

  function handleAddSkill(skill: Skill) {
    setProjectFilter((f) => ({
      ...f,
      selectedSkillSlugs: [...f.selectedSkillSlugs, skill.slug],
    }));
  }
  function handleRemoveSkill(skill: Skill) {
    setProjectFilter((f) => ({
      ...f,
      selectedSkillSlugs: f.selectedSkillSlugs.filter(
        (ts) => ts !== skill.slug
      ),
    }));
  }

  function handlePageChanged(newPage: number) {
    console.log(
      `FilteredProjectCollection.handlePageChanged(newPage = ${newPage})`
    );
    onPageChanged(newPage);
  }

  return (
    <div>
      <ProjectFilter
        groups={groups}
        skillGroups={skillGroups}
        filter={projectFilter}
        onFilterOptionsChanged={handleFilterOptionsChanged}
      />

      {filteredProjects.length > 0 ? (
        <ProjectCollection
          page={page}
          onPageChanged={handlePageChanged}
          onAddSkill={handleAddSkill}
          onRemoveSkill={handleRemoveSkill}
          projects={filteredProjects}
          minYear={minYear}
          maxYear={maxYear}
          selectedSkillSlugs={projectFilter.selectedSkillSlugs}
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
