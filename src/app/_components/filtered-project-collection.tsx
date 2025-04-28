"use client";
import { ProjectGrid } from "./project-grid";
import { ProjectTimeLine } from "./project-timeline";
import Pagination from "./pagination";
import { Project } from "../../interfaces/project";
import { Group } from "../../interfaces/group";
import { SkillGroup } from "../../interfaces/skillGroup";
import type { ProjectFilterOptions } from "@/interfaces/projectFilterOptions";
import ProjectFilter from "./project-filter";
import { useEffect, useState, useRef } from "react";
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

const PAGE_SIZE = 12;

function getProjectsByPage(
  projects: Project[],
  page: number,
  pageSize: number
) {
  return projects.slice(
    (page - 1) * pageSize,
    (page - 1) * pageSize + pageSize
  );
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

  const pageCount = Math.ceil(projects.length / PAGE_SIZE);

  page = Math.max(1, page);
  page = Math.min(pageCount, page);

  let [projectFilter, setProjectFilter] =
    useState<ProjectFilterOptions>(filter);

  const [currentPage, setCurrentPage] = useState(page);

  const [hoverProjectUrl, setHoverProjectUrl] = useState<string>("");

  const [pagedProjects, setPagedProjects] = useState<Project[]>([]);

  const [isTimelineStuck, setIsTimeLineStuck] = useState<boolean>(false);
  const containerRef = useRef(null);

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };

  let intersectionCallBack: IntersectionObserverCallback = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    const [entry] = entries;

    setIsTimeLineStuck(!entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(intersectionCallBack, options);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef, options]);

  useEffect(() => {
    setPagedProjects(getProjectsByPage(projects, currentPage, PAGE_SIZE));
  }, [currentPage, projects]);

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

  function handlePageButtonClicked(newPage: number) {
    setCurrentPage(newPage);
    onPageChanged(newPage);
  }

  function handleProjectHoverStart(project: Project) {
    setHoverProjectUrl(project.url);
  }
  function handleProjectHoverEnd(project: Project) {
    setHoverProjectUrl("");
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
              projects={projects}
              minYear={minYear}
              maxYear={maxYear}
            />
          </div>

          <ProjectGrid
            onMouseEnter={handleProjectHoverStart}
            onMouseLeave={handleProjectHoverEnd}
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
    </div>
  );
}
