"use client";
import { Group } from "@/interfaces/group";
import { Project } from "@/interfaces/project";
import { ProjectFilterOptions } from "@/interfaces/projectFilterOptions";
import { SkillGroup } from "@/interfaces/skillGroup";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import { ProjectGrid } from "./project-grid";
import { ProjectTimeLine } from "./project-timeline";
import Pagination from "./pagination";
import ProjectFilter from "./project-filter";
import { useEffect, useState, useRef } from "react";
import type { Skill } from "@/interfaces/skill";

const SEARCH_PARAM_NAME = "search";
const GROUP_PARAM_NAME = "group";
const SKILL_PARAM_NAME = "skill";
const PAGE_PARAM_NAME = "page";
const PAGE_SIZE = 12;

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

type Props = {
  minYear: number;
  maxYear: number;
  projects: Project[];
  groups: Group[];
  skillGroups: SkillGroup[];
};

export default function ProjectsPageFilteredProjects({
  minYear,
  maxYear,
  projects,
  groups,
  skillGroups,
}: Props) {
  const searchParams = useSearchParams();

  //Filter state
  let initalFilter: ProjectFilterOptions = {
    searchQuery: searchParams.get(SEARCH_PARAM_NAME) ?? "",
    selectedGroupSlugs: searchParams.getAll(GROUP_PARAM_NAME),
    selectedSkillSlugs: searchParams.getAll(SKILL_PARAM_NAME),
  };

  let [projectFilter, setProjectFilter] =
    useState<ProjectFilterOptions>(initalFilter);

  //Filtered Projects
  const filteredProjects = projects.filter((p) =>
    projectFilterPredicate(p, projectFilter)
  );

  //pageCount
  const pageCount = Math.ceil(filteredProjects.length / PAGE_SIZE);

  //Current Page
  let pageParamStr = searchParams.get(PAGE_PARAM_NAME);
  let initalPage = pageParamStr ? parseInt(pageParamStr) : 1;
  if (Number.isNaN(initalPage)) initalPage = 1;

  initalPage = Math.max(1, initalPage);
  initalPage = Math.min(pageCount, initalPage);

  const [currentPage, setCurrentPage] = useState(initalPage);

  const pagedProjects = filteredProjects.slice(
    (currentPage - 1) * PAGE_SIZE,
    (currentPage - 1) * PAGE_SIZE + PAGE_SIZE
  );

  const [hoverProjectUrl, setHoverProjectUrl] = useState<string>("");

  const [isTimelineStuck, setIsTimeLineStuck] = useState<boolean>(false);
  const containerRef = useRef(null);

  let intersectionCallBack: IntersectionObserverCallback = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    const [entry] = entries;

    setIsTimeLineStuck(!entry.isIntersecting);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(intersectionCallBack, options);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef]);

  function handleAddSkill(skill: Skill) {
    handleFilterOptionsChanged({
      ...projectFilter,
      selectedSkillSlugs: [...projectFilter.selectedSkillSlugs, skill.slug],
    });
  }

  function handleRemoveSkill(skill: Skill) {
    handleFilterOptionsChanged({
      ...projectFilter,
      selectedSkillSlugs: projectFilter.selectedSkillSlugs.filter(
        (ts) => ts !== skill.slug
      ),
    });
  }

  function handlePageButtonClicked(newPage: number) {
    setCurrentPage(newPage);

    const params = new URLSearchParams(window.location.search);

    if (newPage > 1) {
      params.set(PAGE_PARAM_NAME, newPage.toString());
    } else {
      params.delete(PAGE_PARAM_NAME);
    }

    window.history.replaceState(null, "", `?${params.toString()}`);
  }

  function handleProjectHover(project: Project | null) {
    if (project) {
      setHoverProjectUrl(project.url);
    } else {
      setHoverProjectUrl("");
    }
  }

  function handleFilterOptionsChanged(newFilter: ProjectFilterOptions) {
    handlePageButtonClicked(1);

    setProjectFilter(newFilter);

    const params = new URLSearchParams(window.location.search);

    if (newFilter.searchQuery)
      params.set(SEARCH_PARAM_NAME, newFilter.searchQuery);
    else params.delete(SEARCH_PARAM_NAME);

    params.delete(GROUP_PARAM_NAME);
    for (let groupSlug of newFilter.selectedGroupSlugs) {
      params.append(GROUP_PARAM_NAME, groupSlug);
    }

    params.delete(SKILL_PARAM_NAME);
    for (let skillSlug of newFilter.selectedSkillSlugs) {
      params.append(SKILL_PARAM_NAME, skillSlug);
    }

    window.history.replaceState(null, "", `?${params.toString()}`);
  }

  return (
    <>
      <ProjectFilter
        groups={groups}
        skillGroups={skillGroups}
        filter={projectFilter}
        onFilterOptionsChanged={handleFilterOptionsChanged}
      />

      {filteredProjects.length > 0 ? (
        <>
          <div ref={containerRef} className="h-0" />

          <div
            className={`sticky top-2 transition-all ${
              isTimelineStuck
                ? "border border-gray-400 border-2 bg-white py-2 px-3 drop-shadow-lg rounded-md z-50"
                : ""
            }`}
          >
            <ProjectTimeLine
              selectedProjectUrl={hoverProjectUrl}
              projects={filteredProjects}
              minYear={minYear}
              maxYear={maxYear}
            />
          </div>

          <ProjectGrid
            onProjectHover={handleProjectHover}
            onAddSkill={handleAddSkill}
            onRemoveSkill={handleRemoveSkill}
            projects={pagedProjects}
            selectedSkillSlugs={projectFilter.selectedSkillSlugs}
          />
          <Pagination
            currentPage={currentPage}
            pageCount={pageCount}
            onPageButtonClicked={handlePageButtonClicked}
          />
        </>
      ) : (
        <div className="flex justify-center items-center py-20">
          <p className="text-gray-500 text-lg">
            No projects match the selected filters 😕
          </p>
        </div>
      )}
    </>
  );
}
