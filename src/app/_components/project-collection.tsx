"use client";

import { ProjectGrid } from "./project-grid";
import type { Project } from "@/interfaces/project";
import { ProjectTimeLine } from "./project-timeline";
import Pagination from "./pagination";
import { useState, useEffect, useRef } from "react";
import type { Skill } from "@/interfaces/skill";

export type Props = {
  projects: Project[];
  selectedSkillSlugs?: string[];
  page: number;
  minYear?: number;
  maxYear?: number;
  onAddSkill: (skill: Skill) => void;
  onRemoveSkill: (skill: Skill) => void;
  onPageChanged: (page: number) => void;
};

const pageSize = 12;

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

export default function ProjectCollection({
  projects,
  selectedSkillSlugs,
  page,
  minYear,
  maxYear,
  onAddSkill,
  onRemoveSkill,
  onPageChanged,
}: Props) {
  const pageCount = Math.ceil(projects.length / pageSize);

  page = Math.max(1, page);
  page = Math.min(pageCount, page);

  const [currentPage, setCurrentPage] = useState(page);

  const [hoverProjectUrl, setHoverProjectUrl] = useState<string>("");

  const [pagedProjects, setPagedProjects] = useState<Project[]>([]);

  const [isTimelineStuck, setIsTimeLineStuck] = useState<boolean>(false);
  const containerRef = useRef(null);

  let intersectionCallBack: IntersectionObserverCallback = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    const [entry] = entries;

    setIsTimeLineStuck(!entry.isIntersecting);
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
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
    setPagedProjects(getProjectsByPage(projects, currentPage, pageSize));
  }, [currentPage, projects]);

  useEffect(() => {
    setCurrentPage(1);
  }, [projects]);

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
        onAddSkill={onAddSkill}
        onRemoveSkill={onRemoveSkill}
        projects={pagedProjects}
        selectedSkillSlugs={selectedSkillSlugs}
      />
      <Pagination
        currentPage={currentPage}
        pageCount={pageCount}
        onPageButtonClicked={handlePageButtonClicked}
      />
    </>
  );
}
