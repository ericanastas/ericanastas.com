import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { ProjectTitle } from "@/app/_components/project-title";

type Props = {
  title: string;
  coverImage: string;
  date: string;
};

export function ProjectHeader({ title, coverImage, date }: Props) {
  return (
    <>
      <ProjectTitle>{title}</ProjectTitle>
      <div className="hidden md:block md:mb-12"></div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6"></div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
}
