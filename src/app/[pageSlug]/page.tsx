import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPages, getPage } from "@/lib/api";
import DraftAlert from "@/app/_components/draft-alert";
import { Content } from "@/app/_components/content";
import Header from "@/app/_components/header";
import Footer from "@/app/_components/footer";
import PageTitle from "../_components/page-title";

export default async function Page({ params }: Params) {
  const page = await getPage(params.pageSlug);

  if (!page) {
    return notFound();
  }

  return (
    <>
      <Header />
      <main>
        <article className="mb-16 max-w-4xl mx-auto">
          {page.draft && <DraftAlert />}
          <PageTitle>{page.title}</PageTitle>
          <Content html={page.html} />
        </article>
      </main>
      <Footer />
    </>
  );
}

type Params = {
  params: {
    pageSlug: string;
  };
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const page = await getPage(params.pageSlug);

  if (!page) {
    return notFound();
  }

  const title = `${page.title}`;

  return {
    title,
    openGraph: {
      title,
    },
  };
}

export async function generateStaticParams() {
  const pages = await getAllPages();

  return pages.map((page) => ({
    pageSlug: page.slug,
  }));
}
