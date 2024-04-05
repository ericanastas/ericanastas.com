import type { Tag } from "./tag";

export type Project = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  excerpt: string;
  content: string;
  draft?: boolean;
  tags: Tag[];
};
