import { BlobOptions } from "buffer";
import type { Tag } from "./tag";

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
};
