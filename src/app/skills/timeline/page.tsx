import { getSkillGroups } from "@/lib/projectsApi";

import PageTitle from "../../_components/page-title";
import Header from "../../_components/header";
import Footer from "../../_components/footer";
import { Metadata } from "next";
import Link from "next/link";

import SkillChip from "../../_components/skill-chip";
import { ProjectTimeLine } from "../../_components/project-timeline";
import { getProjectsYearRange } from "@/lib/projectsApi";

export default async function SkillsTimelinePage() {
  let yearRange = await getProjectsYearRange();
  let allSkillGroups = await getSkillGroups(true);

  return (
    <>
      <Header />
      <main>
        <article className="mb-16 mx-auto">
          <PageTitle>Skills Timeline</PageTitle>

          {allSkillGroups.map((skillGroup) => (
            <div key={skillGroup.name}>
              <h2 className="text-2xl font-bold mt-8">{skillGroup.name}</h2>

              <div className="flex flex-col gap-5">
                {skillGroup.skills.map((skill) => {
                  return (
                    <div
                      key={skill.slug}
                      className="flex lg:items-center lg:flex-row flex-col"
                    >
                      <div className="flex lg:justify-end lg:mr-2 lg:w-48 lg:mt-0 mt-8 lg:mb-0 mb-2">
                        <Link key={skill.slug} href={skill.url}>
                          <SkillChip textSize="md" skill={skill} />
                        </Link>
                      </div>

                      <div className="grow">
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
            </div>
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
