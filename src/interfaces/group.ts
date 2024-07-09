import { Project } from "./project";

export interface Group {
  name: string;
  slug: string;
  url: string;
  projects?: Project[];
}
