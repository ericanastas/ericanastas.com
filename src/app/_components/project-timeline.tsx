import type { Project } from "@/interfaces/project";
import Link from "next/link";

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
    <>
      <div className="h-8 relative mt-8">
        <div className="absolute border-t inset-x-0 top-0 border-gray-300" />
        <div className="absolute inset-0 flex flex-row flex-no-wrap items-stretch">
          {years.map((year) => (
            <div key={year} className="grow relative border-l border-gray-300">
              <div className="text-[8px] lg:text-[12px] ml-[1px] text-gray-z600 absolute bottom-0">
                {year}
              </div>
            </div>
          ))}
        </div>

        {projects.map((project) => (
          <div className="absolute inset-0" key={project.url}>
            <div
              className="group relative w-[0.6rem] h-[0.6rem] mt-[-0.3rem] ml-[-0.3rem] lg:w-[1.0rem] lg:h-[1.0rem] lg:mt-[-0.5rem] lg:ml-[-0.5rem] top-0"
              style={{
                left: `${
                  ((Date.parse(project.date) - minTime) * 100) /
                  (maxTime - minTime)
                }%`,
              }}
            >
              <div className="absolute h-full w-full  rounded-full border border-1 border-solid border-gray-900 group-hover:border-blue-900 bg-gray-500 group-hover:bg-blue-500 group-hover:opacity-100 opacity-50" />

              <Link
                href={project.url}
                className="absolute block bg-red-500 h-full w-full opacity-0"
              ></Link>

              <div className="absolute w-max -top-9 hidden group-hover:block bg-gray-50  rounded-lg py-0.5 px-2 ring-1 ring-inset ring-gray-400 z-50">
                <span className="static leading-snug w-max text-gray-600">
                  {project.title}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
