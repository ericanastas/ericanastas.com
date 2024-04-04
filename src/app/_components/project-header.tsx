import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import TagChipList from "./tag-chip-list";
import type { Tag } from "@/interfaces/tag";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  tags: Tag[];
};

export function ProjectHeader({ title, date, tags }: Props) {
  return (
    <>
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
        {title}
      </h1>

      <div className="mb-4 text-center">
        <DateFormatter dateString={date} />
      </div>
      <div className="mb-4 flex justify-center">
        <TagChipList tags={tags} />
      </div>
    </>
  );
}
