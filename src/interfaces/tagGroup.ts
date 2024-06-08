import type { TagDetailed } from "./tag";

export interface TagGroup {
  name: string;
  slug: string;
}

export interface TagGroupDetailed extends TagGroup {
  tags: TagDetailed[];
}
