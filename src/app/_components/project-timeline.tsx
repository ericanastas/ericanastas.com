import type { Project } from "@/interfaces/project";

type Props = {
  minYear?: number;
  maxYear?: number;
  projects: Project[];
};

export function ProjectTimeLine({ projects, minYear, maxYear }: Props) {
  //Calc year range from projects
  let minProjectsYear: number = Math.min(
    ...projects.map((p) => new Date(p.date).getFullYear())
  );

  let maxProjectsYear: number = Math.max(
    ...projects.map((p) => new Date(p.date).getFullYear())
  );

  let startYear: number;
  let endYear: number;

  if (minYear !== undefined) {
    startYear = Math.min(minProjectsYear, minYear);
  } else startYear = minProjectsYear;

  if (maxYear !== undefined) {
    endYear = Math.max(maxProjectsYear, maxYear);
  } else endYear = maxProjectsYear;

  let years: number[] = [];

  for (let year = startYear; year <= endYear; year++) {
    years.push(year);
  }

  console.log(`startYear:${startYear}, endYear:${endYear}`);
  console.log(years);
  //0.5rem

  return (
    <div className="flex flex-row flex-nowrap flex-auto h-8">
      {years.map((year) => (
        <div className="grow relative">
          <div className="border-l absolute inset-0 -z-10" />
          <div className="text-xs mx-1 text-gray-z600 absolute bottom-0">
            {year}
          </div>
          <div
            className="absolute bg-red-300 w-0 inset-y-0"
            style={{ left: "0%" }}
          >
            <div className="bg-gray-600 w-2 h-2 rounded-full absolute top-1 ml-[-0.25rem]" />
          </div>
        </div>
      ))}
    </div>
  );
}
