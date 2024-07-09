import { getSkillGroups } from "@/lib/projectsApi";

import PageTitle from "../_components/page-title";
import Header from "../_components/header";
import Footer from "../_components/footer";
import { Metadata } from "next";
import Link from "next/link";
import SkillChip from "../_components/skill-chip";

export default async function SkillsPage() {
  let allSkillGroups = await getSkillGroups(true);

  return (
    <>
      <Header />
      <main>
        <article className="mb-16 mx-auto">
          <PageTitle>Skills</PageTitle>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-x-4 gap-y-4">
            {allSkillGroups.map((skillGroup) => (
              <div key={skillGroup.name}>
                <h2 className="text-2xl font-bold mb-3">{skillGroup.name}</h2>

                <div className="flex flex-wrap gap-3 mb-10">
                  {skillGroup.skills.map((skill) => {
                    return (
                      <div
                        key={skill.slug}
                        className="flex lg:items-center lg:flex-row flex-col"
                      >
                        <Link key={skill.slug} href={skill.url}>
                          <SkillChip
                            textSize="lg"
                            badge={`${skill.projects?.length}`}
                            skill={skill}
                          />
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end">
            <dfn>
              <Link href={"/skills/timeline"} className="button not-italic">
                View Skills Timeline ...
              </Link>
            </dfn>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

export const metadata: Metadata = {
  title: "Skills",
};
