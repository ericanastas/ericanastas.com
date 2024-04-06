import type { Tag } from "./tag";
import { Category } from "./category";

export type Project = {
  slug: string;
  title: string;
  date: string;
  coverImage?: string;
  summary: string;
  content: string;
  draft?: boolean;
  tags: Tag[];
  featured?: boolean;
  url: string;
  category: Category;
  html: string;
};
