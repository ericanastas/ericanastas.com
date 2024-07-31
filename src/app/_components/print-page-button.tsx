"use client";
import IconPrinterFill from "./icons/IconPrinterFill";

export default function PrintPageButton() {
  function handlePrintClick() {
    window.print();
  }
  return (
    <div
      onClick={handlePrintClick}
      className="button-dark px-3.5 py-2.5 flex items-center gap-2 cursor-pointer"
    >
      <IconPrinterFill />
      Print
    </div>
  );
}
