import { getTagGroups, getProjects } from "@/lib/projectsApi";

import PageTitle from "../_components/page-title";
import Header from "../_components/header";
import Footer from "../_components/footer";
import { Metadata } from "next";
import Link from "next/link";

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
          <PageTitle>Tags</PageTitle>

          {allTagGroups.map((tagGroup) => (
            <>
              <h2 className="text-2xl font-bold mt-8">{tagGroup.name}</h2>

              <div className="flex flex-col">
                {tagGroup.tags.map((tag) => {
                  return (
                    <div className="flex lg:items-center lg:flex-row flex-col">
                      <div className="flex lg:justify-end lg:mr-1 lg:w-36 lg:mt-0 mt-6 lg:mb-0 mb-1">
                        <Link key={tag.slug} href={tag.url}>
                          <TagChip tag={tag} />
                        </Link>
                      </div>

                      <div className="grow lg:mt-6">
                        <ProjectTimeLine
                          projects={tag.projects!}
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
  title: "Tags",
};
