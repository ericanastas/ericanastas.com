"use client";

import Select from "react-select";
import type { TagGroupDetailed } from "../../interfaces/tagGroup";
import type { Category } from "../../interfaces/category";
import type { ProjectFilterOptions } from "@/interfaces/projectFilterOptions";
import { useState } from "react";

export type Props = {
  categories: Category[];
  tagGroups: TagGroupDetailed[];
  filter?: ProjectFilterOptions;
  onFilterOptionsChanged: (filter: ProjectFilterOptions) => void;
};

export default function ProjectFilter({
  categories,
  tagGroups,
  filter,
}: Props) {
  const categoryOptions = categories.map((cat) => ({
    label: cat.name + " Projects",
    value: cat.slug,
  }));

  const tagOptions = tagGroups.map((tg) => ({
    label: tg.name,
    options: tg.tags.map((t) => ({
      value: t.slug,
      label: t.name,
    })),
  }));

  return (
    <div className="flex gap-4 my-8">
      <div className="min-w-64">
        <Select
          styles={{
            input: (base) => ({
              ...base,
              "input:focus": {
                boxShadow: "none",
              },
            }),
          }}
          isMulti
          options={categoryOptions}
          placeholder="Filter by categories..."
        />
      </div>

      <div className="min-w-64">
        <Select isMulti options={tagOptions} placeholder="Filter by tags..." />
      </div>
      <div>
        <div className="relative rounded-md shadow-sm">
          <input
            type="text"
            name="price"
            id="price"
            className="block w-full rounded-md border-2 py-1.5 pl-7 pr-20 text-gray-900 placeholder:text-gray-400"
            placeholder="Search..."
          />
        </div>
      </div>
    </div>
  );
}
