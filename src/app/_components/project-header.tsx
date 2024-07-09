import DateFormatter from "./date-formatter";
import SkillChip from "./skill-chip";
import type { Skill } from "@/interfaces/skill";

import PageTitle from "./page-title";
import { Group } from "@/interfaces/group";

import Link from "next/link";

type Props = {
  title: string;
  date: string;
  skills: Skill[];
  group: Group;
  summary: string;
};

export function ProjectHeader({
  title,
  date,
  skills,
  group: group,
  summary,
}: Props) {
  return (
    <>
      <PageTitle>{title}</PageTitle>

      <div className="mb-4 text-center">
        <Link className="hover:underline" href={group.url}>
          {group.name} Projects
        </Link>
        {" - "}
        <DateFormatter dateString={date} />
      </div>
      <div className="mb-1 flex justify-center">
        <div className="flex flex-wrap gap-1.5">
          {skills.map((t) => (
            <Link key={t.slug} href={t.url}>
              <SkillChip key={t.slug} skill={t} />
            </Link>
          ))}
        </div>
      </div>

      <div className="flex justify-center my-6 font-size text-[18px]">
        {summary}
      </div>
    </>
  );
}
