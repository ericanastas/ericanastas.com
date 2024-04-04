import type { Tag } from "../../interfaces/tag";
import Link from "next/link";

export default function TagChip({ tag, selected }: Tag) {
  let className = `relative grid select-none items-center whitespace-nowrap rounded-lg py-1 px-2 text-xs`;

  if (selected) className += " bg-gray-700 text-white";
  else className += " border border-gray-400";

  return (
    <Link href={`/tags/${tag}`}>
      <div className={className}>
        <span className="">{tag}</span>
      </div>
    </Link>
  );
}
