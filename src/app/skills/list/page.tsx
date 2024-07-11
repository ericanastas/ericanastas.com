import { getSkills } from "@/lib/projectsApi";

import PageTitle from "../../_components/page-title";
import Header from "../../_components/header";
import Footer from "../../_components/footer";
import { Metadata } from "next";
import Link from "next/link";

export default async function SkillListPage() {
  let allSkills = await getSkills();

  return (
    <>
      <Header />
      <main>
        <article className="mb-16 max-w-4xl mx-auto">
          <PageTitle>Skill List</PageTitle>

          <ul>
            {allSkills.map((skill) => (
              <li>
                <Link href={skill.url}>{skill.name}</Link>
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
  title: "Skills",
};
