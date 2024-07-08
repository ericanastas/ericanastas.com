import DateFormatter from "./date-formatter";
import SkillChip from "./skill-chip";
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
        <div className="flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <Link key={t.slug} href={t.url}>
              <SkillChip key={t.slug} skill={t} />
            </Link>
          ))}
        </div>
      </div>

      <div className="flex justify-center my-6 font-size text-[18px]">
        {summary}
      </div>
    </>
  );
}
