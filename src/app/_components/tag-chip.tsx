import type { Tag } from "../../interfaces/tag";
import Link from "next/link";

export default function TagChip({ tag, selected }: Tag) {
  let className = `relative grid select-none items-center whitespace-nowrap rounded-lg py-1 px-2 text-xs`;

  if (selected) className += " border border-gray-900 bg-gray-700 text-white";
  else className += " border border-gray-300 bg-gray-50";

  return (
    <Link href={`/tags/${tag}`}>
      <div className={className}>
        <span className="">{tag}</span>
      </div>
    </Link>
  );
}
