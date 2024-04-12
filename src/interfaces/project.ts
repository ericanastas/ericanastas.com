import type { Tag } from "./tag";
import { Category } from "./category";
import type { Page } from "./page";

export interface Project extends Page {
  /**Date of project in YYYY-MM-DD */
  date: string;

  /**URL to cover image */
  coverImage?: string;

  /**Short one or two sentance summary of project */
  summary: string;

  /**Tags */
  tags: Tag[];

  /**Mark the project as featured to cause it to sort to the top */
  featured?: boolean;

  /**Project category */
  category: Category;

  /**Hide the project */
  hide?: boolean;

  /**Git repo slug*/
  repo?: string;
}
