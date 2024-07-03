import type { Tag } from "../../interfaces/tag";
import { PlusIcon, XMarkIcon } from "@heroicons/react/16/solid";

type Props = {
  tag: Tag;
  selected?: boolean;
  icon?: "Add" | "Remove";
};

export default function TagChip({ tag, selected, icon }: Props) {
  let className = `inline-flex flex items-center rounded-md px-1.5 py-1 text-xs font-medium text-nowrap ring-1 ring-inset`;

  if (selected) className += " bg-gray-500 text-white ring-gray-600";
  else className += " bg-gray-50 text-gray-600 ring-gray-400";

  let suffixIcon = null;

  if (icon) {
    switch (icon) {
      case "Add":
        suffixIcon = <PlusIcon height={16} width={16} />;
        break;
      case "Remove":
        suffixIcon = <XMarkIcon height={16} width={16} />;
        break;
      default:
        suffixIcon = null;
    }
  }

  return (
    <span className={className}>
      <div>{tag.name}</div>
      {suffixIcon}
    </span>
  );
}
