import type { Page } from "@/interfaces/page";
import { join } from "path";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import process from "process";
import { markdownToHtml } from "./util";

import { removeFileExtension, convertToSlug } from "./util";

const pagesDirectory = join(process.cwd(), "_pages");

async function readPageFile(pageMdPath: string): Promise<Page> {
  let pageMdFileName = path.basename(pageMdPath);

  const pageSlug = removeFileExtension(pageMdFileName);

  if (pageSlug != convertToSlug(pageSlug)) {
    throw Error(
      `Page file name "${pageMdFileName}" does not match slugified version "${convertToSlug(
        pageSlug
      )}"`
    );
  }

  const fileContents = fs.readFileSync(pageMdPath, "utf8");
  const { data, content } = matter(fileContents);
  const html = await markdownToHtml(content || "");

  let { title, draft } = data;

  let url = `/${pageSlug}`;

  let page: Page = { content, html, slug: pageSlug, title, url, draft };

  return page;
}

export async function getPage(pageSlug: string): Promise<Page | null> {
  const pageMdFileName = pageSlug + ".md";
  const projectMdFilePath = path.join(pagesDirectory, pageMdFileName);

  let project = await readPageFile(projectMdFilePath);

  return project;
}

export async function getAllPages(): Promise<Page[]> {
  let pages: Page[] = [];

  let pageMdFileNames: string[] = fs.readdirSync(pagesDirectory);

  for (let pageMdFileName of pageMdFileNames) {
    let pageMdFilePath = path.join(pagesDirectory, pageMdFileName);
    let page = await readPageFile(pageMdFilePath);
    pages.push(page);
  }

  if (process.env.NODE_ENV === "production") {
    pages = pages.filter((p) => !p.draft);
  }

  return pages;
}
