import { getTagGroups, getProjects } from "@/lib/projectsApi";

import PageTitle from "../_components/page-title";
import Header from "../_components/header";
import Footer from "../_components/footer";
import { Metadata } from "next";

import TagChip from "../_components/tag-chip";
import { ProjectTimeLine } from "../_components/project-timeline";
import { getProjectsYearRange } from "@/lib/projectsApi";

export default async function TagsPage() {
  let yearRange = await getProjectsYearRange();
  let allTagGroups = await getTagGroups(true);

  return (
    <>
      <Header />
      <main>
        <article className="mb-16 mx-auto">
          <div className="mb-12">
            <PageTitle>Tags</PageTitle>
          </div>

          {allTagGroups.map((tagGroup) => (
            <>
              <h2 className="text-2xl font-bold mb-4 mt-8">{tagGroup.name}</h2>
              <div className="grid items-center	 grid-cols-2 gap-y-0 gap-x-1 grid-cols-[8rem_1fr]">
                {tagGroup.tags.map((tag) => {
                  return (
                    <>
                      <div className="flex justify-end mr-2">
                        <TagChip tag={tag} />
                      </div>

                      <ProjectTimeLine
                        projects={tag.projects!}
                        minYear={yearRange.minYear}
                        maxYear={yearRange.maxYear}
                      />
                    </>
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
  title: "Tags",
};
