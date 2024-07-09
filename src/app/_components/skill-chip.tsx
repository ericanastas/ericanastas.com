import type { Skill } from "../../interfaces/skill";
import { PlusIcon, XMarkIcon } from "@heroicons/react/16/solid";

type Props = {
  skill: Skill;
  selected?: boolean;
  icon?: "Add" | "Remove";
  badge?: string;
  badgeInline?: boolean;
  textSize?: "xs" | "sm" | "md" | "lg";
};

export default function SkillChip({
  skill,
  selected,
  badge,
  icon,
  badgeInline = true,
  textSize = "xs",
}: Props) {
  let className = `relative inline-flex flex items-center rounded-md px-1.5 py-1 text-${textSize} font-medium text-nowrap ring-1 ring-inset`;

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

  let badgeClasses: string[] = [
    "rounded-md",
    "font-medium",
    "text-blue-500",
    "leading-none",
    "px-[4px]",
    "py-[2px]",
    "min-w-4",
    "bg-blue-50",
    "flex",
    "justify-center",
    "ml-1",
    "border",
    "border-blue-300",
  ];

  if (!badgeInline) {
    badgeClasses.push(...["absolute", "-right-1", "-bottom-3"]);
  }

  let badgeClassName = badgeClasses.join(" ");

  return (
    <span className={className}>
      <div>{skill.name}</div>
      {badge && <div className={badgeClassName}>{badge}</div>}
      {suffixIcon}
    </span>
  );
}
