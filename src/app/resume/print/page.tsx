import { ResumeComponent } from "../../_components/resume-component";
import Header from "../../_components/header";
import Footer from "../../_components/footer";
import { Metadata } from "next";

import { EA_RESUME } from ".././ea-resume";
import PageTitle from "../../_components/page-title";

export default async function ResumePage() {
  return (
    <>
      <Header />
      <main>
        <article>
          <PageTitle>Resume</PageTitle>
          <div className="mx-auto border border-gray-400 max-w-[815px] min-h-[1056px] shadow-sm p-8">
            <ResumeComponent resume={EA_RESUME} />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

export const metadata: Metadata = {
  title: "Resume",
};
