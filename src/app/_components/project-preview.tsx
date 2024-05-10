import Link from "next/link";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import TagChipList from "./tag-chip-list";
import type { Tag } from "@/interfaces/tag";
import type { Project } from "@/interfaces/project";
import { Category } from "@/interfaces/category";

type Props = {
  title: string;
  coverImage?: string;
  date: string;
  summary: string;
  slug: string;
  tags: Tag[];
  url: string;
  category: Category;
};

export function ProjectPreview({
  title,
  coverImage,
  date,
  summary,
  slug,
  tags,
  url,
  category,
}: Props) {
  return (
    <div>
      <CoverImage url={url} title={title} src={coverImage} />

      <h3 className="text-xl mt-4 leading-snug">
        <Link href={url} className="hover:underline">
          {title}
        </Link>
      </h3>

      <div className="flex justify-between mb-2">
        <Link className="hover:underline" href={category.url}>
          {category.name} Projects
        </Link>
        <div>
          <DateFormatter dateString={date} />
        </div>
      </div>

      <div className="mb-2">
        <TagChipList tags={tags} />
      </div>

      <p className="text-sm leading-relaxed">{summary}</p>
    </div>
  );
}
