import type { Tag } from "../../interfaces/tag";
import Link from "next/link";

type Props = {
  tag: Tag;
};

export default function TagChip({ tag }: Props) {
  let className = `relative grid select-none items-center whitespace-nowrap rounded-lg py-1 px-2 text-xs`;

  if (tag.selected)
    className += " border border-gray-900 bg-gray-600 text-white";
  else className += " border border-gray-300 bg-gray-50";

  return (
    <Link href={`/tags/${tag.slug}`}>
      <div className={className}>
        <span className="">{tag.name}</span>
      </div>
    </Link>
  );
}
