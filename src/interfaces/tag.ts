import type { TagGroup } from "./tagGroup";
import type { Project } from "./project";

export interface Tag {
  name: string;
  slug: string;
  url: string;
  group: TagGroup;
}

export interface TagDetailed extends Tag {
  projects: Project[];
}
