import type { Project } from "./project";

export interface Skill {
  name: string;
  slug: string;
  url: string;
  groupName: string;
  projects?: Project[];
}
