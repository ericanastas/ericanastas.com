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

  let zeroProjects: Project[] = [];

  return (
    <>
      <div className="relative pt-2">
        <div className="relative lg:h-8 h-12">
          <div className="absolute inset-0 flex flex-row flex-no-wrap items-stretch">
            {years.map((year) => (
              <div
                key={year}
                className="grow relative border-l border-t-2 border-gray-300"
              >
                <div className="absolute lg:rotate-0 lg:bottom-0 lg:left-1 -rotate-90 bottom-2 -left-1">
                  <p className="text-xs text-gray-600 ">{year}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute inset-0">
            {projects.map((project) => (
              <div
                key={project.url}
                className="absolute w-0 h-0 group bg-blue-600"
                style={{
                  left: `${
                    ((Date.parse(project.date) - minTime) * 100) /
                    (maxTime - minTime)
                  }%`,
                }}
              >
                <div className="absolute h-4 w-4 -left-2 -top-2 rounded-full border border-1 border-solid border-gray-900 group-hover:border-blue-900 bg-gray-400 group-hover:bg-gray-500 group-hover:opacity-100 opacity-50">
                  <Link
                    href={project.url}
                    className="absolute block bg-red-500 h-full w-full opacity-0"
                  ></Link>
                </div>

                <div className="absolute w-96 -left-48 -top-10 flex justify-center">
                  <div className="w-max hidden group-hover:block bg-gray-50 rounded-lg py-0.5 px-2 ring-1 ring-inset ring-gray-400">
                    <span className="leading-snug text-gray-600 text-sm">
                      {project.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
