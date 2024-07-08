import { getSkillGroups } from "@/lib/projectsApi";

import PageTitle from "../../_components/page-title";
import Header from "../../_components/header";
import Footer from "../../_components/footer";
import { Metadata } from "next";
import Link from "next/link";

import SkillChip from "../../_components/skill-chip";
import { ProjectTimeLine } from "../../_components/project-timeline";
import { getProjectsYearRange } from "@/lib/projectsApi";

export default async function SkillsPage() {
  let yearRange = await getProjectsYearRange();
  let allSkillGroups = await getSkillGroups(true);

  return (
    <>
      <Header />
      <main>
        <article className="mb-16 mx-auto">
          <PageTitle>Skills</PageTitle>

          {allSkillGroups.map((skillGroup) => (
            <>
              <h2 className="text-2xl font-bold mt-8">{skillGroup.name}</h2>

              <div className="flex flex-col">
                {skillGroup.skills.map((skill) => {
                  return (
                    <div
                      key={skill.slug}
                      className="flex lg:items-center lg:flex-row flex-col"
                    >
                      <div className="flex lg:justify-end lg:mr-1 lg:w-36 lg:mt-0 mt-6 lg:mb-0 mb-1">
                        <Link key={skill.slug} href={skill.url}>
                          <SkillChip skill={skill} />
                        </Link>
                      </div>

                      <div className="grow lg:mt-6">
                        <ProjectTimeLine
                          projects={skill.projects!}
                          minYear={yearRange.minYear}
                          maxYear={yearRange.maxYear}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ))}
        </article>
      </main>
      <Footer />
    </>
  );
}

export const metadata: Metadata = {
  title: "Skills",
};
