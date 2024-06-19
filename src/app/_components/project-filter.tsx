"use client";
import Select from "react-select";
import type { MultiValue } from "react-select";
import type { TagGroup } from "../../interfaces/tagGroup";
import type { Category } from "../../interfaces/category";
import type { ProjectFilterOptions } from "@/interfaces/projectFilterOptions";
import { useId, useState, useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export type Props = {
  categories: Category[];
  tagGroups: TagGroup[];
  filter?: ProjectFilterOptions;
  onFilterOptionsChanged: (filter: ProjectFilterOptions) => void;
};

export default function ProjectFilter({
  categories,
  tagGroups,
  filter = { searchQuery: "", selectedCategorySlugs: [], selectedTagSlugs: [] },
  onFilterOptionsChanged,
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

  let [searchQuery, setSearchQuery] = useState(filter.searchQuery);

  let [selectedCategoryOptions, setSelectedCategoryOptions] = useState(
    categoryOptions.filter((co) =>
      filter.selectedCategorySlugs.some((s) => s == co.value)
    )
  );

  const allTagOptions = tagOptions.reduce<{ label: string; value: string }[]>(
    (prev, curr) => [...prev, ...curr.options],
    []
  );

  let [selectedTagOptions, setSelectedTagOptions] = useState(
    allTagOptions.filter((to) =>
      filter.selectedTagSlugs.some((ts) => ts === to.value)
    )
  );

  useEffect(() => {
    let newFilter: ProjectFilterOptions = {
      searchQuery: searchQuery,
      selectedCategorySlugs: selectedCategoryOptions.map((o) => o.value),
      selectedTagSlugs: selectedTagOptions.map((o) => o.value),
    };
    onFilterOptionsChanged(newFilter);
  }, [searchQuery, selectedTagOptions, selectedCategoryOptions]);

  function onCategorySelectionChanged(
    newValue: MultiValue<{ label: string; value: string }>
  ) {
    setSelectedCategoryOptions((prev) =>
      newValue.map((v) => ({ label: v.label, value: v.value }))
    );
  }

  function onTagSelectionChanged(
    newValue: MultiValue<{ label: string; value: string }>
  ) {
    setSelectedTagOptions((prev) =>
      newValue.map((v) => ({ label: v.label, value: v.value }))
    );
  }

  function onSearchQueryChanged(event: any) {
    setSearchQuery((prev) => event.target.value);
  }

  return (
    <div className="flex gap-4 my-8">
      <div className="min-w-64">
        <Select
          instanceId={useId()}
          classNames={{
            groupHeading: (state) => "text-lg text-indigo-600",
            group: (state) => "text-lg text-indigo-600",
          }}
          styles={{
            groupHeading: (base) => ({ ...base, color: "red" }),
            group: (base) => ({ ...base, color: "red" }),
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
          onChange={onCategorySelectionChanged}
          value={selectedCategoryOptions}
          closeMenuOnSelect={false}
          menuShouldScrollIntoView={true}
          maxMenuHeight={800}
          menuPlacement="bottom"
        />
      </div>

      <div className="min-w-64">
        <Select
          instanceId={useId()}
          isMulti
          options={tagOptions}
          placeholder="Filter by tags..."
          onChange={onTagSelectionChanged}
          value={selectedTagOptions}
          closeMenuOnSelect={false}
          menuShouldScrollIntoView={true}
          maxMenuHeight={800}
          menuPlacement="bottom"
        />
      </div>

      <div>
        <div className="relative rounded-md">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon className="size-4 text-gray-900" />
          </div>
          <input
            type="text"
            name="price"
            id="price"
            className="block w-full rounded border-0  py-1.5 pl-9 pr-4 text-gray-900 ring-1 ring-neutral-400 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500"
            placeholder="Search..."
            onChange={onSearchQueryChanged}
            value={searchQuery}
          />
        </div>
      </div>
    </div>
  );
}
