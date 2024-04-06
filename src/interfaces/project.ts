import type { Tag } from "./tag";
import { Category } from "./category";
import type { Page } from "./page";

export interface Project extends Page {
  date: string;
  coverImage?: string;
  summary: string;
  tags: Tag[];
  featured?: boolean;
  category: Category;
}
