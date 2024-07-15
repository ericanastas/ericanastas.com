import { ResumeComponent } from "../_components/resume-component";
import Header from "../_components/header";
import Footer from "../_components/footer";
import { Metadata } from "next";

import { AEC_SE_RESUME } from "./aec-se-resume";
import PageTitle from "../_components/page-title";
import IconDownload from "../_components/icons/IconDownload";

export default async function ResumePage() {
  return (
    <>
      <Header />
      <main>
        <article>
          <PageTitle>Resume</PageTitle>
          <div className="print:hidden flex justify-center pb-4">
            <a href="/eric-anastas-resume.pdf">
              <div className="button-dark px-3.5 py-2.5 flex items-center gap-2 cursor-pointer">
                <div>
                  <IconDownload fontSize={24} />
                </div>
                <div>Download PDF</div>
              </div>
            </a>
          </div>
          <div className="mx-auto border border-gray-400 max-w-[816px] min-h-[1056px] shadow-sm p-[48px]">
            <ResumeComponent resume={AEC_SE_RESUME} />
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
