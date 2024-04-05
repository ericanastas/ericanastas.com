import Link from "next/link";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import TagChipList from "./tag-chip-list";
import type { Tag } from "@/interfaces/tag";

type Props = {
  title: string;
  coverImage?: string;
  date: string;
  summary: string;
  slug: string;
  tags: Tag[];
};

export function ProjectPreview({
  title,
  coverImage,
  date,
  summary,
  slug,
  tags,
}: Props) {
  return (
    <div>
      <div className="mb-4">
        {coverImage && (
          <CoverImage slug={slug} title={title} src={coverImage} />
        )}
        {!coverImage && (
          <CoverImage
            slug={slug}
            title={title}
            src={"/images/placeholder.png"}
          />
        )}
      </div>

      <h3 className="text-3xl mb-1 leading-snug">
        <Link
          as={`/projects/${slug}`}
          href="/projects/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <div className="text-md mb-4">
        <DateFormatter dateString={date} />
      </div>

      <div className="mb-4">
        <TagChipList tags={tags} />
      </div>

      <p className="text-md leading-relaxed mb-8">{summary}</p>
    </div>
  );
}
