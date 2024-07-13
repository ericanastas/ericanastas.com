"use client";

import { ResumeComponent } from "../../_components/resume-component";
import { AEC_RESUME } from "../aec-resume";

import IconPrinterFill from "@/app/_components/icons/IconPrinterFill";

import "./print-styles.scss";

export default async function ResumePage() {
  function handlePrintClick() {
    window.print();
  }

  return (
    <>
      <main>
        <div className="print:hidden flex justify-end pb-10">
          <div
            onClick={handlePrintClick}
            className="button-dark px-3.5 py-2.5 flex items-center gap-2 cursor-pointer"
          >
            <IconPrinterFill />
            Print
          </div>
        </div>
        <ResumeComponent resume={AEC_RESUME} />
      </main>
    </>
  );
}
