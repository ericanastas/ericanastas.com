import { getTags } from "@/lib/projectsApi";

import PageTitle from "../_components/page-title";
import Header from "../_components/header";
import Footer from "../_components/footer";
import { Metadata } from "next";
import Link from "next/link";

export default async function Tags() {
  let allTags = await getTags();

  return (
    <>
      <Header />
      <main>
        <article className="mb-16 max-w-4xl mx-auto">
          <div className="mb-12">
            <PageTitle>Tag List</PageTitle>
          </div>

          <ul>
            {allTags.map((tag) => (
              <li>
                <Link href={tag.url}>{tag.name}</Link>
              </li>
            ))}
          </ul>
        </article>
      </main>
      <Footer />
    </>
  );
}

export const metadata: Metadata = {
  title: "Tags",
};
