import { getTagGroups, getProjects } from "@/lib/projectsApi";

import PageTitle from "../_components/page-title";
import Header from "../_components/header";
import Footer from "../_components/footer";
import { Metadata } from "next";

import TagChip from "../_components/tag-chip";
import { ProjectTimeLine } from "../_components/project-timeline";
import { getProjectsYearRange } from "@/lib/projectsApi";

export default async function Tags() {
  let yearRange = await getProjectsYearRange();
  let allTagGroups = await getTagGroups();
  let projects = await getProjects();

  return (
    <>
      <Header />
      <main>
        <article className="mb-16 max-w-4xl mx-auto">
          <div className="mb-12">
            <PageTitle>Tags</PageTitle>
          </div>

          {allTagGroups.map((tagGroup) => (
            <>
              <h2 className="text-2xl font-bold mb-4 mt-8">{tagGroup.name}</h2>
              <div className="grid grid-cols-3 gap-y-4 gap-x-1 grid-cols-[min-content_min-content_1fr]">
                {tagGroup.tags.map((tag) => {
                  let tagProjects = projects.filter((p) =>
                    p.tags.some((t) => t.slug === tag.slug)
                  );

                  return (
                    <>
                      <div className="flex justify-end">
                        <TagChip tag={tag} />
                      </div>
                      <div className="text-xs inline-flex items-center font-bold">
                        {tagProjects.length}
                      </div>

                      <ProjectTimeLine
                        projects={tagProjects}
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
