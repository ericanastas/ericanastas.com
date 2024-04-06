import { ProjectList } from "@/app/_components/project-list";
import { getAllProjects as getAllProjects } from "@/lib/api";
import PageTitle from "../_components/page-title";
import Header from "../_components/header";
import Footer from "../_components/footer";

export default function Projects() {
  const allProjects = getAllProjects();

  return (
    <>
      <Header />
      <main>
        <div className="mb-12">
          <PageTitle>Projects</PageTitle>
        </div>
        {allProjects.length > 0 && <ProjectList projects={allProjects} />}
      </main>
      <Footer />
    </>
  );
}
