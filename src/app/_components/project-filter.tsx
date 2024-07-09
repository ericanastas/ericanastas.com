"use client";
import Select from "react-select";
import type { MultiValue } from "react-select";
import type { SkillGroup } from "../../interfaces/skillGroup";
import type { Group } from "../../interfaces/group";
import type { ProjectFilterOptions } from "@/interfaces/projectFilterOptions";
import { useId, useState, useEffect } from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";

export type Props = {
  groups: Group[];
  skillGroups: SkillGroup[];
  filter: ProjectFilterOptions;
  onFilterOptionsChanged: (filter: ProjectFilterOptions) => void;
};

export default function ProjectFilter({
  groups,
  skillGroups,
  filter,
  onFilterOptionsChanged,
}: Props) {
  const groupOptions = groups.map((cat) => ({
    label: cat.name + " Projects",
    value: cat.slug,
  }));

  const skillGroupOptions = skillGroups.map((tg) => ({
    label: tg.name,
    options: tg.skills.map((t) => ({
      value: t.slug,
      label: t.name,
    })),
  }));

  const allSkillOptions = skillGroupOptions.reduce<
    { label: string; value: string }[]
  >((prev, curr) => [...prev, ...curr.options], []);

  let [filterState, setFilterState] = useState(filter);

  useEffect(() => {
    setFilterState(filter);
  }, [filter]);

  const selectedGroupOptions = groupOptions.filter((go) =>
    filterState.selectedGroupSlugs.some((s) => s == go.value)
  );

  const selectedSkillOptions = allSkillOptions.filter((to) =>
    filterState.selectedSkillSlugs.some((slug) => slug === to.value)
  );

  const [showClearButton, setShowClearButton] = useState<boolean>(false);

  useEffect(() => {
    if (
      filterState.searchQuery.length > 0 ||
      filterState.selectedSkillSlugs.length > 0 ||
      filterState.selectedGroupSlugs.length > 0
    ) {
      setShowClearButton(true);
    } else setShowClearButton(false);
  }, [filterState]);

  function onGroupSelectionChanged(
    newValue: MultiValue<{ label: string; value: string }>
  ) {
    let newFilter: ProjectFilterOptions = {
      ...filterState,
      selectedGroupSlugs: newValue.map((v) => v.value),
    };
    setFilterState(newFilter);
    onFilterOptionsChanged(newFilter);
  }

  function onSkillSelectionChanged(
    newValue: MultiValue<{ label: string; value: string }>
  ) {
    let newFilter: ProjectFilterOptions = {
      ...filterState,
      selectedSkillSlugs: newValue.map((v) => v.value),
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

  function handleClearFiltersClick() {
    let newFilter: ProjectFilterOptions = {
      searchQuery: "",
      selectedGroupSlugs: [],
      selectedSkillSlugs: [],
    };
    setFilterState(newFilter);
    onFilterOptionsChanged(newFilter);
  }

  return (
    <div className="flex flex-wrap gap-3 mb-4">
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
          options={groupOptions}
          placeholder="Filter by groups..."
          onChange={onGroupSelectionChanged}
          value={selectedGroupOptions}
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
          options={skillGroupOptions}
          placeholder="Filter by skills..."
          onChange={onSkillSelectionChanged}
          value={selectedSkillOptions}
          closeMenuOnSelect={false}
          menuShouldScrollIntoView={true}
          maxMenuHeight={800}
          menuPlacement="bottom"
          hideSelectedOptions={false}
        />
      </div>

      <div className="grow">
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
      {showClearButton && (
        <div className="relative w-32 h-9">
          <div
            onClick={handleClearFiltersClick}
            className="absolute button-light cursor-pointer flex justify-center items-center -top-[1px] bottom-0 left-0 right-0"
          >
            <XMarkIcon className="size-5" />
            Clear Filters
          </div>
        </div>
      )}
    </div>
  );
}
