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

  let minTime = new Date(startYear, 0, 1).getTime();
  let maxTime = new Date(endYear + 1, 0, 1).getTime();

  return (
    <div className="h-6 relative">
      <div className="absolute border-t inset-x-0 top-0 border-gray-300" />
      <div className="absolute inset-0 flex flex-row flex-no-wrap items-stretch">
        {years.map((year) => (
          <div key={year} className="grow relative border-l border-gray-300">
            <div className="text-[9px] lg:text-[12px] ml-[1px] text-gray-z600 absolute bottom-0">
              {year}
            </div>
          </div>
        ))}
      </div>

      {projects.map((project) => (
        <div className="absolute inset-0" key={project.url}>
          <div
            className="bg-gray-500 w-[0.4rem] h-[0.4rem] mt-[-0.2rem] ml-[-0.2rem] lg:w-[0.6rem] lg:h-[0.6rem] lg:mt-[-0.3rem] lg:ml-[-0.3rem] rounded-full absolute top-0  opacity-50 border border-1 border-solid border-gray-900"
            style={{
              left: `${
                ((Date.parse(project.date) - minTime) * 100) /
                (maxTime - minTime)
              }%`,
            }}
          />
        </div>
      ))}
    </div>
  );
}
