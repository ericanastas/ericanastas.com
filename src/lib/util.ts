import slugify from "slugify";
import { remark } from "remark";
import html from "remark-html";
import path from "path";

export function removeFileExtension(fileName: string): string {
  return fileName.substring(0, fileName.length - path.extname(fileName).length);
}

const slugifyOpt = { lower: true };

export function convertToSlug(value: string): string {
  return slugify(value, slugifyOpt);
}

export async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}
