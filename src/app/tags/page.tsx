import { getAllTags } from "@/lib/projectsApi";
import TagChipList from "../_components/tag-chip-list";

import PageTitle from "../_components/page-title";
import Header from "../_components/header";
import Footer from "../_components/footer";
import { Metadata } from "next";

export default async function Tags() {
  let allTags = await getAllTags();

  return (
    <>
      <Header />
      <main>
        <article className="mb-16 max-w-4xl mx-auto">
          <div className="mb-12">
            <PageTitle>Tags</PageTitle>
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            <TagChipList tags={allTags} />
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
