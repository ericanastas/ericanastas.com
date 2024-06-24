import type { Tag } from "@/interfaces/tag";
import TagChip from "./tag-chip";

type Props = {
  tags: Tag[];
  selectedTagSlugs?: string[];
};

export default function TagChipList({ tags, selectedTagSlugs }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((t) => (
        <TagChip
          key={t.slug}
          tag={t}
          selected={selectedTagSlugs?.some((slug) => slug === t.slug)}
        />
      ))}
    </div>
  );
}
