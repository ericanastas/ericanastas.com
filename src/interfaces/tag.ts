import type { Project } from "./project";

export interface Tag {
  name: string;
  slug: string;
  url: string;
  groupName: string;
  projects?: Project[];
}
