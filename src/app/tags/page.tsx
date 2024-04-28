import { getAllTags } from "@/lib/projectsApi";
import TagChipList from "../_components/tag-chip-list";

import PageTitle from "../_components/page-title";
import Header from "../_components/header";
import Footer from "../_components/footer";
import { Metadata } from "next";

import TagChip from "../_components/tag-chip";
import { ProjectTimeLine } from "../_components/project-timeline";
import { getYearRange } from "@/lib/projectsApi";

export default async function Tags() {
  let allTags = await getAllTags();
  let yearRange = await getYearRange();

  let tagList = await getAllTags();

  return (
    <>
      <Header />
      <main>
        <article className="mb-16 max-w-4xl mx-auto">
          <div className="mb-12">
            <PageTitle>Tags</PageTitle>
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            <TagChipList tags={allTags.map((t) => t.tag)} />
          </div>

          <div className="grid grid-cols-3 gap-y-4 gap-x-1 grid-cols-[min-content_min-content_1fr]">
            {tagList.map((tag) => (
              <>
                <div className="flex justify-end">
                  <TagChip tag={tag.tag} />
                </div>
                <div className="text-xs inline-flex items-center">
                  {tag.projects.length}
                </div>

                <ProjectTimeLine
                  projects={tag.projects}
                  minYear={yearRange.minYear}
                  maxYear={yearRange.maxYear}
                />
              </>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

export const metadata: Metadata = {
  title: "Tags",
};
