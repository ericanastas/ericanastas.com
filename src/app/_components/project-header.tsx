import DateFormatter from "./date-formatter";
import TagChipList from "./tag-chip-list";
import type { Tag } from "@/interfaces/tag";

import PageTitle from "./page-title";
import { Category } from "@/interfaces/category";

import Link from "next/link";

type Props = {
  title: string;
  date: string;
  tags: Tag[];
  category: Category;
  summary: string;
};

export function ProjectHeader({ title, date, tags, category, summary }: Props) {
  return (
    <>
      <PageTitle>{title}</PageTitle>

      <div className="mb-4 text-center">
        <Link className="hover:underline" href={category.url}>
          {category.name} Projects
        </Link>
        {" - "}
        <DateFormatter dateString={date} />
      </div>
      <div className="mb-1 flex justify-center">
        <TagChipList tags={tags} />
      </div>

      <div className="text-md flex justify-center mb-4">{summary}</div>
    </>
  );
}
