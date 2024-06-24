import { Project } from "./project";

export interface Category {
  name: string;
  slug: string;
  url: string;
  projects?: Project[];
}
