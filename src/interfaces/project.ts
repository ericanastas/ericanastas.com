import type { Skill } from "./skill";
import { Category } from "./category";
import type { Page } from "./page";

export interface Project extends Page {
  /**Date of project in YYYY-MM-DD */
  date: string;

  /**URL to cover image */
  coverImage?: string;

  /**Short one or two sentence summary of project */
  summary: string;

  /**Tags */
  tags: Skill[];

  /**Project category */
  category: Category;

  /**Hide the project */
  hide?: boolean;

  /**Git repo slug*/
  repo?: string;
}
