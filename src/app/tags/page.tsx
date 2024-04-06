import { getAllTags } from "@/lib/api";
import TagChipList from "../_components/tag-chip-list";

import PageTitle from "../_components/page-title";

export default async function Project() {
  let allTags = getAllTags();

  return (
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
  );
}
