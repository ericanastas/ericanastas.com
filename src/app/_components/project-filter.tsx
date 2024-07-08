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
  filter: ProjectFilterOptions;
  onFilterOptionsChanged: (filter: ProjectFilterOptions) => void;
};

export default function ProjectFilter({
  categories,
  tagGroups,
  filter,
  onFilterOptionsChanged,
}: Props) {
  const categoryOptions = categories.map((cat) => ({
    label: cat.name + " Projects",
    value: cat.slug,
  }));

  const tagGroupOptions = tagGroups.map((tg) => ({
    label: tg.name,
    options: tg.tags.map((t) => ({
      value: t.slug,
      label: t.name,
    })),
  }));

  const allTagOptions = tagGroupOptions.reduce<
    { label: string; value: string }[]
  >((prev, curr) => [...prev, ...curr.options], []);

  let [filterState, setFilterState] = useState(filter);

  useEffect(() => {
    setFilterState(filter);
  }, [filter]);

  const selectedCategoryOptions = categoryOptions.filter((co) =>
    filterState.selectedCategorySlugs.some((s) => s == co.value)
  );

  const selectedTagOptions = allTagOptions.filter((to) =>
    filterState.selectedTagSlugs.some((ts) => ts === to.value)
  );

  useEffect(() => {}, [filterState]);

  function onCategorySelectionChanged(
    newValue: MultiValue<{ label: string; value: string }>
  ) {
    let newFilter: ProjectFilterOptions = {
      ...filterState,
      selectedCategorySlugs: newValue.map((v) => v.value),
    };
    setFilterState(newFilter);
    onFilterOptionsChanged(newFilter);
  }

  function onTagSelectionChanged(
    newValue: MultiValue<{ label: string; value: string }>
  ) {
    let newFilter: ProjectFilterOptions = {
      ...filterState,
      selectedTagSlugs: newValue.map((v) => v.value),
    };
    setFilterState(newFilter);
    onFilterOptionsChanged(newFilter);
  }

  function onSearchQueryChanged(event: any) {
    let newFilter: ProjectFilterOptions = {
      ...filterState,
      searchQuery: event.target.value,
    };
    setFilterState(newFilter);
    onFilterOptionsChanged(newFilter);
  }

  return (
    <div className="flex flex-wrap gap-4 mb-4">
      <div className="grow min-w-64">
        <Select
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              border: state.isFocused ? "none" : "1px solid #A3A3A3", // default border color
              boxShadow: state.isFocused
                ? "inset 0 0 0 2px black"
                : "2 0 0 0 black", // no box-shadow
            }),
          }}
          instanceId={useId()}
          isMulti
          options={categoryOptions}
          placeholder="Filter by categories..."
          onChange={onCategorySelectionChanged}
          value={selectedCategoryOptions}
          closeMenuOnSelect={false}
          menuShouldScrollIntoView={true}
          maxMenuHeight={800}
          menuPlacement="bottom"
          hideSelectedOptions={false}
        />
      </div>

      <div className="grow min-w-64">
        <Select
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              border: state.isFocused ? "none" : "1px solid #A3A3A3", // default border color
              boxShadow: state.isFocused
                ? "inset 0 0 0 2px black"
                : "2 0 0 0 black", // no box-shadow
            }),

            groupHeading: (baseStyles, state) => ({
              ...baseStyles,
              fontWeight: "bold",
              color: "#4b5563",
              fontSize: "24",
              backgroundColor: "#e5e7eb",
              paddingBottom: 5,
              paddingTop: 5,
              textTransform: "none",
              margin: 0,
            }),
          }}
          instanceId={useId()}
          isMulti
          options={tagGroupOptions}
          placeholder="Filter by tags..."
          onChange={onTagSelectionChanged}
          value={selectedTagOptions}
          closeMenuOnSelect={false}
          menuShouldScrollIntoView={true}
          maxMenuHeight={800}
          menuPlacement="bottom"
          hideSelectedOptions={false}
        />
      </div>

      <div className="grow min-w-64">
        <div className="relative rounded-md">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon className="size-4 text-gray-900" />
          </div>
          <input
            type="text"
            name="searchQuery"
            id="searchQueryInput"
            className="block w-full rounded border-0 py-1.5 pl-9 pr-4 text-gray-900 ring-1 ring-neutral-400 placeholder:text-gray-400"
            placeholder="Search..."
            onChange={onSearchQueryChanged}
            value={filterState.searchQuery}
          />
        </div>
      </div>
    </div>
  );
}
