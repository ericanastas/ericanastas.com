import type { Tag } from "../../interfaces/tag";
import Link from "next/link";

type Props = {
  tag: Tag;
};

export default function TagChip({ tag }: Props) {
  let className = `inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset text-nowrap`;

  if (tag.selected) className += " bg-blue-50 text-blue-700 ring-blue-700/10";
  else className += " bg-gray-50 text-gray-600 ring-gray-500/10";

  return (
    <Link href={tag.url}>
      <span className={className}>{tag.name}</span>
    </Link>
  );
}
