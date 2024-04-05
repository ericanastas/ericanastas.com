import type { Tag } from "@/interfaces/tag";
import TagChip from "./tag-chip";

type Props = {
  tags: Tag[];
};

export default function TagChipList({ tags }: Props) {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((t) => (
        <TagChip tag={t} />
      ))}
    </div>
  );
}