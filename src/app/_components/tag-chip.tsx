import type { Tag } from "../../interfaces/tag";
import Link from "next/link";

type Props = {
  tag: Tag;
};

export default function TagChip({ tag }: Props) {
  let className = `inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-nowrap ring-1 ring-inset`;

  if (tag.selected) className += " bg-gray-400 text-white ring-gray-500";
  else className += " bg-gray-50 text-gray-600 ring-gray-200";

  return (
    <Link href={tag.url}>
      <span className={className}>{tag.name}</span>
    </Link>
  );
}
