import { getProjects } from "@/lib/projectsApi";
import PageTitle from "../_components/page-title";
import Header from "../_components/header";
import Footer from "../_components/footer";
import { Metadata } from "next";
import Link from "next/link";

export default async function ReposPage() {
  const allProjects = await getProjects();
  const repoProjects = allProjects.filter((p) => p.repo);

  return (
    <>
      <Header />
      <main>
        <PageTitle>Git Repositories</PageTitle>

        <ul role="list" className="divide-y divide-gray-100">
          {repoProjects.map((project) => (
            <li className="flex justify-between gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4">
                <img
                  className="h-12 w-12 flex-none rounded-full bg-gray-50"
                  src="/images/github-mark.png"
                  alt=""
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    <Link href={project.url}>{project.title}</Link>
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    <Link href={project.repo!}>{project.repo}</Link>
                  </p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">
                  <Link className="hover:underline" href={project.group.url}>
                    {project.group.name} Projects
                  </Link>
                </p>
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  <time dateTime={project.date}>{project.date}</time>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}

export const metadata: Metadata = {
  title: "Repos",
};
