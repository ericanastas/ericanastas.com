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
      <p></p>
      <div className="mb-2">
        {coverImage && <CoverImage url={url} title={title} src={coverImage} />}
        {!coverImage && (
          <CoverImage url={url} title={title} src={"/images/placeholder.png"} />
        )}
      </div>

      <h3 className="text-2xl mb-1 leading-snug">
        <Link href={url} className="hover:underline">
          {title}
        </Link>
      </h3>

      <div className="flex justify-between text-md mb-2">
        <Link className="hover:underline" href={category.url}>
          {category.name} Projects
        </Link>
        <div>
          <DateFormatter dateString={date} />
        </div>
      </div>

      <div className="mb-4">
        <TagChipList tags={tags} />
      </div>

      <p className="text-md leading-relaxed mb-8">{summary}</p>
    </div>
  );
}
