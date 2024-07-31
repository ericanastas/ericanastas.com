import { ResumeComponent } from "../../_components/resume-component";
import { SE_RESUME } from "../se-resume";

import "./print-styles.scss";
import { Company, Resume } from "@/interfaces/resume";
import PrintPageButton from "@/app/_components/print-page-button";
import { Metadata } from "next";

const baseUrl = "https://ericanastas.com";

function absUrl(url?: string): string | undefined {
  if (url) {
    let urlObj = new URL(url, baseUrl);
    return urlObj.toString();
  }
  return undefined;
}

export default async function ResumePrintPage() {
  let absoluteUrlResume: Resume = {
    contactInfo: SE_RESUME.contactInfo,
    education: SE_RESUME.education.map((e) => ({ ...e, url: absUrl(e.url) })),
    projects: SE_RESUME.projects.map((p) => ({ ...p, url: absUrl(p.url)! })),
    skills: SE_RESUME.skills.map((sg) => ({
      ...sg,
      skills: sg.skills.map((s) => ({ ...s, url: absUrl(s.url) })),
    })),
    workExperience: SE_RESUME.workExperience.map<Company>((c) => ({
      ...c,
      url: absUrl(c.url)!,
      positions: c.positions.map((p) => ({
        ...p,
        achievements: p.achievements.map((a) => ({ ...a, url: absUrl(a.url) })),
      })),
    })),
  };

  return (
    <>
      <main>
        <div className="print:hidden flex justify-end pb-10">
          <PrintPageButton />
        </div>
        <ResumeComponent resume={absoluteUrlResume} />
      </main>
    </>
  );
}

export const metadata: Metadata = {
  title: {
    absolute: "eric-anastas-resume",
  },
};
