import { getAllTags } from "@/lib/api";

import TagChip from "../_components/tag-chip";

export default async function Project() {
  let allTags = getAllTags();
  //let allTags = ["tag1"];

  return (
    <main>
      <article className="mb-16 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-10 text-center">
          Tags
        </h1>
        <div className="flex flex-wrap gap-2 justify-center">
          {allTags.map((tag) => (
            <TagChip tag={tag} />
          ))}
        </div>
      </article>
    </main>
  );
}
