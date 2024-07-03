"use client";

import { ProjectGrid } from "./project-grid";
import type { Project } from "@/interfaces/project";
import { ProjectTimeLine } from "./project-timeline";
import Pagination from "./pagination";
import { useState, useEffect } from "react";
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
  const [page, setPage] = useState(1);

  const [hoverProjectUrl, setHoverProjectUrl] = useState<string>("");

  const [pagedProjects, setPagedProjects] = useState<Project[]>([]);

  useEffect(() => {
    setPagedProjects(getProjectsByPage(projects, page, pageSize));
  }, [page, projects]);

  useEffect(() => {
    setPage(1);
  }, [projects]);

  function handlePageChanged(newPage: number) {
    setPage(newPage);
  }

  function handleProjectHoverStart(project: Project) {
    setHoverProjectUrl(project.url);
  }
  function handleProjectHoverEnd(project: Project) {
    setHoverProjectUrl("");
  }

  return (
    <>
      <ProjectTimeLine
        selectedProjectUrl={hoverProjectUrl}
        projects={projects}
        minYear={minYear}
        maxYear={maxYear}
      />
      <ProjectGrid
        onMouseEnter={handleProjectHoverStart}
        onMouseLeave={handleProjectHoverEnd}
        onAddTag={onAddTag}
        onRemoveTag={onRemoveTag}
        projects={pagedProjects}
        selectedTagSlugs={selectedTagSlugs}
      />
      <Pagination
        page={page}
        pageCount={Math.ceil(projects.length / pageSize)}
        onPageSelected={handlePageChanged}
      />
    </>
  );
}
