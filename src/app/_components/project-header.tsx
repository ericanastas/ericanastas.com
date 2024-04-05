import DateFormatter from "./date-formatter";
import TagChipList from "./tag-chip-list";
import type { Tag } from "@/interfaces/tag";

import PageTitle from "./page-title";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  tags: Tag[];
};

export function ProjectHeader({ title, date, tags }: Props) {
  return (
    <>
      <PageTitle>{title}</PageTitle>

      <div className="mb-4 text-center">
        <DateFormatter dateString={date} />
      </div>
      <div className="mb-4 flex justify-center">
        <TagChipList tags={tags} />
      </div>
    </>
  );
}
