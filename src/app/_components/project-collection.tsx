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

  return (
    <>
      <ProjectTimeLine
        projects={projects}
        minYear={minYear}
        maxYear={maxYear}
      />
      <ProjectGrid
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
