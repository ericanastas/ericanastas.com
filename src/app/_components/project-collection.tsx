"use client";

import { ProjectGrid } from "./project-grid";
import type { Project } from "@/interfaces/project";
import { ProjectTimeLine } from "./project-timeline";
import Pagination from "./pagination";
import { useState, useEffect, useRef } from "react";
import type { Tag } from "@/interfaces/tag";

export type Props = {
  projects: Project[];
  selectedTagSlugs?: string[];
  minYear?: number;
  maxYear?: number;
  onAddTag: (tag: Tag) => void;
  onRemoveTag: (tag: Tag) => void;
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
  selectedTagSlugs,
  minYear,
  maxYear,
  onAddTag,
  onRemoveTag,
}: Props) {
  const [currentPage, setCurrentPage] = useState(1);

  const [hoverProjectUrl, setHoverProjectUrl] = useState<string>("");

  const [pagedProjects, setPagedProjects] = useState<Project[]>([]);

  const [isTimelineStuck, setIsTimeLineStuck] = useState<boolean>(false);
  const containerRef = useRef(null);

  let intersectionCallBack: IntersectionObserverCallback = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    console.log("intersectionCallBack");

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
      console.log("observe");
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
  }

  function handleProjectHoverStart(project: Project) {
    setHoverProjectUrl(project.url);
  }
  function handleProjectHoverEnd(project: Project) {
    setHoverProjectUrl("");
  }

  return (
    <>
      <div ref={containerRef} className="h-1" />

      <div
        className={`sticky top-2 transition-all ${
          isTimelineStuck
            ? "border border-gray-400 border-2 bg-white py-4 px-4 drop-shadow-lg rounded-md z-50"
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
        onAddTag={onAddTag}
        onRemoveTag={onRemoveTag}
        projects={pagedProjects}
        selectedTagSlugs={selectedTagSlugs}
      />
      <Pagination
        currentPage={currentPage}
        pageCount={Math.ceil(projects.length / pageSize)}
        onPageButtonClicked={handlePageButtonClicked}
      />
    </>
  );
}
